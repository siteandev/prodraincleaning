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
const PAGE_URL = `${baseUrl}/areas/drain-cleaning-lorette`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Drain Cleaning Lorette | 24/7 Sewer & Emergency Plumber | Pro Drain Cleaning',
  description:
    'Expert drain cleaning & sewer service in Lorette, MB (R0A). Clogged drains, sewer backups, tree root removal, hydro jetting & camera inspections — 24/7. Call +1 (204) 399-4413.',
  keywords: [
    'drain cleaning Lorette',
    'sewer cleaning Lorette Manitoba',
    'plumber Lorette MB',
    'emergency drain Lorette',
    'hydro jetting Lorette',
    'sewer backup Lorette',
    'drain cleaning R0A',
    'Lorette plumbing',
    'tree root removal Lorette sewer',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Drain Cleaning Lorette | 24/7 Sewer & Emergency Plumber | Pro Drain Cleaning',
    description:
      'Expert drain cleaning & sewer service in Lorette, MB (R0A). Clogged drains, sewer backups, tree root removal, hydro jetting & camera inspections — 24/7. Call +1 (204) 399-4413.',
    url: PAGE_URL,
    type: 'website',
  },
  other: {
    'geo.region': 'CA-MB',
    'geo.placename': 'Lorette, Manitoba',
    'geo.position': '49.75;-97.35',
    'ICBM': '49.75, -97.35',
  },
};

const nearbyAreas = [
  { name: 'Winnipeg', href: '/areas/drain-cleaning-winnipeg' },
  { name: 'Steinbach', href: '/areas/drain-cleaning-steinbach' },
  { name: 'Niverville', href: '/areas/drain-cleaning-niverville' },
  { name: 'St. Norbert', href: '/areas/drain-cleaning-st-norbert' },
  { name: 'Oak Bluff', href: '/areas/drain-cleaning-oak-bluff' },
];

const services = [
  { name: 'Main Sewer Line Clearing', href: '/main-sewer-line-unclogging-winnipeg#tree-root-removal' },
  { name: 'HD Camera Inspection', href: '/drain-cleaning-winnipeg#camera-drain-inspections' },
  { name: 'Hydro Jetting', href: '/drain-cleaning-winnipeg#hydro-jet-drain-cleaning' },
  { name: 'Septic System Drain Lines', href: '/drain-cleaning-winnipeg#preventive-drain-maintenance' },
  { name: 'Kitchen Sink Drain Cleaning', href: '/drain-cleaning-winnipeg#kitchen-sink-drain-cleaning' },
  { name: 'Sump Pump Service', href: '/plumbing-services-winnipeg#sump-pump-installation-repair' },
  { name: 'Sewer Backup Response', href: '/main-sewer-line-unclogging-winnipeg#sewer-backup-cleanup' },
  { name: 'Emergency Drain Response', href: '/emergency-drain-plumbing-winnipeg' },
];

const faqs = [
  { q: 'Lorette has both older and newer homes — does that affect what drain service I need?', a: 'Yes. The 1970s–80s homes in Lorette\'s established areas may have older pipe with root intrusion and joint issues. The newer builds deal more with construction debris and settling. A camera inspection tells us exactly what\'s in your line so we use the right approach — not a one-size-fits-all cable.' },
  { q: 'Are Lorette properties on septic or municipal sewer?', a: 'Lorette has a mix of municipal sewer connections and private septic systems, depending on the neighbourhood and age of the property. We service both — drain lines from the house to the septic tank, and municipal sewer lines from the house to the City connection.' },
  { q: 'How quickly can you reach Lorette for an emergency?', a: 'Lorette is southeast of Winnipeg, approximately 20–25 km from the city. We can typically reach you the same day for most calls. For active emergencies, call +1 (204) 399-4413 and we\'ll give you an honest ETA.' },
  { q: 'Do you service Île des Chênes and St. Adolphe near Lorette?', a: 'Yes. We serve Île des Chênes, St. Adolphe, and the surrounding communities as part of our southeast Winnipeg service area. All are within our 100 km service radius.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://prodraincleaning.ca/#business',
      name: 'Pro Drain Cleaning Limited',
      telephone: '+12043994413',
      areaServed: { '@type': 'Place', name: 'Lorette' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://prodraincleaning.ca' },
        { '@type': 'ListItem', position: 2, name: 'Drain Cleaning Lorette', item: 'https://prodraincleaning.ca/areas/drain-cleaning-lorette' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
};

export default function LoretteLocationPage() {
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
              <li aria-current="page" style={{ color: 'var(--ink)' }}>Drain Cleaning Lorette</li>
            </ol>
          </div>
        </nav>

        <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--navy-900) 0%, var(--navy-700) 100%)' }}>
          <div className="container-wide">
            <p className="text-xs font-700 uppercase tracking-widest mb-3" style={{ color: 'var(--orange-500)', letterSpacing: '0.12em' }}>LORETTE · OPEN 24/7</p>
            <h1 className="text-white mb-5" style={{ maxWidth: '700px' }}>Drain Cleaning &amp; Sewer Services in Lorette, Manitoba — 24/7</h1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '620px' }}>
              Lorette is a growing bedroom community southeast of Winnipeg with a mix of 1970s–80s homes and new builds. We know both pipe generations and bring the right equipment for each. 24/7 service, upfront pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <PhoneLink className="btn-primary shimmer-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.64 3.48 2 2 0 013.62 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006 6l.92-.92a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Call Now — +1 (204) 399-4413
              </PhoneLink>
              <Link href="https://wa.me/12043994413?text=Hi%2C%20I%20need%20drain%20service%20in%20Lorette" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp Us</Link>
              <Link href="#contact" className="btn-secondary-white">Get a Free Estimate</Link>
            </div>
          </div>
        </section>

        <TrustStrip />

        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-3xl">
            <h2 className="mb-5">Drain Problems We See in Lorette</h2>
            <div className="prose-body">
              <p className="mb-4">
                Lorette is a growing bedroom community southeast of Winnipeg, and its drain profile reflects two distinct eras of construction. The established neighbourhoods have homes from the 1970s and 1980s — a period when ABS plastic pipe was becoming common but clay tile was still in use in some areas. These homes are now old enough that root intrusion, joint deterioration, and grease build-up are regular issues.
              </p>
              <p className="mb-4">
                The newer builds in Lorette have modern PVC drainage, but they bring the same new-construction issues we see in Oak Bluff and Niverville: construction debris in lines, settling in fresh backfill, and sump systems that are working hard from the first spring melt. Some Lorette properties are on private septic systems rather than municipal sewer, which adds the septic-side drain line to the maintenance picture.
              </p>
              <p>
                Lorette is also close to Île des Chênes and St. Adolphe — communities we serve as part of the same southeast Winnipeg service area. If you&apos;re in any of these communities and need drain service, one call to <PhoneLink style={{ color: 'var(--orange-600)' }}>+1 (204) 399-4413</PhoneLink> covers all of them.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide">
            <h2 className="mb-8 text-center">Services in Lorette</h2>
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
              <h2 className="mb-3">Typical Response to Lorette</h2>
              <p className="text-lg" style={{ color: 'var(--muted)' }}>
                Lorette is ~20–25 km southeast of Winnipeg. Same-day service for most calls. Call <PhoneLink className="font-700" style={{ color: 'var(--orange-600)', fontWeight: 700 }}>+1 (204) 399-4413</PhoneLink> for an honest ETA.
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
            <h2 className="mb-8">Lorette Drain &amp; Sewer Questions</h2>
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
            <h2 className="mb-3 text-center">Get Help in Lorette</h2>
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
