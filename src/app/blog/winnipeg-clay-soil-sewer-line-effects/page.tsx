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
{ id: 'signs-ground-movement', label: 'Signs Ground Movement May Be Affecting Your Line' },
{ id: 'how-it-affects', label: 'How Clay Soil Movement Affects a Sewer Line' },
{ id: 'slow-cumulative', label: 'Why This Is a Slow, Cumulative Problem' },
{ id: 'compounds-with-age', label: 'Why This Compounds With Pipe Age' },
{ id: 'camera-confirms', label: 'How a Camera Inspection Confirms This' },
{ id: 'what-can-be-done', label: 'What Can Be Done About It' },
{ id: 'service-areas', label: 'Every Area We Provide Sewer Line Inspections In' },
{ id: 'faq', label: 'Frequently Asked Questions' },
{ id: 'contact', label: 'Talk to Us Right Now' }];


const faqs = [
{
  q: 'Is clay soil movement something every Winnipeg home has to worry about?',
  a: "It's a general regional factor, not a guaranteed problem for every property — pipe material, age, and specific soil conditions all play a role."
},
{
  q: 'How would I know if this is actually affecting my sewer line?',
  a: 'Recurring slow drainage or backups with no clear single cause are the main signs — a camera inspection can confirm the actual cause.'
},
{
  q: 'Can this be prevented?',
  a: 'Not entirely, since it\'s a natural soil process, but catching it early with periodic inspection can mean a smaller, more targeted fix rather than a full-line problem.'
},
{
  q: 'Does this mean my sewer line will eventually need full replacement?',
  a: 'Not necessarily — many issues found are localized and can be addressed without replacing the whole line; the inspection determines the actual scope.'
},
{
  q: "Is this related to the tree root problems I've heard about?",
  a: "They're related but distinct — root intrusion happens at pipe joints, and joint gaps from ground movement can actually make root intrusion easier, so the two issues often compound each other."
}];


const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'BlogPosting',
    headline: "How Winnipeg's Clay Soil Affects Your Sewer Line",
    description:
    "Winnipeg sits on heavy clay soil that shifts with moisture — a real factor in sewer line problems most homeowners never hear about. Here's how it works.",
    url: 'https://prodraincleaning.ca/blog/winnipeg-clay-soil-sewer-line-effects',
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
      url: 'https://prodraincleaning.ca/assets/images/drain-camera-inspection-monitor.png',
      description: 'Inspecting a Winnipeg sewer line affected by clay soil movement'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://prodraincleaning.ca/blog/winnipeg-clay-soil-sewer-line-effects'
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
      name: 'Clay Soil & Sewer Lines',
      item: 'https://prodraincleaning.ca/blog/winnipeg-clay-soil-sewer-line-effects'
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


