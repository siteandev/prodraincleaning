import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Local Drain Cleaner vs. a National Chain — What Actually Matters',
  description:
    'Considering a national chain vs. a local Winnipeg drain company? Here\'s what actually differs — dispatch, pricing, and who you\'re dealing with. Call +1 (204) 399-4413.',
  alternates: {
    canonical:
      `${baseUrl}/compare/local-drain-cleaner-vs-national-chain`,
  },
  openGraph: {
    title: 'Local Drain Cleaner vs. a National Chain — What Actually Matters',
    description:
      'Considering a national chain vs. a local Winnipeg drain company? Here\'s what actually differs — dispatch, pricing, and who you\'re dealing with. Call +1 (204) 399-4413.',
    url: `${baseUrl}/compare/local-drain-cleaner-vs-national-chain`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
