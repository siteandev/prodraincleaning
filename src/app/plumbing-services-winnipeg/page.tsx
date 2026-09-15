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
import PlumbingAccordion from '@/components/PlumbingAccordion';
import PhoneLink from '@/components/PhoneLink';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Plumbing Services Winnipeg | Leak Detection, Sump Pumps, Pipe Repair 24/7',
  description:
    'Winnipeg plumbing services: faucet & toilet repair, leak detection, pipe & water line repair, sump pumps, backwater valves, frozen pipe thawing. 24/7. Call +1 (204) 399-4413.',
  alternates: { canonical: `${baseUrl}/plumbing-services-winnipeg` },
  openGraph: {
    title: 'Plumbing Services Winnipeg | Leak Detection, Sump Pumps, Pipe Repair 24/7',
    description:
      'Winnipeg plumbing services: faucet & toilet repair, leak detection, pipe & water line repair, sump pumps, backwater valves, frozen pipe thawing. 24/7. Call +1 (204) 399-4413.',
    url: `${baseUrl}/plumbing-services-winnipeg`,
    siteName: 'Pro Drain Cleaning Limited',
    images: [
      {
        url: 'https://prodraincleaning.ca/images/og-default.jpg',
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
      name: 'Plumbing Services Winnipeg',
      item: `${baseUrl}/plumbing-services-winnipeg`,
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Plumbing Services',
  provider: { '@id': 'https://prodraincleaning.ca/#business' },
  areaServed: [
    { '@type': 'City', name: 'Winnipeg' },
    { '@type': 'City', name: 'Selkirk' },
    { '@type': 'Place', name: 'St. Norbert' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Plumbing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Faucet Repair' } },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Toilet Repair & Installation' },
      },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Garbage Disposal Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Leak Detection' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pipe Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Water Line Repair' } },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Sump Pump Installation & Repair' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Backwater Valve Installation' },
      },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drain Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Frozen Pipe Thawing' } },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you do plumbing as well as drains?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Clearing drains is what we're known for, but we also handle the plumbing repairs and installations that go with them: faucets, toilets, garbage disposals, leak detection, pipe and water line repair, sump pumps, backwater valves, new drain installation and frozen pipe thawing.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find a hidden leak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We use acoustic listening equipment, thermal imaging, moisture meters and pressure testing to locate leaks inside walls, under floors, beneath slabs and in supply lines without opening anything up first. Call us if your water bill jumped without explanation, if you hear water running when everything is off, or if there's a warm or damp patch on a floor.",
      },
    },
    {
      '@type': 'Question',
      name: 'When should I test my sump pump in Winnipeg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Before spring melt — ideally in February or early March. Pour water into the pit to confirm the float switch triggers and the pump runs. If it hasn't been tested since you moved in, or if it runs constantly, cycles oddly, or makes new noises, have it inspected before the melt rather than during it.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is a backwater valve worth installing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — it is one of the highest-value protections available to a Winnipeg homeowner. It physically blocks sewage from pushing back into your basement during heavy rain or rapid melt. It can affect your insurance position, and there may be a City of Winnipeg subsidy available — call us for current program details.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do I do about a frozen pipe right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Do not use a torch or open flame — it's the leading cause of fires during cold snaps and can split the pipe. Shut off your main water valve if you suspect a burst is imminent, then call us at +1 (204) 399-4413. We run 24/7 for exactly this situation and will locate and thaw the frozen section with controlled equipment.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you charge extra for after-hours plumbing calls?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We give you a flat price before starting work in all cases. Emergency and after-hours calls are priced upfront — you approve the number before we start.',
      },
    },
  ],
};

const relatedServices = [
  {
    title: 'Drain Cleaning Winnipeg',
    desc: 'Every drain in your home or business cleared 24/7 — kitchen, bath, floor drains and main sewer lines.',
    href: '/drain-cleaning-winnipeg',
  },
  {
    title: 'Main Sewer Line Unclogging',
    desc: 'Roots cut, line cleared and cause proven on camera. 24/7 across Winnipeg and 100 km.',
    href: '/main-sewer-line-unclogging-winnipeg',
  },
  {
    title: 'Restaurant & Commercial Drains',
    desc: 'Grease lines, floor drains and kitchen drains cleaned overnight so you open on time.',
    href: '/restaurant-commercial-drain-cleaning-winnipeg',
  },
  {
    title: '24/7 Emergency Service',
    desc: 'Burst pipe, sewer backup or flooding — we answer, dispatch immediately and fix it on the first visit.',
    href: '/emergency-drain-plumbing-winnipeg',
  },
];

