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
import PhoneLink from '@/components/PhoneLink';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Sump Pump Repair Winnipeg | Sump Pump Installation & Replacement 24/7",
  description: "Sump pump repair, replacement and installation in Winnipeg — pedestal, submersible and battery backup pumps. Diagnosed first, flat price before work starts. 24/7 across Winnipeg and 100 km.",
  alternates: { canonical: `${baseUrl}/sump-pump-repair-winnipeg` },
  openGraph: {
    title: "Sump Pump Repair Winnipeg | Sump Pump Installation & Replacement 24/7",
    description: "Sump pump repair, replacement and installation in Winnipeg — pedestal, submersible and battery backup pumps. Diagnosed first, flat price before work starts. 24/7 across Winnipeg and 100 km.",
    url: `${baseUrl}/sump-pump-repair-winnipeg`,
    siteName: 'Pro Drain Cleaning',
    images: [
      {
        url: 'https://prodraincleaning.ca/assets/images/og/og-default.jpg',
        width: 1200,
        height: 630,
      },
    ],
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
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Sump Pump Repair Winnipeg',
      item: `${baseUrl}/sump-pump-repair-winnipeg`,
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Sump Pump Repair and Installation',
  provider: { '@id': 'https://prodraincleaning.ca/#business' },
  areaServed: [
    { '@type': 'City', name: 'Winnipeg' },
    { '@type': 'City', name: 'Selkirk' },
    { '@type': 'Place', name: 'St. Norbert' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Sump Pump Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sump Pump Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sump Pump Replacement' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sump Pump Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Battery Backup Sump Pump Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sump Pump Inspection & Spring Readiness Check' } },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "How much does sump pump repair cost in Winnipeg?",
      acceptedAnswer: { '@type': 'Answer', text: "It depends on what failed — a float switch, check valve, impeller or the motor itself. We diagnose the pump first and give you a flat price before any work starts, so you approve the number before we begin. Call +1 (204) 399-4413 for same-day service." },
    },
    {
      '@type': 'Question',
      name: "Should I repair or replace my sump pump?",
      acceptedAnswer: { '@type': 'Answer', text: "If the pump is relatively new and the problem is a single part such as the float switch or check valve, repair usually makes sense. If the pump is over 10 years old, failing repeatedly, or undersized for your pit, replacement is normally the better value. We'll tell you which on the visit." },
    },
    {
      '@type': 'Question',
      name: "Do you install new sump pumps in Winnipeg?",
      acceptedAnswer: { '@type': 'Answer', text: "Yes. We install pedestal and submersible sump pumps, battery backup systems and combination units across Winnipeg, Selkirk, St. Norbert and 100 km around, and can usually assess and install the right pump in one visit." },
    },
    {
      '@type': 'Question',
      name: "Do I need a battery backup sump pump?",
      acceptedAnswer: { '@type': 'Answer', text: "In Winnipeg it's strongly worth considering. Spring melt and summer storms are exactly when power outages happen, and a primary pump with no power is no protection. A battery backup keeps water moving if the main pump or the power fails." },
    },
    {
      '@type': 'Question',
      name: "My sump pump runs constantly — is that an emergency?",
      acceptedAnswer: { '@type': 'Answer', text: "It can be. A pump that never shuts off may have a stuck float switch, a failed check valve letting water cycle back, or more inflow than it can handle. If water is rising in the pit, call us 24/7 at +1 (204) 399-4413." },
    },
    {
      '@type': 'Question',
      name: "When should I test my sump pump?",
      acceptedAnswer: { '@type': 'Answer', text: "Before spring melt — ideally February or early March. Pour a bucket of water into the pit and confirm the float lifts, the pump starts, and the water drains away from the house. See our pre-spring checklist for the full routine." },
    },
    {
      '@type': 'Question',
      name: "Do you service sump pumps outside Winnipeg?",
      acceptedAnswer: { '@type': 'Answer', text: "Yes — Selkirk, St. Norbert, Headingley, Oak Bluff, Lorette, Niverville, Steinbach, Stonewall, East and West St. Paul and other communities within about 100 km of Winnipeg." },
    }
  ],
};

