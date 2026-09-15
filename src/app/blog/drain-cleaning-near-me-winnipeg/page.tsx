'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import FinalCTABand from '@/components/FinalCTABand';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';
import ContactForm from '@/components/ContactForm';
import PhoneLink from '@/components/PhoneLink';

const PHONE_DISPLAY = '+1 (204) 399-4413';
const PHONE_TEL = 'tel:+12043994413';
const PHONE_WA = 'https://wa.me/12043994413';
const EMAIL = 'prodraincleaningcentre@gmail.com';

const tocItems = [
{ id: 'what-near-me-should-surface', label: 'What "Drain Cleaning Near Me" Should Actually Surface' },
{ id: 'every-service', label: 'Every Kind of Drain Cleaning We Cover' },
{ id: 'snaking-or-jetting', label: 'Snaking or Jetting — Which One Actually Clears It' },
{ id: 'response-time', label: 'What Changes How Fast "Near Me" Actually Is' },
{ id: 'service-areas', label: 'Every Town We Answer Drain Cleaning Calls In' },
{ id: 'why-choose', label: 'Why Winnipeg Chooses Pro Drain Cleaning Limited' },
{ id: 'faq', label: 'Frequently Asked Questions' },
{ id: 'contact', label: 'Talk to Us Right Now' }];


const drainServices = [
{ label: 'Kitchen sink drain cleaning', detail: 'grease and food waste build-up, the most common household clog', anchor: 'kitchen-sink' },
{ label: 'Bathroom sink drain cleaning', detail: 'hair and soap scum in the trap and branch line', anchor: 'bathroom-sink' },
{ label: 'Bathtub drain cleaning', detail: 'standing water from hair and soap around the drum trap', anchor: 'bathtub' },
{ label: 'Shower drain cleaning', detail: 'pooling water, biofilm and hard-water scale', anchor: 'shower' },
{ label: 'Toilet drain unclogging', detail: 'from a simple paper blockage to a lodged object', anchor: 'toilet' },
{ label: 'Floor drain cleaning', detail: 'the basement drain that matters most when something else fails', anchor: 'floor-drain' },
{ label: 'Laundry drain cleaning', detail: 'lint and detergent scale narrowing the standpipe', anchor: 'laundry' },
{ label: 'Main sewer line cleaning', detail: 'the shared line every fixture in the building drains into', anchor: 'main-sewer-line' },
{ label: 'Drain snaking (auger service)', detail: 'the right first response for a sudden single-fixture blockage', anchor: 'drain-snaking' },
{ label: 'Hydro jet drain cleaning', detail: 'up to 4,000 PSI, restores the full pipe diameter rather than punching a hole through it', anchor: 'hydro-jetting' },
{ label: 'Camera drain inspections', detail: 'HD footage of exactly what\'s happening inside your line', anchor: 'camera-inspection' },
{ label: 'Drain odour diagnosis', detail: 'finding the actual source of a sewage smell', anchor: 'drain-odour' },
{ label: 'Preventive drain maintenance', detail: 'a scheduled clean instead of an emergency call', anchor: 'preventive-maintenance' }];


const towns = [
{ name: 'Winnipeg', slug: '/areas/drain-cleaning-winnipeg', note: 'every neighbourhood, older clay-pipe areas and newer developments alike' },
{ name: 'Selkirk', slug: '/areas/drain-cleaning-selkirk', note: null },
{ name: 'St. Norbert', slug: '/areas/drain-cleaning-st-norbert', note: null },
{ name: 'Headingley', slug: '/areas/drain-cleaning-headingley', note: null },
{ name: 'Oak Bluff', slug: '/areas/drain-cleaning-oak-bluff', note: null },
{ name: 'Lorette', slug: '/areas/drain-cleaning-lorette', note: null },
{ name: 'Niverville', slug: '/areas/drain-cleaning-niverville', note: null },
{ name: 'Steinbach', slug: '/areas/drain-cleaning-steinbach', note: null },
{ name: 'Stonewall', slug: '/areas/drain-cleaning-stonewall', note: null },
{ name: 'East St. Paul & West St. Paul', slug: '/areas/drain-cleaning-east-west-st-paul', note: null }];


