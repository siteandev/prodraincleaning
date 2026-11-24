# The 10 prompts, tuned for prodraincleaning.ca

Same ten stages as the original system. What changed:

- `[BUSINESS PROFILE]` is gone. Every prompt starts with the same line: **Read `docs/seo/PROFILE.md` and `docs/seo/KEYWORD-MAP.md` first and follow them.**
- Prompts point at repo paths, not pasted text.
- Prompt 0 (strength gate) runs before 6, 7 and 8 so strong pages are left alone.
- Prompts 3 and 4 are one pass (SERP read and brief together), because the brief is only as good as the SERP read.
- Numbers are labelled MEASURED (from a Search Console or Keyword Planner export) or EST (judgment). Never invent a measured number.
- Local and answer-engine details are built in: Google Business Profile consistency, a 40-60 word quick answer on every post, Winnipeg-specific facts.

Run each stage in a fresh chat. Paste only what the stage names.

---

## Prompt 0: Strength gate (run before 6, 7, 8)

```
Read docs/seo/PROFILE.md, docs/seo/KEYWORD-MAP.md and docs/seo/README.md (strength-gate table).

INPUT: Search Console Pages and Queries, last 3 months vs previous 3 months [PASTE or read from the live report].

TASK
1. Put every page into one bucket: PROTECT, STRIKING DISTANCE, LOW CTR, AUTHORITY-LIMITED, NOT YET, DEAD. Show position, clicks, impressions and the rule that put it there.
2. For each STRIKING DISTANCE page, name the 3-5 queries it should win and the single biggest gap between the page and those queries.
3. For each AUTHORITY-LIMITED page, say what off-page action would help (links, citations, reviews, Google Business Profile). Do NOT propose rewriting the page.
4. List PROTECT pages. For these, propose only internal links in and out. No rewrites.

OUTPUT: one table (Page | Bucket | Position | Clicks | Impressions | Action), then "Pages we leave alone" as a list.

RULES: Use only numbers from the data. If a number is missing, write "not provided". Do not recommend changes to pages under 90 days old unless there is a technical fault.
```

## Prompt 1: Keyword research

```
Read docs/seo/PROFILE.md and docs/seo/KEYWORD-MAP.md.

INPUT
Seed topic: [TOPIC]
DATA: [Keyword Planner export scoped to Winnipeg, plus Search Console Queries. If none, write "none".]

TASK
1. List the 8-12 sub-topics a drain and sewer specialist in Winnipeg would say belong to the seed.
2. For each, generate keywords from these angles: head terms, long-tail, questions, problem phrases a homeowner types before they know the fix, commercial modifiers (cost, price, near me, 24 hour, emergency, best, company), local variants (Winnipeg plus the towns in PROFILE.md), property type (condo, rental, older home, restaurant), season (frozen, spring thaw).
3. For each keyword give: intent, funnel stage, lead potential (High/Med/Low for THIS business), best content type, and which existing page already owns it (from KEYWORD-MAP.md) or "none".
4. Volume and difficulty: use the export exactly. If no export, write EST High/Med/Low. Never invent exact numbers.
5. Mark quick wins: low competition, clear buying intent, fits a real service in PROFILE.md.
6. Mark keywords to SKIP with a one-line reason. Always skip: services the owner has not confirmed (PROFILE.md), competitor brands, unrelated Stonewall septic and water queries.

OUTPUT
A. Table: Keyword | Sub-topic | Intent | Funnel | Volume | Difficulty | Lead potential | Content type | Existing owner page
B. Top 15 quick wins, ranked, one sentence each
C. Skip list
D. 5 content ideas competitors probably miss

RULES: Minimum 100 keywords unless the niche is tiny. Merge plurals and word-order variants. Write keywords as a real person would type them. Business value beats raw volume.
```

## Prompt 2: Clustering and prioritization

