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
import EmergencyAccordion from '@/components/EmergencyAccordion';
import PhoneLink from '@/components/PhoneLink';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: '24/7 Emergency Plumber & Drain Cleaning Winnipeg | Sewer Backup & Flood Response',
  description:
    '24/7 emergency drain cleaning, sewer backup and flood response in Winnipeg, Selkirk & 100 km. Real person answers, fast dispatch, upfront pricing. Call +1 (204) 399-4413 now.',
  alternates: { canonical: `${baseUrl}/emergency-drain-plumbing-winnipeg` },
  openGraph: {
    title:
      '24/7 Emergency Plumber & Drain Cleaning Winnipeg | Sewer Backup & Flood Response',
    description:
      '24/7 emergency drain cleaning, sewer backup and flood response in Winnipeg, Selkirk & 100 km. Real person answers, fast dispatch, upfront pricing. Call +1 (204) 399-4413 now.',
    url: `${baseUrl}/emergency-drain-plumbing-winnipeg`,
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
      name: '24/7 Emergency Drain & Plumbing Winnipeg',
      item: `${baseUrl}/emergency-drain-plumbing-winnipeg`,
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Emergency Drain Cleaning & Plumbing',
  provider: { '@id': 'https://prodraincleaning.ca/#business' },
  areaServed: [
    { '@type': 'City', name: 'Winnipeg' },
    { '@type': 'City', name: 'Selkirk' },
    { '@type': 'Place', name: 'St. Norbert' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Emergency Drain & Plumbing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: '24/7 Emergency Drain Cleaning' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Emergency Sewer Backup Service' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Emergency Clogged Toilet Service' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Emergency Flood Response' },
      },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you charge more for emergency and after-hours calls?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We give you a flat price before starting work in all cases, even at 3 a.m. Emergency and after-hours calls are priced upfront — you approve the number before we start.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast can you get here?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Same-day for most Winnipeg calls, with priority dispatch when water is actively rising. We'll give you an honest arrival estimate on the phone based on your location and current demand. For communities within 100 km, arrival time depends on distance and time of day.",
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do right now while I wait?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For a sewer backup: stop using all water in the building immediately — every flush adds volume to a blocked line. Keep people and pets off the affected floor. For a burst pipe: shut off your main water valve if you can do it safely. For an overflowing toilet: turn the supply valve behind the toilet clockwise to stop the bowl filling. We'll walk you through it on the phone.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you cover Selkirk, Steinbach and outside Winnipeg at night?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — we run 24/7 across Winnipeg and every community within 100 km, including Selkirk, Steinbach, Stonewall, Niverville, Portage la Prairie and everywhere in between. We'll tell you honestly on the phone if a very remote location affects our arrival time.",
      },
    },
    {
      '@type': 'Question',
      name: 'Will you help with my insurance claim documentation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. For sewer backups and flood response we camera the line, take photos of the damage, and provide dated footage and a written report — exactly what insurers ask for. We can also coordinate with your restoration contractor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you answer on statutory holidays?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. 24/7/365 means every day of the year — Christmas, New Year's, long weekends, all of them. Call +1 (204) 399-4413 and a real technician answers.",
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
    title: 'Plumbing Services Winnipeg',
    desc: 'Faucets, toilets, leak detection, sump pumps, backwater valves and frozen pipe thawing.',
    href: '/plumbing-services-winnipeg',
  },
];

const faqItems = [
  {
    q: 'Do you charge more for emergency and after-hours calls?',
    a: 'We give you a flat price before starting work in all cases, even at 3 a.m. Emergency and after-hours calls are priced upfront — you approve the number before we start.',
  },
  {
    q: 'How fast can you get here?',
    a: "Same-day for most Winnipeg calls, with priority dispatch when water is actively rising. We'll give you an honest arrival estimate on the phone based on your location and current demand.",
  },
  {
    q: 'What should I do right now while I wait?',
    a: "For a sewer backup: stop using all water in the building immediately — every flush adds volume to a blocked line. Keep people and pets off the affected floor. For a burst pipe: shut off your main water valve if you can do it safely. For an overflowing toilet: turn the supply valve behind the toilet clockwise. We'll walk you through it on the phone.",
  },
  {
    q: 'Do you cover Selkirk, Steinbach and outside Winnipeg at night?',
    a: "Yes — we run 24/7 across Winnipeg and every community within 100 km, including Selkirk, Steinbach, Stonewall, Niverville, Portage la Prairie and everywhere in between.",
  },
  {
    q: 'Will you help with my insurance claim documentation?',
    a: 'Yes. For sewer backups and flood response we camera the line, take photos of the damage, and provide dated footage and a written report — exactly what insurers ask for. We can also coordinate with your restoration contractor.',
  },
  {
    q: 'Do you answer on statutory holidays?',
    a: "Yes. 24/7/365 means every day of the year — Christmas, New Year's, long weekends, all of them. Call +1 (204) 399-4413 and a real technician answers.",
  },
];

