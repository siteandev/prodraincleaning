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
{ id: 'why-rough-in-stage', label: 'Why Rough-In Stage Is the Right Time to Check' },
{ id: 'what-it-checks', label: 'What an Independent Rough-In Inspection Checks' },
{ id: 'vs-municipal', label: 'How This Differs From the Municipal Building Inspection' },
{ id: 'worth-extra-step', label: 'Why This Is Worth the Extra Step, Even on a New Build' },
{ id: 'service-areas', label: 'Every Area We Provide Rough-In Inspections In' },
{ id: 'faq', label: 'Frequently Asked Questions' },
{ id: 'contact', label: 'Talk to Us Right Now' }];


const faqs = [
{
  q: "Isn't the municipal inspection enough?",
  a: 'It confirms code compliance, but an independent inspection gives a dedicated, unhurried second look specifically at the plumbing, which can catch things a broader inspection moves past.'
},
{
  q: 'When exactly should I schedule this during my build?',
  a: 'After the plumbing rough-in is complete but before drywall goes up — your builder or site supervisor can tell you the right window.'
},
{
  q: 'What if an issue is found at this stage?',
  a: "It's the easiest possible point to fix it — still fully accessible, before anything is enclosed."
},
{
  q: 'Do you coordinate directly with builders, or only homeowners?',
  a: "Both — we're glad to coordinate scheduling with your builder or site supervisor directly."
},
{
  q: 'How long does a rough-in inspection take?',
  a: "Depends on the size of the build — call with your timeline and we'll give you a realistic estimate."
}];


const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'BlogPosting',
    headline: 'New Construction Rough-In Plumbing Inspection — What Gets Missed',
    description:
    'Building a new home in Winnipeg? An independent rough-in plumbing inspection before drywall goes up can catch issues that are expensive to fix later.',
    url: 'https://prodraincleaning.ca/blog/new-construction-rough-in-plumbing-inspection-winnipeg',
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
      url: 'https://prodraincleaning.ca/assets/images/technician-sewer-camera-cleanout-inspection-winnipeg.png',
      description: 'Inspecting rough-in plumbing before drywall in a new Winnipeg home build'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://prodraincleaning.ca/blog/new-construction-rough-in-plumbing-inspection-winnipeg'
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
      name: 'Rough-In Plumbing Inspection',
      item: 'https://prodraincleaning.ca/blog/new-construction-rough-in-plumbing-inspection-winnipeg'
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


