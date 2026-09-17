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
{ id: 'signs-shared-line', label: "Signs It's a Shared Line, Not Just Your Unit" },
{ id: 'why-prone', label: 'Why Apartment Buildings Are Prone to This' },
{ id: 'what-to-do', label: "What to Do If You Think It's a Shared-Line Issue" },
{ id: 'landlord-call', label: 'Why This Is a Landlord/Property Manager Call, Not a Tenant DIY Fix' },
{ id: 'condo-version', label: 'If You Own Rather Than Rent — the Condo Version of This' },
{ id: 'service-areas', label: 'Every Area We Service Apartment & Multi-Unit Buildings In' },
{ id: 'faq', label: 'Frequently Asked Questions' },
{ id: 'contact', label: 'Talk to Us Right Now' }];


const faqs = [
{
  q: "How do I know if my apartment's drain problem is shared or isolated to my unit?",
  a: 'If it returns quickly after clearing, affects multiple fixtures at once, or other units report something similar, it\'s likely shared — a professional assessment confirms it either way.'
},
{
  q: 'Should I call a plumber myself, or go through my landlord?',
  a: 'Report it to your landlord or property manager first — a shared-line issue needs access beyond your own unit, which is typically their responsibility to arrange.'
},
{
  q: 'Can you diagnose whether it\'s shared without accessing every unit?',
  a: 'Often yes — patterns in where and how the backup shows up, plus a camera inspection if needed, usually make it clear.'
},
{
  q: 'Do you work directly with property managers for multi-unit buildings?',
  a: 'Yes — we regularly service apartment and multi-unit buildings on behalf of landlords and property managers.'
},
{
  q: "What's the fix for a shared-line clog?",
  a: 'Typically clearing from a main cleanout or building access point, sometimes with hydro-jetting or a camera-guided approach for stubborn or recurring blockages.'
}];


const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'BlogPosting',
    headline: "Apartment Building Drain Clogs — Why One Unit's Problem Is Everyone's Problem",
    description:
    "Drain backing up in your Winnipeg apartment? If it's affecting more than one unit, it's likely a shared-line issue — here's what that means and who to call.",
    url: 'https://prodraincleaning.ca/blog/apartment-shared-line-clogs-winnipeg',
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
      url: 'https://prodraincleaning.ca/assets/images/pro-drain-service-van-plumbing-drain-equipment-winnipeg.png',
      description: 'Plumber clearing a shared drain line in a Winnipeg apartment building'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://prodraincleaning.ca/blog/apartment-shared-line-clogs-winnipeg'
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
      name: 'Apartment Shared-Line Clogs',
      item: 'https://prodraincleaning.ca/blog/apartment-shared-line-clogs-winnipeg'
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


