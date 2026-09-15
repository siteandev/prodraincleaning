import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Plumber Near Me in Winnipeg — Complete Guide to Finding the Right One',
  description:
    'Searching for a plumber near you in Winnipeg? Here\'s how to find one who won\'t overcharge, won\'t oversell, and actually solves the problem. Call +1 (204) 399-4413.',
  alternates: {
    canonical: `${baseUrl}/blog/plumber-near-me-winnipeg-complete-guide`,
  },
  openGraph: {
    title: 'Plumber Near Me in Winnipeg — Complete Guide to Finding the Right One',
    description:
      'Searching for a plumber near you in Winnipeg? Here\'s how to find one who won\'t overcharge, won\'t oversell, and actually solves the problem.',
    url: `${baseUrl}/blog/plumber-near-me-winnipeg-complete-guide`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
