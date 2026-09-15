import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import FinalCTABand from '@/components/FinalCTABand';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Privacy Policy | Pro Drain Cleaning Limited',
  description: 'Privacy policy for Pro Drain Cleaning Limited. Learn how we collect, use, and protect your personal information in compliance with PIPEDA.',
  alternates: { canonical: `${baseUrl}/privacy-policy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main id="main-content">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-white border-b" style={{ borderColor: 'var(--line)' }}>
          <div className="container-wide py-3">
            <ol className="flex items-center gap-2 text-sm" style={{ color: 'var(--muted)' }}>
              <li><Link href="/" className="hover:underline" style={{ color: 'var(--navy-700)' }}>Home</Link></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" style={{ color: 'var(--ink)' }}>Privacy Policy</li>
            </ol>
          </div>
        </nav>

        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-3xl">
            <h1 className="mb-3">Privacy Policy</h1>
            <p className="text-sm mb-10" style={{ color: 'var(--muted)' }}>
              Last updated: August 17, 2026 · Pro Drain Cleaning Limited
            </p>

            <div className="prose-body flex flex-col gap-8">

              <section>
                <h2 className="mb-3">1. Who We Are</h2>
                <p>
                  Pro Drain Cleaning Limited (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the website at <Link href="https://prodraincleaning.ca" style={{ color: 'var(--orange-600)' }}>prodraincleaning.ca</Link> and provides drain cleaning, sewer line, and plumbing services in Winnipeg, Manitoba and within 100 km of Winnipeg.
                </p>
                <p className="mt-3">
                  For privacy questions or requests, contact us at: <Link href="mailto:prodraincleaningcentre@gmail.com" style={{ color: 'var(--orange-600)' }}>prodraincleaningcentre@gmail.com</Link> or call <Link href="tel:+12043994413" style={{ color: 'var(--orange-600)' }}>+1 (204) 399-4413</Link>.
                </p>
              </section>

              <section>
                <h2 className="mb-3">2. What Information We Collect</h2>
                <p className="mb-3">When you submit a contact form or coupon request on this website, we collect:</p>
                <ul className="list-disc pl-6 flex flex-col gap-1.5" style={{ color: 'var(--ink)' }}>
                  <li><strong>Full name</strong></li>
                  <li><strong>Phone number</strong></li>
                  <li><strong>Email address</strong></li>
                  <li><strong>City or service area</strong> (if provided)</li>
                  <li><strong>Service needed</strong> (selected from a list)</li>
                  <li><strong>Urgency level</strong></li>
                  <li><strong>Message</strong> (if provided)</li>
                  <li><strong>Page URL</strong> — the page you submitted the form from</li>
                  <li><strong>Page title</strong></li>
                  <li><strong>Referrer URL</strong> — the page you came from before visiting our site</li>
                  <li><strong>UTM parameters</strong> (utm_source, utm_medium, utm_campaign) — if present in the URL, used to understand how you found us</li>
                  <li><strong>Submission timestamp</strong> (ISO format)</li>
                  <li><strong>User agent</strong> — your browser and device type</li>
                </ul>
                <p className="mt-3">
                  We also use Google Analytics 4 (GA4) to collect anonymous usage data about how visitors interact with this website. See Section 6 for details.
                </p>
              </section>

              <section>
                <h2 className="mb-3">3. How We Store Your Information</h2>
                <p>
                  Form submissions are stored in Google Sheets, a cloud-based spreadsheet service operated by Google LLC. Data is stored in two separate sheet tabs: one for service request forms (&quot;contact&quot;) and one for coupon requests (&quot;coupon&quot;). Google Sheets is subject to Google&apos;s own privacy policy and security practices.
                </p>
                <p className="mt-3">
                  We do not operate our own database server. Your information is not stored on our web server.
                </p>
              </section>

              <section>
                <h2 className="mb-3">4. How We Use Your Information</h2>
                <p className="mb-3">We use the information you provide for the following purposes only:</p>
                <ul className="list-disc pl-6 flex flex-col gap-1.5" style={{ color: 'var(--ink)' }}>
                  <li>To contact you about your service request — by phone, text, or email</li>
                  <li>To send you the discount code you requested (coupon form submissions only)</li>
                  <li>To understand how you found our website, so we can improve our marketing</li>
                </ul>
                <p className="mt-3">
                  We do not sell, rent, or share your personal information with third parties for marketing purposes. We do not add you to any mailing list without your explicit consent.
                </p>
              </section>

              <section>
                <h2 className="mb-3">5. Retention Period</h2>
                <p>
                  We retain form submission data for 12 months from the date of submission. After this period, records are deleted from our Google Sheets. If you would like your information deleted before this period, see Section 7.
                </p>
              </section>

              <section>
                <h2 className="mb-3">6. Cookies and Analytics</h2>
                <p className="mb-3">This website uses the following cookies and tracking technologies:</p>
                <ul className="list-disc pl-6 flex flex-col gap-1.5" style={{ color: 'var(--ink)' }}>
                  <li><strong>Google Analytics 4 (GA4)</strong> — collects anonymous data about page views, session duration, and user interactions. GA4 uses cookies to distinguish users. This data is aggregated and does not identify you personally. You can opt out of GA4 tracking using the <Link href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--orange-600)' }}>Google Analytics Opt-out Browser Add-on</Link>.</li>
                  <li><strong>pdc_coupon_state</strong> (localStorage) — stores whether you have seen or submitted the coupon popup, to prevent it from showing repeatedly.</li>
                  <li><strong>pdc_seen</strong> (cookie, 365-day expiry) — a fallback cookie that also prevents the coupon popup from showing to returning visitors.</li>
                </ul>
                <p className="mt-3">
                  No additional tracking tools are currently in use beyond those listed above.
                </p>
              </section>

              <section>
                <h2 className="mb-3">7. Your Rights — Requesting Deletion or Access</h2>
                <p>
                  Under Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA), you have the right to access the personal information we hold about you and to request its correction or deletion.
                </p>
                <p className="mt-3">
                  To request access to, correction of, or deletion of your personal information, email us at <Link href="mailto:prodraincleaningcentre@gmail.com" style={{ color: 'var(--orange-600)' }}>prodraincleaningcentre@gmail.com</Link> with the subject line &quot;Privacy Request&quot;. We will respond within 30 days.
                </p>
              </section>

              <section>
                <h2 className="mb-3">8. PIPEDA Compliance</h2>
                <p>
                  This privacy policy is intended to comply with the Personal Information Protection and Electronic Documents Act (PIPEDA), Canada&apos;s federal private-sector privacy law. We collect only the information necessary for the purposes described above, we use it only for those purposes, and we do not retain it longer than necessary.
                </p>
              </section>

              <section>
                <h2 className="mb-3">9. Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. The &quot;Last updated&quot; date at the top of this page reflects the most recent revision. Continued use of this website after a policy update constitutes acceptance of the revised policy.
                </p>
              </section>

              <section>
                <h2 className="mb-3">10. Contact Us</h2>
                <p>
                  For any privacy questions, concerns, or requests:
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  <p>Email: <Link href="mailto:prodraincleaningcentre@gmail.com" style={{ color: 'var(--orange-600)' }}>prodraincleaningcentre@gmail.com</Link></p>
                  <p>Phone: <Link href="tel:+12043994413" style={{ color: 'var(--orange-600)' }}>+1 (204) 399-4413</Link></p>
                  <p>Business: Pro Drain Cleaning Limited, Winnipeg, Manitoba, Canada</p>
                </div>
              </section>

            </div>
          </div>
        </section>

        <FinalCTABand />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
