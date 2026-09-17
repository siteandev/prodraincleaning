'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import FinalCTABand from '@/components/FinalCTABand';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';
import ContactForm from '@/components/ContactForm';
import SwappableHeroImage from '@/components/PlaceholderHeroImage';
import PhoneLink from '@/components/PhoneLink';

const PHONE_DISPLAY = '+1 (204) 399-4413';
const PHONE_WA = 'https://wa.me/12043994413';
const EMAIL = 'prodraincleaningcentre@gmail.com';

const tocItems = [
{ id: 'signs', label: 'Signs a Pipe Is Frozen' },
{ id: 'why-winnipeg', label: 'Why Winnipeg Homes Are Especially Prone to This' },
{ id: 'how-to-thaw', label: 'How to Thaw a Frozen Pipe Safely' },
{ id: 'when-to-call', label: 'When to Stop and Call a Plumber Instead' },
{ id: 'already-burst', label: "If It's Already Burst" },
{ id: 'prevention', label: 'How to Prevent Pipes From Freezing Again' },
{ id: 'service-areas', label: 'Every Area We Serve for Frozen Pipe Calls' },
{ id: 'faq', label: 'Frequently Asked Questions' },
{ id: 'contact', label: 'Talk to Us Right Now' }];


const faqs = [
{
  q: 'Is it safe to thaw a frozen pipe myself?',
  a: 'Often yes, with gentle heat and an open tap — but stop and call if you can\'t find the frozen section or see any sign of damage.'
},
{
  q: 'How long does it take for a frozen pipe to thaw?',
  a: 'With steady gentle heat, often 30–45 minutes — if it\'s taking longer, the frozen section may be harder to reach than expected, which is when to call for help.'
},
{
  q: 'Can a frozen pipe burst even if I haven\'t turned the water on?',
  a: 'Yes — the pressure builds from the ice expanding inside the pipe, not from water flow, so it can split even with the tap closed.'
},
{
  q: 'What if I don\'t know where the frozen section is?',
  a: 'Don\'t guess by applying heat randomly along an inaccessible run — call a plumber rather than risk missing a compromised section.'
},
{
  q: 'Do you handle frozen pipe emergencies overnight?',
  a: 'Yes — answered 24 hours a day, every day of the year.'
}];


