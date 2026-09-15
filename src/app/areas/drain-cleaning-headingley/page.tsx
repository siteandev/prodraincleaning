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
const PAGE_URL = `${baseUrl}/areas/drain-cleaning-headingley`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Drain Cleaning Headingley MB | 24/7 Septic & Sewer Service | Pro Drain Cleaning',
  description:
    'Expert drain cleaning & sewer service in Headingley, MB (R4H). Clogged drains, sewer backups, septic service, tree root removal, hydro jetting & camera inspections — 24/7. Call +1 (204) 399-4413.',
  keywords: [
    'drain cleaning Headingley',
    'sewer cleaning Headingley Manitoba',
    'plumber Headingley MB',
    'emergency drain Headingley',
    'septic service Headingley',
    'hydro jetting Headingley',
    'sewer backup Headingley',
    'drain cleaning R4H',
    'Headingley plumbing',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Drain Cleaning Headingley MB | 24/7 Septic & Sewer Service | Pro Drain Cleaning',
    description:
      'Expert drain cleaning & sewer service in Headingley, MB (R4H). Clogged drains, sewer backups, septic service, tree root removal, hydro jetting & camera inspections — 24/7. Call +1 (204) 399-4413.',
    url: PAGE_URL,
    type: 'website',
  },
  other: {
    'geo.region': 'CA-MB',
    'geo.placename': 'Headingley, Manitoba',
    'geo.position': '49.88;-97.43',
    'ICBM': '49.88, -97.43',
  },
};

const nearbyAreas = [
  { name: 'Winnipeg', href: '/areas/drain-cleaning-winnipeg' },
  { name: 'Oak Bluff', href: '/areas/drain-cleaning-oak-bluff' },
  { name: 'Stonewall', href: '/areas/drain-cleaning-stonewall' },
];

const services = [
  { name: 'Main Sewer Line Clearing', href: '/main-sewer-line-unclogging-winnipeg#tree-root-removal' },
  { name: 'HD Camera Inspection', href: '/drain-cleaning-winnipeg#camera-drain-inspections' },
  { name: 'Hydro Jetting', href: '/drain-cleaning-winnipeg#hydro-jet-drain-cleaning' },
  { name: 'Iron Scale Removal', href: '/drain-cleaning-winnipeg#hydro-jet-drain-cleaning' },
  { name: 'Sump Pump Service', href: '/plumbing-services-winnipeg#sump-pump-installation-repair' },
  { name: 'Backwater Valve Installation', href: '/plumbing-services-winnipeg#backwater-valve-installation' },
  { name: 'Emergency Drain Response', href: '/emergency-drain-plumbing-winnipeg' },
];

const localSignals = [
  { label: 'Postal Code', value: 'R4H (Headingley)' },
  { label: 'Key Roads', value: 'Trans-Canada Hwy 1, Roblin Blvd, Headingley South Rd' },
  { label: 'Landmarks', value: 'Headingley Correctional Centre area, Assiniboine River, Hwy 1 corridor' },
  { label: 'Property Types', value: 'Acreage lots, private septic, well water, rural residential' },
  { label: 'Distance from Winnipeg', value: 'Just west of the Perimeter — same-day service' },
];

const faqs = [
  {
    q: 'Most Headingley properties are on private septic — do you service those drain lines?',
    a: 'Yes. We service the drain lines from the house to the septic tank, including the main line, branch lines, and any cleanouts. On Headingley acreage properties, this run can be 20 to 40 metres across a large lot — we camera-inspect the full length to confirm flow, identify any root intrusion or scale build-up, and locate any bellies (low spots where solids accumulate) before they cause a backup.',
  },
  {
    q: 'Headingley has iron-rich well water — how does that affect drains?',
    a: 'Iron-rich well water deposits iron scale on the inside of drain pipes over time, narrowing the effective diameter. On older Headingley properties along Headingley South Road and the Roblin Boulevard corridor, this scale build-up can be significant — slowing drainage noticeably and eventually causing backups. Hydro jetting removes iron scale effectively and restores the pipe\'s full flow capacity in a way that cabling alone cannot.',
  },
  {
    q: 'Are longer service runs on acreage properties a problem?',
    a: 'Longer runs mean more opportunity for root intrusion, scale build-up, and bellies (low spots where water pools and solids settle). We camera-inspect the full run so you know exactly what\'s in your line and where — which is especially useful on Headingley acreage properties where the line may run 30+ metres to the septic tank. We bring the same full-size equipment we use in Winnipeg.',
  },
  {
    q: 'How quickly can you reach Headingley?',
    a: 'Headingley is just west of the Winnipeg Perimeter on the Trans-Canada Highway — we can typically reach you the same day for most calls. For active emergencies, call +1 (204) 399-4413 and we\'ll give you an honest ETA.',
  },
  {
    q: 'What areas of Headingley do you cover?',
    a: 'We cover all of Headingley including Headingley South, the Highway 1 corridor, properties along Roblin Boulevard, and acreage lots throughout the Rural Municipality of Headingley. We also serve the transition zone between Headingley and west Winnipeg.',
  },
];

