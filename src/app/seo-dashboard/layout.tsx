import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Dashboard | Pro Drain Cleaning',
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
