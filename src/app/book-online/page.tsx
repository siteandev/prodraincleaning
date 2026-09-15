'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrustStrip from '@/components/TrustStrip';
import AnnouncementBar from '@/components/AnnouncementBar';
import MobileActionBar from '@/components/MobileActionBar';

const SHEETS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwGfXgs7O6qJun17qd2G67mhRzPGe0HRYr7eSHsxYe-bCh9lvjMKtIg2VVhEHVLgFaO/exec';

const cityOptions = [
  'Winnipeg','St. Norbert','Selkirk','Headingley','Oak Bluff','Lorette',
  'Île des Chênes','St. Adolphe','Niverville','Steinbach','Stonewall',
  'Oakbank','Dugald','Beausejour','East St. Paul','West St. Paul',
  'Teulon','Gimli','Portage la Prairie','Morris','Carman','Other',
];

const serviceOptions = [
  { group: 'Drain Cleaning', options: ['Kitchen Drain Cleaning','Bathroom Sink Drain','Shower/Tub Drain','Toilet Unclogging','Floor Drain Cleaning','Laundry Drain Cleaning'] },
  { group: 'Sewer Line', options: ['Main Sewer Line Unclogging','Sewer Camera Inspection','Root Intrusion Clearing','Sewer Line Hydro Jetting'] },
  { group: 'Commercial', options: ['Restaurant Grease Line Cleaning','Commercial Floor Drain','3-Compartment Sink Line','Grease Trap Service','Maintenance Program'] },
  { group: 'Emergency', options: ['Emergency Sewer Backup','Emergency Flooding','Emergency Toilet Overflow'] },
  { group: 'Other', options: ['Backwater Valve','Sump Pump','General Plumbing','Not Sure — Need Diagnosis'] },
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  urgency: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  urgency?: string;
  consent?: string;
}

