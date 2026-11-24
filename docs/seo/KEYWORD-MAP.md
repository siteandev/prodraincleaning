# Keyword map: one owner page per cluster

Built from the 24 Nov 2026 Search Console baseline (`GSC-BASELINE-2026-11-24.md`) and the page inventory. Volumes are not available here (no Keyword Planner export), so only Search Console impressions are used. Anything marked EST is a judgment, not a measurement.

Rule: one primary keyword per page, one owner page per cluster. Other pages in a cluster support the owner with internal links and do not target its primary keyword.

Status uses the strength-gate buckets in `README.md`.

## Clusters

| Cluster | Owner page | Primary keyword | Supporting pages | Status |
| --- | --- | --- | --- | --- |
| Core drain cleaning | `/` and `/drain-cleaning-winnipeg` (split by intent; see watchlist) | drain cleaning winnipeg | cost guide, clogged-drain post, area pages | AUTHORITY-LIMITED (position 30 on the home page; 58-75 on generic terms) |
| Emergency | `/emergency-drain-plumbing-winnipeg` | emergency plumber winnipeg | emergency drain guide post, emergency plumber guide post | AUTHORITY-LIMITED; the guide post out-clicks the service page |
| Main sewer line | `/main-sewer-line-unclogging-winnipeg` | sewer cleaning winnipeg | signs posts, tree roots, camera inspection, repair vs replacement | AUTHORITY-LIMITED (position 36.8) |
| Basement drains | `/blog/basement-floor-drain-clogged-whats-wrong` | basement floor drain clogged | gurgling, heavy-rain floor drain, toilet-backs-up-into-tub | STRIKING DISTANCE (upgraded 24 Nov) |
| Sump pumps | `/sump-pump-repair-winnipeg` | sump pump repair winnipeg | maintenance checklist, spring thaw posts | STRIKING DISTANCE at position 23-33 (page itself is strong; leave) |
| Commercial / grease | `/restaurant-commercial-drain-cleaning-winnipeg` | commercial drain cleaning winnipeg | grease line cleaning post, landlord guide | STRIKING DISTANCE (position 21-25 on grease trap queries) |
| Frozen drains and pipes (seasonal, Nov to Feb) | `/blog/frozen-pipes-winnipeg-how-to-thaw-safely` for pipes; `/blog/frozen-drain-winnipeg-how-to-thaw` for drains | how to thaw frozen pipes; how to thaw a frozen drain | insurance-coverage post, burst pipe post | STRIKING DISTANCE (position 18-25) |
| Cost | `/blog/drain-cleaning-winnipeg-cost-guide` | cost of drain cleaning in winnipeg | service pages | PROTECT for cost queries (position 5-9 on cost phrases) |
| Rental and multi-unit | `/blog/rental-property-plumbing-manitoba-landlord-responsibilities` | rental property plumbing manitoba | landlord guide, apartment shared line, condo post | PROTECT (position 4.5) |
| Older homes and pipes | `/blog/cast-iron-clay-pipes-older-winnipeg-homes` | cast iron clay pipes older homes winnipeg | clay-soil post, camera inspection post | PROTECT (position 4.7) |
| Home buying and renovating | `/blog/buying-old-house-winnipeg-plumbing-checklist` | buying old house plumbing checklist winnipeg | home inspection, first-time buyer, renovation posts | NOT YET / low impressions |
| Insurance | `/blog/does-home-insurance-cover-frozen-pipes-manitoba` | does home insurance cover frozen pipes manitoba | water damage claim post | PROTECT |
| Areas | `/areas/drain-cleaning-<town>` | drain cleaning <town> | `/areas` hub | Selkirk works (5 clicks); the rest NOT YET |
| Water heaters | `/blog/water-heater-replacement-winnipeg`, `/blog/water-heater-repair-winnipeg` | water heater replacement / repair winnipeg | none | Rank 10-13 on tiny volume. Owner has not confirmed the service; do not extend |

## Cannibalization watchlist

Do not merge or redirect anything on a hunch. Merge only when Search Console (Performance, filter by query, then look at the Pages tab) shows two URLs sharing impressions for the same query and neither is clearly winning. Check again after the next 4 weeks of data.

| Overlap | Pages | Current call |
| --- | --- | --- |
| Emergency | `/emergency-drain-plumbing-winnipeg`, emergency drain guide post, emergency plumber guide post | Keep all three. Service page owns "emergency plumber winnipeg"; the guides own "what to do" intent. Make sure both guides link up to the service page |
| Sewer signs | `/blog/signs-main-sewer-line-clogged`, `/blog/sewer-line-cleaning-winnipeg-signs-you-need-it`, `/main-sewer-line-unclogging-winnipeg` | Closest overlap on the site. If both posts show up for "signs of a clogged sewer line", merge the weaker into the stronger with a 301 |
| Spring thaw | `/blog/spring-thaw-basement-flooding-winnipeg`, `/blog/spring-thaw-flooding-sump-pump-winnipeg`, `/blog/sump-pump-maintenance-checklist` | Three posts, one season. Decide in Feb 2027 using spring-thaw search data whether the older post should fold into the newer one |
| Valve posts | `/blog/backwater-valve-winnipeg`, `/blog/backflow-valve-inspection-repair-winnipeg` | Same topic under two names. Owner: `backwater-valve-winnipeg` (the term Winnipeg uses). Check whether the backflow post earns its own queries; if not, fold in |
| Frozen | `/blog/frozen-pipes-winnipeg-how-to-thaw-safely`, `/blog/frozen-drain-winnipeg-how-to-thaw`, dead code `prevent-frozen-pipes-winnipeg` | Pipes vs drains is a real intent split, keep both. `prevent-frozen-pipes-winnipeg` is shadowed by a 301 in `_redirects`; harmless, can be deleted from `basePosts` later |
| Clogged drains | `/blog/clogged-drain-winnipeg-what-to-do`, `/blog/kitchen-sink-keeps-clogging`, `/drain-cleaning-winnipeg` | Different intents (general, kitchen, service). Keep |
| Landlords | `/blog/landlord-drain-maintenance-guide`, rental duties post, apartment post, condo post | Distinct angles. Rental duties owns the "responsibility" query; landlord guide owns "maintenance". Cross-linked 24 Nov |
| Clay | `/blog/cast-iron-clay-pipes-older-winnipeg-homes`, `/blog/winnipeg-clay-soil-sewer-line-effects` | Pipe material vs soil. Keep both |

## Do not chase

| Query type | Reason |
| --- | --- |
| septic tank stonewall, water filtration stonewall | Not services offered; 277+ impressions of pure noise |
| Competitor brand queries | Never target or name competitors |
| grease trap installation, vertical stack cleaning | Owner has not confirmed these as services (80 impressions on vertical stack at position 21). Ask the owner. If confirmed, add a section to the commercial page, not a new page |
| Water heater (more content) | Service not confirmed |

## Gaps worth validating before writing (EST, no volume data)

Validate each in Google Keyword Planner (Winnipeg only) before writing.

1. Sewer line cleaning cost Winnipeg (extends the cost cluster; the cost guide ranks position 5-9 on cost phrases)
2. Frozen sewer line or frozen main drain in winter (seasonal; builds on the two frozen posts)
3. Bathroom sink clogged Winnipeg (the post set covers tub, toilet, kitchen, laundry, floor drain but not bathroom sink)
4. How often to clean a restaurant grease line, if the commercial page does not already answer it
5. Drain cleaning for condos and strata (distinct from the ownership post)
