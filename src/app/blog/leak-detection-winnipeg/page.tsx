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
{ id: 'signs', label: 'Signs You Might Have a Hidden Leak' },
{ id: 'how-it-works', label: 'How Professional Leak Detection Actually Works' },
{ id: 'common-places', label: 'Common Places Hidden Leaks Show Up' },
{ id: 'why-early', label: 'Why Finding It Early Actually Matters' },
{ id: 'cost', label: 'What Determines the Cost of Leak Detection' },
{ id: 'service-areas', label: 'Every Town We Provide Leak Detection In' },
{ id: 'why-trust', label: 'Why Winnipeg Chooses Pro Drain Cleaning Limited' },
{ id: 'faq', label: 'Frequently Asked Questions' },
{ id: 'contact', label: 'Talk to Us Right Now' }];


const faqs = [
{
  q: 'How do I know if I have a hidden leak?',
  a: 'A rising water bill with no change in usage, the sound of running water with everything off, or a damp patch with no obvious cause are the clearest signs.'
},
{
  q: 'Will you need to cut open my walls to find a leak?',
  a: 'Not usually — acoustic and moisture-detection equipment narrows the location first, so cutting in, if needed at all, is targeted rather than exploratory.'
},
{
  q: 'Can a hidden leak affect my foundation?',
  a: 'A slab leak specifically can, over time, which is part of why catching it early matters.'
},
{
  q: 'Does insurance cover leak detection and repair?',
  a: "It depends on your policy and whether the leak is sudden or gradual — worth a call to your broker, and we can provide documentation either way."
},
{
  q: 'How fast can you come out to check for a leak?',
  a: 'In most cases within Winnipeg, same-day or next-day, depending on urgency.'
},
{
  q: 'Do you also do the repair once the leak is found?',
  a: 'Yes — one call covers detection and repair.'
}];


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


