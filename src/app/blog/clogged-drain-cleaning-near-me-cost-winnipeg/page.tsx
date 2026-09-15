'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import FinalCTABand from '@/components/FinalCTABand';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';
import ContactForm from '@/components/ContactForm';
import PhoneLink from '@/components/PhoneLink';

const PHONE_DISPLAY = '+1 (204) 399-4413';
const PHONE_WA = 'https://wa.me/12043994413';
const EMAIL = 'prodraincleaningcentre@gmail.com';

const HERO_IMAGE_SRC = '/assets/images/technician-upfront-pricing-homeowner-winnipeg.png';
const HERO_IMAGE_ALT =
  'Technician reviewing upfront pricing with a homeowner before clogged drain cleaning in Winnipeg';

const tocItems = [
  { id: 'what-changes-the-price', label: 'What Actually Changes the Price' },
  { id: 'no-phone-quote', label: 'Why Nobody Should Quote You a Price Sight Unseen' },
  { id: 'simple-vs-bigger', label: 'Simple Clog vs. Something Bigger' },
  { id: 'most-accurate-price', label: 'How to Get the Most Accurate Price, Fastest' },
  { id: 'whats-included', label: "What\'s Included in the Price You\'re Quoted" },
  { id: 'areas-we-serve', label: 'Every Area We Serve' },
  { id: 'contact', label: 'Talk to Us Right Now' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const faqs = [
  {
    q: 'Can you just give me a price over the phone?',
    a: 'A realistic range, yes — an exact confirmed price comes after the technician actually sees the clog, and it is approved by you before any work starts.',
  },
  {
    q: 'Will the price change once the technician is there?',
    a: 'Only if something changes what is needed (like discovering it is a main line issue, not a single fixture) — and you are always told and asked to approve before that happens.',
  },
  {
    q: 'Is a camera inspection extra?',
    a: "It is part of properly diagnosing a recurring or unclear blockage — confirmed as part of your upfront price before it is done.",
  },
  {
    q: 'What makes a clog more expensive to clear?',
    a: 'Location in the system, access difficulty, the clearing method needed, and the underlying cause — all confirmed honestly before work starts.',
  },
  {
    q: 'Do you charge more for clogs outside Winnipeg proper?',
    a: 'No separate pricing structure for the surrounding communities within the 100km service area.',
  },
  {
    q: 'What if the clog comes back after you clear it?',
    a: 'Call us — a clog that returns quickly is worth a proper look rather than repeated clearing of the same symptom.',
  },
];

const costFactors = [
  {
    label: 'Where the clog is',
    detail: 'a sink trap is a much smaller job than a main line blockage',
  },
  {
    label: 'How it is cleared',
    detail: 'a simple snake job costs less than hydro jetting or a camera inspection',
  },
  {
    label: 'Access',
    detail: 'an easy-to-reach cleanout costs less to work on than a blockage requiring more setup',
  },
  {
    label: 'What is causing it',
    detail: 'hair and soap scum clear faster than a root intrusion or a collapsed section',
  },
  {
    label: 'Whether it is recurring',
    detail: 'a first-time clog is usually simpler than a drain that keeps backing up',
  },
];

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Clogged Drain Cleaning Near Me: What It Actually Costs in Winnipeg',
      description:
        'What actually drives the cost of clogged drain cleaning up or down in Winnipeg, and how to get an honest upfront price. Call +1 (204) 399-4413, 24/7.',
      url: 'https://prodraincleaning.ca/blog/clogged-drain-cleaning-near-me-cost-winnipeg',
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
        url: 'https://prodraincleaning.ca/assets/images/technician-upfront-pricing-homeowner-winnipeg.png',
        description: HERO_IMAGE_ALT,
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://prodraincleaning.ca/blog/clogged-drain-cleaning-near-me-cost-winnipeg',
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
          name: 'Clogged Drain Cleaning Near Me: What It Actually Costs in Winnipeg',
          item: 'https://prodraincleaning.ca/blog/clogged-drain-cleaning-near-me-cost-winnipeg',
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

export default function CloggedDrainCostPage() {
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
                Clogged Drain Cleaning Near Me: What It Actually Costs in Winnipeg
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
              <span className="text-sm" style={{ color: 'var(--muted)' }}>7 min read</span>
            </div>

            <h1 className="mb-4">Clogged Drain Cleaning Near Me: What It Actually Costs in Winnipeg</h1>

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
                style={{ maxHeight: '500px', objectPosition: 'center top' }}
              />
            </div>

            {/* Answer-first callout box */}
            <div
              className="rounded-xl p-6 mb-6"
              style={{
                backgroundColor: 'var(--brand-100)',
                borderLeft: '4px solid var(--brand-700)',
                border: '1px solid var(--brand-700)',
              }}
            >
              <p
                className="text-xs font-700 uppercase tracking-wider mb-3"
                style={{ color: 'var(--brand-700)', fontWeight: 700 }}
              >
                The Short Answer
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--ink)' }}>
                There is no honest flat number anyone can give you without seeing the actual clog — cost depends on
                where the blockage is, how it is reached, and what is causing it. What you can count on: a clear,
                upfront price confirmed on the phone or at the door before any work starts, never a surprise after the
                fact. Pro Drain Cleaning Limited serves Winnipeg, Selkirk, St. Norbert and every community within
                100km. Call or WhatsApp{' '}
                <PhoneLink className="font-700 hover:underline" style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                  {PHONE_DISPLAY}
                </PhoneLink>{' '}
                for a real number based on your situation.
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

                {/* What Actually Changes the Price — quick-reference box */}
                <div id="what-changes-the-price" className="scroll-mt-24 mb-12">
                  <h2 className="mt-0 mb-4">What Actually Changes the Price</h2>
                  <div
                    className="rounded-xl p-6"
                    style={{ backgroundColor: 'var(--brand-100)', border: '1px solid var(--brand-700)' }}
                  >
                    <p
                      className="text-xs font-700 uppercase tracking-wider mb-4"
                      style={{ color: 'var(--brand-700)', fontWeight: 700 }}
                    >
                      Quick-Reference: Cost Factors
                    </p>
                    <ul className="flex flex-col gap-4">
                      {costFactors.map((factor, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span
                            className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                            style={{ backgroundColor: 'var(--brand-700)' }}
                            aria-hidden="true"
                          >
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <span className="leading-relaxed" style={{ color: 'var(--ink)' }}>
                            <strong style={{ color: 'var(--navy-900)' }}>{factor.label}</strong>
                            {' — '}
                            {factor.detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Why Nobody Should Quote You a Price Sight Unseen */}
                <div id="no-phone-quote" className="scroll-mt-24 mb-12">
                  <h2 className="mb-4">Why Nobody Should Quote You a Price Over the Phone Sight Unseen</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Any company that gives you an exact dollar figure before seeing the actual clog is guessing — and
                    guesses tend to turn into "surprise" charges once the technician is already there. The honest
                    approach is a realistic range on the initial call based on what you describe, followed by a
                    confirmed, approved price once the technician has actually looked at it — approved by you before
                    any work begins, every time.
                  </p>
                </div>

                {/* Simple Clog vs. Something Bigger */}
                <div id="simple-vs-bigger" className="scroll-mt-24 mb-12">
                  <h2 className="mb-4">Simple Clog vs. Something Bigger</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Most single-fixture clogs (one sink, one tub, one toilet) are the simpler, lower end of the job.
                    Costs move up when the blockage is in a main line, when a camera inspection is needed to see what
                    is actually happening, or when the fix requires hydro jetting instead of a standard snake. None of
                    that is guesswork on our end — a look with a camera before quoting anything beyond the basic call
                    tells us (and you) exactly what is involved.
                  </p>
                </div>

                {/* Mid-article CTA box (orange accent) — placed right after cost-factors section */}
                <div
                  className="rounded-xl p-7 mb-12"
                  style={{ backgroundColor: '#fff8f5', border: '2px solid var(--accent-600)' }}
                >
                  <p
                    className="text-sm font-700 uppercase tracking-wider mb-3"
                    style={{ color: 'var(--accent-600)', fontWeight: 700 }}
                  >
                    Ready to get a real number for your situation?
                  </p>
                  <p className="mb-5 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Call or WhatsApp now — a realistic range on the phone, a confirmed upfront price at the door,
                    approved by you before any work starts. Pro Drain Cleaning Limited answers 24/7.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <PhoneLink
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg font-700 text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: 'var(--accent-600)', fontWeight: 700, textDecoration: 'none' }}
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
                      Call {PHONE_DISPLAY}
                    </PhoneLink>
                    <a
                      href={PHONE_WA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg font-700 text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: '#25D366', fontWeight: 700, textDecoration: 'none' }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp Us
                    </a>
                    <a
                      href="#contact"
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg font-700 transition-opacity hover:opacity-90"
                      style={{
                        backgroundColor: 'transparent',
                        border: '2px solid var(--accent-600)',
                        color: 'var(--accent-600)',
                        fontWeight: 700,
                        textDecoration: 'none',
                      }}
                    >
                      Fill the Form
                    </a>
                  </div>
                </div>

                {/* How to Get the Most Accurate Price, Fastest */}
                <div id="most-accurate-price" className="scroll-mt-24 mb-12">
                  <h2 className="mb-4">How to Get the Most Accurate Price, Fastest</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Call and describe exactly what is happening: which fixture, how long it has been going on, whether
                    it has happened before, and whether more than one drain is affected. The more specific you can be,
                    the more accurate the phone estimate will be before a technician even arrives — and the final
                    number is always confirmed and approved with you on-site before work starts.
                  </p>
                </div>

                {/* What's Included in the Price You're Quoted */}
                <div id="whats-included" className="scroll-mt-24 mb-12">
                  <h2 className="mb-4">What is Included in the Price You are Quoted</h2>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    The diagnosis, the actual clearing work, and confirmation the drain is flowing properly afterward.
                    If something bigger turns up mid-job — a root intrusion, a collapsed section — you will be told
                    and asked to approve before any additional work happens, not billed for it afterward without
                    warning.
                  </p>
                </div>

                {/* Every Area We Serve */}
                <div id="areas-we-serve" className="scroll-mt-24 mb-12">
                  <h2 className="mb-4">Every Area We Serve for Clogged Drain Cleaning</h2>
                  <div
                    className="rounded-xl p-6"
                    style={{ backgroundColor: 'var(--brand-100)', border: '1px solid var(--brand-700)' }}
                  >
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { name: 'Winnipeg — every neighbourhood', slug: 'drain-cleaning-winnipeg' },
                        { name: 'Selkirk', slug: 'drain-cleaning-selkirk' },
                        { name: 'St. Norbert', slug: 'drain-cleaning-st-norbert' },
                        { name: 'Headingley', slug: 'drain-cleaning-headingley' },
                        { name: 'Oak Bluff', slug: 'drain-cleaning-oak-bluff' },
                        { name: 'Lorette', slug: 'drain-cleaning-lorette' },
                        { name: 'Niverville', slug: 'drain-cleaning-niverville' },
                        { name: 'Steinbach', slug: 'drain-cleaning-steinbach' },
                        { name: 'Stonewall', slug: 'drain-cleaning-stonewall' },
                        { name: 'East St. Paul & West St. Paul', slug: 'drain-cleaning-east-west-st-paul' },
                        { name: 'Ile des Chenes', slug: null },
                        { name: 'St. Adolphe', slug: null },
                        { name: 'Oakbank', slug: null },
                        { name: 'Dugald', slug: null },
                        { name: 'Beausejour', slug: null },
                        { name: 'Teulon', slug: null },
                        { name: 'Gimli', slug: null },
                        { name: 'Portage la Prairie', slug: null },
                        { name: 'Morris', slug: null },
                        { name: 'Carman', slug: null },
                      ].map((town, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span
                            className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: 'var(--brand-700)' }}
                            aria-hidden="true"
                          >
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                              <path d="M1.5 4l1.5 1.5 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          {town.slug ? (
                            <Link
                              href={`/areas/${town.slug}`}
                              className="hover:underline"
                              style={{ color: 'var(--brand-700)' }}
                            >
                              {town.name}
                            </Link>
                          ) : (
                            <span style={{ color: 'var(--ink)' }}>{town.name}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm" style={{ color: 'var(--muted)' }}>
                      And every community within 100km of Winnipeg.
                    </p>
                  </div>
                </div>

                {/* Inline Contact Form — before FAQ */}
                <div id="contact" className="scroll-mt-24 mb-12">
                  <h2 className="mb-2">Talk to Us Right Now</h2>
                  <p className="mb-6 leading-relaxed" style={{ color: 'var(--ink)' }}>
                    Call or WhatsApp:{' '}
                    <PhoneLink className="font-700 hover:underline" style={{ color: 'var(--brand-700)', fontWeight: 700 }}>
                      {PHONE_DISPLAY}
                    </PhoneLink>{' '}
                    — answered 24 hours a day, every day of the year. Email:{' '}
                    <a
                      href={`mailto:${EMAIL}`}
                      className="hover:underline"
                      style={{ color: 'var(--brand-700)' }}
                    >
                      {EMAIL}
                    </a>
                  </p>

                  {/* CTA buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mb-8">
                    <PhoneLink
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg font-700 text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: 'var(--brand-700)', fontWeight: 700, textDecoration: 'none' }}
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
                      Call {PHONE_DISPLAY}
                    </PhoneLink>
                    <a
                      href={PHONE_WA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg font-700 text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: '#25D366', fontWeight: 700, textDecoration: 'none' }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp Us
                    </a>
                  </div>

                  {/* Inline contact form */}
                  <div
                    className="rounded-xl p-6 sm:p-8"
                    style={{ backgroundColor: 'var(--brand-100)', border: '1px solid var(--brand-700)' }}
                  >
                    <h3 className="text-xl font-700 mb-2" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>
                      Send Us a Message
                    </h3>
                    <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
                      We respond fast — but if it is urgent, call or WhatsApp for the fastest response.
                    </p>
                    <ContactForm prefilledService="Clogged Drain Cleaning" />
                  </div>
                </div>

                {/* FAQ Accordion */}
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
                  <h2 className="mb-5">Related Reading</h2>
                  <div className="flex flex-col gap-3">
                    {[
                      {
                        href: '/blog/clogged-drain-winnipeg-what-to-do',
                        label: 'Clogged Drain Near Winnipeg and Areas',
                      },
                      {
                        href: '/blog/drain-cleaning-near-me-winnipeg',
                        label: 'Hydro Jetting Near Winnipeg',
                      },
                      {
                        href: '/blog/sewer-line-cleaning-near-me-winnipeg',
                        label: 'Sewer Camera Inspection in Winnipeg and Areas',
                      },
                    ].map((link, i) => (
                      <Link
                        key={i}
                        href={link.href}
                        className="flex items-center gap-3 p-4 rounded-xl hover:shadow-sm transition-shadow"
                        style={{
                          border: '1px solid var(--line)',
                          color: 'var(--brand-700)',
                          textDecoration: 'none',
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                          className="flex-shrink-0"
                        >
                          <path
                            d="M9 18l6-6-6-6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="font-600" style={{ fontWeight: 600 }}>
                          {link.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Standard end-CTA */}
                <div
                  className="rounded-xl p-7"
                  style={{ backgroundColor: 'var(--brand-900)', color: 'white' }}
                >
                  <p className="text-lg font-700 mb-3" style={{ fontWeight: 700 }}>
                    Want a real, honest number for your clogged drain — not a guess?
                  </p>
                  <p className="mb-5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    Pro Drain Cleaning Limited answers 24 hours a day, 7 days a week, across Winnipeg, Selkirk,
                    St. Norbert and every community within 100km. Upfront pricing before we start — always.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <PhoneLink
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg font-700 transition-opacity hover:opacity-90"
                      style={{ backgroundColor: 'var(--accent-600)', color: 'white', fontWeight: 700, textDecoration: 'none' }}
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
                      Call {PHONE_DISPLAY}
                    </PhoneLink>
                    <a
                      href={PHONE_WA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg font-700 text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: '#25D366', fontWeight: 700, textDecoration: 'none' }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp Us
                    </a>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg font-700 transition-opacity hover:opacity-90"
                      style={{
                        backgroundColor: 'transparent',
                        border: '2px solid rgba(255,255,255,0.5)',
                        color: 'white',
                        fontWeight: 700,
                        textDecoration: 'none',
                      }}
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              </article>

              {/* Sticky TOC sidebar */}
              <aside className="hidden lg:block lg:col-span-1">
                <div className="sticky top-24">
                  <div
                    className="rounded-xl p-5"
                    style={{ backgroundColor: 'var(--brand-100)', border: '1px solid var(--brand-700)' }}
                  >
                    <p
                      className="text-xs font-700 uppercase tracking-wider mb-4"
                      style={{ color: 'var(--brand-700)', fontWeight: 700 }}
                    >
                      On This Page
                    </p>
                    <nav aria-label="Table of contents">
                      <ul className="flex flex-col gap-1">
                        {tocItems.map((item) => (
                          <li key={item.id}>
                            <a
                              href={`#${item.id}`}
                              className="block text-sm py-1.5 px-2 rounded-lg transition-colors hover:underline"
                              style={{
                                color: activeSection === item.id ? 'var(--brand-700)' : 'var(--muted)',
                                fontWeight: activeSection === item.id ? 700 : 400,
                                backgroundColor:
                                  activeSection === item.id ? 'rgba(59,160,214,0.1)' : 'transparent',
                              }}
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>

                    {/* Sidebar CTA */}
                    <div className="mt-6 pt-5" style={{ borderTop: '1px solid var(--brand-700)' }}>
                      <p className="text-xs font-700 mb-3" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                        Need a real price now?
                      </p>
                      <PhoneLink
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-700 text-white text-sm transition-opacity hover:opacity-90 mb-2"
                        style={{ backgroundColor: 'var(--brand-700)', fontWeight: 700, textDecoration: 'none' }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-700 text-white text-sm transition-opacity hover:opacity-90"
                        style={{ backgroundColor: '#25D366', fontWeight: 700, textDecoration: 'none' }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
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
