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
import DrainCleaningAccordion from '@/components/DrainCleaningAccordion';
import PhoneLink from '@/components/PhoneLink';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Drain Cleaning Winnipeg | 24/7 Clogged Drain Service | Pro Drain Cleaning',
  description: 'Fast drain cleaning in Winnipeg, Selkirk & St. Norbert. Kitchen sinks, tubs, showers, toilets, floor & main drains cleared 24/7. Snaking, hydro jetting & camera. Call +1 (204) 399-4413.',
  alternates: { canonical: `${baseUrl}/drain-cleaning-winnipeg` },
  openGraph: {
    title: 'Drain Cleaning Winnipeg | 24/7 Clogged Drain Service | Pro Drain Cleaning',
    description: 'Fast drain cleaning in Winnipeg, Selkirk & St. Norbert. Kitchen sinks, tubs, showers, toilets, floor & main drains cleared 24/7. Snaking, hydro jetting & camera. Call +1 (204) 399-4413.',
    url: `${baseUrl}/drain-cleaning-winnipeg`,
    siteName: 'Pro Drain Cleaning Limited',
    images: [{ url: "https://img.rocket.new/generatedImages/rocket_gen_img_1c62568f9-1765420266038.png", width: 1200, height: 630, alt: 'Drain cleaning service in Winnipeg' }],
    locale: 'en_CA',
    type: 'website'
  },
  robots: { index: true, follow: true }
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
  { '@type': 'ListItem', position: 2, name: 'Drain Cleaning Winnipeg', item: `${baseUrl}/drain-cleaning-winnipeg` }]

};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Drain Cleaning',
  provider: { '@id': `${baseUrl}/#business` },
  areaServed: [
  { '@type': 'City', name: 'Winnipeg' },
  { '@type': 'City', name: 'Selkirk' },
  { '@type': 'Place', name: 'St. Norbert' }],

  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Drain Cleaning Services',
    itemListElement: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kitchen Sink Drain Cleaning' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bathroom Sink Drain Cleaning' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bathtub Drain Cleaning' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shower Drain Cleaning' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Toilet Drain Unclogging' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Floor Drain Cleaning' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Laundry Drain Cleaning' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Main Sewer Line Cleaning' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sewer Backup Removal' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Clogged Drain Clearing' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drain Snaking (Auger Service)' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hydro Jet Drain Cleaning' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Camera Drain Inspections' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drain Odour Diagnosis' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Preventive Drain Maintenance' } }]

  }
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
  {
    '@type': 'Question',
    name: 'How much does drain cleaning cost in Winnipeg?',
    acceptedAnswer: { '@type': 'Answer', text: 'It depends on the drain, the access point, and the blockage type. A bathroom sink clog and a main sewer line with root intrusion are very different jobs. We give you a realistic range on the phone, then a firm flat price in writing on site before we start. You approve it first.' }
  },
  {
    '@type': 'Question',
    name: 'How do I know if it\'s one drain or my main line?',
    acceptedAnswer: { '@type': 'Answer', text: 'One slow fixture is almost always a branch line problem. Multiple fixtures backing up at the same time — especially on the lowest floor — is almost always the main sewer line. We diagnose which one you have before we start.' }
  },
  {
    '@type': 'Question',
    name: 'Is snaking or jetting better?',
    acceptedAnswer: { '@type': 'Answer', text: 'Snaking is right for a sudden single-fixture blockage: hair, soap, paper, a first root intrusion. Hydro jetting is right when the pipe wall itself is coated — grease lines, restaurant kitchens, repeat clogs, root regrowth. We\'ll tell you which one your line actually needs.' }
  },
  {
    '@type': 'Question',
    name: 'Will drain cleaning damage old Winnipeg clay pipe?',
    acceptedAnswer: { '@type': 'Answer', text: 'Not when done correctly. The key is using the right machine and cutting head for the pipe size and material. We camera-inspect first where there\'s any doubt about pipe condition, and we size our equipment to the pipe rather than forcing one machine down everything.' }
  },
  {
    '@type': 'Question',
    name: 'How often should drains be cleaned?',
    acceptedAnswer: { '@type': 'Answer', text: 'For a typical older Winnipeg home with root history, annually. For a restaurant or commercial kitchen, monthly to quarterly. For a newer home with no root issues, every 3–5 years. A camera inspection will tell you exactly what your line looks like and what frequency makes sense.' }
  },
  {
    '@type': 'Question',
    name: 'Do you clear drains at night and on weekends?',
    acceptedAnswer: { '@type': 'Answer', text: 'Yes — 24 hours a day, 7 days a week, 365 days a year. Call +1 (204) 399-4413 and a real technician answers, not an answering service.' }
  }]

};

