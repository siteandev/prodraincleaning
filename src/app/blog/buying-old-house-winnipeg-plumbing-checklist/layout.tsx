import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Buying an Old House in Winnipeg? What to Check in the Plumbing Before You Close',
  description:
    "Buying an older home in Winnipeg? Here's what to check in the plumbing before closing — pipe material, age-related red flags, and when to get a second look.",
  alternates: {
    canonical: `${baseUrl}/blog/buying-old-house-winnipeg-plumbing-checklist`,
  },
  openGraph: {
    title: 'Buying an Old House in Winnipeg? What to Check in the Plumbing Before You Close',
    description:
      "Buying an older home in Winnipeg? Here's what to check in the plumbing before closing — pipe material, age-related red flags, and when to get a second look.",
    url: `${baseUrl}/blog/buying-old-house-winnipeg-plumbing-checklist`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
