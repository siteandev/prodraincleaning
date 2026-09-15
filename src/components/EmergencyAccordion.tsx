'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const SHEETS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwGfXgs7O6qJun17qd2G67mhRzPGe0HRYr7eSHsxYe-bCh9lvjMKtIg2VVhEHVLgFaO/exec';

interface AccordionItem {
  id: string;
  icon: string;
  title: string;
  teaser: string;
  description: string;
  included: string[];
  serviceName: string;
}

const items: AccordionItem[] = [
  {
    id: 'emergency-drain-cleaning',
    icon: '🚨',
    title: '24/7 Emergency Drain Cleaning',
    teaser: 'Any drain, any hour, any day of the year — cleared on the first visit.',
    description: 'A drain that stops at 11 p.m. doesn\'t wait politely until Monday, and neither do we. We clear kitchen sinks, bathroom sinks, tubs, showers, toilets, laundry lines, floor drains and main sewer lines at any hour, every day of the year including statutory holidays. Call or WhatsApp and a technician answers directly — you\'ll be talking to someone who can actually diagnose the problem, not a dispatcher reading a script. We\'ll tell you what to stop doing immediately to limit damage, quote you a realistic range on the phone, and arrive with every machine needed so there\'s no "we\'ll come back tomorrow with the right equipment."',
    included: [
      'Live 24/7/365 answer by a technician',
      'Immediate damage-limitation guidance on the phone',
      'Priority dispatch for active water',
      'Fully equipped trucks, cleared in one visit',
      'Upfront flat pricing even after hours',
    ],
    serviceName: '24/7 Emergency Drain Cleaning',
  },
  {
    id: 'emergency-sewer-backup-service',
    icon: '💧',
    title: 'Emergency Sewer Backup Service',
    teaser: 'Sewage coming up your floor drain — stopped, cleared, cleaned and documented.',
    description: 'Sewage backing up into a basement is the most urgent call we take, because every minute the contamination spreads further and more porous material is written off. Stop using every fixture in the building the moment you notice it — every flush and every wash cycle adds volume to a line that has nowhere to send it. We prioritise these calls, clear the blockage at the source so nothing more comes in, extract the standing sewage, sanitise the affected hard surfaces, and camera the line to prove what caused it. You get dated footage and a written report for your insurer, and honest advice on preventing a repeat — which for many Winnipeg homes means a backwater valve.',
    included: [
      'Top-priority emergency dispatch',
      'Blockage cleared at source to stop the backup',
      'Sewage extraction and surface sanitising',
      'Camera inspection with dated footage',
      'Written report for your insurance claim',
      'Prevention plan, including backwater valve assessment',
    ],
    serviceName: 'Emergency Sewer Backup Service',
  },
  {
    id: 'emergency-clogged-toilet-service',
    icon: '🚽',
    title: 'Emergency Clogged Toilet Service',
    teaser: 'Overflowing or unusable toilet, cleared fast — including single-bathroom homes and businesses.',
    description: 'If it\'s your only toilet, or you run a restaurant with customers in the dining room, a blocked toilet is an emergency by any reasonable definition. First: shut the supply valve behind the toilet — turn it clockwise — to stop the bowl overflowing. Then call us. We clear obstructions with a porcelain-safe closet auger, retrieve foreign objects, and where something is genuinely lodged in the trapway we pull the toilet, clear it, and reset it on a new wax ring. If the auger shows the blockage is further downstream, we move straight to the branch or main line, because a "toilet problem" affecting other fixtures too is a main sewer line problem.',
    included: [
      'Porcelain-safe closet auger clearing',
      'Foreign object retrieval',
      'Toilet pull, clear and reset with new wax ring if needed',
      'Escalation to branch or main line if the blockage is downstream',
      'Flush, seal and leak test',
    ],
    serviceName: 'Emergency Clogged Toilet Service',
  },
  {
    id: 'emergency-flood-response',
    icon: '🌊',
    title: 'Emergency Flood Response',
    teaser: 'Burst pipe, failed sump pump or overwhelmed drain — source stopped, water out, drying started.',
    description: 'Whether it\'s a split pipe in an exterior wall, a sump pump that failed during the melt, an overwhelmed floor drain during a downpour, or a supply line that let go behind a washing machine, the sequence is the same and the clock is real: stop the source, get the water out, start drying immediately. If you can do it safely, shut off your main water valve before we arrive. We locate and stop the source, clear any drain that\'s contributing to the problem, extract standing water, and get airflow moving so the structure starts drying rather than sitting wet. Then we document the cause with photos and camera footage for your insurance claim, and coordinate with your restoration contractor where one is needed.',
    included: [
      'Emergency source location and shut-off',
      'Burst pipe repair and drain clearing',
      'Standing water extraction',
      'Drying and airflow set-up',
      'Photo and camera documentation for insurance',
      'Coordination with your restoration contractor',
    ],
    serviceName: 'Emergency Flood Response',
  },
];

