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
{ id: 'what-sewer-line-cleaning-includes', label: 'What Sewer Line Cleaning Actually Includes' },
{ id: 'signs-main-sewer-needs-cleaning', label: 'Signs Your Main Sewer Line Needs Cleaning' },
{ id: 'why-common-winnipeg', label: 'Why This Is Such a Common Call in Winnipeg' },
{ id: 'what-determines-cost', label: 'What Determines Cost for Sewer Line Cleaning' },
{ id: 'cleaning-not-repair', label: 'Cleaning Now Does Not Always Mean Repair Later' },
{ id: 'service-areas', label: 'Every Town We Clean Sewer Lines In' },
{ id: 'why-choose', label: 'Why Winnipeg Trusts Pro Drain Cleaning Limited' },
{ id: 'faq', label: 'Frequently Asked Questions' },
{ id: 'contact', label: 'Talk to Us Right Now' }];


const towns = [
{ name: 'Winnipeg', slug: '/areas/drain-cleaning-winnipeg', note: 'especially older neighbourhoods on clay-tile lines' },
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
  q: 'Is sewer line cleaning the same as a repair?',
  a: 'No — cleaning clears roots, grease and scale from an otherwise structurally sound pipe. Repair addresses a physical defect like a crack, belly or collapse.',
  link: null
},
{
  q: 'How do I know if my sewer line needs cleaning?',
  a: 'Multiple fixtures backing up together, recurring backups, or gurgling in other fixtures when you run water are the main signs.',
  link: { href: '/blog/signs-main-sewer-line-clogged', label: '9 Signs Your Main Sewer Line Is Clogged' }
},
{
  q: 'How often does a sewer line need to be cleaned?',
  a: 'It depends on what the camera shows — commonly annually for a line with confirmed root activity, less often for a clean one.',
  link: null
},
{
  q: 'Will you show me proof the line is actually clear?',
  a: 'Yes — a camera pass and the footage, on request.',
  link: null
},
{
  q: 'Do you serve towns outside Winnipeg for sewer line work?',
  a: 'Yes — the full 100km radius, including Selkirk, St. Norbert, Steinbach and Stonewall.',
  link: null
},
{
  q: 'Should I get a camera inspection before agreeing to an excavation?',
  a: 'Always.',
  link: { href: '/compare/camera-inspection-vs-guessing', label: 'Sewer Camera Inspection vs. Guessing' }
},
{
  q: 'What if it is already backing up right now?',
  a: "That\'s an emergency — call immediately and stop using water in the building.",
  link: { href: '/blog/emergency-drain-cleaning-winnipeg-24-7-complete-guide', label: '24/7 Emergency Drain Cleaning in Winnipeg' }
}];


const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'BlogPosting',
    headline: 'Sewer Line Cleaning Near Me — What Actually Happens, and Every Town We Serve',
    description:
    'Searching for sewer line cleaning near you? See what\'s actually involved, what changes the cost, and every town within 100km we serve. Call +1 (204) 399-4413, 24/7.',
    url: 'https://prodraincleaning.ca/blog/sewer-line-cleaning-near-me-winnipeg',
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
      url: "https://img.rocket.new/generatedImages/rocket_gen_img_17b757e33-1771885503955.png",
      description: 'Sewer line cleaning equipment at a residential cleanout in Winnipeg'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://prodraincleaning.ca/blog/sewer-line-cleaning-near-me-winnipeg'
    }
  },
  {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a + (f.link ? ` See: ${f.link.label}.` : '') }
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
      name: 'Sewer Line Cleaning Near Me in Winnipeg',
      item: 'https://prodraincleaning.ca/blog/sewer-line-cleaning-near-me-winnipeg'
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
                {' '}
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

