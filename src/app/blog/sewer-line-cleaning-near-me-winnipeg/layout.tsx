import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Sewer Line Cleaning Near Me in Winnipeg — Local Service, Real Results',
  description:
    'Sewer line clogged? Find local sewer line cleaning service in Winnipeg. Same-day response, upfront pricing, camera-verified. Call +1 (204) 399-4413.',
  alternates: {
    canonical: `${baseUrl}/blog/sewer-line-cleaning-near-me-winnipeg`,
  },
  openGraph: {
    title: 'Sewer Line Cleaning Near Me in Winnipeg — Local Service, Real Results',
    description:
      'Sewer line clogged? Find local sewer line cleaning service in Winnipeg. Same-day response, upfront pricing, camera-verified.',
    url: `${baseUrl}/blog/sewer-line-cleaning-near-me-winnipeg`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
