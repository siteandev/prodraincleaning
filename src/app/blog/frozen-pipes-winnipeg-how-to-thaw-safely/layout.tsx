import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Frozen Pipes in Winnipeg: How to Thaw Them Safely',
  description:
    'Frozen pipes in your Winnipeg home? Here\'s how to thaw them safely without causing a burst — and when to call a plumber instead of risking it yourself.',
  alternates: {
    canonical: `${baseUrl}/blog/frozen-pipes-winnipeg-how-to-thaw-safely`,
  },
  openGraph: {
    title: 'Frozen Pipes in Winnipeg: How to Thaw Them Safely',
    description:
      'Frozen pipes in your Winnipeg home? Here\'s how to thaw them safely without causing a burst — and when to call a plumber instead of risking it yourself.',
    url: `${baseUrl}/blog/frozen-pipes-winnipeg-how-to-thaw-safely`,
    type: 'article',
    images: [{ url: '/assets/images/og/og-default.jpg', width: 1200, height: 630, alt: 'Pro Drain Cleaning — 24/7 drain and sewer service in Winnipeg' }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