```
Read docs/seo/PROFILE.md and docs/seo/KEYWORD-MAP.md.

INPUT
Keyword table: [PASTE output of Prompt 1]
Existing pages: already listed in KEYWORD-MAP.md and discoverable with `python3 scripts/seo-audit.py`
Capacity: [N posts per month]

TASK
1. Cluster by search intent, not shared words. Two keywords share a cluster only if one page could fully satisfy both searchers. If unsure, say which two keywords to compare in Google (same top-5 results means same cluster).
2. For each cluster: primary keyword, 3-10 secondary keywords, questions for H2/H3 and FAQ, page type.
3. Compare against existing pages. For each overlap say: update the owner page, merge, or create a new page with a different angle. Update KEYWORD-MAP.md accordingly.
4. Score each cluster 1-10: business value 40%, ranking ease 30%, volume 20%, supports a pillar 10%. Show sub-scores.
5. Build a calendar for the capacity. Service-intent and quick-win pages first, then supporting posts. Do not schedule anything for an unconfirmed service.

OUTPUT: cluster table, indented topical map (Pillar > Cluster > Supporting post), cannibalization actions, week-by-week calendar.

RULES: One primary keyword per page. Mark every estimate EST. Titles must be specific, not generic.
```

## Prompt 3+4: SERP read and content brief (one pass)

```
Read docs/seo/PROFILE.md and docs/seo/KEYWORD-MAP.md.

INPUT
Primary keyword: [KEYWORD] (secondary: [LIST]). Country/language: Canada, en-CA, Winnipeg.
Use web search: read the top 10 organic results for the keyword, the People Also Ask box, any featured snippet and AI Overview. If you cannot open a page, say so. Do not guess what a page contains.
Our first-hand material: [real job notes, photos, numbers, quotes, or "none"]
Conversion goal: phone call or WhatsApp.

PART A: SERP READ
1. Dominant intent and format Google prefers. Note mixed intent.
2. Table of the top results: URL | Type | Approx. words | Angle | Date | Strength | Weakness.
3. Table-stakes topics (appear in most results) and gaps (nobody does well: local angle, first-hand examples, current-year facts, tables, templates, camera or job photos).
4. SERP features and how to win them: featured snippet format, PAA, AI Overview and which sources it cites.
5. Can a 3-month-old local site realistically reach the top 5? What would it take?

PART B: BRIEF
1. Intent statement (one sentence: who, what they need, what state they are in).
2. 5 title options under 60 characters, keyword near the start, no clickbait. Mark the pick.
3. Meta description 140-158 characters: keyword, benefit, reason to click.
4. Quick answer: 40-60 words that answer the query directly (this becomes the `quickAnswer` field).
5. Outline H1 > H2 > H3. Under each: what to cover (specific points), proof element (step list, table, example), target words. Mark [UNIQUE] any section that adds something the top results lack.
6. 5-8 FAQs (from PAA, one-line answer direction) for the `faqs` field.
7. CTA plan: soft CTA after the first useful section, strong CTA at the end. Phone call and WhatsApp first.
8. Internal links: which existing pages to link to and which to receive links from, with anchor text. Use only real URLs from the repo.
9. Target word count and reading level (grade 7-9).

RULES: Every H2 must answer a real searcher question. Order sections the way the reader's questions arise. Do not pad.
```

## Prompt 5: Article generation (writes into the repo)

```
Read docs/seo/PROFILE.md. Read src/lib/blogTypes.ts, src/lib/richText.tsx and two existing posts in src/lib/extraPosts.ts to match the format.

INPUT
Brief: [PASTE Part B output]
Real inputs to use: [job notes, numbers, photos, or "none"]

TASK
Write the post as a new entry in `extraPosts` (src/lib/extraPosts.ts) with every field in BlogPost: title, metaTitle, metaDescription, category, readTime, date, updatedDate, excerpt, quickAnswer, serviceLink, serviceLinkText, relatedSlugs, faqs (5+), content.

WRITING RULES
1. Follow the outline. Open with the reader's problem, give the answer in the first 100 words, no "In today's world".
2. Every section holds a concrete element: a step, a decision rule, a mistake to avoid, a comparison, or a real example.
3. Primary keyword in the title, first 100 words, one H2 and the closing paragraph. Never force secondary keywords.
4. Sentences average under 20 words, paragraphs 3 sentences max, grade 7-9, active voice, "you" language.
5. Write from experience ("on a job we...") ONLY where Real inputs support it. Otherwise write as a neutral expert. Never fake experience.
6. No invented statistics, prices, quotes, studies or timelines. If a number is needed and was not supplied, describe it qualitatively or write the sentence without it.
7. Legal, insurance, tenancy and City topics follow the PROFILE.md rule: "typical", "varies", point to the authority.
8. Link to existing narrower pages instead of repeating them.
9. Banned: delve, landscape, realm, unlock, unleash, game-changer, navigate, "it's important to note", "in today's", elevate, robust, seamless, tapestry, embark, crucial, leverage. No filler summary line after every section.
10. Conclusion: 3-4 sentences, key takeaway plus phone or WhatsApp next step. No "In conclusion".

OUTPUT: the code edit, then a list of any claims you could not source so the owner can verify them. Add the URL to public/sitemap.xml and the llms.txt Guides list. Run `npm run build` and `python3 scripts/seo-audit.py`.
```

