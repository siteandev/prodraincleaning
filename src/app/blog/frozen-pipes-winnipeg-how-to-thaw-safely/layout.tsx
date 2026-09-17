import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Frozen Pipes in Winnipeg — How to Thaw Them Safely Before They Burst',
  description:
    'Frozen pipes in your Winnipeg home? Here\'s how to thaw them safely without causing a burst — and when to call a plumber instead of risking it yourself.',
  alternates: {
    canonical: `${baseUrl}/blog/frozen-pipes-winnipeg-how-to-thaw-safely`,
  },
  openGraph: {
    title: 'Frozen Pipes in Winnipeg — How to Thaw Them Safely Before They Burst',
    description:
      'Frozen pipes in your Winnipeg home? Here\'s how to thaw them safely without causing a burst — and when to call a plumber instead of risking it yourself.',
    url: `${baseUrl}/blog/frozen-pipes-winnipeg-how-to-thaw-safely`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
