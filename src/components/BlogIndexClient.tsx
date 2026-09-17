'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';

const categories = ['All', 'Drain Cleaning', 'Sewer Lines', 'Commercial', 'Plumbing', 'Emergency', 'Winnipeg Areas'];

interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: number;
  date: string;
  excerpt: string;
  isPillar?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'winnipeg-clay-soil-sewer-line-effects',
    title: "How Winnipeg's Clay Soil Affects Your Sewer Line",
    category: 'Sewer Lines',
    readTime: 7,
    date: '2026-09-17',
    excerpt:
      "Winnipeg sits on heavy clay soil that shifts with moisture — a real factor in sewer line problems most homeowners never hear about. Here's how it works.",
    isPillar: true,
  },
  {
    slug: 'apartment-shared-line-clogs-winnipeg',
    title: "Apartment Building Drain Clogs — Why One Unit's Problem Is Everyone's Problem",
    category: 'Drain Cleaning',
    readTime: 6,
    date: '2026-09-17',
    excerpt:
      "Drain backing up in your Winnipeg apartment? If it's affecting more than one unit, it's likely a shared-line issue — here's what that means and who to call.",
    isPillar: true,
  },
  {
    slug: 'does-home-insurance-cover-frozen-pipes-manitoba',
    title: 'Does Home Insurance Cover Frozen Pipe Damage in Manitoba?',
    category: 'Plumbing',
    readTime: 7,
    date: '2026-09-17',
    excerpt:
      "Frozen pipe damage and wondering if it's covered? Here's how most Manitoba home insurance policies typically treat frozen pipe claims, and what can affect coverage.",
    isPillar: true,
  },
  {
    slug: 'first-time-homebuyer-plumbing-terms-winnipeg',
    title: "First-Time Homebuyer's Plumbing Terms — What You'll Actually Hear in Winnipeg",
    category: 'Plumbing',
    readTime: 6,
    date: '2026-09-17',
    excerpt:
      "Buying your first home in Winnipeg? Here are the plumbing terms you're most likely to hear from your inspector or agent, explained in plain language.",
    isPillar: true,
  },
  {
    slug: 'renovating-old-winnipeg-bathroom-plumbing',
    title: "Renovating an Old Winnipeg Bathroom? What's Behind the Wall You Should Know First",
    category: 'Plumbing',
    readTime: 7,
    date: '2026-09-17',
    excerpt:
      "Before you renovate an older Winnipeg bathroom, here's what's typically behind the wall — pipe material, hidden damage, and why a plumbing check should come first.",
    isPillar: true,
  },
  {
    slug: 'new-construction-rough-in-plumbing-inspection-winnipeg',
    title: 'New Construction Rough-In Plumbing Inspection — What Gets Missed',
    category: 'Plumbing',
    readTime: 6,
    date: '2026-09-17',
    excerpt:
      'Building a new home in Winnipeg? An independent rough-in plumbing inspection before drywall goes up can catch issues that are expensive to fix later.',
    isPillar: true,
  },
  {
    slug: 'cast-iron-clay-pipes-older-winnipeg-homes',
    title: 'Cast Iron and Clay Pipes in Older Winnipeg Homes — What Owners Should Know',
    category: 'Sewer Lines',
    readTime: 7,
    date: '2026-09-17',
    excerpt:
      "Own an older Winnipeg home? Cast iron and clay drain pipes age differently than modern materials. Here's what to watch for and when a camera inspection is worth it.",
    isPillar: true,
  },
  {
    slug: 'rental-property-plumbing-manitoba-landlord-responsibilities',
    title: 'Rental Property Plumbing in Manitoba — What Landlords Are Actually Required to Fix',
    category: 'Plumbing',
    readTime: 7,
    date: '2026-09-17',
    excerpt:
      "Landlord or property manager in Winnipeg? Here's what plumbing repairs are typically your responsibility, how fast you're expected to respond, and who to call.",
    isPillar: true,
  },
  {
    slug: 'spring-thaw-flooding-sump-pump-winnipeg',
    title: 'Spring Thaw Flooding in Winnipeg — Is Your Sump Pump Ready?',
    category: 'Plumbing',
    readTime: 7,
    date: '2026-09-17',
    excerpt:
      "Manitoba's spring thaw puts real strain on sump pumps. Here's how to check yours is ready before the melt — and what to do if it's already failing.",
    isPillar: true,
  },
  {
    slug: 'home-inspection-plumbing-issue-now-what',
    title: 'Home Inspection Flagged a Plumbing Issue — Now What?',
    category: 'Plumbing',
    readTime: 6,
    date: '2026-09-17',
    excerpt:
      "Home inspection report flagged a plumbing issue in Winnipeg? Here's how to get a second opinion, understand the real cost, and decide your next move before closing.",
    isPillar: true,
  },
  {
    slug: 'buying-old-house-winnipeg-plumbing-checklist',
    title: 'Buying an Old House in Winnipeg? What to Check in the Plumbing Before You Close',
    category: 'Plumbing',
    readTime: 7,
    date: '2026-09-17',
    excerpt:
      "Buying an older home in Winnipeg? Here's what to check in the plumbing before closing — pipe material, age-related red flags, and when to get a second look.",
    isPillar: true,
  },
  {
    slug: 'condo-plumbing-winnipeg-your-responsibility-or-condo-corporation',
    title: "Condo Plumbing in Winnipeg — Is It You or the Condo Corporation's Responsibility?",
    category: 'Plumbing',
    readTime: 7,
    date: '2026-09-17',
    excerpt:
      "Plumbing issue in your Winnipeg condo? Here's how responsibility typically splits between unit owners and the condo corporation — and who to call first.",
    isPillar: true,
  },
  {
    slug: 'water-damage-insurance-claim-plumbing-checklist',
    title: 'Water Damage Insurance Claim — What Your Adjuster Wants to See',
    category: 'Plumbing',
    readTime: 7,
    date: '2026-09-17',
    excerpt:
      "Filing a water damage insurance claim in Winnipeg? Here's the documentation a plumber can provide to support your claim — and what to gather before the adjuster visits.",
    isPillar: true,
  },
  {
    slug: 'burst-pipe-emergency-what-to-do',
    title: 'Burst Pipe Emergency — What to Do in the First 10 Minutes',
    category: 'Emergency',
    readTime: 6,
    date: '2026-09-17',
    excerpt:
      'Pipe just burst? Shut off water, protect what you can, then get help fast. Step-by-step emergency guide for Winnipeg homeowners. Call +1 (204) 399-4413.',
    isPillar: true,
  },
  {
    slug: 'frozen-pipes-winnipeg-how-to-thaw-safely',
    title: 'Frozen Pipes in Winnipeg — How to Thaw Them Safely Before They Burst',
    category: 'Plumbing',
    readTime: 8,
    date: '2026-09-17',
    excerpt:
      'Frozen pipes in your Winnipeg home? Here\'s how to thaw them safely without causing a burst — and when to call a plumber instead of risking it yourself.',
    isPillar: true,
  },
  {
    slug: 'water-heater-repair-winnipeg',
    title: 'Water Heater Repair in Winnipeg — Is Replacement Actually Needed?',
    category: 'Plumbing',
    readTime: 8,
    date: '2026-09-10',
    excerpt:
      'Water heater acting up? Here\'s how to tell if it\'s a simple repair or actually needs replacing — real answers, no upsell. Call +1 (204) 399-4413, 24/7.',
    isPillar: true,
  },
  {
    slug: 'drain-cleaning-company-near-me-response-time-winnipeg',
    title: 'Drain Cleaning Company Near Me — How Fast Can They Actually Get to You?',
    category: 'Drain Cleaning',
    readTime: 6,
    date: '2026-09-10',
    excerpt:
      'Why "near me" actually matters for a drain problem, and what determines real response time in Winnipeg and surrounding areas. Call +1 (204) 399-4413.',
    isPillar: true,
  },
  {
    slug: 'plumbing-drain-cleaning-services-winnipeg',
    title: 'Plumbing & Drain Cleaning Services in Winnipeg — One Call, Both Covered',
    category: 'Plumbing',
    readTime: 7,
    date: '2026-09-10',
    excerpt:
      'Not sure if you need a plumber or a drain specialist? Pro Drain Cleaning Limited covers both across Winnipeg and every community within 100km. Call +1 (204) 399-4413.',
    isPillar: true,
  },
  {
    slug: 'backflow-valve-inspection-repair-winnipeg',
    title: 'Backflow Valve Inspection & Repair in Winnipeg',
    category: 'Sewer Lines',
    readTime: 8,
    date: '2026-09-10',
    excerpt:
      'Backflow / backwater valve inspection, testing and repair across Winnipeg and every community within 100km. Protect your basement from sewer backups. Call +1 (204) 399-4413.',
    isPillar: true,
  },
  {
    slug: 'basement-floor-drain-clogged-whats-wrong',
    title: "Basement Floor Drain Clogged? Here's What's Actually Wrong",
    category: 'Drain Cleaning',
    readTime: 7,
    date: '2026-09-10',
    excerpt:
      "Basement floor drain backed up or slow? Here's what's actually causing it — and when it means a bigger sewer line issue. Call +1 (204) 399-4413, 24/7.",
    isPillar: true,
  },
  {
    slug: 'sewer-line-cleaning-winnipeg-signs-you-need-it',
    title: 'Sewer Line Cleaning Winnipeg: 7 Signs You Need It Now',
    category: 'Sewer Lines',
    readTime: 8,
    date: '2026-09-10',
    excerpt:
      'Slow drains, gurgling, sewage smell? Here are the real warning signs your sewer line needs cleaning — and how to get it checked fast in Winnipeg. Call +1 (204) 399-4413.',
    isPillar: true,
  },
  {
    slug: 'clogged-drain-cleaning-near-me-cost-winnipeg',
    title: 'Clogged Drain Cleaning Near Me: What It Actually Costs in Winnipeg',
    category: 'Drain Cleaning',
    readTime: 7,
    date: '2026-09-10',
    excerpt: 'What actually drives the cost of clogged drain cleaning up or down in Winnipeg, and how to get an honest upfront price. Call +1 (204) 399-4413, 24/7.',
    isPillar: true,
  },
  {
    slug: '24-hour-emergency-drain-cleaning-winnipeg',
    title: '24 Hour Emergency Drain Cleaning in Winnipeg — Call Now',
    category: 'Emergency',
    readTime: 6,
    date: '2026-09-10',
    excerpt: 'Real 24 hour drain cleaning in Winnipeg — a live person answers, not a machine. Same-day dispatch across Winnipeg and 100km around. Call +1 (204) 399-4413.',
    isPillar: true,
  },
  {
    slug: 'leak-detection-winnipeg',
    title: 'Leak Detection in Winnipeg — Finding a Hidden Leak Before It Becomes a Bigger Problem',
    category: 'Plumbing',
    readTime: 10,
    date: '2026-08-30',
    excerpt: 'Rising water bill, damp spot, or a musty smell with no obvious source? See the signs of a hidden leak and how professional leak detection actually works. Call +1 (204) 399-4413.',
    isPillar: true,
  },
  {
    slug: 'water-heater-replacement-winnipeg',
    title: 'Water Heater Replacement in Winnipeg — Signs You Need One, and What Actually Changes the Cost',
    category: 'Plumbing',
    readTime: 10,
    date: '2026-08-30',
    excerpt: 'Not sure if your water heater needs repair or replacement? See the warning signs, what affects the cost, and how to book a straight answer in Winnipeg. Call +1 (204) 399-4413.',
    isPillar: true,
  },
  {
    slug: 'clogged-toilet-winnipeg-what-to-do',
    title: "Clogged Toilet in Winnipeg? Here's the Right Way to Clear It",
    category: 'Drain Cleaning',
    readTime: 10,
    date: '2026-08-30',
    excerpt: "Toilet won't flush or keeps backing up? The correct plunging technique, when to use an auger, and when it's actually a main line problem. Call +1 (204) 399-4413, 24/7.",
    isPillar: true,
  },
  {
    slug: 'emergency-plumber-winnipeg-24-7-guide',
    title: 'Emergency Plumber in Winnipeg — What Counts as an Emergency, and What to Do Right Now',
    category: 'Plumbing',
    readTime: 12,
    date: '2026-08-30',
    excerpt: 'Burst pipe, no water, or a suspected gas leak? See what to do in the first five minutes and how to reach a real emergency plumber in Winnipeg, 24/7. Call +1 (204) 399-4413.',
    isPillar: true,
  },
  {
    slug: 'emergency-drain-cleaning-winnipeg-24-7-complete-guide',
    title: 'Emergency Drain Cleaning in Winnipeg, 24/7 — The Complete Guide for Every Town Within 100km',
    category: 'Emergency',
    readTime: 18,
    date: '2026-08-28',
    excerpt: '24/7 emergency drain cleaning across Winnipeg, Selkirk, St. Norbert and every town within 100km. What to do right now, six emergency scenarios covered, and a real technician who answers day or night.',
    isPillar: true,
  },
  {
    slug: 'plumber-near-me-winnipeg-complete-guide',
    title: 'Plumber Near Me in Winnipeg — What "Near Me" Should Actually Get You',
    category: 'Plumbing',
    readTime: 14,
    date: '2026-08-28',
    excerpt: 'Searching for a plumber near you in Winnipeg? See what a real local plumber should offer, how to vet one fast, and every town within 100km we cover. Call +1 (204) 399-4413.',
    isPillar: true,
  },
  {
    slug: 'drain-cleaning-near-me-winnipeg',
    title: 'Drain Cleaning Near Me in Winnipeg — Every Service, Every Town, Real Availability',
    category: 'Drain Cleaning',
    readTime: 15,
    date: '2026-08-28',
    excerpt: 'Searching "drain cleaning near me"? See every drain service we offer, how to tell what you actually need, and every town within 100km we cover. Call +1 (204) 399-4413.',
    isPillar: true,
  },
  {
    slug: 'clogged-drain-winnipeg-what-to-do',
    title: 'Clogged Drain in Winnipeg? Here\'s Exactly What to Do',
    category: 'Drain Cleaning',
    readTime: 12,
    date: '2026-08-28',
    excerpt: 'Every common cause of a clogged drain by fixture, what\'s safe to try yourself, and when to call a specialist. Serving Winnipeg and everywhere within 100km, 24/7.',
    isPillar: true,
  },
  {
    slug: 'sewer-line-cleaning-near-me-winnipeg',
    title: 'Sewer Line Cleaning Near Me — What Actually Happens, and Every Town We Serve',
    category: 'Sewer Lines',
    readTime: 14,
    date: '2026-08-28',
    excerpt: 'Searching for sewer line cleaning near you? See what\'s actually involved, what changes the cost, and every town within 100km we serve. Call +1 (204) 399-4413, 24/7.',
    isPillar: true,
  },
  { slug: 'drain-cleaning-winnipeg-cost-guide', title: 'How Much Does Drain Cleaning Cost in Winnipeg? (2026 Price Guide)', category: 'Drain Cleaning', readTime: 7, date: '2026-01-15', excerpt: 'A straight answer on what drain cleaning actually costs in Winnipeg — by service type, pipe size, and urgency level.' },
  { slug: 'signs-main-sewer-line-clogged', title: '9 Signs Your Main Sewer Line Is Clogged (Not Just One Drain)', category: 'Sewer Lines', readTime: 6, date: '2026-01-22', excerpt: 'Multiple fixtures backing up at once is the big one — but there are 8 other signs your main line is failing.' },
  { slug: 'tree-roots-sewer-line-winnipeg', title: "Tree Roots in Your Sewer Line: Why It's Winnipeg's #1 Drain Problem", category: 'Sewer Lines', readTime: 8, date: '2026-02-01', excerpt: "Winnipeg's elm and maple canopy is beautiful. It's also the leading cause of sewer line blockages in the city." },
  { slug: 'hydro-jetting-vs-snaking', title: 'Hydro Jetting vs Drain Snaking: Which Does Your Pipe Actually Need?', category: 'Drain Cleaning', readTime: 6, date: '2026-02-08', excerpt: 'Snaking makes a hole through a blockage. Jetting removes it. Here is how to know which one your line actually needs.' },
  { slug: 'kitchen-sink-keeps-clogging', title: 'Why Your Kitchen Sink Keeps Clogging (And How to Stop It for Good)', category: 'Drain Cleaning', readTime: 5, date: '2026-02-15', excerpt: 'If your kitchen sink clogs every few weeks, the problem is not the clog — it is what is coating the pipe wall.' },
  { slug: 'sewer-backup-what-to-do', title: 'Sewer Backup in Your Basement? Do These 7 Things First', category: 'Emergency', readTime: 5, date: '2026-02-22', excerpt: 'The first 10 minutes after a sewer backup matter. Here is exactly what to do — and what not to do.' },
  { slug: 'prevent-frozen-pipes-winnipeg', title: 'How to Prevent Frozen Pipes in a Winnipeg Winter', category: 'Plumbing', readTime: 7, date: '2026-03-01', excerpt: 'At −35°C, frozen pipes are not a possibility — they are a certainty if you have the wrong setup. Here is how to prevent it.' },
  { slug: 'backwater-valve-winnipeg', title: "Backwater Valves in Winnipeg: What They Cost and Why They're Worth It", category: 'Plumbing', readTime: 6, date: '2026-03-08', excerpt: 'A backwater valve is a one-way gate on your sewer line. In Winnipeg, it is one of the highest-value home improvements you can make.' },
  { slug: 'sewer-camera-inspection-before-buying-house', title: 'Should You Get a Sewer Camera Inspection Before Buying a Winnipeg Home?', category: 'Sewer Lines', readTime: 6, date: '2026-03-15', excerpt: 'A 70-year-old Winnipeg house with a 70-year-old clay sewer line is a known risk. Here is what a camera inspection tells you.' },
  { slug: 'basement-floor-drain-backing-up', title: "Basement Floor Drain Backing Up? Here's What It Actually Means", category: 'Drain Cleaning', readTime: 5, date: '2026-03-22', excerpt: 'A floor drain that backs up is almost never a floor drain problem. Here is what it is actually telling you.' },
  { slug: 'restaurant-grease-trap-line-cleaning', title: 'Restaurant Grease Line Cleaning: How Often Winnipeg Kitchens Really Need It', category: 'Commercial', readTime: 7, date: '2026-04-01', excerpt: 'The answer depends on your volume — but most Winnipeg restaurant kitchens are cleaning their grease lines far less often than they should.' },
  { slug: 'drain-smells-like-sewage', title: 'Why Your Drain Smells Like Sewage — 6 Causes and Their Fixes', category: 'Drain Cleaning', readTime: 6, date: '2026-04-08', excerpt: 'A sewage smell from a drain is sewer gas entering your living space. There are six common causes — and each has a specific fix.' },
  { slug: 'toilet-wont-flush-troubleshooting', title: "Toilet Won't Flush? A Step-by-Step Fix Before You Call a Plumber", category: 'Plumbing', readTime: 5, date: '2026-04-15', excerpt: 'Most toilet flush problems have a simple fix. Here is how to diagnose it yourself — and when to stop and call us.' },
  { slug: 'sump-pump-maintenance-checklist', title: 'Winnipeg Sump Pump Maintenance: The Pre-Spring-Melt Checklist', category: 'Plumbing', readTime: 6, date: '2026-04-22', excerpt: 'Your sump pump is the one device standing between spring melt and your basement. Here is how to make sure it is ready.' },
  { slug: 'chemical-drain-cleaners-damage-pipes', title: "Do Chemical Drain Cleaners Damage Your Pipes? (Yes — Here's How)", category: 'Drain Cleaning', readTime: 5, date: '2026-05-01', excerpt: 'Caustic drain cleaners rarely clear a real blockage, and they can damage your pipes and seals. Here is what they actually do.' },
  { slug: 'emergency-plumber-winnipeg-when-to-call', title: 'When to Call an Emergency Plumber in Winnipeg (And When It Can Wait)', category: 'Emergency', readTime: 6, date: '2026-05-08', excerpt: 'Not every plumbing problem is an emergency. Here is how to tell the difference — and what to do right now for each.' },
  { slug: 'clay-pipe-sewer-lines-winnipeg', title: 'Clay Sewer Pipe in Older Winnipeg Homes: What Every Owner Should Know', category: 'Sewer Lines', readTime: 8, date: '2026-05-15', excerpt: 'If your Winnipeg home was built before 1980, there is a good chance your sewer line is clay tile. Here is what that means.' },
  { slug: 'bathtub-shower-draining-slowly', title: "Bathtub or Shower Draining Slowly? Here's the Real Cause", category: 'Drain Cleaning', readTime: 5, date: '2026-05-22', excerpt: 'Standing water in the tub or shower is almost always hair and soap in the trap. Here is how to clear it properly.' },
  { slug: 'laundry-drain-overflowing', title: "Laundry Drain Overflowing Every Wash? Here's Why", category: 'Drain Cleaning', readTime: 5, date: '2026-06-01', excerpt: 'A washing machine dumps a huge volume of water fast. A partly restricted laundry line overflows every time.' },
  { slug: 'how-often-clean-drains', title: 'How Often Should You Have Your Drains Professionally Cleaned?', category: 'Drain Cleaning', readTime: 6, date: '2026-06-08', excerpt: 'The honest answer depends on your pipe age, tree cover, and history. Here is a practical guide for Winnipeg homeowners.' },
  { slug: 'spring-thaw-basement-flooding-winnipeg', title: 'Spring Thaw and Basement Flooding in Winnipeg: A Prevention Guide', category: 'Winnipeg Areas', readTime: 7, date: '2026-06-15', excerpt: "Winnipeg's spring melt is the most predictable plumbing emergency of the year. Here is how to prepare for it." },
  { slug: 'what-not-to-flush', title: '14 Things You Should Never Flush (Including "Flushable" Wipes)', category: 'Plumbing', readTime: 5, date: '2026-06-22', excerpt: '"Flushable" wipes do not break down in your sewer line. Neither do 13 other things people flush every day.' },
  { slug: 'drain-cleaning-selkirk', title: 'Drain Cleaning in Selkirk, MB: Local Problems and Local Fixes', category: 'Winnipeg Areas', readTime: 6, date: '2026-07-01', excerpt: "Selkirk's older housing stock, Red River location, and industrial sector create drain problems that need a specialist." },
  { slug: 'drain-cleaning-st-norbert', title: 'Drain and Sewer Issues in St. Norbert: What the River Does to Your Pipes', category: 'Winnipeg Areas', readTime: 6, date: '2026-07-08', excerpt: "St. Norbert's riverside location and high water table create unique drain challenges. Here is what we see most often." },
  { slug: 'drain-cleaning-steinbach-niverville', title: 'Drain Cleaning in Steinbach and Niverville: New Builds, New Problems', category: 'Winnipeg Areas', readTime: 6, date: '2026-07-15', excerpt: 'New construction in Steinbach and Niverville means construction debris in lines and settling in fresh backfill.' },
  { slug: 'septic-vs-city-sewer-manitoba', title: 'Septic vs City Sewer in Rural Manitoba: What Changes for Your Drains', category: 'Plumbing', readTime: 7, date: '2026-07-22', excerpt: 'Headingley, East St. Paul, Oak Bluff — many Manitoba properties are on private septic. Here is what that means for drain service.' },
  { slug: 'landlord-drain-maintenance-guide', title: "A Winnipeg Landlord's Guide to Drain Maintenance (and Fewer 2 a.m. Calls)", category: 'Commercial', readTime: 7, date: '2026-08-01', excerpt: 'Proactive drain maintenance is the difference between a scheduled service call and a 2 a.m. emergency from a tenant.' },
  { slug: 'hard-water-scale-drains-manitoba', title: 'Hard Water in Manitoba: How Scale Slowly Kills Your Drains', category: 'Plumbing', readTime: 6, date: '2026-08-08', excerpt: "Manitoba's hard water deposits mineral scale in drain pipes over time. Here is how it builds up and how to remove it." },
  { slug: 'sewer-line-repair-vs-replacement', title: 'Sewer Line Repair vs Replacement: How to Decide (and What It Costs)', category: 'Sewer Lines', readTime: 8, date: '2026-08-15', excerpt: 'Repair is cheaper in the short term. Replacement is cheaper over 20 years. Here is how to make the right call.' },
  { slug: 'drain-cleaning-mistakes-homeowners-make', title: '11 Drain Cleaning Mistakes Winnipeg Homeowners Make Every Year', category: 'Drain Cleaning', readTime: 6, date: '2026-08-17', excerpt: 'From chemical cleaners to ignoring slow drains, here are the 11 most common drain mistakes — and what to do instead.' },
];

