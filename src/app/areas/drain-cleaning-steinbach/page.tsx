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
const PAGE_URL = `${baseUrl}/areas/drain-cleaning-steinbach`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Drain Cleaning Steinbach | 24/7 Sewer & Emergency Plumber | Pro Drain Cleaning',
  description:
    'Expert drain cleaning & sewer service in Steinbach, MB (R5G). Clogged drains, sewer backups, tree root removal, hydro jetting & camera inspections — 24/7. Call +1 (204) 399-4413.',
  keywords: [
    'drain cleaning Steinbach',
    'sewer cleaning Steinbach Manitoba',
    'plumber Steinbach MB',
    'emergency drain Steinbach',
    'hydro jetting Steinbach',
    'sewer backup Steinbach',
    'drain cleaning R5G',
    'Steinbach plumbing',
    'tree root removal Steinbach sewer',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Drain Cleaning Steinbach | 24/7 Sewer & Emergency Plumber | Pro Drain Cleaning',
    description:
      'Expert drain cleaning & sewer service in Steinbach, MB (R5G). Clogged drains, sewer backups, tree root removal, hydro jetting & camera inspections — 24/7. Call +1 (204) 399-4413.',
    url: PAGE_URL,
    type: 'website',
  },
  other: {
    'geo.region': 'CA-MB',
    'geo.placename': 'Steinbach, Manitoba',
    'geo.position': '49.54;-97.30',
    'ICBM': '49.54, -97.30',
  },
};

const nearbyAreas = [
  { name: 'Winnipeg', href: '/areas/drain-cleaning-winnipeg' },
  { name: 'Niverville', href: '/areas/drain-cleaning-niverville' },
  { name: 'St. Norbert', href: '/areas/drain-cleaning-st-norbert' },
  { name: 'East & West St. Paul', href: '/areas/drain-cleaning-east-west-st-paul' },
];

const services = [
  { name: 'Restaurant Grease Line Cleaning', href: '/restaurant-commercial-drain-cleaning-winnipeg#grease-trap-line-cleaning' },
  { name: 'Commercial Floor Drains', href: '/restaurant-commercial-drain-cleaning-winnipeg#floor-drain-maintenance' },
  { name: 'Main Sewer Line Clearing', href: '/main-sewer-line-unclogging-winnipeg#tree-root-removal' },
  { name: 'HD Camera Inspection', href: '/drain-cleaning-winnipeg#camera-drain-inspections' },
  { name: 'Hydro Jetting', href: '/drain-cleaning-winnipeg#hydro-jet-drain-cleaning' },
  { name: 'Kitchen Sink Drain Cleaning', href: '/drain-cleaning-winnipeg#kitchen-sink-drain-cleaning' },
  { name: 'Preventive Maintenance Programs', href: '/restaurant-commercial-drain-cleaning-winnipeg#preventive-maintenance-programs' },
  { name: 'Emergency Drain Response', href: '/emergency-drain-plumbing-winnipeg' },
];

