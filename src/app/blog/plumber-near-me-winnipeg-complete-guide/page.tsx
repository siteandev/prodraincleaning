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
{ id: 'why-trap', label: '"Plumber Near Me" Searches Are Often a Trap' },
{ id: 'what-handles', label: 'What a Good Local Plumber Actually Handles' },
{ id: 'cost-factors', label: 'What Actually Determines the Cost' },
{ id: 'plumbing-vs-drain', label: 'When It\'s a Plumbing Job vs. a Drain or Sewer Job' },
{ id: 'service-areas', label: 'Every Town We Answer Plumbing Calls In' },
{ id: 'why-choose', label: 'Why Winnipeg Chooses Pro Drain Cleaning Limited' },
{ id: 'faq', label: 'Frequently Asked Questions' },
{ id: 'contact', label: 'Talk to Us Right Now' }];


const faqs = [
{
  q: 'Is "plumber near me" the same as a local, independent plumber?',
  a: 'Not always — many results are lead-generation sites or multi-city franchises. Ask directly whether the company you\'re speaking to does the work themselves.'
},
{
  q: 'How fast can a plumber near me actually arrive?',
  a: 'For us, same-day for most Winnipeg calls, with response time to outlying towns depending on distance and time of day — we\'ll tell you honestly on the phone.'
},
{
  q: 'Do you charge a call-out fee just to look at the problem?',
  a: 'No — we do not charge a call-out or diagnostic fee just to assess the problem. You pay for the work once you have approved the flat price in writing, not for the visit itself.'
},
{
  q: 'What\'s the difference between calling you for a "plumbing" problem versus a "drain" problem?',
  a: 'Leaking, failed fixtures, and installations are plumbing. Anything not draining properly is drain and sewer work. We cover both either way.'
},
{
  q: 'Do you serve areas outside Winnipeg, or just the city?',
  a: 'Yes — Selkirk, St. Norbert, Steinbach, Niverville, Stonewall and every other community within 100km, at the same standard.'
},
{
  q: 'Should I get a price over the phone before booking?',
  a: 'Yes, always — a legitimate company gives you a realistic range before anyone comes out, and a firm price in writing before starting.'
},
{
  q: 'Do you install backwater valves and sump pumps, or only repair them?',
  a: 'Both — new installations and repairs to existing equipment.'
}];


const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'BlogPosting',
    headline: 'Plumber Near Me in Winnipeg — What "Near Me" Should Actually Get You',
    description:
    'Searching for a plumber near you in Winnipeg? See what a real local plumber should offer, how to vet one fast, and every town within 100km we cover. Call +1 (204) 399-4413.',
    url: 'https://prodraincleaning.ca/blog/plumber-near-me-winnipeg-complete-guide',
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
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_12ac3c371-1763295220735.png",
      description: 'Licensed plumber arriving at a Winnipeg home for a service call'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://prodraincleaning.ca/blog/plumber-near-me-winnipeg-complete-guide'
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
      name: 'Plumber Near Me in Winnipeg — Complete Guide',
      item: 'https://prodraincleaning.ca/blog/plumber-near-me-winnipeg-complete-guide'
    }]

  }]

};

function FAQItem({ faq, index }: {faq: {q: string;a: string;};index: number;}) {
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
        
          <p className="pt-4">{faq.a}</p>
        </div>
      }
    </div>);

}