## Prompt 6: Edit and correct (strict editor)

```
Read docs/seo/PROFILE.md. Run `python3 scripts/seo-audit.py` first and fix anything it flags for this page.

TARGET: [slug or file path]. Primary keyword: [KEYWORD]. Only run this on pages that Prompt 0 put in STRIKING DISTANCE, or on new drafts. Never run it on PROTECT pages.

REVIEW IN THIS ORDER
1. Intent match: does the page answer the query fast and fully? Score 1-10.
2. Accuracy: list every factual claim, number, date, price, name. Mark each Verified-common-knowledge, Needs source, or Likely wrong. Do not invent corrections.
3. Information gain: where is it generic or padded? Where would a specific step, example or decision rule help?
4. Structure: heading logic, section order, walls of text, missing table or list.
5. AI-pattern check: robotic phrasing, repeated sentence openings, banned words from Prompt 5, empty summary lines.
6. Readability: sentences over 25 words, passive voice, jargon.
7. SEO: keyword in title, intro, one H2 and the closing paragraph; quick answer present and 40-60 words; FAQ quality; no stuffing.
8. Conversion: call and WhatsApp CTAs clear and well placed; any trust gap.
9. Grammar and consistency (Canadian English).

OUTPUT: scorecard, top 10 fixes ranked by impact, the edit applied to the repo, a short change log.

RULES: Keep real experience and all existing examples. Improve, do not rewrite for its own sake. Add no new statistics. Do not make the page longer unless content is genuinely missing. Cut fluff.
```

## Prompt 7: Competitor gap finder (striking-distance pages only)

```
Read docs/seo/PROFILE.md and docs/seo/KEYWORD-MAP.md.

TARGET: [our page path]. Primary keyword: [KEYWORD]. Current position: [from Search Console].
Use web search to read the pages currently ranking just above us (positions 1-10). If a page cannot be opened, say so.

TASK
1. Coverage matrix: every sub-topic, question and entity across our page and theirs. Mark Deep / Brief / Missing for each.
2. Extras they have that we do not: content, proof (original data, job photos, expert quotes), format (tables, checklists, calculators), freshness, schema, conversion elements.
3. Their weak spots we can exploit: outdated info, vague steps, no local angle, thin FAQ.
4. Where our page is already stronger. Keep those parts.
5. "Beat, don't match": how to do each gap about 10% better than the best competitor, in our own words.

OUTPUT: coverage matrix; gap table (Gap | Who has it | Impact | Effort | Our better version); top 10 actions by impact divided by effort; draft the 3 highest-impact sections and say where they go.

RULES: Never copy competitor sentences. Do not invent data. If a gap needs a real case study or job photo, say exactly what to collect. Never name a competitor on our site.
```

## Prompt 8: On-page and schema pack (verify, do not duplicate)

