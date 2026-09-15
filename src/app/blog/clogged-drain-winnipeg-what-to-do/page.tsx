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
{ id: 'whats-in-the-pipe', label: "What\'s Actually in the Pipe" },
{ id: 'safe-to-try', label: "What\'s Safe to Try Yourself" },
{ id: 'never-helps', label: "What Never Helps — and Can Make It Worse" },
{ id: 'something-bigger', label: 'When a "Clogged Drain" Is Actually Something Bigger' },
{ id: 'call-specialist', label: 'When to Stop Trying and Call a Specialist' },
{ id: 'service-areas', label: 'Every Town We Clear Clogged Drains In' },
{ id: 'why-choose', label: 'Why Winnipeg Calls Pro Drain Cleaning Limited' },
{ id: 'faq', label: 'Frequently Asked Questions' },
{ id: 'contact', label: 'Talk to Us Right Now' }];


const fixtureRows = [
{
  fixture: 'Kitchen sink',
  cause: 'Grease, food waste, coffee grounds',
  safe: 'Hot water flush, avoid chemical cleaner'
},
{
  fixture: 'Bathroom sink',
  cause: 'Hair, soap scum, toothpaste',
  safe: 'Clean the pop-up stopper and trap'
},
{
  fixture: 'Bathtub',
  cause: 'Hair and soap around the drum trap',
  safe: 'Hair-removal tool, tape the overflow before plunging'
},
{
  fixture: 'Shower',
  cause: 'Hair, soap, hard-water scale',
  safe: 'Remove and clean the strainer'
},
{
  fixture: 'Toilet',
  cause: 'Paper, wipes, occasionally a foreign object',
  safe: 'Flange plunger only — never a chemical cleaner'
},
{
  fixture: 'Floor drain',
  cause: 'Silt, lint, rust scale, sometimes roots',
  safe: 'Pour water to check the trap seal; call if it\'s backing up'
},
{
  fixture: 'Laundry standpipe',
  cause: 'Lint and detergent scale',
  safe: 'Run a full cycle to test after clearing'
},
{
  fixture: 'Multiple fixtures at once',
  cause: 'Main sewer line blockage',
  safe: 'Stop all water use immediately, call us'
}];


const towns = [
{ name: 'Winnipeg', slug: '/areas/drain-cleaning-winnipeg', note: 'every neighbourhood' },
{ name: 'Selkirk', slug: '/areas/drain-cleaning-selkirk', note: null },
{ name: 'St. Norbert', slug: '/areas/drain-cleaning-st-norbert', note: null },
{ name: 'Headingley', slug: '/areas/drain-cleaning-headingley', note: null },
{ name: 'Oak Bluff', slug: '/areas/drain-cleaning-oak-bluff', note: null },
{ name: 'Lorette', slug: '/areas/drain-cleaning-lorette', note: null },
{ name: 'Niverville', slug: '/areas/drain-cleaning-niverville', note: null },
{ name: 'Steinbach', slug: '/areas/drain-cleaning-steinbach', note: null },
{ name: 'Stonewall', slug: '/areas/drain-cleaning-stonewall', note: null },
{ name: 'East St. Paul & West St. Paul', slug: '/areas/drain-cleaning-east-west-st-paul', note: null }];


const faqs = [
{
  q: 'Why does my drain keep clogging even after I clean it?',
  a: 'If a cable was used, it likely bored a channel through a coating rather than removing it — the coating is still there and closes back up. Jetting removes it properly.',
  link: { href: '/blog/hydro-jetting-vs-snaking', label: 'Hydro Jetting vs Drain Snaking' }
},
{
  q: 'Is it safe to use a plunger on every clogged drain?',
  a: 'No — never plunge a toilet if other fixtures are also affected, since that\'s a main line symptom and plunging pushes more water into a line that can\'t take it.',
  link: null
},
{
  q: 'How do I know if it\'s just my sink or my whole sewer line?',
  a: 'If only one fixture is slow, it\'s the fixture\'s own line. If several act up together, it\'s the shared main line.',
  link: { href: '/blog/signs-main-sewer-line-clogged', label: '9 Signs Your Main Sewer Line Is Clogged' }
},
{
  q: 'Are chemical drain cleaners ever okay?',
  a: "We\'d rather you didn\'t — they rarely work on a real blockage and can damage older pipe.",
  link: null
},
{
  q: "What if something got flushed and now the toilet won't stop backing up?",
  a: 'Stop flushing immediately, shut the supply valve, and call — repeated flushing pushes the object further into the trapway.',
  link: null
},
{
  q: 'How much does clearing a clogged drain cost?',
  a: 'It depends on the fixture and the cause.',
  link: { href: '/blog/drain-cleaning-winnipeg-cost-guide', label: 'How Much Does Drain Cleaning Cost in Winnipeg?' }
},
{
  q: 'Can you come the same day?',
  a: 'In most cases within Winnipeg, yes — and we prioritize active backups.',
  link: null
}];


