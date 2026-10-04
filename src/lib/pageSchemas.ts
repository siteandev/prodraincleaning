const BASE = 'https://prodraincleaning.ca';

type QA = { q: string; a: string };

const homepageFaqs: QA[] = [
  { q: 'Do you really answer 24/7?', a: 'Yes. Nights, weekends, statutory holidays and −35°C January mornings. Call or WhatsApp +1 (204) 399-4413 and a technician answers — it isn\'t an answering service that takes a message and calls you back in the morning.' },
  { q: 'How much does drain cleaning cost in Winnipeg?', a: 'It depends on the line, the access and the blockage — a bathroom sink and a rooted main sewer line are not the same job. We give you a realistic range on the phone and a firm flat price in writing on site, before we start. You approve the number first, always.' },
  { q: 'How fast can you get to me?', a: 'Same-day for most Winnipeg calls, with priority dispatch when water is actively coming up. Communities inside the 100 km radius — Selkirk, Steinbach, Stonewall, Niverville, Portage — depend on distance and time of day, and we\'ll tell you honestly on the phone.' },
  { q: 'Snaking or hydro jetting — which one do I need?', a: 'Snaking is right for a sudden single-fixture blockage: hair, soap, paper, a first root intrusion. Hydro jetting is right when the pipe wall itself is coated — grease lines, restaurant kitchens, repeat clogs, root regrowth. Snaking makes a hole through the blockage; jetting removes it and restores the pipe\'s full diameter. We\'ll tell you which one your line actually needs.' },
  { q: 'My toilet, tub and sink are all slow at once. What does that mean?', a: 'Multiple fixtures backing up together — especially on the lowest floor — almost always means the blockage is in your main sewer line, not the fixtures. Stop running water and call us. Continuing to use the plumbing pushes more waste into a line that has nowhere to send it.' },
  { q: 'Do you do sewer camera inspections?', a: 'Yes — HD, self-levelling, recorded. We use them to diagnose repeat backups, verify a cleared line, document damage for insurance, and inspect sewers before people buy older Winnipeg homes. You get the footage.' },
  { q: 'Do you work outside Winnipeg?', a: 'Yes. Selkirk, St. Norbert, Headingley, Oak Bluff, Lorette, Île des Chênes, St. Adolphe, Niverville, Steinbach, Stonewall, Oakbank, Dugald, Beausejour, East and West St. Paul, Teulon, Gimli, Portage la Prairie, Morris, Carman — and every community within 100 km of Winnipeg.' },
  { q: 'Is a sewer backup my problem or the City\'s?', a: 'In Winnipeg, homeowners own the sewer pipe from their building to the City main — including the section under City property — and are responsible for maintaining and cleaning it. The City generally isn\'t responsible for a backup unless it was negligent. If your home is more than 20 years old, has a history of roots, or has large trees near the line, regular cleaning is on you. We can inspect, clear and document it.' },
  { q: 'Will you make a mess?', a: 'No. Mats, boot covers, drop sheets and containment go down first, and we wipe down and disinfect the work area before we leave. If you can tell we were there, we didn\'t finish the job.' },
  { q: 'Do you offer maintenance plans for restaurants?', a: 'Yes — scheduled overnight or pre-open jetting of grease lines, floor drains and 3-compartment sink lines, on a frequency that matches your volume, with written reports for your records. Ask us about a maintenance program.' },
];

const emergencyFaqs: QA[] = [
  { q: 'How fast can you respond to an emergency in Winnipeg?', a: 'For active flooding or sewage backup, we prioritize your call and dispatch as fast as possible. Call +1 (204) 399-4413 right now — a technician answers 24/7. We\'ll give you an honest arrival window on the phone based on current dispatch.' },
  { q: 'Is there an extra charge for after-hours or weekend emergency calls?', a: 'We give you a flat price on site before any work starts. We\'ll tell you honestly on the phone if emergency timing affects the rate. No surprise charges on the invoice — you approve the number first.' },
  { q: 'Should I shut off my water during a sewer backup?', a: 'Yes — if sewage is coming up through floor drains or toilets, stop all water use immediately. Don\'t flush, run the dishwasher, or use any drains. This prevents more waste from entering a line that has nowhere to go. Then call us at +1 (204) 399-4413.' },
  { q: 'What counts as a drain and plumbing emergency?', a: 'Sewage or water actively coming up through floor drains or toilets. A drain that is completely blocked and water is rising. A burst or leaking pipe causing water damage. A sump pump failure during spring melt. Sewage smell without an obvious source (possible cracked line). If you\'re unsure — call us. We\'d rather you call and it not be an emergency than not call and have it become one.' },
  { q: 'Do you handle burst pipes and plumbing emergencies, not just drains?', a: 'Yes — we handle emergency drain clearing, sewer backups, and plumbing emergencies including burst pipes and water shut-offs. If your emergency is beyond our scope, we\'ll tell you on the phone and point you in the right direction.' },
];

const processSteps = [
  { name: 'You call or WhatsApp — 24/7', text: 'A real technician picks up. Tell us what you\'re seeing: which fixtures, how fast, whether water is currently rising. We pick up fast — you won\'t be waiting.' },
  { name: 'We diagnose over the phone first', text: 'Which drains are affected tells us whether it\'s one fixture or your main line. You get a realistic price range before we roll a truck, not after.' },
  { name: 'We arrive fully equipped', text: 'Same-day for most calls, priority dispatch for active flooding. Mats and boot covers go down before anything else does.' },
  { name: 'On-site inspection & upfront quote', text: 'We locate the cleanout, assess the line, and give you a flat price in writing. You approve it before any work starts. No surprises on the invoice.' },
  { name: 'We clear it — and verify it', text: 'The right machine for the pipe. Then a full-flow water test and, where useful, a camera pass so you can see the line is genuinely clear.' },
  { name: 'Cleanup, video and a prevention plan', text: 'Everything wiped down, debris removed, camera footage sent to you, and honest advice on what to do so it doesn\'t come back.' },
];

const faqPage = (items: QA[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({
    '@type': 'Question',
    name: i.q,
    acceptedAnswer: { '@type': 'Answer', text: i.a },
  })),
});

export const homepageFaqSchema = faqPage(homepageFaqs);
export const emergencyFaqSchema = faqPage(emergencyFaqs);

export const homepageHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How a Pro Drain Cleaning job works, from your call to a clear line',
  description: 'Most drain and sewer jobs in Winnipeg are completed in a single visit.',
  step: processSteps.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: s.name,
    text: s.text,
  })),
};

export const homepageSpeakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE}/#webpage`,
  url: `${BASE}/`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#hero-heading', '#homepage-faq'],
  },
};