export default function ApartmentSharedLineClogsPost() {
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
                Apartment Shared-Line Clogs
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
              Apartment Building Drain Clogs — Why One Unit's Problem Is Everyone's Problem
            </h1>

            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
              By <strong>Pro Drain Cleaning Limited</strong> · Published September 17, 2026 · Updated September 17, 2026
            </p>

            {/* Hero image */}
            <div className="rounded-xl overflow-hidden mb-8">
              {/*
                UPLOAD PLACEHOLDER — replace the src below with your own photo path.
                Example: src="/assets/images/apartment-shared-drain-line-winnipeg.jpg"
                This is the only line you need to change.
              */}
              <SwappableHeroImage
                src="/assets/images/pro-drain-service-van-plumbing-drain-equipment-winnipeg.png"
                alt="Plumber clearing a shared drain line in a Winnipeg apartment building"
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
                In a multi-unit apartment building, a drain clog that seems to be just yours can actually be a shared main line serving several units — which is why a backup that shows up in your kitchen sink might actually originate from something two floors up, or why clearing your own fixture doesn't fix a problem that keeps coming back. If more than one unit is affected around the same time, it's almost always a shared-line issue, not a coincidence. Pro Drain Cleaning Limited services apartment and multi-unit buildings across Winnipeg and every community within 100km. Call or WhatsApp{' '}
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

            {/* Signs It's a Shared Line quick-reference box */}
            <div
              id="signs-shared-line"
              className="rounded-xl p-6 scroll-mt-24"
              style={{
                backgroundColor: '#fff8f5',
                border: '2px solid var(--accent-600)'
              }}>

              <p
                className="text-sm font-700 uppercase tracking-wider mb-4"
                style={{ color: 'var(--accent-600)', fontWeight: 700 }}>

                Signs It's a Shared Line, Not Just Your Unit
              </p>
              <ul className="flex flex-col gap-3">
                {[
                'More than one unit reporting a similar problem around the same time',
                'A backup that returns shortly after being cleared, especially from the lowest drain in your unit (often a sign the blockage is downstream, in the shared line)',
                'Gurgling or slow drainage that started suddenly and affects multiple fixtures in your unit at once',
                'A neighbour above or below you mentioning a similar issue'].
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

                {/* Section: Why Apartment Buildings Are Prone */}
                <div id="why-prone" className="scroll-mt-24">
                  <h2 className="mt-0 mb-4">Why Apartment Buildings Are Prone to This</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Multiple units typically tie into shared vertical stacks and horizontal main lines that carry wastewater from many units down to a single connection point. A blockage anywhere in that shared line — whether from buildup over time, a foreign object, or root intrusion on an older shared exterior line — affects every unit downstream of it, not just the unit where the clog happens to first become noticeable.
                  </p>
                </div>

                {/* Section: What to Do */}
                <div id="what-to-do" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">What to Do If You Think It's a Shared-Line Issue</h2>
                  <ul className="flex flex-col gap-4 mb-6">
                    {[
                    {
                      title: 'Report it to your landlord or property manager right away,',
                      text: 'and mention if you know of other units affected — that detail matters for correctly diagnosing the problem quickly.'
                    },
                    {
                      title: "Don't keep using fixtures that are backing up",
                      text: '— using a backed-up drain repeatedly can push the problem further, or cause an overflow.'
                    },
                    {
                      title: "Ask whether other units have reported anything similar if you're able to",
                      text: '— a landlord managing multiple units benefits from knowing this pattern exists.'
                    },
                    {
                      title: 'Expect the fix to require access beyond just your unit',
                      text: "— a shared-line clog typically needs clearing from a main cleanout or a lower-floor access point, not just your unit's fixtures."
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
                          {item.text}
                        </span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Mid-article CTA box (orange accent) — after "How to Tell If It's a Shared-Line Problem" (checklist above) */}
                <div
                  className="rounded-xl p-6 mb-12"
                  style={{ backgroundColor: '#fff8f5', border: '2px solid var(--accent-600)' }}>

                  <p className="font-700 mb-2 text-lg" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                    Drain problem affecting more than one unit?
                  </p>
                  <p className="text-sm mb-5 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Pro Drain Cleaning Limited services apartment and multi-unit buildings 24 hours a day, across Winnipeg and every community within 100km. Call, WhatsApp, or send us your details below.
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

                {/* Section: Landlord Call */}
                <div id="landlord-call" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Why This Is a Landlord/Property Manager Call, Not a Tenant DIY Fix</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    A shared-line clog isn't something a tenant can meaningfully address from inside their own unit — the blockage is in a section of pipe serving the whole building, which needs professional access and equipment (often hydro-jetting or a camera-guided approach for a stubborn or recurring blockage). See our related post on{' '}
                    <Link
                      href="/blog/rental-property-plumbing-manitoba-landlord-responsibilities"
                      className="hover:underline font-600"
                      style={{ color: 'var(--brand-700)', fontWeight: 600 }}>

                      landlord plumbing responsibilities in Manitoba
                    </Link>{' '}
                    for how this typically fits into a landlord's obligations.
                  </p>
                </div>

                {/* Section: Condo Version */}
                <div id="condo-version" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">If You Own Rather Than Rent — the Condo Version of This</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    If you own your unit in a condo building rather than renting, the responsibility question works differently — see our guide on{' '}
                    <Link
                      href="/blog/condo-plumbing-winnipeg-your-responsibility-or-condo-corporation"
                      className="hover:underline font-600"
                      style={{ color: 'var(--brand-700)', fontWeight: 600 }}>

                      condo plumbing responsibility
                    </Link>{' '}
                    for how shared-line issues are typically handled between owners and the condo corporation.
                  </p>
                </div>

                {/* Section: Service Areas */}
                <div id="service-areas" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Every Area We Service Apartment & Multi-Unit Buildings In</h2>
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
                      prefilledService="Drain Cleaning"
                      prefilledUrgency="today" />

                  </div>
                </div>

                {/* Related Reading */}
                <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--line)' }}>
                  <h2 className="mb-4">Related Reading</h2>
                  <ul className="flex flex-col gap-3">
                    {[
                    {
                      href: '/blog/rental-property-plumbing-manitoba-landlord-responsibilities',
                      label: 'Rental Property Plumbing in Manitoba: Landlord Responsibilities'
                    },
                    {
                      href: '/blog/condo-plumbing-winnipeg-your-responsibility-or-condo-corporation',
                      label: "Condo Plumbing in Winnipeg: Your Responsibility or the Condo Corporation's?"
                    },
                    {
                      href: '/blog/hydro-jetting-vs-snaking',
                      label: 'Hydro Jetting vs Drain Snaking: Which Does Your Pipe Actually Need?'
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
                        Drain problem affecting multiple units?
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
              Drain Problem Affecting More Than One Unit?
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--brand-100)' }}>
              Pro Drain Cleaning Limited answers 24 hours a day, 7 days a week, across Winnipeg, Selkirk, St. Norbert and every community within 100km. Upfront pricing before we start — always.
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
