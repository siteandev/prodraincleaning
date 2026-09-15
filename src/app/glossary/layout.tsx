import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Drain & Sewer Terms Explained | Glossary | Pro Drain Cleaning',
  description: "Plain-language definitions of drain, sewer and plumbing terms — from auger to weeping tile. A homeowner's glossary from Pro Drain Cleaning Limited, Winnipeg.",
  alternates: { canonical: `${baseUrl}/glossary` },
  openGraph: {
    title: 'Drain & Sewer Terms Explained | Glossary | Pro Drain Cleaning',
    description: "Plain-language definitions of drain, sewer and plumbing terms — from auger to weeping tile. A homeowner's glossary from Pro Drain Cleaning Limited, Winnipeg.",
    url: `${baseUrl}/glossary`,
    siteName: 'Pro Drain Cleaning Limited',
    images: [{ url: 'https://prodraincleaning.ca/images/og-default.jpg', width: 1200, height: 630 }],
    locale: 'en_CA',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function GlossaryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
