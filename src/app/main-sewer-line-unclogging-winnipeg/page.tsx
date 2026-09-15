import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import TrustStrip from '@/components/TrustStrip';
import ServiceAreaStrip from '@/components/ServiceAreaStrip';
import FinalCTABand from '@/components/FinalCTABand';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';
import SewerLineAccordion from '@/components/SewerLineAccordion';
import PhoneLink from '@/components/PhoneLink';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Main Sewer Line Unclogging Winnipeg | Tree Root Removal & Jetting 24/7',
  description: 'Blocked main sewer line in Winnipeg? We cut tree roots, hydro jet, camera inspect and locate sewer lines 24/7 across Winnipeg, Selkirk & 100 km. Call +1 (204) 399-4413.',
  alternates: { canonical: `${baseUrl}/main-sewer-line-unclogging-winnipeg` },
  openGraph: {
    title: 'Main Sewer Line Unclogging Winnipeg | Tree Root Removal & Jetting 24/7',
    description: 'Blocked main sewer line in Winnipeg? We cut tree roots, hydro jet, camera inspect and locate sewer lines 24/7 across Winnipeg, Selkirk & 100 km. Call +1 (204) 399-4413.',
    url: `${baseUrl}/main-sewer-line-unclogging-winnipeg`,
    siteName: 'Pro Drain Cleaning Limited',
    images: [{ url: 'https://prodraincleaning.ca/images/og-default.jpg', width: 1200, height: 630 }],
    locale: 'en_CA',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Main Sewer Line Unclogging Winnipeg', item: `${baseUrl}/main-sewer-line-unclogging-winnipeg` },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Main Sewer Line Unclogging',
  provider: { '@id': `${baseUrl}/#business` },
  areaServed: [
    { '@type': 'City', name: 'Winnipeg' },
    { '@type': 'City', name: 'Selkirk' },
    { '@type': 'Place', name: 'St. Norbert' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Main Sewer Line Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tree Root Removal' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hydro Jetting for Sewer Lines' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sewer Camera Inspections' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sewer Line Locating' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sewer Backup Cleanup' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Sewer Services' } },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I know if it\'s my main line or just one drain?',
      acceptedAnswer: { '@type': 'Answer', text: 'The clearest sign is multiple fixtures backing up at the same time — especially on the lowest floor. If your toilet gurgles when you run the sink, or the bathtub fills when you flush, the blockage is in the main line. Stop all water use and call us.' },
    },
    {
      '@type': 'Question',
      name: 'What causes tree roots in Winnipeg sewer lines?',
      acceptedAnswer: { '@type': 'Answer', text: 'Roots find hairline cracks in older clay or cast-iron pipe, follow moisture and nutrients inside, and grow to fill the pipe. Winnipeg\'s mature elms and maples combined with aging clay sewer infrastructure make this the city\'s most common cause of main line blockages.' },
    },
    {
      '@type': 'Question',
      name: 'Is a sewer backup my responsibility or the City\'s?',
      acceptedAnswer: { '@type': 'Answer', text: 'In Winnipeg, homeowners own the sewer pipe from their building to the City main — including the section under City property — and are responsible for maintaining it. The City is generally not responsible for a backup unless it was negligent.' },
    },
    {
      '@type': 'Question',
      name: 'How much does main sewer line cleaning cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'It depends on the access, the blockage type, and whether camera inspection or hydro jetting is required. We give you a realistic range on the phone and a firm flat price in writing on site before we start.' },
    },
    {
      '@type': 'Question',
      name: 'How often should a rooted sewer line be cleaned?',
      acceptedAnswer: { '@type': 'Answer', text: 'For a home with confirmed root intrusion in clay or cast-iron pipe, typically every 1–2 years. A camera inspection after clearing will show you the regrowth rate and let us recommend the right frequency for your specific line.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need a sewer camera inspection before buying a house?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — especially for any Winnipeg home more than 30 years old. A camera inspection before you waive conditions shows you exactly what\'s in the line: roots, bellies, cracks, or a line that\'s genuinely fine. You get the footage to keep.' },
    },
    {
      '@type': 'Question',
      name: 'Can you come out tonight?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We run genuine 24/7 emergency sewer service. Call +1 (204) 399-4413 and a real technician answers — not an answering service.' },
    },
  ],
};