const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'BlogPosting',
    headline: 'Clogged Drain? Here\'s Exactly What\'s Causing It and What to Do Next',
    description:
    'Every common cause of a clogged drain, what\'s safe to try yourself, and when to call a specialist. Serving Winnipeg and everywhere within 100km, 24/7. Call +1 (204) 399-4413.',
    url: 'https://prodraincleaning.ca/blog/clogged-drain-winnipeg-what-to-do',
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
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_1c8359159-1767581328090.png",
      description: 'Homeowner dealing with a clogged drain in a Winnipeg kitchen sink'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://prodraincleaning.ca/blog/clogged-drain-winnipeg-what-to-do'
    }
  },
  {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.link ? `${f.a} Full detail: ${f.link.label}` : f.a
      }
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
      name: 'Clogged Drain in Winnipeg? Here\'s Exactly What to Do',
      item: 'https://prodraincleaning.ca/blog/clogged-drain-winnipeg-what-to-do'
    }]

  }]

};

function FAQItem({ faq, index }: {faq: typeof faqs[0];index: number;}) {
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
        
          <p className="pt-4">
            {faq.a}
            {faq.link &&
          <>
                {' '}Full detail:{' '}
                <Link
              href={faq.link.href}
              className="font-700 hover:underline"
              style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
              
                  {faq.link.label}
                </Link>
              </>
          }
          </p>
        </div>
      }
    </div>);

}

