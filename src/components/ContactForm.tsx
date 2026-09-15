'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { pushEvent } from '@/components/Analytics';

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
  { group: 'Plumbing', options: ['Water Heater Replacement','Water Heater Repair','Leak Detection','Backwater Valve','Sump Pump','General Plumbing','Not Sure — Need Diagnosis'] },
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

interface ContactFormProps {
  prefilledService?: string;
  prefilledUrgency?: string;
  compact?: boolean;
}

export default function ContactForm({ prefilledService = '', prefilledUrgency = '', compact = false }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '', phone: '', email: '', city: 'Winnipeg',
    service: prefilledService, urgency: prefilledUrgency || '',
    message: '', consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name || formData.name.trim().length < 2) newErrors.name = 'Please enter your full name.';
    if (!formData.phone || !/^[\d\s\-\(\)\+\.]{10,}$/.test(formData.phone)) newErrors.phone = 'Please enter a valid phone number (10+ digits).';
    if (!compact && (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))) newErrors.email = 'Please enter a valid email address.';
    if (!formData.service) newErrors.service = 'Please select the service you need.';
    if (!formData.urgency) newErrors.urgency = 'Please select your urgency level.';
    if (!formData.consent) newErrors.consent = 'Please agree to be contacted.';
    setErrors(newErrors);

    const errorFields = Object.keys(newErrors);
    if (errorFields.length > 0) {
      pushEvent('form_error', {
        form_id: 'contact_form',
        error_fields: errorFields.join(','),
        service: formData.service || undefined,
        city: formData.city || undefined,
      });
    }

    return errorFields.length === 0;
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
      page_url: typeof window !== 'undefined' ? window.location.href : '',
      page_title: typeof window !== 'undefined' ? document.title : '',
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
      router.push('/thank-you');

      // GA4: form_submit with lead-quality dimensions
      pushEvent('form_submit', {
        form_id: 'contact_form',
        service: formData.service,
        city: formData.city,
        urgency: formData.urgency,
        page_url: typeof window !== 'undefined' ? window.location.href : '',
      });

      // Google Ads: form submission conversion
      if (typeof window !== 'undefined' && typeof (window as Window & { gtagReportFormConversion?: () => void }).gtagReportFormConversion === 'function') {
        (window as Window & { gtagReportFormConversion?: () => void }).gtagReportFormConversion!();
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setSubmitError(true);

      pushEvent('form_submit_error', {
        form_id: 'contact_form',
        service: formData.service || undefined,
        city: formData.city || undefined,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
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
          <label htmlFor="contact-name" className="form-label">Full Name *</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            className={`form-input ${errors.name ? 'error' : ''}`}
            placeholder="Jane Smith"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            aria-required="true"
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && <span id="name-error" className="form-error" role="alert">{errors.name}</span>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="contact-phone" className="form-label">Phone Number *</label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            className={`form-input ${errors.phone ? 'error' : ''}`}
            placeholder="204-555-0123"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            aria-required="true"
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && <span id="phone-error" className="form-error" role="alert">{errors.phone}</span>}
        </div>

        {/* Email */}
        {!compact && (
          <div>
            <label htmlFor="contact-email" className="form-label">Email Address *</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="jane@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              aria-required="true"
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && <span id="email-error" className="form-error" role="alert">{errors.email}</span>}
          </div>
        )}

        {/* City */}
        {!compact && (
          <div>
            <label htmlFor="contact-city" className="form-label">City / Area</label>
            <select
              id="contact-city"
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
        )}

        {/* Service */}
        <div>
          <label htmlFor="contact-service" className="form-label">Service Needed *</label>
          <select
            id="contact-service"
            name="service"
            className={`form-input ${errors.service ? 'error' : ''}`}
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            required
            aria-required="true"
            aria-describedby={errors.service ? 'service-error' : undefined}
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
          {errors.service && <span id="service-error" className="form-error" role="alert">{errors.service}</span>}
        </div>

        {/* Urgency */}
        <fieldset>
          <legend className="form-label">How urgent is this? *</legend>
          <div className="flex flex-col gap-2 mt-1">
            {[
              { value: 'emergency', label: '🚨 Emergency – happening now' },
              { value: 'today', label: 'Today' },
              { value: 'few-days', label: 'Within a few days' },
              { value: 'quote', label: 'Just getting a quote' },
            ].map((opt) => (
              <label key={opt.value} className="flex items-center gap-2.5 cursor-pointer text-sm font-500" style={{ fontWeight: 500 }}>
                <input
                  type="radio"
                  name="urgency"
                  value={opt.value}
                  checked={formData.urgency === opt.value}
                  onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                  className="w-4 h-4 accent-orange-600"
                  style={{ accentColor: 'var(--orange-600)' }}
                />
                {opt.label}
              </label>
            ))}
          </div>
          {errors.urgency && <span className="form-error" role="alert">{errors.urgency}</span>}
        </fieldset>

        {/* Message */}
        {!compact && (
          <div>
            <label htmlFor="contact-message" className="form-label">What&apos;s going on? (optional)</label>
            <textarea
              id="contact-message"
              name="message"
              className="form-input"
              rows={3}
              placeholder="Briefly describe what you're seeing..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{ resize: 'vertical' }}
            />
          </div>
        )}

        {/* Consent */}
        <div>
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="w-4 h-4 mt-0.5 flex-shrink-0"
              style={{ accentColor: 'var(--orange-600)' }}
              required
              aria-required="true"
            />
            <span className="text-sm" style={{ color: 'var(--muted)' }}>
              I agree to be contacted about my service request.
            </span>
          </label>
          {errors.consent && <span className="form-error" role="alert">{errors.consent}</span>}
        </div>

        {/* Submit */}
        {submitError && (
          <div
            className="p-4 rounded-lg text-sm"
            style={{ backgroundColor: '#fef2f2', border: '1px solid #fca5a5', color: '#dc2626' }}
            role="alert"
          >
            Something went wrong. Please{' '}
            <Link href="tel:+12043994413" className="underline font-600" style={{ fontWeight: 600 }}>
              call or WhatsApp us at +1 (204) 399-4413
            </Link>
            {' '}— we&apos;re available 24/7.
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="btn-primary shimmer-btn w-full text-base justify-center"
          aria-label="Submit contact form"
        >
          {submitting ? (
            <>
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              Sending…
            </>
          ) : (
            <>Request Callback — We Answer 24/7</>
          )}
        </button>
      </div>
    </form>
  );
}