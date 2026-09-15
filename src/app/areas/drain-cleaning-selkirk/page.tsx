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
const PAGE_URL = `${baseUrl}/areas/drain-cleaning-selkirk`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Drain Cleaning Selkirk MB | 24/7 Sewer & Emergency Plumber | Pro Drain Cleaning',
  description:
    'Expert drain cleaning & sewer service in Selkirk, MB (R1A). Clogged drains, sewer backups, tree root removal, hydro jetting & camera inspections — 24/7. Serving downtown Selkirk, Eveline St & marine district. Call +1 (204) 399-4413.',
  keywords: [
    'drain cleaning Selkirk MB',
    'sewer cleaning Selkirk Manitoba',
    'plumber Selkirk MB',
    'emergency drain Selkirk',
    'hydro jetting Selkirk',
    'sewer backup Selkirk',
    'drain cleaning R1A',
    'Selkirk plumbing',
    'tree root removal Selkirk sewer',
    'commercial drain Selkirk',
    'drain cleaning north Winnipeg',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Drain Cleaning Selkirk MB | 24/7 Sewer & Emergency Plumber | Pro Drain Cleaning',
    description:
      'Expert drain cleaning & sewer service in Selkirk, MB (R1A). Clogged drains, sewer backups, tree root removal, hydro jetting & camera inspections — 24/7. Call +1 (204) 399-4413.',
    url: PAGE_URL,
    type: 'website',
  },
  other: {
    'geo.region': 'CA-MB',
    'geo.placename': 'Selkirk, Manitoba',
    'geo.position': '50.14;-96.88',
    'ICBM': '50.14, -96.88',
  },
};

const nearbyAreas = [
  { name: 'Winnipeg', href: '/areas/drain-cleaning-winnipeg' },
  { name: 'St. Norbert', href: '/areas/drain-cleaning-st-norbert' },
  { name: 'East & West St. Paul', href: '/areas/drain-cleaning-east-west-st-paul' },
  { name: 'Stonewall', href: '/areas/drain-cleaning-stonewall' },
  { name: 'Headingley', href: '/areas/drain-cleaning-headingley' },
  { name: 'Steinbach', href: '/areas/drain-cleaning-steinbach' },
];

const services = [
  { name: 'Main Sewer Line Clearing', href: '/main-sewer-line-unclogging-winnipeg#tree-root-removal' },
  { name: 'Tree Root Removal', href: '/main-sewer-line-unclogging-winnipeg#tree-root-removal' },
  { name: 'HD Camera Inspection', href: '/drain-cleaning-winnipeg#camera-drain-inspections' },
  { name: 'Hydro Jetting', href: '/drain-cleaning-winnipeg#hydro-jet-drain-cleaning' },
  { name: 'Kitchen Sink Drain Cleaning', href: '/drain-cleaning-winnipeg#kitchen-sink-drain-cleaning' },
  { name: 'Floor Drain Cleaning', href: '/drain-cleaning-winnipeg#floor-drain-cleaning' },
  { name: 'Commercial Drain Service', href: '/restaurant-commercial-drain-cleaning-winnipeg' },
  { name: 'Emergency Sewer Response', href: '/emergency-drain-plumbing-winnipeg#emergency-sewer-backup-service' },
];

const localSignals = [
  { label: 'Postal Code', value: 'R1A (Selkirk)' },
  { label: 'Key Streets', value: 'Eveline St, Manitoba Ave, Easton Dr, River Rd' },
  { label: 'Landmarks', value: 'Marine Museum of Manitoba, Selkirk Waterfront, Red River' },
  { label: 'Neighbourhoods', value: 'Downtown core, Riverview, East Selkirk, Selkirk Park' },
  { label: 'Distance from Winnipeg', value: '~34 km north via Hwy 9 — same-day service' },
];

