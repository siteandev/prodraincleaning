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


const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';
const PAGE_URL = `${baseUrl}/areas/drain-cleaning-east-west-st-paul`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Drain Cleaning East & West St. Paul | 24/7 Sewer & Emergency Plumber | Pro Drain Cleaning',
  description:
    'Expert drain cleaning & sewer service in East & West St. Paul, MB (R5A). Clogged drains, sewer backups, tree root removal, hydro jetting & camera inspections — 24/7. Call +1 (204) 399-4413.',
  keywords: [
    'drain cleaning East St. Paul',
    'drain cleaning West St. Paul',
    'sewer cleaning St. Paul Manitoba',
    'plumber St. Paul MB',
    'emergency drain St. Paul',
    'hydro jetting St. Paul',
    'sewer backup St. Paul',
    'drain cleaning R5A',
    'St. Paul plumbing',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Drain Cleaning East & West St. Paul | 24/7 Sewer & Emergency Plumber | Pro Drain Cleaning',
    description:
      'Expert drain cleaning & sewer service in East & West St. Paul, MB (R5A). Clogged drains, sewer backups, tree root removal, hydro jetting & camera inspections — 24/7. Call +1 (204) 399-4413.',
    url: PAGE_URL,
    type: 'website',
  },
  other: {
    'geo.region': 'CA-MB',
    'geo.placename': 'East & West St. Paul, Manitoba',
    'geo.position': '49.92;-97.05',
    'ICBM': '49.92, -97.05',
  },
};

const nearbyAreas = [
  { name: 'Winnipeg', href: '/areas/drain-cleaning-winnipeg' },
  { name: 'Selkirk', href: '/areas/drain-cleaning-selkirk' },
  { name: 'Stonewall', href: '/areas/drain-cleaning-stonewall' },
  { name: 'St. Norbert', href: '/areas/drain-cleaning-st-norbert' },
  { name: 'Headingley', href: '/areas/drain-cleaning-headingley' },
];

const services = [
  { name: 'Septic System Drain Lines', href: '/drain-cleaning-winnipeg#preventive-drain-maintenance' },
  { name: 'Main Sewer Line Clearing', href: '/main-sewer-line-unclogging-winnipeg#tree-root-removal' },
  { name: 'HD Camera Inspection', href: '/drain-cleaning-winnipeg#camera-drain-inspections' },
  { name: 'Hydro Jetting', href: '/drain-cleaning-winnipeg#hydro-jet-drain-cleaning' },
  { name: 'Sump Pump Service', href: '/plumbing-services-winnipeg#sump-pump-installation-repair' },
  { name: 'Backwater Valve Installation', href: '/plumbing-services-winnipeg#backwater-valve-installation' },
  { name: 'Sewer Backup Response', href: '/main-sewer-line-unclogging-winnipeg#sewer-backup-cleanup' },
  { name: 'Emergency Drain Response', href: '/emergency-drain-plumbing-winnipeg' },
];

