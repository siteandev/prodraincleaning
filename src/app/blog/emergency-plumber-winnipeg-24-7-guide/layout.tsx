import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Emergency Plumber in Winnipeg: 24/7 Guide',
  description:
    'Pipe burst at 3 AM? Here\'s how to find an emergency plumber in Winnipeg who won\'t overcharge. Real 24/7 service. Call +1 (204) 399-4413.',
  alternates: {
    canonical: `${baseUrl}/blog/emergency-plumber-winnipeg-24-7-guide`,
  },
  openGraph: {
    title: 'Emergency Plumber in Winnipeg: 24/7 Guide',
    description:
      'Pipe burst at 3 AM? Here\'s how to find an emergency plumber in Winnipeg who won\'t overcharge. Real 24/7 service.',
    url: `${baseUrl}/blog/emergency-plumber-winnipeg-24-7-guide`,
    type: 'article',
    images: [{ url: '/assets/images/og/og-default.jpg', width: 1200, height: 630, alt: 'Pro Drain Cleaning — 24/7 drain and sewer service in Winnipeg' }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