const relatedServices = [
  { title: "Plumbing Services Winnipeg", desc: "Leak detection, pipe and water line repair, faucets, toilets, backwater valves and frozen pipes.", href: "/plumbing-services-winnipeg" },
  { title: "24/7 Emergency Service", desc: "Flooding basement, sewer backup or burst pipe — we answer and dispatch around the clock.", href: "/emergency-drain-plumbing-winnipeg" },
  { title: "Drain Cleaning Winnipeg", desc: "Floor drains, kitchen, bathroom and laundry drains cleared 24/7.", href: "/drain-cleaning-winnipeg" },
  { title: "Main Sewer Line Unclogging", desc: "Roots cut, line cleared and the cause proven on camera.", href: "/main-sewer-line-unclogging-winnipeg" },
];

const faqItems = [
  { q: "How much does sump pump repair cost in Winnipeg?", a: "It depends on what failed — a float switch, check valve, impeller or the motor itself. We diagnose the pump first and give you a flat price before any work starts, so you approve the number before we begin. Call +1 (204) 399-4413 for same-day service." },
  { q: "Should I repair or replace my sump pump?", a: "If the pump is relatively new and the problem is a single part such as the float switch or check valve, repair usually makes sense. If the pump is over 10 years old, failing repeatedly, or undersized for your pit, replacement is normally the better value. We'll tell you which on the visit." },
  { q: "Do you install new sump pumps in Winnipeg?", a: "Yes. We install pedestal and submersible sump pumps, battery backup systems and combination units across Winnipeg, Selkirk, St. Norbert and 100 km around, and can usually assess and install the right pump in one visit." },
  { q: "Do I need a battery backup sump pump?", a: "In Winnipeg it's strongly worth considering. Spring melt and summer storms are exactly when power outages happen, and a primary pump with no power is no protection. A battery backup keeps water moving if the main pump or the power fails." },
  { q: "My sump pump runs constantly — is that an emergency?", a: "It can be. A pump that never shuts off may have a stuck float switch, a failed check valve letting water cycle back, or more inflow than it can handle. If water is rising in the pit, call us 24/7 at +1 (204) 399-4413." },
  { q: "When should I test my sump pump?", a: "Before spring melt — ideally February or early March. Pour a bucket of water into the pit and confirm the float lifts, the pump starts, and the water drains away from the house. See our pre-spring checklist for the full routine." },
  { q: "Do you service sump pumps outside Winnipeg?", a: "Yes — Selkirk, St. Norbert, Headingley, Oak Bluff, Lorette, Niverville, Steinbach, Stonewall, East and West St. Paul and other communities within about 100 km of Winnipeg." },
];

export default function SumpPumpRepairWinnipegPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <AnnouncementBar />
      <Header />

      <main id="main-content" className="mobile-pb">
        {/* Breadcrumb */}
        <nav className="container-wide py-3 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2" style={{ color: 'var(--muted)' }}>
            <li>
              <Link href="/" className="hover:underline" style={{ color: 'var(--orange-600)' }}>
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/plumbing-services-winnipeg" className="hover:underline" style={{ color: 'var(--orange-600)' }}>
                Plumbing Services
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" style={{ color: 'var(--ink)' }}>
              Sump Pump Repair Winnipeg
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <section
          className="relative w-full flex items-center overflow-hidden"
          style={{
            minHeight: 'clamp(500px, 70vh, 760px)',
            background: 'linear-gradient(135deg, var(--brand-900) 0%, var(--brand-700) 100%)',
          }}
          aria-labelledby="sump-hero-h1"
        >
          <picture
            className="absolute inset-0 z-0 opacity-20"
            aria-hidden="true"
          >
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
          <div
            className="absolute inset-0 z-0"
            style={{ background: 'rgba(11,79,108,0.82)' }}
            aria-hidden="true"
          />
          <div className="container-wide relative z-10 py-20">
            <div className="max-w-3xl">
              <p
                className="text-xs font-700 uppercase tracking-widest mb-4"
                style={{ color: 'var(--orange-500)', fontWeight: 700, letterSpacing: '0.15em' }}
              >
                WINNIPEG · SELKIRK · ST. NORBERT · 100 KM AROUND — OPEN 24/7
              </p>
              <h1
                id="sump-hero-h1"
                className="text-white mb-5"
                style={{ fontWeight: 800 }}
              >
                Sump Pump Repair in Winnipeg — Repair, Replacement &amp; Installation, 24/7
              </h1>
              <p
                className="text-xl leading-relaxed mb-8"
                style={{ color: 'rgba(255,255,255,0.88)' }}
              >
                A sump pump that won&apos;t start, runs nonstop or cycles on and off is a flooded
                basement waiting to happen. We diagnose the pump first, give you a flat price before
                any work starts, and repair or replace it the same day — pedestal, submersible and
                battery backup systems, across Winnipeg, Selkirk, St. Norbert and 100 km around.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <PhoneLink className="btn-primary shimmer-btn text-base">
                  Call Now — +1 (204) 399-4413
                </PhoneLink>
                <Link
                  href="https://wa.me/12043994413?text=Hi%2C%20my%20sump%20pump%20needs%20repair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base"
                >
                  WhatsApp Us
                </Link>
                <Link href="/book-online" className="btn-secondary-white text-base">
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
            <h2 className="mb-5" style={{ color: 'var(--navy-900)' }}>
              Winnipeg Basements Depend on the Sump Pump
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
              Between spring melt off the Red River Valley&apos;s clay soil and summer cloudbursts, the
              sump pump is often the only thing standing between groundwater and your basement floor.
              Most fail quietly — a float switch that sticks, a check valve that lets water cycle back,
              an impeller packed with debris, or a motor that has simply worn out — and nobody notices
              until the pit overflows.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
              Pro Drain Cleaning repairs, replaces and installs sump pumps 24/7. We find the actual
              failure first, tell you whether repair or replacement makes more sense, and quote a flat
              price before work starts. Not sure your pump is ready for spring?{' '}
              <Link href="/blog/sump-pump-maintenance-checklist" style={{ color: 'var(--orange-600)' }} className="hover:underline">
                Use our pre-spring checklist
              </Link>{' '}
              or call{' '}
              <PhoneLink className="font-700 hover:underline" style={{ color: 'var(--orange-600)', fontWeight: 700 }}>
                +1 (204) 399-4413
              </PhoneLink>.
            </p>
          </div>
        </section>

        {/* Signs you need a plumber */}
        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="mb-6" style={{ color: 'var(--navy-900)' }}>
              Signs Your Sump Pump Needs Repair
            </h2>
            <ul className="flex flex-col gap-3">
              {[
                'The pump runs constantly, even when it has not rained',
                'It cycles on and off every few seconds',
                'The float rises but the motor does not start',
                'Grinding, rattling or humming noises from the pit',
                'Water standing in the pit or seeping onto the basement floor',
                'The pump is over 10 years old, or you have never tested it',
              ].map((symptom, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-base"
                  style={{ color: 'var(--ink)' }}
                >
                  <span
                    className="trust-item-check mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="#FFFFFF"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {symptom}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Sump pump services */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="mb-8" style={{ color: 'var(--navy-900)' }}>
              Sump Pump Services in Winnipeg
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="card-base p-6">
                <h3 className="font-700 text-base mb-2" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>Sump pump repair</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>Float switches, check valves, impellers, discharge lines and wiring diagnosed and repaired on site.</p>
              </div>
              <div className="card-base p-6">
                <h3 className="font-700 text-base mb-2" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>Sump pump replacement</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>Worn-out or undersized pumps swapped for the right capacity for your pit and inflow, usually in one visit.</p>
              </div>
              <div className="card-base p-6">
                <h3 className="font-700 text-base mb-2" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>New sump pump installation</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>Pedestal and submersible pumps installed with a proper discharge so water ends up away from the foundation.</p>
              </div>
              <div className="card-base p-6">
                <h3 className="font-700 text-base mb-2" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>Battery backup systems</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>A secondary battery pump or combination unit that keeps working through power outages during storms and melt.</p>
              </div>
              <div className="card-base p-6">
                <h3 className="font-700 text-base mb-2" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>Spring readiness check</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>A pre-melt test of the float, pump, check valve and discharge so problems are found before the thaw, not during it.</p>
              </div>
              <div className="card-base p-6">
                <h3 className="font-700 text-base mb-2" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>Pit cleaning &amp; discharge correction</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>Silted pits cleaned out and discharge lines extended or re-routed so water is not dumped back against the foundation.</p>
              </div>
            </div>
          </div>
        </section>

        <ServiceAreaStrip />

        {/* FAQ */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-3xl mx-auto">
            <h2 className="text-center mb-10" style={{ color: 'var(--navy-900)' }}>
              Sump Pump Questions, Answered
            </h2>
            <div className="flex flex-col gap-3">
              {faqItems.map((item, i) => (
                <details key={i} className="accordion-item" style={{ listStyle: 'none' }}>
                  <summary
                    className="accordion-trigger"
                    style={{ cursor: 'pointer', listStyle: 'none' }}
                  >
                    <span>{item.q}</span>
                    <svg
                      className="accordion-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </summary>
                  <div
                    className="accordion-body"
                    style={{ paddingTop: '0.75rem', paddingBottom: '1rem' }}
                  >
                    <p style={{ color: 'var(--muted)' }}>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services — all 5 hub pages */}
        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="mb-8" style={{ color: 'var(--navy-900)' }}>
              Related Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {relatedServices.map((card, i) => (
                <Link
                  key={i}
                  href={card.href}
                  className="card-base p-6 block hover:shadow-lg transition-shadow"
                >
                  <h3
                    className="font-700 text-base mb-2"
                    style={{ color: 'var(--navy-900)', fontWeight: 700 }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {card.desc}
                  </p>
                  <span
                    className="text-sm font-600 mt-3 inline-block"
                    style={{ color: 'var(--orange-600)', fontWeight: 600 }}
                  >
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <p
                className="text-sm font-600 w-full mb-1"
                style={{ color: 'var(--muted)', fontWeight: 600 }}
              >
                Related articles:
              </p>
              {[
                { label: 'Sump Pump Maintenance Checklist', href: '/blog/sump-pump-maintenance-checklist' },
                { label: 'Spring Thaw Flooding: Is Your Sump Pump Ready?', href: '/blog/spring-thaw-flooding-sump-pump-winnipeg' },
                { label: 'Spring Thaw Basement Flooding Prevention', href: '/blog/spring-thaw-basement-flooding-winnipeg' },
                { label: 'Backwater Valves in Winnipeg', href: '/blog/backwater-valve-winnipeg' },
                { label: 'Sewer Backup in Your Basement: What to Do', href: '/blog/sewer-backup-what-to-do' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm px-4 py-2 rounded-full border font-600 hover:bg-navy-900 hover:text-white transition-colors"
                  style={{ borderColor: 'var(--navy-700)', color: 'var(--navy-700)', fontWeight: 600 }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section
          id="sump-contact"
          className="section-padding"
          style={{ backgroundColor: 'var(--white)' }}
        >
          <div className="container-wide max-w-2xl mx-auto text-center">
            <h2 className="mb-3" style={{ color: 'var(--navy-900)' }}>
              Book Sump Pump Repair in Winnipeg
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--muted)' }}>
              Same-day available. If it&apos;s urgent —{' '}
              <PhoneLink
                className="font-700 underline"
                style={{ color: 'var(--orange-600)', fontWeight: 700 }}
              >
                call +1 (204) 399-4413
              </PhoneLink>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink className="btn-primary shimmer-btn">
                Call Now — +1 (204) 399-4413
              </PhoneLink>
              <Link
                href="https://wa.me/12043994413?text=Hi%2C%20my%20sump%20pump%20needs%20repair"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                WhatsApp Us
              </Link>
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
