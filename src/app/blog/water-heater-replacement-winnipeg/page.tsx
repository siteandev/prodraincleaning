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
{ id: 'repair-or-replace', label: 'Repair or Replace? Quick Reference' },
{ id: 'signs', label: 'Signs Your Water Heater Needs Replacing' },
{ id: 'tank-vs-tankless', label: 'Tank vs. Tankless — A Quick Comparison' },
{ id: 'cost-factors', label: 'What Actually Determines the Cost of Replacement' },
{ id: 'winnipeg-specific', label: 'Why This Matters More in Winnipeg Specifically' },
{ id: 'service-areas', label: 'Every Town We Handle Water Heater Work In' },
{ id: 'why-trust', label: 'Why Winnipeg Chooses Pro Drain Cleaning Limited' },
{ id: 'faq', label: 'Frequently Asked Questions' },
{ id: 'contact', label: 'Talk to Us Right Now' }];


const faqs = [
{
  q: 'How long should a water heater last?',
  a: 'Most tank units last 8 to 12 years with normal maintenance; tankless units can last longer.'
},
{
  q: 'Is it cheaper to repair or replace my water heater?',
  a: "It depends on the age and the specific fault — we'll tell you honestly which makes more sense for your unit rather than defaulting to a replacement."
},
{
  q: 'Should I switch to tankless?',
  a: "It depends on your household's usage, available space, and existing gas/electrical setup — worth a real conversation, not a generic answer."
},
{
  q: 'Can you install a water heater the same day?',
  a: 'In most cases within Winnipeg, yes, for a like-for-like replacement.'
},
{
  q: 'What if my water heater is actively leaking right now?',
  a: 'Shut off the water supply to the tank and the power or gas to the unit if you can safely reach it, then call — this is a same-day priority.'
},
{
  q: 'Do you handle both gas and electric water heaters?',
  a: 'Yes — assessment, repair and replacement for both.'
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
    'Water Heater Replacement in Winnipeg — Signs You Need One, and What Actually Changes the Cost',
    description:
    'Not sure if your water heater needs repair or replacement? See the warning signs, what affects the cost, and how to book a straight answer in Winnipeg. Call +1 (204) 399-4413.',
    url: 'https://prodraincleaning.ca/blog/water-heater-replacement-winnipeg',
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
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_170502122-1772270757832.png",
      description: 'Plumber installing a new water heater in a Winnipeg basement'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://prodraincleaning.ca/blog/water-heater-replacement-winnipeg'
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
      name: 'Water Heater Replacement in Winnipeg',
      item: 'https://prodraincleaning.ca/blog/water-heater-replacement-winnipeg'
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

export default function WaterHeaterReplacementPost() {
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
                Water Heater Replacement in Winnipeg
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
              Water Heater Replacement in Winnipeg — Signs You Need One, and What Actually Changes the Cost
            </h1>

            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
              By <strong>Pro Drain Cleaning Limited</strong> · Published August 30, 2026 · Updated August 30, 2026
            </p>

            {/* Answer-first callout */}
            <div
              className="rounded-xl p-6 mb-6"
              style={{ backgroundColor: 'var(--brand-100)', border: '2px solid var(--brand-500)' }}>
              
              <p className="text-base leading-relaxed" style={{ color: 'var(--navy-900)' }}>
                Most water heaters last 8 to 12 years, and the clearest signs it&apos;s time to replace rather than repair one are its age, rusty or discoloured hot water, a tank that&apos;s actively leaking, or a unit that can no longer keep up with the household&apos;s hot water demand. Pro Drain Cleaning Limited assesses, repairs and replaces water heaters across Winnipeg, Selkirk, St. Norbert and every community within 100km, with an honest answer on repair versus replacement before any work starts.{' '}
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

                {/* Repair or Replace Quick Reference */}
                <div
                  id="repair-or-replace"
                  className="rounded-xl p-6 mb-10"
                  style={{ backgroundColor: '#fff7ed', border: '2px solid var(--accent-600)' }}>
                  
                  <h2 className="text-xl mb-4" style={{ color: 'var(--accent-600)', fontWeight: 700 }}>
                    Repair or Replace? Quick Reference
                  </h2>
                  <ul className="flex flex-col gap-3 text-sm" style={{ color: 'var(--navy-900)' }}>
                    <li className="flex gap-2">
                      <span style={{ color: 'var(--brand-700)', fontWeight: 700, flexShrink: 0 }}>Unit is under 6 years old, single component failure (element, thermostat, valve)</span>
                      <span style={{ color: 'var(--muted)' }}>— usually a repair</span>
                    </li>
                    <li className="flex gap-2">
                      <span style={{ color: 'var(--brand-700)', fontWeight: 700, flexShrink: 0 }}>Unit is 8+ years old with a tank leak</span>
                      <span style={{ color: 'var(--muted)' }}>— replace — a leaking tank is not repairable</span>
                    </li>
                    <li className="flex gap-2">
                      <span style={{ color: 'var(--brand-700)', fontWeight: 700, flexShrink: 0 }}>Rusty or discoloured hot water, not present on the cold side</span>
                      <span style={{ color: 'var(--muted)' }}>— sign of internal tank corrosion — replacement territory</span>
                    </li>
                    <li className="flex gap-2">
                      <span style={{ color: 'var(--brand-700)', fontWeight: 700, flexShrink: 0 }}>Popping, rumbling or banging sounds</span>
                      <span style={{ color: 'var(--muted)' }}>— sediment buildup — sometimes fixable with a flush, sometimes a sign of a tank near the end of its life</span>
                    </li>
                    <li className="flex gap-2">
                      <span style={{ color: 'var(--brand-700)', fontWeight: 700, flexShrink: 0 }}>Running out of hot water faster than it used to</span>
                      <span style={{ color: 'var(--muted)' }}>— could be sediment reducing capacity, or a sign the unit needs replacing</span>
                    </li>
                    <li className="flex gap-2">
                      <span style={{ color: 'var(--brand-700)', fontWeight: 700, flexShrink: 0 }}>Pilot light won&apos;t stay lit (gas units)</span>
                      <span style={{ color: 'var(--muted)' }}>— often a thermocouple issue — usually repairable if the tank itself is sound</span>
                    </li>
                  </ul>
                </div>

                {/* Signs section */}
                <div id="signs" className="mb-10">
                  <h2 className="text-2xl mb-5" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    Signs Your Water Heater Needs Replacing
                  </h2>
                  <div className="flex flex-col gap-5">
                    <div>
                      <h3 className="text-lg mb-2" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>Age</h3>
                      <p className="text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
                        Most tank water heaters are rated for 8 to 12 years. Past that, the risk of a tank failure rises sharply, and parts availability for an older unit gets harder.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg mb-2" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>A leaking tank</h3>
                      <p className="text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
                        Once the tank itself is leaking — not a fitting, the tank — it cannot be repaired. Replacement is the only real option.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg mb-2" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>Rusty or discoloured hot water</h3>
                      <p className="text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
                        If it&apos;s only the hot side, that usually means internal corrosion, not just old pipes.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg mb-2" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>Not enough hot water</h3>
                      <p className="text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
                        A unit that used to handle the household fine but now runs out quickly is often losing capacity to sediment or nearing end of life.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg mb-2" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>Rising energy bills with no other explanation</h3>
                      <p className="text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
                        Aging units lose efficiency as sediment builds up and components wear.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tank vs Tankless */}
                <div id="tank-vs-tankless" className="mb-10">
                  <h2 className="text-2xl mb-5" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    Tank vs. Tankless — A Quick Comparison
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--ink)' }}>
                    A tank water heater is the standard, lower upfront cost option most Winnipeg homes already have — it stores and continuously reheats a set volume of hot water. A tankless water heater heats water on demand, takes up less space, and can last longer, but costs more upfront and sometimes requires venting or gas line changes to install.
                  </p>
                  <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--ink)' }}>
                    Which one makes sense depends on your household&apos;s hot water usage, available space, and existing gas/electrical setup — we&apos;ll walk through it honestly on the phone.
                  </p>
                  {/* In-article image */}
                  <div
                    className="w-full rounded-xl overflow-hidden mb-2"
                    style={{ aspectRatio: '3/2', backgroundColor: 'var(--brand-100)', border: '1px solid var(--line)' }}
                  >
                    <img
                      src="/assets/images/water-heater-tank-vs-tankless-comparison.png"
                      alt="Comparison of a tank and tankless water heater"
                      width={1200}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs mb-4 text-center" style={{ color: 'var(--muted)' }}>
                    Comparison of a tank and tankless water heater
                  </p>
                </div>

                {/* Cost factors */}
                <div id="cost-factors" className="mb-10">
                  <h2 className="text-2xl mb-5" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    What Actually Determines the Cost of Replacement
                  </h2>
                  <ul className="flex flex-col gap-3" style={{ color: 'var(--ink)' }}>
                    {[
                    { label: 'Tank size', detail: '— matched to your household\'s hot water demand' },
                    { label: 'Fuel type', detail: '— gas, electric, or switching from one to the other' },
                    { label: 'Access', detail: '— a straightforward swap in an accessible mechanical room costs less than a unit in a tight or hard-to-reach space' },
                    { label: 'Code requirements', detail: '— older installs sometimes need venting, expansion tank, or shutoff valve upgrades to meet current code, which a legitimate installer will flag upfront rather than skip' },
                    { label: 'Tankless conversion', detail: '— moving from tank to tankless typically costs more than a like-for-like tank replacement due to venting and gas line work' }].
                    map((item, i) =>
                    <li key={i} className="flex gap-2 text-base leading-relaxed">
                        <span style={{ color: 'var(--brand-700)', fontWeight: 700, flexShrink: 0 }}>{item.label}</span>
                        <span style={{ color: 'var(--muted)' }}>{item.detail}</span>
                      </li>
                    )}
                  </ul>
                  <p className="text-base leading-relaxed mt-5" style={{ color: 'var(--ink)' }}>
                    A straightforward answer on your specific situation comes from an on-site look — we give a firm price in writing before any work starts, every time.
                  </p>
                </div>

                {/* Winnipeg specific */}
                <div id="winnipeg-specific" className="mb-10">
                  <h2 className="text-2xl mb-5" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    Why This Matters More in Winnipeg Specifically
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Manitoba&apos;s cold incoming water temperature means a water heater works harder here than in most of the country to deliver the same hot water output — which is part of why sizing it correctly, rather than just replacing like-for-like, is worth a real conversation rather than a guess.
                  </p>
                </div>

                {/* Service areas */}
                <div id="service-areas" className="mb-10">
                  <h2 className="text-2xl mb-5" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    Every Town We Handle Water Heater Work In
                  </h2>
                  <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--ink)' }}>
                    Same live-answered line, same upfront pricing, everywhere in the service area:
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {serviceAreaTowns.map((town) =>
                    <li key={town.name}>
                        {town.href ?
                      <Link
                        href={town.href}
                        className="inline-block px-3 py-1.5 rounded-full text-sm font-600 hover:opacity-80 transition-opacity"
                        style={{ backgroundColor: 'var(--brand-100)', color: 'var(--brand-700)', fontWeight: 600, border: '1px solid var(--brand-500)' }}>
                        
                            {town.name}
                          </Link> :

                      <span
                        className="inline-block px-3 py-1.5 rounded-full text-sm"
                        style={{ backgroundColor: 'var(--brand-100)', color: 'var(--navy-700)', border: '1px solid var(--line)' }}>
                        
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
                    Why Winnipeg Chooses Pro Drain Cleaning Limited for Water Heater Work
                  </h2>
                  <ul className="flex flex-col gap-3">
                    {[
                    'An honest repair-vs-replace assessment before we recommend anything',
                    'Upfront flat pricing, approved before work starts',
                    'Both tank and tankless installation experience',
                    'Locally owned and operated, working these specific communities',
                    'We also handle the plumbing and drain side of any related issue, so you\'re not juggling two companies'].
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
                    <ContactForm prefilledService="Water Heater Replacement" />
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
                    { href: '/blog/leak-detection-winnipeg', label: 'Leak Detection in Winnipeg' },
                    { href: '/blog/prevent-frozen-pipes-winnipeg', label: 'Preventing Frozen Pipes in Winnipeg' }].
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
                    Water heater acting up? Pro Drain Cleaning Limited answers 24 hours a day, 7 days a week, across Winnipeg, Selkirk, St. Norbert and every community within 100 km.
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
                  
                  <p className="text-xs font-700 uppercase tracking-wider mb-4" style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
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