export default function PlumberNearMePillarPost() {
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
                Plumber Near Me in Winnipeg — Complete Guide
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
                
                Plumbing
              </span>
              <span
                className="text-xs font-700 px-2.5 py-1 rounded-full"
                style={{ backgroundColor: 'var(--brand-700)', color: 'white', fontWeight: 700 }}>
                
                Complete Guide
              </span>
              <span className="text-sm" style={{ color: 'var(--muted)' }}>14 min read</span>
            </div>

            <h1 className="mb-4">
              Plumber Near Me in Winnipeg — What "Near Me" Should Actually Get You
            </h1>

            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
              By <strong>Pro Drain Cleaning Limited</strong> · Published August 28, 2026 · Updated August 28, 2026
            </p>

            {/* Hero image */}
            <div className="rounded-xl overflow-hidden mb-8">
              <img
                src="/assets/images/pro-drain-service-vehicle.png"
                alt="Licensed plumber arriving at a Winnipeg home for a service call"
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
                borderLeftWidth: '4px',
                borderLeft: '4px solid var(--brand-700)'
              }}>
              
              <p
                className="text-xs font-700 uppercase tracking-wider mb-3"
                style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                
                The Short Answer
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--ink)' }}>
                When you search "plumber near me," you want someone who can actually be at your address today — not a
                lead-generation site that resells your phone number to three different subcontractors, or a call centre
                for a company two provinces away. Pro Drain Cleaning Limited is a locally owned plumbing and drain
                specialist based in Winnipeg, answering live 24 hours a day across Winnipeg, Selkirk, St. Norbert and
                every community within 100km, with a technician who carries the equipment for the job on the first
                visit. Call or WhatsApp{' '}
                <PhoneLink
                  className="font-700 hover:underline"
                  style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                  {PHONE_DISPLAY}
                </PhoneLink>
                .
              </p>
            </div>

            {/* Vetting checklist box */}
            <div
              className="rounded-xl p-6"
              style={{
                backgroundColor: '#fff8f5',
                border: '2px solid var(--accent-600)'
              }}>
              
              <p
                className="text-sm font-700 uppercase tracking-wider mb-4"
                style={{ color: 'var(--accent-600)', fontWeight: 700 }}>
                
                How to Vet Any "Plumber Near Me" Result in 60 Seconds
              </p>
              <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>
                Before you call the first result you see, check for these five things — they separate a genuine local
                plumber from a lead-generation middleman:
              </p>
              <ol className="flex flex-col gap-3">
                {[
                'Does a real person answer the phone, or does it go to a generic call centre that "will have someone reach out"?',
                'Will they give you a price range before sending anyone out, based on what you describe?',
                'Do they name an actual local service area, or is the address vague and out of province?',
                'Do they carry the equipment for common jobs on the truck already, or do they typically need to "come back another day"?',
                'Do they confirm the price in writing before starting work, or is it "we\'ll figure it out once we\'re there"?'].
                map((item, i) =>
                <li key={i} className="flex items-start gap-3">
                    <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-700"
                    style={{
                      backgroundColor: 'var(--accent-600)',
                      color: 'white',
                      fontWeight: 700,
                      marginTop: '2px'
                    }}>
                    
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: 'var(--ink)' }}>
                      {item}
                    </span>
                  </li>
                )}
              </ol>
              <p className="text-sm mt-4 leading-relaxed" style={{ color: 'var(--muted)' }}>
                If the answer to more than one of these is no, keep looking before you book.
              </p>
            </div>
          </div>
        </section>

        {/* Main content with sidebar TOC */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Article body */}
              <article className="lg:col-span-3">

                {/* Section: Why trap */}
                <div id="why-trap" className="scroll-mt-24">
                  <h2 className="mt-0 mb-4">Why "Plumber Near Me" Searches Are Often a Trap</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Here's what most people don't realize: a large share of the results for "plumber near me"aren't actually plumbers. They're lead-generation websites that collect your phone number and sell it to multiple local companies at once — which is why some people who fill out a"get a free quote" form
                    suddenly get three or four calls from different numbers within the hour. Others are large multi-city
                    franchise operations where the person answering the phone isn't local at all, and dispatch depends
                    entirely on which subcontractor happens to be free that day.
                  </p>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    None of that is necessarily dishonest, but it does mean "near me" doesn't automatically mean fast,
                    local, or accountable. The fastest way to check: call the number and ask two questions — "Are you
                    the company doing the work, or are you dispatching to someone else?" and "What's your typical
                    response time to my specific town?" A genuine local company answers both immediately, without
                    hesitation.
                  </p>
                </div>

                {/* Section: What handles */}
                <div id="what-handles" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">What a Good Local Plumber Actually Handles</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    A well-rounded local plumber covers far more than the emergency jobs people usually think of first:
                  </p>
                  <ul className="flex flex-col gap-3 mb-6">
                    {[
                    { label: 'Faucet repair', detail: 'drips, low pressure, worn cartridges and seats' },
                    { label: 'Toilet repair and installation', detail: 'running toilets, weak flushes, full replacements' },
                    { label: 'Garbage disposal repair', detail: 'jams, leaks, replacement' },
                    { label: 'Leak detection', detail: 'finding a hidden leak without tearing open walls or floors' },
                    { label: 'Pipe repair', detail: 'burst, corroded or split pipe, especially after a hard freeze' },
                    { label: 'Water line repair', detail: 'the main service line feeding your whole property' },
                    { label: 'Sump pump installation and repair', detail: 'critical ahead of spring melt' },
                    { label: 'Backwater valve installation', detail: 'protection against sewer backup during heavy rain' },
                    { label: 'Drain installation', detail: 'new fixtures, renovations, rough-ins' },
                    { label: 'Frozen pipe thawing', detail: 'a Winnipeg-specific need most of the year' }].
                    map((item, i) =>
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                        <span style={{ color: 'var(--brand-700)', flexShrink: 0, marginTop: '2px' }}>•</span>
                        <span>
                          <strong>{item.label}</strong> — {item.detail}
                        </span>
                      </li>
                    )}
                  </ul>
                  <div
                    className="rounded-xl p-5"
                    style={{ backgroundColor: 'var(--brand-100)', border: '1px solid var(--brand-700)' }}>
                    
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ink)' }}>
                      See the full breakdown with what's included in each:{' '}
                      <Link
                        href="/plumbing-services-winnipeg"
                        className="font-700 hover:underline"
                        style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                        
                        Plumbing Services Winnipeg
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Section: Cost factors */}
                <div id="cost-factors" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">What Actually Determines the Cost When You Search "Plumber Near Me"</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Prices vary for real reasons, not because companies are guessing: whether it's a scheduled
                    appointment or an emergency call, whether the job needs parts beyond a standard repair, how
                    accessible the fixture or line is, and how long the job genuinely takes once someone is on site. A
                    legitimate local plumber gives you a realistic range on the phone and a flat price in writing before
                    starting — never an open-ended hourly rate with no ceiling. Full detail on what changes the number:{' '}
                    <Link
                      href="/blog/drain-cleaning-winnipeg-cost-guide"
                      className="font-700 hover:underline"
                      style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                      
                      How Much Does Drain Cleaning Cost in Winnipeg?
                    </Link>
                  </p>
                </div>

                {/* Section: Plumbing vs drain */}
                <div id="plumbing-vs-drain" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">When It's a Plumbing Job vs. a Drain or Sewer Job</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Not everything under "plumbing" is the same specialty. If water isn't draining — a slow sink, a
                    blocked toilet, a backed-up floor drain — that's drain and sewer work, and it needs cabling, jetting
                    or camera equipment, not a standard plumbing toolkit. If water is leaking, a fixture has failed, or
                    you need something installed, that's general plumbing. We do both, but knowing which one you have
                    helps you describe the problem accurately when you call. Full comparison:{' '}
                    <Link
                      href="/compare/specialist-vs-general-plumber"
                      className="font-700 hover:underline"
                      style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                      
                      Drain &amp; Sewer Specialist vs. a General Plumber
                    </Link>
                  </p>
                </div>

                {/* Section: Service areas */}
                <div id="service-areas" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Every Town We Answer Plumbing Calls In</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Same live-answered line, same upfront pricing, everywhere in the service area:
                  </p>
                  <ul className="flex flex-col gap-2 mb-6">
                    {[
                    { name: 'Winnipeg', slug: '/areas/drain-cleaning-winnipeg', note: 'every neighbourhood, older and newer alike' },
                    { name: 'Selkirk', slug: '/areas/drain-cleaning-selkirk', note: null },
                    { name: 'St. Norbert', slug: '/areas/drain-cleaning-st-norbert', note: null },
                    { name: 'Headingley', slug: '/areas/drain-cleaning-headingley', note: null },
                    { name: 'Oak Bluff', slug: '/areas/drain-cleaning-oak-bluff', note: null },
                    { name: 'Lorette', slug: '/areas/drain-cleaning-lorette', note: null },
                    { name: 'Niverville', slug: '/areas/drain-cleaning-niverville', note: null },
                    { name: 'Steinbach', slug: '/areas/drain-cleaning-steinbach', note: null },
                    { name: 'Stonewall', slug: '/areas/drain-cleaning-stonewall', note: null },
                    { name: 'East St. Paul & West St. Paul', slug: '/areas/drain-cleaning-east-west-st-paul', note: null }].
                    map((town, i) =>
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
                  <h2 className="mb-4">Why Winnipeg Chooses Pro Drain Cleaning Limited</h2>
                  <ul className="flex flex-col gap-3 mb-6">
                    {[
                    'Answered live, 24/7 — no answering service, no callback queue',
                    'Upfront flat pricing, approved before any work starts',
                    'Commercial-grade equipment carried standard, not as an add-on',
                    'Locally owned and operated, working these specific communities',
                    'We handle both plumbing and drain/sewer work, so you don\'t need to guess which specialist to call'].
                    map((item, i) =>
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                        <span
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: 'var(--brand-700)' }}
                        aria-hidden="true">
                        
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
                      <PhoneLink
                        className="font-700 hover:underline"
                        style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                        {PHONE_DISPLAY}
                      </PhoneLink>{' '}
                      — answered 24 hours a day, every day of the year
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ink)' }}>
                      Email:{' '}
                      <Link
                        href={`mailto:${EMAIL}`}
                        className="font-700 hover:underline"
                        style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                        
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
                    <ContactForm prefilledService="General Plumbing Services" />
                  </div>
                </div>

                {/* Related Reading */}
                <div className="mt-12 pt-8 border-t" style={{ borderColor: 'var(--line)' }}>
                  <h2 className="text-xl font-700 mb-4" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                    Related Reading
                  </h2>
                  <ul className="flex flex-col gap-3">
                    {[
                    {
                      href: '/plumbing-services-winnipeg',
                      label: 'Plumbing Services Winnipeg',
                      note: 'our full plumbing service page'
                    },
                    {
                      href: '/compare/specialist-vs-general-plumber',
                      label: 'Drain & Sewer Specialist vs. a General Plumber',
                      note: null
                    },
                    {
                      href: '/blog/drain-cleaning-winnipeg-cost-guide',
                      label: 'How Much Does Drain Cleaning Cost in Winnipeg?',
                      note: null
                    },
                    {
                      href: '/blog/sump-pump-maintenance-checklist',
                      label: 'Winnipeg Sump Pump Maintenance: The Pre-Spring-Melt Checklist',
                      note: null
                    },
                    {
                      href: '/blog/backwater-valve-winnipeg',
                      label: 'Backwater Valves in Winnipeg: What They Cost and Why They\'re Worth It',
                      note: null
                    }].
                    map((link, i) =>
                    <li key={i} className="flex items-start gap-2 text-sm">
                        <span style={{ color: 'var(--brand-700)', flexShrink: 0, marginTop: '2px' }}>→</span>
                        <Link
                        href={link.href}
                        className="hover:underline font-600"
                        style={{ color: 'var(--brand-700)', fontWeight: 600 }}>
                        
                          {link.label}
                        </Link>
                        {link.note &&
                      <span style={{ color: 'var(--muted)' }}> — {link.note}</span>
                      }
                      </li>
                    )}
                  </ul>
                </div>

                {/* End CTA */}
                <div
                  className="mt-12 rounded-xl p-8 text-center"
                  style={{ backgroundColor: 'var(--brand-700)', color: 'white' }}>
                  
                  <h2
                    className="text-2xl font-700 mb-3"
                    style={{ fontWeight: 700, color: 'white' }}>
                    
                    Need a plumber who actually answers?
                  </h2>
                  <p className="mb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    Pro Drain Cleaning Limited answers 24 hours a day, 7 days a week, across Winnipeg, Selkirk,
                    St. Norbert and every community within 100 km. Upfront pricing before we start — always.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <PhoneLink
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
                              color:
                              activeSection === item.id ?
                              'var(--brand-700)' :
                              'var(--muted)',
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
                        className="block text-center btn-primary text-sm w-full"
                        style={{ backgroundColor: 'var(--accent-600)', color: 'white' }}>
                        Call {PHONE_DISPLAY}
                      </PhoneLink>
                      <Link
                        href={PHONE_WA}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center mt-2 text-sm py-2 px-4 rounded-lg border font-600 hover:opacity-80 transition-opacity"
                        style={{
                          borderColor: 'var(--brand-700)',
                          color: 'var(--brand-700)',
                          fontWeight: 600
                        }}>
                        
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