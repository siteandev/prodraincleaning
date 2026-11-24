# SEO operating system for prodraincleaning.ca

A tighter, repo-aware version of the 10-prompt SEO content system. Same ten stages, with three changes that make it faster and safer:

1. **One profile, not ten pastes.** Business facts and hard rules live in `PROFILE.md`. Every prompt in `PROMPTS.md` says "read `docs/seo/PROFILE.md`" instead of repeating it.
2. **No pasting articles.** Claude Code can read the repo, so prompts point at file paths (`src/lib/extraPosts.ts`, `src/app/...`) and the audit script, not pasted text.
3. **A strength gate before any edit (Step 0).** Pages that already perform are protected. Only weak or striking-distance pages get the full treatment. See below.

## Files

| File | Purpose |
| --- | --- |
| `PROFILE.md` | Business facts, hard content rules, where each kind of metadata lives in the code |
| `PROMPTS.md` | The 10 prompts, tuned for this site |
| `GSC-BASELINE-2026-11-24.md` | Real Search Console numbers: what ranks, what does not, indexing status |
| `KEYWORD-MAP.md` | One owner page per search cluster, status of each, cannibalization watchlist, do-not-chase list |
| `CALENDAR.md` | Next 8 weeks: content, off-page work, and review dates |
| `../../scripts/seo-audit.py` | Automated checks (routes vs sitemap vs redirects, metadata, quick answers, internal-link counts) |

## The monthly loop

Run once a month, in a fresh chat per stage.

1. Export Search Console (Pages and Queries, last 3 months vs previous 3 months). Run `python3 scripts/seo-audit.py` in the repo root.
2. **Prompt 10** (performance audit). Output: bucket for every page and the action list.
3. **Strength gate** (below) on that output.
4. For pages that pass the gate, run **Prompt 7** (gap analysis) and **Prompt 6** (edit), then **Prompt 8** (on-page pack).
5. For new topics, run **Prompt 1 and 2**, then **3 and 4**, then **5**, then 6 and 8.
6. **Prompt 9** only for pages that get traffic but no calls.
7. Commit, push, update `CALENDAR.md`, resubmit changed URLs in Search Console.

## Step 0: the strength gate

Classify each page from Search Console data before touching it. Position is the average position for the page's queries over the period.

| Bucket | Rule | What to do |
| --- | --- | --- |
| PROTECT | Position 1-5, or clicks growing, or top-10 on a niche query | Do not rewrite. Only add internal links into it and from it. Fix typos. |
| STRIKING DISTANCE | Position 6-25 with real impressions | Full treatment: Prompts 7, 6, 8. This is where effort pays. |
| LOW CTR | Position 1-10, CTR under about 3% | Rewrite title and meta only. |
| AUTHORITY-LIMITED | Strong on-page, but position 26+ on competitive head terms | Do not rewrite the page. The fix is off-page (links, citations, reviews, Google Business Profile). More copy will not move it. |
| NOT YET | Under 90 days old | Wait. Build internal links only. |
| DEAD | 90+ days, near-zero impressions | Merge, redirect, or rewrite for a different intent. |

The most important lesson from the first baseline: this site is **authority-limited**, not markup-limited. Titles, canonicals, schema, FAQs and internal links are already in good shape. The head terms sit at positions 30 to 75 because the domain is new. Do not burn effort re-tuning pages that only need time and links.

## Rules that never change

Read `PROFILE.md`. In short: no invented prices, stats, licences or services; no `Review` or `AggregateRating` markup; no competitor names; one canonical phone number; no emoji on site; legal, tenancy and insurance topics are framed as "typical" and point to the authority.
