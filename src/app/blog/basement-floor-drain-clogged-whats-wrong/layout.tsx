import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Basement Floor Drain Clogged — What\'s Wrong & How to Fix It',
  description:
    'Basement floor drain backing up? Here\'s what causes it, what it means, and when to call for help. Winnipeg service. Call +1 (204) 399-4413.',
  alternates: {
    canonical: `${baseUrl}/blog/basement-floor-drain-clogged-whats-wrong`,
  },
  openGraph: {
    title: 'Basement Floor Drain Clogged — What\'s Wrong & How to Fix It',
    description:
      'Basement floor drain backing up? Here\'s what causes it, what it means, and when to call for help. Winnipeg service.',
    url: `${baseUrl}/blog/basement-floor-drain-clogged-whats-wrong`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