const faqs = [
{
  q: 'How much does drain cleaning near me typically cost?',
  a: 'It depends on which line it is and what\'s actually blocking it — we give a realistic range on the phone and a firm price in writing on site. Full detail: How Much Does Drain Cleaning Cost in Winnipeg?',
  link: { href: '/blog/drain-cleaning-winnipeg-cost-guide', label: 'How Much Does Drain Cleaning Cost in Winnipeg?' }
},
{
  q: 'How fast can you get here?',
  a: 'Same-day for most Winnipeg calls, faster with priority dispatch for active water. Outlying towns depend on distance — we\'re upfront about that on the phone.',
  link: null
},
{
  q: 'Do you serve areas outside Winnipeg?',
  a: 'Yes — the full 100km radius, including Selkirk, St. Norbert, Steinbach, Niverville and Stonewall.',
  link: null
},
{
  q: 'Is hydro jetting better than snaking?',
  a: 'For a first-time single-fixture clog, snaking is usually enough. For repeat clogs, grease lines or roots, jetting is the real fix.',
  link: { href: '/blog/hydro-jetting-vs-snaking', label: 'Hydro Jetting vs Drain Snaking' }
},
{
  q: 'What if I don\'t know which drain is actually the problem?',
  a: 'Tell us the symptoms when you call — which fixtures are affected and how — and we\'ll identify it before quoting anything.',
  link: null
},
{
  q: 'Do you do camera inspections as part of drain cleaning?',
  a: 'Yes, where it\'s useful — to verify a line is genuinely clear, or to diagnose a repeat problem.',
  link: null
},
{
  q: 'Can you clean a drain the same day I call?',
  a: 'In most cases within Winnipeg, yes.',
  link: null
}];


const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'BlogPosting',
    headline: 'Drain Cleaning Near Me in Winnipeg — Every Service, Every Town, Real Availability',
    description:
    'Searching "drain cleaning near me"? See every drain service we offer, how to tell what you actually need, and every town within 100km we cover. Call +1 (204) 399-4413.',
    url: 'https://prodraincleaning.ca/blog/drain-cleaning-near-me-winnipeg',
    datePublished: '2026-08-28',
    dateModified: '2026-08-28',
    author: { '@type': 'Organization', name: 'Pro Drain Cleaning Limited' },
    publisher: {
      '@type': 'Organization',
      name: 'Pro Drain Cleaning Limited',
      url: 'https://prodraincleaning.ca'
    },
    image: {
      '@type': 'ImageObject',
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_17b757e33-1771885503955.png",
      description: 'Drain cleaning technician working on a residential line in Winnipeg'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://prodraincleaning.ca/blog/drain-cleaning-near-me-winnipeg'
    }
  },
  {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  },
  {
    '@type': 'BreadcrumbList',
    itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://prodraincleaning.ca' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://prodraincleaning.ca/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Drain Cleaning Near Me in Winnipeg',
      item: 'https://prodraincleaning.ca/blog/drain-cleaning-near-me-winnipeg'
    }]

  }]

};

function FAQItem({ faq, index }: {faq: typeof faqs[0];index: number;}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-xl overflow-hidden" style={{ borderColor: 'var(--line)' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
        style={{ backgroundColor: open ? 'var(--brand-100)' : 'var(--white)' }}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}>
        
        <span className="font-700 pr-4 text-base" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
          {faq.q}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform"
          style={{
            backgroundColor: 'var(--brand-700)',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)'
          }}
          aria-hidden="true">
          
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2v8M2 6h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open &&
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className="px-5 pb-5 text-sm leading-relaxed"
        style={{ color: 'var(--muted)', borderTop: '1px solid var(--line)' }}>
        
          <p className="pt-4">
            {faq.a}
            {faq.link &&
          <>
                {' '}
                <Link href={faq.link.href} className="font-700 hover:underline" style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                  {faq.link.label}
                </Link>
              </>
          }
          </p>
        </div>
      }
    </div>);

}