export default function SewerLineUncloggingPage() {
  return (
    <>
      {/* LCP hero image preload — browser fetches it immediately before render */}
      <link
        rel="preload"
        as="image"
        href="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=480&fm=webp&q=50"
        imageSrcSet="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=480&fm=webp&q=50 480w, https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=768&fm=webp&q=55 768w, https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1280&fm=webp&q=60 1280w"
        imageSizes="100vw"
        fetchPriority="high"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <AnnouncementBar />
      <Header />

      <main id="main-content" className="mobile-pb">
        {/* Breadcrumb */}
        <nav className="container-wide py-3 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2" style={{ color: 'var(--muted)' }}>
            <li><Link href="/" className="hover:underline" style={{ color: 'var(--orange-600)' }}>Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" style={{ color: 'var(--ink)' }}>Main Sewer Line Unclogging Winnipeg</li>
          </ol>
        </nav>

        {/* Hero */}
        <section
          className="relative w-full flex items-center overflow-hidden"
          style={{ minHeight: 'clamp(500px, 70vh, 760px)', background: 'linear-gradient(135deg, var(--brand-900) 0%, var(--brand-700) 100%)' }}
          aria-labelledby="sewer-hero-h1"
        >
          <picture className="absolute inset-0 z-0 opacity-20" aria-hidden="true">
            <source
              type="image/webp"
              srcSet="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=480&fm=webp&q=50 480w, https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=768&fm=webp&q=55 768w, https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1280&fm=webp&q=60 1280w"
              sizes="100vw"
            />
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1280&fm=webp&q=50"
              alt=""
              width={1280}
              height={720}
              loading="eager"
              fetchPriority="high"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            />
          </picture>
          <div className="absolute inset-0 z-0" style={{ background: 'rgba(11,79,108,0.84)' }} aria-hidden="true" />
          <div className="container-wide relative z-10 py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-700 uppercase tracking-widest mb-4" style={{ color: 'var(--orange-500)', fontWeight: 700, letterSpacing: '0.15em' }}>
                WINNIPEG · SELKIRK · ST. NORBERT · 100 KM AROUND — OPEN 24/7
              </p>
              <h1 id="sewer-hero-h1" className="text-white mb-5" style={{ fontWeight: 800 }}>
                Main Sewer Line Unclogging in Winnipeg — Roots Cut, Line Cleared, Cause Proven on Camera
              </h1>
              <p className="text-xl leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.88)' }}>
                When your toilet, tub and basement floor drain all back up at the same time, the problem isn&apos;t any of those fixtures — it&apos;s the main sewer line. We clear it with full-size machines, hydro jet the wall back to bare pipe, and camera the whole run so you can see exactly what condition your line is in.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <PhoneLink className="btn-primary shimmer-btn text-base">
                  Call Now — +1 (204) 399-4413
                </PhoneLink>
                <Link href="https://wa.me/12043994413?text=Hi%2C%20I%20think%20my%20main%20sewer%20line%20is%20blocked" target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base">
                  WhatsApp Us
                </Link>
                <Link href="#sewer-contact" className="btn-secondary-white text-base">
                  Get Estimate
                </Link>
              </div>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Open 24/7 · Winnipeg + 100 km
              </p>
            </div>
          </div>
        </section>

        <TrustStrip />

        {/* Intro block */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="mb-5" style={{ color: 'var(--navy-900)' }}>When Multiple Fixtures Back Up — It&apos;s the Main Line</h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
              In Winnipeg that line is very often clay or cast iron laid decades ago, running under a yard full of mature elms and maples, through soil that shifts every freeze-thaw cycle. Roots enter at the joints and grow into a solid mat. Grease and scale narrow what&apos;s left. Then one ordinary evening it stops completely and everything comes back up the lowest opening in your house.{' '}
              <Link href="/glossary#main-sewer-line" style={{ color: 'var(--brand-700)', fontSize: '0.85em' }}>See also: Main sewer line (Glossary)</Link>
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
              We clear main sewer lines with full-size machines and root-cutting heads, hydro jet the wall back to bare pipe, and camera the whole run so you can see exactly what condition your line is in — 24 hours a day, across Winnipeg, Selkirk, St. Norbert and 100 km around.
            </p>
          </div>
        </section>

        {/* Signs your main sewer line is blocked */}
        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="mb-6" style={{ color: 'var(--navy-900)' }}>Signs Your Main Sewer Line Is Blocked</h2>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                'Multiple fixtures backing up at once, especially on the lowest floor',
                'The toilet gurgles or the water level drops when you run the washing machine',
                'Water comes up the basement floor drain when you flush',
                'Sewage smell in the yard, or an unusually green, soggy patch of lawn',
                'Repeat backups every few months no matter what you do',
                'Water backs up worse during heavy rain or spring melt',
              ].map((symptom, i) => (
                <li key={i} className="flex items-start gap-3 text-base" style={{ color: 'var(--ink)' }}>
                  <span className="trust-item-check mt-0.5 flex-shrink-0" aria-hidden="true">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  {symptom}
                </li>
              ))}
            </ul>
            <div className="rounded-brand p-6 text-center" style={{ backgroundColor: 'var(--orange-100)', border: '1.5px solid var(--orange-600)' }}>
              <p className="font-700 text-lg mb-3" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                If you&apos;re seeing any of the above — stop running water immediately.
              </p>
              <p className="mb-4" style={{ color: 'var(--muted)' }}>
                Every flush and every tap adds more waste to a line that has nowhere to send it.
              </p>
              <PhoneLink className="btn-primary shimmer-btn">
                Call +1 (204) 399-4413 Now
              </PhoneLink>
            </div>
          </div>
        </section>

        {/* THE SERVICE ACCORDION */}
        <SewerLineAccordion />

        {/* Our Process */}
        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-center mb-10" style={{ color: 'var(--navy-900)' }}>How We Clear a Main Sewer Line</h2>
            <p className="text-center mb-10" style={{ color: 'var(--muted)' }}>Most main line jobs are done in a single visit. Here&apos;s exactly what happens.</p>
            <div className="flex flex-col gap-5">
              {[
                { num: '01', title: 'Diagnose over the phone', body: 'You describe which fixtures are affected and how fast it happened. We tell you whether it sounds like a main line issue and give you a price range before we arrive.' },
                { num: '02', title: 'Locate the cleanout and assess the line', body: 'On site, we find the cleanout access, run a quick assessment, and give you a flat price in writing before any work starts.' },
                { num: '03', title: 'Camera inspection (where useful)', body: 'For repeat blockages, root intrusion, or unknown causes, we push the camera first to see exactly what we\'re clearing — root mass, belly, offset joint, or simple buildup.' },
                { num: '04', title: 'Clear with the right machine', body: 'Sectional auger with root-cutting head for root intrusion. High-pressure hydro jet for grease, scale, or complete line restoration. We use the right tool, not the fastest one.' },
                { num: '05', title: 'Verify on camera', body: 'After clearing, we run the camera again so you can see the line is genuinely open at full diameter — not just a hole through the blockage.' },
                { num: '06', title: 'Footage and prevention plan', body: 'You receive the camera recording. We tell you honestly what the line looks like, how often to maintain it, and whether any repair is worth discussing.' },
              ].map((step, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="step-number flex-shrink-0 w-16 text-center">{step.num}</div>
                  <div className="card-base p-6 flex-1">
                    <h3 className="font-700 text-lg mb-2" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>{step.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <PhoneLink className="btn-primary shimmer-btn">
                Start Step 1 — Call +1 (204) 399-4413
              </PhoneLink>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding" style={{ backgroundColor: 'var(--navy-900)' }}>
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-center mb-10 text-white">Why Winnipeg Calls Pro Drain Cleaning</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: null, title: 'Drains and sewers are all we do', body: 'Not a sideline between furnace calls. Specialists solve in one visit what generalists solve in three.' },
                { icon: null, title: 'Answered 24/7 by a real person', body: 'Nights, weekends, Christmas, −35°C. No answering service, no callback queue.' },
                { icon: null, title: 'Upfront flat-rate pricing', body: 'You approve the number before we start. No hourly meter running while we diagnose.' },
                { icon: null, title: 'Camera-verified results', body: 'We show you the cleared line on screen and send you the video. Proof, not promises.' },
              ].map((tile, i) => (
                <div key={i} className="rounded-brand p-6" style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <span className="text-3xl block mb-3">{tile.icon}</span>
                  <h3 className="font-700 text-lg mb-2 text-white" style={{ fontWeight: 700 }}>{tile.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>{tile.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceAreaStrip />

        {/* FAQ */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-3xl mx-auto">
            <h2 className="text-center mb-10" style={{ color: 'var(--navy-900)' }}>Main Sewer Line Questions, Answered</h2>
            <div className="flex flex-col gap-3">
              {[
                {
                  q: 'How do I know if it\'s my main line or just one drain?',
                  a: 'The clearest sign is multiple fixtures backing up at the same time — especially on the lowest floor. If your toilet gurgles when you run the sink, or the bathtub fills when you flush, the blockage is in the main line. Stop all water use and call us.',
                },
                {
                  q: 'What causes tree roots in Winnipeg sewer lines?',
                  a: 'Roots find hairline cracks in older clay or cast-iron pipe, follow moisture and nutrients inside, and grow to fill the pipe. Winnipeg\'s mature elms and maples combined with aging clay sewer infrastructure make this the city\'s most common cause of main line blockages.',
                },
                {
                  q: 'Is a sewer backup my responsibility or the City\'s?',
                  a: 'In Winnipeg, homeowners own the sewer pipe from their building to the City main — including the section under City property — and are responsible for maintaining it. The City is generally not responsible for a backup unless it was negligent.',
                },
                {
                  q: 'How much does main sewer line cleaning cost?',
                  a: 'It depends on the access, the blockage type, and whether camera inspection or hydro jetting is required. We give you a realistic range on the phone and a firm flat price in writing on site before we start.',
                },
                {
                  q: 'How often should a rooted sewer line be cleaned?',
                  a: 'For a home with confirmed root intrusion in clay or cast-iron pipe, typically every 1–2 years. A camera inspection after clearing will show you the regrowth rate and let us recommend the right frequency for your specific line.',
                },
                {
                  q: 'Do I need a sewer camera inspection before buying a house?',
                  a: 'Yes — especially for any Winnipeg home more than 30 years old. A camera inspection before you waive conditions shows you exactly what\'s in the line: roots, bellies, cracks, or a line that\'s genuinely fine. You get the footage to keep.',
                },
                {
                  q: 'Can you come out tonight?',
                  a: 'Yes. We run genuine 24/7 emergency sewer service. Call +1 (204) 399-4413 and a real technician answers — not an answering service.',
                },
              ].map((item, i) => (
                <details key={i} className="accordion-item" style={{ listStyle: 'none' }}>
                  <summary className="accordion-trigger" style={{ cursor: 'pointer', listStyle: 'none' }}>
                    <span>{item.q}</span>
                    <svg className="accordion-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <div className="accordion-body" style={{ paddingTop: '0.75rem', paddingBottom: '1rem' }}>
                    <p style={{ color: 'var(--muted)' }}>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="mb-8" style={{ color: 'var(--navy-900)' }}>Related Services</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {[
                { title: 'Drain Cleaning Winnipeg', desc: 'Kitchen sinks, tubs, showers, toilets, floor drains and laundry lines cleared same-day.', href: '/drain-cleaning-winnipeg' },
                { title: 'Restaurant & Commercial Drains', desc: 'Grease lines, floor drains and kitchen drains cleaned overnight so you open on time.', href: '/restaurant-commercial-drain-cleaning-winnipeg' },
                { title: 'Plumbing Services Winnipeg', desc: 'Faucets, toilets, leak detection, sump pumps, backwater valves and frozen pipe thawing.', href: '/plumbing-services-winnipeg' },
                { title: '24/7 Emergency Service', desc: 'Sewage backup, flooding, or a drain that can\'t wait — we answer, dispatch immediately and fix it.', href: '/emergency-drain-plumbing-winnipeg' },
                { title: 'Backwater Valve Inspection & Repair', desc: 'Inspection, testing and repair of backwater valves across Winnipeg and every community within 100km.', href: '/blog/backflow-valve-inspection-repair-winnipeg' },
              ].map((card, i) => (
                <Link key={i} href={card.href} className="card-base p-6 block hover:shadow-lg transition-shadow">
                  <h3 className="font-700 text-base mb-2" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>{card.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{card.desc}</p>
                  <span className="text-sm font-600 mt-3 inline-block" style={{ color: 'var(--orange-600)', fontWeight: 600 }}>Learn more →</span>
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <p className="text-sm font-600 w-full mb-1" style={{ color: 'var(--muted)', fontWeight: 600 }}>Related articles:</p>
              {[
                { label: 'Tree Roots in Winnipeg Sewer Lines', href: '/blog/tree-roots-winnipeg-sewer' },
                { label: 'Sewer Camera Inspection Guide', href: '/blog/sewer-camera-inspection-winnipeg' },
                { label: 'Drain Snaking vs Hydro Jetting', href: '/blog/drain-snaking-vs-hydro-jetting' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm px-4 py-2 rounded-full border font-600 hover:bg-navy-900 hover:text-white transition-colors" style={{ borderColor: 'var(--navy-700)', color: 'var(--navy-700)', fontWeight: 600 }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="sewer-contact" className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-2xl mx-auto text-center">
            <h2 className="mb-3" style={{ color: 'var(--navy-900)' }}>Book Main Sewer Line Service</h2>
            <p className="text-lg mb-8" style={{ color: 'var(--muted)' }}>
              If sewage is backing up right now — <PhoneLink className="font-700 underline" style={{ color: 'var(--orange-600)', fontWeight: 700 }}>call +1 (204) 399-4413 immediately</PhoneLink>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink className="btn-primary shimmer-btn">Call Now — +1 (204) 399-4413</PhoneLink>
              <Link href="https://wa.me/12043994413?text=Hi%2C%20I%20think%20my%20main%20sewer%20line%20is%20blocked" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp Us</Link>
            </div>
          </div>
        </section>

        <FinalCTABand />
      </main>

      <Footer />
      <MobileActionBar />
    </>
  );
}