interface MiniFormProps {
  serviceName: string;
  formId: string;
}

function MiniForm({ serviceName, formId }: MiniFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [nameErr, setNameErr] = useState('');
  const [phoneErr, setPhoneErr] = useState('');
  const honeypotRef = useRef<HTMLInputElement>(null);
  const [pageUrl, setPageUrl] = useState('');

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypotRef.current?.value) return;
    let valid = true;
    if (!name || name.trim().length < 2) { setNameErr('Please enter your name.'); valid = false; } else setNameErr('');
    if (!phone || !/^[\d\s\-\(\)\+\.]{10,}$/.test(phone)) { setPhoneErr('Please enter a valid phone number.'); valid = false; } else setPhoneErr('');
    if (!valid) return;

    setSubmitting(true);
    setSubmitError(false);
    const payload = {
      name,
      phone,
      email,
      message,
      service: serviceName,
      formType: 'contact',
      page_url: pageUrl,
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
      setSubmitted(true);
    } catch (err) {
      console.error('Mini form error:', err);
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="rounded-brand p-5 text-center"
        style={{ backgroundColor: '#f0fdf4', border: '1.5px solid #16a34a' }}
        role="alert"
        aria-live="polite"
      >
        <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: '#16a34a' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <p className="font-700 mb-1" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>
          Got it, {name.split(' ')[0]}.
        </p>
        <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
          We&apos;ll call you at {phone} shortly.
        </p>
        <Link href="tel:+12043994413" className="btn-primary text-sm" onClick={() => { if (typeof (window as any).gtag_report_conversion === 'function') { (window as any).gtag_report_conversion('tel:+12043994413'); } }}>
          Call +1 (204) 399-4413 Now
        </Link>
      </div>
    );
  }

  if (submitError) {
    return (
      <div
        className="rounded-brand p-5 text-center"
        style={{ backgroundColor: '#fff1f0', border: '1.5px solid #e53e3e' }}
        role="alert"
      >
        <p className="text-sm mb-3" style={{ color: '#c53030' }}>
          Something went wrong. Please call or WhatsApp us at{' '}
          <Link href="tel:+12043994413" className="underline font-700" style={{ color: 'var(--orange-600)' }} onClick={() => { if (typeof (window as any).gtag_report_conversion === 'function') { (window as any).gtag_report_conversion('tel:+12043994413'); } }}>
            +1 (204) 399-4413
          </Link>{' '}
          — we&apos;re available 24/7.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label={`Contact form for ${serviceName}`}>
      <input
        ref={honeypotRef}
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
      />
      <input type="hidden" name="service" value={serviceName} />
      <input type="hidden" name="page_url" value={pageUrl} />
      <div className="flex flex-col gap-3">
        <div>
          <label htmlFor={`${formId}-name`} className="form-label">
            Name *
          </label>
          <input
            id={`${formId}-name`}
            type="text"
            className={`form-input${nameErr ? ' error' : ''}`}
            placeholder="Jane Smith"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            aria-required="true"
          />
          {nameErr && (
            <span className="form-error" role="alert">
              {nameErr}
            </span>
          )}
        </div>
        <div>
          <label htmlFor={`${formId}-phone`} className="form-label">
            Phone *
          </label>
          <input
            id={`${formId}-phone`}
            type="tel"
            className={`form-input${phoneErr ? ' error' : ''}`}
            placeholder="204-555-0123"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            aria-required="true"
          />
          {phoneErr && (
            <span className="form-error" role="alert">
              {phoneErr}
            </span>
          )}
        </div>
        <div>
          <label htmlFor={`${formId}-email`} className="form-label">
            Email
          </label>
          <input
            id={`${formId}-email`}
            type="email"
            className="form-input"
            placeholder="jane@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={`${formId}-message`} className="form-label">
            Message (optional)
          </label>
          <textarea
            id={`${formId}-message`}
            className="form-input"
            rows={2}
            placeholder="Describe what's happening..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn-primary w-full"
          disabled={submitting}
          aria-busy={submitting}
        >
          {submitting ? 'Sending…' : 'Get My Free Quote'}
        </button>
      </div>
    </form>
  );
}

