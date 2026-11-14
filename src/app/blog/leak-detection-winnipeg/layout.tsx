import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Leak Detection in Winnipeg: Find Hidden Leaks',
  description:
    'Suspect a hidden leak in your Winnipeg home? Here\'s how we find it, what it costs, and how to prevent water damage. Call +1 (204) 399-4413.',
  alternates: {
    canonical: `${baseUrl}/blog/leak-detection-winnipeg`,
  },
  openGraph: {
    title: 'Leak Detection in Winnipeg: Find Hidden Leaks',
    description:
      'Suspect a hidden leak in your Winnipeg home? Here\'s how we find it, what it costs, and how to prevent water damage.',
    url: `${baseUrl}/blog/leak-detection-winnipeg`,
    type: 'article',
    images: [{ url: '/assets/images/og/og-default.jpg', width: 1200, height: 630, alt: 'Pro Drain Cleaning — 24/7 drain and sewer service in Winnipeg' }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
