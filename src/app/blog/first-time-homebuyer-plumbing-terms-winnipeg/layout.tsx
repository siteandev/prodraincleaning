import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "First-Time Homebuyer's Plumbing Terms — What You'll Actually Hear in Winnipeg",
  description:
    "Buying your first home in Winnipeg? Here are the plumbing terms you're most likely to hear from your inspector or agent, explained in plain language.",
  alternates: {
    canonical: `${baseUrl}/blog/first-time-homebuyer-plumbing-terms-winnipeg`,
  },
  openGraph: {
    title: "First-Time Homebuyer's Plumbing Terms — What You'll Actually Hear in Winnipeg",
    description:
      "Buying your first home in Winnipeg? Here are the plumbing terms you're most likely to hear from your inspector or agent, explained in plain language.",
    url: `${baseUrl}/blog/first-time-homebuyer-plumbing-terms-winnipeg`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
