import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Emergency Drain Cleaning in Winnipeg — 24/7 Complete Guide',
  description:
    'Drain backed up at 2 AM? Here\'s what to do right now, what it costs, and how to prevent it next time. 24/7 emergency service. Call +1 (204) 399-4413.',
  alternates: {
    canonical: `${baseUrl}/blog/emergency-drain-cleaning-winnipeg-24-7-complete-guide`,
  },
  openGraph: {
    title: 'Emergency Drain Cleaning in Winnipeg — 24/7 Complete Guide',
    description:
      'Drain backed up at 2 AM? Here\'s what to do right now, what it costs, and how to prevent it next time. 24/7 emergency service.',
    url: `${baseUrl}/blog/emergency-drain-cleaning-winnipeg-24-7-complete-guide`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
