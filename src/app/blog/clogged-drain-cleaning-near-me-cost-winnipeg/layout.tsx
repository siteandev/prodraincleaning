import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Clogged Drain Cleaning Near Me in Winnipeg — Cost & Service',
  description:
    'Drain clogged? Here\'s what drain cleaning costs in Winnipeg, how to find a local service, and what to expect. Upfront pricing. Call +1 (204) 399-4413.',
  alternates: {
    canonical: `${baseUrl}/blog/clogged-drain-cleaning-near-me-cost-winnipeg`,
  },
  openGraph: {
    title: 'Clogged Drain Cleaning Near Me in Winnipeg — Cost & Service',
    description:
      'Drain clogged? Here\'s what drain cleaning costs in Winnipeg, how to find a local service, and what to expect. Upfront pricing.',
    url: `${baseUrl}/blog/clogged-drain-cleaning-near-me-cost-winnipeg`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