export default function DrainCleaningNearMePillarPost() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      

      <AnnouncementBar />
      <Header />
      <main id="main-content">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-white border-b" style={{ borderColor: 'var(--line)' }}>
          <div className="container-wide py-3">
            <ol className="flex items-center gap-2 text-sm flex-wrap" style={{ color: 'var(--muted)' }}>
              <li>
                <Link href="/" className="hover:underline" style={{ color: 'var(--navy-700)' }}>
                  Home
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <Link href="/blog" className="hover:underline" style={{ color: 'var(--navy-700)' }}>
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="truncate max-w-xs" style={{ color: 'var(--ink)' }}>
                Drain Cleaning Near Me in Winnipeg
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section-padding" style={{ backgroundColor: 'var(--brand-100)' }}>
          <div className="container-wide max-w-4xl">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span
                className="text-xs font-700 px-2.5 py-1 rounded-full"
                style={{ backgroundColor: 'var(--orange-100)', color: 'var(--accent-600)', fontWeight: 700 }}>
                
                Drain Cleaning
              </span>
              <span
                className="text-xs font-700 px-2.5 py-1 rounded-full"
                style={{ backgroundColor: 'var(--brand-700)', color: 'white', fontWeight: 700 }}>
                
                Complete Guide
              </span>
              <span className="text-sm" style={{ color: 'var(--muted)' }}>15 min read</span>
            </div>

            <h1 className="mb-4">
              Drain Cleaning Near Me in Winnipeg — Every Service, Every Town, Real Availability
            </h1>

            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
              By <strong>Pro Drain Cleaning Limited</strong> · Published August 28, 2026 · Updated August 28, 2026
            </p>

            {/* Hero image */}
            <div className="rounded-xl overflow-hidden mb-8">
              <img
                src="/assets/images/pro-drain-service-vehicle.png"
                alt="Drain cleaning technician working on a residential line in Winnipeg"
                width={1600}
                height={900}
                loading="eager"
                decoding="async"
                className="w-full object-cover"
                style={{ maxHeight: '500px', objectPosition: 'center' }} />
              
            </div>

            {/* Answer-first callout box */}
            <div
              className="rounded-xl p-6 mb-6"
              style={{
                backgroundColor: 'var(--brand-100)',
                border: '1px solid var(--brand-700)',
                borderLeft: '4px solid var(--brand-700)'
              }}>
              
              <p
                className="text-xs font-700 uppercase tracking-wider mb-3"
                style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                
                The Short Answer
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--ink)' }}>
                "Drain cleaning near me" should get you a local specialist who answers immediately, tells you honestly
                which service your specific drain needs, and shows up with the right equipment the first time. Pro Drain
                Cleaning Limited clears kitchen sinks, bathroom sinks, tubs, showers, toilets, floor drains, laundry
                lines and main sewer lines — using snaking, hydro jetting or camera inspection depending on what's
                actually wrong — across Winnipeg, Selkirk, St. Norbert and every community within 100km. Call or
                WhatsApp{' '}
                <PhoneLink className="font-700 hover:underline" style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                  {PHONE_DISPLAY}
                </PhoneLink>
                , 24/7.
              </p>
            </div>

            {/* Quick-decision box */}
            <div
              className="rounded-xl p-6"
              style={{
                backgroundColor: '#fff8f5',
                border: '2px solid var(--accent-600)'
              }}>
              
              <p
                className="text-sm font-700 uppercase tracking-wider mb-4"
                style={{ color: 'var(--accent-600)', fontWeight: 700 }}>
                
                Which Drain Service Do You Actually Need?
              </p>
              <ul className="flex flex-col gap-3">
                {[
                'One fixture, slow or blocked for the first time — likely a straightforward cable/snake job',
                'The same drain keeps clogging every few weeks or months — the pipe wall probably needs jetting, not another cable pass',
                'More than one fixture backing up together — that\'s your main sewer line, not an individual drain',
                'You\'ve had two or more backups this year, or you\'re buying an older home — get a camera inspection before anything else',
                'Not sure at all — call and describe the symptoms; we\'ll tell you which one it actually is before quoting anything'].
                map((item, i) =>
                <li key={i} className="flex items-start gap-3">
                    <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-700"
                    style={{ backgroundColor: 'var(--accent-600)', color: 'white', fontWeight: 700, marginTop: '2px' }}>
                    
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: 'var(--ink)' }}>
                      {item}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* Main content with sidebar TOC */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Article body */}
              <article className="lg:col-span-3">

                {/* Section: What near me should surface */}
                <div id="what-near-me-should-surface" className="scroll-mt-24">
                  <h2 className="mt-0 mb-4">What "Drain Cleaning Near Me" Should Actually Surface</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    A genuine local drain cleaning company is different from a national lead-generation site in a few
                    obvious ways: a real person answers immediately rather than taking a message, they ask what's
                    actually happening before quoting anything, and they carry cabling, jetting and camera equipment on
                    the truck as standard rather than needing to "come back with the right tool." If a "near me" result
                    can't tell you a rough price range over the phone before sending anyone out, that's worth noticing
                    before you book.
                  </p>
                </div>

                {/* Section: Every service */}
                <div id="every-service" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Every Kind of Drain Cleaning We Cover</h2>
                  <ul className="flex flex-col gap-3 mb-6">
                    {drainServices.map((service, i) =>
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                        <span style={{ color: 'var(--brand-700)', flexShrink: 0, marginTop: '2px' }}>•</span>
                        <span>
                          <Link
                          href={`/drain-cleaning-winnipeg#${service.anchor}`}
                          className="font-700 hover:underline"
                          style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                          
                            {service.label}
                          </Link>
                          {' '}— {service.detail}
                        </span>
                      </li>
                    )}
                  </ul>
                  <div
                    className="rounded-xl p-5"
                    style={{ backgroundColor: 'var(--brand-100)', border: '1px solid var(--brand-700)' }}>
                    
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ink)' }}>
                      Full detail on every one of these, including what's included:{' '}
                      <Link
                        href="/drain-cleaning-winnipeg"
                        className="font-700 hover:underline"
                        style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                        
                        Drain Cleaning Winnipeg
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Section: Snaking or jetting */}
                <div id="snaking-or-jetting" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Snaking or Jetting — Which One Actually Clears It</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    A cable machine punches a channel through a blockage. Hydro jetting removes what's coating the pipe
                    wall and flushes it out of the system entirely. The first is right for a sudden, first-time clog.
                    The second is right for anything that keeps coming back, restaurant grease lines, and root
                    regrowth. Full comparison:{' '}
                    <Link
                      href="/blog/hydro-jetting-vs-snaking"
                      className="font-700 hover:underline"
                      style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                      
                      Hydro Jetting vs Drain Snaking
                    </Link>
                  </p>
                </div>

                {/* Section: Response time */}
                <div id="response-time" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">What Changes How Fast "Near Me" Actually Is</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Response time depends on where you are and what's happening. Same-day is standard for most Winnipeg
                    calls, with priority dispatch for active flooding or a sewage backup. For towns further from the
                    city — Steinbach, Portage la Prairie, Gimli — response time depends on distance and time of day,
                    and we'll always tell you honestly on the phone rather than promise something we can't deliver.
                  </p>
                </div>

                {/* Section: Service areas */}
                <div id="service-areas" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Every Town We Answer Drain Cleaning Calls In</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Same live-answered line, same equipment, same upfront pricing everywhere:
                  </p>
                  <ul className="flex flex-col gap-2 mb-6">
                    {towns.map((town, i) =>
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                        <span style={{ color: 'var(--brand-700)', flexShrink: 0, marginTop: '2px' }}>•</span>
                        <span>
                          <Link
                          href={town.slug}
                          className="font-700 hover:underline"
                          style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                          
                            {town.name}
                          </Link>
                          {town.note ? ` — ${town.note}` : ''}
                        </span>
                      </li>
                    )}
                    <li className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                      <span style={{ color: 'var(--brand-700)', flexShrink: 0, marginTop: '2px' }}>•</span>
                      <span>
                        Ile des Chenes, St. Adolphe, Oakbank, Dugald, Beausejour, Teulon, Gimli, Portage la Prairie,
                        Morris and Carman — and every community within 100km of Winnipeg.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Section: Why choose */}
                <div id="why-choose" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Why Winnipeg Chooses Pro Drain Cleaning Limited for Drain Cleaning</h2>
                  <ul className="flex flex-col gap-3 mb-6">
                    {[
                    'Drains and sewers are all we do — not a sideline between other jobs',
                    'Answered live, 24/7, every day of the year',
                    'Full-size cabling, a hydro jetter, an HD camera and a locator on every truck as standard',
                    'Upfront flat pricing, approved by you before work starts',
                    'Camera-verified results, with footage sent to you',
                    'Locally owned and operated in Winnipeg'].
                    map((item, i) =>
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                        <span className="flex-shrink-0 mt-0.5" style={{ color: 'var(--brand-700)' }} aria-hidden="true">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                            d="M3 8l3.5 3.5L13 4.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round" />
                          
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* FAQ Section */}
                <div id="faq" className="scroll-mt-24 mt-12">
                  <h2 className="mb-6">Frequently Asked Questions</h2>
                  <div className="flex flex-col gap-3">
                    {faqs.map((faq, i) =>
                    <FAQItem key={i} faq={faq} index={i} />
                    )}
                  </div>
                </div>

                {/* Contact section */}
                <div id="contact" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Talk to Us Right Now</h2>
                  <div className="flex flex-col gap-2 mb-6">
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ink)' }}>
                      Call or WhatsApp:{' '}
                      <PhoneLink className="font-700 hover:underline" style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                        {PHONE_DISPLAY}
                      </PhoneLink>{' '}
                      — answered 24 hours a day, every day of the year
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ink)' }}>
                      Email:{' '}
                      <Link href={`mailto:${EMAIL}`} className="font-700 hover:underline" style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                        {EMAIL}
                      </Link>
                    </p>
                  </div>

                  <div
                    className="rounded-xl p-6"
                    style={{ backgroundColor: 'var(--brand-100)', border: '1px solid var(--brand-700)' }}>
                    
                    <h3 className="text-lg font-700 mb-4" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                      Send Us a Message
                    </h3>
                    <ContactForm prefilledService="Drain Cleaning (General)" />
                  </div>
                </div>

                {/* Related Reading */}
                <div className="mt-12 pt-8 border-t" style={{ borderColor: 'var(--line)' }}>
                  <h2 className="text-xl font-700 mb-4" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                    Related Reading
                  </h2>
                  <ul className="flex flex-col gap-3">
                    {[
                    { href: '/drain-cleaning-winnipeg', label: 'Drain Cleaning Winnipeg', note: 'our full drain cleaning service page' },
                    { href: '/blog/hydro-jetting-vs-snaking', label: 'Hydro Jetting vs Drain Snaking: Which Does Your Pipe Actually Need?', note: null },
                    { href: '/blog/drain-cleaning-winnipeg-cost-guide', label: 'How Much Does Drain Cleaning Cost in Winnipeg?', note: null },
                    { href: '/blog/drain-cleaning-mistakes-homeowners-make', label: '11 Drain Cleaning Mistakes Winnipeg Homeowners Make Every Year', note: null },
                    { href: '/compare/pro-drain-cleaning-vs-diy', label: 'Pro Drain Cleaning vs. DIY', note: null }].
                    map((link, i) =>
                    <li key={i} className="flex items-start gap-2 text-sm">
                        <span style={{ color: 'var(--brand-700)', flexShrink: 0, marginTop: '2px' }}>→</span>
                        <Link
                        href={link.href}
                        className="hover:underline font-600"
                        style={{ color: 'var(--brand-700)', fontWeight: 600 }}>
                        
                          {link.label}
                        </Link>
                        {link.note && <span style={{ color: 'var(--muted)' }}> — {link.note}</span>}
                      </li>
                    )}
                  </ul>
                </div>

                {/* End CTA */}
                <div
                  className="mt-12 rounded-xl p-8 text-center"
                  style={{ backgroundColor: 'var(--brand-700)', color: 'white' }}>
                  
                  <h2 className="text-2xl font-700 mb-3" style={{ fontWeight: 700, color: 'white' }}>
                    Blocked drain right now?
                  </h2>
                  <p className="mb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    Pro Drain Cleaning Limited answers 24 hours a day, 7 days a week, across Winnipeg, Selkirk,
                    St. Norbert and every community within 100 km. Upfront pricing before we start — always.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <PhoneLink
                      href={PHONE_TEL}
                      className="btn-primary"
                      style={{ backgroundColor: 'var(--accent-600)', color: 'white' }}>
                      
                      Call {PHONE_DISPLAY}
                    </PhoneLink>
                    <Link
                      href={PHONE_WA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ borderColor: 'white', color: 'white' }}>
                      
                      WhatsApp Us
                    </Link>
                    <Link
                      href={`mailto:${EMAIL}`}
                      className="btn-secondary"
                      style={{ borderColor: 'white', color: 'white' }}>
                      
                      Email Us
                    </Link>
                  </div>
                </div>
              </article>

              {/* Sticky TOC sidebar */}
              <aside className="hidden lg:block lg:col-span-1">
                <div className="sticky top-24">
                  <div
                    className="rounded-xl p-5"
                    style={{ backgroundColor: 'var(--brand-100)', border: '1px solid var(--brand-700)' }}>
                    
                    <p
                      className="text-xs font-700 uppercase tracking-wider mb-4"
                      style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                      
                      On This Page
                    </p>
                    <nav aria-label="Table of contents">
                      <ol className="flex flex-col gap-2">
                        {tocItems.map((item) =>
                        <li key={item.id}>
                            <a
                            href={`#${item.id}`}
                            className="text-sm hover:underline block leading-snug"
                            style={{
                              color: activeSection === item.id ? 'var(--brand-700)' : 'var(--muted)',
                              fontWeight: activeSection === item.id ? 700 : 400
                            }}>
                            
                              {item.label}
                            </a>
                          </li>
                        )}
                      </ol>
                    </nav>

                    <div className="mt-6 pt-5 border-t" style={{ borderColor: 'var(--brand-700)' }}>
                      <p className="text-xs font-700 mb-3" style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                        Need help now?
                      </p>
                      <PhoneLink
                        href={PHONE_TEL}
                        className="block text-center btn-primary text-sm w-full"
                        style={{ backgroundColor: 'var(--accent-600)', color: 'white' }}>
                        
                        Call {PHONE_DISPLAY}
                      </PhoneLink>
                      <Link
                        href={PHONE_WA}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center mt-2 text-sm py-2 px-4 rounded-lg border font-600 hover:opacity-80 transition-opacity"
                        style={{ borderColor: 'var(--brand-700)', color: 'var(--brand-700)', fontWeight: 600 }}>
                        
                        WhatsApp Us
                      </Link>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <FinalCTABand />
      </main>
      <Footer />
      <MobileActionBar />
    </>);

}