export default function BookOnlinePage() {
  const [formData, setFormData] = useState<FormData>({
    name: '', phone: '', email: '', city: 'Winnipeg',
    service: '', urgency: '', message: '', consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [pageUrl, setPageUrl] = useState('');
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    setPageUrl(window.location.href);
    setPageTitle(document.title);
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name || formData.name.trim().length < 2) newErrors.name = 'Please enter your full name.';
    if (!formData.phone || !/^[\d\s\-\(\)\+\.]{10,}$/.test(formData.phone)) newErrors.phone = 'Please enter a valid phone number (10+ digits).';
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address.';
    if (!formData.service) newErrors.service = 'Please select the service you need.';
    if (!formData.urgency) newErrors.urgency = 'Please select your urgency level.';
    if (!formData.consent) newErrors.consent = 'Please agree to be contacted.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypotRef.current?.value) return;
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError(false);

    const payload = {
      ...formData,
      formType: 'contact',
      page_url: pageUrl,
      page_title: pageTitle,
      submitted_at: new Date().toISOString(),
    };

    try {
      const res = await fetch(SHEETS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
        redirect: 'follow',
      });
      await res.json();
      if (typeof window !== 'undefined' && window.dataLayer) {
        (window as unknown as { dataLayer: unknown[] }).dataLayer.push({ event: 'generate_lead', form_type: 'contact' });
      }
      router.push('/thank-you');
    } catch (err) {
      console.error('Form submission error:', err);
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <AnnouncementBar />
      <Header />

      <main id="main-content" className="mobile-pb">
        {/* Hero */}
        <section
          className="py-14 relative overflow-hidden"
          style={{ backgroundColor: 'var(--navy-900)' }}
          aria-labelledby="book-heading"
        >
          <div className="grain-overlay" aria-hidden="true" />
          <div className="container-wide relative z-10 max-w-3xl mx-auto text-center">
            <h1 id="book-heading" className="text-white mb-4">
              Book Drain Cleaning in Winnipeg
            </h1>
            <p className="text-xl leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.82)' }}>
              Same-day available for most Winnipeg calls. Fill in the form and a real technician will call you right back — 24/7.
            </p>
            <div
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <span className="w-2.5 h-2.5 rounded-full animate-pulse flex-shrink-0" style={{ backgroundColor: 'var(--success)' }} aria-hidden="true" />
              <span className="text-sm text-white" style={{ fontWeight: 600 }}>
                If it&apos;s urgent — call{' '}
                <Link href="tel:+12043994413" className="underline" style={{ color: 'var(--orange-500)' }}>
                  +1 (204) 399-4413
                </Link>{' '}
                right now
              </span>
            </div>
          </div>
        </section>

        <TrustStrip />

        {/* Booking form section */}
        <section className="section-padding" style={{ backgroundColor: 'var(--navy-100)' }} aria-labelledby="booking-form-heading">
          <div className="container-wide max-w-2xl mx-auto">
            <div className="bg-white rounded-brand p-8 shadow-brand">
              <h2 id="booking-form-heading" className="mb-2" style={{ color: 'var(--navy-900)', fontWeight: 700, fontSize: '1.4rem' }}>
                Book Your Service
              </h2>
              <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
                We&apos;ll call you at the number you provide to confirm your appointment and give you an arrival window.
              </p>

              <form onSubmit={handleSubmit} noValidate aria-label="Booking form">
                  {/* Honeypot */}
                  <input
                    ref={honeypotRef}
                    type="text"
                    name="company_website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ position: 'absolute', left: '-9999px' }}
                  />

                  <div className="flex flex-col gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="book-name" className="form-label">Full Name *</label>
                      <input
                        id="book-name"
                        type="text"
                        name="name"
                        className={`form-input${errors.name ? ' error' : ''}`}
                        placeholder="Jane Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        aria-required="true"
                        aria-describedby={errors.name ? 'book-name-error' : undefined}
                      />
                      {errors.name && <span id="book-name-error" className="form-error" role="alert">{errors.name}</span>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="book-phone" className="form-label">Phone Number *</label>
                      <input
                        id="book-phone"
                        type="tel"
                        name="phone"
                        className={`form-input${errors.phone ? ' error' : ''}`}
                        placeholder="204-555-0123"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        aria-required="true"
                        aria-describedby={errors.phone ? 'book-phone-error' : undefined}
                      />
                      {errors.phone && <span id="book-phone-error" className="form-error" role="alert">{errors.phone}</span>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="book-email" className="form-label">Email Address *</label>
                      <input
                        id="book-email"
                        type="email"
                        name="email"
                        className={`form-input${errors.email ? ' error' : ''}`}
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        aria-required="true"
                        aria-describedby={errors.email ? 'book-email-error' : undefined}
                      />
                      {errors.email && <span id="book-email-error" className="form-error" role="alert">{errors.email}</span>}
                    </div>

                    {/* City */}
                    <div>
                      <label htmlFor="book-city" className="form-label">City / Area</label>
                      <select
                        id="book-city"
                        name="city"
                        className="form-input"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      >
                        {cityOptions.map((city) => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="book-service" className="form-label">Service Needed *</label>
                      <select
                        id="book-service"
                        name="service"
                        className={`form-input${errors.service ? ' error' : ''}`}
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        required
                        aria-required="true"
                        aria-describedby={errors.service ? 'book-service-error' : undefined}
                      >
                        <option value="">Select a service...</option>
                        {serviceOptions.map((group) => (
                          <optgroup key={group.group} label={group.group}>
                            {group.options.map((opt) => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                      {errors.service && <span id="book-service-error" className="form-error" role="alert">{errors.service}</span>}
                    </div>

                    {/* Urgency */}
                    <fieldset>
                      <legend className="form-label">How urgent is this? *</legend>
                      <div className="flex flex-col gap-2 mt-1">
                        {[
                          { value: 'emergency', label: 'Emergency – happening now' },
                          { value: 'today', label: 'Today' },
                          { value: 'few-days', label: 'Within a few days' },
                          { value: 'planning', label: 'Just planning ahead' },
                        ].map((opt) => (
                          <label key={opt.value} className="flex items-center gap-2.5 cursor-pointer text-sm" style={{ color: 'var(--ink)' }}>
                            <input
                              type="radio"
                              name="urgency"
                              value={opt.value}
                              checked={formData.urgency === opt.value}
                              onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                              className="accent-orange-600"
                              aria-describedby={errors.urgency ? 'book-urgency-error' : undefined}
                            />
                            {opt.label}
                          </label>
                        ))}
                      </div>
                      {errors.urgency && <span id="book-urgency-error" className="form-error" role="alert">{errors.urgency}</span>}
                    </fieldset>

                    {/* Message */}
                    <div>
                      <label htmlFor="book-message" className="form-label">Describe the Problem (optional)</label>
                      <textarea
                        id="book-message"
                        name="message"
                        className="form-input"
                        rows={4}
                        placeholder="e.g. Kitchen sink draining slowly for 2 weeks, basement floor drain backed up last night..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    {/* Consent */}
                    <div>
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                          className="mt-0.5 accent-orange-600"
                          aria-describedby={errors.consent ? 'book-consent-error' : undefined}
                        />
                        <span className="text-sm" style={{ color: 'var(--muted)' }}>
                          I agree to be contacted by Pro Drain Cleaning Limited by phone or email regarding my service request. See our{' '}
                          <Link href="/privacy-policy" className="underline" style={{ color: 'var(--navy-900)' }}>
                            Privacy Policy
                          </Link>.
                        </span>
                      </label>
                      {errors.consent && <span id="book-consent-error" className="form-error" role="alert">{errors.consent}</span>}
                    </div>

                    {submitError && (
                      <div
                        className="rounded-brand p-4 text-sm"
                        style={{ backgroundColor: '#fef2f2', border: '1px solid #fca5a5', color: '#991b1b' }}
                        role="alert"
                      >
                        Something went wrong. Please try again or call us directly at{' '}
                        <Link href="tel:+12043994413" className="font-bold underline">+1 (204) 399-4413</Link>.
                      </div>
                    )}

                    <button
                      type="submit"
                      className="btn-primary w-full justify-center text-base"
                      disabled={submitting}
                      aria-busy={submitting}
                    >
                      {submitting ? 'Sending…' : 'Book My Service →'}
                    </button>

                    <p className="text-xs text-center" style={{ color: 'var(--muted)' }}>
                      Or call us directly:{' '}
                      <Link href="tel:+12043994413" className="font-bold" style={{ color: 'var(--navy-900)' }}>
                        +1 (204) 399-4413
                      </Link>{' '}
                      — answered 24/7
                    </p>
                  </div>
                </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileActionBar />
    </>
  );
}