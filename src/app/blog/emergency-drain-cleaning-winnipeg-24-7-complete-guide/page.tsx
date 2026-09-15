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
import {
  HERO_IMAGE_SRC,
  HERO_IMAGE_ALT,
  SUMP_PUMP_IMAGE_SRC,
  SUMP_PUMP_IMAGE_ALT,
  WINTER_STREET_IMAGE_SRC,
  FLOOR_DRAIN_IMAGE_SRC,
  CAMERA_MONITOR_IMAGE_SRC,
  SERVICE_VEHICLE_IMAGE_SRC,
  SERVICE_AREA_MAP_SRC,
} from './images.config';

const PHONE_DISPLAY = '+1 (204) 399-4413';
const PHONE_TEL = 'tel:+12043994413';
const PHONE_WA = 'https://wa.me/12043994413';
const EMAIL = 'prodraincleaningcentre@gmail.com';

const tocItems = [
{ id: 'why-emergencies', label: "Why Canada\'s Winters and Older Cities Make Drain Emergencies So Common" },
{ id: 'six-emergencies', label: 'The 6 Drain Emergencies We Get Called About Most' },
{ id: 'what-never-helps', label: 'What Never Helps in a Drain Emergency' },
{ id: 'what-happens', label: 'What Happens When You Call Us' },
{ id: 'why-trust', label: 'Why Winnipeg and Manitoba Trust Pro Drain Cleaning Limited' },
{ id: 'service-areas', label: 'Every Community We Answer Emergency Calls In, 24/7' },
{ id: 'faq', label: 'Frequently Asked Questions' },
{ id: 'contact', label: 'Talk to Us Right Now' }];


const faqs = [
{
  q: 'Is it actually a real person who answers, day or night?',
  a: 'Yes. No answering service, no callback queue — call or WhatsApp +1 (204) 399-4413 and a technician picks up, every hour of every day.'
},
{
  q: 'How fast can you get to me?',
  a: 'Same-day for most Winnipeg calls, with priority dispatch when water is actively rising. For towns further out — Steinbach, Portage la Prairie, Gimli — response depends on distance and time of day, and we\'ll tell you honestly on the phone rather than guess.'
},
{
  q: 'Do you charge more for emergency or after-hours calls?',
  a: '[VERIFY — state your after-hours pricing policy here before publishing]'
},
{
  q: 'What\'s the very first thing I should do before calling?',
  a: 'Stop using every tap, toilet and appliance connected to water in the building. That single step limits more damage than anything else you can do in the first five minutes.'
},
{
  q: 'How do I know if it\'s one drain or my main sewer line?',
  a: 'If only one fixture is affected, it\'s likely a branch line. If multiple fixtures act up together, or a different fixture reacts when you run water somewhere else, it\'s almost always the main line. Full detail: 9 Signs Your Main Sewer Line Is Clogged.'
},
{
  q: 'Will you help document this for an insurance claim?',
  a: 'Yes — we provide dated invoices, photos and camera footage where relevant, which is exactly what most insurers ask for.'
},
{
  q: 'Do you serve areas outside Winnipeg at night, not just during the day?',
  a: 'Yes — the same 24/7 live-answered line covers Selkirk, St. Norbert, Steinbach, Niverville, Stonewall and every other town within 100km, any hour.'
},
{
  q: 'Is a chemical drain cleaner ever a reasonable emergency fix?',
  a: 'No — it rarely clears a genuine blockage, it can damage older pipe, and if it doesn\'t work, it leaves a hazard in the trap for whoever opens that line next, including us.'
},
{
  q: 'What if I\'ve already tried plunging and it made things worse?',
  a: 'Stop, and tell us exactly what you tried when you call — it changes how we approach the job and matters for safety if any chemical was involved.'
}];


const faqSchema = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'BlogPosting',
    headline: 'Emergency Drain Cleaning in Winnipeg, 24/7 — The Complete Guide for Every Town Within 100km',
    description: '24/7 emergency drain cleaning across Winnipeg, Selkirk, St. Norbert and every town within 100km. What to do right now, and a real technician who answers day or night. Call +1 (204) 399-4413.',
    url: 'https://prodraincleaning.ca/blog/emergency-drain-cleaning-winnipeg-24-7-complete-guide',
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
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_1a9283429-1787883125190.png",
      description: 'Emergency drain cleaning technician responding to a call in Winnipeg at night'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://prodraincleaning.ca/blog/emergency-drain-cleaning-winnipeg-24-7-complete-guide'
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
      name: 'Emergency Drain Cleaning Winnipeg 24/7 — Complete Guide',
      item: 'https://prodraincleaning.ca/blog/emergency-drain-cleaning-winnipeg-24-7-complete-guide'
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

