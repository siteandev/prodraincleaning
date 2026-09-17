import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Rental Property Plumbing in Manitoba — What Landlords Are Actually Required to Fix',
  description:
    "Landlord or property manager in Winnipeg? Here's what plumbing repairs are typically your responsibility, how fast you're expected to respond, and who to call.",
  alternates: {
    canonical: `${baseUrl}/blog/rental-property-plumbing-manitoba-landlord-responsibilities`,
  },
  openGraph: {
    title: 'Rental Property Plumbing in Manitoba — What Landlords Are Actually Required to Fix',
    description:
      "Landlord or property manager in Winnipeg? Here's what plumbing repairs are typically your responsibility, how fast you're expected to respond, and who to call.",
    url: `${baseUrl}/blog/rental-property-plumbing-manitoba-landlord-responsibilities`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
