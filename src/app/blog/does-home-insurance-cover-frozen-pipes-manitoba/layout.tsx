import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Does Home Insurance Cover Frozen Pipe Damage in Manitoba?',
  description:
    "Frozen pipe damage and wondering if it's covered? Here's how most Manitoba home insurance policies typically treat frozen pipe claims, and what can affect coverage.",
  alternates: {
    canonical: `${baseUrl}/blog/does-home-insurance-cover-frozen-pipes-manitoba`,
  },
  openGraph: {
    title: 'Does Home Insurance Cover Frozen Pipe Damage in Manitoba?',
    description:
      "Frozen pipe damage and wondering if it's covered? Here's how most Manitoba home insurance policies typically treat frozen pipe claims, and what can affect coverage.",
    url: `${baseUrl}/blog/does-home-insurance-cover-frozen-pipes-manitoba`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
