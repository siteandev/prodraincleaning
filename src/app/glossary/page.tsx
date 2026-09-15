'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';

// ─── Schema ──────────────────────────────────────────────────────────────────

const SITE = 'https://prodraincleaning.ca';

const glossaryTerms = [
  // A
  { letter: 'A', slug: 'auger', name: 'Auger', description: 'A motorized or hand-cranked cable tool with a cutting or hooking head, fed down a drain to break up or hook a blockage and pull it back. Also called "snaking" a drain.', related: [{ label: 'Drain Snaking (Auger Service)', href: '/drain-cleaning-winnipeg#drain-snaking-auger-service' }] },
  { letter: 'A', slug: 'aerator', name: 'Aerator', description: 'The small mesh screen on the end of a faucet spout that mixes air into the water stream. A blocked aerator is a common, easy-to-fix cause of "low water pressure" that isn\'t actually a plumbing fault.', related: [{ label: 'Faucet Repair', href: '/plumbing-services-winnipeg#faucet-repair' }] },
  // B
  { letter: 'B', slug: 'backflow', name: 'Backflow', description: 'Water or wastewater flowing in the reverse of its intended direction, most often caused by a pressure change or a blocked line. Backflow of sewage into a home is exactly what a backwater valve is designed to prevent.', related: [] },
  { letter: 'B', slug: 'backwater-valve', name: 'Backwater valve', description: 'A one-way valve installed in a sewer line, usually under the basement floor, that lets wastewater flow out normally and physically blocks it from flowing back in when the municipal system is overwhelmed.', related: [{ label: 'Backwater Valve Installation', href: '/plumbing-services-winnipeg#backwater-valve-installation' }, { label: 'Backwater Valves in Winnipeg', href: '/blog/backwater-valve-winnipeg-guide' }] },
  { letter: 'B', slug: 'belly', name: 'Belly (in a pipe)', description: 'A low section of pipe that has sunk, usually from ground settling, creating a dip that holds standing water and collects solids permanently. A belly can only be confirmed with a camera inspection, and generally can\'t be fixed by lining — the section needs to be excavated and re-graded.', related: [{ label: 'Camera Drain Inspections', href: '/drain-cleaning-winnipeg#camera-drain-inspections' }] },
  { letter: 'B', slug: 'branch-line', name: 'Branch line', description: 'The pipe connecting an individual fixture — a sink, tub, or toilet — to the main drain stack, before it joins other fixtures\' waste.', related: [] },
  { letter: 'B', slug: 'building-sewer', name: 'Building sewer', description: 'See Sewer lateral.', related: [] },
  // C
  { letter: 'C', slug: 'camera-inspection', name: 'Camera inspection (CCTV inspection)', description: 'A self-levelling waterproof camera fed through a drain or sewer line to visually record its condition — used to find roots, cracks, bellies and blockages that can\'t be diagnosed from symptoms alone.', related: [{ label: 'Camera Drain Inspections', href: '/drain-cleaning-winnipeg#camera-drain-inspections' }, { label: 'Sewer Camera Inspection vs. Guessing', href: '/compare/camera-inspection-vs-guessing' }] },
  { letter: 'C', slug: 'catch-basin', name: 'Catch basin', description: 'An underground drainage box, usually in a parking lot or yard, that collects surface stormwater and channels it into the storm sewer system, filtering out sediment and debris as it goes.', related: [{ label: 'Storm Drain Cleaning', href: '/restaurant-commercial-drain-cleaning-winnipeg#storm-drain-cleaning' }] },
  { letter: 'C', slug: 'cleanout', name: 'Cleanout', description: 'A capped pipe fitting, usually at ground or floor level, that gives direct access to a drain or sewer line for cabling or jetting without needing to remove a fixture.', related: [] },
  { letter: 'C', slug: 'clog', name: 'Clog / blockage', description: 'Any obstruction that fully or partially restricts flow through a pipe.', related: [{ label: 'Clogged Drain Clearing', href: '/drain-cleaning-winnipeg#clogged-drain-clearing' }] },
  { letter: 'C', slug: 'combined-sewer', name: 'Combined sewer', description: 'An older sewer system design, common in Winnipeg\'s oldest neighbourhoods, that carries both sanitary waste and stormwater in the same pipe. Combined systems are more prone to surcharging — and backing up into basements — during heavy rain, since one storm event fills the same pipe that\'s carrying household waste.', related: [] },
  { letter: 'C', slug: 'cipp', name: 'CIPP (cured-in-place pipe lining)', description: 'A trenchless sewer repair method where a resin-saturated liner is inserted into a damaged pipe and cured in place, forming a new jointless pipe inside the old one without excavation.', related: [{ label: 'Sewer Line Repair vs Replacement', href: '/blog/sewer-line-repair-vs-replacement' }] },
  // D
  { letter: 'D', slug: 'drain-snake', name: 'Drain snake', description: 'See Auger.', related: [] },
  { letter: 'D', slug: 'drum-trap', name: 'Drum trap', description: 'An older-style cylindrical trap, common under bathtubs in homes built before the 1960s, that\'s harder to access and clear than a modern P-trap.', related: [{ label: 'Bathtub Drain Cleaning', href: '/drain-cleaning-winnipeg#bathtub-drain-cleaning' }] },
  { letter: 'D', slug: 'downspout', name: 'Downspout', description: 'The vertical pipe that carries water from a roof gutter down to ground level. If it discharges too close to the foundation, it\'s a common contributor to basement water problems.', related: [{ label: 'Spring Thaw and Basement Flooding in Winnipeg', href: '/blog/spring-thaw-basement-flooding-winnipeg' }] },
  // E
  { letter: 'E', slug: 'effluent', name: 'Effluent', description: 'The liquid waste that flows out of a septic tank into the drain field, after solids have settled out.', related: [{ label: 'Septic vs City Sewer in Rural Manitoba', href: '/blog/septic-vs-city-sewer-rural-manitoba' }] },
  // F
  { letter: 'F', slug: 'fixture', name: 'Fixture', description: 'Any plumbing device connected to a building\'s water and drain system: a sink, toilet, tub, shower, or floor drain.', related: [] },
  { letter: 'F', slug: 'fog', name: 'FOG (fats, oils and grease)', description: 'The three substances that cause the majority of kitchen and restaurant drain blockages by cooling and hardening onto the inside of a pipe wall.', related: [{ label: 'Grease Trap Line Cleaning', href: '/restaurant-commercial-drain-cleaning-winnipeg#grease-trap-line-cleaning' }, { label: 'Why Your Kitchen Sink Keeps Clogging', href: '/blog/why-kitchen-sink-keeps-clogging' }] },
  { letter: 'F', slug: 'floor-drain', name: 'Floor drain', description: 'A drain set into the lowest point of a basement or utility floor, designed to carry away water and act as the last line of defence during a backup — which is why it\'s often the first place a sewer backup appears.', related: [{ label: 'Floor Drain Cleaning', href: '/drain-cleaning-winnipeg#floor-drain-cleaning' }, { label: 'Basement Floor Drain Backing Up?', href: '/blog/basement-floor-drain-backing-up' }] },
  { letter: 'F', slug: 'flapper-valve', name: 'Flapper valve', description: 'The rubber seal inside a toilet tank that lifts when you flush to release water into the bowl. A worn flapper is one of the most common causes of a running toilet.', related: [{ label: 'Toilet Repair & Installation', href: '/plumbing-services-winnipeg#toilet-repair-installation' }] },
  { letter: 'F', slug: 'frost-line', name: 'Frost line', description: 'The depth below ground level to which soil freezes in winter. In Winnipeg the frost line reaches well over a metre, which is why water services and drain lines are buried deep, and why a shallow line is at real risk of freezing.', related: [{ label: 'How to Prevent Frozen Pipes in a Winnipeg Winter', href: '/blog/prevent-frozen-pipes-winnipeg-winter' }] },
  // G
  { letter: 'G', slug: 'grease-trap', name: 'Grease trap (grease interceptor)', description: 'A plumbing device, required in most commercial kitchens, that captures fats, oils and grease before wastewater leaves the building, preventing them from coating the sewer line.', related: [{ label: 'Grease Trap Line Cleaning', href: '/restaurant-commercial-drain-cleaning-winnipeg#grease-trap-line-cleaning' }] },
  { letter: 'G', slug: 'gurgling-drain', name: 'Gurgling drain', description: 'Air being pushed or pulled through standing water in a trap, usually because a blocked vent or a restricted line elsewhere in the system is disturbing normal airflow. A drain that gurgles when a different fixture is used is a classic sign of a main line problem.', related: [{ label: '9 Signs Your Main Sewer Line Is Clogged', href: '/blog/signs-main-sewer-line-clogged' }] },
  // H
  { letter: 'H', slug: 'hydro-jetting', name: 'Hydro jetting', description: 'Cleaning a drain or sewer line with a high-pressure water stream, up to 4,000 PSI, through a rotating nozzle that scours the full pipe wall and flushes debris out of the system, rather than boring a single channel through a blockage.', related: [{ label: 'Hydro Jet Drain Cleaning', href: '/drain-cleaning-winnipeg#hydro-jet-drain-cleaning' }, { label: 'Hydro Jetting vs. a Rented Drain Machine', href: '/compare/hydro-jetting-vs-rented-drain-machine' }] },
  { letter: 'H', slug: 'hard-water', name: 'Hard water', description: 'Water with a high mineral content, mainly calcium and magnesium, that leaves scale deposits inside pipes and fixtures over time. Much of Manitoba, particularly limestone areas like Stonewall and the Interlake, has hard water.', related: [{ label: 'Hard Water in Manitoba: How Scale Slowly Kills Your Drains', href: '/blog/hard-water-manitoba-scale-drains' }] },
  // I
  { letter: 'I', slug: 'invert', name: 'Invert', description: 'The lowest inside point of a pipe\'s cross-section, used as the reference point when measuring a sewer line\'s slope or depth.', related: [] },
  { letter: 'I', slug: 'interceptor', name: 'Interceptor', description: 'See Grease trap.', related: [] },
  // J
  { letter: 'J', slug: 'joint', name: 'Joint', description: 'The point where two sections of pipe connect. In older clay and cast-iron sewer lines, joints are the weak point where roots most often enter and where offsets and leaks develop.', related: [{ label: 'Clay Sewer Pipe in Older Winnipeg Homes', href: '/blog/clay-sewer-pipe-older-winnipeg-homes' }] },
  // L
  { letter: 'L', slug: 'lateral', name: 'Lateral', description: 'See Sewer lateral.', related: [] },
  { letter: 'L', slug: 'lining', name: 'Lining', description: 'See CIPP.', related: [] },
  { letter: 'L', slug: 'leak-detection', name: 'Leak detection', description: 'Locating a hidden water leak, usually inside a wall, under a floor, or below a slab, using acoustic listening equipment, thermal imaging and pressure testing rather than opening up the structure to search for it.', related: [{ label: 'Leak Detection', href: '/plumbing-services-winnipeg#leak-detection' }] },
  // M
  { letter: 'M', slug: 'main-sewer-line', name: 'Main sewer line', description: 'The single pipe that carries all wastewater from a building\'s plumbing system to the municipal sewer connection. Every fixture in the building drains into it, which is why a main line blockage affects multiple fixtures at once.', related: [{ label: 'Main Sewer Line Cleaning', href: '/drain-cleaning-winnipeg#main-sewer-line-cleaning' }, { label: 'Main Sewer Line Unclogging Winnipeg', href: '/main-sewer-line-unclogging-winnipeg' }] },
  { letter: 'M', slug: 'manhole', name: 'Manhole', description: 'An access point to the underground municipal sewer system, used by the City to inspect and maintain the public sewer main that a building\'s lateral connects to.', related: [] },
  // O
  { letter: 'O', slug: 'offset-joint', name: 'Offset joint', description: 'A pipe joint where the two sections have shifted out of alignment, usually from ground movement, creating a lip inside the pipe that catches solids and roots.', related: [] },
  { letter: 'O', slug: 'overflow', name: 'Overflow', description: 'The secondary opening near the top of a bathtub, connected to the drain line below the main drain, that prevents the tub from flooding if the water is left running.', related: [{ label: 'Bathtub Drain Cleaning', href: '/drain-cleaning-winnipeg#bathtub-drain-cleaning' }] },
  // P
  { letter: 'P', slug: 'p-trap', name: 'P-trap', description: 'The U-shaped section of pipe under a sink that holds a permanent plug of water, sealing sewer gas out of the building. Every fixture needs one, and it needs water in it to work.', related: [{ label: 'Why Your Drain Smells Like Sewage', href: '/blog/why-drain-smells-like-sewage' }] },
  { letter: 'P', slug: 'pipe-scale', name: 'Pipe scale', description: 'Mineral or grease deposits that build up on the inside wall of a pipe over years, gradually narrowing its effective diameter.', related: [{ label: 'Hard Water in Manitoba', href: '/blog/hard-water-manitoba-scale-drains' }] },
  { letter: 'P', slug: 'pitch', name: 'Pitch (slope)', description: 'The downward angle of a drain line, required by plumbing code to keep waste and water moving by gravity. Too little pitch causes solids to settle out; too much causes liquid to outrun solids, leaving them behind.', related: [] },
  { letter: 'P', slug: 'potable-water', name: 'Potable water', description: 'Water that is safe to drink, supplied through a separate system from drain and sewer lines.', related: [] },
  // R
  { letter: 'R', slug: 'root-intrusion', name: 'Root intrusion', description: 'Tree or shrub roots entering a sewer line, almost always through an existing crack or degraded joint rather than by growing through solid pipe, then expanding inside the line into a blockage.', related: [{ label: 'Tree Root Removal', href: '/main-sewer-line-unclogging-winnipeg#tree-root-removal' }, { label: 'Tree Roots in Your Sewer Line', href: '/blog/tree-roots-sewer-line-winnipeg' }] },
  { letter: 'R', slug: 'rodding', name: 'Rodding', description: 'Another term for cabling or snaking a drain with a rotating auger.', related: [] },
  { letter: 'R', slug: 'rough-in', name: 'Rough-in', description: 'The stage of plumbing installation, before walls and floors are finished, when drain, waste and vent piping is placed and connected.', related: [{ label: 'Drain Installation', href: '/plumbing-services-winnipeg#drain-installation' }] },
  // S
  { letter: 'S', slug: 'sanitary-sewer', name: 'Sanitary sewer', description: 'A sewer system dedicated to household and business wastewater only, kept separate from stormwater — the modern standard, as opposed to a combined sewer.', related: [] },
  { letter: 'S', slug: 'sewer-gas', name: 'Sewer gas', description: 'The mix of gases, including hydrogen sulphide and methane, produced by decomposing waste in a sewer system. A P-trap\'s water seal is what normally keeps it out of a building.', related: [{ label: 'Why Your Drain Smells Like Sewage', href: '/blog/why-drain-smells-like-sewage' }] },
  { letter: 'S', slug: 'sewer-lateral', name: 'Sewer lateral (building sewer)', description: 'The privately owned pipe connecting a building to the municipal sewer main. In Winnipeg, the homeowner owns and is responsible for maintaining this pipe from the building all the way to the City connection, including the section under City property.', related: [{ label: 'Main Sewer Line Unclogging Winnipeg', href: '/main-sewer-line-unclogging-winnipeg' }] },
  { letter: 'S', slug: 'septic-system', name: 'Septic system', description: 'An on-site wastewater treatment system, used instead of a municipal sewer connection, consisting of a septic tank and a drain field. Common on rural and acreage properties around Winnipeg such as Headingley, Oak Bluff and East St. Paul.', related: [{ label: 'Septic vs City Sewer in Rural Manitoba', href: '/blog/septic-vs-city-sewer-rural-manitoba' }] },
  { letter: 'S', slug: 'sonde', name: 'Sonde', description: 'A small battery-powered transmitter attached to a camera head, used with a surface locator to pinpoint the exact position and depth of a point inside a buried pipe.', related: [{ label: 'Sewer Line Locating', href: '/main-sewer-line-unclogging-winnipeg#sewer-line-locating' }] },
  { letter: 'S', slug: 'storm-drain', name: 'Storm drain', description: 'A drainage system, separate from the sanitary sewer, that carries rainwater and snowmelt from streets, roofs and parking lots to a retention area or waterway.', related: [{ label: 'Storm Drain Cleaning', href: '/restaurant-commercial-drain-cleaning-winnipeg#storm-drain-cleaning' }] },
  { letter: 'S', slug: 'standpipe', name: 'Standpipe', description: 'The vertical pipe a washing machine discharges into, sized and positioned to code to prevent the machine\'s pump-out rate from overflowing it.', related: [{ label: 'Laundry Drain Cleaning', href: '/drain-cleaning-winnipeg#laundry-drain-cleaning' }, { label: 'Laundry Drain Overflowing Every Wash?', href: '/blog/laundry-drain-overflowing' }] },
  { letter: 'S', slug: 'sump-pump', name: 'Sump pump', description: 'A pump installed in a pit in the lowest part of a basement that removes groundwater before it can rise and flood the space, discharging it outside and away from the foundation.', related: [{ label: 'Sump Pump Installation & Repair', href: '/plumbing-services-winnipeg#sump-pump-installation-repair' }, { label: 'Winnipeg Sump Pump Maintenance Checklist', href: '/blog/winnipeg-sump-pump-maintenance-checklist' }] },
  { letter: 'S', slug: 'surcharge', name: 'Surcharge (sewer surcharge)', description: 'A condition where a municipal sewer system fills beyond its capacity, usually during heavy rain or rapid snowmelt, and pushes wastewater back up through the lowest connected fixture in a building.', related: [{ label: 'Sewer Backup in Your Basement? Do These 7 Things First', href: '/blog/sewer-backup-basement-what-to-do' }] },
  // T
  { letter: 'T', slug: 'trap', name: 'Trap', description: 'A curved section of drain pipe, found under every fixture, that holds a permanent plug of water to block sewer gas from entering a building. See P-trap.', related: [] },
  { letter: 'T', slug: 'trap-seal', name: 'Trap seal', description: 'The water held inside a trap that forms the actual gas seal. It can be lost through evaporation in a rarely used drain, which is why unused floor drains need to be topped up periodically.', related: [] },
  { letter: 'T', slug: 'trapway', name: 'Trapway', description: 'The narrow S-shaped internal passage inside a toilet bowl that leads to the drain — the most common place for a foreign object to lodge.', related: [{ label: 'Toilet Drain Unclogging', href: '/drain-cleaning-winnipeg#toilet-drain-unclogging' }] },
  { letter: 'T', slug: 'tree-root-barrier', name: 'Tree root barrier', description: 'A physical or chemical barrier installed in the soil between a tree and a sewer line to redirect root growth away from the pipe, sometimes used as a preventive measure after a line has been repaired or relined.', related: [] },
  // V
  { letter: 'V', slug: 'vent-stack', name: 'Vent stack', description: 'A pipe that runs from the drainage system up through the roof, allowing air to enter behind draining water so fixtures drain smoothly and trap seals aren\'t siphoned out. A blocked or frozen vent is a common cause of gurgling drains.', related: [{ label: 'Drain Odour Diagnosis', href: '/drain-cleaning-winnipeg#drain-odour-diagnosis' }] },
  { letter: 'V', slug: 'vitrified-clay-pipe', name: 'Vitrified clay pipe', description: 'A fired-clay sewer pipe material, standard through most of the 20th century, still in service under a large share of Winnipeg\'s older neighbourhoods. Durable as a material, but laid in short sections with many mortar joints, which is where root intrusion typically begins.', related: [{ label: 'Clay Sewer Pipe in Older Winnipeg Homes', href: '/blog/clay-sewer-pipe-older-winnipeg-homes' }] },
  // W
  { letter: 'W', slug: 'wax-ring', name: 'Wax ring', description: 'The wax seal between the base of a toilet and the drain flange, which prevents water and sewer gas from leaking at the floor. A failed wax ring is a common cause of a toilet rocking or a persistent smell at floor level.', related: [{ label: 'Toilet Repair & Installation', href: '/plumbing-services-winnipeg#toilet-repair-installation' }] },
  { letter: 'W', slug: 'weeping-tile', name: 'Weeping tile', description: 'A perforated pipe laid around a building\'s foundation footings to collect groundwater and direct it to a sump pit, preventing it from pressing against and seeping through the foundation wall.', related: [{ label: 'Sump Pump Installation & Repair', href: '/plumbing-services-winnipeg#sump-pump-installation-repair' }] },
  { letter: 'W', slug: 'water-hammer', name: 'Water hammer', description: 'A banging or knocking noise in pipes caused by a sudden change in water flow, usually when a valve or fixture shuts off quickly and the moving water has nowhere to go.', related: [{ label: 'Pipe Repair', href: '/plumbing-services-winnipeg#pipe-repair' }] },
];