export default function RoughInInspectionPost() {
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
                Rough-In Plumbing Inspection
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
              New Construction Rough-In Plumbing Inspection — What Gets Missed
            </h1>

            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
              By <strong>Pro Drain Cleaning Limited</strong> · Published September 17, 2026 · Updated September 17, 2026
            </p>

            {/* Hero image */}
            <div className="rounded-xl overflow-hidden mb-8">
              {/*
                UPLOAD PLACEHOLDER — replace the src below with your own photo path.
                Example: src="/assets/images/rough-in-plumbing-inspection-winnipeg.jpg"
                This is the only line you need to change.
              */}
              <SwappableHeroImage
                src="/assets/images/technician-sewer-camera-cleanout-inspection-winnipeg.png"
                alt="Inspecting rough-in plumbing before drywall in a new Winnipeg home build"
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
                Rough-in stage — after the pipes are run but before drywall goes up — is the only point in a new build where plumbing is fully visible and still easy to correct. An independent inspection at this stage, separate from the municipal inspection your build already requires, can catch venting issues, slope problems, or connection errors while they're still a quick fix instead of a wall-opening job later. Pro Drain Cleaning Limited provides independent rough-in plumbing inspections across Winnipeg and every community within 100km. Call or WhatsApp{' '}
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

            {/* Why Rough-In Stage Is the Right Time to Check quick-reference box */}
            <div
              id="why-rough-in-stage"
              className="rounded-xl p-6 scroll-mt-24"
              style={{
                backgroundColor: '#fff8f5',
                border: '2px solid var(--accent-600)'
              }}>

              <p
                className="text-sm font-700 uppercase tracking-wider mb-4"
                style={{ color: 'var(--accent-600)', fontWeight: 700 }}>

                Why Rough-In Stage Is the Right Time to Check
              </p>
              <ul className="flex flex-col gap-3">
                {[
                "It's the only point in the build where every pipe run is fully visible",
                'Any issue found here is a straightforward fix — after drywall, the same issue means cutting into a finished wall',
                "A municipal inspection confirms code compliance, but doesn't necessarily catch every workmanship or design issue an independent set of eyes might",
                "It's your best (and sometimes only) opportunity to verify the work before it's permanently enclosed"].
                map((item, i) =>
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--ink)' }}>
                    <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: 'var(--accent-600)' }}
                    aria-hidden="true">

                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

                {/* Section: What It Checks */}
                <div id="what-it-checks" className="scroll-mt-24">
                  <h2 className="mt-0 mb-4">What an Independent Rough-In Inspection Checks</h2>
                  <ul className="flex flex-col gap-4 mb-6">
                    {[
                    {
                      title: 'Proper venting',
                      text: 'every fixture needs adequate venting to drain correctly and prevent sewer gas from entering the house; venting problems are common and not always caught by a general inspection.'
                    },
                    {
                      title: 'Correct pipe slope',
                      text: "drain lines need consistent fall toward the main line; incorrect slope causes chronic slow drainage that's very difficult to diagnose once the wall is closed."
                    },
                    {
                      title: 'Solid, correctly-oriented connections',
                      text: 'joints and fittings assembled correctly, not just present.'
                    },
                    {
                      title: 'Pipe sizing appropriate to fixture load',
                      text: 'undersized lines can cause drainage problems that only show up once the home is in daily use.'
                    },
                    {
                      title: 'Support and securing',
                      text: "pipes properly strapped and supported so they won't shift, sag, or create stress points over time."
                    }].
                    map((item, i) =>
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--ink)' }}>
                        <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: 'var(--brand-700)' }}
                        aria-hidden="true">

                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span>
                          <span style={{ fontWeight: 700, color: 'var(--navy-900)' }}>{item.title}</span>{' '}
                          — {item.text}
                        </span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Mid-article CTA box (orange accent) — after "What an Independent Rough-In Inspection Checks" */}
                <div
                  className="rounded-xl p-6 mb-12"
                  style={{ backgroundColor: '#fff8f5', border: '2px solid var(--accent-600)' }}>

                  <p className="font-700 mb-2 text-lg" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                    Building a new home and want the rough-in checked?
                  </p>
                  <p className="text-sm mb-5 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Pro Drain Cleaning Limited provides independent rough-in plumbing inspections 24 hours a day, across Winnipeg and every community within 100km. Call, WhatsApp, or send us your details below.
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

                {/* Section: vs Municipal */}
                <div id="vs-municipal" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">How This Differs From the Municipal Building Inspection</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    A municipal inspection confirms the work meets code — a necessary and important check, but a single inspector covering an entire build on a tight schedule isn't the same as a plumbing-focused, unhurried second look specifically at the plumbing rough-in. Both serve a purpose; they're not a substitute for each other.
                  </p>
                </div>

                {/* Section: Worth the Extra Step */}
                <div id="worth-extra-step" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Why This Is Worth the Extra Step, Even on a New Build</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    New construction isn't automatically free of plumbing issues — rough-in work happens fast, often across many trades on a tight schedule, and even careful builders can have something slip through. The cost of an independent inspection at rough-in stage is small compared to the cost of correcting a slope or venting issue after the home is finished and lived in.
                  </p>
                </div>

                {/* Section: Service Areas */}
                <div id="service-areas" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Every Area We Provide Rough-In Inspections In</h2>
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
                      href: '/blog/renovating-old-winnipeg-bathroom-plumbing',
                      label: "Renovating an Old Winnipeg Bathroom? What's Behind the Wall You Should Know First"
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
                        Building new and want it checked?
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
              Building a New Home in Winnipeg?
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--brand-100)' }}>
              Want the rough-in plumbing checked before drywall goes up? Pro Drain Cleaning Limited answers 24 hours a day, 7 days a week, across Winnipeg, Selkirk, St. Norbert and every community within 100km. Upfront pricing before we start — always.
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
