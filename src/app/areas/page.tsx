import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import MobileActionBar from '@/components/MobileActionBar';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  title: 'Service Areas — Pro Drain Cleaning | Winnipeg & Surrounding Areas',
  description: 'Pro Drain Cleaning serves Winnipeg, Headingley, Selkirk, St. Norbert, Steinbach, Stonewall, and more.',
  alternates: { canonical: `${BASE_URL}/areas` },
  openGraph: {
    title: 'Service Areas — Pro Drain Cleaning',
    description: 'Drain cleaning and emergency plumbing across Winnipeg and surrounding Manitoba communities.',
    url: `${BASE_URL}/areas`,
    siteName: 'Pro Drain Cleaning',
    type: 'website',
  },
};

const serviceAreas = [
  { name: 'Winnipeg', slug: 'drain-cleaning-winnipeg', note: 'Primary service area' },
  { name: 'Headingley', slug: 'drain-cleaning-headingley', note: null },
  { name: 'Selkirk', slug: 'drain-cleaning-selkirk', note: null },
  { name: 'St. Norbert', slug: 'drain-cleaning-st-norbert', note: null },
  { name: 'Steinbach', slug: 'drain-cleaning-steinbach', note: null },
  { name: 'Stonewall', slug: 'drain-cleaning-stonewall', note: null },
  { name: 'Niverville', slug: 'drain-cleaning-niverville', note: null },
  { name: 'Oak Bluff', slug: 'drain-cleaning-oak-bluff', note: null },
  { name: 'Lorette', slug: 'drain-cleaning-lorette', note: null },
  { name: 'East & West St. Paul', slug: 'drain-cleaning-east-west-st-paul', note: null },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${BASE_URL}/areas` },
  ],
};

export default function AreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AnnouncementBar />
      <Header />
      <main style={{ backgroundColor: 'white', paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="container-wide">
          <nav aria-label="Breadcrumb" style={{ marginBottom: '1.5rem', fontSize: '0.875rem', color: '#64748b' }}>
            <Link href="/">Home</Link>
            {' / '}
            <span>Service Areas</span>
          </nav>

          <h1 style={{ color: 'var(--brand-900)', marginBottom: '0.75rem' }}>
            Areas We Serve
          </h1>
          <p style={{ maxWidth: '640px', color: '#475569', marginBottom: '3rem', fontSize: '1.125rem', lineHeight: 1.7 }}>
            Pro Drain Cleaning provides fast drain cleaning and 24/7 emergency plumbing across Winnipeg and the surrounding Manitoba communities listed below.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                style={{
                  display: 'block',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '0.75rem',
                  border: '1.5px solid var(--brand-200)',
                  color: 'var(--brand-900)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  transition: 'border-color 0.15s, background 0.15s',
                }}
                className="hover:bg-blue-50"
              >
                {area.name}
                {area.note && (
                  <span style={{ display: 'block', fontWeight: 400, fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' }}>
                    {area.note}
                  </span>
                )}
              </Link>
            ))}
          </div>

          <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: 'var(--brand-50)', borderRadius: '0.75rem', border: '1px solid var(--brand-200)' }}>
            <p style={{ color: 'var(--brand-800)', fontWeight: 600, marginBottom: '0.5rem' }}>Don&apos;t see your area?</p>
            <p style={{ color: '#475569', fontSize: '0.95rem' }}>
              We serve all of Winnipeg and communities within ~100 km. Call{' '}
              <Link href="tel:+12043994413" style={{ color: 'var(--accent-600)', fontWeight: 700 }}>
                +1 (204) 399-4413
              </Link>{' '}
              and we&apos;ll confirm same-day availability for your location.
            </p>
          </div>
        </div>
      </main>
      <MobileActionBar />
      <Footer />
    </>
  );
}