export default function ClaySoilSewerLinePost() {
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
                Clay Soil & Sewer Lines
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

                Guides
              </span>
              <span className="text-sm" style={{ color: 'var(--muted)' }}>7 min read</span>
            </div>

            <h1 className="mb-4">
              How Winnipeg's Clay Soil Affects Your Sewer Line
            </h1>

            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
              By <strong>Pro Drain Cleaning Limited</strong> · Published September 17, 2026 · Updated September 17, 2026
            </p>

            {/* Hero image */}
            <div className="rounded-xl overflow-hidden mb-8">
              {/*
                UPLOAD PLACEHOLDER — replace the src below with your own photo path.
                Example: src="/assets/images/clay-soil-sewer-line-offset-joint-winnipeg.jpg"
                This is the only line you need to change.
              */}
              <SwappableHeroImage
                src="/assets/images/drain-camera-inspection-monitor.png"
                alt="Inspecting a Winnipeg sewer line affected by clay soil movement"
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
                Winnipeg sits on heavy clay soil, largely a result of the Red River Valley's geological history, and clay soil expands when wet and contracts when it dries — a cycle that repeats every year with the seasons. That movement puts real, ongoing stress on a rigid pipe buried in it, which over years can cause joints to shift, sections to crack, or a line to develop a low spot where waste collects instead of flowing through. It's a genuinely regional factor that many homeowners never hear about until a sewer line problem shows up. Pro Drain Cleaning Limited provides sewer camera inspections across Winnipeg and every community within 100km to check the actual condition of your line. Call or WhatsApp{' '}
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

            {/* Signs Ground Movement May Be Affecting Your Line quick-reference box */}
            <div
              id="signs-ground-movement"
              className="rounded-xl p-6 scroll-mt-24"
              style={{
                backgroundColor: '#fff8f5',
                border: '2px solid var(--accent-600)'
              }}>

              <p
                className="text-sm font-700 uppercase tracking-wider mb-4"
                style={{ color: 'var(--accent-600)', fontWeight: 700 }}>

                Signs Ground Movement May Be Affecting Your Line
              </p>
              <ul className="flex flex-col gap-3">
                {[
                'Recurring slow drainage or backups with no clear single cause',
                'A section of yard that seems to settle, sink, or shift over time near where the sewer line runs',
                "Cracks in a driveway or walkway roughly tracing the sewer line's path",
                'A sewer line that\'s needed clearing more than once for what seems like the same recurring issue'].
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

                {/* Section: How It Affects */}
                <div id="how-it-affects" className="scroll-mt-24">
                  <h2 className="mt-0 mb-4">How Clay Soil Movement Affects a Sewer Line</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    A sewer line runs in a relatively straight, gently sloped path from the house to the municipal connection, relying on consistent slope to let gravity move wastewater along. When the clay soil around and beneath the pipe expands and contracts seasonally, it can gradually shift sections of pipe out of their original alignment — creating a low spot (called a "belly") where waste and water collect instead of continuing to flow, or opening gaps at pipe joints where roots or soil can intrude.
                  </p>
                </div>

                {/* Mid-article CTA box (orange accent) — after "How Clay Soil Movement Affects a Sewer Line" */}
                <div
                  className="rounded-xl p-6 mb-12"
                  style={{ backgroundColor: '#fff8f5', border: '2px solid var(--accent-600)' }}>

                  <p className="font-700 mb-2 text-lg" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                    Want the actual condition of your sewer line confirmed?
                  </p>
                  <p className="text-sm mb-5 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Pro Drain Cleaning Limited provides camera inspections 24 hours a day, across Winnipeg and every community within 100km. Call, WhatsApp, or send us your details below.
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

                {/* Section: Slow, Cumulative Problem */}
                <div id="slow-cumulative" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Why This Is a Slow, Cumulative Problem</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Clay soil movement isn't a sudden event — it's a repeated seasonal cycle that adds up over many years. A sewer line can function normally for a long time before a slowly-developing bellied section or a shifted joint finally causes a noticeable backup. That's part of why sewer line issues in Winnipeg can feel like they "came out of nowhere" — the underlying cause was gradual, even though the symptom felt sudden.
                  </p>
                </div>

                {/* Section: Compounds With Age */}
                <div id="compounds-with-age" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Why This Compounds With Pipe Age</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Older pipe materials like clay pipe (see our related post on{' '}
                    <Link
                      href="/blog/cast-iron-clay-pipes-older-winnipeg-homes"
                      className="hover:underline font-600"
                      style={{ color: 'var(--brand-700)', fontWeight: 600 }}>

                      cast iron and clay pipes in older Winnipeg homes
                    </Link>
                    ) are naturally jointed in shorter sections, which gives ground movement more places to create a gap or offset than a single continuous modern pipe would have. This is part of why older Winnipeg properties see this issue more than newer builds with modern pipe materials, though it isn't exclusive to older homes.
                  </p>
                </div>

                {/* Section: Camera Confirms */}
                <div id="camera-confirms" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">How a Camera Inspection Confirms This</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    A sewer camera run through the line can directly show a bellied section, an offset joint, or a crack caused by ground movement — rather than guessing based on symptoms alone. This is the same process used for any sewer line assessment; see our full{' '}
                    <Link
                      href="/blog/sewer-camera-inspection-before-buying-house"
                      className="hover:underline font-600"
                      style={{ color: 'var(--brand-700)', fontWeight: 600 }}>

                      camera inspection guide
                    </Link>{' '}
                    for how it works.
                  </p>
                </div>

                {/* Section: What Can Be Done */}
                <div id="what-can-be-done" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">What Can Be Done About It</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Depending on what the inspection shows, options range from clearing and monitoring a minor issue to repairing or replacing a specific damaged section. A full-line replacement isn't always necessary — the inspection is what determines the actual scope needed, rather than assuming the worst case.
                  </p>
                </div>

                {/* Section: Service Areas */}
                <div id="service-areas" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Every Area We Provide Sewer Line Inspections In</h2>
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
                      prefilledService="Main Sewer Line"
                      prefilledUrgency="few-days" />

                  </div>
                </div>

                {/* Related Reading */}
                <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--line)' }}>
                  <h2 className="mb-4">Related Reading</h2>
                  <ul className="flex flex-col gap-3">
                    {[
                    {
                      href: '/blog/cast-iron-clay-pipes-older-winnipeg-homes',
                      label: 'Cast Iron and Clay Pipes in Older Winnipeg Homes'
                    },
                    {
                      href: '/blog/sewer-camera-inspection-before-buying-house',
                      label: 'Should You Get a Sewer Camera Inspection Before Buying a Winnipeg Home?'
                    },
                    {
                      href: '/blog/sewer-line-cleaning-winnipeg-signs-you-need-it',
                      label: 'Sewer Line Cleaning Winnipeg: 7 Signs You Need It Now'
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
                        Recurring sewer line issues?
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
              Noticed Recurring Sewer Line Issues at Your Winnipeg Property?
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--brand-100)' }}>
              Get the actual cause confirmed with a camera inspection. Pro Drain Cleaning Limited answers 24 hours a day, 7 days a week, across Winnipeg, Selkirk, St. Norbert and every community within 100km. Upfront pricing before we start — always.
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
