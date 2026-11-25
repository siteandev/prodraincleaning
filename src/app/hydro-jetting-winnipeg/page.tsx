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
  "slug": "hydro-jetting-winnipeg",
  "title": "Hydro Jetting Winnipeg | Sewer & Drain Jetting 24/7",
  "description": "Hydro jetting in Winnipeg for sewer lines and drains. Up to 4,000 PSI scours grease, scale and roots off the pipe wall. Camera-checked. Flat price upfront.",
  "crumb": "Hydro Jetting Winnipeg",
  "serviceType": "Hydro Jetting",
  "heroAlt": "Hydro jetting a sewer and drain line in Winnipeg",
  "h1": "Hydro Jetting in Winnipeg — Sewer and Drain Lines Scoured Back to Bare Pipe",
  "heroText": "A snake bores a hole through a blockage. Hydro jetting scours the whole pipe wall with up to 4,000 PSI and flushes the debris out of your system, so the line works at its real capacity again. We camera the line before and after so you can see the result.",
  "whatsapp": "Hi, I'd like a quote for hydro jetting",
  "introH2": "Why Hydro Jetting Beats Snaking When a Line Keeps Blocking",
  "intro": [
    "Cutting a hole through a root mass or a grease plug gets water moving tonight. If the pipe wall is still coated, the line narrows again and you are calling us back. Hydro jetting uses up to 4,000 PSI through a rotating nozzle to scour grease, scale, sludge and remaining root hair off the entire pipe wall, then flushes it downstream, out of your system.",
    "On older Winnipeg sewers we camera-inspect first. A line with a collapse or a serious structural break needs a different plan than a line that is simply dirty. Where the pipe is sound, jetting is the most effective thing you can do for a main sewer line or a repeat-clog drain."
  ],
  "seeAlso": [
    {
      "label": "Hydro jetting (Glossary)",
      "href": "/glossary#hydro-jetting"
    },
    {
      "label": "Main sewer line unclogging",
      "href": "/main-sewer-line-unclogging-winnipeg"
    },
    {
      "label": "Drain cleaning",
      "href": "/drain-cleaning-winnipeg"
    }
  ],
  "whenH2": "When Hydro Jetting Is the Right Call",
  "when": [
    "The same drain or main line blocks again every few months",
    "A sewer line coated with grease, scale or sludge that a snake only punches through",
    "Roots cut back before, with root hair still lining the pipe",
    "Restaurant, rental or multi-unit lines that need scheduled maintenance",
    "You want the line restored to full diameter, not just a channel through the blockage"
  ],
  "calloutTitle": "Sewage backing up right now? Stop running water and call us.",
  "calloutBody": "We run 24/7 emergency service. A real person answers and we dispatch immediately.",
  "includedH2": "What a Hydro Jetting Visit Includes",
  "included": [
    {
      "title": "Pre-jet camera assessment",
      "body": "We check the pipe condition first, so jetting is only used where the pipe can take it."
    },
    {
      "title": "Up to 4,000 PSI rotating-nozzle cleaning",
      "body": "The full run is scoured, not just the blockage point."
    },
    {
      "title": "Grease, scale, sludge and root-hair removal",
      "body": "The wall is taken back to bare pipe and the debris is flushed clear of the system."
    },
    {
      "title": "Post-jet camera verification",
      "body": "You see the line open at full diameter on screen, and you get the footage."
    }
  ],
  "processH2": "How a Hydro Jetting Job Works",
  "steps": [
    {
      "title": "Call and describe the problem",
      "body": "Tell us which drains are affected and how often it happens. We give you a realistic price range on the phone."
    },
    {
      "title": "Camera first",
      "body": "We push the camera to see the real condition of the line before any pressure goes in."
    },
    {
      "title": "Flat price in writing",
      "body": "You approve a firm number on site before we start. No hourly meter."
    },
    {
      "title": "Jet the full run",
      "body": "Rotating-nozzle jetting of the whole line, then a camera pass to verify it is clean."
    },
    {
      "title": "Footage and honest advice",
      "body": "You get the recording and our straight view on how often the line needs maintenance."
    }
  ],
  "faqH2": "Hydro Jetting Questions, Answered",
  "faqs": [
    {
      "q": "What is hydro jetting?",
      "a": "Hydro jetting cleans a drain or sewer line with a high-pressure water stream, up to 4,000 PSI, through a rotating nozzle. It scours the full pipe wall and flushes debris out of the system, instead of boring a single channel through a blockage."
    },
    {
      "q": "Is hydro jetting better than snaking?",
      "a": "For a line that keeps blocking, usually yes. A snake clears a path through the blockage. Jetting removes the grease, scale and root hair coating the wall, which is why lines on a jetting schedule stop having emergencies."
    },
    {
      "q": "Is hydro jetting safe for old pipes?",
      "a": "Where the pipe is sound, yes. On older Winnipeg sewers we camera-inspect first, because a collapsed or badly broken line needs a different plan than a line that is simply dirty."
    },
    {
      "q": "How much does hydro jetting cost in Winnipeg?",
      "a": "It depends on the access, the length of the line and what is in it. We give you a realistic range on the phone and a firm flat price in writing on site before we start."
    },
    {
      "q": "Do you hydro jet main sewer lines and floor drains?",
      "a": "Yes. We jet main sewer lines, floor drains and other drain lines, including restaurant and commercial lines."
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
  "contactH2": "Book Hydro Jetting in Winnipeg"
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