const faqItems = [
  {
    q: 'Do you do plumbing as well as drains?',
    a: "Yes. Clearing drains is what we're known for, but we also handle the plumbing repairs and installations that go with them: faucets, toilets, garbage disposals, leak detection, pipe and water line repair, sump pumps, backwater valves, new drain installation and frozen pipe thawing.",
  },
  {
    q: 'How do I find a hidden leak?',
    a: "We use acoustic listening equipment, thermal imaging, moisture meters and pressure testing to locate leaks inside walls, under floors, beneath slabs and in supply lines without opening anything up first. Call us if your water bill jumped without explanation, if you hear water running when everything is off, or if there's a warm or damp patch on a floor.",
  },
  {
    q: 'When should I test my sump pump in Winnipeg?',
    a: "Before spring melt — ideally in February or early March. Pour water into the pit to confirm the float switch triggers and the pump runs. If it hasn't been tested since you moved in, or if it runs constantly, cycles oddly, or makes new noises, have it inspected before the melt rather than during it.",
  },
  {
    q: 'Is a backwater valve worth installing?',
    a: 'Yes — it is one of the highest-value protections available to a Winnipeg homeowner. It physically blocks sewage from pushing back into your basement during heavy rain or rapid melt. It can affect your insurance position, and there may be a City of Winnipeg subsidy available — call us for current program details.',
  },
  {
    q: 'What do I do about a frozen pipe right now?',
    a: "Do not use a torch or open flame — it's the leading cause of fires during cold snaps and can split the pipe. Shut off your main water valve if you suspect a burst is imminent, then call us at +1 (204) 399-4413. We run 24/7 for exactly this situation.",
  },
  {
    q: 'Do you charge extra for after-hours plumbing calls?',
    a: 'We give you a flat price before starting work in all cases. Emergency and after-hours calls are priced upfront — you approve the number before we start.',
  },
];

export default function PlumbingServicesWinnipegPage() {
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
            <li aria-current="page" style={{ color: 'var(--ink)' }}>
              Plumbing Services Winnipeg
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
          aria-labelledby="plumbing-hero-h1"
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
                id="plumbing-hero-h1"
                className="text-white mb-5"
                style={{ fontWeight: 800 }}
              >
                Plumbing Services in Winnipeg — Repairs, Installations &amp; Leak Detection, 24/7
              </h1>
              <p
                className="text-xl leading-relaxed mb-8"
                style={{ color: 'rgba(255,255,255,0.88)' }}
              >
                Faucets, toilets, garbage disposals, leak detection, pipe and water line repair,
                sump pumps, backwater valves, new drain installation and frozen pipe thawing. Same
                upfront flat-rate pricing, same 24/7 availability, right across Winnipeg, Selkirk,
                St. Norbert and 100 km around.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <PhoneLink className="btn-primary shimmer-btn text-base">
                  Call Now — +1 (204) 399-4413
                </PhoneLink>
                <Link
                  href="https://wa.me/12043994413?text=Hi%2C%20I%20need%20plumbing%20help"
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
              More Than Drains — The Plumbing That Goes With Them
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
              Clearing drains is what we&apos;re known for, but a blocked line is often a symptom
              of something else — a failed sump pump, a leaking supply line, a toilet that&apos;s
              been running since March, or a section of pipe that froze last February and never
              fully recovered. Pro Drain Cleaning Limited handles the plumbing repairs and
              installations that go with the drains: faucets, toilets, garbage disposals, leak
              detection, pipe and water line repair, sump pumps, backwater valves, new drain
              installation and frozen pipe thawing.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
              Same upfront flat-rate pricing, same 24/7 availability, same
              protect-the-floors-and-clean-up-after approach, right across Winnipeg, Selkirk, St.
              Norbert and 100 km around.
            </p>
          </div>
        </section>

        {/* Signs you need a plumber */}
        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="mb-6" style={{ color: 'var(--navy-900)' }}>
              Signs You Need a Plumber Now
            </h2>
            <ul className="flex flex-col gap-3">
              {[
                'A water bill that jumped with no change in your usage',
                'Any sound of running water when nothing is turned on',
                'Damp, warm or discoloured spots on floors, ceilings or drywall',
                'Low water pressure at one fixture or across the house',
                "A sump pump that runs constantly, or won't run at all",
                'Any pipe that has frozen before — especially in an exterior wall or crawlspace',
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

        {/* THE SERVICE ACCORDION — 10 items */}
        <PlumbingAccordion />

        <ServiceAreaStrip />

        {/* FAQ */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-3xl mx-auto">
            <h2 className="text-center mb-10" style={{ color: 'var(--navy-900)' }}>
              Plumbing Questions, Answered
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
                { label: 'Backwater Valve Winnipeg Guide', href: '/blog/backwater-valve-winnipeg' },
                { label: 'Prevent Frozen Pipes Winnipeg', href: '/blog/prevent-frozen-pipes-winnipeg' },
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
          id="plumbing-contact"
          className="section-padding"
          style={{ backgroundColor: 'var(--white)' }}
        >
          <div className="container-wide max-w-2xl mx-auto text-center">
            <h2 className="mb-3" style={{ color: 'var(--navy-900)' }}>
              Book Plumbing Service in Winnipeg
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
                href="https://wa.me/12043994413?text=Hi%2C%20I%20need%20plumbing%20help"
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
