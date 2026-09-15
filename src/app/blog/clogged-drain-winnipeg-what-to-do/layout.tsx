import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Clogged Drain in Winnipeg — What to Do (Before You Call)',
  description:
    'Drain clogged? Here\'s what actually works, what makes it worse, and when to call a pro. Real answers, no upsell. Call +1 (204) 399-4413.',
  alternates: {
    canonical: `${baseUrl}/blog/clogged-drain-winnipeg-what-to-do`,
  },
  openGraph: {
    title: 'Clogged Drain in Winnipeg — What to Do (Before You Call)',
    description:
      'Drain clogged? Here\'s what actually works, what makes it worse, and when to call a pro. Real answers, no upsell.',
    url: `${baseUrl}/blog/clogged-drain-winnipeg-what-to-do`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
