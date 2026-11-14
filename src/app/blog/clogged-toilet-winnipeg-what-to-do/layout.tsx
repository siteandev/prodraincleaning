import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Clogged Toilet in Winnipeg — What to Do (Before You Call)',
  description:
    'Toilet clogged? Here\'s what actually works, what doesn\'t, and when to call a pro. Real answers, no BS. Call +1 (204) 399-4413 if it\'s beyond DIY.',
  alternates: {
    canonical: `${baseUrl}/blog/clogged-toilet-winnipeg-what-to-do`,
  },
  openGraph: {
    title: 'Clogged Toilet in Winnipeg — What to Do (Before You Call)',
    description:
      'Toilet clogged? Here\'s what actually works, what doesn\'t, and when to call a pro. Real answers, no BS.',
    url: `${baseUrl}/blog/clogged-toilet-winnipeg-what-to-do`,
    type: 'article',
    images: [{ url: '/assets/images/og/og-default.jpg', width: 1200, height: 630, alt: 'Pro Drain Cleaning — 24/7 drain and sewer service in Winnipeg' }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
