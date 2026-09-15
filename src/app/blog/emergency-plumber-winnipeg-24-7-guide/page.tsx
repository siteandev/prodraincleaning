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
const PHONE_TEL = 'tel:+12043994413';
const PHONE_WA = 'https://wa.me/12043994413';
const EMAIL = 'prodraincleaningcentre@gmail.com';

const tocItems = [
{ id: 'main-shutoff', label: 'The First Thing to Do: Find Your Main Shutoff' },
{ id: 'common-emergencies', label: 'Common Plumbing Emergencies We Handle' },
{ id: 'drain-vs-plumbing', label: 'When It Is Actually a Drain Emergency, Not a Plumbing One' },
{ id: 'service-areas', label: 'Every Town We Answer Emergency Plumbing Calls In' },
{ id: 'why-trust', label: 'Why Winnipeg Calls Pro Drain Cleaning Limited' },
{ id: 'faq', label: 'Frequently Asked Questions' },
{ id: 'contact', label: 'Talk to Us Right Now' }];


const faqs = [
{
  q: 'What actually counts as a plumbing emergency?',
  a: 'Anything actively flooding, no water at all, a suspected gas smell, or a frozen pipe close to bursting. A single slow drain is not an emergency.'
},
{
  q: 'What should I do first if a pipe bursts?',
  a: 'Shut off your main water valve immediately, then call us.'
},
{
  q: 'I smell gas — should I call you?',
  a: 'No — get everyone out and call your gas utility\'s emergency line first. Call us once they\'ve confirmed it\'s safe.'
},
{
  q: 'How fast can you get here for an emergency?',
  a: 'Priority dispatch for active flooding or no-water situations, 24/7, across Winnipeg and the surrounding towns.'
},
{
  q: 'Do you handle both plumbing and drain emergencies?',
  a: 'Yes — one call covers both, and we\'ll tell you honestly which one you actually have.'
},
{
  q: 'What if it\'s the middle of winter and a pipe froze?',
  a: 'Don\'t use an open flame to thaw it yourself — call us; we thaw pipes safely and can advise on preventing it next year.'
}];


const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'BlogPosting',
    headline: 'Emergency Plumber in Winnipeg — What Counts as an Emergency, and What to Do Right Now',
    description:
    'Burst pipe, no water, or a suspected gas leak? See what to do in the first five minutes and how to reach a real emergency plumber in Winnipeg, 24/7. Call +1 (204) 399-4413.',
    url: 'https://prodraincleaning.ca/blog/emergency-plumber-winnipeg-24-7-guide',
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
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_163d87cf7-1772189374092.png",
      description: 'Emergency plumber responding to a call in Winnipeg at night'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://prodraincleaning.ca/blog/emergency-plumber-winnipeg-24-7-guide'
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
      name: 'Emergency Plumber in Winnipeg — 24/7 Guide',
      item: 'https://prodraincleaning.ca/blog/emergency-plumber-winnipeg-24-7-guide'
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


