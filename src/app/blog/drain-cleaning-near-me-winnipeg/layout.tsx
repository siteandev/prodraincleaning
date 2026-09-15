import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Drain Cleaning Near Me in Winnipeg — Find Local Service Fast',
  description:
    'Looking for drain cleaning near you in Winnipeg? Here\'s how to find a local service that actually shows up and solves it. Call +1 (204) 399-4413.',
  alternates: {
    canonical: `${baseUrl}/blog/drain-cleaning-near-me-winnipeg`,
  },
  openGraph: {
    title: 'Drain Cleaning Near Me in Winnipeg — Find Local Service Fast',
    description:
      'Looking for drain cleaning near you in Winnipeg? Here\'s how to find a local service that actually shows up and solves it.',
    url: `${baseUrl}/blog/drain-cleaning-near-me-winnipeg`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