export default function EmergencyDrainPlumbingWinnipegPage() {
  return (
    <>
      {/* LCP hero image preload — browser fetches it immediately before render */}
      <link
        rel="preload"
        as="image"
        href="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=480&fm=webp&q=50"
        imageSrcSet="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=480&fm=webp&q=50 480w, https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=768&fm=webp&q=55 768w, https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1280&fm=webp&q=60 1280w"
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
              24/7 Emergency Drain &amp; Plumbing Winnipeg
            </li>
          </ol>
        </nav>

        {/* 🚨 RED EMERGENCY BANNER */}
        <div
          role="alert"
          aria-live="assertive"
          className="w-full py-4 px-4 text-center"
          style={{ backgroundColor: '#DC2626', color: '#FFFFFF' }}
        >
          <p className="font-700 text-base md:text-lg" style={{ fontWeight: 700 }}>
            WATER RISING RIGHT NOW? Stop reading.{' '}
            <PhoneLink
              className="underline font-800"
              style={{ color: '#FFFFFF', fontWeight: 800 }}
            >
              Call +1 (204) 399-4413.
            </PhoneLink>{' '}
            Shut off the water to the affected fixture, keep people and pets off the affected
            floor, and don&apos;t flush or run the washer.
          </p>
        </div>

        {/* Hero */}
        <section
          className="relative w-full flex items-center overflow-hidden"
          style={{
            minHeight: 'clamp(500px, 70vh, 760px)',
            background: 'linear-gradient(135deg, var(--brand-900) 0%, var(--brand-700) 100%)',
          }}
          aria-labelledby="emergency-hero-h1"
        >
          <picture
            className="absolute inset-0 z-0 opacity-20"
            aria-hidden="true"
          >
            <source
              type="image/webp"
              srcSet="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=480&fm=webp&q=50 480w, https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=768&fm=webp&q=55 768w, https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1280&fm=webp&q=60 1280w"
              sizes="100vw"
            />
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1280&fm=webp&q=50"
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
                WINNIPEG · SELKIRK · ST. NORBERT · 100 KM AROUND — OPEN 24/7/365
              </p>
              <h1
                id="emergency-hero-h1"
                className="text-white mb-5"
                style={{ fontWeight: 800 }}
              >
                24/7 Emergency Drain Cleaning &amp; Plumbing in Winnipeg — We Answer, We Come,
                We Fix It
              </h1>
              <p
                className="text-xl leading-relaxed mb-8"
                style={{ color: 'rgba(255,255,255,0.88)' }}
              >
                Emergencies don&apos;t schedule themselves for Tuesday at 10 a.m. Pro Drain
                Cleaning Limited runs genuine 24/7/365 emergency service across Winnipeg, Selkirk,
                St. Norbert and every community within 100 km — a real technician answers the
                phone, not an answering service, and we&apos;ll tell you what to do right now while
                we&apos;re on the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <PhoneLink
                  className="btn-primary shimmer-btn text-base"
                >
                  Call Now — +1 (204) 399-4413
                </PhoneLink>
                <Link
                  href="https://wa.me/12043994413?text=Hi%2C%20I%20have%20a%20drain%20emergency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base"
                >
                  WhatsApp Us
                </Link>
                <Link href="#emergency-contact" className="btn-secondary-white text-base">
                  Get Help Now
                </Link>
              </div>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Open 24/7/365 · Winnipeg + 100 km · Real technician answers
              </p>
            </div>
          </div>
        </section>

        <TrustStrip />

        {/* Intro block */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="mb-5" style={{ color: 'var(--navy-900)' }}>
              Genuine 24/7 Emergency Response — Not a Callback Queue
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
              Emergencies don&apos;t schedule themselves for Tuesday at 10 a.m. They happen at 2
              a.m. on a long weekend, on Christmas morning, and during the first heavy rain of
              spring when half the city needs a plumber at once. Pro Drain Cleaning Limited runs
              genuine 24/7/365 emergency service across Winnipeg, Selkirk, St. Norbert and every
              community within 100 km — a real technician answers the phone, not an answering
              service, and we&apos;ll tell you what to do right now while we&apos;re on the way.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
              Every truck carries full-size drain machines, a hydro jetter, an HD camera and a
              locator, so we clear it on the first visit. And even at 3 a.m., you get a flat price
              you approve before we start work.
            </p>
          </div>
        </section>

        {/* THE SERVICE ACCORDION — 4 items */}
        <EmergencyAccordion />

        <ServiceAreaStrip />

        {/* FAQ */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-3xl mx-auto">
            <h2 className="text-center mb-10" style={{ color: 'var(--navy-900)' }}>
              Emergency Service Questions, Answered
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
                { label: 'Sewer Backup — What to Do', href: '/blog/sewer-backup-what-to-do' },
                { label: 'Emergency Plumber Winnipeg — When to Call', href: '/blog/emergency-plumber-winnipeg-when-to-call' },
                { label: 'Spring Thaw Basement Flooding Winnipeg', href: '/blog/spring-thaw-basement-flooding-winnipeg' },
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
          id="emergency-contact"
          className="section-padding"
          style={{ backgroundColor: 'var(--white)' }}
        >
          <div className="container-wide max-w-2xl mx-auto text-center">
            <h2 className="mb-3" style={{ color: 'var(--navy-900)' }}>
              Need Emergency Help Right Now?
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--muted)' }}>
              Don&apos;t type —{' '}
              <PhoneLink
                className="font-700 underline"
                style={{ color: 'var(--orange-600)', fontWeight: 700 }}
              >
                call +1 (204) 399-4413
              </PhoneLink>
              . A real technician answers 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink className="btn-primary shimmer-btn">
                Call Now — +1 (204) 399-4413
              </PhoneLink>
              <Link
                href="https://wa.me/12043994413?text=Hi%2C%20I%20have%20a%20drain%20emergency"
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
