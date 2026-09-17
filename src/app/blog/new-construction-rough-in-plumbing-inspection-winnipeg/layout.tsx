import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'New Construction Rough-In Plumbing Inspection — What Gets Missed (Winnipeg)',
  description:
    'Building a new home in Winnipeg? An independent rough-in plumbing inspection before drywall goes up can catch issues that are expensive to fix later.',
  alternates: {
    canonical: `${baseUrl}/blog/new-construction-rough-in-plumbing-inspection-winnipeg`,
  },
  openGraph: {
    title: 'New Construction Rough-In Plumbing Inspection — What Gets Missed (Winnipeg)',
    description:
      'Building a new home in Winnipeg? An independent rough-in plumbing inspection before drywall goes up can catch issues that are expensive to fix later.',
    url: `${baseUrl}/blog/new-construction-rough-in-plumbing-inspection-winnipeg`,
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
