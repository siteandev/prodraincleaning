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
import CommercialDrainAccordion from '@/components/CommercialDrainAccordion';
import PhoneLink from '@/components/PhoneLink';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Restaurant & Commercial Drain Cleaning Winnipeg | Grease Line Jetting 24/7',
  description: 'Commercial drain cleaning for Winnipeg restaurants: grease trap lines, floor drains, kitchen & washroom drains, storm drains. Overnight service, maintenance plans. Call +1 (204) 399-4413.',
  alternates: { canonical: `${baseUrl}/restaurant-commercial-drain-cleaning-winnipeg` },
  openGraph: {
    title: 'Restaurant & Commercial Drain Cleaning Winnipeg | Grease Line Jetting 24/7',
    description: 'Commercial drain cleaning for Winnipeg restaurants: grease trap lines, floor drains, kitchen & washroom drains, storm drains. Overnight service, maintenance plans. Call +1 (204) 399-4413.',
    url: `${baseUrl}/restaurant-commercial-drain-cleaning-winnipeg`,
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
    { '@type': 'ListItem', position: 2, name: 'Restaurant & Commercial Drain Cleaning Winnipeg', item: `${baseUrl}/restaurant-commercial-drain-cleaning-winnipeg` },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Restaurant & Commercial Drain Cleaning',
  provider: { '@id': `${baseUrl}/#business` },
  areaServed: [
    { '@type': 'City', name: 'Winnipeg' },
    { '@type': 'City', name: 'Selkirk' },
    { '@type': 'Place', name: 'St. Norbert' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Commercial Drain Cleaning Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Grease Trap Line Cleaning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Floor Drain Maintenance' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Kitchen Drain Cleaning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Washroom Drain Cleaning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Storm Drain Cleaning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Preventive Maintenance Programs' } },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How often should a restaurant jet its grease line?',
      acceptedAnswer: { '@type': 'Answer', text: 'For a high-volume kitchen, monthly to quarterly. For a moderate-volume kitchen, quarterly. The right frequency depends on your menu, volume, and grease trap pump-out schedule. We\'ll assess your system and recommend a program that matches your actual usage.' },
    },
    {
      '@type': 'Question',
      name: 'Can you work overnight or before we open?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — we schedule around your service. Overnight, early morning, or on your closed day. We work when your kitchen isn\'t running so you don\'t lose a single cover.' },
    },
    {
      '@type': 'Question',
      name: 'Do you provide reports for health inspections?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every service visit comes with a dated written report documenting what was cleaned, the method used, and the result. You can hand it directly to an inspector or keep it in your food-safety file.' },
    },
    {
      '@type': 'Question',
      name: 'Why does my grease trap still overflow when it\'s pumped on schedule?',
      acceptedAnswer: { '@type': 'Answer', text: 'Because the trap is only half the system. The line running from the trap to the sewer accumulates hardened FOG on the pipe wall, reducing the effective diameter until the trap has nowhere to drain. Hydro jetting the outlet line and sewer run solves this — pumping the trap alone doesn\'t.' },
    },
    {
      '@type': 'Question',
      name: 'Do you service hotels, care homes and industrial sites?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — we work with any commercial or institutional property: restaurants, bars, hotels, care homes, food processors, retail, industrial sites, and condo buildings. If it has drains, we service it.' },
    },
    {
      '@type': 'Question',
      name: 'What does a maintenance program cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'It depends on the number of lines, the frequency, and the size of your facility. We build a custom program and give you a fixed monthly or per-visit rate. Call us and we\'ll assess your site and give you a number.' },
    },
  ],
};

