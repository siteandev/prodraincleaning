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
const PAGE_URL = `${baseUrl}/areas/drain-cleaning-winnipeg`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Drain Cleaning Winnipeg | 24/7 Sewer & Emergency Plumber | Pro Drain Cleaning',
  description: 'Drain cleaning and sewer line unclogging in Winnipeg, MB. Clogged drains, sewer backups, hydro jetting & camera inspections, 24/7. Call +1 (204) 399-4413.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Drain Cleaning Winnipeg | 24/7 Sewer & Emergency Plumber | Pro Drain Cleaning',
    description: 'Drain cleaning and sewer line unclogging in Winnipeg, MB. Clogged drains, sewer backups, hydro jetting & camera inspections, 24/7. Call +1 (204) 399-4413.',
    url: PAGE_URL,
    type: 'website',
  },
};

const nearbyAreas = [
  { name: 'St. Norbert', href: '/areas/drain-cleaning-st-norbert' },
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
  { name: 'Toilet Unclogging', href: '/drain-cleaning-winnipeg#toilet-drain-unclogging' },
  { name: 'Main Sewer Line Clearing', href: '/main-sewer-line-unclogging-winnipeg#tree-root-removal' },
  { name: 'Hydro Jetting', href: '/drain-cleaning-winnipeg#hydro-jet-drain-cleaning' },
  { name: 'HD Camera Inspection', href: '/drain-cleaning-winnipeg#camera-drain-inspections' },
  { name: 'Sewer Backup Response', href: '/main-sewer-line-unclogging-winnipeg#sewer-backup-cleanup' },
  { name: 'Preventive Maintenance', href: '/drain-cleaning-winnipeg#preventive-drain-maintenance' },
];

