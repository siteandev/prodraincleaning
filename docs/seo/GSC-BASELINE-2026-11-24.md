# Search Console baseline, 24 Nov 2026

Source: Google Search Console, property `https://prodraincleaning.ca/`, Search type Web, last 3 months (27 Aug to 22 Nov 2026). Read directly from the live Performance and Page indexing reports. Position is average position. "Not provided" means the report did not show it to me.

## Site totals (3 months)

| Metric | Value |
| --- | --- |
| Clicks | 85 |
| Impressions | 30,300 |
| Average CTR | 0.3% |
| Average position | 45.3 |

Previous-period comparison: not pulled. Next month, set Compare to the previous 3 months and fill this in.

## Indexing

| Status | Pages |
| --- | --- |
| Indexed | 89 |
| Not indexed | 21 |
| of which Crawled, currently not indexed | 11 (validation failed) |
| of which Page with redirect | 6 (expected: old slugs that now redirect) |
| of which Not found (404) | 2 (URLs not shown to me) |
| of which Redirect error | 1 (URL not shown to me; the live redirects tested clean on 24 Nov, so this is likely stale) |
| of which Discovered, currently not indexed | 1 |

Action: in Search Console, open "Crawled - currently not indexed" and list the 11 URLs. Cross-check against `scripts/seo-audit.py` output. If they are thin or near-duplicate posts, they feed the cannibalization watchlist in `KEYWORD-MAP.md`.

## Pages: clicks and impressions (3 months)

| Page | Clicks | Impressions | Note |
| --- | --- | --- | --- |
| / | 15 | 1,241 | Best click-getter. Position 31.3 |
| /blog/emergency-drain-cleaning-winnipeg-24-7-complete-guide | 9 | 1,737 | Best post. Position 19.5 |
| /blog/rental-property-plumbing-manitoba-landlord-responsibilities | 6 | 124 | Position 4.5. PROTECT |
| /blog/drain-cleaning-winnipeg-cost-guide | 5 | 2,877 | Position 57.2 on average (mixed head terms) |
| /areas/drain-cleaning-selkirk | 5 | 597 | Best area page. Position 43.9 |
| /plumbing-services-winnipeg | 4 | 2,215 | Position 47.2 |
| /blog/does-home-insurance-cover-frozen-pipes-manitoba | 4 | 90 | Position 26.7 |
| /drain-cleaning-winnipeg | 3 | 4,080 | Position 65.4. Highest-impression page |
| /blog/basement-floor-drain-clogged-whats-wrong | 3 | 812 | Position 13.7. STRIKING DISTANCE (upgraded 24 Nov) |
| /contact | 3 | 197 | Position 83.4 |
| /blog/condo-plumbing-winnipeg-your-responsibility-or-condo-corporation | 3 | 94 | Position 35.4 |
| /blog/apartment-shared-line-clogs-winnipeg | 2 | 192 | Position 7.5. PROTECT |
| /blog/basement-drain-gurgling-when-toilet-flushes | 2 | 100 | Position 6.4. PROTECT |
| /blog/cast-iron-clay-pipes-older-winnipeg-homes | 2 | 66 | Position 4.7. PROTECT |
| /emergency-drain-plumbing-winnipeg | 1 | 1,720 | Service page; the guide post out-clicks it |
| /glossary | 1 | 1,089 | |
| /sump-pump-repair-winnipeg | 0 | 1,131 | Queries at position 23-33 |
| /areas/drain-cleaning-winnipeg | 0 | 6,049 | Old URL, now 301 to `/` (see below) |
| /areas/drain-cleaning-winnipeg/ | 0 | 983 | Same |
| /blog/frozen-pipes-winnipeg-how-to-thaw-safely | 0 | 678 | Position about 20. Seasonal (winter) |
| /restaurant-commercial-drain-cleaning-winnipeg | 0 | 638 | |
| /areas/drain-cleaning-stonewall | 0 | 539 | Impressions from "septic tank stonewall" style queries; not a service we offer |
| /main-sewer-line-unclogging-winnipeg | 0 | 488 | |
| /blog/bathtub-shower-draining-slowly | 1 | 204 | Position 8.1 (quick answer added 24 Nov) |