```
Read docs/seo/PROFILE.md.

NOTE: dynamic posts already get BlogPosting, FAQPage and BreadcrumbList schema, canonical, Open Graph and a quick-answer speakable block automatically from src/app/blog/[slug]/page.tsx. Hand-built pages carry their own schema. Verify rather than re-create.

TARGET: [path]. Primary keyword: [KEYWORD].

DELIVER
1. Title (3 options, under 60 characters, keyword first) and meta description (2 options, 140-158 characters, keyword, benefit, call-to-action verb). Mark the best of each. Skip if Prompt 0 marked the page PROTECT and the current ones are fine.
2. URL slug check (do not change a live URL unless it is clearly wrong; if you must, add a 301 in public/_redirects).
3. Heading audit: one H1, logical H2/H3, keyword or entity in at least 2 H2s.
4. Internal links: 5-10 out (anchor, target, sentence) and 3-5 existing pages that should link in. Use only real routes. Check with `python3 scripts/seo-audit.py` that no page is left with 0 inbound links.
5. External links: 2-4 authoritative sources by type (City of Winnipeg, Manitoba government, Residential Tenancies Branch, an insurer or broker association). I will supply the exact URL; do not invent URLs.
6. Schema: confirm the page's JSON-LD parses and matches the visible content. Never add Review or AggregateRating. LocalBusiness data comes from src/lib/localServicesSchema.ts; do not duplicate it on pages.
7. Answer-engine readiness: the direct answer is within the first 100 words; give 3 short quotable sentences (definition, key fact, key step) that an AI engine could lift.
8. Sitemap and llms.txt: update `lastmod` in public/sitemap.xml; add new pages to both.
9. Pre-publish checklist (yes/no): mobile readable, phone and WhatsApp present and correct, no emoji, no [VERIFY], build passes.
```

## Prompt 9: Conversion and reach

```
Read docs/seo/PROFILE.md.

TARGET: [page that gets traffic but few calls, from Search Console plus whatever call or WhatsApp data exists]
OFFER: flat price confirmed on site before work starts, 24/7, real technician answers. Do not state prices, guarantees or response times that are not already published on the site.

PART A: CONVERSION
1. What does a reader of this page need to believe before they call? List objections and doubts.
2. Three CTAs (soft, mid, strong): headline, one line of copy, button text, exact placement. Phone call and WhatsApp first.
3. Proof to place near the CTAs. Tell me what to collect if we do not have it (real job photos with permission, a genuine reviewed quote, certifications that exist).
4. Rewrite the intro and closing for urgency without hype.

PART B: REACH
5. 10 hooks from the page (mistake-based, question, before and after).
6. A Google Business Profile post (under 150 words) and a short post for Facebook or a Winnipeg neighbourhood group. A helpful answer first, link second.
7. 7-day distribution plan: which channel on which day.

RULES: No fake scarcity, no invented numbers, no guarantees we have not published. Match each channel's native style. Every item points back to the page or the phone number.
```

## Prompt 10: Monthly performance audit

```
Read docs/seo/PROFILE.md, docs/seo/KEYWORD-MAP.md and last month's docs/seo/GSC-BASELINE-*.md.

DATA: Search Console Pages and Queries, last 3 months vs previous 3 months (read the live report or paste an export). Page indexing summary. Output of `python3 scripts/seo-audit.py`.

ANALYSIS
1. KPIs: clicks, impressions, CTR, average position, current vs previous, % change.
2. Indexing: indexed vs not indexed, and the reasons. List the "Crawled - currently not indexed" URLs.
3. Apply the strength gate (Prompt 0) to every page.
4. Query opportunities: queries with high impressions where we rank 8-30; queries with no dedicated page; two pages sharing one query (cannibalization).
5. Growth check: compare with last month's baseline. State honestly whether the work is producing growth and the likely reasons. Account for seasonality (frozen pipes in winter, spring thaw) and Google updates, without claiming certainty.

OUTPUT
A. Five-bullet executive summary
B. KPI table
C. Page table: URL | Bucket | Clicks | Impressions | Position | Change | Action
D. Top 10 actions for next month, ranked by expected impact, each tagged with the prompt to run (0, 1-2, 3+4, 5, 6, 7, 8, 9)
E. New post ideas from query data
F. Save the result as docs/seo/GSC-BASELINE-<date>.md

RULES: Use only numbers in the data; write "not provided" for anything missing. Make no changes to pages under 90 days old unless there is a technical fault. Leave PROTECT pages alone.

HOW TO READ THE LIVE REPORT: in Search Console, Performance, Compare = previous 3 months. Pages and Queries tabs, rows per page = 100. Page indexing report for the not-indexed reasons.
```