const faqs = [
  {
    q: 'Does the Red River affect sewer and drain performance in Selkirk?',
    a: 'Yes. Selkirk sits on the Red River, and seasonal river-level changes affect the groundwater table across the city. During high-water periods — particularly spring melt — sump pumps work harder, weeping tile systems are under more pressure, and floor drains in older homes near the waterfront and Eveline Street can be affected by groundwater infiltration.',
  },
  {
    q: 'Is Selkirk\'s housing stock older than Winnipeg\'s?',
    a: 'Much of Selkirk\'s core housing stock — particularly in the downtown area around Manitoba Avenue and the streets closest to the Red River — dates from the early-to-mid 20th century. Clay tile and cast-iron sewer pipe is common in these established neighbourhoods. Root intrusion and joint deterioration are the most frequent issues we see in Selkirk, especially on the tree-lined residential streets.',
  },
  {
    q: 'Do you service commercial and industrial properties in Selkirk?',
    a: 'Yes. Selkirk has a significant marine and industrial business sector along the river, including the Marine Museum of Manitoba area and the commercial corridor on Manitoba Avenue. We service commercial floor drains, grease lines in food service operations, and industrial drainage systems, scheduling around your operating hours so you don\'t lose production time.',
  },
  {
    q: 'How far is Selkirk from Winnipeg and how does that affect response time?',
    a: 'Selkirk is approximately 34 km north of Winnipeg on Highway 9. We dispatch from Winnipeg and can typically reach Selkirk the same day for most calls. For active emergencies — a sewer backup, a flooding basement — call +1 (204) 399-4413 and we\'ll give you an honest ETA.',
  },
  {
    q: 'What areas of Selkirk do you cover?',
    a: 'We cover all of Selkirk including the downtown core around Eveline Street and Manitoba Avenue, the Riverview area along the Red River, East Selkirk, Selkirk Park, and the industrial/marine district. We also serve the surrounding rural municipality of St. Andrews.',
  },
];

