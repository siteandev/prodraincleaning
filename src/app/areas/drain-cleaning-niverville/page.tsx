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
const PAGE_URL = `${baseUrl}/areas/drain-cleaning-niverville`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Drain Cleaning Niverville | 24/7 Sewer & Emergency Plumber | Pro Drain Cleaning',
  description:
    'Expert drain cleaning & sewer service in Niverville, MB (R0A). Clogged drains, sewer backups, tree root removal, hydro jetting & camera inspections — 24/7. Call +1 (204) 399-4413.',
  keywords: [
    'drain cleaning Niverville',
    'sewer cleaning Niverville Manitoba',
    'plumber Niverville MB',
    'emergency drain Niverville',
    'hydro jetting Niverville',
    'sewer backup Niverville',
    'drain cleaning R0A',
    'Niverville plumbing',
    'tree root removal Niverville sewer',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Drain Cleaning Niverville | 24/7 Sewer & Emergency Plumber | Pro Drain Cleaning',
    description:
      'Expert drain cleaning & sewer service in Niverville, MB (R0A). Clogged drains, sewer backups, tree root removal, hydro jetting & camera inspections — 24/7. Call +1 (204) 399-4413.',
    url: PAGE_URL,
    type: 'website',
  },
  other: {
    'geo.region': 'CA-MB',
    'geo.placename': 'Niverville, Manitoba',
    'geo.position': '49.63;-97.28',
    'ICBM': '49.63, -97.28',
  },
};

const nearbyAreas = [
  { name: 'Winnipeg', href: '/areas/drain-cleaning-winnipeg' },
  { name: 'Steinbach', href: '/areas/drain-cleaning-steinbach' },
  { name: 'St. Norbert', href: '/areas/drain-cleaning-st-norbert' },
];

const services = [
  { name: 'Main Sewer Line Clearing', href: '/main-sewer-line-unclogging-winnipeg#tree-root-removal' },
  { name: 'Hydro Jetting', href: '/drain-cleaning-winnipeg#hydro-jet-drain-cleaning' },
  { name: 'New Drain Installation', href: '/plumbing-services-winnipeg#drain-installation' },
  { name: 'Sump Pump Service', href: '/plumbing-services-winnipeg#sump-pump-installation-repair' },
  { name: 'Sewer Line Locating', href: '/main-sewer-line-unclogging-winnipeg#sewer-line-locating' },
  { name: 'Emergency Drain Response', href: '/emergency-drain-plumbing-winnipeg' },
];

const faqs = [
  { q: 'Niverville is growing fast — what drain problems come with new construction?', a: 'New construction in Niverville means construction debris in drain lines (concrete residue, drywall compound, gravel), settling in fresh backfill that creates bellies and joint gaps, and sump systems that are working hard from the first spring melt. These are the most common calls we get from newer Niverville homes.' },
  { q: 'Do you do pre-purchase sewer camera inspections in Niverville?', a: 'Yes. Even in a newer home, a camera inspection before purchase is worthwhile — it confirms the drain lines are clear of construction debris, properly sloped, and connected correctly. For older Niverville properties, it\'s essential.' },
  { q: 'How quickly can you reach Niverville?', a: 'Niverville is approximately 35 km south of Winnipeg. We can typically reach you the same day for most calls. For active emergencies, call +1 (204) 399-4413 and we\'ll give you an honest ETA.' },
  { q: 'Do you service Steinbach and the surrounding area from Niverville?', a: 'Yes. Niverville and Steinbach are both in our southeast Manitoba service area. We serve both communities regularly and can often combine calls in the area.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://prodraincleaning.ca/#business',
      name: 'Pro Drain Cleaning Limited',
      telephone: '+12043994413',
      areaServed: { '@type': 'Place', name: 'Niverville' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://prodraincleaning.ca' },
        { '@type': 'ListItem', position: 2, name: 'Drain Cleaning Niverville', item: 'https://prodraincleaning.ca/areas/drain-cleaning-niverville' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
};

export default function NivervilleLocationPage() {
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
              <li aria-current="page" style={{ color: 'var(--ink)' }}>Drain Cleaning Niverville</li>
            </ol>
          </div>
        </nav>

        <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--navy-900) 0%, var(--navy-700) 100%)' }}>
          <div className="container-wide">
            <p className="text-xs font-700 uppercase tracking-widest mb-3" style={{ color: 'var(--orange-500)', letterSpacing: '0.12em' }}>NIVERVILLE · OPEN 24/7</p>
            <h1 className="text-white mb-5" style={{ maxWidth: '700px' }}>Drain Cleaning &amp; Sewer Services in Niverville, Manitoba — 24/7</h1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '620px' }}>
              Niverville is one of Manitoba&apos;s fastest-growing towns — which means lots of new construction and the drain problems that come with it. Construction debris, settling, and new sump systems are our most common calls here. 24/7 service.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <PhoneLink className="btn-primary shimmer-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.64 3.48 2 2 0 013.62 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006 6l.92-.92a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Call Now — +1 (204) 399-4413
              </PhoneLink>
              <Link href="https://wa.me/12043994413?text=Hi%2C%20I%20need%20drain%20service%20in%20Niverville" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp Us</Link>
              <Link href="#contact" className="btn-secondary-white">Get a Free Estimate</Link>
            </div>
          </div>
        </section>

        <TrustStrip />

        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-3xl">
            <h2 className="mb-5">Drain Problems We See in Niverville</h2>
            <div className="prose-body">
              <p className="mb-4">
                Niverville is one of Manitoba&apos;s fastest-growing towns, approximately 35 km south of Winnipeg, and the pace of new construction here is the defining characteristic of its drain profile. When a town grows this quickly, the drain problems are almost entirely new-construction related — and they&apos;re different from what you&apos;d find in an older Winnipeg neighbourhood.
              </p>
              <p className="mb-4">
                Construction debris is the most common issue in new Niverville homes: concrete residue, drywall compound, gravel, and construction waste left in drain lines during the build. This material hardens in the pipe and creates blockages that don&apos;t respond to a plunger. A camera inspection is the fastest way to identify what&apos;s in the line and where — and it&apos;s something we recommend for any new Niverville home in the first year or two after construction.
              </p>
              <p>
                Settling in fresh backfill is the other major issue. As the ground around new pipe compresses over the first few years, drain lines can develop bellies — low spots where water pools and solids accumulate. Sump-dependent basements are the norm in new Niverville construction, and a sump pump that hasn&apos;t been tested since the home was built is a real risk during spring melt. We service all of this, 24/7.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide">
            <h2 className="mb-8 text-center">Services in Niverville</h2>
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
              <h2 className="mb-3">Typical Response to Niverville</h2>
              <p className="text-lg" style={{ color: 'var(--muted)' }}>
                Niverville is ~35 km south of Winnipeg. Same-day service for most calls. Call <PhoneLink className="font-700" style={{ color: 'var(--orange-600)', fontWeight: 700 }}>+1 (204) 399-4413</PhoneLink> for an honest ETA.
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
            <h2 className="mb-8">Niverville Drain &amp; Sewer Questions</h2>
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
            <h2 className="mb-3 text-center">Get Help in Niverville</h2>
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
