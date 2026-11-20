import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import MobileActionBar from '@/components/MobileActionBar';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  title: 'Drain Cleaning Service Areas Near Winnipeg, MB',
  description: 'Drain cleaning and emergency plumbing in Winnipeg, Selkirk, Headingley, St. Norbert, Steinbach, Stonewall and every community within 100 km. 24/7.',
  alternates: { canonical: `${BASE_URL}/areas` },
  openGraph: {
    title: 'Service Areas — Pro Drain Cleaning',
    description: 'Drain cleaning and emergency plumbing across Winnipeg and surrounding Manitoba communities.',
    url: `${BASE_URL}/areas`,
    siteName: 'Pro Drain Cleaning',
    type: 'website',
    images: [{ url: '/assets/images/og/og-default.jpg', width: 1200, height: 630, alt: 'Pro Drain Cleaning — 24/7 drain and sewer service in Winnipeg' }],
  },
};

const serviceAreas = [
  { name: 'Winnipeg', slug: 'drain-cleaning-winnipeg', note: 'Home base. Every neighbourhood, inside and outside the Perimeter.' },
  { name: 'Headingley', slug: 'drain-cleaning-headingley', note: 'Just west of the Perimeter along the Trans-Canada.' },
  { name: 'Selkirk', slug: 'drain-cleaning-selkirk', note: 'About 35 km north of Winnipeg on the Red River.' },
  { name: 'St. Norbert', slug: 'drain-cleaning-st-norbert', note: 'Winnipeg\'s south end, where the La Salle meets the Red.' },
  { name: 'Steinbach', slug: 'drain-cleaning-steinbach', note: 'About 60 km southeast of Winnipeg.' },
  { name: 'Stonewall', slug: 'drain-cleaning-stonewall', note: 'About 30 km north of Winnipeg.' },
  { name: 'Niverville', slug: 'drain-cleaning-niverville', note: 'About 35 km south of Winnipeg.' },
  { name: 'Oak Bluff', slug: 'drain-cleaning-oak-bluff', note: 'Just southwest of the Perimeter.' },
  { name: 'Lorette', slug: 'drain-cleaning-lorette', note: 'About 20 km southeast of Winnipeg.' },
  { name: 'East & West St. Paul', slug: 'drain-cleaning-east-west-st-paul', note: 'Bordering Winnipeg\'s north edge on both sides of the Red.' },
];

const otherTowns = [
  'Île des Chênes', 'St. Adolphe', 'Oakbank', 'Dugald', 'Beausejour',
  'Teulon', 'Gimli', 'Portage la Prairie', 'Morris', 'Carman',
];

const areaFaqs = [
  {
    q: 'Do you do drain cleaning outside Winnipeg?',
    a: 'Yes. Pro Drain Cleaning covers Winnipeg and every community within about 100 km, including Selkirk, Steinbach, Stonewall, Niverville, Headingley, Oak Bluff, Lorette, East and West St. Paul, Gimli and Portage la Prairie.',
  },
  {
    q: 'Is emergency drain service 24/7 outside the city too?',
    a: 'Yes. The phone line is answered 24/7, including nights, weekends and holidays, for every town on this page, not just inside the Perimeter.',
  },
  {
    q: 'Does it cost more if I live outside Winnipeg?',
    a: 'The price for your job is confirmed on the call, before anyone drives out and before any work starts. You approve it first, so there are no surprises on the invoice.',
  },
  {
    q: 'How do I check that you cover my address?',
    a: 'Call +1 (204) 399-4413 or send a WhatsApp message with your town or postal code. We confirm coverage and same-day availability on the spot.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: areaFaqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const areaListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Pro Drain Cleaning service areas',
  itemListElement: serviceAreas.map((a, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `Drain cleaning in ${a.name}`,
    url: a.slug === 'drain-cleaning-winnipeg' ? BASE_URL : `${BASE_URL}/areas/${a.slug}`,
  })),
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaListSchema) }}
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
            Drain Cleaning Service Areas Around Winnipeg
          </h1>
          <p style={{ maxWidth: '680px', color: '#475569', marginBottom: '1rem', fontSize: '1.125rem', lineHeight: 1.7 }}>
            Pro Drain Cleaning clears blocked drains and sewer lines across Winnipeg and every Manitoba community within about 100 km of the city, 24 hours a day. Pick your town below for local details, or call{' '}
            <Link href="tel:+12043994413" style={{ color: 'var(--accent-600)', fontWeight: 700 }}>+1 (204) 399-4413</Link>{' '}
            and we&apos;ll confirm same-day availability.
          </p>
          <p style={{ maxWidth: '680px', color: '#475569', marginBottom: '3rem', fontSize: '1rem', lineHeight: 1.7 }}>
            The same work is available in every town: <Link href="/" style={{ color: 'var(--brand-700)', fontWeight: 600 }}>drain cleaning</Link>,{' '}
            <Link href="/main-sewer-line-unclogging-winnipeg" style={{ color: 'var(--brand-700)', fontWeight: 600 }}>main sewer line unclogging</Link>,{' '}
            <Link href="/emergency-drain-plumbing-winnipeg" style={{ color: 'var(--brand-700)', fontWeight: 600 }}>24/7 emergency drain service</Link>,{' '}
            <Link href="/sump-pump-repair-winnipeg" style={{ color: 'var(--brand-700)', fontWeight: 600 }}>sump pump repair</Link> and{' '}
            <Link href="/restaurant-commercial-drain-cleaning-winnipeg" style={{ color: 'var(--brand-700)', fontWeight: 600 }}>commercial drain cleaning</Link>.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={area.slug === 'drain-cleaning-winnipeg' ? '/' : `/areas/${area.slug}`}
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
                Drain cleaning in {area.name}
                {area.note && (
                  <span style={{ display: 'block', fontWeight: 400, fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' }}>
                    {area.note}
                  </span>
                )}
              </Link>
            ))}
          </div>

          <h2 style={{ color: 'var(--brand-900)', marginTop: '3.5rem', marginBottom: '0.75rem', fontSize: '1.5rem' }}>
            Other towns we cover
          </h2>
          <p style={{ maxWidth: '680px', color: '#475569', lineHeight: 1.7 }}>
            These communities don&apos;t have their own page yet, but they&apos;re inside our 100 km service area and get the same 24/7 service: {otherTowns.join(', ')}.
          </p>

          <h2 style={{ color: 'var(--brand-900)', marginTop: '3.5rem', marginBottom: '1.25rem', fontSize: '1.5rem' }}>
            Service area questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '760px' }}>
            {areaFaqs.map((f) => (
              <div key={f.q}>
                <h3 style={{ color: 'var(--brand-900)', fontSize: '1.0625rem', fontWeight: 700, marginBottom: '0.35rem' }}>{f.q}</h3>
                <p style={{ color: '#475569', lineHeight: 1.7 }}>{f.a}</p>
              </div>
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
