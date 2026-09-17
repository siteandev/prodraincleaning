import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Condo Plumbing in Winnipeg — Is It You or the Condo Corporation's Responsibility?",
  description:
    "Plumbing issue in your Winnipeg condo? Here's how responsibility typically splits between unit owners and the condo corporation — and who to call first.",
  alternates: {
    canonical: `${baseUrl}/blog/condo-plumbing-winnipeg-your-responsibility-or-condo-corporation`,
  },
  openGraph: {
    title: "Condo Plumbing in Winnipeg — Is It You or the Condo Corporation's Responsibility?",
    description:
      "Plumbing issue in your Winnipeg condo? Here's how responsibility typically splits between unit owners and the condo corporation — and who to call first.",
    url: `${baseUrl}/blog/condo-plumbing-winnipeg-your-responsibility-or-condo-corporation`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
