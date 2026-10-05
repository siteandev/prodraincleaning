import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Renovating an Old Winnipeg Bathroom? Check the Plumbing",
  description: "Before you renovate an older Winnipeg bathroom, see what's typically behind the wall: pipe material, hidden damage, and why a plumbing check comes first.",
  alternates: {
    canonical: `${baseUrl}/blog/renovating-old-winnipeg-bathroom-plumbing`,
  },
  openGraph: {
    title: "Renovating an Old Winnipeg Bathroom? Check the Plumbing",
    description: "Before you renovate an older Winnipeg bathroom, see what's typically behind the wall: pipe material, hidden damage, and why a plumbing check comes first.",
    url: `${baseUrl}/blog/renovating-old-winnipeg-bathroom-plumbing`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
