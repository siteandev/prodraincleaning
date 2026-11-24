# Plan and calendar

No publishing capacity was given. This plan assumes 2 new posts a month, and puts links, citations and indexing ahead of new content because that is what the data says is limiting (see `GSC-BASELINE-2026-11-24.md`).

## Done on 24 Nov 2026

| Change | Why |
| --- | --- |
| `/blog/basement-floor-drain-clogged-whats-wrong`: new step-by-step "How to unclog a basement drain" section, 2 new FAQs, 3 new internal links, fixed a mislabelled related link (sump pump) | Largest striking-distance cluster: about 800 impressions at position 13-24, 3 clicks. Queries like "unclog basement drain winnipeg" were answered only by one FAQ line |
| Quick-answer block and meta description added: sewer-line-repair-vs-replacement (289 impressions), bathtub-shower-draining-slowly, drain-smells-like-sewage, sewer-backup-what-to-do, kitchen-sink-keeps-clogging, backwater-valve-winnipeg, landlord-drain-maintenance-guide. Quick-answer added to toilet-wont-flush-troubleshooting | These had impressions but no direct-answer block (featured snippets, AI answers) and relied on the excerpt as the meta description |
| toilet-wont-flush-troubleshooting: dead related link (to a service page, silently dropped) replaced with the clogged-toilet post | Related link was not rendering |
| Gurgling and toilet-backs-up posts now link to the basement-drain owner page; frozen-drain post now links to the insurance post | Cluster internal linking |
| Sump pump page links to the spring-thaw readiness post | Cluster internal linking; page otherwise left alone because it is already strong |
| Footer: links to the local vs national chain comparison and to the `/areas` hub | Both pages had no sitewide or navigation link (the comparison page had no inbound links at all; the hub had one) |
| `public/sitemap.xml`: `lastmod` updated for changed pages | Freshness signal |
| Added `docs/seo/` and `scripts/seo-audit.py` | The system |

Backlog from `python3 scripts/seo-audit.py` (about 15 older posts still have no quick answer or meta description; most have under 30 impressions, so they are not urgent): do them as one batch with Prompt 6 after the 22 Dec review. One orphan to decide on: `/blog/how-pro-drain-cleaning-ranks-on-google-winnipeg` has no inbound links and is not in the sitemap.

Deliberately not touched: homepage, all service pages, area pages, the emergency guide post, and every niche post already ranking in the top 10 for its queries. Titles, meta, canonical and schema were already in good shape (verified by script).

## Next 8 weeks

| When | Task | Who |
| --- | --- | --- |
| Week 1 (24 Nov) | In Search Console, open "Crawled - currently not indexed" and send me the 11 URLs. Request indexing on the upgraded URLs | Owner |
| Week 1 | Confirm the Google Business Profile is verified, and that name, address, phone and website match the site exactly | Owner |
| Week 1 | Confirm whether these are real services: grease trap installation, vertical stack cleaning, water heater work, backflow valve work | Owner |
| Weeks 1-2 | Citations: Bing Places, Apple Business Connect, Yelp, YellowPages.ca and other Canadian directories, same name, address and phone everywhere | Owner or assistant |
| Weeks 2-4 | Reviews: ask real customers for Google reviews after each job. No incentives that break Google policy; never fabricate | Owner |
| Weeks 2-4 | Local links: home inspectors, realtors and property managers (they match the rental, buying and condo posts) | Owner |
| Week 3 | Validate the five gap topics in Keyword Planner (Winnipeg), then run Prompts 1-4 on the best two | Claude |
| Week 4 (22 Dec) | Re-pull Search Console, compare to the baseline, run Prompt 10, re-apply the strength gate | Claude |
| Jan | Run Prompts 3-6 and 8 for the two validated new posts, publish one per fortnight | Claude |
| Late Jan | Frozen drain and pipe posts: check position and clicks (winter peak) and refresh if needed | Claude |
| Feb 2027 (data for 22 Feb) | Decide whether the older spring-thaw post folds into the newer one; resubmit sump pump and spring posts ahead of melt | Claude |

## What would change this plan

- If the 11 not-indexed URLs are thin or duplicate posts, tighten or merge them before writing anything new.
- If head terms move into the top 20 after links and citations land, shift effort to the core service pages.
- If calls or WhatsApp taps are not rising as impressions grow, run Prompt 9 on the pages that get traffic.
