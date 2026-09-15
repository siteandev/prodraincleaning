'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';

const SHEETS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwGfXgs7O6qJun17qd2G67mhRzPGe0HRYr7eSHsxYe-bCh9lvjMKtIg2VVhEHVLgFaO/exec';

export default function CouponInlineForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', consent: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [submitError, setSubmitError] = useState(false);
  const [copied, setCopied] = useState(false);
  const honeypotRef = useRef<HTMLInputElement>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name || formData.name.trim().length < 2) errs.name = 'Please enter your name.';
    if (!formData.phone || !/^[\d\s\-\(\)\+\.]{10,}$/.test(formData.phone)) errs.phone = 'Valid phone required.';
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Valid email required.';
    if (!formData.consent) errs.consent = 'Please agree to be contacted.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypotRef.current?.value) return;
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch(SHEETS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ ...formData, formType: 'coupon', submitted_at: new Date().toISOString() }),
        redirect: 'follow'
      });
      const data = await res.json();
      setCouponCode(data.couponCode || 'PRODRAIN10');
    } catch (err) {
      console.error(err);
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (couponCode) {
    return (
      <div className="text-center flex flex-col items-center">
        <div className="text-3xl mb-2">🎉</div>
        <h3 className="font-700 text-lg mb-3" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>Your code is ready!</h3>
        <div
          className="w-full rounded-lg p-4 mb-3 flex items-center justify-between gap-3"
          style={{ backgroundColor: 'var(--orange-100)', border: '2px dashed var(--orange-600)' }}>
          <span className="font-mono font-800 text-xl tracking-widest" style={{ color: 'var(--navy-900)', fontWeight: 800 }}>{couponCode}</span>
          <button
            onClick={() => { navigator.clipboard.writeText(couponCode); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
            className="btn-primary text-sm px-4 py-2">
            {copied ? '✓ Copied!' : 'Copy'}
          </button>
        </div>
        <p className="text-sm" style={{ color: 'var(--muted)' }}>
          Your code is on its way to {formData.email} as well. Show it when you book —{' '}
          <Link href="tel:+12043994413" className="underline font-600" style={{ color: 'var(--orange-600)', fontWeight: 600 }}>
            call +1 (204) 399-4413
          </Link>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input ref={honeypotRef} type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }} />
      <div className="grid sm:grid-cols-3 gap-4 mb-4">
        <div>
          <label htmlFor="offer-name" className="form-label">Name *</label>
          <input id="offer-name" type="text" className={`form-input ${errors.name ? 'error' : ''}`} placeholder="Jane Smith" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="offer-phone" className="form-label">Phone *</label>
          <input id="offer-phone" type="tel" className={`form-input ${errors.phone ? 'error' : ''}`} placeholder="204-555-0123" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
          {errors.phone && <span className="form-error">{errors.phone}</span>}
        </div>
        <div>
          <label htmlFor="offer-email" className="form-label">Email *</label>
          <input id="offer-email" type="email" className={`form-input ${errors.email ? 'error' : ''}`} placeholder="jane@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>
      </div>
      <div className="mb-4">
        <label className="flex items-center gap-2.5 cursor-pointer">
          <input type="checkbox" checked={formData.consent} onChange={(e) => setFormData({ ...formData, consent: e.target.checked })} className="w-4 h-4" style={{ accentColor: 'var(--orange-600)' }} />
          <span className="text-sm" style={{ color: 'var(--muted)' }}>I agree to be contacted about my service request.</span>
        </label>
        {errors.consent && <span className="form-error">{errors.consent}</span>}
      </div>
      {submitError && (
        <p className="text-sm mb-3" style={{ color: '#dc2626' }}>
          Something went wrong. Please <Link href="tel:+12043994413" className="underline">call us at +1 (204) 399-4413</Link>.
        </p>
      )}
      <button type="submit" disabled={submitting} className="btn-primary shimmer-btn w-full justify-center text-base">
        {submitting ? 'Sending…' : 'Send My 10% Off Code'}
      </button>
      <p className="text-xs text-center mt-3" style={{ color: 'var(--muted)' }}>
        We use your details to send your code and contact you about your service. No spam, no list-selling, unsubscribe any time.
      </p>
      <p className="text-xs text-center mt-2" style={{ color: 'var(--muted)' }}>
        Up to 10% off, applied to the invoice at time of service. New customers only, one per household or business address. Cannot be combined with other offers. No minimum invoice amount. No expiry.
      </p>
    </form>
  );
}
