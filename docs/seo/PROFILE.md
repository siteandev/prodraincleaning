# Business profile and hard rules

Paste nothing from this file into prompts. Prompts reference it by path.

## Facts

- Business: Pro Drain Cleaning Limited, site https://prodraincleaning.ca
- Market: Winnipeg, Manitoba, Canada, language en-CA
- Offer: 24/7 drain cleaning, main sewer line unclogging, restaurant and commercial drain cleaning, plumbing services, sump pump repair, emergency drain and plumbing service
- Phone and WhatsApp (canonical, use everywhere): +1 (204) 399-4413. Links: `tel:+12043994413`, `https://wa.me/12043994413`
- Email (canonical): prodraincleaningcentre@gmail.com
- Hours: open 24/7
- Service area: Winnipeg plus every community within about 100 km. Dedicated pages: Selkirk, St. Norbert, Headingley, Oak Bluff, Lorette, Niverville, Steinbach, Stonewall, East and West St. Paul. Others covered in lists only: Ile des Chenes, St. Adolphe, Oakbank, Dugald, Beausejour, Teulon, Gimli, Portage la Prairie, Morris, Carman
- Audience: homeowners, landlords and property managers, restaurants and commercial kitchens
- Conversion goal: phone call or WhatsApp first, form second. Everything else is secondary

## Hard content rules

- Never invent prices, statistics, licences, guarantees, superlatives, or services the business does not provide. Cost content says "confirmed upfront, before work starts".
- Services needing owner confirmation before any new content claims them: septic, slab leak detection, grease trap installation, vertical stack cleaning, water heater work. (Water heater posts and a backflow post already exist; do not extend them without confirmation.)
- Never name competing businesses. Do not target competitor brand queries.
- Never add `Review` or `AggregateRating` schema.
- No emoji anywhere on the site.
- Legal, tenancy, insurance and City-responsibility topics: describe what is "typical", say it varies, and point to the authority (Residential Tenancies Branch, the reader's insurer or broker, their condo declaration, the City of Winnipeg).
- Never criticise a named builder or contractor.
- Link to existing narrower pages instead of duplicating them. Where two pages could overlap, say which one owns the keyword (see `KEYWORD-MAP.md`).
- `[VERIFY]` never appears in reader-facing text. If a FAQ has no real answer, delete the question.

## Where things live in the code

| Thing | Location |
| --- | --- |
| Older blog posts (24 slugs) | `src/app/blog/[slug]/page.tsx`, object `basePosts` |
| Newer blog posts (7 slugs) | `src/lib/extraPosts.ts`. Body syntax is documented in `src/lib/richText.tsx` |
| Hand-built blog posts and service pages | `src/app/<slug>/page.tsx` with metadata in the sibling `layout.tsx` or inline `export const metadata` |
| Related posts | `relatedSlugs` only renders other **dynamic** posts (those in `basePosts` or `extraPosts`). Hand-built pages (for example the basement-drain, clogged-toilet and insurance posts) must be linked with an inline markdown link in `content`; a `relatedSlugs` entry for them is silently dropped. `scripts/seo-audit.py` flags this |
| Post fields | `src/lib/blogTypes.ts`: `metaTitle` (under about 60 chars), `metaDescription` (140-158), `quickAnswer` (40-60 words, answers the query directly), `faqs` (5 or more) |
| Dynamic posts: `<title>` | `metaTitle` or `title`; brand suffix added only if the total stays within 60 chars |
| Sitemap | `public/sitemap.xml` (hand-maintained; update `lastmod` when a page changes) |
| Redirects | `public/_redirects` |
| LLM and answer-engine summary | `public/llms.txt` |
| Sitewide schema | `src/lib/localServicesSchema.ts`, `src/lib/pageSchemas.ts`, `src/lib/serviceAreaSchema.ts` |
| Footer links | `src/components/Footer.tsx` |

## Before every push

1. `npm run build` passes.
2. `python3 scripts/seo-audit.py` shows no new problems.
3. Phone and email match the canonical values above; no emoji in changed files.
4. `public/sitemap.xml` parses and has no duplicate URLs.
