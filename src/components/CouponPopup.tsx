'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

const SHEETS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwGfXgs7O6qJun17qd2G67mhRzPGe0HRYr7eSHsxYe-bCh9lvjMKtIg2VVhEHVLgFaO/exec';
const STORAGE_KEY = 'pdc_coupon_state';
const COOKIE_KEY = 'pdc_seen';

function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}

export default function CouponPopup() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  const shouldShow = useCallback((): boolean => {
    if (typeof window === 'undefined') return false;
    if (window.location.search.includes('nocoupon=1')) return false;
    const noShowPaths = ['/thank-you', '/privacy-policy', '/terms'];
    if (noShowPaths.includes(window.location.pathname)) return false;
    if (getCookie(COOKIE_KEY)) return false;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return true;
    try {
      let state = JSON.parse(stored);
      if (state.submitted) return false;
      if (state.shown) {
        const daysSince = (Date.now() - state.ts) / (1000 * 60 * 60 * 24);
        return daysSince >= 14;
      }
    } catch { /* ignore */ }
    return true;
  }, []);

  const markShown = useCallback(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    let state = { shown: false, ts: 0, submitted: false };
    try { if (stored) state = JSON.parse(stored); } catch { /* ignore */ }
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, shown: true, ts: Date.now() }));
    setCookie(COOKIE_KEY, '1', 365);
  }, []);

  useEffect(() => {
    let fired = false;
    const fire = () => {
      if (fired) return;
      fired = true;
      if (shouldShow()) {
        setVisible(true);
        markShown();
      }
    };

    const isMobile = window.innerWidth < 768;
    const timeDelay = isMobile ? 12000 : 8000;
    const scrollThreshold = isMobile ? 0.5 : 0.45;

    const timer = setTimeout(fire, timeDelay);

    const handleScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled >= scrollThreshold) fire();
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (!isMobile && e.clientY <= 0) fire();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    if (!isMobile) document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [shouldShow, markShown]);

  useEffect(() => {
    if (visible) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = scrollbarWidth > 0 ? `${scrollbarWidth}px` : '';
      document.documentElement.style.overflow = 'hidden';
      setTimeout(() => firstFocusRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.documentElement.style.overflow = '';
    };
  }, [visible]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && visible) handleDecline();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const handleDecline = () => {
    setVisible(false);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name || name.trim().length < 2) errs.name = 'Please enter your name.';
    if (!phone || !/^[\d\s\-\(\)\+\.]{10,}$/.test(phone)) errs.phone = 'Please enter a valid phone number.';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Please enter a valid email.';
    if (!consent) errs.consent = 'Please agree to be contacted.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypotRef.current?.value) return;
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError(false);

    const payload = {
      name, phone, email, consent,
      formType: 'coupon',
      page_url: typeof window !== 'undefined' ? window.location.href : '',
      submitted_at: new Date().toISOString(),
    };

    try {
      const res = await fetch(SHEETS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
        redirect: 'follow',
      });
      const data = await res.json();
      const code = data.couponCode || 'PRODRAIN10';
      setCouponCode(code);
      const stored = localStorage.getItem(STORAGE_KEY);
      let state = { shown: true, ts: Date.now(), submitted: false };
      try { if (stored) state = JSON.parse(stored); } catch { /* ignore */ }
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, submitted: true }));

      // Google Ads: form submission conversion
      if (typeof window !== 'undefined' && typeof (window as Window & { gtagReportFormConversion?: () => void }).gtagReportFormConversion === 'function') {
        (window as Window & { gtagReportFormConversion?: () => void }).gtagReportFormConversion!();
      }
    } catch (err) {
      console.error('Coupon form error:', err);
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="coupon-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(11,79,108,0.6)', backdropFilter: 'blur(4px)' }}
        onClick={handleDecline}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative w-full sm:max-w-md bg-white sm:rounded-brand shadow-2xl overflow-hidden"
        style={{
          maxHeight: '95vh',
          overflowY: 'auto',
          borderRadius: 'var(--radius)',
        }}
      >
        {/* Close button */}
        <button
          ref={firstFocusRef}
          onClick={handleDecline}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition-colors focus-ring"
          aria-label="Close offer popup"
          style={{ color: 'var(--muted)' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Orange header band */}
        <div
          className="w-full py-5 px-6 text-center relative overflow-hidden"
          style={{ backgroundColor: 'var(--orange-600)' }}
        >
          <div className="absolute inset-0 grain-overlay" aria-hidden="true" />
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white font-800 text-2xl mb-1"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)', fontWeight: 800 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="white"/>
            </svg>
            10% OFF
          </div>
          <p className="text-white/90 text-sm font-500">Your First Service</p>
        </div>

        {/* Body */}
        <div className="p-6">
          {couponCode ? (
            <div className="text-center flex flex-col items-center">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="text-xl font-700 mb-2" id="coupon-title" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>You&apos;re in!</h3>
              <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>Show this code when you book:</p>
              <div
                className="w-full rounded-lg p-4 mb-3 flex items-center justify-between gap-3"
                style={{ backgroundColor: 'var(--orange-100)', border: '2px dashed var(--orange-600)' }}
              >
                <span className="font-mono font-800 text-xl tracking-widest" style={{ color: 'var(--navy-900)', fontWeight: 800 }}>{couponCode}</span>
                <button
                  onClick={handleCopy}
                  className="btn-primary text-sm px-4 py-2"
                  aria-label="Copy coupon code"
                >
                  {copied ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
              <p className="text-sm mb-5" style={{ color: 'var(--muted)' }}>Also sent to <strong>{email}</strong></p>
              <Link href="tel:+12043994413" className="btn-primary w-full justify-center">
                Call Now — +1 (204) 399-4413
              </Link>
            </div>
          ) : (
            <>
              <h2 id="coupon-title" className="text-xl font-700 mb-2" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
                Save Up to 10% On Your First Service
              </h2>
              <p className="text-sm mb-5" style={{ color: 'var(--muted)' }}>
                New customer? Take up to 10% off your first drain cleaning, sewer unclogging or plumbing repair. Enter your details and we&apos;ll send your code right now.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <input
                  ref={honeypotRef}
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px' }}
                />
                <div className="flex flex-col gap-3 mb-4">
                  <div>
                    <label htmlFor="coupon-name" className="form-label">Full Name *</label>
                    <input id="coupon-name" type="text" className={`form-input ${errors.name ? 'error' : ''}`} placeholder="Jane Smith" value={name} onChange={(e) => setName(e.target.value)} required />
                    {errors.name && <span className="form-error" role="alert">{errors.name}</span>}
                  </div>
                  <div>
                    <label htmlFor="coupon-phone" className="form-label">Phone *</label>
                    <input id="coupon-phone" type="tel" className={`form-input ${errors.phone ? 'error' : ''}`} placeholder="204-555-0123" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    {errors.phone && <span className="form-error" role="alert">{errors.phone}</span>}
                  </div>
                  <div>
                    <label htmlFor="coupon-email" className="form-label">Email *</label>
                    <input id="coupon-email" type="email" className={`form-input ${errors.email ? 'error' : ''}`} placeholder="jane@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    {errors.email && <span className="form-error" role="alert">{errors.email}</span>}
                  </div>
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ accentColor: 'var(--orange-600)' }} required />
                    <span className="text-xs" style={{ color: 'var(--muted)' }}>I agree to be contacted about my service request.</span>
                  </label>
                  {errors.consent && <span className="form-error" role="alert">{errors.consent}</span>}
                </div>

                {submitError && (
                  <p className="text-sm mb-3" style={{ color: '#dc2626' }}>
                    Something went wrong. Please <Link href="tel:+12043994413" className="underline">call us</Link>.
                  </p>
                )}

                <button type="submit" disabled={submitting} className="btn-primary shimmer-btn w-full justify-center text-base mb-3">
                  {submitting ? 'Sending…' : 'Get My 10% Off Code'}
                </button>
                <p className="text-xs text-center" style={{ color: 'var(--muted)' }}>
                  No spam. We only use this to send your code and contact you about your service.
                </p>
              </form>

              <button
                onClick={handleDecline}
                className="w-full text-center text-xs mt-4 hover:underline"
                style={{ color: 'var(--muted)', background: 'none', border: 'none' }}
                aria-label="Decline offer"
              >
                No thanks, I&apos;ll pay full price
              </button>

              <p className="text-xs mt-4 pt-3 border-t" style={{ color: 'var(--muted)', borderColor: 'var(--line)' }}>
                Up to 10% off, applied at time of invoice. New customers only, one per household or business. Cannot be combined with other offers. No expiry.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}