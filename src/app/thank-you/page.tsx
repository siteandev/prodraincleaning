'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import MobileActionBar from '@/components/MobileActionBar';

export default function ThankYouPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="min-h-screen flex items-center justify-center px-4 py-20" style={{ backgroundColor: 'var(--bg-light, #f8fafc)' }}>
        <div
          className="max-w-lg w-full rounded-2xl p-10 text-center shadow-sm"
          style={{ backgroundColor: '#ffffff', border: '1.5px solid #e2e8f0' }}
        >
          {/* Icon */}
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: '#f0fdf4' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#16a34a"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Heading */}
          <h1
            className="text-3xl font-bold mb-3"
            style={{ color: 'var(--navy-900, #0f172a)', fontWeight: 700 }}
          >
            Thank You!
          </h1>

          {/* Message */}
          <p className="text-lg mb-2" style={{ color: 'var(--muted, #64748b)' }}>
            We&apos;ve received your message and will be in touch shortly.
          </p>
          <p className="text-base mb-8" style={{ color: 'var(--muted, #64748b)' }}>
            Need immediate help? Call us now:
          </p>

          {/* Call CTA */}
          <Link
            href="tel:+12043994413"
            className="btn-primary inline-block mb-4"
          >
            📞 Call +1 (204) 399-4413
          </Link>

          {/* Back to site */}
          <div className="mt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: 'var(--brand-blue, #1e40af)' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <MobileActionBar />
      <Footer />
    </>
  );
}
