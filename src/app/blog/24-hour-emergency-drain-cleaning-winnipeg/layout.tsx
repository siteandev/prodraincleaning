import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: '24-Hour Emergency Drain Cleaning in Winnipeg — Same-Day Service',
  description:
    'Drain emergency at midnight? We\'re here. 24/7 emergency drain cleaning in Winnipeg with same-day response. Upfront pricing. Call +1 (204) 399-4413 anytime.',
  alternates: {
    canonical: `${baseUrl}/blog/24-hour-emergency-drain-cleaning-winnipeg`,
  },
  openGraph: {
    title: '24-Hour Emergency Drain Cleaning in Winnipeg — Same-Day Service',
    description:
      'Drain emergency at midnight? We\'re here. 24/7 emergency drain cleaning in Winnipeg with same-day response. Upfront pricing.',
    url: `${baseUrl}/blog/24-hour-emergency-drain-cleaning-winnipeg`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