export default function EmergencyPlumberPillarPost() {
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
                Emergency Plumber in Winnipeg — 24/7 Guide
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
              <span className="text-sm" style={{ color: 'var(--muted)' }}>12 min read</span>
            </div>

            <h1 className="mb-4">
              Emergency Plumber in Winnipeg — What Counts as an Emergency, and What to Do Right Now
            </h1>

            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
              By <strong>Pro Drain Cleaning Limited</strong> · Published August 30, 2026 · Updated August 30, 2026
            </p>

            {/* Hero image */}
            <div className="rounded-xl overflow-hidden mb-8">
              {/*
                UPLOAD PLACEHOLDER — replace the src below with your own photo path.
                Example: src="/assets/images/your-emergency-plumber-photo.jpg"
                This is the only line you need to change.
              */}
              <SwappableHeroImage
                src="/assets/images/hero-emergency-drain-placeholder.png"
                alt="Emergency plumber responding to a call in Winnipeg at night"
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
                A real plumbing emergency is anything that is actively damaging your home, leaving you without water, or putting anyone's safety at risk right now — a burst pipe, a water heater dumping water onto your floor, no water anywhere in the house, a frozen pipe about to split, or the smell of gas. Pro Drain Cleaning Limited answers plumbing emergencies live, 24 hours a day, across Winnipeg, Selkirk, St. Norbert and every community within 100km. Call or WhatsApp{' '}
                <PhoneLink className="font-700 hover:underline" style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                  {PHONE_DISPLAY}
                </PhoneLink>{' '}
                — if you smell gas, get everyone out first and call your gas utility's emergency line before calling anyone else.
              </p>
            </div>

            {/* Is This a Plumbing Emergency? quick-glance box */}
            <div
              className="rounded-xl p-6"
              style={{
                backgroundColor: '#fff8f5',
                border: '2px solid var(--accent-600)'
              }}>
              
              <p
                className="text-sm font-700 uppercase tracking-wider mb-4"
                style={{ color: 'var(--accent-600)', fontWeight: 700 }}>
                
                Is This a Plumbing Emergency?
              </p>
              <ul className="flex flex-col gap-4">
                {[
                {
                  text: 'Water is actively flowing somewhere it should not',
                  verdict: 'yes, emergency',
                  note: 'Find your main shutoff (see below) before anything else.',
                  isEmergency: true
                },
                {
                  text: 'You smell gas, even faintly, near an appliance',
                  verdict: 'not a plumbing call first',
                  note: 'Get out, call your gas utility\'s emergency line, then call us once it\'s safe.',
                  isEmergency: true
                },
                {
                  text: 'No water anywhere in the house, all taps',
                  verdict: 'call us',
                  note: 'Likely a frozen or failed main service line — this can wait a few hours in most cases but not overnight in winter.',
                  isEmergency: true
                },
                {
                  text: 'One slow drain, no active flooding',
                  verdict: 'not an emergency',
                  note: 'See our regular drain cleaning guide instead.',
                  isEmergency: false
                },
                {
                  text: 'Multiple fixtures backing up together',
                  verdict: 'drain/sewer emergency',
                  note: null,
                  isEmergency: true,
                  isDrain: true
                }].
                map((item, i) =>
                <li key={i} className="flex items-start gap-3">
                    <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{
                      backgroundColor: item.isEmergency ? 'var(--accent-600)' : 'var(--brand-700)'
                    }}
                    aria-hidden="true">
                    
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        {item.isEmergency ?
                      <path d="M5 2v4M5 7.5v.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" /> :

                      <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      }
                      </svg>
                    </span>
                    <div className="text-sm leading-relaxed" style={{ color: 'var(--ink)' }}>
                      <span style={{ fontWeight: 600 }}>{item.text}</span>
                      {' '}
                      <span style={{ color: item.isEmergency ? 'var(--accent-600)' : 'var(--brand-700)', fontWeight: 700 }}>
                        — {item.verdict}.
                      </span>
                      {item.note && !item.isDrain &&
                    <span style={{ color: 'var(--muted)' }}> {item.note}</span>
                    }
                      {item.isDrain &&
                    <span style={{ color: 'var(--muted)' }}>
                          {' '}That is a drain/sewer emergency, not a plumbing one.{' '}
                          <Link
                        href="/blog/emergency-drain-cleaning-winnipeg-24-7-complete-guide"
                        className="hover:underline"
                        style={{ color: 'var(--brand-700)', fontWeight: 600 }}>
                        
                            See 24/7 Emergency Drain Cleaning in Winnipeg
                          </Link>
                          .
                        </span>
                    }
                    </div>
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

                {/* Section: Main Shutoff */}
                <div id="main-shutoff" className="scroll-mt-24">
                  <h2 className="mt-0 mb-4">
                    The First Thing to Do in Almost Any Plumbing Emergency: Find Your Main Shutoff
                  </h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Before you call anyone, know where your home's main water shutoff valve is — usually near where the water line enters the house, in the basement, a utility room, or near the water meter. Turning it off stops the situation from getting worse while you wait for help. If you don't already know where yours is, find it today, before you need it at 2 a.m. — it's the single most useful five minutes of plumbing knowledge a homeowner can have.
                  </p>
                  {/* In-article image */}
                  <div
                    className="w-full rounded-xl overflow-hidden mt-6 mb-2"
                    style={{ aspectRatio: '3/2', backgroundColor: 'var(--brand-100)', border: '1px solid var(--line)' }}
                  >
                    <img
                      src="/assets/images/emergency-plumber-main-shutoff-valve.png"
                      alt="Homeowner shutting off the main water valve during a plumbing emergency"
                      width={1200}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs mb-6 text-center" style={{ color: 'var(--muted)' }}>
                    Homeowner shutting off the main water valve during a plumbing emergency
                  </p>
                </div>

                {/* Section: Common Emergencies */}
                <div id="common-emergencies" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">
                    Common Plumbing Emergencies We Handle — and What to Do Before We Arrive
                  </h2>

                  {/* Emergency 1: Burst pipe */}
                  <div className="mb-10">
                    <h3 className="text-xl font-700 mb-3" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                      Burst or Split Pipe
                    </h3>
                    <div
                      className="rounded-xl p-5 mb-4"
                      style={{ backgroundColor: 'var(--brand-100)', border: '1px solid var(--brand-700)' }}>
                      
                      <p className="text-sm font-700 mb-3" style={{ fontWeight: 700, color: 'var(--brand-700)' }}>
                        Do this now:
                      </p>
                      <ul className="flex flex-col gap-2">
                        {[
                        'Shut off the main water valve immediately.',
                        'Open a lower-level faucet to drain remaining pressure from the line.',
                        'Move anything valuable away from the water.'].
                        map((item, i) =>
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                            <span style={{ color: 'var(--brand-700)', flexShrink: 0, marginTop: '2px' }}>•</span>
                            <span>{item}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>
                      Full detail:{' '}
                      <Link href="/blog/prevent-frozen-pipes-winnipeg" className="hover:underline font-600" style={{ color: 'var(--brand-700)', fontWeight: 600 }}>
                        Preventing Frozen Pipes in Winnipeg
                      </Link>
                    </p>
                  </div>

                  {/* Emergency 2: Frozen pipe */}
                  <div className="mb-10">
                    <h3 className="text-xl font-700 mb-3" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                      Frozen Pipe That Is About to Split (or Already Has)
                    </h3>
                    <div
                      className="rounded-xl p-5 mb-4"
                      style={{ backgroundColor: 'var(--brand-100)', border: '1px solid var(--brand-700)' }}>
                      
                      <p className="text-sm font-700 mb-3" style={{ fontWeight: 700, color: 'var(--brand-700)' }}>
                        Do this now:
                      </p>
                      <ul className="flex flex-col gap-2">
                        {[
                        'Shut off the main valve if it is already leaking.',
                        'Do not use an open flame to thaw a pipe — this is a real fire risk and a common cause of house fires every Winnipeg winter.',
                        'Leave thawing to a professional once we are on site.'].
                        map((item, i) =>
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                            <span style={{ color: 'var(--brand-700)', flexShrink: 0, marginTop: '2px' }}>•</span>
                            <span>{item}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Emergency 3: Water heater */}
                  <div className="mb-10">
                    <h3 className="text-xl font-700 mb-3" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                      Water Heater Failure or Leak
                    </h3>
                    <div
                      className="rounded-xl p-5 mb-4"
                      style={{ backgroundColor: 'var(--brand-100)', border: '1px solid var(--brand-700)' }}>
                      
                      <p className="text-sm font-700 mb-3" style={{ fontWeight: 700, color: 'var(--brand-700)' }}>
                        Do this now:
                      </p>
                      <ul className="flex flex-col gap-2">
                        {[
                        'Shut off the water supply valve at the top of the tank.',
                        'Switch off power to the unit at the breaker (or the gas supply valve for a gas unit) if you can safely reach it.'].
                        map((item, i) =>
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                            <span style={{ color: 'var(--brand-700)', flexShrink: 0, marginTop: '2px' }}>•</span>
                            <span>{item}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>
                      Full detail:{' '}
                      <Link href="/blog/water-heater-replacement-winnipeg" className="hover:underline font-600" style={{ color: 'var(--brand-700)', fontWeight: 600 }}>
                        Water Heater Replacement in Winnipeg
                      </Link>
                    </p>
                  </div>

                  {/* Emergency 4: No water */}
                  <div className="mb-10">
                    <h3 className="text-xl font-700 mb-3" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                      No Water Anywhere in the House
                    </h3>
                    <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                      Check whether it is isolated to your property or a wider outage first. If it is just your home, this often points to a frozen or failed service line — call us to diagnose it.
                    </p>
                  </div>

                  {/* Emergency 5: Gas leak */}
                  <div className="mb-10">
                    <h3 className="text-xl font-700 mb-3" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                      Suspected Gas Leak or Smell of Gas
                    </h3>
                    <div
                      className="rounded-xl p-5 mb-4"
                      style={{ backgroundColor: '#fff8f5', border: '2px solid var(--accent-600)' }}>
                      
                      <p className="text-sm font-700 mb-3" style={{ fontWeight: 700, color: 'var(--accent-600)' }}>
                        This is the one exception to calling us first:
                      </p>
                      <ul className="flex flex-col gap-2">
                        {[
                        'Get everyone out of the building.',
                        'Do not operate light switches or anything electrical.',
                        'Call your gas utility\'s emergency line from outside.',
                        'Call us once the gas utility confirms it is safe to be in the building again.'].
                        map((item, i) =>
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                            <span style={{ color: 'var(--accent-600)', flexShrink: 0, marginTop: '2px' }}>•</span>
                            <span>{item}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Emergency 6: Sump pump */}
                  <div className="mb-10">
                    <h3 className="text-xl font-700 mb-3" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                      Sump Pump Failure During a Storm or Spring Melt
                    </h3>
                    <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                      If your sump pump has stopped working and water is rising, call immediately — this can flood a finished basement within an hour.
                    </p>
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>
                      Full detail:{' '}
                      <Link href="/blog/sump-pump-maintenance-checklist" className="hover:underline font-600" style={{ color: 'var(--brand-700)', fontWeight: 600 }}>
                        Winnipeg Sump Pump Maintenance: The Pre-Spring-Melt Checklist
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Section: Drain vs Plumbing */}
                <div id="drain-vs-plumbing" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">
                    When It Is Actually a Drain Emergency, Not a Plumbing One
                  </h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    If more than one fixture is backing up at once, or you are seeing sewage rather than clean water, that is a main sewer line emergency — a different problem with a different fix.
                  </p>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Full guide:{' '}
                    <Link
                      href="/blog/emergency-drain-cleaning-winnipeg-24-7-complete-guide"
                      className="hover:underline font-600"
                      style={{ color: 'var(--brand-700)', fontWeight: 600 }}>
                      
                      24/7 Emergency Drain Cleaning in Winnipeg
                    </Link>
                  </p>
                </div>

                {/* Section: Service Areas */}
                <div id="service-areas" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Every Town We Answer Emergency Plumbing Calls In</h2>
                  <p className="mb-6 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Same live-answered line, same equipment, same upfront pricing, 24/7, across the whole service area:
                  </p>
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

                {/* Section: Why Trust */}
                <div id="why-trust" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Why Winnipeg Calls Pro Drain Cleaning Limited for Plumbing Emergencies</h2>
                  <ul className="flex flex-col gap-3 mb-6">
                    {[
                    'A real person answers, 24/7 — no answering service, no callback queue',
                    'Upfront flat pricing, approved before work starts, even after hours',
                    'Both plumbing and drain/sewer expertise on the same truck',
                    'Locally owned, working these specific streets and towns',
                    'We tell you honestly what is actually urgent and what can wait until morning'].
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
                      prefilledService="Emergency Plumbing"
                      prefilledUrgency="Emergency – happening now" />
                    
                  </div>
                </div>

                {/* Related Reading */}
                <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--line)' }}>
                  <h2 className="mb-4">Related Reading</h2>
                  <ul className="flex flex-col gap-3">
                    {[
                    {
                      href: '/blog/emergency-drain-cleaning-winnipeg-24-7-complete-guide',
                      label: '24/7 Emergency Drain Cleaning in Winnipeg'
                    },
                    {
                      href: '/plumbing-services-winnipeg',
                      label: 'Plumbing Services Winnipeg — our full plumbing service page'
                    },
                    {
                      href: '/blog/prevent-frozen-pipes-winnipeg',
                      label: 'Preventing Frozen Pipes in Winnipeg'
                    },
                    {
                      href: '/blog/sump-pump-maintenance-checklist',
                      label: 'Winnipeg Sump Pump Maintenance: The Pre-Spring-Melt Checklist'
                    },
                    {
                      href: '/blog/water-heater-replacement-winnipeg',
                      label: 'Water Heater Replacement in Winnipeg'
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
                        Plumbing emergency right now?
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
              Plumbing Emergency Right Now?
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