export default function HeadingleyLocationPage() {
  const serviceAreaSchema = generateServiceAreaSchema('headingley', 'Headingley', PAGE_URL);
  const breadcrumbSchema = generateBreadcrumbSchema('Headingley', PAGE_URL);

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${PAGE_URL}#webpage`,
    name: 'Drain Cleaning Headingley MB | Pro Drain Cleaning Limited',
    description:
      'Professional drain cleaning, septic line service, iron scale removal, hydro jetting and emergency plumbing for acreage and rural residential properties in Headingley, Manitoba. 24/7 service.',
    url: PAGE_URL,
    inLanguage: 'en-CA',
    isPartOf: { '@id': 'https://prodraincleaning.ca/#website' },
    about: {
      '@type': 'Place',
      name: 'Headingley',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Rural Municipality of Headingley', addressRegion: 'MB', addressCountry: 'CA' },
    },
    breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Drain Cleaning & Septic Line Service — Headingley MB',
    description:
      'Professional drain cleaning, septic system drain line service, iron scale removal, hydro jetting, sewer camera inspection, and emergency plumbing for acreage and rural residential properties in Headingley, Manitoba.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Pro Drain Cleaning Limited',
      telephone: '+12043994413',
      url: 'https://prodraincleaning.ca',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Headingley',
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
              <li aria-current="page" style={{ color: 'var(--ink)' }}>Drain Cleaning Headingley</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--navy-900) 0%, var(--navy-700) 100%)' }}>
          <div className="container-wide">
            <p className="text-xs font-700 uppercase tracking-widest mb-3" style={{ color: 'var(--orange-500)', letterSpacing: '0.12em' }}>
              HEADINGLEY · R4H · OPEN 24/7
            </p>
            <h1 className="text-white mb-5" style={{ maxWidth: '720px' }}>
              Drain Cleaning &amp; Septic Line Service in Headingley, Manitoba — 24/7
            </h1>
            <p className="text-lg mb-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '640px' }}>
              Headingley&apos;s acreage properties, private septic systems, and iron-rich well water create drain challenges that are different from the city. We bring the right equipment for longer runs, iron scale removal, and septic-side drain service — just west of the Perimeter, same-day response.
            </p>
            <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Serving: Headingley South · Hwy 1 corridor · Roblin Blvd · Acreage lots · R4H postal code
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <PhoneLink className="btn-primary shimmer-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.64 3.48 2 2 0 013.62 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006 6l.92-.92a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Call Now — +1 (204) 399-4413
              </PhoneLink>
              <Link href="https://wa.me/12043994413?text=Hi%2C%20I%20need%20drain%20service%20in%20Headingley" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp Us</Link>
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
            <h2 className="mb-5">Drain Problems We See in Headingley</h2>
            <div className="prose-body">
              <p className="mb-4">
                Headingley is a semi-rural municipality just west of the Winnipeg Perimeter on the Trans-Canada Highway, and its drain profile is fundamentally different from the city. The majority of Headingley properties — from the acreage lots along Headingley South Road to the residential developments near Roblin Boulevard — are on private septic systems and well water rather than municipal sewer and water. The line from the house to the septic tank can run 20 to 40 metres across a large lot, and that entire run needs to be clear and properly sloped to function.
              </p>
              <p className="mb-4">
                Headingley&apos;s well water is iron-rich, and iron deposits on the inside of drain pipes over time. On older Headingley properties, this scale build-up can be significant — narrowing the effective pipe diameter and slowing drainage noticeably. Hydro jetting removes iron scale effectively and restores full flow capacity in a way that cabling alone cannot. It&apos;s one of the most common services we perform in the R4H area.
              </p>
              <p className="mb-4">
                Larger lots also mean longer service runs, which give roots more opportunity to find joints and more distance over which bellies (low spots where water pools and solids accumulate) can develop. A camera inspection of the full run is the only way to know what&apos;s actually in a Headingley drain line — and it&apos;s the first thing we recommend for any property with a history of slow drains or backups.
              </p>
              <p>
                The newer subdivisions closer to the Perimeter have more modern PVC infrastructure, but the area&apos;s high water table near the Assiniboine River means sump systems still work hard. We service all of it — from the oldest clay-tile lines on the largest acreage lots to the newest PVC systems in the most recent developments.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide">
            <h2 className="mb-2 text-center">Services in Headingley</h2>
            <p className="text-center mb-8 text-sm" style={{ color: 'var(--muted)' }}>Septic-side drain service, iron scale removal &amp; full sewer work for acreage and rural residential in the R4H area</p>
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
            <h2 className="mb-6">Why Headingley Homeowners Call Pro Drain Cleaning</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { title: 'Septic-Side Drain Specialists', body: 'Most Headingley properties are on private septic. We service the full drain run from the house to the tank — not just the portion most city plumbers handle. Camera inspection included.' },
                { title: 'Iron Scale Removal', body: 'Headingley\'s iron-rich well water builds scale inside drain pipes over time. Our hydro jetting removes it completely, restoring full flow capacity in a way cabling cannot.' },
                { title: 'Long-Run Camera Inspection', body: 'Acreage drain lines can run 30+ metres. We camera-inspect the full length so you know exactly what\'s in your line — roots, bellies, scale, or cracks — before it becomes a backup.' },
                { title: 'Just West of the Perimeter', body: 'Headingley is a quick run from Winnipeg on the Trans-Canada. We dispatch same-day for most calls and prioritize active emergencies — no rural delay, no rural surcharge.' },
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
              <h2 className="mb-3">Typical Response to Headingley</h2>
              <p className="text-lg" style={{ color: 'var(--muted)' }}>
                Headingley is just west of the Perimeter on the Trans-Canada — same-day service for most calls. Call{' '}
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
            <h2 className="mb-8">Headingley Drain &amp; Sewer Questions</h2>
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
            <h2 className="mb-3 text-center">Get Help in Headingley</h2>
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