98 pages had impressions in total. The old `/areas/drain-cleaning-winnipeg` URL and several other redirected slugs still show impressions because Google has not finished dropping them. Expect those to fade over the next 4 to 8 weeks.

## Queries: striking distance (position 4 to 25, 10+ impressions)

| Query | Impressions | Position |
| --- | --- | --- |
| sump pump repair winnipeg | 280 | 23.2 |
| basement floor drain cleaning winnipeg | 269 | 20.4 |
| clogged basement drain winnipeg | 165 | 23.6 |
| clogged basement drain | 148 | 13.0 |
| sump pump replacement winnipeg | 126 | 24.4 |
| unclog basement drain winnipeg | 124 | 23.5 |
| winnipeg drain cleaning | 112 | 16.6 |
| grease trap cleaning winnipeg | 97 | 22.3 |
| vertical stack cleaning winnipeg | 80 | 21.0 |
| sewer backup winnipeg | 72 | 23.7 |
| plumber selkirk | 55 | 19.0 |
| plumbing companies winnipeg | 51 | 16.0 |
| water heater repairs | 46 | 9.7 |
| basement drain clogged | 43 | 15.0 |
| water heater replacement | 42 | 12.5 |
| commercial drain cleaning service | 40 | 23.3 |
| clogged floor drain | 38 | 18.8 |
| basement floor drain clogged | 32 | 8.2 |
| drain cleaning winnipeg prices | 31 | 9.1 |
| do i need professional drain cleaning for basement backups? | 30 | 6.2 |
| thawing drain pipes / how to thaw a frozen drain (cluster) | about 20-28 each | 19.7-25 |
| cost of drain cleaning in winnipeg | 15 | 5.0 |

## Queries: head terms (all position 30 or worse, 0 clicks)

| Query | Impressions | Position |
| --- | --- | --- |
| drain cleaning winnipeg | 701 | 30.3 |
| drain cleaning | 653 | 58.8 |
| drain cleaning services | 594 | 74.2 |
| drain cleaning near me | 523 | 53.6 |
| sewer drain | 401 | 29.6 |
| sewer cleaning winnipeg | 344 | 36.8 |
| emergency drain cleaning | 333 | 36.9 |
| emergency plumber winnipeg | 295 | 35.0 |

Queries with clicks: "pro drain cleaning" (2), "pro drain plumbing" (1), a competitor brand query (1, do not target), "emergency plumber selkirk" (1).

## Diagnosis

1. **Authority-limited, not markup-limited.** The site is about 3 months old. On-page work (titles, canonicals, schema, FAQs, internal links) is solid. Competitive head terms sit at position 30 to 75, which gives impressions but almost no clicks (0.3% CTR). More copy on those pages will not fix that. Links, citations, reviews and a verified Google Business Profile will.
2. **Niche, situation-based posts already work.** Rental duties, apartment shared lines, gurgling drains, cast-iron pipes and frozen-pipe insurance rank at positions 4 to 27 for low-volume queries and earn clicks. Protect them.
3. **The basement-drain and sump pump clusters are the nearest wins.** Several queries sit at position 13 to 25 with real impressions.
4. **Winter is here.** Frozen drain and frozen pipe queries are seasonal and sit around position 20. Both posts exist; keep them linked to each other and to the insurance post.
5. **Wasted impressions.** Septic and water-filtration queries in Stonewall, and competitor brand queries, bring impressions we cannot convert. Ignore them.
6. **Indexing:** 11 crawled-but-not-indexed pages need their URLs identified.

## What changed on 24 Nov 2026 as a result

See `CALENDAR.md` (Done column). Re-pull this report in 4 weeks and compare.