export default function SewerLineCleaningNearMePillarPost() {
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
                Sewer Line Cleaning Near Me in Winnipeg
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
                
                Sewer Lines
              </span>
              <span
                className="text-xs font-700 px-2.5 py-1 rounded-full"
                style={{ backgroundColor: 'var(--brand-700)', color: 'white', fontWeight: 700 }}>
                
                Complete Guide
              </span>
              <span className="text-sm" style={{ color: 'var(--muted)' }}>14 min read</span>
            </div>

            <h1 className="mb-4">
              Sewer Line Cleaning Near Me — What Actually Happens, and Every Town We Serve
            </h1>

            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
              By <strong>Pro Drain Cleaning Limited</strong> · Published August 28, 2026 · Updated August 28, 2026
            </p>

            {/* Hero image */}
            <div className="rounded-xl overflow-hidden mb-8">
              <img
                src="/assets/images/pro-drain-service-vehicle.png"
                alt="Sewer line cleaning equipment at a residential cleanout in Winnipeg"
                width={1600}
                height={900}
                loading="eager"
                decoding="async"
                className="w-full object-cover"
                style={{ maxHeight: '500px', objectPosition: 'center' }} />
              
            </div>

            {/* Answer-first callout box */}
            <div
              className="rounded-xl p-6 mb-6"
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
                Sewer line cleaning near you should mean a specialist who cuts and clears roots, hydro jets the pipe
                wall back to bare pipe, and camera-verifies the result — not just a cable pushed through until water
                starts moving again. Pro Drain Cleaning Limited handles main sewer line cleaning across Winnipeg,
                Selkirk, St. Norbert and every community within 100km, using full-size equipment on every truck. Call
                or WhatsApp{' '}
                <PhoneLink className="font-700 hover:underline" style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                  {PHONE_DISPLAY}
                </PhoneLink>
                , 24/7.
              </p>
            </div>

            {/* Cleaning vs. Repair callout box */}
            <div
              className="rounded-xl p-6"
              style={{
                backgroundColor: '#fff8f5',
                border: '2px solid var(--accent-600)'
              }}>
              
              <p
                className="text-sm font-700 uppercase tracking-wider mb-4"
                style={{ color: 'var(--accent-600)', fontWeight: 700 }}>
                
                Cleaning vs. Repair: How to Tell Which You Need
              </p>
              <ul className="flex flex-col gap-3">
                {[
                'Multiple fixtures backing up together, but no camera footage yet — this is a cleaning job first — get it cleared and camera-inspected before anyone talks about repair.',
                'Camera shows roots or a coating, pipe structure otherwise intact — cleaning and jetting, on a maintenance schedule going forward.',
                'Camera shows a belly, an offset joint, or a crack — that is a repair conversation, not a cleaning one.',
                'Someone quotes excavation without showing you camera footage first — get a second opinion before you agree to anything.'].
                map((item, i) =>
                <li key={i} className="flex items-start gap-3">
                    <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-700"
                    style={{ backgroundColor: 'var(--accent-600)', color: 'white', fontWeight: 700, marginTop: '2px' }}>
                    
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: 'var(--ink)' }}>
                      {item}
                    </span>
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

                {/* Section: What sewer line cleaning includes */}
                <div id="what-sewer-line-cleaning-includes" className="scroll-mt-24">
                  <h2 className="mt-0 mb-4">What Sewer Line Cleaning Actually Includes</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Real sewer line cleaning is three things done properly, not one: cutting — a full-size sectional
                    machine with a root-cutting head sized to your pipe, clearing the blockage back to full diameter;
                    jetting — up to 4,000 PSI scouring the entire pipe wall and flushing debris out of the system,
                    rather than leaving a coating that closes back up in weeks; and camera verification — HD footage
                    confirming the line is actually clear, not just quieter for now. Full detail on each:{' '}
                    <Link
                      href="/main-sewer-line-unclogging-winnipeg"
                      className="font-700 hover:underline"
                      style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                      
                      Main Sewer Line Unclogging Winnipeg
                    </Link>
                  </p>
                </div>

                {/* Section: Signs your main sewer line needs cleaning */}
                <div id="signs-main-sewer-needs-cleaning" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Signs Your Main Sewer Line Specifically Needs Cleaning</h2>
                  <ul className="flex flex-col gap-3 mb-6">
                    {[
                    'Multiple fixtures backing up at the same time, especially on the lowest floor',
                    'A different fixture gurgles when you flush or run water elsewhere',
                    'Water comes up a basement floor drain when you flush the toilet',
                    'The same backup happens every few months, roughly on schedule',
                    'An unusually green or soggy patch of lawn over where the line runs'].
                    map((item, i) =>
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                        <span style={{ color: 'var(--brand-700)', flexShrink: 0, marginTop: '2px' }}>•</span>
                        <span>{item}</span>
                      </li>
                    )}
                  </ul>
                  <div
                    className="rounded-xl p-5"
                    style={{ backgroundColor: 'var(--brand-100)', border: '1px solid var(--brand-700)' }}>
                    
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ink)' }}>
                      Full detail:{' '}
                      <Link
                        href="/blog/signs-main-sewer-line-clogged"
                        className="font-700 hover:underline"
                        style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                        
                        9 Signs Your Main Sewer Line Is Clogged
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Section: Why common in Winnipeg */}
                <div id="why-common-winnipeg" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Why This Is Such a Common Call in Winnipeg Specifically</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Large parts of Winnipeg still run on clay-tile or cast-iron sewer lines laid decades ago, under
                    streets lined with mature elms and maples. Roots enter at the mortar joints between pipe sections,
                    and Manitoba's freeze-thaw cycle shifts those joints further open over time. That combination —
                    old jointed pipe, big root systems, moving ground — is the single most common reason a Winnipeg
                    sewer line needs cleaning, and it's rarely a one-time event. Full detail:{' '}
                    <Link
                      href="/blog/tree-roots-sewer-line-winnipeg"
                      className="font-700 hover:underline"
                      style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                      
                      Tree Roots in Your Sewer Line: Why It's Winnipeg's #1 Drain Problem
                    </Link>
                  </p>
                </div>

                {/* Section: What determines cost */}
                <div id="what-determines-cost" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">What Determines Cost for Sewer Line Cleaning Near You</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    The real cost drivers are how the cleanout is accessed, how severe the blockage is, whether it's a
                    straightforward cable job or needs jetting and a camera pass, and — occasionally — how far the
                    crew has to travel for outlying towns. A legitimate company gives you a realistic phone estimate
                    and a firm price in writing on site before starting. Full detail:{' '}
                    <Link
                      href="/blog/drain-cleaning-winnipeg-cost-guide"
                      className="font-700 hover:underline"
                      style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                      
                      How Much Does Drain Cleaning Cost in Winnipeg?
                    </Link>
                  </p>
                </div>

                {/* Section: Cleaning now doesn't mean repair later */}
                <div id="cleaning-not-repair" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Cleaning Now Does Not Always Mean Repair Later</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    A cleared and camera-verified line with roots at the joints but no structural damage can often be
                    maintained on a simple annual or biannual cleaning schedule for years before repair is ever needed.
                    The camera is what tells you which situation you're actually in — never accept an excavation quote
                    without seeing that footage first. Full detail:{' '}
                    <Link
                      href="/compare/camera-inspection-vs-guessing"
                      className="font-700 hover:underline"
                      style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                      
                      Sewer Camera Inspection vs. Guessing
                    </Link>{' '}
                    and{' '}
                    <Link
                      href="/blog/sewer-line-repair-vs-replacement"
                      className="font-700 hover:underline"
                      style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                      
                      Sewer Line Repair vs Replacement
                    </Link>
                  </p>
                </div>

                {/* Section: Service areas */}
                <div id="service-areas" className="scroll-mt-24 mt-12">
                  <h2 className="mb-4">Every Town We Clean Sewer Lines In</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Same crew, same equipment, same upfront pricing across the whole service area:
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
                  <h2 className="mb-4">Why Winnipeg Trusts Pro Drain Cleaning Limited for Sewer Line Work</h2>
                  <ul className="flex flex-col gap-3 mb-6">
                    {[
                    'Full-size root-cutting machines, a hydro jetter and an HD camera on every truck, standard',
                    'Camera-verified results, with the footage sent to you',
                    'Upfront flat pricing, approved before work starts, even on a sewer line job',
                    'Locally owned, working these specific streets and towns',
                    'We tell you honestly when cleaning is enough and repair is not needed yet'].
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
                    <ContactForm prefilledService="Main Sewer Line Cleaning" />
                  </div>
                </div>

                {/* Related Reading */}
                <div className="mt-12 pt-8 border-t" style={{ borderColor: 'var(--line)' }}>
                  <h2 className="text-xl font-700 mb-4" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                    Related Reading
                  </h2>
                  <ul className="flex flex-col gap-3">
                    {[
                    { href: '/main-sewer-line-unclogging-winnipeg', label: 'Main Sewer Line Unclogging Winnipeg', note: 'our full sewer line service page' },
                    { href: '/blog/tree-roots-sewer-line-winnipeg', label: "Tree Roots in Your Sewer Line: Why It's Winnipeg's #1 Drain Problem", note: null },
                    { href: '/blog/sewer-line-repair-vs-replacement', label: 'Sewer Line Repair vs Replacement: How to Decide', note: null },
                    { href: '/compare/camera-inspection-vs-guessing', label: 'Sewer Camera Inspection vs. Guessing', note: null },
                    { href: '/blog/clay-pipe-sewer-lines-winnipeg', label: 'Clay Sewer Pipe in Older Winnipeg Homes', note: null }].
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
                    <PhoneLink className="font-700 hover:underline" style={{ color: 'white', fontWeight: 700 }}>
                      {PHONE_DISPLAY}
                    </PhoneLink>
                    , or email{' '}
                    <Link href={`mailto:${EMAIL}`} className="font-700 hover:underline" style={{ color: 'white', fontWeight: 700 }}>
                      {EMAIL}
                    </Link>
                    . Upfront pricing before we start — always.
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
                        href={PHONE_TEL}
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