import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Sewer Line Cleaning in Winnipeg — Signs You Need It',
  description:
    'Sewer line backing up? Here\'s what the warning signs are, what causes them, and when to call for cleaning. Real answers. Call +1 (204) 399-4413.',
  alternates: {
    canonical: `${baseUrl}/blog/sewer-line-cleaning-winnipeg-signs-you-need-it`,
  },
  openGraph: {
    title: 'Sewer Line Cleaning in Winnipeg — Signs You Need It',
    description:
      'Sewer line backing up? Here\'s what the warning signs are, what causes them, and when to call for cleaning. Real answers.',
    url: `${baseUrl}/blog/sewer-line-cleaning-winnipeg-signs-you-need-it`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
