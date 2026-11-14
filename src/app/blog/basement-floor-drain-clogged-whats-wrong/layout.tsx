import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Basement Floor Drain Clogged in Winnipeg? Causes & Fixes',
  description:
    'Basement floor drain backing up? Here\'s what causes it, what it means, and when to call for help. Winnipeg service. Call +1 (204) 399-4413.',
  alternates: {
    canonical: `${baseUrl}/blog/basement-floor-drain-clogged-whats-wrong`,
  },
  openGraph: {
    title: 'Basement Floor Drain Clogged in Winnipeg? Causes & Fixes',
    description:
      'Basement floor drain backing up? Here\'s what causes it, what it means, and when to call for help. Winnipeg service.',
    url: `${baseUrl}/blog/basement-floor-drain-clogged-whats-wrong`,
    type: 'article',
    images: [{ url: '/assets/images/og/og-default.jpg', width: 1200, height: 630, alt: 'Pro Drain Cleaning — 24/7 drain and sewer service in Winnipeg' }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
