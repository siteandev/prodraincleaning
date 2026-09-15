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

const HERO_IMAGE_SRC = '/assets/images/pro-drain-service-van-plumbing-drain-equipment-winnipeg.png';
const HERO_IMAGE_ALT =
  'Pro Drain Cleaning Limited service van equipped for plumbing and drain work in Winnipeg';

const tocItems = [
  { id: 'whats-covered', label: "What\'s Covered Under One Call" },
  { id: 'plumbing-vs-drain', label: "Why the Distinction Doesn\'t Matter to You" },
  { id: 'typical-visit', label: 'What a Typical Visit Looks Like' },
  { id: 'full-list', label: 'Full List of Services' },
  { id: 'areas-we-serve', label: 'Every Area We Serve' },
  { id: 'contact', label: 'Talk to Us Right Now' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const coveredItems = [
  {
    label: 'Drain and sewer line clearing',
    detail:
      'clogged fixtures, main line blockages, camera inspection, hydro jetting',
  },
  {
    label: 'General plumbing',
    detail: 'leak detection, fixture issues, water heater problems',
  },
  {
    label: 'Emergency response',
    detail: 'burst pipes, active backups, no-water situations',
  },
  {
    label: 'Preventive services',
    detail:
      'sump pump maintenance, backwater valve checks, scheduled drain maintenance',
  },
];

const faqs = [
  {
    q: 'Do I need to know if it\'s a plumbing or drain problem before calling?',
    a: "No — describe what\'s happening and we\'ll figure out the right fix.",
  },
  {
    q: 'Do you handle general plumbing, not just drains?',
    a: 'Yes — leaks, fixtures, water heaters, and more, alongside all drain and sewer work.',
  },
  {
    q: "What if my problem turns out to be outside what you do?",
    a: "You'll be told honestly, rather than sold work that isn't the right fix.",
  },
  {
    q: 'Is emergency service included for plumbing issues too, not just drains?',
    a: 'Yes — burst pipes and no-water situations are treated with the same urgency as drain emergencies.',
  },
  {
    q: 'Do you serve areas outside Winnipeg for general plumbing?',
    a: 'Yes — the full 100km radius.',
  },
];

const areaLinks: { name: string; href: string | null }[] = [
  { name: 'Winnipeg', href: '/areas/drain-cleaning-winnipeg' },
  { name: 'Selkirk', href: '/areas/drain-cleaning-selkirk' },
  { name: 'St. Norbert', href: '/areas/drain-cleaning-st-norbert' },
  { name: 'Headingley', href: '/areas/drain-cleaning-headingley' },
  { name: 'Oak Bluff', href: '/areas/drain-cleaning-oak-bluff' },
  { name: 'Lorette', href: '/areas/drain-cleaning-lorette' },
  { name: 'Niverville', href: '/areas/drain-cleaning-niverville' },
  { name: 'Steinbach', href: '/areas/drain-cleaning-steinbach' },
  { name: 'Stonewall', href: '/areas/drain-cleaning-stonewall' },
  { name: 'East St. Paul & West St. Paul', href: '/areas/drain-cleaning-east-west-st-paul' },
  { name: 'Île des Chênes', href: null },
  { name: 'St. Adolphe', href: null },
  { name: 'Oakbank', href: null },
  { name: 'Dugald', href: null },
  { name: 'Beausejour', href: null },
  { name: 'Teulon', href: null },
  { name: 'Gimli', href: null },
  { name: 'Portage la Prairie', href: null },
  { name: 'Morris', href: null },
  { name: 'Carman', href: null },
];

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline:
        'Plumbing & Drain Cleaning Services in Winnipeg — One Call, Both Covered',
      description:
        'Not sure if you need a plumber or a drain specialist? Pro Drain Cleaning Limited covers both across Winnipeg and every community within 100km. Call +1 (204) 399-4413.',
      url: 'https://prodraincleaning.ca/blog/plumbing-drain-cleaning-services-winnipeg',
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
        url: 'https://prodraincleaning.ca/assets/images/pro-drain-service-van-plumbing-drain-equipment-winnipeg.png',
        description: HERO_IMAGE_ALT,
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://prodraincleaning.ca/blog/plumbing-drain-cleaning-services-winnipeg',
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
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://prodraincleaning.ca/blog',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Plumbing & Drain Cleaning Services in Winnipeg — One Call, Both Covered',
          item: 'https://prodraincleaning.ca/blog/plumbing-drain-cleaning-services-winnipeg',
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

export default function PlumbingDrainCleaningServicesPage() {
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
                Plumbing &amp; Drain Cleaning Services in Winnipeg
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
                Plumbing
              </span>
              <span className="text-sm" style={{ color: 'var(--muted)' }}>7 min read</span>
            </div>

            <h1 className="mb-4">
              Plumbing &amp; Drain Cleaning Services in Winnipeg &mdash; One Call, Both Covered
            </h1>

            <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
              By <strong>Pro Drain Cleaning Limited</strong> &middot; Published September 10, 2026
            </p>

            {/* Hero image — exactly one */}
            <div className="rounded-xl overflow-hidden mb-8">
              <img
                src={HERO_IMAGE_SRC}
                alt={HERO_IMAGE_ALT}
                className="w-full object-cover"
                style={{ maxHeight: '420px' }}
                width={900}
                height={420}
              />
            </div>

            {/* Answer-first callout */}
            <div
              className="rounded-xl p-6 mb-8 border-l-4"
              style={{ backgroundColor: 'var(--white)', borderLeftColor: 'var(--brand-700)' }}
            >
              <p className="text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
                You don&apos;t need to figure out whether your problem is &ldquo;plumbing&rdquo; or &ldquo;drains&rdquo; before calling &mdash; Pro Drain Cleaning Limited handles both, so one call gets the right person and the right equipment either way. Serving Winnipeg, Selkirk, St. Norbert and every community within 100km, 24/7. Call or WhatsApp{' '}
                <PhoneLink className="font-700" style={{ fontWeight: 700, color: 'var(--brand-700)' }}>
                  {PHONE_DISPLAY}
                </PhoneLink>.
              </p>
            </div>

            {/* Call + WhatsApp button pair */}
            <div className="flex flex-col sm:flex-row gap-4 mb-2">
              <PhoneLink
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-700 text-white text-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--brand-700)', fontWeight: 700 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"
                    fill="currentColor"
                  />
                </svg>
                Call {PHONE_DISPLAY}
              </PhoneLink>
              <a
                href={PHONE_WA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-700 text-white text-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#25D366', fontWeight: 700 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* Main content with sticky TOC */}
        <div className="container-wide py-12">
          <div className="flex gap-10 items-start">
            {/* Article body */}
            <article className="flex-1 min-w-0 max-w-3xl">

              {/* What's Covered Under One Call quick-reference box */}
              <section id="whats-covered" className="mb-10">
                <div
                  className="rounded-xl border-2 overflow-hidden"
                  style={{ borderColor: 'var(--brand-700)' }}
                >
                  <div
                    className="px-6 py-4"
                    style={{ backgroundColor: 'var(--brand-700)' }}
                  >
                    <h2 className="text-xl font-700 text-white m-0" style={{ fontWeight: 700 }}>
                      What&apos;s Covered Under One Call
                    </h2>
                  </div>
                  <div className="px-6 py-5" style={{ backgroundColor: 'var(--brand-100)' }}>
                    <ul className="space-y-4">
                      {coveredItems.map((item, i) => (
                        <li key={i} className="flex gap-4 items-start">
                          <span
                            className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                            style={{ backgroundColor: 'var(--brand-700)' }}
                            aria-hidden="true"
                          />
                          <span style={{ color: 'var(--ink)' }}>
                            <strong>{item.label}</strong>
                            {item.detail ? ` — ${item.detail}` : ''}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Why the Plumbing-vs-Drain Distinction Doesn't Matter to You */}
              <section id="plumbing-vs-drain" className="mb-10">
                <h2>Why the Plumbing-vs-Drain Distinction Doesn&apos;t Matter to You</h2>
                <p className="leading-relaxed" style={{ color: 'var(--ink)' }}>
                  Most homeowners don&apos;t know &mdash; and shouldn&apos;t have to know &mdash; whether a slow drain, a weird smell, or a leak is technically a &ldquo;plumbing&rdquo; issue or a &ldquo;drain&rdquo; issue until someone&apos;s actually looked at it. Calling a company that only does one or the other means a real risk of being told &ldquo;that&apos;s not what we do&rdquo; after you&apos;ve already explained the problem. One call here means that risk doesn&apos;t exist.
                </p>
              </section>

              {/* What a Typical Visit Looks Like */}
              <section id="typical-visit" className="mb-10">
                <h2>What a Typical Visit Looks Like</h2>
                <p className="leading-relaxed" style={{ color: 'var(--ink)' }}>
                  You describe what&apos;s happening &mdash; you don&apos;t need the right terminology, just what you&apos;re noticing. A technician arrives with equipment for both plumbing and drain work, diagnoses the actual cause, and explains what&apos;s needed before doing anything. If it turns out to be something outside drain/plumbing scope entirely, you&apos;re told that honestly rather than being sold work that isn&apos;t the right fix.
                </p>
              </section>

              {/* Mid-article CTA box (orange accent) — after "one call covers both" section */}
              <div
                className="rounded-xl p-6 mb-10"
                style={{ backgroundColor: 'var(--accent-600)' }}
              >
                <p className="text-white font-700 text-lg mb-4" style={{ fontWeight: 700 }}>
                  Not sure if it&apos;s plumbing or drains? One call covers both.
                </p>
                <p className="text-white text-sm mb-5 opacity-90">
                  Pro Drain Cleaning Limited answers 24 hours a day, every day of the year. Call, WhatsApp, or fill the form below.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <PhoneLink
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-700 text-base transition-opacity hover:opacity-90"
                    style={{ backgroundColor: 'var(--white)', color: 'var(--accent-600)', fontWeight: 700 }}
                  >
                    Call {PHONE_DISPLAY}
                  </PhoneLink>
                  <a
                    href={PHONE_WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-700 text-base transition-opacity hover:opacity-90"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      color: 'var(--white)',
                      fontWeight: 700,
                      border: '2px solid rgba(255,255,255,0.5)',
                    }}
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Full List of Services */}
              <section id="full-list" className="mb-10">
                <h2>Full List of Services</h2>
                <p className="leading-relaxed" style={{ color: 'var(--ink)' }}>
                  This post covers the general &ldquo;who do I call&rdquo; question &mdash; for the complete list of every specific service offered, see the{' '}
                  <Link
                    href="/plumbing-services-winnipeg"
                    className="underline"
                    style={{ color: 'var(--brand-700)' }}
                  >
                    Plumbing Services in Winnipeg
                  </Link>{' '}
                  hub page.
                </p>
              </section>

              {/* Areas */}
              <section id="areas-we-serve" className="mb-10">
                <h2>Every Area We Serve</h2>
                <ul className="space-y-2 mb-4">
                  {areaLinks.map((area) => (
                    <li key={area.name} className="flex items-center gap-2" style={{ color: 'var(--ink)' }}>
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: 'var(--brand-700)' }}
                        aria-hidden="true"
                      />
                      {area.href ? (
                        <Link href={area.href} className="underline" style={{ color: 'var(--brand-700)' }}>
                          {area.name}
                          {area.name === 'Winnipeg' ? ' — every neighbourhood' : ''}
                        </Link>
                      ) : (
                        <span>{area.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  And every community within 100km of Winnipeg.
                </p>
              </section>

              {/* Contact section */}
              <section id="contact" className="mb-10">
                <h2>Talk to Us Right Now</h2>
                <p className="leading-relaxed mb-4" style={{ color: 'var(--ink)' }}>
                  Call or WhatsApp:{' '}
                  <PhoneLink className="font-700 underline" style={{ fontWeight: 700, color: 'var(--brand-700)' }}>
                    {PHONE_DISPLAY}
                  </PhoneLink>{' '}
                  &mdash; answered 24 hours a day, every day of the year
                </p>
                <p className="leading-relaxed mb-8" style={{ color: 'var(--ink)' }}>
                  Email:{' '}
                  <a href={`mailto:${EMAIL}`} className="underline" style={{ color: 'var(--brand-700)' }}>
                    {EMAIL}
                  </a>
                </p>

                {/* Inline contact form — hidden service = "General Plumbing & Drain Cleaning" */}
                <ContactForm
                  defaultService="General Plumbing & Drain Cleaning"
                  showServiceField={false}
                />
              </section>

              {/* FAQ */}
              <section id="faq" className="mb-10">
                <h2>Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <FAQItem key={i} faq={faq} index={i} />
                  ))}
                </div>
              </section>

              {/* Related Reading */}
              <section className="mb-10">
                <h2>Related Reading</h2>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/plumbing-services-winnipeg"
                      className="underline font-700"
                      style={{ color: 'var(--brand-700)', fontWeight: 700 }}
                    >
                      Plumbing Services in Winnipeg
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/emergency-plumber-winnipeg-24-7-guide"
                      className="underline font-700"
                      style={{ color: 'var(--brand-700)', fontWeight: 700 }}
                    >
                      Emergency Plumber in Winnipeg: 24/7 Guide
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/drain-cleaning-winnipeg"
                      className="underline font-700"
                      style={{ color: 'var(--brand-700)', fontWeight: 700 }}
                    >
                      Drain Cleaning Winnipeg and Surrounding Areas
                    </Link>
                  </li>
                </ul>
              </section>

              {/* Standard end-CTA */}
              <div
                className="rounded-xl p-7 border-2"
                style={{ borderColor: 'var(--brand-700)', backgroundColor: 'var(--brand-100)' }}
              >
                <p className="leading-relaxed mb-5" style={{ color: 'var(--ink)' }}>
                  Not sure if it&apos;s a plumbing issue or a drain issue? Doesn&apos;t matter &mdash; one call covers both. Pro Drain Cleaning Limited answers 24 hours a day, 7 days a week, across Winnipeg, Selkirk, St. Norbert and every community within 100 km. Call or WhatsApp{' '}
                  <PhoneLink className="font-700 underline" style={{ fontWeight: 700, color: 'var(--brand-700)' }}>
                    {PHONE_DISPLAY}
                  </PhoneLink>
                  , or email{' '}
                  <a href={`mailto:${EMAIL}`} className="underline" style={{ color: 'var(--brand-700)' }}>
                    {EMAIL}
                  </a>
                  . Upfront pricing before we start &mdash; always.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <PhoneLink
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-700 text-white text-base transition-opacity hover:opacity-90"
                    style={{ backgroundColor: 'var(--brand-700)', fontWeight: 700 }}
                  >
                    Call {PHONE_DISPLAY}
                  </PhoneLink>
                  <a
                    href={PHONE_WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-700 text-white text-base transition-opacity hover:opacity-90"
                    style={{ backgroundColor: '#25D366', fontWeight: 700 }}
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </article>

            {/* Sticky TOC — desktop only */}
            <aside
              className="hidden xl:block w-64 flex-shrink-0 sticky top-24 self-start"
              aria-label="Table of contents"
            >
              <div
                className="rounded-xl p-5 border"
                style={{ borderColor: 'var(--line)', backgroundColor: 'var(--white)' }}
              >
                <p
                  className="text-xs font-700 uppercase tracking-wider mb-4"
                  style={{ fontWeight: 700, color: 'var(--muted)' }}
                >
                  On this page
                </p>
                <nav>
                  <ul className="space-y-2">
                    {tocItems.map(({ id, label }) => (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          className="block text-sm py-1 px-2 rounded transition-colors hover:opacity-80"
                          style={{
                            color: activeSection === id ? 'var(--brand-700)' : 'var(--muted)',
                            backgroundColor:
                              activeSection === id ? 'var(--brand-100)' : 'transparent',
                            fontWeight: activeSection === id ? 700 : 400,
                          }}
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <FinalCTABand />
      <Footer />
      <MobileActionBar />
    </>
  );
}
