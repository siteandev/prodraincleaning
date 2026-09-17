import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Water Damage Insurance Claim — What Your Adjuster Wants to See (Winnipeg)',
  description:
    "Filing a water damage insurance claim in Winnipeg? Here's the documentation a plumber can provide to support your claim — and what to gather before the adjuster visits.",
  alternates: {
    canonical: `${baseUrl}/blog/water-damage-insurance-claim-plumbing-checklist`,
  },
  openGraph: {
    title: 'Water Damage Insurance Claim — What Your Adjuster Wants to See (Winnipeg)',
    description:
      "Filing a water damage insurance claim in Winnipeg? Here's the documentation a plumber can provide to support your claim — and what to gather before the adjuster visits.",
    url: `${baseUrl}/blog/water-damage-insurance-claim-plumbing-checklist`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