export default function EmergencyAccordion() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set([items[0].id]));
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && items.some((item) => item.id === hash)) {
      setOpenItems(new Set([hash]));
      setTimeout(() => {
        const el = itemRefs.current[hash];
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  const toggle = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        if (typeof window !== 'undefined') {
          history.replaceState(null, '', `#${id}`);
        }
      }
      return next;
    });
  };

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: 'var(--white)' }}
      aria-labelledby="emergency-accordion-heading"
    >
      <div className="container-wide">
        <div className="flex gap-8 items-start">
          {/* Sticky on-page nav — desktop only */}
          <aside
            className="hidden lg:block flex-shrink-0 w-56 sticky top-24 self-start"
            aria-label="On this page"
          >
            <p
              className="text-xs font-700 uppercase tracking-wider mb-3"
              style={{ color: 'var(--navy-700)', fontWeight: 700 }}
            >
              On this page
            </p>
            <nav>
              <ul className="flex flex-col gap-1">
                {items.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-xs leading-snug block py-1 px-2 rounded hover:bg-orange-50 transition-colors"
                      style={{
                        color: openItems.has(item.id) ? 'var(--orange-600)' : 'var(--muted)',
                        fontWeight: openItems.has(item.id) ? 600 : 400,
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        toggle(item.id);
                        const el = itemRefs.current[item.id];
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Accordion */}
          <div className="flex-1 min-w-0">
            <h2
              id="emergency-accordion-heading"
              className="mb-8"
              style={{ color: 'var(--navy-900)' }}
            >
              Emergency Services — Any Hour, Any Day
            </h2>
            <div className="flex flex-col gap-3">
              {items.map((item) => {
                const isOpen = openItems.has(item.id);
                return (
                  <div
                    key={item.id}
                    id={item.id}
                    ref={(el) => {
                      itemRefs.current[item.id] = el;
                    }}
                    className="rounded-brand overflow-hidden"
                    style={{ border: '1.5px solid var(--line)', scrollMarginTop: '100px' }}
                  >
                    <button
                      className="w-full flex items-center gap-4 px-5 text-left transition-colors"
                      style={{
                        minHeight: '64px',
                        backgroundColor: isOpen ? 'var(--navy-900)' : 'var(--white)',
                        cursor: 'pointer',
                        border: 'none',
                        outline: 'none',
                      }}
                      aria-expanded={isOpen}
                      aria-controls={`panel-${item.id}`}
                      id={`trigger-${item.id}`}
                      onClick={() => toggle(item.id)}
                      onMouseEnter={(e) => {
                        if (!isOpen)
                          (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                            'var(--navy-100)';
                      }}
                      onMouseLeave={(e) => {
                        if (!isOpen)
                          (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                            'var(--white)';
                      }}
                    >
                      <span className="text-2xl flex-shrink-0" aria-hidden="true">
                        {item.icon}
                      </span>
                      <div className="flex-1 min-w-0 py-4">
                        <h3
                          className="font-700 text-base"
                          style={{
                            color: isOpen ? 'var(--white)' : 'var(--navy-900)',
                            fontWeight: 700,
                            margin: 0,
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="text-sm mt-0.5 truncate"
                          style={{ color: isOpen ? 'rgba(255,255,255,0.72)' : 'var(--muted)' }}
                        >
                          {item.teaser}
                        </p>
                      </div>
                      <span
                        className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full"
                        style={{
                          backgroundColor: isOpen ? 'var(--orange-600)' : 'var(--navy-100)',
                          color: isOpen ? 'white' : 'var(--navy-900)',
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                          transition: 'transform 250ms ease, background-color 250ms ease',
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          lineHeight: 1,
                        }}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>

                    <div
                      id={`panel-${item.id}`}
                      role="region"
                      aria-labelledby={`trigger-${item.id}`}
                      style={{
                        display: 'grid',
                        gridTemplateRows: isOpen ? '1fr' : '0fr',
                        transition: 'grid-template-rows 250ms ease',
                      }}
                    >
                      <div style={{ overflow: 'hidden' }}>
                        <div className="p-5 pt-4" style={{ borderTop: '1px solid var(--line)' }}>
                          {/* Description */}
                          <p className="leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>
                            {item.description}
                          </p>

                          {/* What's included checklist */}
                          <div className="mb-5">
                            <p
                              className="font-700 text-sm mb-2"
                              style={{ color: 'var(--navy-900)', fontWeight: 700 }}
                            >
                              What&apos;s included:
                            </p>
                            <ul className="flex flex-col gap-1.5">
                              {item.included.map((inc, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-sm"
                                  style={{ color: 'var(--ink)' }}
                                >
                                  <span
                                    className="trust-item-check mt-0.5 flex-shrink-0"
                                    aria-hidden="true"
                                  >
                                    <svg
                                      width="11"
                                      height="11"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        d="M20 6L9 17l-5-5"
                                        stroke="#FFFFFF"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </span>
                                  {inc}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Two-column action row */}
                          <div className="grid md:grid-cols-2 gap-5">
                            {/* Left: Call Now */}
                            <div className="flex flex-col gap-3">
                              <Link
                                href="tel:+12043994413"
                                className="btn-primary w-full text-center"
                                style={{ fontSize: '1rem' }}
                                onClick={() => { if (typeof (window as any).gtag_report_conversion === 'function') { (window as any).gtag_report_conversion('tel:+12043994413'); } }}
                              >
                                Call Now — +1 (204) 399-4413
                              </Link>
                              <Link
                                href="https://wa.me/12043994413?text=Hi%2C%20I%20have%20a%20drain%20emergency"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp w-full text-center"
                                style={{ fontSize: '1rem' }}
                              >
                                WhatsApp
                              </Link>
                              <p
                                className="text-xs text-center"
                                style={{ color: 'var(--muted)' }}
                              >
                                Open 24/7 · Upfront pricing before we start
                              </p>
                            </div>
                            {/* Right: Inline Contact Now mini-form */}
                            <div
                              className="rounded-brand p-4"
                              style={{ backgroundColor: 'var(--navy-100)' }}
                            >
                              <p
                                className="font-700 text-sm mb-3"
                                style={{ color: 'var(--navy-900)', fontWeight: 700 }}
                              >
                                Contact Now
                              </p>
                              <MiniForm
                                serviceName={item.serviceName}
                                formId={`mini-${item.id}`}
                              />
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