const faqs = [
  { q: 'Are East and West St. Paul properties mostly on septic?', a: 'Yes. The majority of East and West St. Paul properties are on private septic systems and well water rather than municipal services. We service the drain lines from the house to the septic tank, and we can camera-inspect the full run to confirm everything is flowing correctly.' },
  { q: 'How does the Red River affect drainage in East and West St. Paul?', a: 'East and West St. Paul run along the Red River north of Winnipeg, and the riverbank properties in particular deal with high water tables that rise significantly during spring melt. This puts extra pressure on sump pumps, weeping tile, and floor drains — all of which we service.' },
  { q: 'Do larger lots in St. Paul mean longer service runs?', a: 'Yes. Larger lots mean the drain line from the house to the septic tank can run 30+ metres, which gives roots more opportunity to find joints and more distance over which bellies can develop. A camera inspection of the full run is the only way to know what\'s actually in a St. Paul drain line.' },
  { q: 'How quickly can you reach East or West St. Paul?', a: 'East and West St. Paul are immediately north of Winnipeg — we can typically reach you the same day for most calls. For active emergencies, call +1 (204) 399-4413 and we\'ll give you an honest ETA.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://prodraincleaning.ca/#business',
      name: 'Pro Drain Cleaning Limited',
      telephone: '+12043994413',
      areaServed: [
        { '@type': 'Place', name: 'East St. Paul' },
        { '@type': 'Place', name: 'West St. Paul' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://prodraincleaning.ca' },
        { '@type': 'ListItem', position: 2, name: 'Drain Cleaning East & West St. Paul', item: 'https://prodraincleaning.ca/areas/drain-cleaning-east-west-st-paul' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
};

export default function EastWestStPaulLocationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AnnouncementBar />
      <Header />
      <main id="main-content">
        <nav aria-label="Breadcrumb" className="bg-white border-b" style={{ borderColor: 'var(--line)' }}>
          <div className="container-wide py-3">
            <ol className="flex items-center gap-2 text-sm" style={{ color: 'var(--muted)' }}>
              <li><Link href="/" className="hover:underline" style={{ color: 'var(--navy-700)' }}>Home</Link></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" style={{ color: 'var(--ink)' }}>Drain Cleaning East &amp; West St. Paul</li>
            </ol>
          </div>
        </nav>

        <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--navy-900) 0%, var(--navy-700) 100%)' }}>
          <div className="container-wide">
            <p className="text-xs font-700 uppercase tracking-widest mb-3" style={{ color: 'var(--orange-500)', letterSpacing: '0.12em' }}>EAST & WEST ST. PAUL · OPEN 24/7</p>
            <h1 className="text-white mb-5" style={{ maxWidth: '700px' }}>Drain Cleaning &amp; Sewer Services in East &amp; West St. Paul, Manitoba — 24/7</h1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '620px' }}>
              East and West St. Paul are largely on private septic and well, with larger lots, riverbank properties, and high water tables during spring melt. We bring the right equipment for longer runs, septic-side service, and sump systems. 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <PhoneLink className="btn-primary shimmer-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.64 3.48 2 2 0 013.62 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006 6l.92-.92a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Call Now — +1 (204) 399-4413
              </PhoneLink>
              <Link href="https://wa.me/12043994413?text=Hi%2C%20I%20need%20drain%20service%20in%20St.%20Paul" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp Us</Link>
              <Link href="#contact" className="btn-secondary-white">Get a Free Estimate</Link>
            </div>
          </div>
        </section>

        <TrustStrip />

        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-3xl">
            <h2 className="mb-5">Drain Problems We See in East &amp; West St. Paul</h2>
            <div className="prose-body">
              <p className="mb-4">
                East and West St. Paul are immediately north of Winnipeg along the Red River, and their drain profile is defined by two things: private septic systems and larger lots. The majority of properties here are not on municipal sewer — they have private septic fields and well water, which means the drain service picture is fundamentally different from a Winnipeg city property.
              </p>
              <p className="mb-4">
                The drain line from the house to the septic tank on a large St. Paul lot can run 30 to 50 metres, which gives roots more opportunity to find joints and more distance over which bellies can develop. Iron-rich well water deposits scale in drain pipes over time, and the combination of scale and root intrusion on an older St. Paul property can be significant.
              </p>
              <p>
                The riverbank properties in East and West St. Paul deal with high water tables that rise significantly during spring melt. Sump pumps on these properties work hard during melt season, and a pump that hasn&apos;t been tested since last spring is a real risk. We service sump pumps, weeping tile systems, and all drain lines in East and West St. Paul, 24/7.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide">
            <h2 className="mb-8 text-center">Services in East &amp; West St. Paul</h2>
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

        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-2xl text-center">
            <div className="card p-8" style={{ borderColor: 'var(--orange-600)', borderWidth: '2px' }}>
              <h2 className="mb-3">Typical Response to East &amp; West St. Paul</h2>
              <p className="text-lg" style={{ color: 'var(--muted)' }}>
                East and West St. Paul are immediately north of Winnipeg — same-day service for most calls. Call <PhoneLink className="font-700" style={{ color: 'var(--orange-600)', fontWeight: 700 }}>+1 (204) 399-4413</PhoneLink> for an honest ETA.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
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

        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-3xl">
            <h2 className="mb-8">East &amp; West St. Paul Drain &amp; Sewer Questions</h2>
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

        <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide max-w-2xl">
            <h2 className="mb-3 text-center">Get Help in East &amp; West St. Paul</h2>
            <p className="text-center mb-8" style={{ color: 'var(--muted)' }}>Fill this in and we&apos;ll call you right back. If water is rising now, call <PhoneLink style={{ color: 'var(--orange-600)' }}>+1 (204) 399-4413</PhoneLink>.</p>
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
