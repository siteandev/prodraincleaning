import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import FinalCTABand from '@/components/FinalCTABand';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Compare Drain & Plumbing Options | Pro Drain Cleaning Limited — Winnipeg',
  description:
    'Side-by-side comparisons to help you make an informed decision about drain cleaning, plumbing, and sewer services in Winnipeg. Pro Drain Cleaning Limited.',
  alternates: { canonical: `${baseUrl}/compare` },
  openGraph: {
    title: 'Compare Drain & Plumbing Options | Pro Drain Cleaning Limited — Winnipeg',
    description:
      'Side-by-side comparisons to help you make an informed decision about drain cleaning, plumbing, and sewer services in Winnipeg.',
    url: `${baseUrl}/compare`,
    type: 'website',
  },
};

const comparePages = [
  {
    slug: 'local-drain-cleaner-vs-national-chain',
    title: 'Local Drain Cleaner vs. a National Chain — What Actually Matters',
    excerpt:
      'Dispatch, pricing structure, and accountability — the structural differences that matter most for a time-sensitive drain problem.',
    category: 'Company',
  },
  {
    slug: 'specialist-vs-general-plumber',
    title: 'Drain & Sewer Specialist vs. a General Plumber',
    excerpt:
      'When a drain specialist is the right call versus a general plumber — and how to tell which one your problem actually needs.',
    category: 'Services',
  },
  {
    slug: 'pro-drain-cleaning-vs-diy',
    title: 'Pro Drain Cleaning vs. DIY',
    excerpt:
      'What professional drain cleaning actually does that DIY methods cannot — and when it is worth the call.',
    category: 'Methods',
  },
  {
    slug: 'hydro-jetting-vs-rented-drain-machine',
    title: 'Hydro Jetting vs. a Rented Drain Machine',
    excerpt:
      'The difference between renting a drain snake and professional hydro jetting — and which one your line actually needs.',
    category: 'Methods',
  },
  {
    slug: 'camera-inspection-vs-guessing',
    title: 'Camera Inspection vs. Guessing',
    excerpt:
      'Why a sewer camera inspection gives you a real answer instead of a best guess — and when it is worth doing.',
    category: 'Services',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://prodraincleaning.ca' },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://prodraincleaning.ca/compare' },
  ],
};

export default function CompareIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AnnouncementBar />
      <Header />
      <main id="main-content">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-white border-b" style={{ borderColor: 'var(--line)' }}>
          <div className="container-wide py-3">
            <ol className="flex items-center gap-2 text-sm" style={{ color: 'var(--muted)' }}>
              <li>
                <Link href="/" className="hover:underline" style={{ color: 'var(--navy-700)' }}>
                  Home
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" style={{ color: 'var(--ink)' }}>
                Compare
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section-padding" style={{ backgroundColor: 'var(--brand-100)' }}>
          <div className="container-wide">
            <h1 className="mb-4">Compare Your Options</h1>
            <p className="text-lg max-w-2xl" style={{ color: 'var(--muted)' }}>
              Straightforward comparisons on drain cleaning, plumbing, and sewer service decisions — so you can
              make an informed call before you pick up the phone.
            </p>
          </div>
        </section>

        {/* Compare Pages Grid */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comparePages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/compare/${page.slug}`}
                  className="flex flex-col p-6 rounded-xl hover:shadow-md transition-shadow"
                  style={{
                    border: '1px solid var(--line)',
                    textDecoration: 'none',
                    backgroundColor: 'var(--white)',
                  }}
                >
                  <span
                    className="text-xs font-700 px-2.5 py-1 rounded-full self-start mb-4"
                    style={{
                      backgroundColor: 'var(--brand-100)',
                      color: 'var(--brand-700)',
                      fontWeight: 700,
                    }}
                  >
                    {page.category}
                  </span>
                  <h2
                    className="text-lg font-700 mb-3 leading-snug"
                    style={{ fontWeight: 700, color: 'var(--navy-900)' }}
                  >
                    {page.title}
                  </h2>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--muted)' }}>
                    {page.excerpt}
                  </p>
                  <span
                    className="mt-4 text-sm font-700 flex items-center gap-1"
                    style={{ color: 'var(--brand-700)', fontWeight: 700 }}
                  >
                    Read comparison
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M9 18l6-6-6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              ))}
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