const faqs = [
  { q: 'Does Steinbach have a large commercial drain cleaning need?', a: 'Yes. Steinbach is the largest city in southeastern Manitoba with a substantial commercial and restaurant sector. Grease lines in food service operations, floor drains in retail and industrial facilities, and commercial washroom drains all need periodic professional cleaning. We service all of these and can schedule around your operating hours.' },
  { q: 'What\'s the range of housing ages in Steinbach?', a: 'Steinbach has a wide range — from older core housing built in the mid-20th century to significant new construction in the growing residential areas. Older properties may have clay or cast-iron pipe with root and joint issues; newer properties deal more with construction debris in lines and settling in fresh backfill.' },
  { q: 'How far is Steinbach from Winnipeg and how does that affect service?', a: 'Steinbach is approximately 60 km southeast of Winnipeg. We serve Steinbach regularly and can typically reach you the same day for most calls. For active emergencies, call +1 (204) 399-4413) and we\'ll give you an honest ETA.' },
  { q: 'Do you offer maintenance programs for Steinbach restaurants?', a: 'Yes. We build maintenance programs around your volume and history — monthly for high-volume kitchens, quarterly for moderate ones. Each visit includes jetting or cabling of scheduled lines, camera verification where relevant, and a dated written report for your food-safety records.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://prodraincleaning.ca/#business',
      name: 'Pro Drain Cleaning Limited',
      telephone: '+12043994413',
      areaServed: { '@type': 'City', name: 'Steinbach' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://prodraincleaning.ca' },
        { '@type': 'ListItem', position: 2, name: 'Drain Cleaning Steinbach', item: 'https://prodraincleaning.ca/areas/drain-cleaning-steinbach' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
};

export default function SteinbachLocationPage() {
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
              <li aria-current="page" style={{ color: 'var(--ink)' }}>Drain Cleaning Steinbach</li>
            </ol>
          </div>
        </nav>

        <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--navy-900) 0%, var(--navy-700) 100%)' }}>
          <div className="container-wide">
            <p className="text-xs font-700 uppercase tracking-widest mb-3" style={{ color: 'var(--orange-500)', letterSpacing: '0.12em' }}>STEINBACH · OPEN 24/7</p>
            <h1 className="text-white mb-5" style={{ maxWidth: '700px' }}>Drain Cleaning &amp; Sewer Services in Steinbach, Manitoba — 24/7</h1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '620px' }}>
              Steinbach is southeastern Manitoba&apos;s largest city — with a substantial commercial sector, a wide range of building ages, and growing residential development. We serve Steinbach&apos;s homes, restaurants, and commercial properties 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <PhoneLink className="btn-primary shimmer-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.64 3.48 2 2 0 013.62 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006 6l.92-.92a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Call Now — +1 (204) 399-4413
              </PhoneLink>
              <Link href="https://wa.me/12043994413?text=Hi%2C%20I%20need%20drain%20service%20in%20Steinbach" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp Us</Link>
              <Link href="#contact" className="btn-secondary-white">Get a Free Estimate</Link>
            </div>
          </div>
        </section>

        <TrustStrip />

        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-3xl">
            <h2 className="mb-5">Drain Problems We See in Steinbach</h2>
            <div className="prose-body">
              <p className="mb-4">
                Steinbach is the largest city in southeastern Manitoba, approximately 60 km from Winnipeg, and its drain profile reflects both its size and its growth. The commercial and restaurant sector here is substantial — there are dozens of food service operations, retail facilities, and industrial businesses, all of which generate grease, food waste, and commercial floor drain loads that need regular professional attention.
              </p>
              <p className="mb-4">
                Steinbach&apos;s housing stock spans a wide range of ages. The older core neighbourhoods have mid-20th century homes with clay or cast-iron pipe and the root intrusion and joint deterioration that comes with it. The newer residential areas — and Steinbach has been growing steadily — have modern PVC drainage but deal with construction debris left in lines during the build and settling in fresh backfill that can create bellies and joint gaps.
              </p>
              <p>
                For Steinbach&apos;s restaurant and commercial sector, a blocked floor drain or grease line during service is a serious operational problem. We schedule commercial drain cleaning overnight or before open, and we offer maintenance programs that keep grease lines and floor drains flowing on a set schedule — so the health inspector never sees standing water.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide">
            <h2 className="mb-8 text-center">Services in Steinbach</h2>
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
              <h2 className="mb-3">Typical Response to Steinbach</h2>
              <p className="text-lg" style={{ color: 'var(--muted)' }}>
                Steinbach is ~60 km southeast of Winnipeg. We serve it regularly — call <PhoneLink className="font-700" style={{ color: 'var(--orange-600)', fontWeight: 700 }}>+1 (204) 399-4413</PhoneLink> for an honest ETA on your specific call.
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
            <h2 className="mb-8">Steinbach Drain &amp; Sewer Questions</h2>
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
            <h2 className="mb-3 text-center">Get Help in Steinbach</h2>
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