export default function DrainCleaningWinnipegPage() {
  return (
    <>
      {/* LCP hero image preload — browser fetches it immediately before render */}
      <link
        rel="preload"
        as="image"
        href="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=480&fm=webp&q=50"
        imageSrcSet="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=480&fm=webp&q=50 480w, https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=768&fm=webp&q=55 768w, https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1280&fm=webp&q=60 1280w"
        imageSizes="100vw"
        fetchPriority="high"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <AnnouncementBar />
      <Header />

      <main id="main-content" className="mobile-pb">
        {/* Breadcrumb */}
        <nav className="container-wide py-3 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2" style={{ color: 'var(--muted)' }}>
            <li><Link href="/" className="hover:underline" style={{ color: 'var(--orange-600)' }}>Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" style={{ color: 'var(--ink)' }}>Drain Cleaning Winnipeg</li>
          </ol>
        </nav>

        {/* Hero */}
        <section
          className="relative w-full flex items-center overflow-hidden"
          style={{ minHeight: 'clamp(500px, 70vh, 760px)', background: 'linear-gradient(135deg, var(--brand-900) 0%, var(--brand-700) 100%)' }}
          aria-labelledby="drain-hero-h1">
          
          <picture className="absolute inset-0 z-0 opacity-20" aria-hidden="true">
            <source
              type="image/webp"
              srcSet="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=480&fm=webp&q=50 480w, https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=768&fm=webp&q=55 768w, https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1280&fm=webp&q=60 1280w"
              sizes="100vw" />
            
            <img
              src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1280&fm=webp&q=50"
              alt=""
              width={1280}
              height={720}
              loading="eager"
              fetchPriority="high"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
            
          </picture>
          <div className="absolute inset-0 z-0" style={{ background: 'rgba(11,79,108,0.82)' }} aria-hidden="true" />
          <div className="container-wide relative z-10 py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-700 uppercase tracking-widest mb-4" style={{ color: 'var(--orange-500)', fontWeight: 700, letterSpacing: '0.15em' }}>
                WINNIPEG · SELKIRK · ST. NORBERT · 100 KM AROUND — OPEN 24/7
              </p>
              <h1 id="drain-hero-h1" className="text-white mb-5" style={{ fontWeight: 800 }}>
                Drain Cleaning in Winnipeg — Every Drain in Your Home or Business, Cleared 24/7
              </h1>
              <p className="text-xl leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.88)' }}>
                If water is standing in your sink, pooling around your feet in the shower, or backing up out of a floor drain, you don&apos;t need a lecture about pipes — you need it gone. Same-day service across Winnipeg, Selkirk, St. Norbert and everywhere within 100 km, at any hour, with a flat price you approve before we start.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <PhoneLink className="btn-primary shimmer-btn text-base">
                  Call Now — +1 (204) 399-4413
                </PhoneLink>
                <Link href="https://wa.me/12043994413?text=Hi%2C%20I%20need%20drain%20cleaning" target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base">
                  WhatsApp Us
                </Link>
                <Link href="/book-online" className="btn-secondary-white text-base">
                  Book Online
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
            <h2 className="mb-5" style={{ color: 'var(--navy-900)' }}>Every Drain. Every Blockage. One Call.</h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
              Pro Drain Cleaning Limited clears every drain in a Winnipeg property: kitchen sinks, bathroom sinks, bathtubs, showers, toilets, laundry lines, floor drains and main sewer lines. We use the right tool for the pipe — a properly sized <Link href="/glossary#auger" style={{ color: 'var(--brand-700)' }}>auger</Link> for a sudden blockage, high-pressure <Link href="/glossary#hydro-jetting" style={{ color: 'var(--brand-700)' }}>hydro jetting</Link> when the pipe wall is coated, and an HD camera when the line keeps failing and nobody has explained why.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
              Same-day service across Winnipeg, Selkirk, St. Norbert and everywhere within 100 km, at any hour, with a flat price you approve before we start.
            </p>
          </div>
        </section>

        {/* Signs you need drain cleaning */}
        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="mb-6" style={{ color: 'var(--navy-900)' }}>Signs You Need Drain Cleaning Now</h2>
            <ul className="flex flex-col gap-3">
              {[
              'Water pools in the sink, tub or shower and drains slowly (or not at all)',
              'Gurgling from another fixture when you flush or run water',
              'Sewage or rotten-egg smell from a drain, especially a basement floor drain',
              'Water backing up out of a floor drain or a laundry standpipe',
              'Repeat clogs in the same fixture, weeks apart',
              'Fruit flies or drain flies clustering around a drain'].
              map((symptom, i) =>
              <li key={i} className="flex items-start gap-3 text-base" style={{ color: 'var(--ink)' }}>
                  <span className="trust-item-check mt-0.5 flex-shrink-0" aria-hidden="true">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  {symptom}
                </li>
              )}
            </ul>
          </div>
        </section>

        {/* THE SERVICE ACCORDION */}
        <DrainCleaningAccordion />

        {/* Our Process */}
        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-center mb-10" style={{ color: 'var(--navy-900)' }}>How We Clear Your Drain — From Call to Clear Line</h2>
            <p className="text-center mb-10" style={{ color: 'var(--muted)' }}>Most drain jobs are done in a single visit. Here&apos;s exactly what happens.</p>
            <div className="flex flex-col gap-5">
              {[
              { num: '01', title: 'You call or WhatsApp — 24/7', body: 'A real technician picks up. Tell us which fixtures are affected and how fast it happened. We give you a realistic price range before we roll a truck.' },
              { num: '02', title: 'We diagnose over the phone first', body: 'Which drains are affected tells us whether it\'s one fixture or your main line. You get a realistic price range before we arrive, not after.' },
              { num: '03', title: 'We arrive fully equipped', body: 'Same-day for most calls, priority dispatch for active flooding. Mats and boot covers go down before anything else does.' },
              { num: '04', title: 'On-site inspection & upfront quote', body: 'We locate the cleanout, assess the line, and give you a flat price in writing. You approve it before any work starts. No surprises on the invoice.' },
              { num: '05', title: 'We clear it — and verify it', body: 'The right machine for the pipe. Then a full-flow water test and, where useful, a camera pass so you can see the line is genuinely clear.' },
              { num: '06', title: 'Cleanup, video and a prevention plan', body: 'Everything wiped down, debris removed, camera footage sent to you, and honest advice on what to do so it doesn\'t come back.' }].
              map((step, i) =>
              <div key={i} className="flex gap-5 items-start">
                  <div className="step-number flex-shrink-0 w-16 text-center">{step.num}</div>
                  <div className="card-base p-6 flex-1">
                    <h3 className="font-700 text-lg mb-2" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>{step.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{step.body}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="text-center mt-8">
              <PhoneLink className="btn-primary shimmer-btn">
                Start Step 1 — Call +1 (204) 399-4413
              </PhoneLink>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding" style={{ backgroundColor: 'var(--navy-900)' }}>
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-center mb-10 text-white">Why Winnipeg Calls Pro Drain Cleaning</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
              { icon: null, title: 'Drains and sewers are all we do', body: 'Not a sideline between furnace calls. Specialists solve in one visit what generalists solve in three.' },
              { icon: null, title: 'Answered 24/7 by a real person', body: 'Nights, weekends, Christmas, −35°C. No answering service, no callback queue.' },
              { icon: null, title: 'Upfront flat-rate pricing', body: 'You approve the number before we start. No hourly meter running while we diagnose.' },
              { icon: null, title: 'Camera-verified results', body: 'We show you the cleared line on screen and send you the video. Proof, not promises.' }].
              map((tile, i) =>
              <div key={i} className="rounded-brand p-6" style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <span className="text-3xl block mb-3">{tile.icon}</span>
                  <h3 className="font-700 text-lg mb-2 text-white" style={{ fontWeight: 700 }}>{tile.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>{tile.body}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <ServiceAreaStrip />

        {/* FAQ */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-3xl mx-auto">
            <h2 className="text-center mb-10" style={{ color: 'var(--navy-900)' }}>Drain Cleaning Questions, Answered</h2>
            <div className="flex flex-col gap-3">
              {[
              {
                q: 'How much does drain cleaning cost in Winnipeg?',
                a: 'It depends on the drain, the access point, and the blockage type. A bathroom sink clog and a main sewer line with root intrusion are very different jobs. We give you a realistic range on the phone, then a firm flat price in writing on site before we start. You approve it first.'
              },
              {
                q: 'How do I know if it\'s one drain or my main line?',
                a: 'One slow fixture is almost always a branch line problem. Multiple fixtures backing up at the same time — especially on the lowest floor — is almost always the main sewer line. We diagnose which one you have before we start.'
              },
              {
                q: 'Is snaking or jetting better?',
                a: 'Snaking is right for a sudden single-fixture blockage: hair, soap, paper, a first root intrusion. Hydro jetting is right when the pipe wall itself is coated — grease lines, restaurant kitchens, repeat clogs, root regrowth. Snaking makes a hole through the blockage; jetting removes it and restores the pipe\'s full diameter. We\'ll tell you which one your line actually needs.'
              },
              {
                q: 'Will drain cleaning damage old Winnipeg clay pipe?',
                a: 'Not when done correctly. The key is using the right machine and cutting head for the pipe size and material. We camera-inspect first where there\'s any doubt about pipe condition, and we size our equipment to the pipe rather than forcing one machine down everything.'
              },
              {
                q: 'How often should drains be cleaned?',
                a: 'For a typical older Winnipeg home with root history, annually. For a restaurant or commercial kitchen, monthly to quarterly. For a newer home with no root issues, every 3–5 years. A camera inspection will tell you exactly what your line looks like and what frequency makes sense.'
              },
              {
                q: 'Do you clear drains at night and on weekends?',
                a: 'Yes — 24 hours a day, 7 days a week, 365 days a year. Call +1 (204) 399-4413 and a real technician answers, not an answering service.'
              }].
              map((item, i) =>
              <details key={i} className="accordion-item" style={{ listStyle: 'none' }}>
                  <summary className="accordion-trigger" style={{ cursor: 'pointer', listStyle: 'none' }}>
                    <span>{item.q}</span>
                    <svg className="accordion-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <div className="accordion-body" style={{ paddingTop: '0.75rem', paddingBottom: '1rem' }}>
                    <p style={{ color: 'var(--muted)' }}>{item.a}</p>
                  </div>
                </details>
              )}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="mb-8" style={{ color: 'var(--navy-900)' }}>Related Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {[
              { title: 'Main Sewer Line Unclogging', desc: 'Multiple fixtures backing up? Roots, grease and scale cleared with full-size machines and camera verification.', href: '/main-sewer-line-unclogging-winnipeg' },
              { title: 'Restaurant & Commercial Drains', desc: 'Grease lines, floor drains and kitchen drains cleaned overnight so you open on time.', href: '/restaurant-commercial-drain-cleaning-winnipeg' },
              { title: 'Plumbing Services Winnipeg', desc: 'Faucets, toilets, leak detection, sump pumps, backwater valves and frozen pipe thawing.', href: '/plumbing-services-winnipeg' },
              { title: '24/7 Emergency Service', desc: 'Sewage backup, flooding, or a drain that can\'t wait — we answer, dispatch immediately and fix it.', href: '/emergency-drain-plumbing-winnipeg' }].
              map((card, i) =>
              <Link key={i} href={card.href} className="card-base p-6 block hover:shadow-lg transition-shadow">
                  <h3 className="font-700 text-base mb-2" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>{card.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{card.desc}</p>
                  <span className="text-sm font-600 mt-3 inline-block" style={{ color: 'var(--orange-600)', fontWeight: 600 }}>Learn more →</span>
                </Link>
              )}
            </div>
            <div className="flex flex-wrap gap-3">
              <p className="text-sm font-600 w-full mb-1" style={{ color: 'var(--muted)', fontWeight: 600 }}>Related articles:</p>
              {[
              { label: 'Why Winnipeg Drains Block So Often', href: '/blog/why-winnipeg-drains-block' },
              { label: 'Drain Snaking vs Hydro Jetting', href: '/blog/drain-snaking-vs-hydro-jetting' },
              { label: 'How to Prevent Kitchen Drain Clogs', href: '/blog/prevent-kitchen-drain-clogs' }].
              map((link) =>
              <Link key={link.href} href={link.href} className="text-sm px-4 py-2 rounded-full border font-600 hover:bg-navy-900 hover:text-white transition-colors" style={{ borderColor: 'var(--navy-700)', color: 'var(--navy-700)', fontWeight: 600 }}>
                  {link.label}
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="drain-contact" className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-2xl mx-auto text-center">
            <h2 className="mb-3" style={{ color: 'var(--navy-900)' }}>Book Drain Cleaning in Winnipeg</h2>
            <p className="text-lg mb-8" style={{ color: 'var(--muted)' }}>
              Same-day available. If it&apos;s urgent — <PhoneLink className="font-700 underline" style={{ color: 'var(--orange-600)', fontWeight: 700 }}>call +1 (204) 399-4413</PhoneLink>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink className="btn-primary shimmer-btn">Call Now — +1 (204) 399-4413</PhoneLink>
              <Link href="https://wa.me/12043994413?text=Hi%2C%20I%20need%20drain%20cleaning" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp Us</Link>
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