export default function SelkirkLocationPage() {
  const serviceAreaSchema = generateServiceAreaSchema('selkirk', 'Selkirk', PAGE_URL);
  const breadcrumbSchema = generateBreadcrumbSchema('Selkirk', PAGE_URL);

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${PAGE_URL}#webpage`,
    name: 'Drain Cleaning Selkirk MB | Pro Drain Cleaning Limited',
    description:
      'Professional drain cleaning, sewer line unclogging, tree root removal, hydro jetting and emergency plumbing in Selkirk, Manitoba. 24/7 service for residential and commercial properties.',
    url: PAGE_URL,
    inLanguage: 'en-CA',
    isPartOf: { '@id': 'https://prodraincleaning.ca/#website' },
    about: { '@type': 'City', name: 'Selkirk', addressRegion: 'MB', addressCountry: 'CA' },
    breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Drain Cleaning & Sewer Service — Selkirk MB',
    description:
      'Professional drain cleaning, tree root removal, hydro jetting, sewer camera inspection, and emergency plumbing for residential and commercial properties in Selkirk, Manitoba.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Pro Drain Cleaning Limited',
      telephone: '+12043994413',
      url: 'https://prodraincleaning.ca',
    },
    areaServed: {
      '@type': 'City',
      name: 'Selkirk',
      addressRegion: 'MB',
      addressCountry: 'CA',
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
              <li aria-current="page" style={{ color: 'var(--ink)' }}>Drain Cleaning Selkirk</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--navy-900) 0%, var(--navy-700) 100%)' }}>
          <div className="container-wide">
            <p className="text-xs font-700 uppercase tracking-widest mb-3" style={{ color: 'var(--orange-500)', letterSpacing: '0.12em' }}>
              SELKIRK · R1A · OPEN 24/7
            </p>
            <h1 className="text-white mb-5" style={{ maxWidth: '720px' }}>
              Drain Cleaning &amp; Sewer Services in Selkirk, Manitoba — 24/7
            </h1>
            <p className="text-lg mb-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '640px' }}>
              Selkirk&apos;s older housing stock, Red River location, and active commercial sector create drain problems that need a specialist. We serve all of Selkirk 24/7 — roots cut, lines jetted, camera-verified. 34 km from Winnipeg, same-day response.
            </p>
            <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Serving: Downtown Selkirk · Eveline St · Manitoba Ave · Riverview · East Selkirk · Marine district · R1A postal code
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <PhoneLink className="btn-primary shimmer-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.64 3.48 2 2 0 013.62 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006 6l.92-.92a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Call Now — +1 (204) 399-4413
              </PhoneLink>
              <Link href="https://wa.me/12043994413?text=Hi%2C%20I%20need%20drain%20service%20in%20Selkirk" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp Us</Link>
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
            <h2 className="mb-5">Drain Problems We See in Selkirk</h2>
            <div className="prose-body">
              <p className="mb-4">
                Selkirk is approximately 34 km north of Winnipeg on the Red River, and its drain profile reflects both its age and its location. The established core of Selkirk — the residential streets closest to the river around Eveline Street and Manitoba Avenue — has housing stock from the early-to-mid 20th century, which means clay tile and cast-iron sewer pipe is the norm rather than the exception. Mature trees throughout these neighbourhoods have had decades to find every joint in those lines.
              </p>
              <p className="mb-4">
                The Red River&apos;s seasonal level changes affect groundwater across Selkirk. During spring melt and high-water periods, sump pumps work harder, weeping tile systems are under more pressure, and floor drains in older homes near the waterfront and Selkirk Park can be affected by groundwater infiltration. A sump pump that hasn&apos;t been tested since last spring is a real risk in Selkirk.
              </p>
              <p className="mb-4">
                Selkirk also has a significant marine and industrial business sector along the river — from the Marine Museum of Manitoba area to the commercial operations along River Road. Commercial floor drains, grease lines in food service operations, and industrial drainage systems all need periodic professional cleaning, and we service all of them, scheduling around your operating hours.
              </p>
              <p>
                East Selkirk and the newer residential developments on Easton Drive have more modern PVC infrastructure, but root intrusion from the area&apos;s abundant tree canopy is still a regular issue. We bring full-size equipment to Selkirk — the same hydro jetting and camera inspection capability we use in Winnipeg.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide">
            <h2 className="mb-2 text-center">Services in Selkirk</h2>
            <p className="text-center mb-8 text-sm" style={{ color: 'var(--muted)' }}>Full-service drain &amp; sewer for residential, commercial, and industrial properties in the R1A area</p>
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
            <h2 className="mb-6">Why Selkirk Residents &amp; Businesses Call Pro Drain Cleaning</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { title: 'Old Pipe Expertise', body: 'Clay tile and cast-iron lines in Selkirk\'s downtown core need a different approach than modern PVC. We\'ve cleared hundreds of older lines in Selkirk and know exactly what to expect.' },
                { title: 'Commercial & Industrial Ready', body: 'From the marine district to Manitoba Avenue restaurants, we service commercial floor drains, grease traps, and industrial drainage — scheduled around your hours.' },
                { title: 'Red River Flood Experience', body: 'We understand how Selkirk\'s Red River location affects groundwater and drainage. We\'ve handled every flood-related drain scenario this community sees.' },
                { title: 'Same-Day from Winnipeg', body: 'At 34 km north on Highway 9, Selkirk is a regular service run for us. We dispatch the same day for most calls and prioritize active emergencies.' },
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
              <h2 className="mb-3">Typical Response to Selkirk</h2>
              <p className="text-lg" style={{ color: 'var(--muted)' }}>
                Selkirk is 34 km north of Winnipeg on Highway 9 — we serve it regularly and can typically reach you the same day. Call{' '}
                <PhoneLink className="font-700" style={{ color: 'var(--orange-600)', fontWeight: 700 }}>+1 (204) 399-4413</PhoneLink>{' '}
                for an honest ETA.
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
            <h2 className="mb-8">Selkirk Drain &amp; Sewer Questions</h2>
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
            <h2 className="mb-3 text-center">Get Help in Selkirk</h2>
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