const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'BlogPosting',
    headline: 'Frozen Pipes in Winnipeg — How to Thaw Them Safely Before They Burst',
    description:
    'Frozen pipes in your Winnipeg home? Here\'s how to thaw them safely without causing a burst — and when to call a plumber instead of risking it yourself.',
    url: 'https://prodraincleaning.ca/blog/frozen-pipes-winnipeg-how-to-thaw-safely',
    datePublished: '2026-09-17',
    dateModified: '2026-09-17',
    author: { '@type': 'Organization', name: 'Pro Drain Cleaning Limited' },
    publisher: {
      '@type': 'Organization',
      name: 'Pro Drain Cleaning Limited',
      url: 'https://prodraincleaning.ca'
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://prodraincleaning.ca/assets/images/hero-emergency-drain-placeholder.png',
      description: 'Frozen pipe under a sink in a Winnipeg home'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://prodraincleaning.ca/blog/frozen-pipes-winnipeg-how-to-thaw-safely'
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
      name: 'Frozen Pipes in Winnipeg',
      item: 'https://prodraincleaning.ca/blog/frozen-pipes-winnipeg-how-to-thaw-safely'
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

// Town list with /areas/ links where pages exist
const serviceAreaTowns: {name: string;href?: string;}[] = [
{ name: 'Winnipeg', href: '/areas/drain-cleaning-winnipeg' },
{ name: 'Selkirk', href: '/areas/drain-cleaning-selkirk' },
{ name: 'St. Norbert', href: '/areas/drain-cleaning-st-norbert' },
{ name: 'Headingley', href: '/areas/drain-cleaning-headingley' },
{ name: 'Oak Bluff', href: '/areas/drain-cleaning-oak-bluff' },
{ name: 'Lorette', href: '/areas/drain-cleaning-lorette' },
{ name: 'Niverville', href: '/areas/drain-cleaning-niverville' },
{ name: 'Steinbach', href: '/areas/drain-cleaning-steinbach' },
{ name: 'Stonewall', href: '/areas/drain-cleaning-stonewall' },
{ name: 'East St. Paul', href: '/areas/drain-cleaning-east-west-st-paul' },
{ name: 'West St. Paul', href: '/areas/drain-cleaning-east-west-st-paul' },
{ name: 'Ile des Chenes' },
{ name: 'St. Adolphe' },
{ name: 'Oakbank' },
{ name: 'Dugald' },
{ name: 'Beausejour' },
{ name: 'Teulon' },
{ name: 'Gimli' },
{ name: 'Portage la Prairie' },
{ name: 'Morris' },
{ name: 'Carman' }];


export default function FrozenPipesWinnipegPost() {
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
                Frozen Pipes in Winnipeg
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

                Emergency
              </span>
              <span className="text-sm" style={{ color: 'var(--muted)' }}>8 min read</span>
            </div>

            <h1 className="mb-4">
              Frozen Pipes in Winnipeg — How to Thaw Them Safely Before They Burst
            </h1>

            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
              By <strong>Pro Drain Cleaning Limited</strong> · Published September 17, 2026 · Updated September 17, 2026
            </p>

            {/* Hero image */}
            <div className="rounded-xl overflow-hidden mb-8">
              {/*
                UPLOAD PLACEHOLDER — replace the src below with your own photo path.
                Example: src="/assets/images/frozen-pipe-under-sink-winnipeg.jpg"
                This is the only line you need to change.
              */}
              <SwappableHeroImage
                src="/assets/images/hero-emergency-drain-placeholder.png"
                alt="Frozen pipe under a sink in a Winnipeg home"
                lazy={false}
                width={1600}
                height={900}
                className="w-full object-cover"
              />
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
                If a pipe in your home has frozen, the safest first step is to open the nearest tap slightly and apply gentle heat to the frozen section — never an open flame. If you can't find the frozen section, the water hasn't started moving again after 30–45 minutes, or you notice any bulging, cracking, or wet insulation, stop and call a plumber. A pipe that's frozen and under pressure can split without warning, and once it does, thawing it yourself no longer helps. Pro Drain Cleaning Limited answers 24 hours a day across Winnipeg and every community within 100km. Call or WhatsApp{' '}
                <PhoneLink className="font-700 hover:underline" style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                  {PHONE_DISPLAY}
                </PhoneLink>.
              </p>
            </div>

            {/* Call + WhatsApp button pair directly under hero */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <PhoneLink
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-700 text-base transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--accent-600)', color: 'white', fontWeight: 700, textDecoration: 'none' }}>

                Call {PHONE_DISPLAY}
              </PhoneLink>
              <Link
                href={PHONE_WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-700 text-base transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--brand-700)', color: 'white', fontWeight: 700, textDecoration: 'none' }}>

                WhatsApp Us
              </Link>
            </div>

            {/* Signs a Pipe Is Frozen quick-reference box */}
            <div
              id="signs"
              className="rounded-xl p-6 scroll-mt-24"
              style={{
                backgroundColor: '#fff8f5',
                border: '2px solid var(--accent-600)'
              }}>

              <p
                className="text-sm font-700 uppercase tracking-wider mb-4"
                style={{ color: 'var(--accent-600)', fontWeight: 700 }}>

                Signs a Pipe Is Frozen
              </p>
              <ul className="flex flex-col gap-3">
                {[
                'No water, or barely a trickle, from one specific tap while others work fine',
                'Frost visible on an exposed section of pipe',
                'A tap that worked yesterday and doesn\'t today, with no other explanation',
                'Unusual smells from a drain or tap (can mean a frozen trap forcing sewer gas back up)',
                'Cold spots on a wall or floor near where pipes run'].
                map((item, i) =>
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--ink)' }}>
                    <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: 'var(--accent-600)' }}
                    aria-hidden="true">

                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 2v4M5 7.5v.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span>{item}</span>
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

                {/* Section: Why Winnipeg */}
                <div id="why-winnipeg" className="scroll-mt-24">
                  <h2 className="mt-0 mb-4">Why Winnipeg Homes Are Especially Prone to This</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Pipes running through uninsulated crawl spaces, exterior walls, unheated garages, or basement rim joists are the most common freeze points in Winnipeg homes, especially during extended cold snaps. Older homes with less wall insulation and homes where a vent or a gap has let cold air reach a pipe run are both common causes. It's rarely random — it's almost always a specific, identifiable cold spot in the plumbing run.
                  </p>
                </div>

                {/* Section: How to Thaw */}
                <div id="how-to-thaw" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">How to Thaw a Frozen Pipe Safely</h2>
                  <ol className="flex flex-col gap-4 mb-6">
                    {[
                    {
                      title: 'Open the affected tap slightly.',
                      text: 'Even a trickle of moving water helps prevent full freezing and gives you a way to tell when the ice has cleared.'
                    },
                    {
                      title: 'Locate the frozen section.',
                      text: 'Work along the pipe from the tap toward the main line, looking for frost, a bulge, or a noticeably colder section.'
                    },
                    {
                      title: 'Apply gentle, even heat.',
                      text: 'A hair dryer on low, an electric heating pad wrapped around the pipe, or towels soaked in hot water are safe options. Start near the tap and work toward the blockage.'
                    },
                    {
                      title: 'Never use an open flame.',
                      text: 'A blowtorch or other open flame on a pipe is a genuine fire risk and can also damage the pipe itself.'
                    },
                    {
                      title: 'Watch for water starting to flow.',
                      text: 'Once it does, keep the tap running at a trickle until you\'re confident the whole line has cleared.'
                    },
                    {
                      title: 'Stop if you can\'t find it, or if anything looks damaged.',
                      text: 'A bulge, a crack, or wet insulation means the pipe may already be compromised — thawing it further at that point can cause it to fail right as it clears.'
                    }].
                    map((step, i) =>
                    <li key={i} className="flex items-start gap-4">
                        <span
                        className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-700"
                        style={{ backgroundColor: 'var(--brand-700)', color: 'white', fontWeight: 700 }}>

                          {i + 1}
                        </span>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--ink)' }}>
                          <span style={{ fontWeight: 700, color: 'var(--navy-900)' }}>{step.title}</span>{' '}
                          {step.text}
                        </p>
                      </li>
                    )}
                  </ol>
                </div>

                {/* Mid-article CTA box (orange accent) */}
                <div
                  className="rounded-xl p-6 mb-12"
                  style={{ backgroundColor: '#fff8f5', border: '2px solid var(--accent-600)' }}>

                  <p className="font-700 mb-2 text-lg" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                    Not comfortable thawing it yourself?
                  </p>
                  <p className="text-sm mb-5 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Pro Drain Cleaning Limited thaws frozen pipes safely, 24 hours a day, across Winnipeg and every community within 100km. Call, WhatsApp, or send us your details below.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <PhoneLink
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-700 text-sm transition-opacity hover:opacity-90"
                      style={{ backgroundColor: 'var(--accent-600)', color: 'white', fontWeight: 700, textDecoration: 'none' }}>

                      Call {PHONE_DISPLAY}
                    </PhoneLink>
                    <Link
                      href={PHONE_WA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-700 text-sm transition-opacity hover:opacity-90"
                      style={{ backgroundColor: 'var(--brand-700)', color: 'white', fontWeight: 700, textDecoration: 'none' }}>

                      WhatsApp Us
                    </Link>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-700 text-sm transition-opacity hover:opacity-90"
                      style={{ backgroundColor: 'white', color: 'var(--accent-600)', border: '2px solid var(--accent-600)', fontWeight: 700, textDecoration: 'none' }}>

                      Request a Callback
                    </a>
                  </div>
                </div>

                {/* Section: When to Call */}
                <div id="when-to-call" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">When to Stop and Call a Plumber Instead</h2>
                  <ul className="flex flex-col gap-3 mb-6">
                    {[
                    'You can\'t locate the frozen section',
                    'The pipe is in a wall or ceiling and not accessible',
                    'You see any sign of bulging, cracking, or water already leaking',
                    'More than one pipe is frozen at once',
                    'The tap still isn\'t flowing after 30–45 minutes of gentle heat'].
                    map((item, i) =>
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--ink)' }}>
                        <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: 'var(--brand-700)' }}
                        aria-hidden="true">

                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M5 2v4M5 7.5v.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Section: If It's Already Burst */}
                <div id="already-burst" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">If It's Already Burst</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    If a frozen pipe has already split, shut off the main water valve immediately and call for emergency service rather than attempting a repair — see our{' '}
                    <Link
                      href="/blog/emergency-plumber-winnipeg-24-7-guide"
                      className="hover:underline font-600"
                      style={{ color: 'var(--brand-700)', fontWeight: 600 }}>

                      burst pipe guide
                    </Link>{' '}
                    for the full first-steps checklist.
                  </p>
                </div>

                {/* Section: Prevention */}
                <div id="prevention" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">How to Prevent Pipes From Freezing Again</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Keeping cabinet doors open under sinks on exterior walls during cold snaps, letting a faucet drip on the coldest nights, sealing gaps where cold air reaches a pipe run, and insulating pipes in unheated spaces (crawl spaces, garages, rim joists) are the most effective, low-cost prevention steps for Winnipeg winters.
                  </p>
                </div>

                {/* Section: Service Areas */}
                <div id="service-areas" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Every Area We Serve for Frozen Pipe Calls</h2>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                    {serviceAreaTowns.map((town) =>
                    <li key={town.name} className="flex items-center gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                        <span style={{ color: 'var(--brand-700)', flexShrink: 0 }}>•</span>
                        {town.href ?
                      <Link href={town.href} className="hover:underline" style={{ color: 'var(--brand-700)' }}>
                            {town.name}
                          </Link> :

                      <span>{town.name}</span>
                      }
                      </li>
                    )}
                  </ul>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    And every community within 100km of Winnipeg.
                  </p>
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

                {/* Contact Section */}
                <div id="contact" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Talk to Us Right Now</h2>
                  <div className="flex flex-col gap-3 mb-8">
                    <p className="text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
                      Call or WhatsApp:{' '}
                      <PhoneLink className="font-700 hover:underline" style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                        {PHONE_DISPLAY}
                      </PhoneLink>{' '}
                      — answered 24 hours a day, every day of the year
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
                      Email:{' '}
                      <Link href={`mailto:${EMAIL}`} className="hover:underline" style={{ color: 'var(--brand-700)' }}>
                        {EMAIL}
                      </Link>
                    </p>
                  </div>

                  {/* Inline contact form */}
                  <div
                    className="rounded-xl p-6"
                    style={{ backgroundColor: 'var(--brand-100)', border: '1px solid var(--brand-700)' }}>

                    <p className="font-700 mb-4 text-lg" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                      Request a Callback
                    </p>
                    <ContactForm
                      prefilledService="Frozen Pipe Thawing"
                      prefilledUrgency="Emergency – happening now" />

                  </div>
                </div>

                {/* Related Reading */}
                <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--line)' }}>
                  <h2 className="mb-4">Related Reading</h2>
                  <ul className="flex flex-col gap-3">
                    {[
                    {
                      href: '/blog/emergency-plumber-winnipeg-24-7-guide',
                      label: 'Emergency Plumber in Winnipeg: 24/7 Guide'
                    },
                    {
                      href: '/blog/prevent-frozen-pipes-winnipeg',
                      label: 'Preventing Frozen Pipes in Winnipeg'
                    },
                    {
                      href: '/blog/sewer-backup-what-to-do',
                      label: 'Sewer Backup in Your Basement? Do These 7 Things First'
                    }].
                    map((link) =>
                    <li key={link.href} className="flex items-start gap-2 text-sm">
                        <span style={{ color: 'var(--brand-700)', flexShrink: 0, marginTop: '2px' }}>→</span>
                        <Link href={link.href} className="hover:underline" style={{ color: 'var(--brand-700)' }}>
                          {link.label}
                        </Link>
                      </li>
                    )}
                  </ul>
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

                      In This Guide
                    </p>
                    <nav aria-label="Table of contents">
                      <ol className="flex flex-col gap-2">
                        {tocItems.map((item) =>
                        <li key={item.id}>
                            <a
                            href={`#${item.id}`}
                            className="text-sm leading-snug hover:underline block py-1 transition-colors"
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

                    <div
                      className="mt-6 pt-5"
                      style={{ borderTop: '1px solid var(--brand-700)' }}>

                      <p className="text-xs font-700 mb-3" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                        Pipe frozen right now?
                      </p>
                      <PhoneLink
                        className="block w-full text-center text-sm font-700 py-3 px-4 rounded-lg transition-opacity hover:opacity-90"
                        style={{
                          backgroundColor: 'var(--accent-600)',
                          color: 'white',
                          fontWeight: 700,
                          textDecoration: 'none'
                        }}>

                        Call {PHONE_DISPLAY}
                      </PhoneLink>
                      <Link
                        href={PHONE_WA}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center text-sm font-700 py-3 px-4 rounded-lg mt-2 transition-opacity hover:opacity-90"
                        style={{
                          backgroundColor: 'var(--brand-700)',
                          color: 'white',
                          fontWeight: 700,
                          textDecoration: 'none'
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

        {/* End CTA */}
        <section
          className="section-padding"
          style={{ backgroundColor: 'var(--brand-900)' }}>

          <div className="container-wide max-w-3xl text-center">
            <h2 className="mb-4" style={{ color: 'white' }}>
              Dealing With a Frozen Pipe Right Now?
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--brand-100)' }}>
              Don't risk a burst by guessing. Pro Drain Cleaning Limited answers 24 hours a day, 7 days a week, across Winnipeg, Selkirk, St. Norbert and every community within 100km. Upfront pricing before we start — always.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-700 text-base transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--accent-600)', color: 'white', fontWeight: 700, textDecoration: 'none' }}>

                Call {PHONE_DISPLAY}
              </PhoneLink>
              <Link
                href={PHONE_WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-700 text-base transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'white', color: 'var(--brand-900)', fontWeight: 700, textDecoration: 'none' }}>

                WhatsApp Us
              </Link>
            </div>
            <p className="mt-6 text-sm" style={{ color: 'var(--brand-100)' }}>
              Or email{' '}
              <Link href={`mailto:${EMAIL}`} className="hover:underline" style={{ color: 'white' }}>
                {EMAIL}
              </Link>
            </p>
          </div>
        </section>

        <FinalCTABand />
      </main>
      <Footer />
      <MobileActionBar />
    </>);

}
