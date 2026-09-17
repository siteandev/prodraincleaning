import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "How Winnipeg's Clay Soil Affects Your Sewer Line",
  description:
    "Winnipeg sits on heavy clay soil that shifts with moisture — a real factor in sewer line problems most homeowners never hear about. Here's how it works.",
  alternates: {
    canonical: `${baseUrl}/blog/winnipeg-clay-soil-sewer-line-effects`,
  },
  openGraph: {
    title: "How Winnipeg's Clay Soil Affects Your Sewer Line",
    description:
      "Winnipeg sits on heavy clay soil that shifts with moisture — a real factor in sewer line problems most homeowners never hear about. Here's how it works.",
    url: `${baseUrl}/blog/winnipeg-clay-soil-sewer-line-effects`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
