import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'About Pro Drain Cleaning — Winnipeg Drain Specialists',
  description: 'Meet Pro Drain Cleaning — locally owned drain and sewer specialists serving Winnipeg, Selkirk, St. Norbert and 100 km around. Answered 24/7 by a real person.',
  alternates: { canonical: `${baseUrl}/about` },
  openGraph: {
    title: 'About Pro Drain Cleaning — Winnipeg Drain Specialists',
    description: 'Locally owned drain and sewer specialists. 24/7 emergency service across Winnipeg, Selkirk & St. Norbert.',
    url: `${baseUrl}/about`,
    siteName: 'Pro Drain Cleaning',
    images: [{ url: 'https://prodraincleaning.ca/assets/images/jobs/og-pro-drain-cleaning-job.jpg', width: 1200, height: 630, alt: 'Pro Drain Cleaning technician on a Winnipeg drain job' }],
    locale: 'en_CA',
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
