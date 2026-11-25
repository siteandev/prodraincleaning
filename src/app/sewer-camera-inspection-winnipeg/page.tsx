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
import PhoneLink from '@/components/PhoneLink';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

const D = {
  "slug": "sewer-camera-inspection-winnipeg",
  "title": "Sewer Camera Inspection Winnipeg | HD Video You Keep",
  "description": "Sewer camera inspection in Winnipeg. HD video of your whole line, live on screen, footage sent to you. Buying a home or after a backup. Flat price upfront.",
  "crumb": "Sewer Camera Inspection Winnipeg",
  "serviceType": "Sewer Camera Inspection",
  "heroAlt": "Sewer camera inspection of a drain line in Winnipeg",
  "h1": "Sewer Camera Inspection in Winnipeg — See Your Whole Line, Keep the Footage",
  "heroText": "Our self-levelling HD camera travels your sewer line from the cleanout to the City connection and records everything it finds. You watch it live with the technician, and we send you the video.",
  "whatsapp": "Hi, I'd like a quote for a sewer camera inspection",
  "introH2": "Stop Guessing What Is Wrong With Your Sewer Line",
  "intro": [
    "The camera records root intrusion and where it enters, bellies holding standing water, offset or separated joints, cracks, corrosion, foreign objects and collapse. It is the inspection to book if you have had two backups in a year, if you are buying an older Winnipeg home, if your insurer wants documentation, or if a contractor quoted you an excavation and you want a second opinion first.",
    "In Winnipeg, homeowners own the sewer pipe from the building to the City main, so knowing its condition protects you before a backup or a purchase, not after."
  ],
  "seeAlso": [
    {
      "label": "Camera inspection (Glossary)",
      "href": "/glossary#camera-inspection"
    },
    {
      "label": "Main sewer line unclogging",
      "href": "/main-sewer-line-unclogging-winnipeg"
    },
    {
      "label": "Cast iron and clay pipes in older homes",
      "href": "/blog/cast-iron-clay-pipes-older-winnipeg-homes"
    }
  ],
  "whenH2": "When to Book a Sewer Camera Inspection",
  "when": [
    "You are buying a Winnipeg home, especially one more than 30 years old, and want to know what is under the lawn before you waive conditions",
    "You have had two or more backups in a year",
    "Your insurer wants documentation after a backup",
    "A contractor quoted an excavation and you want a second opinion first",
    "You are planning landscaping, an addition, a garage or a driveway near the sewer line"
  ],
  "calloutTitle": "Sewage backing up right now? Stop running water and call us.",
  "calloutBody": "We run 24/7 emergency service. A real person answers and we dispatch immediately.",
  "includedH2": "What Your Camera Inspection Includes",
  "included": [
    {
      "title": "Full-run HD camera survey",
      "body": "A self-levelling camera from your cleanout to the City connection."
    },
    {
      "title": "Live on-screen walkthrough",
      "body": "You watch with your technician and ask questions as we go."
    },
    {
      "title": "Recorded video sent to you",
      "body": "The footage is yours to keep, for your insurer, your inspector or a second opinion."
    },
    {
      "title": "Written summary and straight advice",
      "body": "Findings, how serious they are, and whether repair is actually needed."
    }
  ],
  "processH2": "How a Sewer Camera Inspection Works",
  "steps": [
    {
      "title": "Call and tell us why",
      "body": "Buying, repeat backups, or an insurer request. We tell you what the visit covers and give you a price range."
    },
    {
      "title": "Flat price in writing",
      "body": "You approve a firm number on site before we start."
    },
    {
      "title": "Camera the full run",
      "body": "We access the line through the cleanout and record the whole length."
    },
    {
      "title": "Walk through it live",
      "body": "We stop at anything that matters and show you exactly what it is."
    },
    {
      "title": "Footage and summary",
      "body": "You receive the video and a written summary of what we found."
    }
  ],
  "faqH2": "Sewer Camera Inspection Questions, Answered",
  "faqs": [
    {
      "q": "Do I need a sewer camera inspection before buying a house?",
      "a": "Yes, especially for any Winnipeg home more than 30 years old. An inspection before you waive conditions shows you exactly what is in the line: roots, bellies, cracks, or a line that is genuinely fine. You get the footage to keep."
    },
    {
      "q": "What can the camera find?",
      "a": "Root intrusion and where it enters, bellies holding standing water, offset or separated joints, cracks, corrosion, foreign objects and collapse."
    },
    {
      "q": "Do I get the video?",
      "a": "Yes. You watch it live with the technician and we send you the recording."
    },
    {
      "q": "How much does a sewer camera inspection cost in Winnipeg?",
      "a": "It depends on the access and the length of the line. We give you a realistic range on the phone and a firm flat price in writing on site before we start."
    },
    {
      "q": "Is a sewer backup my responsibility or the City's?",
      "a": "In Winnipeg, homeowners own the sewer pipe from their building to the City main, including the section under City property, and are responsible for maintaining it. The City is generally not responsible for a backup unless it was negligent."
    },
    {
      "q": "Can you come out tonight?",
      "a": "Yes. We run 24/7 emergency service. Call +1 (204) 399-4413 and a real person answers."
    }
  ],
  "related": [
    {
      "title": "Main Sewer Line Unclogging",
      "desc": "Roots cut, main line cleared and verified on camera. Multiple fixtures backing up at once points here.",
      "href": "/main-sewer-line-unclogging-winnipeg"
    },
    {
      "title": "Drain Cleaning Winnipeg",
      "desc": "Kitchen sinks, tubs, showers, toilets, floor drains and laundry lines cleared same-day.",
      "href": "/drain-cleaning-winnipeg"
    },
    {
      "title": "24/7 Emergency Service",
      "desc": "Sewage backup, flooding, or a drain that can't wait. We answer, dispatch and fix it.",
      "href": "/emergency-drain-plumbing-winnipeg"
    },
    {
      "title": "Plumbing Services Winnipeg",
      "desc": "Faucets, toilets, leak detection, sump pumps, backwater valves and frozen pipe thawing.",
      "href": "/plumbing-services-winnipeg"
    }
  ],
  "contactH2": "Book a Sewer Camera Inspection in Winnipeg"
};

