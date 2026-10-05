import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Home Inspection Flagged a Plumbing Issue — Now What? (Winnipeg)',
  description: "Inspection report flagged a plumbing issue in Winnipeg? Get a second opinion, understand the real cost, and decide your next move before closing.",
  alternates: {
    canonical: `${baseUrl}/blog/home-inspection-plumbing-issue-now-what`,
  },
  openGraph: {
    title: 'Home Inspection Flagged a Plumbing Issue — Now What? (Winnipeg)',
    description: "Inspection report flagged a plumbing issue in Winnipeg? Get a second opinion, understand the real cost, and decide your next move before closing.",
    url: `${baseUrl}/blog/home-inspection-plumbing-issue-now-what`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
