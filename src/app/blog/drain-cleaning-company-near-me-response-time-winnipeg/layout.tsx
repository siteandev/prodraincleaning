import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Drain Cleaning Company Near Me in Winnipeg — Fast Response Time',
  description:
    'Need a drain cleaning company near you in Winnipeg that actually shows up fast? Here\'s what to look for. Same-day service available. Call +1 (204) 399-4413.',
  alternates: {
    canonical: `${baseUrl}/blog/drain-cleaning-company-near-me-response-time-winnipeg`,
  },
  openGraph: {
    title: 'Drain Cleaning Company Near Me in Winnipeg — Fast Response Time',
    description:
      'Need a drain cleaning company near you in Winnipeg that actually shows up fast? Here\'s what to look for. Same-day service available.',
    url: `${baseUrl}/blog/drain-cleaning-company-near-me-response-time-winnipeg`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
