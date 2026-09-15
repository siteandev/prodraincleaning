import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drain & Sewer Terms Explained | Glossary | Pro Drain Cleaning',
  description: "Plain-language definitions of drain, sewer and plumbing terms — from auger to weeping tile. A homeowner's glossary from Pro Drain Cleaning Limited, Winnipeg.",
  alternates: { canonical: 'https://prodraincleaning.ca/glossary' },
  openGraph: {
    title: 'Drain & Sewer Terms Explained | Glossary | Pro Drain Cleaning',
    description: "Plain-language definitions of drain, sewer and plumbing terms — from auger to weeping tile. A homeowner's glossary from Pro Drain Cleaning Limited, Winnipeg.",
    url: 'https://prodraincleaning.ca/glossary',
    siteName: 'Pro Drain Cleaning Limited',
    images: [{ url: 'https://prodraincleaning.ca/images/og-default.jpg', width: 1200, height: 630 }],
    locale: 'en_CA',
    type: 'website',
  },
  robots: { index: true, follow: true },
};
