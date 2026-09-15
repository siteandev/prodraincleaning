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
{ id: 'do-this-not-that', label: 'Clogged Toilet — Do This, Not That' },
{ id: 'what-causes-it', label: "What\'s Actually Causing It" },
{ id: 'how-to-plunge', label: 'The Correct Way to Plunge a Toilet' },
{ id: 'toilet-auger', label: 'When to Use a Toilet Auger' },
{ id: 'what-never-helps', label: "What Never Helps — and Can Make It Worse" },
{ id: 'main-line', label: 'When a "Clogged Toilet" Is Actually a Main Line Problem' },
{ id: 'weak-flush', label: 'If the Toilet Flushes Weakly Instead of Clogging Completely' },
{ id: 'service-areas', label: 'Every Town We Clear Clogged Toilets In' },
{ id: 'why-trust', label: 'Why Winnipeg Calls Pro Drain Cleaning Limited' },
{ id: 'faq', label: 'Frequently Asked Questions' },
{ id: 'contact', label: 'Talk to Us Right Now' }];


const faqs = [
{
  q: "Why won\'t my toilet unclog even after plunging?",
  a: 'The blockage may be past the trap, or it may not be a simple clog at all — a toilet auger or a professional look is the next step.'
},
{
  q: 'Is it safe to use a chemical drain cleaner in a toilet?',
  a: "No — it rarely clears a real blockage and can damage the bowl\'s glaze and internal seals."
},
{
  q: "What's the difference between a toilet auger and a regular drain snake?",
  a: 'A toilet auger is shaped and coated specifically to avoid scratching porcelain — a standard drain snake can damage a toilet bowl.'
},
{
  q: 'How do I know if it\'s just the toilet or the main sewer line?',
  a: 'If only the toilet is affected, it\'s isolated. If other fixtures act up at the same time, it\'s the shared main line. See 9 Signs Your Main Sewer Line Is Clogged.'
},
{
  q: 'Something got flushed by accident — what do I do?',
  a: 'Stop flushing immediately and call — repeated flushing pushes it further into the trapway and can turn a simple retrieval into a bigger job.'
},
{
  q: 'Can you come the same day for a clogged toilet?',
  a: 'In most cases within Winnipeg, yes.'
},
{
  q: 'Do you serve towns outside Winnipeg for this?',
  a: 'Yes — the full 100km radius, including Selkirk, St. Norbert, Steinbach and Stonewall.'
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
    headline: "Clogged Toilet in Winnipeg? Here\'s the Right Way to Clear It",
    description:
    "Toilet won't flush or keeps backing up? The correct plunging technique, when to use an auger, and when it's actually a main line problem. Call +1 (204) 399-4413, 24/7.",
    url: 'https://prodraincleaning.ca/blog/clogged-toilet-winnipeg-what-to-do',
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
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_1d396489d-1772665881935.png",
      description: 'Clearing a clogged toilet in a Winnipeg bathroom'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://prodraincleaning.ca/blog/clogged-toilet-winnipeg-what-to-do'
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
      name: 'Clogged Toilet in Winnipeg? Here\'s the Right Way to Clear It',
      item: 'https://prodraincleaning.ca/blog/clogged-toilet-winnipeg-what-to-do'
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

export default function CloggedToiletPost() {
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
                Clogged Toilet in Winnipeg? Here&apos;s the Right Way to Clear It
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
                
                Drain Cleaning
              </span>
              <span
                className="text-xs font-700 px-2.5 py-1 rounded-full"
                style={{ backgroundColor: 'var(--brand-700)', color: 'white', fontWeight: 700 }}>
                
                Complete Guide
              </span>
              <span className="text-sm" style={{ color: 'var(--muted)' }}>10 min read</span>
            </div>

            <h1 className="mb-4">
              Clogged Toilet in Winnipeg? Here&apos;s the Right Way to Clear It
            </h1>

            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
              By <strong>Pro Drain Cleaning Limited</strong> · Published August 30, 2026 · Updated August 30, 2026
            </p>

            {/* Hero image */}
            <div
              className="w-full rounded-xl overflow-hidden mb-8"
              style={{ aspectRatio: '16/7', backgroundColor: 'var(--brand-100)', border: '1px solid var(--line)' }}>
              <img
                src="/assets/images/clogged-toilet-winnipeg-hero.png"
                alt="Clearing a clogged toilet in a Winnipeg bathroom"
                width={1600}
                height={900}
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async" />
            </div>

            {/* Answer-first callout */}
            <div
              className="rounded-xl p-6 mb-6"
              style={{ backgroundColor: 'var(--brand-100)', border: '2px solid var(--brand-500)' }}>
              
              <p className="text-base leading-relaxed" style={{ color: 'var(--navy-900)' }}>
                A clogged toilet is almost always caused by too much paper, a &ldquo;flushable&rdquo; wipe (they aren&apos;t), or an object that shouldn&apos;t have gone in — and the right first step is a flange plunger, not a chemical drain cleaner. If more than one fixture in the house is affected, stop flushing and call immediately; that&apos;s a main line problem, not a single clogged toilet. Pro Drain Cleaning Limited clears clogged toilets across Winnipeg, Selkirk, St. Norbert and every community within 100km, 24/7.{' '}
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

                {/* Do This Not That */}
                <div
                  id="do-this-not-that"
                  className="rounded-xl p-6 mb-10"
                  style={{ backgroundColor: '#fff7ed', border: '2px solid var(--accent-600)' }}>
                  
                  <h2 className="text-xl mb-4" style={{ color: 'var(--accent-600)', fontWeight: 700 }}>
                    Clogged Toilet — Do This, Not That
                  </h2>
                  <ul className="flex flex-col gap-3 text-sm" style={{ color: 'var(--navy-900)' }}>
                    {[
                    { type: 'do', text: 'Use a flange plunger (the kind with an extra rubber flap inside the cup) — a flat cup plunger doesn\'t seal a toilet bowl properly.' },
                    { type: 'do', text: 'Stop flushing after the first attempt if it doesn\'t clear — repeated flushing risks an overflow and pushes the blockage further into the trapway.' },
                    { type: 'dont', text: "Don't use a chemical drain cleaner in a toilet — they rarely clear a real blockage and can damage the porcelain and seals." },
                    { type: 'dont', text: "Don't keep plunging indefinitely — if 5 to 10 firm plunges don't clear it, move to a toilet auger or call us." },
                    { type: 'do', text: 'Check whether any other fixture in the house is also acting up before assuming it\'s just the toilet.' }].
                    map((item, i) =>
                    <li key={i} className="flex items-start gap-3">
                        <span
                        className="flex-shrink-0 text-xs font-700 px-2 py-0.5 rounded mt-0.5"
                        style={{
                          backgroundColor: item.type === 'do' ? '#dcfce7' : '#fee2e2',
                          color: item.type === 'do' ? '#16a34a' : '#dc2626',
                          fontWeight: 700
                        }}>
                        
                          {item.type === 'do' ? 'DO' : "DON'T"}
                        </span>
                        <span>{item.text}</span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* What causes it */}
                <div id="what-causes-it" className="mb-10">
                  <h2 className="text-2xl mb-5" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    What&apos;s Actually Causing It
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
                    The overwhelming majority of clogged toilets come down to three things: too much toilet paper at once, a wipe (baby wipes, &ldquo;flushable&rdquo; wipes, cleaning wipes — none of them break down like toilet paper does), or an object that fell in or was flushed by accident. Less often, it&apos;s a partial blockage further down the branch line, which is why a clog that keeps coming back in the same toilet is worth a proper look rather than repeated plunging.
                  </p>
                </div>

                {/* How to plunge */}
                <div id="how-to-plunge" className="mb-10">
                  <h2 className="text-2xl mb-5" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    The Correct Way to Plunge a Toilet
                  </h2>
                  <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--ink)' }}>
                    Use a flange plunger, not a standard sink plunger — the extra flap creates the seal you actually need against a toilet&apos;s curved outlet. Push the plunger in slowly to force air out first, then plunge firmly several times with steady, full strokes rather than fast shallow ones. Give it a few seconds between sets. If there&apos;s no movement after 5 to 10 firm plunges, stop — repeated plunging without progress usually means the blockage needs an auger, not more force.
                  </p>
                  {/* In-article image */}
                  <div
                    className="w-full rounded-xl overflow-hidden mb-2"
                    style={{ aspectRatio: '3/2', backgroundColor: 'var(--brand-100)', border: '1px solid var(--line)' }}
                  >
                    <img
                      src="/assets/images/clogged-toilet-plunger-technique.png"
                      alt="Correct flange plunger technique for a clogged toilet"
                      width={1200}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs mb-4 text-center" style={{ color: 'var(--muted)' }}>
                    Correct flange plunger technique for a clogged toilet
                  </p>
                </div>

                {/* Toilet auger */}
                <div id="toilet-auger" className="mb-10">
                  <h2 className="text-2xl mb-5" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    When to Use a Toilet Auger
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
                    A toilet auger is a flexible cable tool designed specifically for toilets (different from a standard drain snake, which can scratch porcelain). It&apos;s the right next step when plunging doesn&apos;t clear it and you suspect the blockage is just past the trap. If you don&apos;t have one or aren&apos;t comfortable using one, this is exactly the point to call rather than keep improvising.
                  </p>
                </div>

                {/* What never helps */}
                <div id="what-never-helps" className="mb-10">
                  <h2 className="text-2xl mb-5" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    What Never Helps — and Can Make It Worse
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Chemical drain cleaners are not designed for toilets and can damage the bowl&apos;s glaze and internal seals without actually clearing a real blockage. Full detail on why this applies across every fixture, not just toilets:{' '}
                    <Link href="/blog/chemical-drain-cleaners-damage-pipes" style={{ color: 'var(--brand-700)' }}>
                      Do Chemical Drain Cleaners Damage Your Pipes?
                    </Link>
                  </p>
                </div>

                {/* Main line problem */}
                <div id="main-line" className="mb-10">
                  <h2 className="text-2xl mb-5" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    When a &ldquo;Clogged Toilet&rdquo; Is Actually a Main Line Problem
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--ink)' }}>
                    Watch for these signs that it&apos;s bigger than the one toilet:
                  </p>
                  <ul className="flex flex-col gap-3 mb-5">
                    {[
                    'Other fixtures — a sink, a tub, a floor drain — are also slow or backing up',
                    'Water rises in the bathtub or shower drain when you flush',
                    "It's the lowest toilet in the house and this keeps happening",
                    "There's a sewage smell, not just a blocked bowl"].
                    map((item, i) =>
                    <li key={i} className="flex items-start gap-3 text-base" style={{ color: 'var(--ink)' }}>
                        <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: 'var(--accent-600)' }}
                        aria-hidden="true">
                        
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M5 2v6M2 5h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    )}
                  </ul>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Any of these points to your main sewer line, not the toilet itself. Full detail:{' '}
                    <Link href="/blog/signs-main-sewer-line-clogged" style={{ color: 'var(--brand-700)' }}>
                      9 Signs Your Main Sewer Line Is Clogged
                    </Link>{' '}
                    and{' '}
                    <Link href="/blog/clogged-drain-winnipeg-what-to-do" style={{ color: 'var(--brand-700)' }}>
                      Clogged Drain? Here&apos;s What to Do
                    </Link>
                  </p>
                </div>

                {/* Weak flush */}
                <div id="weak-flush" className="mb-10">
                  <h2 className="text-2xl mb-5" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    If the Toilet Flushes Weakly Instead of Clogging Completely
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
                    That&apos;s a different problem — often a partial vent blockage, a low water level in the tank, or mineral buildup in the rim jets, not a hard clog. Full detail:{' '}
                    <Link href="/blog/toilet-wont-flush-troubleshooting" style={{ color: 'var(--brand-700)' }}>
                      Toilet Won&apos;t Flush? Troubleshooting Guide
                    </Link>
                  </p>
                </div>

                {/* Service areas */}
                <div id="service-areas" className="mb-10">
                  <h2 className="text-2xl mb-5" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    Every Town We Clear Clogged Toilets In
                  </h2>
                  <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--ink)' }}>
                    Same live-answered line, same equipment, same upfront pricing everywhere within roughly 100km of Winnipeg:
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
                    Why Winnipeg Calls Pro Drain Cleaning Limited for a Clogged Toilet
                  </h2>
                  <ul className="flex flex-col gap-3">
                    {[
                    'Correctly diagnosed before we quote — we tell you if it\'s a simple clog or a main line issue',
                    'Answered live, 24/7, every day of the year',
                    'The right tools for a toilet specifically, not a generic drain cable',
                    'Upfront flat pricing, approved before work starts',
                    'Locally owned and operated in Winnipeg'].
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
                    <ContactForm prefilledService="Toilet Unclogging" />
                  </div>
                </div>

                {/* Related Reading */}
                <div className="mb-10">
                  <h2 className="text-xl mb-4" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                    Related Reading
                  </h2>
                  <ul className="flex flex-col gap-2">
                    {[
                    { href: '/blog/clogged-drain-winnipeg-what-to-do', label: "Clogged Drain? Here's What to Do" },
                    { href: '/blog/toilet-wont-flush-troubleshooting', label: "Toilet Won't Flush? Troubleshooting Guide" },
                    { href: '/blog/what-not-to-flush', label: 'What Not to Flush' },
                    { href: '/blog/signs-main-sewer-line-clogged', label: '9 Signs Your Main Sewer Line Is Clogged' },
                    { href: '/blog/chemical-drain-cleaners-damage-pipes', label: 'Do Chemical Drain Cleaners Damage Your Pipes?' }].
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
                    Toilet still clogged? Pro Drain Cleaning Limited answers 24 hours a day, 7 days a week, across Winnipeg, Selkirk, St. Norbert and every community within 100 km.
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