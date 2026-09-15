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
  title: 'Terms of Service | Pro Drain Cleaning Limited',
  description: 'Terms of service for Pro Drain Cleaning Limited — service terms, quote validity, guarantee terms, payment, and coupon conditions.',
  alternates: { canonical: `${baseUrl}/terms` },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
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
              <li aria-current="page" style={{ color: 'var(--ink)' }}>Terms of Service</li>
            </ol>
          </div>
        </nav>

        <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container-wide max-w-3xl">
            <h1 className="mb-3">Terms of Service</h1>
            <p className="text-sm mb-10" style={{ color: 'var(--muted)' }}>
              Last updated: August 17, 2026 · Pro Drain Cleaning Limited
            </p>

            <div className="prose-body flex flex-col gap-8">

              <section>
                <h2 className="mb-3">1. About These Terms</h2>
                <p>
                  These terms govern the relationship between Pro Drain Cleaning Limited (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) and customers who request or receive drain cleaning, sewer line, plumbing, or related services (&quot;you&quot;, &quot;the customer&quot;). By requesting a service, submitting a form on this website, or allowing us to perform work on your property, you agree to these terms.
                </p>
                <p className="mt-3">
                  Questions? Contact us at <Link href="mailto:prodraincleaningcentre@gmail.com" style={{ color: 'var(--orange-600)' }}>prodraincleaningcentre@gmail.com</Link> or <Link href="tel:+12043994413" style={{ color: 'var(--orange-600)' }}>+1 (204) 399-4413</Link>.
                </p>
              </section>

              <section>
                <h2 className="mb-3">2. Service Terms</h2>
                <ul className="list-disc pl-6 flex flex-col gap-2" style={{ color: 'var(--ink)' }}>
                  <li>We provide drain cleaning, sewer line unclogging, camera inspection, hydro jetting, and related plumbing services in Winnipeg, Manitoba and within 100 km of Winnipeg.</li>
                  <li>Service availability is subject to technician availability and travel distance. We make reasonable efforts to provide same-day service for Winnipeg calls and timely service for surrounding communities.</li>
                  <li>We reserve the right to decline service at our discretion, including where site conditions are unsafe or where the scope of work is outside our capabilities.</li>
                  <li>All work is performed by qualified technicians. We are licensed and insured in Manitoba.</li>
                  <li>We take reasonable precautions to protect your property, including the use of floor mats, boot covers, and drop sheets. We are not responsible for pre-existing damage to pipes, fixtures, or property.</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3">3. Quotes and Pricing</h2>
                <ul className="list-disc pl-6 flex flex-col gap-2" style={{ color: 'var(--ink)' }}>
                  <li>We provide a realistic price range over the phone based on the information you give us. This is an estimate, not a binding quote.</li>
                  <li>A firm flat-rate quote is provided in writing on site, before any work begins. You must approve this quote before we start.</li>
                  <li>Phone estimates are valid for the same service call. On-site quotes are valid for 30 days from the date of the quote.</li>
                  <li>If the scope of work changes during the job — for example, if a camera inspection reveals a more complex problem than initially apparent — we will provide a revised quote before proceeding with additional work.</li>
                  <li>All prices are in Canadian dollars (CAD) and include applicable taxes unless otherwise stated.</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3">4. Payment Terms</h2>
                <ul className="list-disc pl-6 flex flex-col gap-2" style={{ color: 'var(--ink)' }}>
                  <li>Payment is due upon completion of service unless other arrangements have been made in writing in advance.</li>
                  <li>We accept cash, debit, credit card, and e-transfer.</li>
                  <li>For commercial and property management accounts, net terms may be available — contact us to discuss.</li>
                  <li>Invoices not paid within 30 days of the invoice date may be subject to a late payment fee of 1.5% per month.</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3">5. Service Guarantee</h2>
                <p className="mb-3">
                  Our service guarantee covers the specific drain line and blockage type we serviced.
                </p>
                <div className="p-5 rounded-xl" style={{ backgroundColor: 'var(--orange-100)', border: '2px solid var(--orange-600)' }}>
                  <p className="font-700 mb-2" style={{ fontWeight: 700, color: 'var(--navy-900)' }}>30-Day Service Guarantee</p>
                  <p style={{ color: 'var(--ink)' }}>
                    If the same drain line blocks again within 30 days of our service, we will return and re-clear it at no charge, subject to the conditions below. This guarantee applies to the specific line and blockage type we serviced, and does not cover new blockages caused by different issues, structural pipe damage, or conditions outside our control.
                  </p>
                </div>
                <ul className="list-disc pl-6 flex flex-col gap-2 mt-4" style={{ color: 'var(--ink)' }}>
                  <li>The guarantee applies only to the specific service performed, not to the entire drainage system.</li>
                  <li>The guarantee does not apply if the blockage is caused by a new obstruction (e.g., a foreign object flushed after our service), structural pipe damage, or conditions that were not present at the time of service.</li>
                  <li>To claim the guarantee, contact us at <Link href="tel:+12043994413" style={{ color: 'var(--orange-600)' }}>+1 (204) 399-4413</Link> or <Link href="mailto:prodraincleaningcentre@gmail.com" style={{ color: 'var(--orange-600)' }}>prodraincleaningcentre@gmail.com</Link> within the guarantee period.</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3">6. Coupon and Discount Terms</h2>
                <ul className="list-disc pl-6 flex flex-col gap-2" style={{ color: 'var(--ink)' }}>
                  <li>The &quot;Up to 10% Off First Service&quot; offer is available to new customers only — defined as customers who have not previously received a paid service from Pro Drain Cleaning Limited.</li>
                  <li>One discount per household or business address.</li>
                  <li>The discount is applied to the invoice at the time of service. It cannot be applied retroactively.</li>
                  <li>Cannot be combined with any other offer, promotion, or discount.</li>
                  <li>Valid for drain cleaning, sewer line unclogging, camera inspection, and plumbing repair services.</li>
                  <li>Valid for residential and commercial customers.</li>
                  <li>Valid for daytime and after-hours service calls.</li>
                  <li>No expiry date — offer valid until withdrawn.</li>
                  <li>No minimum invoice amount.</li>
                  <li>We reserve the right to modify or withdraw this offer at any time without notice.</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3">7. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by applicable law, Pro Drain Cleaning Limited&apos;s liability for any claim arising from our services is limited to the amount paid for the specific service that gave rise to the claim. We are not liable for indirect, consequential, or incidental damages.
                </p>
                <p className="mt-3">
                  We are not responsible for pre-existing pipe damage, structural defects, or conditions that were not caused by our work. We will inform you of any pre-existing conditions we observe during service.
                </p>
              </section>

              <section>
                <h2 className="mb-3">8. Governing Law</h2>
                <p>
                  These terms are governed by the laws of the Province of Manitoba and the federal laws of Canada applicable therein. Any disputes arising from these terms or our services will be subject to the exclusive jurisdiction of the courts of Manitoba.
                </p>
              </section>

              <section>
                <h2 className="mb-3">9. Changes to These Terms</h2>
                <p>
                  We may update these terms from time to time. The &quot;Last updated&quot; date at the top of this page reflects the most recent revision. Continued use of our services after a terms update constitutes acceptance of the revised terms.
                </p>
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
