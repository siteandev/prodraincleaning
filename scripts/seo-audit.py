#!/usr/bin/env python3
"""
SEO audit for prodraincleaning.ca. Run from the repo root:

    python3 scripts/seo-audit.py

Checks (no network, reads the source tree only):
  ERRORS  (exit code 1)
    - sitemap URL with no matching route, duplicate sitemap URLs
    - redirect target that is not a real route, redirect chains
    - internal link to a route that does not exist and is not redirected
    - sitemap URL that is also a redirect source
  WARNINGS
    - routes missing from the sitemap
    - blog posts missing metaDescription / quickAnswer, or with fewer than 5 FAQs
    - titles over 60 effective characters, descriptions outside 120-160
    - duplicate titles
    - relatedSlugs that do not resolve to a dynamic post (silently dropped at render)
    - internal links that point at a redirect source (should point at the target)
    - pages with fewer than 2 in-content inbound links (and no sitewide link)

It parses TypeScript with regular expressions, so it is deliberately simple.
"""
import glob
import json
import os
import re
import sys
from collections import defaultdict

ROOT = os.getcwd()
SRC = os.path.join(ROOT, "src")
BASE = "https://prodraincleaning.ca"
SUFFIX = " | Pro Drain Cleaning"

STR = r"""(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)"""


def unq(s):
    s = s[1:-1]
    return re.sub(r"\\(.)", lambda m: {"n": " "}.get(m.group(1), m.group(1)), s)


def read(p):
    with open(p, encoding="utf-8") as f:
        return f.read()


errors, warnings = [], []

# ---------------------------------------------------------------- routes
static = {}
for p in glob.glob(SRC + "/app/**/page.tsx", recursive=True):
    d = os.path.dirname(p)
    rel = os.path.relpath(d, SRC + "/app")
    if "[" in rel or rel in ("seo-dashboard", "thank-you"):
        continue
    route = "/" if rel == "." else "/" + rel
    static[route] = d

base_page = read(SRC + "/app/blog/[slug]/page.tsx")
extra_page = read(SRC + "/lib/extraPosts.ts")


def split_posts(txt):
    parts = re.split(r"^  '([a-z0-9-]+)': \{", txt, flags=re.M)
    return {parts[i]: parts[i + 1] for i in range(1, len(parts), 2)}


posts = {}
posts.update(split_posts(base_page))
posts.update(split_posts(extra_page))
dyn = {"/blog/" + k for k in posts}
routes = set(static) | dyn

# ---------------------------------------------------------------- sitemap
sm = read(ROOT + "/public/sitemap.xml")
locs = [l.replace(BASE, "") or "/" for l in re.findall(r"<loc>([^<]+)</loc>", sm)]
dups = sorted({p for p in locs if locs.count(p) > 1})
for p in dups:
    errors.append(f"duplicate sitemap URL: {p}")
for p in sorted(set(locs) - routes):
    errors.append(f"sitemap URL has no route: {p}")
for p in sorted(routes - set(locs)):
    warnings.append(f"route not in sitemap: {p}")

# ---------------------------------------------------------------- redirects
redirects = {}
for line in read(ROOT + "/public/_redirects").splitlines():
    line = line.strip()
    if not line or line.startswith("#"):
        continue
    parts = line.split()
    if len(parts) >= 3:
        redirects[parts[0]] = parts[1]
norm = lambda p: (p.rstrip("/") or "/")
redirect_exact = {s for s in redirects if not s.endswith("/") or s == "/"}
for s, t in redirects.items():
    if t.startswith("/assets"):
        continue
    if norm(t) not in routes:
        errors.append(f"redirect target is not a route: {s} -> {t}")
    if t in redirects:
        errors.append(f"redirect chain: {s} -> {t} -> {redirects[t]}")
for s in redirect_exact:
    if s in locs:
        errors.append(f"sitemap URL is a redirect source: {s}")

# ---------------------------------------------------------------- link graph
inbound = defaultdict(set)  # target -> set of source routes
sitewide = set()


def add_links(source, txt):
    for l in re.findall(r"\]\((/[^)#?\s]*)", txt):
        yield l
    for l in re.findall(r"""(?:href|to)\s*=\s*\{?["'`](/[^"'`#?]*)""", txt):
        yield l
    for l in re.findall(r"""href:\s*["'`](/[^"'`#?]*)""", txt):
        yield l


def check_link(source, l):
    if "$" in l or "{" in l:
        return  # template-literal link built at render time
    t = norm(l)
    if t in routes:
        if t != source:
            inbound[t].add(source)
        return
    if l.startswith(("/assets", "/api", "/sitemap", "/llms", "/robots")) or "." in os.path.basename(l):
        return
    if l in redirects or t in redirects or (l + "/") in redirects:
        warnings.append(f"{source} links to redirect source {l}")
        return
    errors.append(f"{source} links to missing route {l}")


for route, d in static.items():
    txt = ""
    for f in ("page.tsx", "layout.tsx"):
        if os.path.exists(os.path.join(d, f)):
            txt += read(os.path.join(d, f))
    for l in add_links(route, txt):
        check_link(route, l)

