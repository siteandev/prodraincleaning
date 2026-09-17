import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Burst Pipe Emergency — What to Do in the First 10 Minutes (Winnipeg)',
  description:
    'Pipe just burst? Shut off water, protect what you can, then get help fast. Step-by-step emergency guide for Winnipeg homeowners. Call +1 (204) 399-4413.',
  alternates: {
    canonical: `${baseUrl}/blog/burst-pipe-emergency-what-to-do`,
  },
  openGraph: {
    title: 'Burst Pipe Emergency — What to Do in the First 10 Minutes (Winnipeg)',
    description:
      'Pipe just burst? Shut off water, protect what you can, then get help fast. Step-by-step emergency guide for Winnipeg homeowners.',
    url: `${baseUrl}/blog/burst-pipe-emergency-what-to-do`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
