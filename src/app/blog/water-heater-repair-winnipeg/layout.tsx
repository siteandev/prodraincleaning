import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Water Heater Repair in Winnipeg: Repair or Replace?',
  description:
    'Water heater acting up? Here\'s how to tell if it\'s a simple repair or actually needs replacing — real answers, no upsell. Call +1 (204) 399-4413, 24/7.',
  alternates: {
    canonical: `${baseUrl}/blog/water-heater-repair-winnipeg`,
  },
  openGraph: {
    title: 'Water Heater Repair in Winnipeg: Repair or Replace?',
    description:
      'Water heater acting up? Here\'s how to tell if it\'s a simple repair or actually needs replacing — real answers, no upsell. Call +1 (204) 399-4413, 24/7.',
    url: `${baseUrl}/blog/water-heater-repair-winnipeg`,
    type: 'article',
    images: [{ url: '/assets/images/og/og-default.jpg', width: 1200, height: 630, alt: 'Pro Drain Cleaning — 24/7 drain and sewer service in Winnipeg' }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
