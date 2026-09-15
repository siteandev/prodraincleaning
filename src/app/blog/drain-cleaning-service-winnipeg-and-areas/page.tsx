'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';

import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';
import ContactForm from '@/components/ContactForm';
import PhoneLink from '@/components/PhoneLink';

const PHONE_DISPLAY = '+1 (204) 399-4413';
const PHONE_WA = 'https://wa.me/12043994413';
const EMAIL = 'prodraincleaningcentre@gmail.com';

const HERO_IMAGE_SRC = '/assets/images/pro-drain-service-vehicle.png';
const HERO_IMAGE_ALT = 'Pro Drain Cleaning Limited technician providing drain cleaning service in Winnipeg';

const tocItems = [
  { id: 'what-a-drain-cleaning-service-includes', label: "What a Drain Cleaning Service Actually Includes" },
  { id: 'booking-to-invoice', label: 'Booking to Invoice — What to Expect' },
  { id: 'upfront-pricing', label: 'Upfront Pricing Before Any Work Starts' },
  { id: 'service-areas', label: 'Every Community We Serve Within 100km' },
  { id: 'contact', label: 'Talk to Us Right Now' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const serviceIncludes = [
  {
    label: 'A real diagnosis before any work',
    detail: 'we identify the actual cause — not just the symptom — before recommending anything',
  },
  {
    label: 'The right method for what is actually found',
    detail: 'snaking for a straightforward blockage, hydro jetting for grease or root intrusion, camera inspection for recurring or unclear problems',
  },
  {
    label: 'Upfront pricing in writing',
    detail: 'a firm price before we start, not an estimate that grows once we are already in your home',
  },
  {
    label: 'Verification the line is clear',
    detail: 'we confirm the drain is actually flowing before we leave, not just assume it is',
  },
  {
    label: 'A straight answer if something bigger is found',
    detail: 'if the camera shows a root intrusion or a collapsed section, you are told clearly — not sold unnecessary work',
  },
];

const faqs = [
  {
    q: 'What does a drain cleaning service actually include?',
    a: 'A diagnosis of the actual cause, the right clearing method for what is found (snaking, jetting, or camera inspection), upfront pricing before any work starts, and confirmation the line is clear before we leave.',
  },
  {
    q: 'How much does a drain cleaning service cost in Winnipeg?',
    a: 'It depends on which line and what is blocking it. We give a realistic range on the phone and a firm price in writing on site — no surprises after the work is done.',
  },
  {
    q: 'How quickly can you get to me?',
    a: 'Same-day for most Winnipeg calls. For active backups and emergencies, priority dispatch applies. Outlying communities depend on distance — we are upfront about that on the call.',
  },
  {
    q: 'Do you serve areas outside Winnipeg for drain cleaning services?',
    a: 'Yes — the full 100km radius, including Selkirk, St. Norbert, Steinbach, Niverville, Stonewall and every community in between.',
  },
  {
    q: 'Do I need to know what is wrong before I call?',
    a: 'No — describe what you are noticing (which fixtures, how slow, any smells or sounds) and we will identify the likely cause before quoting anything.',
  },
  {
    q: 'Is a camera inspection part of every drain cleaning service?',
    a: 'Not automatically — it is used where it is actually useful: to verify a line is genuinely clear after clearing, or to diagnose a recurring or unclear problem.',
  },
];

const towns = [
  { name: 'Winnipeg', slug: '/areas/drain-cleaning-winnipeg' },
  { name: 'Selkirk', slug: '/areas/drain-cleaning-selkirk' },
  { name: 'St. Norbert', slug: '/areas/drain-cleaning-st-norbert' },
  { name: 'Headingley', slug: '/areas/drain-cleaning-headingley' },
  { name: 'Oak Bluff', slug: '/areas/drain-cleaning-oak-bluff' },
  { name: 'Lorette', slug: '/areas/drain-cleaning-lorette' },
  { name: 'Niverville', slug: '/areas/drain-cleaning-niverville' },
  { name: 'Steinbach', slug: '/areas/drain-cleaning-steinbach' },
  { name: 'Stonewall', slug: '/areas/drain-cleaning-stonewall' },
  { name: 'East St. Paul & West St. Paul', slug: '/areas/drain-cleaning-east-west-st-paul' },
];

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: "Drain Cleaning Service in Winnipeg & Areas — What's Included, Start to Finish",
      description:
        "A real drain cleaning service in Winnipeg — booking to invoice, what's included, and upfront pricing. Serving every community within 100km. Call +1 (204) 399-4413.",
      url: 'https://prodraincleaning.ca/blog/drain-cleaning-service-winnipeg-and-areas',
      datePublished: '2026-09-10',
      dateModified: '2026-09-10',
      author: { '@type': 'Organization', name: 'Pro Drain Cleaning Limited' },
      publisher: {
        '@type': 'Organization',
        name: 'Pro Drain Cleaning Limited',
        url: 'https://prodraincleaning.ca',
      },
      image: {
        '@type': 'ImageObject',
        url: 'https://prodraincleaning.ca/assets/images/pro-drain-service-vehicle.png',
        description: HERO_IMAGE_ALT,
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://prodraincleaning.ca/blog/drain-cleaning-service-winnipeg-and-areas',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://prodraincleaning.ca' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://prodraincleaning.ca/blog' },
        {
          '@type': 'ListItem',
          position: 3,
          name: "Drain Cleaning Service in Winnipeg & Areas — What's Included, Start to Finish",
          item: 'https://prodraincleaning.ca/blog/drain-cleaning-service-winnipeg-and-areas',
        },
      ],
    },
  ],
};

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-xl overflow-hidden" style={{ borderColor: 'var(--line)' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
        style={{ backgroundColor: open ? 'var(--brand-100)' : 'var(--white)' }}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className="font-700 pr-4 text-base" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
          {faq.q}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform"
          style={{
            backgroundColor: 'var(--brand-700)',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
          aria-hidden="true"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2v8M2 6h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <div
          id={`faq-answer-${index}`}
          role="region"
          aria-labelledby={`faq-question-${index}`}
          className="px-5 pb-5 text-sm leading-relaxed"
          style={{ color: 'var(--muted)', borderTop: '1px solid var(--line)' }}
        >
          <p className="pt-4">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

export default function DrainCleaningServiceWinnipegPage() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <AnnouncementBar />
      <Header />
      <MobileActionBar />
      <main id="main-content">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-white border-b" style={{ borderColor: 'var(--line)' }}>
          <div className="container-wide py-3">
            <ol className="flex items-center gap-2 text-sm flex-wrap" style={{ color: 'var(--muted)' }}>
              <li>
                <Link href="/" className="hover:underline" style={{ color: 'var(--navy-700)' }}>
                  Home
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <Link href="/blog" className="hover:underline" style={{ color: 'var(--navy-700)' }}>
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="truncate max-w-xs" style={{ color: 'var(--ink)' }}>
                Drain Cleaning Service in Winnipeg &amp; Areas
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section-padding" style={{ backgroundColor: 'var(--brand-100)' }}>
          <div className="container-wide max-w-4xl">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span
                className="text-xs font-700 px-2.5 py-1 rounded-full"
                style={{ backgroundColor: 'var(--orange-100)', color: 'var(--accent-600)', fontWeight: 700 }}
              >
                Drain Cleaning
              </span>
              <span className="text-sm" style={{ color: 'var(--muted)' }}>
                6 min read
              </span>
            </div>

            <h1 className="mb-4">
              Drain Cleaning Service in Winnipeg &amp; Areas — What&apos;s Included, Start to Finish
            </h1>

            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
              By <strong>Pro Drain Cleaning Limited</strong> · Published September 10, 2026
            </p>

            {/* Hero image */}
            <div className="rounded-xl overflow-hidden mb-8">
              <img
                src={HERO_IMAGE_SRC}
                alt={HERO_IMAGE_ALT}
                width={1600}
                height={900}
                loading="eager"
                decoding="async"
                className="w-full object-cover"
                style={{ maxHeight: '500px', objectPosition: 'center' }}
              />
            </div>

            {/* Answer-first callout box */}
            <div
              className="rounded-xl p-6 mb-6"
              style={{
                backgroundColor: 'var(--brand-100)',
                border: '1px solid var(--brand-700)',
                borderLeft: '4px solid var(--brand-700)',
              }}
            >
              <p
                className="text-xs font-700 uppercase tracking-wider mb-3"
                style={{ color: 'var(--brand-700)', fontWeight: 700 }}
              >
                The Short Answer
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--ink)' }}>
                A drain cleaning service from Pro Drain Cleaning Limited covers the full job — diagnosis, the right
                clearing method for what is actually found, upfront pricing before any work starts, and confirmation
                the line is clear before we leave. Serving Winnipeg, Selkirk, St. Norbert and every community within
                100km, 24/7. Call or WhatsApp{' '}
                <PhoneLink
                  className="font-700 hover:underline"
                  style={{ color: 'var(--brand-700)', fontWeight: 700 }}
                >
                  {PHONE_DISPLAY}
                </PhoneLink>
                .
              </p>
            </div>

            {/* Call + WhatsApp button pair */}
            <div className="flex flex-col sm:flex-row gap-4 mb-2">
              <PhoneLink
                className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-700 text-white text-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--brand-700)', fontWeight: 700, textDecoration: 'none' }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.64 3.48 2 2 0 013.62 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006 6l.92-.92a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Call {PHONE_DISPLAY}
              </PhoneLink>
              <a
                href={PHONE_WA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-700 text-white text-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#25D366', fontWeight: 700, textDecoration: 'none' }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* Main content with sidebar TOC */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Article body */}
              <article className="lg:col-span-3">

                {/* What a Drain Cleaning Service Includes — quick-reference box */}
                <div id="what-a-drain-cleaning-service-includes" className="scroll-mt-24 mb-12">
                  <h2 className="mt-0 mb-4">What a Drain Cleaning Service Actually Includes</h2>
                  <div
                    className="rounded-xl p-6"
                    style={{ backgroundColor: 'var(--brand-100)', border: '1px solid var(--brand-700)' }}
                  >
                    <p
                      className="text-xs font-700 uppercase tracking-wider mb-4"
                      style={{ color: 'var(--brand-700)', fontWeight: 700 }}
                    >
                      What Every Service Call Covers
                    </p>
                    <ul className="flex flex-col gap-4">
                      {serviceIncludes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span
                            className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                            style={{ backgroundColor: 'var(--brand-700)' }}
                            aria-hidden="true"
                          >
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path
                                d="M2 5l2 2 4-4"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span className="leading-relaxed" style={{ color: 'var(--ink)' }}>
                            <strong style={{ color: 'var(--navy-900)' }}>{item.label}</strong>
                            {' — '}
                            {item.detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Booking to Invoice */}
                <div id="booking-to-invoice" className="scroll-mt-24 mb-12">
                  <h2 className="mb-4">Booking to Invoice — What to Expect</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    When you call, a real person answers — not a booking system or a callback queue. You describe what
                    you are noticing (which drain, how slow, any smells or sounds), and we give you a realistic
                    estimate on the call before anyone is dispatched. A technician arrives with equipment for the
                    likely cause, diagnoses the actual problem, and gives you a firm price in writing before starting
                    any work.
                  </p>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    The drain cleaning service itself — whether that is snaking a single fixture, hydro jetting a
                    grease-blocked kitchen line, or running a camera on a recurring problem — is done with the right
                    method for what is actually found, not the most expensive option by default. Before leaving, we
                    confirm the line is flowing properly. The invoice reflects exactly what was done, with no charges
                    added after the fact.
                  </p>
                </div>

                {/* Upfront Pricing */}
                <div id="upfront-pricing" className="scroll-mt-24 mb-12">
                  <h2 className="mb-4">Upfront Pricing Before Any Work Starts</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Every drain cleaning service call includes a firm price in writing before any work begins. The
                    price you are quoted on site is the price on the invoice — not an estimate that grows once we are
                    already in your home. If the diagnosis turns up something more involved than expected, you are
                    told clearly and given the choice before any additional work proceeds.
                  </p>
                  <p className="leading-relaxed" style={{ color: 'var(--ink)' }}>
                    We give a realistic range on the phone based on what you describe, and a firm number once we have
                    seen the actual problem. No surprises.
                  </p>
                </div>

                {/* Mid-article CTA box (orange accent) */}
                <div
                  className="rounded-xl p-7 mb-12"
                  style={{ backgroundColor: 'var(--accent-600)', color: 'white' }}
                >
                  <p className="text-xl font-700 mb-2" style={{ fontWeight: 700 }}>
                    Need a drain cleaning service in Winnipeg or surrounding areas?
                  </p>
                  <p className="mb-5 opacity-90">
                    Call or WhatsApp {PHONE_DISPLAY} — answered 24 hours a day, every day. Upfront pricing before we
                    start, always.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <PhoneLink
                      className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-700 transition-opacity hover:opacity-90"
                      style={{
                        backgroundColor: 'white',
                        color: 'var(--accent-600)',
                        fontWeight: 700,
                        textDecoration: 'none',
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.64 3.48 2 2 0 013.62 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006 6l.92-.92a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Call Now
                    </PhoneLink>
                    <a
                      href={PHONE_WA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-700 transition-opacity hover:opacity-90"
                      style={{
                        backgroundColor: '#25D366',
                        color: 'white',
                        fontWeight: 700,
                        textDecoration: 'none',
                      }}
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* Service Areas */}
                <div id="service-areas" className="scroll-mt-24 mb-12">
                  <h2 className="mb-4">Every Community We Serve Within 100km</h2>
                  <p className="mb-6 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Drain cleaning services are available across Winnipeg and every community within 100km — the same
                    service standard, the same upfront pricing, and the same 24/7 availability everywhere in the
                    coverage area.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    {towns.map((town) => (
                      <Link
                        key={town.slug}
                        href={town.slug}
                        className="flex items-center gap-2 p-3 rounded-lg border hover:border-brand-700 transition-colors"
                        style={{ borderColor: 'var(--line)', color: 'var(--brand-700)', textDecoration: 'none' }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                            fill="currentColor"
                          />
                        </svg>
                        <span className="font-700" style={{ fontWeight: 700 }}>
                          {town.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    Also serving: Ile des Chenes, St. Adolphe, Oakbank, Dugald, Beausejour, Teulon, Gimli, Portage la
                    Prairie, Morris, Carman and every community within 100km of Winnipeg.
                  </p>
                </div>

                {/* Contact section */}
                <div id="contact" className="scroll-mt-24 mb-12">
                  <h2 className="mb-4">Talk to Us Right Now</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Call or WhatsApp:{' '}
                    <PhoneLink className="font-700 hover:underline" style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                      {PHONE_DISPLAY}
                    </PhoneLink>{' '}
                    — answered 24 hours a day, every day of the year.
                  </p>
                  <p className="mb-8 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Email:{' '}
                    <a
                      href={`mailto:${EMAIL}`}
                      className="font-700 hover:underline"
                      style={{ color: 'var(--brand-700)', fontWeight: 700 }}
                    >
                      {EMAIL}
                    </a>
                  </p>
                  <ContactForm defaultService="Drain Cleaning Service" />
                </div>

                {/* FAQ */}
                <div id="faq" className="scroll-mt-24 mb-12">
                  <h2 className="mb-6">Frequently Asked Questions</h2>
                  <div className="flex flex-col gap-3">
                    {faqs.map((faq, i) => (
                      <FAQItem key={i} faq={faq} index={i} />
                    ))}
                  </div>
                </div>

                {/* Related Reading */}
                <div className="mb-12">
                  <h2 className="mb-4">Related Reading</h2>
                  <ul className="flex flex-col gap-2">
                    {[
                      {
                        href: '/blog/drain-cleaning-near-me-winnipeg',
                        label: 'Drain Cleaning Near Me — Winnipeg & Every Community Within 100km',
                      },
                      {
                        href: '/blog/drain-cleaning-company-near-me-response-time-winnipeg',
                        label: 'Drain Cleaning Company Near Me — How Fast Can They Actually Get to You?',
                      },
                      {
                        href: '/blog/24-hour-emergency-drain-cleaning-winnipeg',
                        label: '24 Hour Emergency Drain Cleaning in Winnipeg',
                      },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="font-700 hover:underline"
                          style={{ color: 'var(--brand-700)', fontWeight: 700 }}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              {/* Sticky sidebar TOC */}
              <aside className="hidden lg:block lg:col-span-1">
                <div className="sticky top-24">
                  <p
                    className="text-xs font-700 uppercase tracking-wider mb-3"
                    style={{ color: 'var(--muted)', fontWeight: 700 }}
                  >
                    On This Page
                  </p>
                  <nav aria-label="Table of contents">
                    <ul className="flex flex-col gap-1">
                      {tocItems.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="block text-sm py-1.5 px-3 rounded-lg transition-colors hover:underline"
                            style={{
                              color:
                                activeSection === item.id ? 'var(--brand-700)' : 'var(--muted)',
                              backgroundColor:
                                activeSection === item.id ? 'var(--brand-100)' : 'transparent',
                              fontWeight: activeSection === item.id ? 700 : 400,
                              textDecoration: 'none',
                            }}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Standard end-CTA */}
        <section
          className="section-padding"
          style={{ backgroundColor: 'var(--brand-900)', color: 'white' }}
        >
          <div className="container-wide max-w-3xl text-center">
            <h2 className="mb-4" style={{ color: 'white' }}>
              Need a drain cleaning service in Winnipeg or surrounding areas?
            </h2>
            <p className="mb-8 opacity-90 leading-relaxed">
              Pro Drain Cleaning Limited answers 24 hours a day, 7 days a week, across Winnipeg, Selkirk, St. Norbert
              and every community within 100km. Call or WhatsApp{' '}
              <PhoneLink className="font-700 hover:underline" style={{ color: 'var(--brand-500)', fontWeight: 700 }}>
                {PHONE_DISPLAY}
              </PhoneLink>
              , or email{' '}
              <a
                href={`mailto:${EMAIL}`}
                className="font-700 hover:underline"
                style={{ color: 'var(--brand-500)', fontWeight: 700 }}
              >
                {EMAIL}
              </a>
              . Upfront pricing before we start — always.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-700 text-white text-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--accent-600)', fontWeight: 700, textDecoration: 'none' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.64 3.48 2 2 0 013.62 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006 6l.92-.92a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Call {PHONE_DISPLAY}
              </PhoneLink>
              <a
                href={PHONE_WA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-700 text-white text-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#25D366', fontWeight: 700, textDecoration: 'none' }}
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