export default function BlogIndexClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch = !searchQuery || post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      {/* Filters */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-600 border transition-colors ${activeCategory === cat ? 'text-white border-transparent' : 'border-current hover:opacity-80'}`}
                style={{
                  fontWeight: 600,
                  backgroundColor: activeCategory === cat ? 'var(--orange-600)' : 'transparent',
                  color: activeCategory === cat ? 'white' : 'var(--navy-700)',
                  borderColor: activeCategory === cat ? 'var(--orange-600)' : 'var(--navy-700)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-64">
            <input
              type="search"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 pr-10 rounded-lg border text-sm focus:outline-none focus:ring-2"
              style={{ borderColor: 'var(--line)', fontSize: '16px', color: 'var(--ink)' }}
              aria-label="Search blog posts"
            />
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="8" stroke="var(--muted)" strokeWidth="2"/>
              <path d="m21 21-4.35-4.35" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        <p className="text-sm" style={{ color: 'var(--muted)' }}>
          {filtered.length} {filtered.length === 1 ? 'post' : 'posts'}{activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
        </p>
      </div>

      {/* Posts Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            post.isPillar ? (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="md:col-span-2 lg:col-span-3 flex flex-col hover:shadow-brand transition-shadow group rounded-xl overflow-hidden"
                style={{
                  textDecoration: 'none',
                  border: '2px solid var(--brand-700)',
                  backgroundColor: 'var(--brand-100)',
                }}
              >
                <div className="p-7 flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span
                        className="text-xs font-700 px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: 'var(--brand-700)', color: 'white', fontWeight: 700 }}
                      >
                        Complete Guide
                      </span>
                      <span
                        className="text-xs font-700 px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: 'var(--orange-100)', color: 'var(--accent-600)', fontWeight: 700 }}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs" style={{ color: 'var(--muted)' }}>{post.readTime} min read</span>
                    </div>
                    <h2
                      className="text-xl font-700 mb-3 group-hover:underline leading-snug"
                      style={{ fontWeight: 700, color: 'var(--navy-900)', fontSize: '1.25rem' }}
                    >
                      {post.title}
                    </h2>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: 'var(--muted)' }}>
                        {new Date(post.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                      <span className="text-sm font-700" style={{ color: 'var(--accent-600)', fontWeight: 700 }}>
                        Read the Complete Guide →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card flex flex-col hover:shadow-brand transition-shadow group"
              style={{ textDecoration: 'none' }}
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-700 px-2.5 py-1 rounded-full" style={{ backgroundColor: 'var(--orange-100)', color: 'var(--orange-600)', fontWeight: 700 }}>
                    {post.category}
                  </span>
                  <span className="text-xs" style={{ color: 'var(--muted)' }}>{post.readTime} min read</span>
                </div>
                <h2 className="text-base font-700 mb-3 group-hover:text-orange-600 transition-colors leading-snug" style={{ fontWeight: 700, color: 'var(--navy-900)', fontSize: '1rem' }}>
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--muted)' }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: 'var(--line)' }}>
                  <span className="text-xs" style={{ color: 'var(--muted)' }}>
                    {new Date(post.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <span className="text-sm font-600" style={{ color: 'var(--orange-600)', fontWeight: 600 }}>Read →</span>
                </div>
              </div>
            </Link>
            )
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg" style={{ color: 'var(--muted)' }}>No posts found matching your search.</p>
          <button onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} className="mt-4 btn-primary">Clear filters</button>
        </div>
      )}
    </>
  );
}