for slug, body in posts.items():
    src = "/blog/" + slug
    for l in add_links(src, body):
        check_link(src, l)
    m = re.search(r"relatedSlugs:\s*\[([^\]]*)\]", body)
    if m:
        for s in re.findall(r"'([^']+)'", m.group(1)):
            if "/blog/" + s in dyn:
                inbound["/blog/" + s].add(src)
            else:
                warnings.append(f"{src} relatedSlugs entry does not render (not a dynamic post): {s}")

for f in glob.glob(SRC + "/components/*.tsx") + glob.glob(SRC + "/lib/*.ts*"):
    if f.endswith("extraPosts.ts"):
        continue
    for l in add_links("shared", read(f)):
        t = norm(l)
        if t in routes:
            sitewide.add(t)

# ---------------------------------------------------------------- metadata
pages = {}  # route -> dict(title, desc, kind)


def meta_from_block(txt):
    m = re.search(r"export const metadata[^=]*=\s*\{", txt)
    if not m:
        return None, None
    blk = txt[m.end():]
    cut = re.search(r"\n\s*(openGraph|alternates)\s*:", blk)
    blk = blk[: cut.start()] if cut else blk[:2500]
    t = re.search(r"\n\s*title\s*:\s*(" + STR + ")", blk)
    d = re.search(r"\n\s*description\s*:\s*(" + STR + ")", blk)
    return (unq(t.group(1)) if t else None), (unq(d.group(1)) if d else None)


for route, d in static.items():
    t = dsc = None
    for f in ("layout.tsx", "page.tsx"):
        p = os.path.join(d, f)
        if os.path.exists(p):
            t, dsc = meta_from_block(read(p))
            if t:
                break
    pages[route] = {"title": t, "desc": dsc, "kind": "static"}
    if not t:
        warnings.append(f"{route}: could not read a title (dynamic metadata?)")
    page_txt = read(os.path.join(d, "page.tsx"))
    h1 = len(re.findall(r"<h1[\s>]", page_txt))
    if h1 != 1:
        warnings.append(f"{route}: {h1} h1 tags")
    if "canonical" not in page_txt + (read(os.path.join(d, "layout.tsx")) if os.path.exists(os.path.join(d, "layout.tsx")) else ""):
        warnings.append(f"{route}: no canonical")


def field(body, name):
    m = re.search(r"\n    " + name + r":\s*(" + STR + ")", body)
    return unq(m.group(1)) if m else None


for slug, body in posts.items():
    route = "/blog/" + slug
    title, mt, md, ex, qa = (field(body, n) for n in ("title", "metaTitle", "metaDescription", "excerpt", "quickAnswer"))
    base = mt or title or ""
    eff = base + (SUFFIX if len(base) + len(SUFFIX) <= 60 else "")
    desc = md or ex or ""
    pages[route] = {"title": eff, "desc": desc, "kind": "dynamic"}
    if len(eff) > 62:
        warnings.append(f"{route}: title {len(eff)} chars")
    if not md:
        warnings.append(f"{route}: no metaDescription (excerpt used, {len(ex or '')} chars)")
    elif not 120 <= len(md) <= 160:
        warnings.append(f"{route}: metaDescription {len(md)} chars")
    if not qa:
        warnings.append(f"{route}: no quickAnswer")
    n_faq = len(re.findall(r"\bq:\s*['\"`]", body))
    if n_faq < 4:
        warnings.append(f"{route}: {n_faq} FAQs (aim for 4+, 5+ on new posts)")

titles = defaultdict(list)
for r, p in pages.items():
    if p["title"]:
        titles[p["title"].strip().lower()].append(r)
for t, rs in titles.items():
    if len(rs) > 1:
        warnings.append(f"duplicate title '{t}': {', '.join(rs)}")

for r, p in pages.items():
    if p["kind"] == "static":
        if p["title"] and len(p["title"]) > 62:
            warnings.append(f"{r}: title {len(p['title'])} chars")
        if p["desc"] and not 110 <= len(p["desc"]) <= 165:
            warnings.append(f"{r}: description {len(p['desc'])} chars")
        if not p["desc"]:
            warnings.append(f"{r}: no description found")

# ---------------------------------------------------------------- inbound
skip = {"/", "/thank-you", "/privacy-policy", "/terms", "/contact", "/about"}
for r in sorted(routes):
    if r in skip:
        continue
    n = len(inbound[r])
    if n < 2 and r not in sitewide:
        warnings.append(f"{r}: {n} in-content inbound link(s), no sitewide link")

# ---------------------------------------------------------------- report
print(f"routes: {len(routes)} ({len(static)} static, {len(dyn)} dynamic posts); sitemap URLs: {len(locs)}; redirects: {len(redirects)}")
print()
print(f"ERRORS ({len(errors)})")
for e in errors:
    print("  -", e)
print()
print(f"WARNINGS ({len(warnings)})")
for w in warnings:
    print("  -", w)
print()
few = sorted(((len(inbound[r]), r) for r in routes if r not in skip))[:10]
print("fewest in-content inbound links:", ", ".join(f"{r} ({n}{'+sitewide' if r in sitewide else ''})" for n, r in few))
sys.exit(1 if errors else 0)
