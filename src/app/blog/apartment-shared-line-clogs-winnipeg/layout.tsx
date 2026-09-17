import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Apartment Building Drain Clogs — Why One Unit's Problem Is Everyone's Problem",
  description:
    "Drain backing up in your Winnipeg apartment? If it's affecting more than one unit, it's likely a shared-line issue — here's what that means and who to call.",
  alternates: {
    canonical: `${baseUrl}/blog/apartment-shared-line-clogs-winnipeg`,
  },
  openGraph: {
    title: "Apartment Building Drain Clogs — Why One Unit's Problem Is Everyone's Problem",
    description:
      "Drain backing up in your Winnipeg apartment? If it's affecting more than one unit, it's likely a shared-line issue — here's what that means and who to call.",
    url: `${baseUrl}/blog/apartment-shared-line-clogs-winnipeg`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