export default function EmergencyDrainPillarPost() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
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
                Emergency Drain Cleaning Winnipeg 24/7 — Complete Guide
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
                
                Emergency
              </span>
              <span
                className="text-xs font-700 px-2.5 py-1 rounded-full"
                style={{ backgroundColor: 'var(--brand-700)', color: 'white', fontWeight: 700 }}>
                
                Complete Guide
              </span>
              <span className="text-sm" style={{ color: 'var(--muted)' }}>18 min read</span>
            </div>

            <h1 className="mb-4">
              Emergency Drain Cleaning in Winnipeg, 24/7 — The Complete Guide for Every Town Within 100km
            </h1>

            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
              By <strong>Pro Drain Cleaning Limited</strong> · Published August 28, 2026 · Updated August 28, 2026
            </p>

            {/* Hero image — UPLOAD SLOT 1: swap src in images.config.ts */}
            <div className="rounded-xl overflow-hidden mb-8">
              <img
                src={HERO_IMAGE_SRC}
                alt={HERO_IMAGE_ALT}
                width={1600}
                height={900}
                loading="eager"
                decoding="async"
                className="w-full object-cover"
                style={{ maxHeight: '500px', objectPosition: 'center top' }} />
            </div>

            {/* Answer-first callout box */}
            <div
              className="rounded-xl p-6 mb-6"
              style={{
                backgroundColor: 'var(--brand-100)',
                borderLeft: '4px solid var(--brand-700)',
                border: '1px solid var(--brand-700)',
                borderLeftWidth: '4px'
              }}>
              
              <p
                className="text-xs font-700 uppercase tracking-wider mb-3"
                style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                
                The Short Answer
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--ink)' }}>
                If a drain is backing up, a toilet won't stop overflowing, or sewage is coming up through a floor drain right now, stop using every tap and toilet in the building immediately and call or WhatsApp{' '}
                <PhoneLink className="font-700 hover:underline" style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                  {PHONE_DISPLAY}
                </PhoneLink>
                . Pro Drain Cleaning Limited answers live, 24 hours a day, 7 days a week, across Winnipeg, Selkirk, St. Norbert and every community within 100km of Winnipeg — including Steinbach, Niverville, Stonewall, Headingley, Gimli and Portage la Prairie. A real technician talks you through what to do while help is on the way, and every job is quoted with a flat price you approve before any work starts.
              </p>
            </div>

            {/* Emergency checklist box */}
            <div
              className="rounded-xl p-6"
              style={{
                backgroundColor: '#fff8f5',
                border: '2px solid var(--accent-600)'
              }}>
              
              <p
                className="text-sm font-700 uppercase tracking-wider mb-4"
                style={{ color: 'var(--accent-600)', fontWeight: 700 }}>
                
                Quick-Glance Emergency Checklist — Do This Right Now
              </p>
              <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>
                Before you do anything else:
              </p>
              <ol className="flex flex-col gap-3">
                {[
                'Stop using every sink, toilet, shower and appliance connected to water in the building.',
                'If sewage is present, keep people and pets off the affected floor — it\'s contaminated water, not just dirty water.',
                'Do not pour in a chemical drain cleaner, and don\'t plunge a toilet if other fixtures are also backing up.',
                'If it\'s safe to reach, shut off the main water valve for a burst pipe or active flooding.',
                'Take photos of the damage before you clean anything up — you\'ll want them for insurance.',
                <span key="step6">
                    Call or WhatsApp{' '}
                    <PhoneLink className="font-700 hover:underline" style={{ color: 'var(--accent-600)', fontWeight: 700 }}>
                      {PHONE_DISPLAY}
                    </PhoneLink>
                    . We're answered 24/7, every day of the year.
                  </span>].
                map((step, i) =>
                <li key={i} className="flex items-start gap-3">
                    <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-700"
                    style={{ backgroundColor: 'var(--accent-600)', color: 'white', fontWeight: 700, marginTop: '2px' }}>
                    
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: 'var(--ink)' }}>
                      {step}
                    </span>
                  </li>
                )}
              </ol>
            </div>
          </div>
        </section>

        {/* Main content with sidebar TOC */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Article body */}
              <article className="lg:col-span-3">

                {/* Section 1 */}
                <div id="why-emergencies" className="scroll-mt-24">
                  <h2 className="mt-0 mb-4">
                    Why Canada's Winters and Older Cities Make Drain Emergencies So Common
                  </h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Drain and sewer emergencies aren't random bad luck. Across Canada, the combination of hard freeze-thaw cycles, decades-old municipal infrastructure, and mature urban tree canopies creates conditions that push pipes toward failure — and Winnipeg sits near the top of that list. The city's oldest neighbourhoods still run on clay-tile and cast-iron sewer lines laid over half a century ago, many of them on combined sewer systems that carry stormwater and household waste through the same pipe. Add a deep frost line, a hard spring melt, and a canopy of mature elms and maples with root systems that have had decades to find every hairline crack in that old pipe, and you have a city where "sudden" backups are rarely sudden at all — they're the final stage of a problem that's been building quietly for months.
                  </p>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    That's true well beyond Winnipeg's city limits too. Selkirk and St. Norbert sit on the Red River with genuinely high water tables. Rural communities like Headingley, Oak Bluff and East St. Paul run on private septic systems that behave very differently under stress. Fast-growing towns like Niverville and Steinbach are dealing with a newer problem: construction debris and settling backfill in brand-new lines. Different causes, same result — a drain emergency doesn't wait for business hours, and the town it happens in shouldn't change how fast you can get a real person on the phone.
                  </p>
                  <figure className="rounded-xl overflow-hidden my-6">
                    <img
                      src={WINTER_STREET_IMAGE_SRC}
                      alt="Older Winnipeg neighbourhood with mature trees and aging sewer infrastructure in winter"
                      width={1200}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover"
                      style={{ maxHeight: '400px', objectPosition: 'center' }} />
                  </figure>
                </div>

                {/* Section 2 */}
                <div id="six-emergencies" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">
                    The 6 Drain Emergencies We Get Called About Most — and What to Do Before We Arrive
                  </h2>
                  <p className="mb-6 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Each of these has a different right answer. Doing the wrong one — plunging a toilet when the real problem is your main line, for example — can make the damage worse before help even arrives. Here's exactly what to do for each, in the minutes before a technician gets there.
                  </p>

                  {/* Emergency 1 */}
                  <div className="mb-10">
                    <h3 className="text-xl font-700 mb-3" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                      1. Sewage Backing Up Through a Floor Drain, Tub or Toilet
                    </h3>
                    <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                      This is a contamination event, not a plumbing inconvenience, and it's the single most urgent call we take.
                    </p>
                    <div
                      className="rounded-xl p-5 mb-4"
                      style={{ backgroundColor: 'var(--brand-100)', border: '1px solid var(--brand-700)' }}>
                      
                      <p className="text-sm font-700 mb-3" style={{ fontWeight: 700, color: 'var(--brand-700)' }}>
                        Do this now:
                      </p>
                      <ul className="flex flex-col gap-2">
                        {[
                        'Stop using every fixture in the building immediately — every flush and every load of laundry adds volume to a line that already can\'t take what\'s in it.',
                        'Keep people and pets off the affected floor. Category 3 water carries bacteria and pathogens; treat it as contaminated, full stop.',
                        'If you can safely reach a breaker panel without stepping in water, cut power to the affected area.',
                        'Photograph the damage — walls, floor, the water line, everything affected — before any cleanup starts. Insurers ask for this every time.',
                        'Do not run a shop vac on sewage without proper protection, and don\'t pour bleach down the drain hoping it helps — it does nothing to the blockage and makes the space more hazardous for whoever opens that line next.'].
                        map((item, i) =>
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                            <span style={{ color: 'var(--brand-700)', flexShrink: 0, marginTop: '2px' }}>•</span>
                            <span>{item}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>
                      Full walkthrough:{' '}
                      <Link href="/blog/sewer-backup-what-to-do" className="hover:underline font-600" style={{ color: 'var(--brand-700)', fontWeight: 600 }}>
                        Sewer Backup in Your Basement? Do These 7 Things First
                      </Link>
                    </p>
                  </div>

                  {/* Floor drain image — positioned between emergencies 1–2 */}
                  <figure className="rounded-xl overflow-hidden my-6">
                    <img
                      src={FLOOR_DRAIN_IMAGE_SRC}
                      alt="Water pooling around a basement floor drain during a sewer backup"
                      width={1200}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover"
                      style={{ maxHeight: '380px', objectPosition: 'center' }} />
                  </figure>

                  {/* Emergency 2 */}
                  <div className="mb-10">
                    <h3 className="text-xl font-700 mb-3" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                      2. A Toilet That Won't Stop Overflowing
                    </h3>
                    <div
                      className="rounded-xl p-5"
                      style={{ backgroundColor: 'var(--brand-100)', border: '1px solid var(--brand-700)' }}>
                      
                      <p className="text-sm font-700 mb-3" style={{ fontWeight: 700, color: 'var(--brand-700)' }}>
                        Do this now:
                      </p>
                      <ul className="flex flex-col gap-2">
                        {[
                        'Reach behind the toilet and turn the shut-off valve clockwise until it stops. No valve, or it\'s seized? Lift the tank lid and hold the flapper down to stop water entering the bowl.',
                        'If other fixtures — a tub, a different sink, a floor drain — are also acting up, do not plunge it. That\'s a main line symptom, not a toilet problem, and plunging pushes more water into a line that has nowhere to send it.',
                        'If it\'s your only bathroom, or you\'re running a business with customers on-site, this counts as a real emergency — treat it as one.'].
                        map((item, i) =>
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                            <span style={{ color: 'var(--brand-700)', flexShrink: 0, marginTop: '2px' }}>•</span>
                            <span>{item}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Emergency 3 */}
                  <div className="mb-10">
                    <h3 className="text-xl font-700 mb-3" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                      3. Multiple Drains Backing Up at the Same Time
                    </h3>
                    <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                      When your toilet, tub and a basement floor drain all act up together, the problem isn't any one of those fixtures — it's the main sewer line every one of them drains into.
                    </p>
                    <div
                      className="rounded-xl p-5 mb-4"
                      style={{ backgroundColor: 'var(--brand-100)', border: '1px solid var(--brand-700)' }}>
                      
                      <p className="text-sm font-700 mb-3" style={{ fontWeight: 700, color: 'var(--brand-700)' }}>
                        Do this now:
                      </p>
                      <ul className="flex flex-col gap-2">
                        {[
                        'Stop all water use across the entire building, not just the affected fixture.',
                        'Watch whether flushing one fixture makes a different one gurgle or rise — that confirms a shared main line problem.',
                        'Don\'t keep testing it by running more water "to see if it clears." It won\'t, and it adds volume to an already-blocked line.'].
                        map((item, i) =>
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                            <span style={{ color: 'var(--brand-700)', flexShrink: 0, marginTop: '2px' }}>•</span>
                            <span>{item}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>
                      More detail:{' '}
                      <Link href="/blog/signs-main-sewer-line-clogged" className="hover:underline font-600" style={{ color: 'var(--brand-700)', fontWeight: 600 }}>
                        9 Signs Your Main Sewer Line Is Clogged
                      </Link>
                    </p>
                  </div>

                  {/* Emergency 4 */}
                  <div className="mb-10">
                    <h3 className="text-xl font-700 mb-3" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                      4. A Burst or Frozen Pipe
                    </h3>
                    <div
                      className="rounded-xl p-5 mb-4"
                      style={{ backgroundColor: 'var(--brand-100)', border: '1px solid var(--brand-700)' }}>
                      
                      <p className="text-sm font-700 mb-3" style={{ fontWeight: 700, color: 'var(--brand-700)' }}>
                        Do this now:
                      </p>
                      <ul className="flex flex-col gap-2">
                        {[
                        'Shut off your main water valve immediately if there\'s active flooding from a burst.',
                        'For a frozen pipe with no water flowing yet, open the affected tap so pressure has somewhere to release, and apply gentle heat — a hair dryer or warm towels — starting from the tap end. Never use an open flame on a frozen pipe; it\'s a leading cause of house fires during cold snaps and can split the pipe outright.',
                        'Move anything valuable away from the area and start soaking up standing water if it\'s safe to do so.'].
                        map((item, i) =>
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                            <span style={{ color: 'var(--brand-700)', flexShrink: 0, marginTop: '2px' }}>•</span>
                            <span>{item}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>
                      Full prevention guide:{' '}
                      <Link href="/blog/prevent-frozen-pipes-winnipeg" className="hover:underline font-600" style={{ color: 'var(--brand-700)', fontWeight: 600 }}>
                        How to Prevent Frozen Pipes in a Winnipeg Winter
                      </Link>
                    </p>
                  </div>

                  {/* Sump pump image — UPLOAD SLOT 2: swap src in images.config.ts */}
                  <figure className="rounded-xl overflow-hidden my-6">
                    <img
                      src={SUMP_PUMP_IMAGE_SRC}
                      alt={SUMP_PUMP_IMAGE_ALT}
                      width={1200}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover"
                      style={{ maxHeight: '380px', objectPosition: 'center' }} />
                  </figure>

                  {/* Emergency 5 */}
                  <div className="mb-10">
                    <h3 className="text-xl font-700 mb-3" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                      5. A Sump Pump That's Failed During a Storm or Spring Melt
                    </h3>
                    <div
                      className="rounded-xl p-5 mb-4"
                      style={{ backgroundColor: 'var(--brand-100)', border: '1px solid var(--brand-700)' }}>
                      
                      <p className="text-sm font-700 mb-3" style={{ fontWeight: 700, color: 'var(--brand-700)' }}>
                        Do this now:
                      </p>
                      <ul className="flex flex-col gap-2">
                        {[
                        'Check whether the pit is actively overflowing or just running constantly without keeping up — that changes the urgency.',
                        'If you have a spare pump or a battery backup, this is the moment to switch it on.',
                        'Move stored items off the basement floor immediately, even before the water reaches them.',
                        'Do not run an extension cord through standing water to try to power a backup pump.'].
                        map((item, i) =>
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                            <span style={{ color: 'var(--brand-700)', flexShrink: 0, marginTop: '2px' }}>•</span>
                            <span>{item}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>
                      Full checklist:{' '}
                      <Link href="/blog/sump-pump-maintenance-checklist" className="hover:underline font-600" style={{ color: 'var(--brand-700)', fontWeight: 600 }}>
                        Winnipeg Sump Pump Maintenance: The Pre-Spring-Melt Checklist
                      </Link>
                    </p>
                  </div>

                  {/* Emergency 6 */}
                  <div className="mb-10">
                    <h3 className="text-xl font-700 mb-3" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                      6. A Restaurant or Commercial Kitchen Floor Drain Backing Up Mid-Service
                    </h3>
                    <div
                      className="rounded-xl p-5 mb-4"
                      style={{ backgroundColor: 'var(--brand-100)', border: '1px solid var(--brand-700)' }}>
                      
                      <p className="text-sm font-700 mb-3" style={{ fontWeight: 700, color: 'var(--brand-700)' }}>
                        Do this now:
                      </p>
                      <ul className="flex flex-col gap-2">
                        {[
                        'Stop drainage into the affected area immediately — pause dish pit and prep sink use if you can reroute service.',
                        'Block the area off from customers and staff, especially if there\'s any standing water on the kitchen floor.',
                        'Photograph it for your own records before cleanup, particularly if a health inspection could follow.',
                        'Call us and tell us it\'s an active commercial kitchen emergency — we prioritize these calls because every hour closed is real lost revenue.'].
                        map((item, i) =>
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                            <span style={{ color: 'var(--brand-700)', flexShrink: 0, marginTop: '2px' }}>•</span>
                            <span>{item}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>
                      More on keeping this from happening again:{' '}
                      <Link href="/blog/restaurant-grease-trap-line-cleaning" className="hover:underline font-600" style={{ color: 'var(--brand-700)', fontWeight: 600 }}>
                        Restaurant Grease Line Cleaning: How Often Winnipeg Kitchens Really Need It
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Mid-article CTA */}
                <div
                  className="my-10 p-6 rounded-xl"
                  style={{ backgroundColor: 'var(--orange-100)', border: '2px solid var(--accent-600)' }}>
                  
                  <p className="font-700 mb-2" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                    Drain emergency happening right now?
                  </p>
                  <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>
                    A real technician answers 24/7 — not an answering service. Upfront flat pricing before we start.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <PhoneLink className="btn-primary inline-flex">
                      Call {PHONE_DISPLAY}
                    </PhoneLink>
                    <Link
                      href={PHONE_WA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-700 text-sm"
                      style={{ backgroundColor: 'var(--whatsapp)', color: 'white', fontWeight: 700 }}>
                      
                      WhatsApp Us
                    </Link>
                  </div>
                </div>

                {/* Section 3 */}
                <div id="what-never-helps" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">What Never Helps in a Drain Emergency</h2>
                  <ul className="flex flex-col gap-4">
                    {[
                    {
                      title: 'Chemical drain cleaners.',
                      body:
                      <>
                            They rarely clear a real blockage, they generate heat that can damage older pipe, and if the line still doesn't clear, that chemical is sitting in the trap waiting for whoever opens it next. Full detail:{' '}
                            <Link href="/blog/chemical-drain-cleaners-damage-pipes" className="hover:underline font-600" style={{ color: 'var(--brand-700)', fontWeight: 600 }}>
                              Do Chemical Drain Cleaners Damage Your Pipes?
                            </Link>
                          </>

                    },
                    {
                      title: '"Running more water to flush it through."',
                      body: 'On a genuine blockage, this doesn\'t clear anything — it just adds volume to a system that already can\'t process what\'s in it.'
                    },
                    {
                      title: 'Waiting until morning "to see if it settles."',
                      body: 'Water sitting on a floor doesn\'t stay contained. Drywall wicks it up within hours; contaminated water spreads to anything porous it touches. The fix is a service call. The delay is a restoration project and an insurance claim.'
                    },
                    {
                      title: 'Guessing which fixture is the real problem.',
                      body: 'A slow bathroom sink and a blocked main line can look similar in the first five minutes and need completely different responses.'
                    }].
                    map((item, i) =>
                    <li key={i} className="flex items-start gap-3">
                        <span
                        className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                        style={{ backgroundColor: 'var(--accent-600)' }} />
                      
                        <p className="leading-relaxed" style={{ color: 'var(--ink)' }}>
                          <strong>{item.title}</strong>{' '}
                          {typeof item.body === 'string' ? item.body : item.body}
                        </p>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Section 4 */}
                <div id="what-happens" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">What Happens When You Call Us</h2>
                  <figure className="rounded-xl overflow-hidden mb-6">
                    <img
                      src={CAMERA_MONITOR_IMAGE_SRC}
                      alt="Technician reviewing sewer camera inspection footage on site"
                      width={1200}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover"
                      style={{ maxHeight: '380px', objectPosition: 'center' }} />
                  </figure>
                  <ol className="flex flex-col gap-4">
                    {[
                    {
                      step: 'A real technician answers — call or WhatsApp, any hour.',
                      detail: 'Not an answering service reading a script. Tell us what\'s happening and which fixtures are affected.'
                    },
                    {
                      step: 'We triage over the phone first.',
                      detail: 'Which drains are acting up tells us in seconds whether this is one fixture or a shared main line, and you get a realistic price range before anyone drives out.'
                    },
                    {
                      step: 'We arrive fully equipped.',
                      detail: 'Full-size drain machines, a hydro jetter, an HD camera and a locator on every truck — not "we\'ll come back tomorrow with the right tool."'
                    },
                    {
                      step: 'You approve a flat price before we touch anything.',
                      detail: 'No hourly meter running while we figure out the problem.'
                    },
                    {
                      step: 'We clear it and prove it.',
                      detail: 'A full-flow test, and a camera pass where it\'s useful, so you can see the line is actually clear — not just quieter for now.'
                    },
                    {
                      step: 'We clean up and tell you the truth about prevention.',
                      detail: 'Including when the honest answer is that you don\'t need anything else.'
                    }].
                    map((item, i) =>
                    <li key={i} className="flex items-start gap-4">
                        <span
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-700"
                        style={{ backgroundColor: 'var(--brand-700)', color: 'white', fontWeight: 700 }}>
                        
                          {i + 1}
                        </span>
                        <div>
                          <p className="font-700 mb-1" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                            {item.step}
                          </p>
                          <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                            {item.detail}
                          </p>
                        </div>
                      </li>
                    )}
                  </ol>
                </div>

                {/* Section 5 */}
                <div id="why-trust" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">
                    Why Winnipeg and Manitoba Trust Pro Drain Cleaning Limited for Emergency Calls
                  </h2>
                  <figure className="rounded-xl overflow-hidden mb-6">
                    <img
                      src={SERVICE_VEHICLE_IMAGE_SRC}
                      alt="Pro Drain Cleaning Limited service vehicle responding to a Winnipeg call"
                      width={1200}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover"
                      style={{ maxHeight: '380px', objectPosition: 'center' }} />
                  </figure>
                  <ul className="flex flex-col gap-3">
                    {[
                    'Drains and sewers are all we do. Not a sideline between furnace calls — a specialist crew that clears in one visit what a generalist often needs three visits to solve.',
                    'Genuinely answered 24/7. Christmas morning, a Sunday at 3 a.m., the coldest week of January — a real person picks up every time.',
                    'Commercial-grade equipment on every truck, standard — sectional and drum augers, a hydro jetter, an HD camera, a line locator.',
                    'Upfront flat pricing, approved by you before work starts, even on an emergency call.',
                    'Camera-verified results. We show you the cleared line on screen and send you the footage — proof, not just a promise.',
                    'We protect your home. Boot covers, floor mats and containment on every job, and we clean up completely before we leave.',
                    'Locally owned and operated, working these specific neighbourhoods and towns, not a national call centre routing you to a subcontractor.'].
                    map((item, i) =>
                    <li key={i} className="flex items-start gap-3">
                        <span
                        className="flex-shrink-0 mt-1"
                        style={{ color: 'var(--brand-700)' }}
                        aria-hidden="true">
                        
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <circle cx="9" cy="9" r="9" fill="var(--brand-100)" />
                            <path d="M5 9l3 3 5-5" stroke="var(--brand-700)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <p className="leading-relaxed" style={{ color: 'var(--ink)' }}>{item}</p>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Section 6 — Service Areas */}
                <div id="service-areas" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Every Community We Answer Emergency Calls In, 24/7</h2>
                  <p className="mb-6 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Wherever you're calling from within roughly 100km of Winnipeg, this is the same team, the same live-answered phone line, and the same upfront pricing — not a different subcontractor with a different standard.
                  </p>
                  <figure className="rounded-xl overflow-hidden mb-6 flex justify-center" style={{ backgroundColor: 'var(--brand-100)' }}>
                    <img
                      src={SERVICE_AREA_MAP_SRC}
                      alt="Illustration showing Pro Drain Cleaning Limited's Winnipeg-centred 100km service area"
                      width={1200}
                      height={900}
                      loading="lazy"
                      decoding="async"
                      className="w-full"
                      style={{ maxHeight: '420px', objectFit: 'contain' }} />
                  </figure>
                  <ul className="flex flex-col gap-3 mb-6">
                    {[
                    {
                      name: 'Winnipeg',
                      href: '/areas/drain-cleaning-winnipeg',
                      detail: '— every neighbourhood, from older clay-pipe areas like River Heights, Wolseley and Elmwood to newer developments like Sage Creek and Bridgwater.'
                    },
                    {
                      name: 'Selkirk',
                      href: '/areas/drain-cleaning-selkirk',
                      detail: '— riverside homes and Selkirk\'s older core housing stock.'
                    },
                    {
                      name: 'St. Norbert',
                      href: '/areas/drain-cleaning-st-norbert',
                      detail: '— at the confluence of the Red and La Salle, with a high water table and real flood history.'
                    },
                    {
                      name: 'Headingley',
                      href: '/areas/drain-cleaning-headingley',
                      detail: '— semi-rural properties, many on private septic and well systems.'
                    },
                    {
                      name: 'Oak Bluff',
                      href: '/areas/drain-cleaning-oak-bluff',
                      detail: '— newer acreage development with heavy clay soil and sump-dependent basements.'
                    },
                    {
                      name: 'Lorette',
                      href: '/areas/drain-cleaning-lorette',
                      detail: '— a mix of older homes and new builds southeast of the city.'
                    },
                    {
                      name: 'Niverville',
                      href: '/areas/drain-cleaning-niverville',
                      detail: '— one of Manitoba\'s fastest-growing towns, with the construction-debris issues that come with rapid new development.'
                    },
                    {
                      name: 'Steinbach',
                      href: '/areas/drain-cleaning-steinbach',
                      detail: '— the region\'s largest centre outside Winnipeg, with a substantial restaurant and commercial sector.'
                    },
                    {
                      name: 'Stonewall',
                      href: '/areas/drain-cleaning-stonewall',
                      detail: '— limestone country, with the hard water and scale build-up that comes with it.'
                    },
                    {
                      name: 'East St. Paul & West St. Paul',
                      href: '/areas/drain-cleaning-east-west-st-paul',
                      detail: '— largely septic and well, high water tables along the Red.'
                    }].
                    map((area, i) =>
                    <li key={i} className="flex items-start gap-2 leading-relaxed" style={{ color: 'var(--ink)' }}>
                        <span style={{ color: 'var(--brand-700)', flexShrink: 0, marginTop: '4px' }}>•</span>
                        <span>
                          <Link href={area.href} className="font-700 hover:underline" style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                            {area.name}
                          </Link>
                          {area.detail}
                        </span>
                      </li>
                    )}
                    <li className="flex items-start gap-2 leading-relaxed" style={{ color: 'var(--ink)' }}>
                      <span style={{ color: 'var(--brand-700)', flexShrink: 0, marginTop: '4px' }}>•</span>
                      <span>
                        Ile des Chenes, St. Adolphe, Oakbank, Dugald, Beausejour, Teulon, Gimli, Portage la Prairie, Morris and Carman — and every community in between, within 100km of Winnipeg.
                      </span>
                    </li>
                  </ul>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    If your town isn't listed by name, call anyway — if you're within roughly 100km of Winnipeg, we almost certainly cover it, and we'll tell you honestly on the phone if you're outside our range.
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
                  <div className="flex flex-col gap-3 mb-6">
                    <p className="leading-relaxed" style={{ color: 'var(--ink)' }}>
                      <strong>Call or WhatsApp:</strong>{' '}
                      <PhoneLink className="font-700 hover:underline" style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                        {PHONE_DISPLAY}
                      </PhoneLink>{' '}
                      — answered 24 hours a day, every day of the year
                    </p>
                    <p className="leading-relaxed" style={{ color: 'var(--ink)' }}>
                      <strong>Email:</strong>{' '}
                      <Link href={`mailto:${EMAIL}`} className="hover:underline" style={{ color: 'var(--brand-700)' }}>
                        {EMAIL}
                      </Link>
                    </p>
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>
                      Or fill in the emergency contact form below and we'll call you back immediately — but if water is actively rising right now, don't wait for a callback, call.
                    </p>
                  </div>

                  {/* Inline contact form */}
                  <div
                    className="rounded-xl p-6"
                    style={{ backgroundColor: 'var(--brand-100)', border: '1px solid var(--brand-700)' }}>
                    
                    <h3 className="text-lg font-700 mb-4" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                      Request an Emergency Callback
                    </h3>
                    <ContactForm
                      prefilledService="24/7 Emergency Drain Cleaning"
                      prefilledUrgency="emergency" />
                    
                  </div>
                </div>

                {/* Related Reading */}
                <div className="mt-12">
                  <h2 className="mb-6">Related Reading</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                    { href: '/blog/sewer-backup-what-to-do', label: 'Sewer Backup in Your Basement? Do These 7 Things First' },
                    { href: '/blog/emergency-plumber-winnipeg-when-to-call', label: 'When to Call an Emergency Plumber in Winnipeg (And When It Can Wait)' },
                    { href: '/blog/signs-main-sewer-line-clogged', label: '9 Signs Your Main Sewer Line Is Clogged' },
                    { href: '/emergency-drain-plumbing-winnipeg', label: '24/7 Emergency Drain & Plumbing Winnipeg — our full emergency service page' },
                    { href: '/blog/hydro-jetting-vs-snaking', label: 'Drain & Sewer Specialist vs. a General Plumber' }].
                    map((link, i) =>
                    <Link
                      key={i}
                      href={link.href}
                      className="card p-4 hover:shadow-brand transition-shadow group"
                      style={{ textDecoration: 'none' }}>
                      
                        <span className="text-sm font-600 group-hover:underline" style={{ fontWeight: 600, color: 'var(--navy-900)' }}>
                          {link.label}
                        </span>
                        <span className="block text-xs mt-1" style={{ color: 'var(--accent-600)' }}>
                          Read →
                        </span>
                      </Link>
                    )}
                  </div>
                </div>

                {/* End CTA */}
                <div
                  className="mt-12 p-8 rounded-xl text-center"
                  style={{ backgroundColor: 'var(--navy-900)' }}>
                  
                  <h2 className="text-white mb-3">Blocked drain right now?</h2>
                  <p className="mb-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    Pro Drain Cleaning Limited answers 24 hours a day, 7 days a week, across Winnipeg, Selkirk, St. Norbert and every community within 100km. Upfront pricing before we start — always.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <PhoneLink className="btn-primary shimmer-btn inline-flex">
                      Call {PHONE_DISPLAY} — 24/7
                    </PhoneLink>
                    <Link
                      href={PHONE_WA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-700 text-sm"
                      style={{ backgroundColor: 'var(--whatsapp)', color: 'white', fontWeight: 700 }}>
                      
                      WhatsApp
                    </Link>
                    <Link
                      href={`mailto:${EMAIL}`}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-700 text-sm border"
                      style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white', fontWeight: 700 }}>
                      
                      {EMAIL}
                    </Link>
                  </div>
                </div>
              </article>

              {/* Sticky sidebar TOC */}
              <aside className="hidden lg:block lg:col-span-1">
                <div className="sticky top-24 card p-5">
                  <h3
                    className="text-xs font-700 mb-4 uppercase tracking-wider"
                    style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                    
                    On This Page
                  </h3>
                  <ul className="flex flex-col gap-1">
                    {tocItems.map((item) =>
                    <li key={item.id}>
                        <a
                        href={`#${item.id}`}
                        className="block text-xs leading-relaxed py-1 px-2 rounded transition-colors hover:underline"
                        style={{
                          color: activeSection === item.id ? 'var(--brand-700)' : 'var(--muted)',
                          backgroundColor: activeSection === item.id ? 'var(--brand-100)' : 'transparent',
                          fontWeight: activeSection === item.id ? 700 : 400
                        }}>
                        
                          {item.label}
                        </a>
                      </li>
                    )}
                  </ul>
                  <div className="mt-6 pt-6 border-t" style={{ borderColor: 'var(--line)' }}>
                    <PhoneLink className="btn-primary w-full text-sm justify-center">
                      Call 24/7
                    </PhoneLink>
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