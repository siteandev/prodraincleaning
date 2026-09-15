import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Plumbing & Drain Cleaning Services in Winnipeg — Full Service Menu',
  description:
    'Need drain cleaning, plumbing repair, or sewer service in Winnipeg? Here\'s what we offer, how it works, and what to expect. Call +1 (204) 399-4413.',
  alternates: {
    canonical: `${baseUrl}/blog/plumbing-drain-cleaning-services-winnipeg`,
  },
  openGraph: {
    title: 'Plumbing & Drain Cleaning Services in Winnipeg — Full Service Menu',
    description:
      'Need drain cleaning, plumbing repair, or sewer service in Winnipeg? Here\'s what we offer, how it works, and what to expect.',
    url: `${baseUrl}/blog/plumbing-drain-cleaning-services-winnipeg`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
