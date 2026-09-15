import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'About Pro Drain Cleaning — Winnipeg Drain Specialists',
  description: 'Meet the Pro Drain Cleaning team. Licensed, insured, WCB-covered specialists serving Winnipeg, Selkirk & St. Norbert since 2014. 24/7 emergency drain service.',
  alternates: { canonical: `${baseUrl}/about` },
  openGraph: {
    title: 'About Pro Drain Cleaning — Winnipeg Drain Specialists',
    description: 'Licensed, insured, WCB-covered drain specialists. 24/7 emergency service across Winnipeg, Selkirk & St. Norbert.',
    url: `${baseUrl}/about`,
    siteName: 'Pro Drain Cleaning Limited',
    images: [{ url: 'https://img.rocket.new/generatedImages/rocket_gen_img_12e011ced-1766887878812.png', width: 1200, height: 630, alt: 'Pro Drain Cleaning team' }],
    locale: 'en_CA',
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