const pageUrl = `${baseUrl}/${D.slug}`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: D.title,
  description: D.description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: D.title,
    description: D.description,
    url: pageUrl,
    siteName: 'Pro Drain Cleaning',
    images: [{ url: 'https://prodraincleaning.ca/assets/images/og/og-main-sewer-line.jpg', width: 1200, height: 630 }],
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
    { '@type': 'ListItem', position: 2, name: D.crumb, item: pageUrl },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: D.serviceType,
  provider: { '@id': `${baseUrl}/#business` },
  areaServed: [
    { '@type': 'City', name: 'Winnipeg' },
    { '@type': 'City', name: 'Selkirk' },
    { '@type': 'Place', name: 'St. Norbert' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: D.faqs.map((f: { q: string; a: string }) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/assets/images/jobs/job-under-slab-drain-line-480.webp"
        imageSrcSet="/assets/images/jobs/job-under-slab-drain-line-480.webp 480w, /assets/images/jobs/job-under-slab-drain-line-768.webp 768w, /assets/images/jobs/job-under-slab-drain-line-1200.webp 1200w"
        imageSizes="100vw"
        fetchPriority="high"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <AnnouncementBar />
      <Header />

      <main id="main-content" className="mobile-pb">
        <nav className="container-wide py-3 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2" style={{ color: 'var(--muted)' }}>
            <li><Link href="/" className="hover:underline" style={{ color: 'var(--orange-600)' }}>Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" style={{ color: 'var(--ink)' }}>{D.crumb}</li>
          </ol>
        </nav>

        <section
          className="relative w-full flex items-center overflow-hidden"
          style={{ minHeight: 'clamp(500px, 70vh, 760px)', background: 'linear-gradient(135deg, var(--brand-900) 0%, var(--brand-700) 100%)' }}
          aria-labelledby="page-hero-h1"
        >
          <picture className="absolute inset-0 z-0 opacity-20" aria-hidden="true">
            <source
              type="image/webp"
              srcSet="/assets/images/jobs/job-under-slab-drain-line-480.webp 480w, /assets/images/jobs/job-under-slab-drain-line-768.webp 768w, /assets/images/jobs/job-under-slab-drain-line-1200.webp 1200w"
              sizes="100vw"
            />
            <img
              src="/assets/images/jobs/job-under-slab-drain-line-1200.webp"
              alt={D.heroAlt}
              width={1280}
              height={720}
              loading="eager"
              fetchPriority="high"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            />
          </picture>
          <div className="absolute inset-0 z-0" style={{ background: 'rgba(11,79,108,0.84)' }} aria-hidden="true" />
          <div className="container-wide relative z-10 py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-700 uppercase tracking-widest mb-4" style={{ color: 'var(--orange-500)', fontWeight: 700, letterSpacing: '0.15em' }}>
                WINNIPEG · SELKIRK · ST. NORBERT · 100 KM AROUND — OPEN 24/7
              </p>
              <h1 id="page-hero-h1" className="text-white mb-5" style={{ fontWeight: 800 }}>{D.h1}</h1>
              <p className="text-xl leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.88)' }}>{D.heroText}</p>
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <PhoneLink className="btn-primary shimmer-btn text-base">Call Now — +1 (204) 399-4413</PhoneLink>
                <Link href={`https://wa.me/12043994413?text=${encodeURIComponent(D.whatsapp)}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base">WhatsApp Us</Link>
                <Link href="#page-contact" className="btn-secondary-white text-base">Get Estimate</Link>
              </div>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>Open 24/7 · Winnipeg + 100 km</p>
            </div>
          </div>
        </section>

        <TrustStrip />

        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="mb-5" style={{ color: 'var(--navy-900)' }}>{D.introH2}</h2>
            {D.intro.map((p: string, i: number) => (
              <p key={i} className="text-lg leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>{p}</p>
            ))}
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              {D.seeAlso.map((l: { label: string; href: string }, i: number) => (
                <span key={l.href}>{i > 0 ? ' · ' : ''}<Link href={l.href} style={{ color: 'var(--brand-700)' }}>{l.label}</Link></span>
              ))}
            </p>
          </div>
        </section>

        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="mb-6" style={{ color: 'var(--navy-900)' }}>{D.whenH2}</h2>
            <ul className="flex flex-col gap-3 mb-8">
              {D.when.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-base" style={{ color: 'var(--ink)' }}>
                  <span className="trust-item-check mt-0.5 flex-shrink-0" aria-hidden="true">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="rounded-brand p-6 text-center" style={{ backgroundColor: 'var(--orange-100)', border: '1.5px solid var(--orange-600)' }}>
              <p className="font-700 text-lg mb-3" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>{D.calloutTitle}</p>
              <p className="mb-4" style={{ color: 'var(--muted)' }}>{D.calloutBody}</p>
              <PhoneLink className="btn-primary shimmer-btn">Call +1 (204) 399-4413 Now</PhoneLink>
            </div>
          </div>
        </section>

        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-center mb-10" style={{ color: 'var(--navy-900)' }}>{D.includedH2}</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {D.included.map((c: { title: string; body: string }, i: number) => (
                <div key={i} className="card-base p-6">
                  <h3 className="font-700 text-lg mb-2" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>{c.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-center mb-10" style={{ color: 'var(--navy-900)' }}>{D.processH2}</h2>
            <div className="flex flex-col gap-5">
              {D.steps.map((s: { title: string; body: string }, i: number) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="step-number flex-shrink-0 w-16 text-center">{String(i + 1).padStart(2, '0')}</div>
                  <div className="card-base p-6 flex-1">
                    <h3 className="font-700 text-lg mb-2" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <PhoneLink className="btn-primary shimmer-btn">Book Now — Call +1 (204) 399-4413</PhoneLink>
            </div>
          </div>
        </section>

        <section className="section-padding" style={{ backgroundColor: 'var(--navy-900)' }}>
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="text-center mb-10 text-white">Why Winnipeg Calls Pro Drain Cleaning</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: 'Drains and sewers are all we do', body: 'Not a sideline between furnace calls. Specialists solve in one visit what generalists solve in three.' },
                { title: 'Answered 24/7 by a real person', body: 'Nights, weekends, Christmas, −35°C. No answering service, no callback queue.' },
                { title: 'Upfront flat-rate pricing', body: 'You approve the number before we start. No hourly meter running while we diagnose.' },
                { title: 'Camera-verified results', body: 'We show you the line on screen and send you the video. Proof, not promises.' },
              ].map((tile, i) => (
                <div key={i} className="rounded-brand p-6" style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <h3 className="font-700 text-lg mb-2 text-white" style={{ fontWeight: 700 }}>{tile.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>{tile.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceAreaStrip />

        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-3xl mx-auto">
            <h2 className="text-center mb-10" style={{ color: 'var(--navy-900)' }}>{D.faqH2}</h2>
            <div className="flex flex-col gap-3">
              {D.faqs.map((item: { q: string; a: string }, i: number) => (
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
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide max-w-4xl mx-auto">
            <h2 className="mb-8" style={{ color: 'var(--navy-900)' }}>Related Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {D.related.map((card: { title: string; desc: string; href: string }, i: number) => (
                <Link key={i} href={card.href} className="card-base p-6 block hover:shadow-lg transition-shadow">
                  <h3 className="font-700 text-base mb-2" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>{card.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{card.desc}</p>
                  <span className="text-sm font-600 mt-3 inline-block" style={{ color: 'var(--orange-600)', fontWeight: 600 }}>Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="page-contact" className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-2xl mx-auto text-center">
            <h2 className="mb-3" style={{ color: 'var(--navy-900)' }}>{D.contactH2}</h2>
            <p className="text-lg mb-8" style={{ color: 'var(--muted)' }}>
              Need us now? <PhoneLink className="font-700 underline" style={{ color: 'var(--orange-600)', fontWeight: 700 }}>Call +1 (204) 399-4413</PhoneLink>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink className="btn-primary shimmer-btn">Call Now — +1 (204) 399-4413</PhoneLink>
              <Link href={`https://wa.me/12043994413?text=${encodeURIComponent(D.whatsapp)}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp Us</Link>
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
