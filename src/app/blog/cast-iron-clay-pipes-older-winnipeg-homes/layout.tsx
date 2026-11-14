import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Cast Iron & Clay Pipes in Older Winnipeg Homes',
  description: "Own an older Winnipeg home? How cast iron and clay drain pipes age, the warning signs to watch for, and when a camera inspection is worth it.",
  alternates: {
    canonical: `${baseUrl}/blog/cast-iron-clay-pipes-older-winnipeg-homes`,
  },
  openGraph: {
    title: 'Cast Iron & Clay Pipes in Older Winnipeg Homes',
    description: "Own an older Winnipeg home? How cast iron and clay drain pipes age, the warning signs to watch for, and when a camera inspection is worth it.",
    url: `${baseUrl}/blog/cast-iron-clay-pipes-older-winnipeg-homes`,
    type: 'article',
    images: [{ url: '/assets/images/og/og-default.jpg', width: 1200, height: 630, alt: 'Pro Drain Cleaning — 24/7 drain and sewer service in Winnipeg' }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
