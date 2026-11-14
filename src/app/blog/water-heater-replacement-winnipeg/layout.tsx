import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Water Heater Replacement in Winnipeg: Tank vs Tankless',
  description:
    'Water heater dying? Here\'s how to choose between tank and tankless, what it costs, and why the decision matters. Call +1 (204) 399-4413 for honest advice.',
  alternates: {
    canonical: `${baseUrl}/blog/water-heater-replacement-winnipeg`,
  },
  openGraph: {
    title: 'Water Heater Replacement in Winnipeg: Tank vs Tankless',
    description:
      'Water heater dying? Here\'s how to choose between tank and tankless, what it costs, and why the decision matters.',
    url: `${baseUrl}/blog/water-heater-replacement-winnipeg`,
    type: 'article',
    images: [{ url: '/assets/images/og/og-default.jpg', width: 1200, height: 630, alt: 'Pro Drain Cleaning — 24/7 drain and sewer service in Winnipeg' }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