export default function CloggedDrainWhatToDoPost() {
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
                Clogged Drain in Winnipeg? Here's Exactly What to Do
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
              <span className="text-sm" style={{ color: 'var(--muted)' }}>12 min read</span>
            </div>

            <h1 className="mb-4">
              Clogged Drain? Here's Exactly What's Causing It and What to Do Next
            </h1>

            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
              By <strong>Pro Drain Cleaning Limited</strong> · Published August 28, 2026 · Updated August 28, 2026
            </p>

            {/* Hero image */}
            <div className="rounded-xl overflow-hidden mb-8">
              <img
                src="/assets/images/basement-floor-drain-backup.png"
                alt="Homeowner dealing with a clogged drain in a Winnipeg kitchen sink"
                width={1600}
                height={900}
                loading="eager"
                decoding="async"
                className="w-full object-cover"
                style={{ maxHeight: '500px', objectPosition: 'center' }} />
              
            </div>

            {/* Answer-first callout box */}
            <div
              className="rounded-xl p-6 mb-8"
              style={{
                backgroundColor: 'var(--brand-100)',
                border: '1px solid var(--brand-700)',
                borderLeft: '4px solid var(--brand-700)'
              }}>
              
              <p
                className="text-xs font-700 uppercase tracking-wider mb-3"
                style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                
                The Short Answer
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--ink)' }}>
                A clogged drain almost always comes down to one of a handful of causes — grease, hair and soap, paper
                and wipes, or roots and scale further down the line — and which one it is determines whether a plunger
                fixes it in two minutes or you need a specialist. If more than one fixture is affected at once, stop
                using water in the building and call or WhatsApp{' '}
                <PhoneLink className="font-700 hover:underline" style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                  {PHONE_DISPLAY}
                </PhoneLink>
                ; that's a main line problem, not a single clogged drain. Pro Drain Cleaning Limited clears any clogged
                drain across Winnipeg, Selkirk, St. Norbert and every community within 100km, 24/7.
              </p>
            </div>

            {/* By Fixture quick-reference table */}
            <div
              className="rounded-xl p-6"
              style={{
                backgroundColor: '#fff8f5',
                border: '2px solid var(--accent-600)'
              }}>
              
              <p
                className="text-sm font-700 uppercase tracking-wider mb-4"
                style={{ color: 'var(--accent-600)', fontWeight: 700 }}>
                
                Clogged Drain, By Fixture — Quick Reference
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--accent-600)' }}>
                      <th
                        className="text-left py-2 pr-4 font-700"
                        style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                        
                        Fixture
                      </th>
                      <th
                        className="text-left py-2 pr-4 font-700"
                        style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                        
                        Usual cause
                      </th>
                      <th
                        className="text-left py-2 font-700"
                        style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                        
                        Safe to try yourself?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {fixtureRows.map((row, i) =>
                    <tr
                      key={i}
                      style={{
                        borderBottom: '1px solid var(--line)',
                        backgroundColor: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.5)'
                      }}>
                      
                        <td className="py-2.5 pr-4 font-600 align-top" style={{ color: 'var(--navy-900)', fontWeight: 600 }}>
                          {row.fixture}
                        </td>
                        <td className="py-2.5 pr-4 align-top" style={{ color: 'var(--ink)' }}>
                          {row.cause}
                        </td>
                        <td className="py-2.5 align-top" style={{ color: 'var(--ink)' }}>
                          {row.safe}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Main content with sidebar TOC */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Article body */}
              <article className="lg:col-span-3">

                {/* Section: What's in the pipe */}
                <div id="whats-in-the-pipe" className="scroll-mt-24">
                  <h2 className="mt-0 mb-4">What's Actually in the Pipe</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Kitchen lines clog from cooling grease that hardens onto the pipe wall and traps food waste behind
                    it — this is the most common household clog by far. Bathroom lines clog from hair binding with soap
                    scum into a dense plug, usually right in the trap. Toilets clog from excess paper, wipes (including
                    ones labelled "flushable" — they aren't), or an object that shouldn't have gone in. Floor drains and
                    main lines clog from silt, laundry lint, and — especially in older Winnipeg homes with clay pipe —
                    tree root intrusion at the joints.
                  </p>
                </div>

                {/* Section: Safe to try */}
                <div id="safe-to-try" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">What's Safe to Try Yourself</h2>
                  <ul className="flex flex-col gap-3 mb-6">
                    {[
                    'Hot water, not boiling, flushed down a kitchen line regularly moves soft grease before it hardens.',
                    'A hair-removal tool or a straightened wire hook clears the vast majority of bathroom sink and tub clogs — most of the blockage sits in the first few inches.',
                    'A flange plunger (not a flat cup plunger) is the right tool for a toilet — tape over the overflow on a tub before plunging it, or you\'ll just push air instead of building pressure.',
                    'A plastic drain snake for a shower or tub drain, used gently, handles hair-based clogs without risking the pipe.'].
                    map((item, i) =>
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                        <span style={{ color: 'var(--brand-700)', flexShrink: 0, marginTop: '2px' }}>•</span>
                        <span>{item}</span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Section: Never helps */}
                <div id="never-helps" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">What Never Helps — and Can Make It Worse</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Chemical drain cleaners rarely clear a genuine blockage, can damage older Winnipeg pipe and seals,
                    and if the drain still doesn't clear, that chemical is sitting in the trap waiting for whoever opens
                    it next — including us. Full detail:{' '}
                    <Link
                      href="/blog/chemical-drain-cleaners-damage-pipes"
                      className="font-700 hover:underline"
                      style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                      
                      Do Chemical Drain Cleaners Damage Your Pipes?
                    </Link>
                  </p>
                </div>

                {/* Section: Something bigger */}
                <div id="something-bigger" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">When a "Clogged Drain" Is Actually Something Bigger</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Watch for these signs that the problem isn't the one fixture in front of you:
                  </p>
                  <ul className="flex flex-col gap-3 mb-6">
                    {[
                    'More than one drain is affected at the same time',
                    'A different fixture gurgles when you flush or run water somewhere else',
                    'The same drain clogs again every few weeks, no matter how you clean it',
                    'There\'s a sewage smell, not just a slow drain'].
                    map((item, i) =>
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                        <span style={{ color: 'var(--brand-700)', flexShrink: 0, marginTop: '2px' }}>•</span>
                        <span>{item}</span>
                      </li>
                    )}
                  </ul>
                  <p className="leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Any of these points to your main sewer line rather than a single clogged fixture. Full detail:{' '}
                    <Link
                      href="/blog/signs-main-sewer-line-clogged"
                      className="font-700 hover:underline"
                      style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                      
                      9 Signs Your Main Sewer Line Is Clogged
                    </Link>
                  </p>
                </div>

                {/* Section: Call a specialist */}
                <div id="call-specialist" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">When to Stop Trying and Call a Specialist</h2>
                  <ul className="flex flex-col gap-3 mb-6">
                    {[
                    'You\'ve tried the safe DIY steps above and it\'s still blocked',
                    'More than one fixture is affected',
                    'It\'s clogged again within weeks of the last time',
                    'There\'s standing water, a smell, or anything that looks like sewage',
                    'You\'ve already used a chemical drain cleaner — tell us when you call, it matters for safety'].
                    map((item, i) =>
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                        <span className="flex-shrink-0 mt-0.5" style={{ color: 'var(--brand-700)' }} aria-hidden="true">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                            d="M3 8l3.5 3.5L13 4.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round" />
                          
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Section: Service areas */}
                <div id="service-areas" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Every Town We Clear Clogged Drains In</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Same live-answered line, same equipment, same upfront pricing everywhere within roughly 100km of
                    Winnipeg:
                  </p>
                  <ul className="flex flex-col gap-2 mb-6">
                    {towns.map((town, i) =>
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                        <span style={{ color: 'var(--brand-700)', flexShrink: 0, marginTop: '2px' }}>•</span>
                        <span>
                          <Link
                          href={town.slug}
                          className="font-700 hover:underline"
                          style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                          
                            {town.name}
                          </Link>
                          {town.note ? ` — ${town.note}` : ''}
                        </span>
                      </li>
                    )}
                    <li className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                      <span style={{ color: 'var(--brand-700)', flexShrink: 0, marginTop: '2px' }}>•</span>
                      <span>
                        Ile des Chenes, St. Adolphe, Oakbank, Dugald, Beausejour, Teulon, Gimli, Portage la Prairie,
                        Morris and Carman — and every community within 100km of Winnipeg.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Section: Why choose */}
                <div id="why-choose" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Why Winnipeg Calls Pro Drain Cleaning Limited for a Clogged Drain</h2>
                  <ul className="flex flex-col gap-3 mb-6">
                    {[
                    'Correctly diagnosed before we quote — we tell you if it\'s a simple clog or something bigger',
                    'Answered live, 24/7, every day of the year',
                    'The right equipment for the pipe, every time — not one machine forced down everything',
                    'Upfront flat pricing, approved before work starts',
                    'Locally owned and operated in Winnipeg'].
                    map((item, i) =>
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                        <span className="flex-shrink-0 mt-0.5" style={{ color: 'var(--brand-700)' }} aria-hidden="true">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                            d="M3 8l3.5 3.5L13 4.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round" />
                          
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

                {/* Contact section */}
                <div id="contact" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Talk to Us Right Now</h2>
                  <div className="flex flex-col gap-2 mb-6">
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ink)' }}>
                      Call or WhatsApp:{' '}
                      <PhoneLink className="font-700 hover:underline" style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                        {PHONE_DISPLAY}
                      </PhoneLink>{' '}
                      — answered 24 hours a day, every day of the year
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ink)' }}>
                      Email:{' '}
                      <Link href={`mailto:${EMAIL}`} className="font-700 hover:underline" style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                        {EMAIL}
                      </Link>
                    </p>
                  </div>

                  <div
                    className="rounded-xl p-6"
                    style={{ backgroundColor: 'var(--brand-100)', border: '1px solid var(--brand-700)' }}>
                    
                    <h3 className="text-lg font-700 mb-4" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                      Send Us a Message
                    </h3>
                    <ContactForm prefilledService="Clogged Drain Clearing" />
                  </div>
                </div>

                {/* Related Reading */}
                <div className="mt-12 pt-8 border-t" style={{ borderColor: 'var(--line)' }}>
                  <h2 className="text-xl font-700 mb-4" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                    Related Reading
                  </h2>
                  <ul className="flex flex-col gap-3">
                    {[
                    { href: '/drain-cleaning-winnipeg', label: 'Drain Cleaning Winnipeg', note: 'our full drain cleaning service page' },
                    { href: '/blog/chemical-drain-cleaners-damage-pipes', label: 'Do Chemical Drain Cleaners Damage Your Pipes?', note: null },
                    { href: '/blog/signs-main-sewer-line-clogged', label: '9 Signs Your Main Sewer Line Is Clogged', note: null },
                    { href: '/blog/hydro-jetting-vs-snaking', label: 'Hydro Jetting vs Drain Snaking: Which Does Your Pipe Actually Need?', note: null },
                    { href: '/compare/pro-drain-cleaning-vs-diy', label: 'Pro Drain Cleaning vs. DIY', note: null }].
                    map((link, i) =>
                    <li key={i} className="flex items-start gap-2 text-sm">
                        <span style={{ color: 'var(--brand-700)', flexShrink: 0, marginTop: '2px' }}>→</span>
                        <Link
                        href={link.href}
                        className="hover:underline font-600"
                        style={{ color: 'var(--brand-700)', fontWeight: 600 }}>
                        
                          {link.label}
                        </Link>
                        {link.note && <span style={{ color: 'var(--muted)' }}> — {link.note}</span>}
                      </li>
                    )}
                  </ul>
                </div>

                {/* End CTA */}
                <div
                  className="mt-12 rounded-xl p-8 text-center"
                  style={{ backgroundColor: 'var(--brand-700)', color: 'white' }}>
                  
                  <h2 className="text-2xl font-700 mb-3" style={{ fontWeight: 700, color: 'white' }}>
                    Blocked drain right now?
                  </h2>
                  <p className="mb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    Pro Drain Cleaning Limited answers 24 hours a day, 7 days a week, across Winnipeg, Selkirk,
                    St. Norbert and every community within 100 km. Call or WhatsApp{' '}
                    <strong>{PHONE_DISPLAY}</strong>, or email{' '}
                    <strong>{EMAIL}</strong>. Upfront pricing before we start — always.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <PhoneLink
                      className="btn-primary"
                      style={{ backgroundColor: 'var(--accent-600)', color: 'white' }}>
                      Call {PHONE_DISPLAY}
                    </PhoneLink>
                    <Link
                      href={PHONE_WA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ borderColor: 'white', color: 'white' }}>
                      
                      WhatsApp Us
                    </Link>
                    <Link
                      href={`mailto:${EMAIL}`}
                      className="btn-secondary"
                      style={{ borderColor: 'white', color: 'white' }}>
                      
                      Email Us
                    </Link>
                  </div>
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
                      
                      On This Page
                    </p>
                    <nav aria-label="Table of contents">
                      <ol className="flex flex-col gap-2">
                        {tocItems.map((item) =>
                        <li key={item.id}>
                            <a
                            href={`#${item.id}`}
                            className="text-sm hover:underline block leading-snug"
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

                    <div className="mt-6 pt-5 border-t" style={{ borderColor: 'var(--brand-700)' }}>
                      <p className="text-xs font-700 mb-3" style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                        Need help now?
                      </p>
                      <PhoneLink
                        className="block text-center btn-primary text-sm w-full"
                        style={{ backgroundColor: 'var(--accent-600)', color: 'white' }}>
                        Call {PHONE_DISPLAY}
                      </PhoneLink>
                      <Link
                        href={PHONE_WA}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center mt-2 text-sm py-2 px-4 rounded-lg border font-600 hover:opacity-80 transition-opacity"
                        style={{ borderColor: 'var(--brand-700)', color: 'var(--brand-700)', fontWeight: 600 }}>
                        
                        WhatsApp Us
                      </Link>
                    </div>
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