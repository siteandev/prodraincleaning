import type { BlogPost } from './blogTypes';

/**
 * Additional blog posts rendered by src/app/blog/[slug]/page.tsx.
 *
 * Content rules for this site (do not break them when adding posts):
 * - Never invent prices, statistics, licences, guarantees or services.
 * - Legal / insurance / City-responsibility topics are framed as "typical" and point to the authority.
 * - Never name competing businesses. No Review / AggregateRating markup. No emoji.
 * - Canonical phone: +1 (204) 399-4413.
 *
 * Body syntax is documented in src/lib/richText.tsx.
 */
export const extraPosts: Record<string, BlogPost> = {
  'frozen-drain-winnipeg-how-to-thaw': {
    title: 'How to Thaw a Frozen Drain in Winnipeg: Shower, Sink, Floor Drain and Sewer Line',
    metaTitle: 'How to Thaw a Frozen Drain in Winnipeg (Safely)',
    metaDescription:
      'Drain frozen or draining slowly in a Winnipeg cold snap? How to thaw a frozen shower, sink or floor drain safely, what not to do, and when a sewer line needs a pro.',
    category: 'Winter Plumbing',
    readTime: 7,
    date: '2026-11-13',
    updatedDate: '2026-11-13',
    excerpt:
      'A frozen drain is not the same as a frozen water pipe. Here is how to tell which one you have, how to thaw a frozen drain safely, and when to stop and call.',
    quickAnswer:
      'To thaw a frozen drain, warm it gently and from the outside in: pour warm (not boiling) water slowly, or wrap the accessible pipe with warm towels, and let it work for several minutes. Never use an open flame, a torch, or chemical drain cleaner. If more than one drain is slow, a floor drain is backing up, or the problem is underground, stop and call a drain specialist.',
    serviceLink: '/drain-cleaning-winnipeg',
    serviceLinkText: 'drain cleaning in Winnipeg',
    relatedSlugs: ['sewer-backup-what-to-do', 'chemical-drain-cleaners-damage-pipes', 'what-not-to-flush'],
    faqs: [
      {
        q: 'How can I tell if my drain is frozen or just clogged?',
        a: 'A frozen drain usually shows up during or right after a hard cold snap, often in a fixture on an outside wall or near an unheated space, and it tends to start as a slow drain or gurgle before it stops. A normal clog is not tied to the weather. If the problem appears only when it is very cold and clears on a milder day, suspect frost.',
      },
      {
        q: 'Can I pour boiling water down a frozen drain?',
        a: 'No. Boiling water can crack cold porcelain and can soften or warp plastic drain pipe and fittings. Use warm water, poured slowly, or apply gentle heat to the outside of an exposed pipe.',
      },
      {
        q: 'Is it safe to use chemical drain cleaner or salt on a frozen drain?',
        a: 'We do not recommend it. Chemical cleaners do not thaw ice, they can sit in the pipe and make a later repair more hazardous, and they can damage pipe. If a drain is blocked by ice, heat is the answer, not chemicals.',
      },
      {
        q: 'A floor drain in my basement is backing up in winter. Is that frost?',
        a: 'It can be, but a floor drain that backs up is also the classic sign of a blocked main sewer line. Because the cost of guessing wrong is sewage in the basement, stop using water in the house and call us on +1 (204) 399-4413 so the line can be checked.',
      },
      {
        q: 'Does home insurance cover a frozen drain or pipe?',
        a: 'Policies differ a lot, especially on how a home was heated when the damage happened. Read your policy or ask your broker. Our guide to frozen-pipe coverage in Manitoba explains the questions to ask.',
      },
    ],
    content: `A frozen drain behaves differently from a frozen water pipe, and treating one like the other wastes time you may not have. A frozen supply pipe means no water comes out of the tap. A frozen drain means water goes in and does not go away, or goes down slowly with a gurgle. This guide is about the second problem, in Winnipeg homes where a hard cold snap can find the weak points in a drain system fast.

If your problem is no water at the tap, read our guide to [thawing frozen water pipes safely](/blog/frozen-pipes-winnipeg-how-to-thaw-safely) instead.

## How to tell a frozen drain from a regular clog

Frost is the likely cause when most of these are true:

- The drain was fine until a stretch of very cold weather, and it improves on a milder day.
- The fixture is on an exterior wall, in an addition, or near a cold crawl space, garage or unheated room.
- The drain first slowed down or gurgled before it stopped completely.
- Only one fixture or one small group of fixtures is affected.

If a toilet, tub and sink are all slow at the same time, or a basement floor drain is backing up, do not assume frost. That pattern normally points to the main sewer line. See [9 signs your main sewer line is clogged](/blog/signs-main-sewer-line-clogged).

## How to thaw a frozen shower, tub or sink drain

Work gently. The goal is to warm the ice, not shock the pipe.

1. Stop using the fixture and the drains connected to it, so more water does not freeze on top of the blockage.
2. If the drain trap or pipe is exposed (under a sink, for example), wrap it with towels soaked in warm water, and replace them as they cool.
3. For a shower or tub, pour warm water slowly into the drain in small amounts, then wait a few minutes between pours.
4. A hair dryer on a low setting, held at a safe distance from the pipe and kept away from standing water, can help on exposed pipe.
5. When water starts to move, run warm water for several minutes to flush out meltwater and keep the line open.

**What not to use:** an open flame, a propane torch, boiling water, or chemical drain cleaner. Flame is a fire hazard around wood framing and can damage plastic or soldered joints. Boiling water can crack cold porcelain and distort plastic pipe. Chemicals do not melt ice, and our guide on [chemical drain cleaners and your pipes](/blog/chemical-drain-cleaners-damage-pipes) explains why they make things worse.

## When the freeze is in a vent stack

Every drain system needs air. In cold weather, frost can build up inside the plumbing vent that comes out through the roof and narrow the opening. When that happens, drains may gurgle, drain slowly, or you may smell sewer gas indoors, even though the pipes under the fixtures are fine.

This is not a safe DIY job. It means working on a roof in winter. If you suspect a frosted vent, call a plumber instead of climbing up there.

## When a sewer line freezes or the blockage is underground

A buried sewer line that is frozen, or a line that has partly clogged and then iced up, is not something to thaw with a kettle. Signs include:

- A basement floor drain that is backing up or gurgling.
- Multiple fixtures slow at once.
- A sewage smell near a floor drain.
- Water standing in the lowest tub or shower when you flush a toilet upstairs.

Stop running water in the house right away. Every flush and every load of laundry adds volume to a line that has nowhere to go. Then call for help. A drain specialist can use a camera to see whether the line is iced up, rooted, collapsed or simply blocked, and clear it with the right equipment. Our guide to [what to do when sewage backs up in your basement](/blog/sewer-backup-what-to-do) covers the first steps.

## How to stop it happening again

- Keep heat reaching walls and spaces that have drains in them. Open vanity doors on exterior walls during a deep freeze.
- Seal drafts and gaps near drain lines in unheated spaces.
- Do not leave a drain unused for long periods in a cold, unheated part of the home.
- Do not pour grease down any drain. Grease narrows the pipe and gives frost an easier place to catch. See [what not to flush or pour down your drains](/blog/what-not-to-flush).
- Know where your main shutoff and your main sewer cleanout are before you need them.

For a winter checklist for your supply pipes, read our guide to [frozen pipes in Winnipeg](/blog/frozen-pipes-winnipeg-how-to-thaw-safely).

## When to stop and call

Call a drain specialist if any of the following is true:

- More than one drain is affected, or a floor drain is involved.
- You cannot reach the frozen section.
- You have thawed it once and it froze again.
- Water is coming up anywhere it should not.
- You smell sewage.

Pro Drain Cleaning answers 24 hours a day, 7 days a week across Winnipeg, Selkirk, Steinbach and every community within 100 km. Call or WhatsApp +1 (204) 399-4413, or learn more about [emergency drain and plumbing service in Winnipeg](/emergency-drain-plumbing-winnipeg).`,
  },

  'sewer-backup-who-to-call-first-winnipeg': {
    title: 'Sewage Backup in Winnipeg: Who Do You Call First, and Who Pays?',
    metaTitle: 'Sewer Backup in Winnipeg: Who to Call First & Who Pays',
    metaDescription:
      'Sewage backing up in your Winnipeg home? The order to call a plumber, 311 and your insurer, what the City says to do, and how responsibility is decided.',
    category: 'Sewer Backup',
    readTime: 8,
    date: '2026-11-13',
    updatedDate: '2026-11-13',
    excerpt:
      'Sewage in the basement is a three-call problem: a plumber to stop it, 311 to report it, and your insurer to start a claim. Here is the order and why.',
    quickAnswer:
      'If sewage is coming into your Winnipeg home: stop using water, then call a drain and sewer specialist to stop the backup and find where the blockage is. Report the flooding to 311 and contact your home insurer, ideally before cleanup. The City of Winnipeg tells residents with basement flooding to contact 311 and their insurance company. Who ultimately pays depends on the cause and where the blockage is, so document everything.',
    serviceLink: '/main-sewer-line-unclogging-winnipeg',
    serviceLinkText: 'main sewer line unclogging in Winnipeg',
    relatedSlugs: ['sewer-backup-what-to-do', 'backwater-valve-winnipeg', 'sewer-camera-inspection-before-buying-house'],
    faqs: [
      {
        q: 'Should I call my insurer, 311 or a plumber first?',
        a: 'If sewage is actively coming in, stop using water and call a drain and sewer specialist first, because they can stop the backup and tell you whether the blockage is in your line or further out. Then report it to 311 and contact your insurer. Do all three the same day.',
      },
      {
        q: 'What does the City of Winnipeg say to do after a basement flood?',
        a: 'The City of Winnipeg advises residents who encounter basement or overland flooding to contact 311 to report it, contact their home insurance company, and use recommended cleanup procedures from the Government of Canada, the Province of Manitoba and the Canadian Red Cross.',
      },
      {
        q: 'Is a sewer backup the homeowner’s problem or the City’s?',
        a: 'It depends on the cause and where the blockage is. Blockages in a home’s own sewer line are typically the homeowner’s responsibility; blockages or surcharging in the City’s system are different. The City says residents who believe they have a claim against it can file one. Confirm with the City and your insurer rather than assuming.',
      },
      {
        q: 'Should I clean up before the insurer or adjuster sees the damage?',
        a: 'Ask your insurer first. Many insurers want prompt notice and documentation. Take photos and video before anything is moved, keep damaged items if you are asked to, and do not throw things out until you know what your insurer needs.',
      },
      {
        q: 'Is sewage in the basement dangerous?',
        a: 'Yes. Sewage can carry bacteria and other contaminants. Keep children and pets out, avoid direct contact, and follow the cleanup guidance published by the Government of Canada and the Province of Manitoba.',
      },
    ],
    content: `When sewage starts coming up through a floor drain or toilet, the first hour matters more than anything else you do. The question most people ask is the one in the title: who do you call first? There are three calls to make, and the order is simple once you know what each one does.

This is general information, not legal or insurance advice. Policies and programs change, so confirm the details with the City of Winnipeg and your insurer.

## Step 0: stop adding water

Before any call, stop everything that sends water down the drains: do not flush, run the dishwasher or washing machine, or use showers and sinks. Every litre you add goes into a line that is already full. Keep people and pets out of the affected area, and stay clear of standing sewage.

## Call 1: a drain and sewer specialist

A plumber who does drain and sewer work can stop the backup and find out what is wrong. The most useful thing they establish is where the blockage is:

- **In your own line** (a root intrusion, grease, a collapsed section, a clog near your home).
- **Further out toward the City main**, which affects what you tell the City and your insurer.

A camera inspection of the line gives you evidence either way, and a written record of what was found is useful later. If you want to understand the process, read [what to do when sewage backs up in your basement](/blog/sewer-backup-what-to-do) and [why a camera inspection matters](/blog/sewer-camera-inspection-before-buying-house).

We answer 24/7 on +1 (204) 399-4413 for active sewer backups across Winnipeg and the surrounding 100 km.

## Call 2: 311

The City of Winnipeg's guidance for residents who encounter overland or basement flooding includes contacting 311 to report the flooding. Reporting it puts it on the City's radar, and the City says that if you believe you have a claim against it for damage to your property, you can file a claim.

The City also says that when its own sewer cleaning crews are working on your street, the work is done in selected neighbourhoods from April to November, and residents get a notice two days ahead. If sewage enters your home or an odour does not clear, its page tells residents to call 311 right away.

## Call 3: your home insurer

Contact your insurer the same day, and before cleanup if you can. Ask three things:

1. Does my policy include sewer backup coverage, and what is the limit and deductible?
2. What documentation do you want before I clean up or discard anything?
3. Do you have a preferred cleanup contractor, or can I choose my own?

Sewer backup is often an optional add-on rather than part of a basic policy, so do not assume you are covered or not covered. Read the wording or ask your broker. Our checklist on [documenting water damage for an insurance claim](/blog/water-damage-insurance-claim-plumbing-checklist) shows what adjusters typically want to see.

## So who actually pays?

Nobody can answer that from a headline, because it depends on facts:

- **Where the blockage is.** A blockage in your private sewer line is typically the homeowner's responsibility to clear and repair. A failure in the City's system is a different conversation.
- **What caused the backup.** Roots, grease and a collapsed pipe are line problems. Heavy rain overwhelming the sewer system is a different cause.
- **What protection you had.** On its flooding page, the City says homes without a backwater valve or sump pit drainage system are at greater risk of basement flooding, and that homes built after 1979 were required to have a backwater valve installed. See our guide to [backwater valves in Winnipeg](/blog/backwater-valve-winnipeg).
- **What your insurance policy says.** Coverage, limits and deductibles vary widely.

That is why evidence matters. A recorded camera inspection, photos of the water line, and a written description of the work done are what let you and your insurer work out which of those facts applies.

## What to document

- Photos and video of the affected area before anything is moved.
- A list of damaged items, with approximate age and value.
- The time you noticed the backup and every call you made, with names and reference numbers.
- Your plumber's written findings and any camera footage.

## Protect yourself next time

If this was not the first backup, do not treat it as bad luck. Ask for a camera inspection of the line, check that any backwater valve is clean and working, and consider scheduled cleaning if roots or grease are involved. Read [how often drains should be professionally cleaned](/blog/how-often-clean-drains) for a sensible schedule.

Sewage backing up right now? Call Pro Drain Cleaning on +1 (204) 399-4413 any time, day or night.`,
  },

  'floor-drain-backing-up-after-heavy-rain-winnipeg': {
    title: 'Water Coming Up Through the Basement Floor Drain After Heavy Rain in Winnipeg',
    metaTitle: 'Floor Drain Backing Up After Rain in Winnipeg: Causes',
    metaDescription:
      'Basement floor drain backing up after heavy rain in Winnipeg? Why it happens, what to check first, when it means a blocked line, and how a backwater valve fits in.',
    category: 'Basement Flooding',
    readTime: 7,
    date: '2026-11-13',
    updatedDate: '2026-11-13',
    excerpt:
      'A floor drain that backs up only when it rains is telling you something specific. Here is how to read the signs and what to do about it.',
    quickAnswer:
      'A floor drain that backs up after heavy rain usually means the sewer system or your home’s sewer line cannot handle the volume. The City of Winnipeg says basement flooding happens when heavy rain overwhelms the sewer system and wastewater backs up through house sewer lines into unprotected basements. If it also backs up on dry days, suspect a blocked line instead. Stop using water and call for a diagnosis.',
    serviceLink: '/emergency-drain-plumbing-winnipeg',
    serviceLinkText: '24/7 emergency drain service in Winnipeg',
    relatedSlugs: ['backwater-valve-winnipeg', 'spring-thaw-basement-flooding-winnipeg', 'sewer-backup-what-to-do'],
    faqs: [
      {
        q: 'Why does my basement floor drain back up when it rains hard?',
        a: 'Heavy rain can overwhelm the City’s sewer system. The City of Winnipeg explains that wastewater can then back up through house sewer lines and flow into basements that are not protected. A blocked or partly blocked line of your own makes it worse.',
      },
      {
        q: 'How do I know if it is the rain or a blocked sewer line?',
        a: 'If the drain backs up only during or just after heavy rain and is fine on dry days, rain and system capacity are the likely cause. If it backs up on dry days too, or toilets and tubs are slow as well, the line is probably blocked. A camera inspection settles it.',
      },
      {
        q: 'Will a backwater valve stop it?',
        a: 'A working backwater valve is designed to stop sewage flowing back into the house from the sewer. The City says homes without a backwater valve or sump pit drainage system are at greater risk. A valve needs to be checked and kept clean to work.',
      },
      {
        q: 'Is it OK to drain my sump pump into the floor drain?',
        a: 'No. The City of Winnipeg states that draining a sump pump into the floor drain is illegal and increases the risk of basement flooding for you and your neighbours, because the sewer system is designed for normal flows of wastewater, not sump pump water.',
      },
      {
        q: 'Is it an emergency?',
        a: 'If water is rising, or sewage is coming in, yes. Stop using water and call. If it was a small amount that has stopped, it still deserves a proper check before the next big rain.',
      },
    ],
    content: `You hear the rain, go downstairs, and find water coming up through the basement floor drain. It is one of the most stressful plumbing problems a Winnipeg homeowner can have, and it is also one of the most misunderstood. A floor drain that backs up after heavy rain is not behaving randomly. The pattern tells you a lot.

## Why a floor drain backs up when it rains

The City of Winnipeg describes it this way on its flooding page: basement flooding happens when the City's sewer system is overwhelmed by heavy rainfall, and wastewater backs up through house sewer lines and flows into basements that are not protected.

In plain terms, your basement floor drain is connected to the sewer line. When the main system is full, the water has to go somewhere, and the lowest opening in the house is often the floor drain. The City adds that homes without a backwater valve or a sump pit drainage system are at greater risk.

## Rain problem or blocked-line problem?

This is the question that decides what you do next.

| What you notice | What it usually points to |
| --- | --- |
| Backs up only during or just after heavy rain, fine on dry days | Sewer system capacity in a storm, or a missing or failed backwater valve |
| Backs up on dry days too | A blockage in your own sewer line |
| Toilets, tubs and sinks slow at the same time | Main sewer line blockage |
| Gurgling from the floor drain when you run the washer | Partial blockage in the line |
| Only the floor drain is affected, and it smells | A dry trap or a localized clog |

Many real cases are both: a line that is partly blocked by roots or grease fails first when the rain adds load. If you have had a backup before, do not assume it was only the weather.

## What to do while it is happening

1. Stop all water use in the house: no flushing, laundry, dishwasher or showers.
2. Keep people and pets away from the water, because it may contain sewage.
3. Do not try to open the main cleanout while water is high. Sewage can come out under pressure.
4. Move belongings off the floor if it is safe, and photograph the damage before moving anything.
5. Call a drain and sewer specialist. If water is rising or sewage is coming in, call right away on +1 (204) 399-4413.
6. Report the flooding to 311 and contact your insurer. Our guide on [who to call first and who pays after a sewage backup](/blog/sewer-backup-who-to-call-first-winnipeg) explains the order.

## What to check once the water is down

- **Is there a backwater valve?** The City says homes built after 1979 were required to have one installed, and that older homes may have had one added. A plumber can confirm what you have. Read about [backwater valves in Winnipeg](/blog/backwater-valve-winnipeg).
- **Is the valve clean and working?** The City recommends checking and maintaining the backwater valve and sump pit drainage system regularly.
- **Where does the sump pump discharge?** It must not drain into the floor drain, because the City says that is illegal and increases flood risk for you and your neighbours. See [your sump pump before spring thaw](/blog/sump-pump-maintenance-checklist).
- **Is the floor drain itself clogged?** Sand, silt and debris collect in floor drains. Our guide to [a clogged basement floor drain](/blog/basement-floor-drain-clogged-whats-wrong) covers the causes.
- **What is the line like?** A camera inspection shows roots, grease, sags or breaks, and gives you a record.

## How to lower the risk before the next storm

- Have the main sewer line cleaned if it has a history of roots or grease. See [tree roots in sewer lines](/blog/tree-roots-sewer-line-winnipeg).
- Make sure a backwater valve is installed and serviced, if your home is a candidate.
- Keep the area around floor drains clear, and raise appliances and stored items off the floor. The City suggests propping washers, dryers and freezers on blocks of wood, and storing belongings on shelves or in plastic totes rather than cardboard on the floor.
- Clear snow and debris away from the foundation, and keep street catch basins near you clear of leaves.
- Do not put grease, wipes or garbage in the drain. See [what not to flush](/blog/what-not-to-flush).

## When to call

Call if water has come up through a floor drain more than once, if it comes up on dry days, if more than one fixture is affected, or if you are not sure whether you have a backwater valve. We answer 24/7 across Winnipeg, Selkirk and the surrounding 100 km. Learn more about [main sewer line cleaning in Winnipeg](/main-sewer-line-unclogging-winnipeg) or [emergency drain service](/emergency-drain-plumbing-winnipeg).`,
  },

  'where-is-main-sewer-cleanout-winnipeg-house': {
    title: 'Where Is the Main Sewer Clean-Out in a Winnipeg House? (And What If It Is Buried)',
    metaTitle: 'Where Is the Main Sewer Cleanout in a Winnipeg House?',
    metaDescription:
      'How to find the main sewer cleanout in a Winnipeg home, what it looks like, why not to open it during a backup, and what to do if it is buried or missing.',
    category: 'Sewer Line',
    readTime: 6,
    date: '2026-11-13',
    updatedDate: '2026-11-13',
    excerpt:
      'The main sewer cleanout is the single most useful access point on your drain system. Here is how to find it, what it looks like, and what to do when you cannot.',
    quickAnswer:
      'The main sewer cleanout is a capped pipe, usually with a square or round plug, where your sewer line leaves the house. In many homes you will find it in the basement near the foundation wall where the line exits, or close to the main stack, or outside near the foundation. Do not remove the cap if drains are backed up, because sewage can flow out. If you cannot find one, a plumber can locate or install one.',
    serviceLink: '/main-sewer-line-unclogging-winnipeg',
    serviceLinkText: 'main sewer line cleaning in Winnipeg',
    relatedSlugs: ['signs-main-sewer-line-clogged', 'sewer-camera-inspection-before-buying-house', 'tree-roots-sewer-line-winnipeg'],
    faqs: [
      {
        q: 'What does a main sewer cleanout look like?',
        a: 'Usually a short length of pipe, often 3 to 4 inches across, ending in a threaded cap or plug with a raised square or round nut on top. It may be at floor level in the basement, on the wall just above the floor, or in a covered box outside.',
      },
      {
        q: 'Is it safe to open the cleanout myself?',
        a: 'Not if water is backed up. The cleanout is a direct opening into the sewer line, and if the line is full, sewage will come out under pressure. If you are not sure, leave it closed and call a professional.',
      },
      {
        q: 'What if my house has no visible cleanout?',
        a: 'Some older homes never had one, or it has been covered by a finished wall or floor. A plumber can look for it, access the line another way, such as through a toilet or the roof vent, and can often install a proper cleanout so future cleanings are simple.',
      },
      {
        q: 'Why does it matter where the cleanout is?',
        a: 'A cleanout lets a technician put cleaning equipment or a camera directly into the main line, which usually makes clearing a blockage faster and cleaner, and makes a camera inspection possible.',
      },
      {
        q: 'Should I buy a house without knowing where the cleanout is?',
        a: 'It is worth asking before you buy. Ask the seller, and consider a sewer camera inspection as part of your due diligence on an older home.',
      },
    ],
    content: `If a drain ever backs up badly, the main sewer cleanout is where a professional will want to start. It is a simple fitting, and knowing where it is saves time, and sometimes money, when a drain problem is at its worst. Most homeowners have never looked for it. Here is how to find it in a typical Winnipeg house.

## What a main sewer cleanout is

A cleanout is a capped opening on your sewer line. It lets someone put a drain cleaning cable, a hydro jetting hose or a camera straight into the main line without going through a toilet or pulling a fixture. The cap is threaded, and most have a raised square or round nut on top so a wrench can turn them.

## Where to look inside the house

The main line leaves the house through the foundation, and the cleanout is usually somewhere near that exit.

- **Near the front foundation wall.** Look at the basement wall facing the street, close to where the sewer line goes out.
- **Near the main stack.** Find the large vertical pipe that carries waste down from the upper floors, usually near a bathroom, and look at its base.
- **Near the floor drain or the laundry area.** Cleanouts are often placed close to the main drain or the laundry standpipe.
- **In a floor box or behind an access panel.** Some are flush with the floor or hidden behind a small cover.

You are looking for a short pipe, usually 3 to 4 inches across, with a plug in the end. Do not confuse it with the floor drain grate itself or with a smaller cleanout on a branch line.

## Where to look outside

Walk the foundation on the street side of the house. Look for a capped pipe in the ground or a small cover near the foundation wall, sometimes in a shrub bed or beside a step. Some are buried a few inches below the surface and are only found by following the line from the house. A plumber with a locator can find them without digging blind.

## Do not open it when the drains are backed up

This is the most important point. If water is already standing in a floor drain or a tub, the line is full. Removing the cap lets the contents of the line flow out, and it will not stop until the level drops to the height of the opening. That means sewage on your floor.

If you suspect a blockage, leave the cap on and call. Our guide on [the signs your main sewer line is clogged](/blog/signs-main-sewer-line-clogged) shows how to confirm the problem without opening anything.

## What if it is buried, covered or missing?

It happens often in older homes. A cleanout may have been drywalled over, covered by a finished floor, buried under a patio, or never installed. Your options:

- Ask previous owners, or look at any plumbing drawings or inspection reports you have.
- Have a plumber trace the line and locate where it exits.
- Have a technician reach the line another way, for example through a toilet or a roof vent, for the first cleaning.
- Ask about installing a proper cleanout during or after the cleaning. It makes every future cleaning and camera inspection easier.

If your home is older, the pipe material and the clay soil that surrounds it also matter. See [cast iron and clay pipes in older Winnipeg homes](/blog/cast-iron-clay-pipes-older-winnipeg-homes) and [how Winnipeg's clay soil affects your sewer line](/blog/winnipeg-clay-soil-sewer-line-effects).

## Why this matters when you are buying

If you are buying an older Winnipeg house, find out where the cleanout is and whether the line has ever been scoped. A [sewer camera inspection before you buy](/blog/sewer-camera-inspection-before-buying-house) gives you a recording of the line from the cleanout to the street, which is far better information than an owner's recollection.

## When to call

Call if you cannot find a cleanout, if a drain is backed up, or if you want the line inspected. Pro Drain Cleaning answers 24 hours a day on +1 (204) 399-4413 across Winnipeg and the surrounding 100 km. Learn more about [main sewer line cleaning](/main-sewer-line-unclogging-winnipeg).`,
  },

  'basement-drain-gurgling-when-toilet-flushes': {
    title: 'Why Does My Basement Drain Gurgle When I Flush the Toilet?',
    metaTitle: 'Basement Drain Gurgles When Toilet Flushes: Causes',
    metaDescription:
      'Basement floor drain gurgling when the toilet flushes or the washer drains? What it usually means, partial blockage vs vent problem, and what to do.',
    category: 'Drain Problems',
    readTime: 6,
    date: '2026-11-13',
    updatedDate: '2026-11-13',
    excerpt:
      'A gurgling basement drain is the plumbing equivalent of a warning light. Here is what it means, in order of how likely it is.',
    quickAnswer:
      'A basement drain that gurgles when you flush the toilet usually means air is being pushed out of the drain system because the main line is partly blocked or is not venting properly. It is an early warning, not a final failure. Stop heavy water use, watch whether other fixtures slow down, and have the main line checked before it backs up.',
    serviceLink: '/main-sewer-line-unclogging-winnipeg',
    serviceLinkText: 'main sewer line cleaning in Winnipeg',
    relatedSlugs: ['signs-main-sewer-line-clogged', 'drain-smells-like-sewage', 'toilet-wont-flush-troubleshooting'],
    faqs: [
      {
        q: 'Is a gurgling floor drain serious?',
        a: 'It can be. Gurgling is often an early sign of a partly blocked main sewer line. It may not be an emergency yet, but it commonly gets worse, and the next step can be water backing up. Treat it as a reason to book an inspection, and as an emergency if water or sewage is coming up.',
      },
      {
        q: 'Why does the floor drain gurgle only when I flush or run the washing machine?',
        a: 'Those are moments when a lot of water and air move through the drain system at once. If the main line is partly blocked, that air and water has to find another way out, and the floor drain is often the nearest opening.',
      },
      {
        q: 'Can a vent problem cause gurgling?',
        a: 'Yes. Drains need air to flow. A blocked or frosted vent can make fixtures gurgle and drain slowly. Because vents sit on the roof, this is a job for a plumber, not a DIY fix.',
      },
      {
        q: 'Will pouring something down the drain fix it?',
        a: 'Usually not, and chemical cleaners can make things worse. If the cause is in the main line, nothing poured down a fixture will reach it. See our guide on chemical drain cleaners.',
      },
      {
        q: 'When should I call?',
        a: 'Call if the gurgling is repeated, if more than one fixture is slow, if the floor drain smells, or if any water or sewage appears. Sooner is cheaper than after a backup.',
      },
    ],
    content: `You flush the toilet upstairs, and a few seconds later the floor drain in the basement burps or gurgles. It sounds harmless. It is not nothing. In most cases it is the drain system telling you the main line is not moving water and air the way it should.

## What is actually happening

A drain system carries both water and air. When water rushes down a stack and into the main line, it pushes air ahead of it, and air has to be able to escape or be replaced somewhere. In a healthy system, that happens quietly through the vent and the open pipe.

When the main line is partly blocked, the water slows down, the air has nowhere easy to go, and it comes up through the nearest water seal, which is often the basement floor drain or a toilet. That is the gurgle.

## Likely causes, from most to least common

| Cause | How it usually shows up |
| --- | --- |
| A partial blockage in the main sewer line (roots, grease, debris, a sag) | Gurgling in the floor drain or toilet; slow drains in more than one fixture; may get worse over weeks |
| A blocked or frosted plumbing vent | Gurgling and slow drains, especially in cold weather; sometimes a sewer smell indoors |
| A partly blocked branch line | Gurgling limited to one bathroom or one area |
| A dry or damaged trap | Gurgling plus a sewer smell from the drain that is gurgling |
| A line problem beyond your property | Backups that follow heavy use or weather, affecting several homes |

## What to try yourself

These are safe checks. None of them involves opening the sewer line.

1. Run one fixture at a time and note which one makes the floor drain gurgle: toilet, tub, sink, or washing machine.
2. Check whether any other fixture is draining slowly.
3. If the floor drain has a smell but no gurgling, pour a pail of water into it. A dry trap can let sewer gas in. This is the same step the City of Winnipeg suggests for odours.
4. Avoid running the washing machine and dishwasher while you are waiting to have it checked.

Do not use chemical drain cleaners in the hope of clearing a line you cannot reach. Read [why chemical drain cleaners damage pipes](/blog/chemical-drain-cleaners-damage-pipes).

## Warning signs that it is getting worse

- Water rises in the floor drain, or in a tub or shower, when you flush.
- A toilet, tub and sink all slow down together. That pattern is covered in [9 signs your main sewer line is clogged](/blog/signs-main-sewer-line-clogged).
- A persistent sewer smell near the floor drain. See [why your drain smells like sewage](/blog/drain-smells-like-sewage).
- It happens more often, or with less water than before.

If water is already coming up, treat it as an emergency: stop all water use, and read what to do when [sewage backs up in your basement](/blog/sewer-backup-what-to-do).

## What a professional will do

A drain specialist will start by finding out where the problem is. That usually means opening the main cleanout, running a cable or a camera into the line, and looking for roots, grease build-up, scale or a sag. Tree roots are one of the most common causes in older Winnipeg neighbourhoods; see [tree roots in sewer lines](/blog/tree-roots-sewer-line-winnipeg). Depending on what is found, the line can be cleared with a cable or high-pressure water. Our comparison of [hydro jetting and snaking](/blog/hydro-jetting-vs-snaking) explains how to tell which is right.

The camera also shows whether the line is damaged, which tells you whether cleaning is enough or whether repair is on the horizon. See [sewer line repair versus replacement](/blog/sewer-line-repair-vs-replacement).

## When to call

A gurgling drain is cheaper to deal with now than as a backup at 2 a.m. Call +1 (204) 399-4413 to book an inspection or to get help right now, 24/7 across Winnipeg and the surrounding 100 km. You can also read about [main sewer line cleaning in Winnipeg](/main-sewer-line-unclogging-winnipeg).`,
  },

  'toilet-flush-backs-up-into-bathtub-winnipeg': {
    title: 'Water Backing Up Into the Bathtub When the Toilet Flushes: What It Means',
    metaTitle: 'Toilet Flush Backs Up Into Tub: What It Means',
    metaDescription:
      'Water coming up in your tub when you flush or run the washer? Why it happens, why it usually means a main line blockage, and what to do right now.',
    category: 'Drain Problems',
    readTime: 6,
    date: '2026-11-13',
    updatedDate: '2026-11-13',
    excerpt:
      'When flushing a toilet sends water into the tub, the blockage is almost never in the tub. Here is why, and what to do next.',
    quickAnswer:
      'If water comes up in the bathtub or shower when you flush the toilet, the blockage is almost certainly downstream of the bathroom, in the main sewer line or a shared branch line, not in the tub itself. The tub is the lowest opening in that bathroom, so it shows the problem first. Stop using water in the house and call for a main line inspection.',
    serviceLink: '/main-sewer-line-unclogging-winnipeg',
    serviceLinkText: 'main sewer line unclogging in Winnipeg',
    relatedSlugs: ['signs-main-sewer-line-clogged', 'sewer-backup-what-to-do', 'tree-roots-sewer-line-winnipeg'],
    faqs: [
      {
        q: 'Why does the tub fill up when I flush the toilet?',
        a: 'The toilet, tub and sink in a bathroom usually join the same branch line before it meets the main sewer line. If the downstream pipe is blocked, the water from a flush has nowhere to go and rises to the lowest opening, which is commonly the tub or shower drain.',
      },
      {
        q: 'Will plunging the tub fix it?',
        a: 'Rarely. If the blockage is beyond the bathroom, a plunger just moves water around. It is worth one gentle try only if only the tub drains slowly and nothing else is affected.',
      },
      {
        q: 'What if it happens when I run the washing machine?',
        a: 'It points to the same cause. The washing machine discharges a lot of water at once, and a partly blocked main line cannot carry it, so the water rises in the lowest fixture or drain.',
      },
      {
        q: 'Is this an emergency?',
        a: 'If water is rising and you cannot stop it by stopping water use, or if sewage is coming up, yes. Otherwise it is urgent: stop using water in the house and get the line checked the same day.',
      },
      {
        q: 'Could it be tree roots?',
        a: 'Roots are one of the most common causes of main line blockages in older Winnipeg neighbourhoods, along with grease and flushed wipes. A camera inspection shows exactly what the blockage is.',
      },
    ],
    content: `You flush the toilet and, a few seconds later, grey water appears in the bathtub. Or you run the washing machine and the shower drain bubbles. It is alarming, and it feels like a bathtub problem. It is not. This is one of the clearest signs of a blocked sewer line, and it is worth understanding before you reach for the plunger.

## Why the tub is where it shows up

Think of the drain system as a tree. Each fixture has its own small pipe, and those join a bathroom branch line, which joins the main sewer line, which leaves the house. Water follows the path of least resistance, and when the pipe downstream is blocked, a flush pushes water back up the tree.

The tub or shower drain is usually the lowest opening in the bathroom. So it is the first place water appears. The tub itself is fine. The problem is further along.

## What it usually means

| What you see | Most likely cause |
| --- | --- |
| Water in the tub when the toilet flushes | Blockage downstream of the bathroom: a shared branch line or the main sewer line |
| Water in the tub when the washing machine drains | Same: a blocked or partly blocked main line |
| Floor drain in the basement also gurgles or backs up | Main sewer line blockage |
| Only the tub drains slowly, nothing else is affected | A local clog in the tub drain or trap |

If more than one of these is happening, assume the main line. Our guide to [9 signs your main sewer line is clogged](/blog/signs-main-sewer-line-clogged) goes through the full list.

## What to do right now

1. Stop using water in the house. That means no flushing, no laundry, no dishwasher and no showers.
2. Do not try to force it with a plunger or a chemical drain cleaner. Chemical cleaners do not reach a main line blockage, and they leave a hazardous mix in the pipe. See [why chemical drain cleaners damage pipes](/blog/chemical-drain-cleaners-damage-pipes).
3. Check the other fixtures, especially the lowest ones. If a basement floor drain is wet, the line is full.
4. Do not open the main cleanout if water is backed up. Our guide on [finding your main sewer cleanout](/blog/where-is-main-sewer-cleanout-winnipeg-house) explains why.
5. Call a drain and sewer specialist.

If water is already on the floor, follow the steps in [what to do when sewage backs up in your basement](/blog/sewer-backup-what-to-do).

## What causes a main line to block

- **Tree roots** entering through small cracks and joints. Very common in older neighbourhoods; see [tree roots and sewer lines in Winnipeg](/blog/tree-roots-sewer-line-winnipeg).
- **Grease** that cooled and hardened on the pipe walls.
- **Wipes and other items that should not be flushed.** Read [14 things you should never flush](/blog/what-not-to-flush).
- **Pipe damage**: sags, separated joints, or a collapsed section. Clay and older materials are prone to this; see [cast iron and clay pipes in older homes](/blog/cast-iron-clay-pipes-older-winnipeg-homes).
- **Scale and mineral build-up** over time. See [hard water and scale in Manitoba](/blog/hard-water-scale-drains-manitoba).

## How it gets fixed

A drain specialist will first work out where the blockage is, then clear it using the right tool for the line: a cable for a soft blockage, or a cutting head for roots, or high-pressure water for grease and scale. Our guide to [hydro jetting versus snaking](/blog/hydro-jetting-vs-snaking) explains the difference. After clearing, a camera inspection confirms the line is open and shows whether there is damage that will cause another blockage.

The cost depends on the line, the access and the cause, and it is confirmed before work begins. Our [drain cleaning cost guide](/blog/drain-cleaning-winnipeg-cost-guide) explains what moves the price.

## When to call

Call right away if water is rising. Pro Drain Cleaning answers 24 hours a day on +1 (204) 399-4413 across Winnipeg and the surrounding 100 km. Learn more about [main sewer line unclogging in Winnipeg](/main-sewer-line-unclogging-winnipeg).`,
  },

  'kitchen-drain-clogged-after-holiday-cooking-winnipeg': {
    title: 'Holiday Grease Clogs: Why Winnipeg Kitchen Drains Back Up After Christmas Dinner',
    metaTitle: 'Kitchen Drain Clogged After Holiday Cooking? Why & Fix',
    metaDescription:
      'Kitchen drain backing up after a big holiday dinner? Why grease, peels and coffee grounds clog drains, what to do tonight, and how to prevent it.',
    category: 'Kitchen Drains',
    readTime: 6,
    date: '2026-11-13',
    updatedDate: '2026-11-13',
    excerpt:
      'Big holiday meals put more fat, starch and food scraps down the kitchen drain in a day than a normal week. Here is why it clogs and what to do about it.',
    quickAnswer:
      'Holiday cooking sends far more grease, starch and food scraps down the kitchen drain than a normal week, and the grease cools and hardens inside the pipe. For a slow sink, run hot tap water with dish soap, then try a plunger. Do not use chemical cleaners. If the sink and the dishwasher back up together, or other drains are slow too, the blockage is deeper and needs a professional.',
    serviceLink: '/drain-cleaning-winnipeg',
    serviceLinkText: 'drain cleaning in Winnipeg',
    relatedSlugs: ['kitchen-sink-keeps-clogging', 'what-not-to-flush', 'chemical-drain-cleaners-damage-pipes'],
    faqs: [
      {
        q: 'Why do kitchen drains clog after holiday dinners?',
        a: 'Holiday meals send a lot of fat, gravy, potato and vegetable starch, and food scraps down the drain in a short time. Grease cools and sticks to the pipe wall, and starch and scraps catch on it. The result is a clog that builds up over the cooking session, then shows up in the evening.',
      },
      {
        q: 'Can I pour hot water and dish soap down a clogged kitchen drain?',
        a: 'For a light grease clog, running very hot tap water with a good squirt of dish soap for several minutes can help. Do not use boiling water on a plastic pipe or on cold porcelain, and do not use it as a substitute for a professional if the clog is deep.',
      },
      {
        q: 'Is it safe to put turkey fat or gravy down the drain if I run hot water?',
        a: 'No. Hot water only moves grease further down the pipe, where it cools and hardens. Let fat cool in a container and put it in the garbage, or take it to a drop-off that accepts cooking fat.',
      },
      {
        q: 'My sink and dishwasher both backed up. What does that mean?',
        a: 'They usually share the same drain line. If both are backing up, the blockage is past the point where they join, which is beyond the reach of a plunger. Stop running the dishwasher and call.',
      },
      {
        q: 'Will a garburator fix it?',
        a: 'A garburator chops scraps, but it does not stop grease or starch from coating the pipe. Keep fat out of it and run plenty of cold water when you use it.',
      },
    ],
    content: `It is the evening after a big holiday dinner. The sink is full of water that is not going anywhere, there is a dishwasher full of plates, and the guests are still in the living room. A clogged kitchen drain after Christmas dinner is so common that plumbers dread, and expect, the calls. Here is why it happens, what to try tonight, and how to avoid it next time.

## Why holiday cooking clogs drains

A normal week sends a modest amount of food waste down the kitchen drain. A holiday meal sends it all at once:

- **Fat and grease** from roasting, frying and gravy. It is liquid when hot and solid when cool. It coats the pipe wall as it cools and narrows the pipe.
- **Starch** from potatoes, rice, pasta and stuffing. It turns to a paste that catches on grease.
- **Vegetable peels and scraps** that pass the strainer or the garburator.
- **Coffee grounds**, which are not dissolved by water and build up in the bend.
- **A lot of water** from many dishes and a dishwasher running late into the night.

Grease is the foundation of the clog. Everything else sticks to it. Our guide on [why your kitchen sink keeps clogging](/blog/kitchen-sink-keeps-clogging) goes deeper into the cause.

## What to try tonight

For a slow drain or a light clog:

1. Stop running water into the sink and stop the dishwasher.
2. Remove standing water with a cup or small bucket so you can see what you are working on.
3. Run very hot tap water with a generous squirt of dish soap and let it work for several minutes.
4. Use a cup plunger. Cover the other drain opening if it is a double sink, and plunge with firm, steady strokes.
5. Remove and clean the strainer, and clean the P-trap under the sink if you are comfortable doing it. Have a bucket ready.

**What not to do:** do not use boiling water on plastic pipe or cold porcelain, and do not use chemical drain cleaners. They do not cut through a packed grease clog, and they leave caustic liquid sitting in a pipe that someone will then have to work on. Read [why chemical drain cleaners damage pipes](/blog/chemical-drain-cleaners-damage-pipes).

## When it is not a sink problem

If you see any of these, the blockage is deeper than the sink:

- The sink and the dishwasher are both backing up.
- Other drains in the house are slow, or a basement floor drain is gurgling.
- Water comes back up in a different fixture when you drain the sink.
- You have plunged and cleaned the trap and it is still blocked.

At that point, stop adding water. A professional can clear the kitchen branch line or the main line with a cable or with high-pressure water. Hydro jetting removes grease from the pipe wall instead of punching a hole through it. See [hydro jetting versus snaking](/blog/hydro-jetting-vs-snaking) for the difference.

## How to prevent it next year

- **Collect fat.** Pour roasting fat and gravy into a container, let it cool and harden, and put it in the garbage.
- **Wipe pans first.** Use a paper towel to wipe grease from pans and plates before washing.
- **Scrape plates into the garbage or compost,** not the sink.
- **Use a fine strainer** in the sink drain and empty it often.
- **Space out dishwasher loads** instead of running the whole pile at midnight.
- **Keep scraps and coffee grounds out** of the drain. See [what not to flush or pour down your drains](/blog/what-not-to-flush).
- **Run hot water for a minute** after washing greasy dishes.

A kitchen that gets heavy use is worth professional maintenance. Our guide on [how often drains should be professionally cleaned](/blog/how-often-clean-drains) gives a practical schedule. For restaurants and commercial kitchens, see [restaurant grease line cleaning](/blog/restaurant-grease-trap-line-cleaning).

## When to call

If the drain will not clear, or the problem is bigger than the sink, call Pro Drain Cleaning on +1 (204) 399-4413. We answer 24/7, including holidays, across Winnipeg and the surrounding 100 km. Learn more about [drain cleaning in Winnipeg](/drain-cleaning-winnipeg).`,
  },
};
