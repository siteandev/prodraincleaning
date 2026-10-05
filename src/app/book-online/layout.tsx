import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Book Drain Cleaning Online in Winnipeg | Pro Drain Cleaning',
  description: 'Book drain cleaning or sewer service online in Winnipeg, or call +1 (204) 399-4413. Available 24/7, with upfront pricing before any work starts.',
  alternates: { canonical: `${baseUrl}/book-online` },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
