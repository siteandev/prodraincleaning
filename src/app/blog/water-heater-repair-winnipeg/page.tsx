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
{ id: 'common-problems', label: 'Common Water Heater Problems — Repairable?' },
{ id: 'repair-or-replace', label: 'Repair or Replace — What Actually Decides It' },
{ id: 'what-repair-involves', label: 'What a Repair Visit Actually Involves' },
{ id: 'simple-checks', label: 'Simple Things Worth Checking Before You Call' },
{ id: 'when-replacement', label: 'When It\'s Actually Time for Replacement' },
{ id: 'service-areas', label: 'Every Area We Provide Water Heater Repair In' },
{ id: 'faq', label: 'Frequently Asked Questions' },
{ id: 'contact', label: 'Talk to Us Right Now' }];


const faqs = [
{
  q: 'How do I know if my water heater needs repair or replacement?',
  a: 'Age and the specific fault both matter — a single component issue on a newer unit is usually repairable; a tank-body leak or an old unit with repeat failures usually isn\'t worth repairing.'
},
{
  q: 'Will you try to upsell me to replacement if repair would work?',
  a: 'No — we tell you honestly which one actually makes sense for your situation.'
},
{
  q: 'What\'s the most common repairable water heater problem?',
  a: 'A failed heating element or thermostat causing no hot water or lukewarm water.'
},
{
  q: 'Is a leak always a sign I need a new water heater?',
  a: 'Not always — a leak at a fitting is often repairable; a leak from the tank body itself usually isn\'t.'
},
{
  q: 'Do you offer emergency water heater repair, not just scheduled visits?',
  a: 'Yes — no hot water is treated with real urgency, especially in winter.'
},
{
  q: 'Do you serve areas outside Winnipeg for water heater repair?',
  a: 'Yes — the full 100km radius.'
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
    headline: 'Water Heater Repair in Winnipeg — Is Replacement Actually Needed?',
    description:
    'Water heater acting up? Here\'s how to tell if it\'s a simple repair or actually needs replacing — real answers, no upsell. Call +1 (204) 399-4413, 24/7.',
    url: 'https://prodraincleaning.ca/blog/water-heater-repair-winnipeg',
    datePublished: '2026-09-10',
    dateModified: '2026-09-10',
    author: { '@type': 'Organization', name: 'Pro Drain Cleaning Limited' },
    publisher: {
      '@type': 'Organization',
      name: 'Pro Drain Cleaning Limited',
      url: 'https://prodraincleaning.ca'
    },
    image: {
      '@type': 'ImageObject',
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_1da47b8d6-1770510369520.png",
      description: 'Technician repairing a water heater in a Winnipeg home'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://prodraincleaning.ca/blog/water-heater-repair-winnipeg'
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
      name: 'Water Heater Repair in Winnipeg',
      item: 'https://prodraincleaning.ca/blog/water-heater-repair-winnipeg'
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

export default function WaterHeaterRepairPost() {
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
                Water Heater Repair in Winnipeg
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
              <span className="text-sm" style={{ color: 'var(--muted)' }}>8 min read</span>
            </div>

            <h1 className="mb-4">
              Water Heater Repair in Winnipeg — Is Replacement Actually Needed?
            </h1>

            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
              By <strong>Pro Drain Cleaning Limited</strong> · Published September 10, 2026 · Updated September 10, 2026
            </p>

            {/* Hero image */}
            <div
              className="w-full rounded-xl overflow-hidden mb-6"
              style={{ aspectRatio: '16/9', backgroundColor: 'var(--brand-100)', border: '1px solid var(--line)' }}>
              
              <img
                src="/assets/images/technician-repairing-water-heater-winnipeg-basement.png"
                alt="Technician repairing a water heater in a Winnipeg home"
                width={1200}
                height={675}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover" />
              
            </div>

            {/* Answer-first callout */}
            <div
              className="rounded-xl p-6 mb-6"
              style={{ backgroundColor: 'var(--brand-100)', border: '2px solid var(--brand-500)' }}>
              
              <p className="text-base leading-relaxed" style={{ color: 'var(--navy-900)' }}>
                Most water heater problems — no hot water, lukewarm water, strange noises, minor leaks at a fitting — are repairable, and repair is worth ruling out before jumping to replacement. Pro Drain Cleaning Limited diagnoses and repairs water heaters across Winnipeg, Selkirk, St. Norbert and every community within 100km, and we&apos;ll tell you honestly if repair isn&apos;t the right call.{' '}
                <PhoneLink style={{ color: 'var(--accent-600)', fontWeight: 700 }}>
                  Call or WhatsApp {PHONE_DISPLAY}.
                </PhoneLink>
              </p>
            </div>

            {/* Call + WhatsApp button pair */}
            <div className="flex flex-col sm:flex-row gap-3 mb-2">
              <PhoneLink
                className="btn-primary flex-1 text-center"
                style={{ backgroundColor: 'var(--accent-600)', borderColor: 'var(--accent-600)' }}>
                
                Call {PHONE_DISPLAY}
              </PhoneLink>
              <a
                href={PHONE_WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1 text-center"
                style={{ borderColor: 'var(--brand-700)', color: 'var(--brand-700)' }}>
                
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* Main content + sticky TOC */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-6xl">
            <div className="flex gap-12 items-start">
              {/* Article body */}
              <article className="flex-1 min-w-0">

                {/* Common Problems Quick Reference Box */}
                <div
                  id="common-problems"
                  className="rounded-xl p-6 mb-10"
                  style={{ backgroundColor: '#fff7ed', border: '2px solid var(--accent-600)' }}>
                  
                  <h2 className="text-xl mb-4" style={{ color: 'var(--accent-600)', fontWeight: 700 }}>
                    Common Water Heater Problems — Repairable?
                  </h2>
                  <ul className="flex flex-col gap-3 text-sm" style={{ color: 'var(--navy-900)' }}>
                    {[
                    {
                      problem: 'No hot water at all',
                      detail: 'often a failed heating element or thermostat. Usually repairable.'
                    },
                    {
                      problem: 'Lukewarm water, not hot',
                      detail: 'often sediment buildup or a partially failed element. Usually repairable.'
                    },
                    {
                      problem: 'Strange popping or rumbling noises',
                      detail: 'usually sediment buildup. Repairable, often with a flush.'
                    },
                    {
                      problem: 'Leak at a fitting or valve',
                      detail: 'often repairable if it\'s the fitting, not the tank itself.'
                    },
                    {
                      problem: 'Leak from the tank body itself',
                      detail: 'this is the one sign that usually means replacement, not repair.',
                      warning: true
                    },
                    {
                      problem: 'Unit is well past its typical lifespan',
                      detail: 'repair may be possible, but replacement is often the more sensible long-term call.',
                      warning: true
                    }].
                    map((item, i) =>
                    <li key={i} className="flex gap-2">
                        <span
                        style={{
                          color: item.warning ? 'var(--accent-600)' : 'var(--brand-700)',
                          fontWeight: 700,
                          flexShrink: 0
                        }}>
                        
                          {item.problem}
                        </span>
                        <span style={{ color: 'var(--muted)' }}>— {item.detail}</span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Repair or Replace */}
                <div id="repair-or-replace" className="mb-10">
                  <h2 className="text-2xl mb-5" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    Repair or Replace — What Actually Decides It
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--ink)' }}>
                    Age and the specific fault both matter. A newer unit with a single component failure — an element, a thermostat, a valve — is almost always a repair. An older unit with a tank-body leak, or one that&apos;s failed multiple times already, is usually a replacement, since sinking more repair cost into an aging tank rarely pays off. We&apos;ll tell you honestly which situation yours is, not default to the more expensive option.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
                    If yours needs full replacement rather than repair, full detail on what that involves and what to expect:{' '}
                    <Link href="/blog/water-heater-replacement-winnipeg" style={{ color: 'var(--brand-700)', fontWeight: 600 }}>
                      Water Heater Replacement in Winnipeg
                    </Link>
                  </p>
                </div>

                {/* Mid-article CTA box (orange accent) */}
                <div
                  className="rounded-xl p-6 mb-10"
                  style={{ backgroundColor: 'var(--accent-600)', color: 'white' }}>
                  
                  <h3 className="text-lg mb-2" style={{ fontWeight: 700 }}>
                    Not sure if yours needs repair or replacement?
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    Pro Drain Cleaning Limited gives you an honest diagnosis before recommending anything. Call or WhatsApp {PHONE_DISPLAY} — answered 24/7.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <PhoneLink
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-700 text-sm transition-opacity hover:opacity-90"
                      style={{ backgroundColor: 'white', color: 'var(--accent-600)', fontWeight: 700 }}>
                      
                      Call {PHONE_DISPLAY}
                    </PhoneLink>
                    <a
                      href={PHONE_WA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-700 text-sm transition-opacity hover:opacity-90"
                      style={{ backgroundColor: 'transparent', color: 'white', border: '2px solid white', fontWeight: 700 }}>
                      
                      WhatsApp Us
                    </a>
                  </div>
                </div>

                {/* What a repair visit involves */}
                <div id="what-repair-involves" className="mb-10">
                  <h2 className="text-2xl mb-5" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    What a Repair Visit Actually Involves
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--ink)' }}>
                    A real diagnosis first — checking the specific symptom against the likely causes, not guessing. Then the actual fix: element or thermostat replacement, sediment flush, fitting repair, or whatever the diagnosis points to. If the diagnosis turns up something that actually needs replacement instead, you&apos;re told clearly, with the reasoning, before any further cost.
                  </p>
                </div>

                {/* Simple checks */}
                <div id="simple-checks" className="mb-10">
                  <h2 className="text-2xl mb-5" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    Simple Things Worth Checking Before You Call
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
                    A pilot light that&apos;s gone out (gas units), a tripped breaker (electric units), and a thermostat set lower than expected are all quick checks that occasionally solve the problem without a service call at all. If none of those explain it, that&apos;s when a real diagnosis is worth calling for.
                  </p>
                </div>

                {/* When replacement */}
                <div id="when-replacement" className="mb-10">
                  <h2 className="text-2xl mb-5" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    When It&apos;s Actually Time for Replacement
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
                    If yours needs full replacement rather than repair, full detail on what that involves and what to expect:{' '}
                    <Link href="/blog/water-heater-replacement-winnipeg" style={{ color: 'var(--brand-700)', fontWeight: 600 }}>
                      Water Heater Replacement in Winnipeg
                    </Link>
                  </p>
                </div>

                {/* Service areas */}
                <div id="service-areas" className="mb-10">
                  <h2 className="text-2xl mb-5" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    Every Area We Provide Water Heater Repair In
                  </h2>
                  <ul className="flex flex-wrap gap-2 mb-4">
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
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>
                    Ile des Chenes, St. Adolphe, Oakbank, Dugald, Beausejour, Teulon, Gimli, Portage la Prairie, Morris and Carman — and every community within 100km of Winnipeg.
                  </p>
                </div>

                {/* Inline contact form before FAQ */}
                <div
                  id="contact"
                  className="rounded-xl p-6 mb-10"
                  style={{ backgroundColor: 'var(--brand-100)', border: '1px solid var(--brand-500)' }}>
                  
                  <h2 className="text-2xl mb-2" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    Talk to Us Right Now
                  </h2>
                  <div className="flex flex-col gap-2 mb-5 text-base" style={{ color: 'var(--ink)' }}>
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
                  <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    <PhoneLink
                      className="btn-primary flex-1 text-center"
                      style={{ backgroundColor: 'var(--accent-600)', borderColor: 'var(--accent-600)' }}>
                      
                      Call {PHONE_DISPLAY}
                    </PhoneLink>
                    <a
                      href={PHONE_WA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex-1 text-center"
                      style={{ borderColor: 'var(--brand-700)', color: 'var(--brand-700)' }}>
                      
                      WhatsApp Us
                    </a>
                  </div>
                  <ContactForm prefilledService="Water Heater Repair" />
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

                {/* Related Reading */}
                <div className="mb-10">
                  <h2 className="text-xl mb-4" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    Related Reading
                  </h2>
                  <ul className="flex flex-col gap-2">
                    {[
                    {
                      href: '/blog/water-heater-replacement-winnipeg',
                      label: 'Water Heater Replacement in Winnipeg'
                    },
                    {
                      href: '/blog/emergency-plumber-winnipeg-24-7-guide',
                      label: 'Emergency Plumber in Winnipeg: 24/7 Guide'
                    },
                    {
                      href: '/plumbing-services-winnipeg',
                      label: 'Plumbing & Drain Cleaning Services in Winnipeg'
                    }].
                    map((link) =>
                    <li key={link.href}>
                        <Link
                        href={link.href}
                        className="text-base hover:underline"
                        style={{ color: 'var(--brand-700)' }}>
                        
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
                    No hot water, or something not right with your water heater? Find out if it&apos;s a simple fix before assuming the worst. Pro Drain Cleaning Limited answers 24 hours a day, 7 days a week, across Winnipeg, Selkirk, St. Norbert and every community within 100 km. Upfront pricing before we start — always.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
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
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    Email:{' '}
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