const faqs = [
  { q: 'What neighbourhoods in Winnipeg do you serve?', a: 'We serve every neighbourhood in Winnipeg — River Heights, Wolseley, West End, North End, Elmwood, St. Boniface, Norwood, St. James, East Kildonan, Fort Rouge, Osborne Village, Sage Creek, Bridgwater, Waverley West, Amber Trails, and everywhere in between.' },
  { q: 'Why are Winnipeg drains so prone to root intrusion?', a: 'Winnipeg\'s older neighbourhoods — River Heights, Wolseley, Elmwood, St. Boniface — still run on clay tile sewer pipe laid 40–80 years ago. Mature elms and maples find every hairline joint and grow into a solid mat inside the pipe. Our freeze-thaw cycle opens joints further every year.' },
  { q: 'Do you respond to Winnipeg emergencies at night?', a: 'Yes. We answer 24/7/365 — nights, weekends, statutory holidays and −35°C January mornings. A real technician picks up, not an answering service.' },
  { q: 'What\'s the difference between older and newer Winnipeg neighbourhoods for drains?', a: 'Older areas like River Heights and Wolseley have clay or cast-iron pipe with root and joint issues. Newer areas like Sage Creek, Bridgwater and Waverley West have modern PVC but deal with heavy clay soil settling, construction debris in new lines, and combined sewer capacity during storms.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://prodraincleaning.ca/#business',
      name: 'Pro Drain Cleaning Limited',
      telephone: '+12043994413',
      areaServed: { '@type': 'City', name: 'Winnipeg' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://prodraincleaning.ca' },
        { '@type': 'ListItem', position: 2, name: 'Drain Cleaning Winnipeg', item: 'https://prodraincleaning.ca/areas/drain-cleaning-winnipeg' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
};

export default function WinnipegLocationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AnnouncementBar />
      <Header />
      <main id="main-content">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-white border-b" style={{ borderColor: 'var(--line)' }}>
          <div className="container-wide py-3">
            <ol className="flex items-center gap-2 text-sm" style={{ color: 'var(--muted)' }}>
              <li><Link href="/" className="hover:underline" style={{ color: 'var(--navy-700)' }}>Home</Link></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" style={{ color: 'var(--ink)' }}>Drain Cleaning Winnipeg</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--navy-900) 0%, var(--navy-700) 100%)' }}>
          <div className="container-wide">
            <p className="text-xs font-700 uppercase tracking-widest mb-3" style={{ color: 'var(--orange-500)', letterSpacing: '0.12em' }}>
              WINNIPEG · OPEN 24/7
            </p>
            <h1 className="text-white mb-5" style={{ maxWidth: '700px' }}>
              Drain Cleaning &amp; Sewer Services in Winnipeg, Manitoba — 24/7
            </h1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '620px' }}>
              Winnipeg&apos;s most complete drain and sewer service — from a slow kitchen sink in River Heights to a main sewer backup in Sage Creek. We know these pipes, these neighbourhoods, and these problems. Upfront pricing, camera-verified results, 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <PhoneLink className="btn-primary shimmer-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.64 3.48 2 2 0 013.62 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006 6l.92-.92a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Call Now — +1 (204) 399-4413
              </PhoneLink>
              <Link href="https://wa.me/12043994413?text=Hi%2C%20I%20need%20drain%20service%20in%20Winnipeg" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                WhatsApp Us
              </Link>
              <Link href="#contact" className="btn-secondary-white">Get a Free Estimate</Link>
            </div>
          </div>
        </section>

        <TrustStrip />

        {/* Local Problems Section */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-3xl">
            <h2 className="mb-5">Drain Problems We See in Winnipeg</h2>
            <div className="prose-body">
              <p className="mb-4">
                Winnipeg is genuinely hard on drains, and the reason is the city&apos;s own history. The older half of the city — River Heights, Wolseley, West End, North End, Elmwood, St. Boniface, Norwood, St. James, East Kildonan, Fort Rouge, and Osborne Village — still runs on clay tile or cast-iron sewer pipe that was laid 40 to 80 years ago. Every mature elm and maple on those streets is looking for moisture, and clay-tile joints are exactly where they find it. Roots enter at hairline cracks, grow into a dense mat, and catch everything flushed past them until one ordinary evening the line stops completely.
              </p>
              <p className="mb-4">
                Winnipeg&apos;s freeze-thaw cycle makes it worse. Ground movement opens joints further every winter, and spring melt pushes enormous volumes of water into a combined sewer system that was designed for a smaller city. That&apos;s why so many &quot;sudden&quot; Winnipeg backups aren&apos;t sudden at all — they&apos;ve been building for months, and the storm just finished the job.
              </p>
              <p>
                Newer areas — Sage Creek, Bridgwater, Waverley West, Amber Trails — have modern PVC drainage, but they bring their own problems: heavy clay soil that settles around new pipe, construction debris left in lines during the build, and basement sump systems that work hard during spring melt. We work across all of Winnipeg with the right equipment for each neighbourhood&apos;s specific pipe age and soil conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide">
            <h2 className="mb-8 text-center">Services in Winnipeg</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="card p-5 flex items-center gap-3 hover:shadow-brand transition-shadow group"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--orange-100)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 12l2 2 4-4" stroke="var(--orange-600)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10" stroke="var(--orange-600)" strokeWidth="2"/></svg>
                  </span>
                  <span className="text-sm font-600 group-hover:text-orange-600 transition-colors" style={{ fontWeight: 600, color: 'var(--navy-900)' }}>{s.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Response Time */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-2xl text-center">
            <div className="card p-8" style={{ borderColor: 'var(--orange-600)', borderWidth: '2px' }}>
              <h2 className="mb-3">Typical Response to Winnipeg</h2>
              <p className="text-lg" style={{ color: 'var(--muted)' }}>
                Same-day for most Winnipeg calls. Priority dispatch for active flooding or sewer backup. We answer 24/7 — call <PhoneLink className="font-700" style={{ color: 'var(--orange-600)', fontWeight: 700 }}>+1 (204) 399-4413</PhoneLink> and a technician picks up directly.
              </p>
            </div>
          </div>
        </section>

        {/* Nearby Communities */}
        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide">
            <h2 className="mb-6 text-center">Nearby Communities We Also Serve</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {nearbyAreas.map((a) => (
                <Link key={a.href} href={a.href} className="px-4 py-2 rounded-full text-sm font-600 border transition-colors hover:bg-orange-600 hover:text-white hover:border-orange-600" style={{ borderColor: 'var(--navy-700)', color: 'var(--navy-700)', fontWeight: 600 }}>
                  {a.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ServiceAreaStrip />

        {/* FAQ */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-3xl">
            <h2 className="mb-8">Winnipeg Drain &amp; Sewer Questions</h2>
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
            <h2 className="mb-3 text-center">Get Help in Winnipeg</h2>
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
