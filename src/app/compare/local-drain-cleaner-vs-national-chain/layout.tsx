import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Local Drain Cleaner vs National Chain: What Matters',
  description: 'Considering a national chain vs. a local Winnipeg drain company? Here\'s what actually differs — dispatch, pricing, and who you\'re dealing with.',
  alternates: {
    canonical:
      `${baseUrl}/compare/local-drain-cleaner-vs-national-chain`,
  },
  openGraph: {
    title: 'Local Drain Cleaner vs National Chain: What Matters',
    description: 'Considering a national chain vs. a local Winnipeg drain company? Here\'s what actually differs — dispatch, pricing, and who you\'re dealing with.',
    url: `${baseUrl}/compare/local-drain-cleaner-vs-national-chain`,
    type: 'article',
    images: [{ url: '/assets/images/og/og-default.jpg', width: 1200, height: 630, alt: 'Pro Drain Cleaning — 24/7 drain and sewer service in Winnipeg' }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
