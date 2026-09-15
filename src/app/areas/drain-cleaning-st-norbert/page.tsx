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
import ContactForm from '@/components/ContactForm';
import PhoneLink from '@/components/PhoneLink';
import { generateServiceAreaSchema, generateBreadcrumbSchema } from '@/lib/serviceAreaSchema';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';
const PAGE_URL = `${baseUrl}/areas/drain-cleaning-st-norbert`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Drain Cleaning St. Norbert MB | 24/7 Sewer & Emergency Plumber | Pro Drain Cleaning',
  description:
    'Expert drain cleaning & sewer service in St. Norbert, MB (R3V). Clogged drains, sewer backups, tree root removal, hydro jetting & camera inspections — 24/7. Call +1 (204) 399-4413.',
  keywords: [
    'drain cleaning St. Norbert',
    'sewer cleaning St. Norbert Manitoba',
    'plumber St. Norbert MB',
    'emergency drain St. Norbert',
    'hydro jetting St. Norbert',
    'sewer backup St. Norbert',
    'drain cleaning R3V',
    'St. Norbert plumbing',
    'tree root removal St. Norbert sewer',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Drain Cleaning St. Norbert MB | 24/7 Sewer & Emergency Plumber | Pro Drain Cleaning',
    description:
      'Expert drain cleaning & sewer service in St. Norbert, MB (R3V). Clogged drains, sewer backups, tree root removal, hydro jetting & camera inspections — 24/7. Call +1 (204) 399-4413.',
    url: PAGE_URL,
    type: 'website',
  },
  other: {
    'geo.region': 'CA-MB',
    'geo.placename': 'St. Norbert, Manitoba',
    'geo.position': '49.80;-97.13',
    'ICBM': '49.80, -97.13',
  },
};

const nearbyAreas = [
  { name: 'Winnipeg', href: '/areas/drain-cleaning-winnipeg' },
  { name: 'Selkirk', href: '/areas/drain-cleaning-selkirk' },
  { name: 'Headingley', href: '/areas/drain-cleaning-headingley' },
  { name: 'Oak Bluff', href: '/areas/drain-cleaning-oak-bluff' },
  { name: 'Lorette', href: '/areas/drain-cleaning-lorette' },
  { name: 'Niverville', href: '/areas/drain-cleaning-niverville' },
  { name: 'Steinbach', href: '/areas/drain-cleaning-steinbach' },
  { name: 'Stonewall', href: '/areas/drain-cleaning-stonewall' },
  { name: 'East & West St. Paul', href: '/areas/drain-cleaning-east-west-st-paul' },
];

const services = [
  { name: 'Kitchen Sink Drain Cleaning', href: '/drain-cleaning-winnipeg#kitchen-sink-drain-cleaning' },
  { name: 'Bathroom & Shower Drains', href: '/drain-cleaning-winnipeg#shower-drain-cleaning' },
  { name: 'Floor Drain Cleaning', href: '/drain-cleaning-winnipeg#floor-drain-cleaning' },
  { name: 'Main Sewer Line Clearing', href: '/main-sewer-line-unclogging-winnipeg#tree-root-removal' },
  { name: 'Hydro Jetting', href: '/drain-cleaning-winnipeg#hydro-jet-drain-cleaning' },
  { name: 'HD Camera Inspection', href: '/drain-cleaning-winnipeg#camera-drain-inspections' },
  { name: 'Sewer Backup Response', href: '/main-sewer-line-unclogging-winnipeg#sewer-backup-cleanup' },
  { name: 'Septic System Drain Service', href: '/drain-cleaning-winnipeg#preventive-drain-maintenance' },
];

const localSignals = [
  { label: 'Postal Code', value: 'R3V (St. Norbert)' },
  { label: 'Key Streets', value: 'Pembina Hwy, Bison Dr, Turnberry Rd, Rue des Trappistes' },
  { label: 'Landmarks', value: 'St. Norbert Arts Centre, Trappist Monastery, La Salle River' },
  { label: 'Neighbourhoods', value: 'Riverside estates, Turnberry subdivision, Bison Run' },
  { label: 'Response Zone', value: 'South Winnipeg — same dispatch window as city centre' },
];

const faqs = [
  {
    q: 'Do you service properties on private septic in St. Norbert?',
    a: 'Yes. Many St. Norbert properties — particularly the older riverside homes along the Red River corridor and some of the newer subdivisions near the La Salle — are on private septic systems. We service the drain lines from the house to the septic tank, and we can camera-inspect the full run to confirm flow and identify any root intrusion or scale before it becomes a backup.',
  },
  {
    q: 'Why does St. Norbert have more flooding issues than other Winnipeg neighbourhoods?',
    a: 'St. Norbert sits at the confluence of the Red and La Salle rivers, which means the water table is naturally high and rises significantly during spring melt and heavy rain. This puts extra pressure on sump pumps, floor drains, and weeping tile systems — all of which we service. Homes in the R3V postal code near Pembina Highway and Bison Drive are particularly susceptible during high-water events.',
  },
  {
    q: 'How quickly can you reach St. Norbert for an emergency?',
    a: 'St. Norbert is just south of the Perimeter on the Red River — we dispatch from Winnipeg and can typically reach you within the same response window as central Winnipeg. Call +1 (204) 399-4413 and a technician answers directly with an honest ETA.',
  },
  {
    q: 'Do the mature trees in St. Norbert cause root problems in sewer lines?',
    a: 'Absolutely. The older riverside properties in St. Norbert have large, established trees whose roots actively seek out the moisture in clay-tile and older PVC sewer joints. Root intrusion is one of the most common calls we get from St. Norbert homeowners — especially on Rue des Trappistes and the streets closest to the Red River.',
  },
  {
    q: 'What areas of St. Norbert do you cover?',
    a: 'We cover all of St. Norbert including the Turnberry subdivision, Bison Run, the riverside estates along the Red River, and properties near the Trappist Monastery. We also serve the transition zone between St. Norbert and south Winnipeg along Pembina Highway.',
  },
];