const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'BlogPosting',
    headline:
    'Leak Detection in Winnipeg — Finding a Hidden Leak Before It Becomes a Bigger Problem',
    description:
    'Rising water bill, damp spot, or a musty smell with no obvious source? See the signs of a hidden leak and how professional leak detection actually works. Call +1 (204) 399-4413.',
    url: 'https://prodraincleaning.ca/blog/leak-detection-winnipeg',
    datePublished: '2026-08-30',
    dateModified: '2026-08-30',
    author: { '@type': 'Organization', name: 'Pro Drain Cleaning Limited' },
    publisher: {
      '@type': 'Organization',
      name: 'Pro Drain Cleaning Limited',
      url: 'https://prodraincleaning.ca'
    },
    image: {
      '@type': 'ImageObject',
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_113ee7df0-1767959579185.png",
      description: 'Plumber using leak detection equipment in a Winnipeg home'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://prodraincleaning.ca/blog/leak-detection-winnipeg'
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
      name: 'Leak Detection in Winnipeg',
      item: 'https://prodraincleaning.ca/blog/leak-detection-winnipeg'
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

export default function LeakDetectionPost() {
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
                Leak Detection in Winnipeg
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
              <span className="text-sm" style={{ color: 'var(--muted)' }}>10 min read</span>
            </div>

            <h1 className="mb-4">
              Leak Detection in Winnipeg — Finding a Hidden Leak Before It Becomes a Bigger Problem
            </h1>

            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
              By <strong>Pro Drain Cleaning Limited</strong> · Published August 30, 2026 · Updated August 30, 2026
            </p>

            {/* Answer-first callout */}
            <div
              className="rounded-xl p-6 mb-6"
              style={{ backgroundColor: 'var(--brand-100)', border: '2px solid var(--brand-500)' }}>
              
              <p className="text-base leading-relaxed" style={{ color: 'var(--navy-900)' }}>
                A hidden leak usually announces itself through a rising water bill, a damp or discoloured patch with no obvious cause, or a musty smell — not through visible dripping water, which is why professional leak detection exists. Pro Drain Cleaning Limited locates hidden leaks across Winnipeg, Selkirk, St. Norbert and every community within 100km using acoustic and moisture-detection equipment, without tearing open walls or floors to go looking.{' '}
                <PhoneLink style={{ color: 'var(--accent-600)', fontWeight: 700 }}>
                  Call or WhatsApp {PHONE_DISPLAY}.
                </PhoneLink>
              </p>
            </div>
          </div>
        </section>

        {/* Main content + sticky TOC */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-6xl">
            <div className="flex gap-12 items-start">
              {/* Article body */}
              <article className="flex-1 min-w-0">

                {/* Signs quick-reference callout */}
                <div
                  id="signs"
                  className="rounded-xl p-6 mb-10"
                  style={{ backgroundColor: '#fff7ed', border: '2px solid var(--accent-600)' }}>
                  
                  <h2 className="text-xl mb-4" style={{ color: 'var(--accent-600)', fontWeight: 700 }}>
                    Signs You Might Have a Hidden Leak
                  </h2>
                  <ul className="flex flex-col gap-3 text-sm" style={{ color: 'var(--navy-900)' }}>
                    {[
                    'Your water bill has risen noticeably with no change in usage',
                    'You can hear running water when every fixture is off',
                    'A damp, warped, or discoloured patch on a wall, ceiling, or floor',
                    'A musty or mouldy smell with no visible source',
                    'A consistently damp or unusually green patch of lawn',
                    'The water meter is still moving with everything in the house turned off'].
                    map((sign, i) =>
                    <li key={i} className="flex items-start gap-3">
                        <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: 'var(--accent-600)' }}
                        aria-hidden="true">
                        
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {sign}
                      </li>
                    )}
                  </ul>
                </div>

                {/* How it works */}
                <div id="how-it-works" className="mb-10">
                  <h2 className="text-2xl mb-5" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    How Professional Leak Detection Actually Works
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--ink)' }}>
                    Real leak detection doesn&apos;t mean opening up drywall or flooring on a guess. Depending on the situation, it can involve:
                  </p>
                  <ul className="flex flex-col gap-4">
                    {[
                    {
                      label: 'Acoustic listening equipment',
                      detail: 'that picks up the sound of water escaping under pressure through pipe, floor, or wall material'
                    },
                    {
                      label: 'Thermal and moisture meters',
                      detail: 'that identify temperature and moisture differences consistent with a hidden leak'
                    },
                    {
                      label: 'A water meter test',
                      detail: 'checking whether the meter still registers usage with everything in the house shut off'
                    },
                    {
                      label: 'Pressure testing',
                      detail: 'on isolated sections of the system to narrow down where a leak actually is before anyone opens anything up'
                    }].
                    map((item, i) =>
                    <li key={i} className="flex items-start gap-3 text-base" style={{ color: 'var(--ink)' }}>
                        <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: 'var(--brand-700)' }}
                        aria-hidden="true">
                        
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span>
                          <strong style={{ color: 'var(--navy-900)' }}>{item.label}</strong>{' '}
                          {item.detail}
                        </span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Common places */}
                <div id="common-places" className="mb-10">
                  <h2 className="text-2xl mb-5" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    Common Places Hidden Leaks Show Up in Winnipeg Homes
                  </h2>
                  <div className="flex flex-col gap-5">
                    {[
                    {
                      label: 'Under a concrete slab',
                      detail: 'A slab leak on an underground line can run for a long time before it\'s obvious above ground.'
                    },
                    {
                      label: 'Behind walls in older homes',
                      detail: 'Ageing supply lines, especially around bathrooms and kitchens.'
                    },
                    {
                      label: 'At the main water service line',
                      detail: 'The pipe running from the street connection into the house.'
                    },
                    {
                      label: 'Around a water heater',
                      detail: 'A slow tank or fitting leak that pools quietly before it\'s visible.'
                    },
                    {
                      label: 'Underneath a dishwasher or washing machine',
                      detail: 'A slow supply line or drain hose leak that goes unnoticed for months.'
                    }].
                    map((item, i) =>
                    <div key={i}>
                        <h3 className="text-lg mb-2" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                          {item.label}
                        </h3>
                        <p className="text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
                          {item.detail}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* In-article image */}
                  <div
                    className="w-full rounded-xl overflow-hidden mt-8"
                    style={{ aspectRatio: '3/2', backgroundColor: 'var(--brand-100)', border: '1px solid var(--line)' }}>
                    
                    <img
                      src="/assets/images/leak-detection-hidden-leak-basement-wall.png"
                      alt="Signs of a hidden water leak on a basement wall"
                      width={1200}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover" />
                    
                  </div>
                  <p className="text-xs mt-2 text-center" style={{ color: 'var(--muted)' }}>
                    Signs of a hidden water leak on a basement wall
                  </p>
                </div>

                {/* Why early matters */}
                <div id="why-early" className="mb-10">
                  <h2 className="text-2xl mb-5" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    Why Finding It Early Actually Matters
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--ink)' }}>
                    An undetected leak doesn&apos;t just waste water and money — sustained moisture leads to mould growth, can weaken framing and subfloor over time, and in a slab leak specifically can affect the foundation. Catching it early is almost always cheaper and less disruptive than waiting until the damage becomes visible.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
                    It&apos;s also worth a call to your insurance broker — some policies treat gradual, undetected leaks differently than sudden ones, and having it professionally diagnosed and documented matters if you ever need to make a claim.
                  </p>
                </div>

                {/* Cost */}
                <div id="cost" className="mb-10">
                  <h2 className="text-2xl mb-5" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    What Determines the Cost of Leak Detection
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--ink)' }}>
                    Cost depends mainly on how accessible the suspected area is, how large the property or system is, and whether it&apos;s a straightforward single-fixture check or a whole-property investigation with no obvious starting point. A legitimate leak detection service gives you a clear price for the diagnostic step itself, separate from any repair work that follows — you approve each stage before it happens.
                  </p>
                </div>

                {/* Service areas */}
                <div id="service-areas" className="mb-10">
                  <h2 className="text-2xl mb-5" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    Every Town We Provide Leak Detection In
                  </h2>
                  <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--ink)' }}>
                    Same live-answered line, same equipment, same upfront pricing across the whole service area:
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {serviceAreaTowns.map((town) =>
                    <li key={town.name}>
                        {town.href ?
                      <Link
                        href={town.href}
                        className="inline-block px-3 py-1.5 rounded-full text-sm font-600 hover:opacity-80 transition-opacity"
                        style={{
                          backgroundColor: 'var(--brand-100)',
                          color: 'var(--brand-700)',
                          fontWeight: 600,
                          border: '1px solid var(--brand-500)'
                        }}>
                        
                            {town.name}
                          </Link> :

                      <span
                        className="inline-block px-3 py-1.5 rounded-full text-sm"
                        style={{
                          backgroundColor: 'var(--brand-100)',
                          color: 'var(--navy-700)',
                          border: '1px solid var(--line)'
                        }}>
                        
                            {town.name}
                          </span>
                      }
                      </li>
                    )}
                  </ul>
                  <p className="text-sm mt-4" style={{ color: 'var(--muted)' }}>
                    And every community within 100km of Winnipeg.
                  </p>
                </div>

                {/* Why trust */}
                <div id="why-trust" className="mb-10">
                  <h2 className="text-2xl mb-5" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    Why Winnipeg Chooses Pro Drain Cleaning Limited for Leak Detection
                  </h2>
                  <ul className="flex flex-col gap-3">
                    {[
                    'Non-invasive detection first — we don\'t open up walls or floors on a guess',
                    'Upfront flat pricing for the diagnostic step, separate from any repair',
                    'Documentation you can hand to your insurer if needed',
                    'Locally owned and operated, working these specific communities',
                    'We handle the repair too, once the leak is found — no second company needed'].
                    map((item, i) =>
                    <li key={i} className="flex items-start gap-3 text-base" style={{ color: 'var(--ink)' }}>
                        <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: 'var(--brand-700)' }}
                        aria-hidden="true">
                        
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    )}
                  </ul>
                </div>

                {/* FAQ */}
                <div id="faq" className="mb-10">
                  <h2 className="text-2xl mb-6" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    Frequently Asked Questions
                  </h2>
                  <div className="flex flex-col gap-3">
                    {faqs.map((faq, i) =>
                    <FAQItem key={i} faq={faq} index={i} />
                    )}
                  </div>
                </div>

                {/* Contact */}
                <div id="contact" className="mb-10">
                  <h2 className="text-2xl mb-5" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    Talk to Us Right Now
                  </h2>
                  <div className="flex flex-col gap-3 mb-6 text-base" style={{ color: 'var(--ink)' }}>
                    <p>
                      Call or WhatsApp:{' '}
                      <PhoneLink style={{ color: 'var(--accent-600)', fontWeight: 700 }}>
                        {PHONE_DISPLAY}
                      </PhoneLink>{' '}
                      — answered 24 hours a day, every day of the year
                    </p>
                    <p>
                      Email:{' '}
                      <a href={`mailto:${EMAIL}`} style={{ color: 'var(--brand-700)' }}>
                        {EMAIL}
                      </a>
                    </p>
                  </div>
                  <div
                    className="rounded-xl p-6"
                    style={{ backgroundColor: 'var(--brand-100)', border: '1px solid var(--brand-500)' }}>
                    
                    <h3 className="text-lg mb-4" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                      Request a Callback
                    </h3>
                    <ContactForm prefilledService="Leak Detection" />
                  </div>
                </div>

                {/* Related Reading */}
                <div className="mb-10">
                  <h2 className="text-xl mb-4" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    Related Reading
                  </h2>
                  <ul className="flex flex-col gap-2">
                    {[
                    { href: '/plumbing-services-winnipeg', label: 'Plumbing Services Winnipeg — our full plumbing service page' },
                    { href: '/blog/emergency-plumber-winnipeg-24-7-guide', label: 'Emergency Plumber in Winnipeg: 24/7 Guide' },
                    { href: '/blog/water-heater-replacement-winnipeg', label: 'Water Heater Replacement in Winnipeg' },
                    { href: '/blog/prevent-frozen-pipes-winnipeg', label: 'Preventing Frozen Pipes in Winnipeg' }].
                    map((link) =>
                    <li key={link.href}>
                        <Link href={link.href} className="text-base hover:underline" style={{ color: 'var(--brand-700)' }}>
                          {link.label}
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>

                {/* End CTA band */}
                <div
                  className="rounded-xl p-8 text-center"
                  style={{ backgroundColor: 'var(--brand-900)', color: 'white' }}>
                  
                  <p className="text-lg leading-relaxed mb-4">
                    Suspect a hidden leak? Pro Drain Cleaning Limited answers 24 hours a day, 7 days a week, across Winnipeg, Selkirk, St. Norbert and every community within 100 km.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <PhoneLink
                      className="btn-primary"
                      style={{ backgroundColor: 'var(--accent-600)', borderColor: 'var(--accent-600)' }}>
                      Call {PHONE_DISPLAY}
                    </PhoneLink>
                    <a
                      href={PHONE_WA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary-white"
                      style={{ color: 'white', borderColor: 'white' }}>
                      
                      WhatsApp Us
                    </a>
                  </div>
                  <p className="text-sm mt-4" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    Upfront pricing before we start — always. Email:{' '}
                    <a href={`mailto:${EMAIL}`} style={{ color: 'rgba(255,255,255,0.9)' }}>
                      {EMAIL}
                    </a>
                  </p>
                </div>
              </article>

              {/* Sticky TOC — desktop only */}
              <aside
                className="hidden lg:block w-64 flex-shrink-0"
                style={{ position: 'sticky', top: '6rem', alignSelf: 'flex-start' }}
                aria-label="Table of contents">
                
                <div
                  className="rounded-xl p-5"
                  style={{ backgroundColor: 'var(--brand-100)', border: '1px solid var(--brand-500)' }}>
                  
                  <p
                    className="text-xs font-700 uppercase tracking-wider mb-4"
                    style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                    
                    On This Page
                  </p>
                  <nav>
                    <ul className="flex flex-col gap-1">
                      {tocItems.map((item) =>
                      <li key={item.id}>
                          <a
                          href={`#${item.id}`}
                          className="block text-sm py-1 px-2 rounded transition-colors hover:opacity-80"
                          style={{
                            color: activeSection === item.id ? 'var(--brand-700)' : 'var(--navy-700)',
                            fontWeight: activeSection === item.id ? 700 : 400,
                            backgroundColor: activeSection === item.id ? 'white' : 'transparent'
                          }}>
                          
                            {item.label}
                          </a>
                        </li>
                      )}
                    </ul>
                  </nav>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <FinalCTABand />
      <Footer />
      <MobileActionBar />
    </>);

}