export default function CommercialDrainCleaningPage() {
  return (
    <>
      {/* LCP hero image preload — browser fetches it immediately before render */}
      <link
        rel="preload"
        as="image"
        href="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=480&fm=webp&q=50"
        imageSrcSet="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=480&fm=webp&q=50 480w, https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=768&fm=webp&q=55 768w, https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1280&fm=webp&q=60 1280w"
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
            <li aria-current="page" style={{ color: 'var(--ink)' }}>Restaurant & Commercial Drain Cleaning Winnipeg</li>
          </ol>
        </nav>

        {/* Hero */}
        <section
          className="relative w-full flex items-center overflow-hidden"
          style={{ minHeight: 'clamp(500px, 70vh, 760px)', background: 'linear-gradient(135deg, var(--brand-900) 0%, var(--brand-700) 100%)' }}
          aria-labelledby="commercial-hero-h1"
        >
          <picture className="absolute inset-0 z-0 opacity-20" aria-hidden="true">
            <source
              type="image/webp"
              srcSet="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=480&fm=webp&q=50 480w, https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=768&fm=webp&q=55 768w, https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1280&fm=webp&q=60 1280w"
              sizes="100vw"
            />
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1280&fm=webp&q=50"
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
              <h1 id="commercial-hero-h1" className="text-white mb-5" style={{ fontWeight: 800 }}>
                Restaurant & Commercial Drain Cleaning in Winnipeg — Cleaned Overnight, Open on Time
              </h1>
              <p className="text-xl leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.88)' }}>
                A blocked floor drain during Friday service isn&apos;t a plumbing problem — it&apos;s lost covers, a soaked kitchen, staff standing in grey water, and a health inspection you really don&apos;t want. We schedule around your service — overnight, early morning, or on your closed day — and we hydro jet rather than just cable, because in a grease line, cabling is a two-week solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <PhoneLink className="btn-primary shimmer-btn text-base">
                  Call Now — +1 (204) 399-4413
                </PhoneLink>
                <Link href="https://wa.me/12043994413?text=Hi%2C%20I%20need%20commercial%20drain%20service" target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base">
                  WhatsApp Us
                </Link>
                <Link href="#commercial-contact" className="btn-secondary-white text-base">
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
            <h2 className="mb-5" style={{ color: 'var(--navy-900)' }}>Commercial Drain Service Scheduled Around Your Business</h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
              Pro Drain Cleaning Limited works with Winnipeg restaurants, commercial kitchens, food processors, bars, hotels, care homes, retail and industrial sites to keep grease lines, floor drains, washroom drains and storm drains flowing. We schedule around your service — overnight, early morning, or on your closed day — and we hydro jet rather than just cabling, because in a grease line, cabling is a two-week solution.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
              Emergency response is available 24/7 across Winnipeg, Selkirk, St. Norbert and 100 km around, and every job comes with a written report for your food-safety records.
            </p>
          </div>
        </section>

        {/* Signs your commercial drains need attention */}
        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="mb-6" style={{ color: 'var(--navy-900)' }}>Signs Your Commercial Drains Need Attention Now</h2>
            <ul className="flex flex-col gap-3">
              {[
                'Floor drains draining slowly or pooling during service',
                'Grease trap overflowing or needing pump-outs more often than it used to',
                'Persistent drain odour in the kitchen or dining room',
                'Drain flies around floor drains or the trap',
                'A dish pit or 3-compartment sink that backs up under load',
                'Any health-inspection note about drainage or standing water',
              ].map((symptom, i) => (
                <li key={i} className="flex items-start gap-3 text-base" style={{ color: 'var(--ink)' }}>
                  <span className="trust-item-check mt-0.5 flex-shrink-0" aria-hidden="true">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  {symptom}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* THE SERVICE ACCORDION */}
        <CommercialDrainAccordion />

        {/* Our Process */}
        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-center mb-10" style={{ color: 'var(--navy-900)' }}>How We Work Around Your Service</h2>
            <p className="text-center mb-10" style={{ color: 'var(--muted)' }}>Most commercial drain jobs are done in a single visit, scheduled when your kitchen isn&apos;t running.</p>
            <div className="flex flex-col gap-5">
              {[
                { num: '01', title: 'You call or WhatsApp — 24/7', body: 'Tell us what you\'re seeing: which drains, how bad, and when you need it done. We\'ll tell you what it will cost before we roll a truck.' },
                { num: '02', title: 'We schedule around your service', body: 'Overnight, early morning, or on your closed day. We confirm the time and show up when we said we would.' },
                { num: '03', title: 'We arrive fully equipped', body: 'Hydro jetter, sectional auger, HD camera, locator. We don\'t leave and come back with different equipment.' },
                { num: '04', title: 'Upfront quote before we start', body: 'We assess the lines, give you a flat price in writing, and you approve it before any work starts.' },
                { num: '05', title: 'We clean and verify', body: 'Hydro jet where the wall is coated, cable where there\'s a solid obstruction. Load-test under real discharge conditions. Camera-verify where relevant.' },
                { num: '06', title: 'Written report for your records', body: 'Dated service report documenting what was cleaned, the method, and the result — ready for your food-safety file or an inspector.' },
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
            <h2 className="text-center mb-10 text-white">Why Winnipeg Businesses Call Pro Drain Cleaning</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: null, title: 'Overnight and pre-open scheduling', body: 'We work when your kitchen isn\'t running. You don\'t lose a single cover.' },
                { icon: null, title: 'Written reports for every visit', body: 'Dated documentation for your food-safety file, ready for any inspector.' },
                { icon: null, title: 'Hydro jetting, not just cabling', body: 'In a grease line, cabling is a two-week solution. Jetting removes the FOG from the pipe wall and restores full diameter.' },
                { icon: null, title: 'Emergency response 24/7', body: 'A blocked floor drain during service is an emergency. We answer and we come.' },
              ].map((tile, i) => (
                <div key={i} className="rounded-brand p-6" style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
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
            <h2 className="text-center mb-10" style={{ color: 'var(--navy-900)' }}>Commercial Drain Questions, Answered</h2>
            <div className="flex flex-col gap-3">
              {[
                {
                  q: 'How often should a restaurant jet its grease line?',
                  a: 'For a high-volume kitchen, monthly to quarterly. For a moderate-volume kitchen, quarterly. The right frequency depends on your menu, volume, and grease trap pump-out schedule. We\'ll assess your system and recommend a program that matches your actual usage.',
                },
                {
                  q: 'Can you work overnight or before we open?',
                  a: 'Yes — we schedule around your service. Overnight, early morning, or on your closed day. We work when your kitchen isn\'t running so you don\'t lose a single cover.',
                },
                {
                  q: 'Do you provide reports for health inspections?',
                  a: 'Yes. Every service visit comes with a dated written report documenting what was cleaned, the method used, and the result. You can hand it directly to an inspector or keep it in your food-safety file.',
                },
                {
                  q: 'Why does my grease trap still overflow when it\'s pumped on schedule?',
                  a: 'Because the trap is only half the system. The line running from the trap to the sewer accumulates hardened FOG on the pipe wall, reducing the effective diameter until the trap has nowhere to drain. Hydro jetting the outlet line and sewer run solves this — pumping the trap alone doesn\'t.',
                },
                {
                  q: 'Do you service hotels, care homes and industrial sites?',
                  a: 'Yes — we work with any commercial or institutional property: restaurants, bars, hotels, care homes, food processors, retail, industrial sites, and condo buildings. If it has drains, we service it.',
                },
                {
                  q: 'What does a maintenance program cost?',
                  a: 'It depends on the number of lines, the frequency, and the size of your facility. We build a custom program and give you a fixed monthly or per-visit rate. Call us and we\'ll assess your site and give you a number.',
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
                { title: 'Main Sewer Line Unclogging', desc: 'Multiple fixtures backing up? Roots, grease and scale cleared with full-size machines and camera verification.', href: '/main-sewer-line-unclogging-winnipeg' },
                { title: 'Plumbing Services Winnipeg', desc: 'Faucets, toilets, leak detection, sump pumps, backwater valves and frozen pipe thawing.', href: '/plumbing-services-winnipeg' },
                { title: '24/7 Emergency Service', desc: 'A blocked floor drain during service is an emergency. We answer, dispatch immediately and fix it.', href: '/emergency-drain-plumbing-winnipeg' },
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
                { label: 'Restaurant Drain Maintenance Guide', href: '/blog/restaurant-drain-maintenance' },
                { label: 'Why Grease Traps Overflow', href: '/blog/why-grease-traps-overflow' },
                { label: 'Commercial Kitchen Drain Cleaning', href: '/blog/commercial-kitchen-drain-cleaning' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm px-4 py-2 rounded-full border font-600 hover:bg-navy-900 hover:text-white transition-colors" style={{ borderColor: 'var(--navy-700)', color: 'var(--navy-700)', fontWeight: 600 }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="commercial-contact" className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-2xl mx-auto text-center">
            <h2 className="mb-3" style={{ color: 'var(--navy-900)' }}>Book Commercial Drain Service</h2>
            <p className="text-lg mb-8" style={{ color: 'var(--muted)' }}>
              If it&apos;s urgent — <PhoneLink className="font-700 underline" style={{ color: 'var(--orange-600)', fontWeight: 700 }}>call +1 (204) 399-4413</PhoneLink>. Otherwise, tell us what you need and when.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink className="btn-primary shimmer-btn">Call Now — +1 (204) 399-4413</PhoneLink>
              <Link href="https://wa.me/12043994413?text=Hi%2C%20I%20need%20commercial%20drain%20service" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp Us</Link>
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
