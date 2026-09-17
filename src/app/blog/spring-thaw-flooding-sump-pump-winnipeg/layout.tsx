import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Spring Thaw Flooding in Winnipeg — Is Your Sump Pump Ready?',
  description:
    "Manitoba's spring thaw puts real strain on sump pumps. Here's how to check yours is ready before the melt — and what to do if it's already failing.",
  alternates: {
    canonical: `${baseUrl}/blog/spring-thaw-flooding-sump-pump-winnipeg`,
  },
  openGraph: {
    title: 'Spring Thaw Flooding in Winnipeg — Is Your Sump Pump Ready?',
    description:
      "Manitoba's spring thaw puts real strain on sump pumps. Here's how to check yours is ready before the melt — and what to do if it's already failing.",
    url: `${baseUrl}/blog/spring-thaw-flooding-sump-pump-winnipeg`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
