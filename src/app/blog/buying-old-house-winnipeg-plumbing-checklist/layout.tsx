import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Buying an Old House in Winnipeg? Plumbing Checklist',
  description:
    "Buying an older home in Winnipeg? Here's what to check in the plumbing before closing — pipe material, age-related red flags, and when to get a second look.",
  alternates: {
    canonical: `${baseUrl}/blog/buying-old-house-winnipeg-plumbing-checklist`,
  },
  openGraph: {
    title: 'Buying an Old House in Winnipeg? Plumbing Checklist',
    description:
      "Buying an older home in Winnipeg? Here's what to check in the plumbing before closing — pipe material, age-related red flags, and when to get a second look.",
    url: `${baseUrl}/blog/buying-old-house-winnipeg-plumbing-checklist`,
    type: 'article',
    images: [{ url: '/assets/images/og/og-default.jpg', width: 1200, height: 630, alt: 'Pro Drain Cleaning — 24/7 drain and sewer service in Winnipeg' }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
