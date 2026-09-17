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

const terms = [
{
  term: '1. Main shutoff valve',
  text: "The single valve that cuts water to the entire house. Every buyer should know where this is in a home they're about to own — it's the first thing to find, not something to figure out during an emergency."
},
{
  term: '2. Trap',
  text: 'The curved section of pipe under a sink or fixture that holds a small amount of water to block sewer gas from coming back up the drain. If an inspection notes a missing or dry trap, that\'s worth understanding, not ignoring.'
},
{
  term: '3. Cleanout',
  text: 'An accessible cap on a drain line, usually in a basement, that allows a plumber to access the line for clearing a clog without opening a wall. Homes without an accessible cleanout can mean more invasive (and costly) work if a clog ever needs professional clearing.'
},
{
  term: '4. Backwater valve',
  text: 'A device that prevents sewer backup from flowing back into the house during a municipal system surcharge. Not every home has one — worth asking whether the home you\'re buying does, especially in older neighbourhoods.'
},
{
  term: '5. Vent stack',
  text: 'The pipe that runs plumbing gases out through the roof and allows drains to flow properly by equalizing pressure. Venting problems are a common, not-always-obvious issue behind chronic slow drains.'
},
{
  term: '6. Rough-in',
  text: "The stage of plumbing installation where pipes are run but not yet connected to finished fixtures — relevant if you're buying new construction or a home mid-renovation."
},
{
  term: '7. Supply line',
  text: 'The pipe (or flexible line) that brings water to a specific fixture. Age and material of supply lines is a common inspection note on older homes.'
},
{
  term: '8. Water hammer',
  text: 'A banging noise in pipes caused by water flow stopping suddenly, often when a valve or appliance shuts off. Occasional water hammer is usually a minor nuisance; frequent or loud water hammer can indicate a pressure issue worth checking.'
},
{
  term: '9. Sump pit / sump pump',
  text: 'The pit (often in a basement) and pump that collects and removes groundwater to prevent flooding. If a home has one, ask about its age and service history — see our spring readiness guide for what to check.'
},
{
  term: '10. Sewer camera inspection',
  text: 'A video inspection run through the sewer line to check its condition without digging. Worth requesting on an older home, especially with mature trees nearby — see our full guide.'
}];


const tocItems = [
{ id: 'the-10-terms', label: "The 10 Terms You're Most Likely to Hear" },
{ id: 'why-knowing-helps', label: 'Why Knowing These Terms Actually Helps You as a Buyer' },
{ id: 'service-areas', label: 'Every Area We Support First-Time Buyers In' },
{ id: 'faq', label: 'Frequently Asked Questions' },
{ id: 'contact', label: 'Talk to Us Right Now' }];


const faqs = [
{
  q: 'Where can I find a complete list of plumbing terms, not just these 10?',
  a: 'See our full plumbing glossary with 61 terms covering everything from basic fixtures to technical drain terminology.'
},
{
  q: "My inspection report used a term that's not on this list — can I ask you directly?",
  a: "Yes — call or message us and we're glad to explain anything specific to your report."
},
{
  q: 'Do I need to understand all of these before I make an offer?',
  a: 'Not necessarily, but knowing the key ones helps you ask better questions of your inspector and negotiate from an informed position.'
},
{
  q: "Can you do a plumbing walkthrough with me before I close, explaining what I'm looking at?",
  a: 'Yes — that\'s essentially what a pre-purchase plumbing assessment includes.'
},
{
  q: 'Is this list specific to Winnipeg, or general?',
  a: 'Most terms are universal, but the context (older neighbourhoods, sump pumps for spring thaw, backwater valves) reflects what actually comes up in Winnipeg homes specifically.'
}];


const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'BlogPosting',
    headline: "First-Time Homebuyer's Plumbing Terms — What You'll Actually Hear in Winnipeg",
    description:
    "Buying your first home in Winnipeg? Here are the plumbing terms you're most likely to hear from your inspector or agent, explained in plain language.",
    url: 'https://prodraincleaning.ca/blog/first-time-homebuyer-plumbing-terms-winnipeg',
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
      url: 'https://prodraincleaning.ca/assets/images/technician-upfront-pricing-homeowner-winnipeg.png',
      description: 'Plumber explaining plumbing terms to a first-time homebuyer in Winnipeg'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://prodraincleaning.ca/blog/first-time-homebuyer-plumbing-terms-winnipeg'
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
      name: 'First-Time Homebuyer Plumbing Terms',
      item: 'https://prodraincleaning.ca/blog/first-time-homebuyer-plumbing-terms-winnipeg'
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


