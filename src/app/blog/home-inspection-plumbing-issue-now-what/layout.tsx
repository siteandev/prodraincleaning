import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Home Inspection Plumbing Issue in Winnipeg: Now What?',
  description: "Inspection report flagged a plumbing issue in Winnipeg? Get a second opinion, understand the real cost, and decide your next move before closing.",
  alternates: {
    canonical: `${baseUrl}/blog/home-inspection-plumbing-issue-now-what`,
  },
  openGraph: {
    title: 'Home Inspection Plumbing Issue in Winnipeg: Now What?',
    description: "Inspection report flagged a plumbing issue in Winnipeg? Get a second opinion, understand the real cost, and decide your next move before closing.",
    url: `${baseUrl}/blog/home-inspection-plumbing-issue-now-what`,
    type: 'article',
    images: [{ url: '/assets/images/og/og-default.jpg', width: 1200, height: 630, alt: 'Pro Drain Cleaning — 24/7 drain and sewer service in Winnipeg' }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