// All letters A-Z
const ALL_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// Letters that have at least one term
const activeLetters = new Set(glossaryTerms.map((t) => t.letter));

// Group terms by letter
const termsByLetter: Record<string, typeof glossaryTerms> = {};
for (const term of glossaryTerms) {
  if (!termsByLetter[term.letter]) termsByLetter[term.letter] = [];
  termsByLetter[term.letter].push(term);
}

// Build schema
const definedTermSetSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': `${SITE}/glossary#termset`,
  name: 'Drain & Sewer Terms Explained',
  description: 'Plain-language definitions of drain, sewer and plumbing terms — from auger to weeping tile. A homeowner\'s glossary from Pro Drain Cleaning Limited, Winnipeg.',
  url: `${SITE}/glossary`,
  publisher: {
    '@type': 'Organization',
    name: 'Pro Drain Cleaning Limited',
    url: SITE,
  },
  hasPart: glossaryTerms.map((t) => ({
    '@type': 'DefinedTerm',
    '@id': `${SITE}/glossary#${t.slug}`,
    name: t.name,
    description: t.description,
    inDefinedTermSet: `${SITE}/glossary#termset`,
    url: `${SITE}/glossary#${t.slug}`,
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Glossary', item: `${SITE}/glossary` },
  ],
};

export default function GlossaryPage() {
  const navRef = useRef<HTMLDivElement>(null);

  function scrollToLetter(letter: string) {
    const el = document.getElementById(`letter-${letter}`);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <AnnouncementBar />
      <Header />

      <main id="main-content">
        {/* Hero / Intro */}
        <section
          className="section-padding"
          style={{ backgroundColor: 'var(--brand-100)' }}
          aria-labelledby="glossary-h1"
        >
          <div className="container-wide max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm" style={{ color: 'var(--muted)' }}>
                <li><Link href="/" style={{ color: 'var(--brand-700)' }}>Home</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" style={{ color: 'var(--ink)' }}>Glossary</li>
              </ol>
            </nav>

            <h1
              id="glossary-h1"
              className="text-4xl md:text-5xl font-extrabold mb-6"
              style={{ color: 'var(--brand-900)', letterSpacing: '-0.02em' }}
            >
              Drain &amp; Sewer Terms Explained
            </h1>
            <p className="text-lg leading-relaxed max-w-3xl" style={{ color: 'var(--ink)' }}>
              Plumbers and inspectors throw around terms that mean nothing until your basement is flooding. Here&apos;s what they actually mean, in plain language — with links to the service or article that goes deeper on anything that affects your own house.
            </p>
          </div>
        </section>

        {/* Sticky A–Z Jump Nav */}
        <div
          ref={navRef}
          className="sticky top-16 lg:top-20 z-30 w-full border-b"
          style={{ backgroundColor: 'white', borderColor: 'var(--line)' }}
          aria-label="Jump to letter"
          role="navigation"
        >
          <div className="container-wide max-w-4xl mx-auto py-3">
            <div className="flex flex-wrap gap-1">
              {ALL_LETTERS.map((letter) => {
                const isActive = activeLetters.has(letter);
                return isActive ? (
                  <button
                    key={letter}
                    onClick={() => scrollToLetter(letter)}
                    className="w-8 h-8 rounded text-sm font-bold transition-colors duration-150 focus-ring"
                    style={{
                      backgroundColor: 'var(--brand-100)',
                      color: 'var(--brand-900)',
                      border: '1px solid var(--line)',
                    }}
                    aria-label={`Jump to letter ${letter}`}
                  >
                    {letter}
                  </button>
                ) : (
                  <span
                    key={letter}
                    className="w-8 h-8 rounded text-sm font-bold flex items-center justify-center"
                    style={{
                      color: 'var(--line)',
                      border: '1px solid var(--line)',
                      cursor: 'default',
                    }}
                    aria-hidden="true"
                  >
                    {letter}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Terms */}
        <section className="section-padding" style={{ backgroundColor: 'white' }}>
          <div className="container-wide max-w-4xl mx-auto">
            {Object.entries(termsByLetter).map(([letter, terms]) => (
              <div key={letter} id={`letter-${letter}`} className="mb-14 scroll-mt-32">
                <h2
                  className="text-3xl font-extrabold mb-8 pb-3 border-b"
                  style={{ color: 'var(--brand-900)', borderColor: 'var(--line)' }}
                >
                  {letter}
                </h2>
                <dl className="flex flex-col gap-10">
                  {terms.map((term) => (
                    <div key={term.slug} id={term.slug} className="scroll-mt-32">
                      <dt>
                        <h3
                          className="text-xl font-bold mb-2"
                          style={{ color: 'var(--brand-900)' }}
                        >
                          {term.name}
                        </h3>
                      </dt>
                      <dd>
                        <p className="leading-relaxed mb-2" style={{ color: 'var(--ink)' }}>
                          {term.description}
                        </p>
                        {term.related.length > 0 && (
                          <p className="text-sm">
                            <span style={{ color: 'var(--muted)' }}>Related: </span>
                            {term.related.map((rel, i) => (
                              <React.Fragment key={rel.href}>
                                <Link
                                  href={rel.href}
                                  className="font-medium hover:underline"
                                  style={{ color: 'var(--brand-700)' }}
                                >
                                  {rel.label}
                                </Link>
                                {i < term.related.length - 1 && (
                                  <span style={{ color: 'var(--muted)' }}> · </span>
                                )}
                              </React.Fragment>
                            ))}
                          </p>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Band */}
        <section
          className="w-full section-padding"
          style={{ backgroundColor: 'var(--brand-900)' }}
          aria-labelledby="glossary-cta-heading"
        >
          <div className="container-wide text-center max-w-3xl mx-auto">
            <h2
              id="glossary-cta-heading"
              className="text-white mb-4"
            >
              Still not sure what&apos;s wrong with your drain?
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Call +1 (204) 399-4413 — we&apos;ll tell you in plain language, not jargon.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link
                href="tel:+12043994413"
                className="btn-primary shimmer-btn w-full sm:w-auto text-base"
                aria-label="Call Pro Drain Cleaning at +1 204 399 4413"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.64 3.48 2 2 0 013.62 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006 6l.92-.92a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Call +1 (204) 399-4413
              </Link>
              <Link
                href="https://wa.me/12043994413?text=Hi%2C%20I%20need%20drain%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full sm:w-auto text-base"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileActionBar />
    </>
  );
}
