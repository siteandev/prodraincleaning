import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Backflow Valve Inspection & Repair in Winnipeg — What You Need to Know',
  description:
    'Backflow valve failing? Here\'s what it does, why it matters, and when to get it inspected or repaired. Winnipeg service. Call +1 (204) 399-4413.',
  alternates: {
    canonical: `${baseUrl}/blog/backflow-valve-inspection-repair-winnipeg`,
  },
  openGraph: {
    title: 'Backflow Valve Inspection & Repair in Winnipeg — What You Need to Know',
    description:
      'Backflow valve failing? Here\'s what it does, why it matters, and when to get it inspected or repaired. Winnipeg service.',
    url: `${baseUrl}/blog/backflow-valve-inspection-repair-winnipeg`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
