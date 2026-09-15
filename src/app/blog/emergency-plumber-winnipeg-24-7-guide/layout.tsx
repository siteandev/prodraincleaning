import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Emergency Plumber in Winnipeg — 24/7 Guide to Getting Help Fast',
  description:
    'Pipe burst at 3 AM? Here\'s how to find an emergency plumber in Winnipeg who won\'t overcharge. Real 24/7 service. Call +1 (204) 399-4413.',
  alternates: {
    canonical: `${baseUrl}/blog/emergency-plumber-winnipeg-24-7-guide`,
  },
  openGraph: {
    title: 'Emergency Plumber in Winnipeg — 24/7 Guide to Getting Help Fast',
    description:
      'Pipe burst at 3 AM? Here\'s how to find an emergency plumber in Winnipeg who won\'t overcharge. Real 24/7 service.',
    url: `${baseUrl}/blog/emergency-plumber-winnipeg-24-7-guide`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
