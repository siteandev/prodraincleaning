import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Cast Iron and Clay Pipes in Older Winnipeg Homes — What Owners Should Know',
  description: "Own an older Winnipeg home? Cast iron and clay drain pipes age differently than modern materials.",
  alternates: {
    canonical: `${baseUrl}/blog/cast-iron-clay-pipes-older-winnipeg-homes`,
  },
  openGraph: {
    title: 'Cast Iron and Clay Pipes in Older Winnipeg Homes — What Owners Should Know',
    description: "Own an older Winnipeg home? Cast iron and clay drain pipes age differently than modern materials.",
    url: `${baseUrl}/blog/cast-iron-clay-pipes-older-winnipeg-homes`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