export default function FirstTimeHomebuyerTermsPost() {
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
                First-Time Homebuyer Plumbing Terms
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
              <span className="text-sm" style={{ color: 'var(--muted)' }}>6 min read</span>
            </div>

            <h1 className="mb-4">
              First-Time Homebuyer's Plumbing Terms — What You'll Actually Hear in Winnipeg
            </h1>

            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
              By <strong>Pro Drain Cleaning Limited</strong> · Published September 17, 2026 · Updated September 17, 2026
            </p>

            {/* Hero image */}
            <div className="rounded-xl overflow-hidden mb-8">
              {/*
                UPLOAD PLACEHOLDER — replace the src below with your own photo path.
                Example: src="/assets/images/plumber-explains-terms-first-time-buyer-winnipeg.jpg"
                This is the only line you need to change.
              */}
              <SwappableHeroImage
                src="/assets/images/technician-upfront-pricing-homeowner-winnipeg.png"
                alt="Plumber explaining plumbing terms to a first-time homebuyer in Winnipeg"
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
                If you're buying your first home, your inspection report or your agent may use plumbing terms that aren't self-explanatory — here are the 10 you're most likely to actually run into, explained in plain language, and why each one matters to a buyer specifically. For the full reference (61 terms), see our{' '}
                <Link href="/glossary" className="hover:underline font-700" style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                  complete plumbing glossary
                </Link>. Pro Drain Cleaning Limited serves first-time buyers across Winnipeg and every community within 100km with plumbing assessments before closing. Call or WhatsApp{' '}
                <PhoneLink className="font-700 hover:underline" style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                  {PHONE_DISPLAY}
                </PhoneLink>.
              </p>
            </div>

            {/* Call + WhatsApp button pair directly under hero */}
            <div className="flex flex-col sm:flex-row gap-4">
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
          </div>
        </section>

        {/* Main content with sidebar TOC */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Article body */}
              <article className="lg:col-span-3">

                {/* Section: The 10 Terms */}
                <div id="the-10-terms" className="scroll-mt-24">
                  <h2 className="mt-0 mb-6">The 10 Terms You're Most Likely to Hear</h2>
                  <div className="flex flex-col gap-6 mb-6">
                    {terms.map((t, i) =>
                    <div
                      key={i}
                      className="rounded-xl p-5"
                      style={{ backgroundColor: 'var(--brand-100)', border: '1px solid var(--line)' }}>

                        <p className="text-base font-700 mb-2" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                          {t.term}
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--ink)' }}>
                          {t.text}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mid-article CTA box (orange accent) — after the term list */}
                <div
                  className="rounded-xl p-6 mb-12"
                  style={{ backgroundColor: '#fff8f5', border: '2px solid var(--accent-600)' }}>

                  <p className="font-700 mb-2 text-lg" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                    Want a plumber to walk you through your inspection report?
                  </p>
                  <p className="text-sm mb-5 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Pro Drain Cleaning Limited supports first-time buyers 24 hours a day, across Winnipeg and every community within 100km. Call, WhatsApp, or send us your details below.
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

                {/* Section: Why Knowing Helps */}
                <div id="why-knowing-helps" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Why Knowing These Terms Actually Helps You as a Buyer</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Understanding what these terms mean turns a vague inspection note into something you can actually act on — asking the right follow-up question, requesting a specific assessment, or knowing what to negotiate on, rather than either ignoring a flagged item or over-worrying about something minor.
                  </p>
                </div>

                {/* Section: Service Areas */}
                <div id="service-areas" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Every Area We Support First-Time Buyers In</h2>
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
                      prefilledService="General Plumbing & Drain Cleaning"
                      prefilledUrgency="few-days" />

                  </div>
                </div>

                {/* Related Reading */}
                <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--line)' }}>
                  <h2 className="mb-4">Related Reading</h2>
                  <ul className="flex flex-col gap-3">
                    {[
                    {
                      href: '/glossary',
                      label: 'Full Plumbing Glossary'
                    },
                    {
                      href: '/blog/buying-old-house-winnipeg-plumbing-checklist',
                      label: 'Buying an Old House in Winnipeg? What to Check Before You Close'
                    },
                    {
                      href: '/blog/home-inspection-plumbing-issue-now-what',
                      label: 'Home Inspection Flagged a Plumbing Issue — Now What?'
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
                        Buying your first home?
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
              Buying Your First Home in Winnipeg?
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--brand-100)' }}>
              Want a plumbing expert to walk you through what you're looking at? Pro Drain Cleaning Limited answers 24 hours a day, 7 days a week, across Winnipeg, Selkirk, St. Norbert and every community within 100km. Upfront pricing before we start — always.
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
