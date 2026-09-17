import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Renovating an Old Winnipeg Bathroom? What's Behind the Wall You Should Know First",
  description:
    "Before you renovate an older Winnipeg bathroom, here's what's typically behind the wall — pipe material, hidden damage, and why a plumbing check should come first.",
  alternates: {
    canonical: `${baseUrl}/blog/renovating-old-winnipeg-bathroom-plumbing`,
  },
  openGraph: {
    title: "Renovating an Old Winnipeg Bathroom? What's Behind the Wall You Should Know First",
    description:
      "Before you renovate an older Winnipeg bathroom, here's what's typically behind the wall — pipe material, hidden damage, and why a plumbing check should come first.",
    url: `${baseUrl}/blog/renovating-old-winnipeg-bathroom-plumbing`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