export default function StNorbertLocationPage() {
  const serviceAreaSchema = generateServiceAreaSchema('st-norbert', 'St. Norbert', PAGE_URL);
  const breadcrumbSchema = generateBreadcrumbSchema('St. Norbert', PAGE_URL);

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${PAGE_URL}#webpage`,
    name: 'Drain Cleaning St. Norbert MB | Pro Drain Cleaning Limited',
    description:
      'Professional drain cleaning, sewer line unclogging, hydro jetting and emergency plumbing in St. Norbert, Winnipeg MB. 24/7 service for residential and septic properties.',
    url: PAGE_URL,
    inLanguage: 'en-CA',
    isPartOf: { '@id': 'https://prodraincleaning.ca/#website' },
    about: { '@type': 'Place', name: 'St. Norbert', containedInPlace: { '@type': 'City', name: 'Winnipeg' } },
    breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Drain Cleaning & Sewer Service — St. Norbert',
    description:
      'Professional drain cleaning, hydro jetting, sewer camera inspection, and emergency plumbing for residential and septic properties in St. Norbert, Winnipeg MB.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Pro Drain Cleaning Limited',
      telephone: '+12043994413',
      url: 'https://prodraincleaning.ca',
    },
    areaServed: {
      '@type': 'Place',
      name: 'St. Norbert',
      containedInPlace: { '@type': 'City', name: 'Winnipeg', addressRegion: 'MB', addressCountry: 'CA' },
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      servicePhone: { '@type': 'ContactPoint', telephone: '+12043994413', contactType: 'customer service' },
    },
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      {serviceAreaSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreaSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <AnnouncementBar />
      <Header />
      <main id="main-content">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-white border-b" style={{ borderColor: 'var(--line)' }}>
          <div className="container-wide py-3">
            <ol className="flex items-center gap-2 text-sm" style={{ color: 'var(--muted)' }}>
              <li><Link href="/" className="hover:underline" style={{ color: 'var(--navy-700)' }}>Home</Link></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" style={{ color: 'var(--ink)' }}>Drain Cleaning St. Norbert</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--navy-900) 0%, var(--navy-700) 100%)' }}>
          <div className="container-wide">
            <p className="text-xs font-700 uppercase tracking-widest mb-3" style={{ color: 'var(--orange-500)', letterSpacing: '0.12em' }}>
              ST. NORBERT · R3V · OPEN 24/7
            </p>
            <h1 className="text-white mb-5" style={{ maxWidth: '720px' }}>
              Drain Cleaning &amp; Sewer Services in St. Norbert, Winnipeg — 24/7
            </h1>
            <p className="text-lg mb-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '640px' }}>
              St. Norbert&apos;s riverside location at the Red &amp; La Salle confluence creates unique drain challenges — high water tables, mature tree roots, and a mix of septic and city sewer. We know every street from Pembina Highway to Rue des Trappistes. Upfront pricing, camera-verified results, 24/7.
            </p>
            <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Serving: Turnberry subdivision · Bison Run · Riverside estates · R3V postal code
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <PhoneLink className="btn-primary shimmer-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.64 3.48 2 2 0 013.62 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006 6l.92-.92a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Call Now — +1 (204) 399-4413
              </PhoneLink>
              <Link href="https://wa.me/12043994413?text=Hi%2C%20I%20need%20drain%20service%20in%20St.%20Norbert" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp Us</Link>
              <Link href="#contact" className="btn-secondary-white">Get a Free Estimate</Link>
            </div>
          </div>
        </section>

        <TrustStrip />

        {/* Local Coverage Strip */}
        <section className="py-6 border-b" style={{ backgroundColor: 'var(--brand-100)', borderColor: 'var(--line)' }}>
          <div className="container-wide">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {localSignals.map((sig) => (
                <div key={sig.label} className="flex flex-col gap-1">
                  <span className="text-xs font-700 uppercase tracking-wide" style={{ color: 'var(--navy-700)', fontWeight: 700 }}>{sig.label}</span>
                  <span className="text-sm" style={{ color: 'var(--ink)' }}>{sig.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-3xl">
            <h2 className="mb-5">Drain Problems We See in St. Norbert</h2>
            <div className="prose-body">
              <p className="mb-4">
                St. Norbert sits at the confluence of the Red River and the La Salle River — making it one of the most water-affected communities in the Winnipeg area. The water table here is naturally high, and during spring melt or a heavy summer rain event, it rises further, putting real pressure on sump pumps, weeping tile, floor drains, and the sewer lines that connect to them. Homes in the R3V postal code near Pembina Highway and Bison Drive are among the most frequently affected.
              </p>
              <p className="mb-4">
                The older riverside properties in St. Norbert — the established homes along the Red River corridor near Rue des Trappistes and the Trappist Monastery — have mature trees and older pipe infrastructure that we see root intrusion in regularly. Many of these properties are on private septic systems rather than City sewer, which means the drain lines from the house to the tank need periodic inspection and cleaning that municipal properties don&apos;t require.
              </p>
              <p className="mb-4">
                The newer subdivisions in St. Norbert — Turnberry, Bison Run, and the developments along Bison Drive — have modern PVC drainage, but the area&apos;s flood history means basements are designed with sump systems that work hard. When a sump pump fails or a floor drain backs up during a high-water event, the response window is short.
              </p>
              <p>
                We run 24/7 for exactly these situations. Our technicians know St. Norbert&apos;s streets and the specific drain challenges of each part of the community — from the septic-side service the riverside estates need to the sump and weeping tile work the newer subdivisions require.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide">
            <h2 className="mb-2 text-center">Services in St. Norbert</h2>
            <p className="text-center mb-8 text-sm" style={{ color: 'var(--muted)' }}>Full-service drain &amp; sewer for residential, septic, and commercial properties in the R3V area</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="card p-5 flex items-center gap-3 hover:shadow-brand transition-shadow group" style={{ textDecoration: 'none' }}>
                  <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--orange-100)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 12l2 2 4-4" stroke="var(--orange-600)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10" stroke="var(--orange-600)" strokeWidth="2"/></svg>
                  </span>
                  <span className="text-sm font-600 group-hover:text-orange-600 transition-colors" style={{ fontWeight: 600, color: 'var(--navy-900)' }}>{s.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Local Section */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-3xl">
            <h2 className="mb-6">Why St. Norbert Homeowners Call Pro Drain Cleaning</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { title: 'We Know Septic-Side Drain Work', body: 'Many St. Norbert properties are on private septic. We service the full drain run from the house to the tank — not just the city-sewer portion most plumbers stop at.' },
                { title: 'High Water Table Experience', body: 'The Red–La Salle confluence means we\'ve handled every flood-related drain scenario in this community. We know what to look for before a backup becomes a basement flood.' },
                { title: 'Root Intrusion Specialists', body: 'The mature trees along Rue des Trappistes and the riverside estates are beautiful — and relentless on older sewer joints. We cut roots and camera-verify the line is clear.' },
                { title: 'Same Response as Central Winnipeg', body: 'St. Norbert is just south of the Perimeter. We dispatch from Winnipeg and reach you in the same window as any city neighbourhood — no rural surcharge.' },
              ].map((item) => (
                <div key={item.title} className="card p-5">
                  <h3 className="text-base font-700 mb-2" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Response Time */}
        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide max-w-2xl text-center">
            <div className="card p-8" style={{ borderColor: 'var(--orange-600)', borderWidth: '2px' }}>
              <h2 className="mb-3">Typical Response to St. Norbert</h2>
              <p className="text-lg" style={{ color: 'var(--muted)' }}>
                St. Norbert is just south of the Perimeter on the Red River — same-day service for most calls, priority dispatch for active flooding. Call{' '}
                <PhoneLink className="font-700" style={{ color: 'var(--orange-600)', fontWeight: 700 }}>+1 (204) 399-4413</PhoneLink>{' '}
                and a technician answers directly.
              </p>
            </div>
          </div>
        </section>

        {/* Nearby Areas */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide">
            <h2 className="mb-6 text-center">Nearby Communities We Also Serve</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {nearbyAreas.map((a) => (
                <Link key={a.href} href={a.href} className="px-4 py-2 rounded-full text-sm font-600 border transition-colors hover:bg-orange-600 hover:text-white hover:border-orange-600" style={{ borderColor: 'var(--navy-700)', color: 'var(--navy-700)', fontWeight: 600 }}>{a.name}</Link>
              ))}
            </div>
          </div>
        </section>

        <ServiceAreaStrip />

        {/* FAQ */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-3xl">
            <h2 className="mb-8">St. Norbert Drain &amp; Sewer Questions</h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <div key={i} className="card p-6">
                  <h3 className="text-base font-700 mb-2" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>{faq.q}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide max-w-2xl">
            <h2 className="mb-3 text-center">Get Help in St. Norbert</h2>
            <p className="text-center mb-8" style={{ color: 'var(--muted)' }}>
              Fill this in and we&apos;ll call you right back. If water is rising now, call{' '}
              <PhoneLink style={{ color: 'var(--orange-600)' }}>+1 (204) 399-4413</PhoneLink>.
            </p>
            <ContactForm prefilledService="Not Sure — Need Diagnosis" />
          </div>
        </section>

        <FinalCTABand />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
