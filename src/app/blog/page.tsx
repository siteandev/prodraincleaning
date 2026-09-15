import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import FinalCTABand from '@/components/FinalCTABand';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';
import BlogIndexClient from '@/components/BlogIndexClient';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Drain & Sewer Blog | Pro Drain Cleaning Limited — Winnipeg',
  description: 'Expert drain cleaning and sewer advice for Winnipeg homeowners, landlords, and businesses. 30 posts covering costs, DIY tips, local problems, and when to call a pro.',
  alternates: { canonical: `${baseUrl}/blog` },
  openGraph: {
    title: 'Drain & Sewer Blog | Pro Drain Cleaning Limited — Winnipeg',
    description: 'Expert drain cleaning and sewer advice for Winnipeg homeowners, landlords, and businesses.',
    url: `${baseUrl}/blog`,
    siteName: 'Pro Drain Cleaning Limited',
    images: [{ url: "https://img.rocket.new/generatedImages/rocket_gen_img_1c62568f9-1765420266038.png", width: 1200, height: 630, alt: 'Pro Drain Cleaning blog' }],
    locale: 'en_CA',
    type: 'website'
  },
  robots: { index: true, follow: true }
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
  { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
  { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` }]

};

export default function BlogIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AnnouncementBar />
      <Header />
      <main id="main-content">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-white border-b" style={{ borderColor: 'var(--line)' }}>
          <div className="container-wide py-3">
            <ol className="flex items-center gap-2 text-sm" style={{ color: 'var(--muted)' }}>
              <li><Link href="/" className="hover:underline" style={{ color: 'var(--navy-700)' }}>Home</Link></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" style={{ color: 'var(--ink)' }}>Blog</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }}>
          <div className="container-wide">
            <h1 className="mb-4">Drain &amp; Sewer Advice for Winnipeg Homeowners</h1>
            <p className="text-lg max-w-2xl" style={{ color: 'var(--muted)' }}>
              Plain-spoken, specific advice on drain cleaning, sewer lines, plumbing, and local issues across Winnipeg, Selkirk, Steinbach, and the surrounding area. Written by the team at Pro Drain Cleaning Limited.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide">
            <BlogIndexClient />
          </div>
        </section>

        <FinalCTABand />
      </main>
      <Footer />
      <MobileActionBar />
    </>);

}