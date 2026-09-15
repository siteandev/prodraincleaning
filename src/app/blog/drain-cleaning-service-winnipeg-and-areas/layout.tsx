import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Drain Cleaning Service in Winnipeg & Surrounding Areas',
  description:
    'Drain cleaning service in Winnipeg, Selkirk, St. Norbert and 100km around. Same-day service, upfront pricing, camera-verified. Call +1 (204) 399-4413.',
  alternates: {
    canonical: `${baseUrl}/blog/drain-cleaning-service-winnipeg-and-areas`,
  },
  openGraph: {
    title: 'Drain Cleaning Service in Winnipeg & Surrounding Areas',
    description:
      'Drain cleaning service in Winnipeg, Selkirk, St. Norbert and 100km around. Same-day service, upfront pricing, camera-verified.',
    url: `${baseUrl}/blog/drain-cleaning-service-winnipeg-and-areas`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
