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
    id: 'tree-root-removal',
    icon: '🌳',
    title: 'Tree Root Removal',
    teaser: 'Winnipeg\'s #1 cause of sewer blockages — cut back to full pipe diameter.',
    description: 'Roots don\'t drill through healthy pipe — they find a joint or a hairline crack that\'s already there, follow the moisture and nutrients inside, and then grow into a dense mat that catches everything flushed past it. In Winnipeg, with clay-tile sewers under streets lined with mature elms, this is by far the most common cause of a blocked main. We run a full-size sectional machine with a root-cutting head sized to your pipe, cut the mass back to the full inside diameter, and hydro jet the remaining root hair and debris out of the system. Then we camera the line and show you exactly where the roots are entering and how bad the pipe is — because roots always grow back, and knowing whether that\'s 12 months or 5 years is the difference between a maintenance plan and a repair. <a href="/glossary#root-intrusion" style="color:var(--brand-700);font-size:0.85em">See also: Root intrusion (Glossary)</a>',
    included: ['Full-size root-cutting machine sized to your pipe', 'Cutting back to full inside diameter', 'Hydro jetting of remaining root hair', 'Camera survey showing entry points and pipe condition · Honest regrowth timeline and prevention plan'],
    serviceName: 'Tree Root Removal',
  },
  {
    id: 'hydro-jetting-sewer-lines',
    icon: '💦',
    title: 'Hydro Jetting for Sewer Lines',
    teaser: 'Restores the full diameter of the line, not just a channel through the blockage.',
    description: 'Cutting a hole through a root mass gets water moving tonight. Hydro jetting is what stops you calling again in the spring. Up to 4,000 PSI through a rotating nozzle scours grease, scale, sludge and remaining root hair off the entire pipe wall and flushes it downstream out of your system, restoring the line to its actual designed capacity. On older Winnipeg sewers we camera-inspect first, because a line with a collapse or a serious structural break needs a different plan than a line that\'s simply dirty. Where the pipe is sound, jetting is the single most effective thing you can do for a main sewer line — and it\'s why properties on a jetting schedule stop having emergencies. <a href="/glossary#hydro-jetting" style="color:var(--brand-700);font-size:0.85em">See also: Hydro jetting (Glossary)</a>',
    included: ['Pre-jet camera assessment of pipe condition', 'Up to 4,000 PSI rotating-nozzle cleaning of the full run', 'Grease, scale, sludge and root-hair removal', 'Debris flushed clear of the system · Post-jet camera verification'],
    serviceName: 'Hydro Jetting for Sewer Lines',
  },
  {
    id: 'sewer-camera-inspections',
    icon: '📷',
    title: 'Sewer Camera Inspections',
    teaser: 'HD video of your entire sewer line — and the footage is yours to keep.',
    description: 'There is no reason to guess about a sewer line in 2026. Our self-levelling HD camera travels the full run from your cleanout to the City connection and records everything: root intrusion and where it enters, bellies holding standing water, offset or separated joints, cracks, corrosion, foreign objects, and collapse. You watch it live with the technician and we send you the footage. This is the inspection to book if you\'ve had two backups in a year, if you\'re buying an older Winnipeg home and want to know what\'s under the lawn before you waive conditions, if your insurer wants documentation, or if a contractor has quoted you an excavation and you\'d like a second opinion first. <a href="/glossary#camera-inspection" style="color:var(--brand-700);font-size:0.85em">See also: Camera inspection (Glossary)</a>',
    included: ['Full-run HD self-levelling camera survey', 'Live on-screen walkthrough with your technician', 'Recorded video file sent to you', 'Written summary of findings and severity · Straight advice on whether repair is actually needed'],
    serviceName: 'Sewer Camera Inspections',
  },
  {
    id: 'sewer-line-locating',
    icon: '📍',
    title: 'Sewer Line Locating',
    teaser: 'Exact position and depth marked on the surface — so nobody digs blind.',
    description: 'If a sewer line ever needs to be repaired or replaced, the single most expensive mistake is digging in the wrong place. We pair the camera with an electronic sonde and a surface locator to pinpoint the precise position and depth of any defect and mark it directly on your driveway, lawn or floor slab. We also map the route of the line itself — essential before landscaping, adding a garage or addition, installing a pool, replacing a driveway, or planting trees anywhere near the run. You get marked points, measured depths and a simple sketch, so any excavation is a targeted dig instead of an exploratory trench across your yard. <a href="/glossary#sonde" style="color:var(--brand-700);font-size:0.85em">See also: Sonde (Glossary)</a>',
    included: ['Sonde and surface locating of defects and line route', 'Position marked on the surface and depth measured', 'Simple route sketch for your records', 'Pre-excavation and pre-landscaping mapping'],
    serviceName: 'Sewer Line Locating',
  },
  {
    id: 'sewer-backup-cleanup',
    icon: '🚨',
    title: 'Sewer Backup Cleanup',
    teaser: 'Blockage cleared, sewage removed, area sanitised — and documented for your insurer.',
    description: 'When a main line blocks, waste comes back through the lowest opening in the building — usually a basement floor drain or a laundry tub — and what comes up is Category 3 contaminated water. Our priority order is: stop the source, then remove the contamination, then prove the cause. We clear the blockage so nothing more can come in, extract standing sewage and residue, sanitise affected hard surfaces, and identify anything porous that needs to be removed. Then we camera the line and give you dated footage and a written report — the documentation insurers ask for, and the evidence you need if a claim follows. Until we arrive: stop using all water in the building and keep everyone off the affected floor.',
    included: ['Emergency blockage clearing to stop the backup at the source', 'Standing sewage and residue extraction', 'Sanitising of affected hard surfaces', 'Camera inspection with dated footage · Written report for your insurance claim'],
    serviceName: 'Sewer Backup Cleanup',
  },
  {
    id: 'emergency-sewer-services',
    icon: '⚡',
    title: 'Emergency Sewer Services',
    teaser: '2 a.m., Sunday, −35 °C, holiday weekend — we answer and we come.',
    description: 'Main sewer lines do not fail politely. They fail on Christmas Eve with a full house, and during the first heavy rain of spring, and at 3 a.m. on a long weekend. We run genuine 24/7 emergency sewer service across Winnipeg and 100 km around, with a real technician answering the phone rather than an answering service taking a message. Tell us what\'s happening and we\'ll walk you through what to do right now — usually stop all water use immediately — while we\'re on the way. Every truck carries full-size sectional machines, a hydro jetter, an HD camera and a locator, so we clear it on the first visit instead of coming back tomorrow with different equipment.',
    included: ['24/7/365 live answer and dispatch', 'Priority response for active backups', 'Over-the-phone damage-limitation guidance while we travel', 'Fully equipped trucks — cleared in one visit · Upfront pricing even on emergency calls'],
    serviceName: 'Emergency Sewer Services',
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
  const [error, setError] = useState(false);
  const [nameErr, setNameErr] = useState('');
  const [phoneErr, setPhoneErr] = useState('');
  const honeypotRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypotRef.current?.value) return;
    let valid = true;
    if (!name || name.trim().length < 2) { setNameErr('Please enter your name.'); valid = false; } else setNameErr('');
    if (!phone || !/^[\d\s\-\(\)\+\.]{10,}$/.test(phone)) { setPhoneErr('Please enter a valid phone number.'); valid = false; } else setPhoneErr('');
    if (!valid) return;

    setSubmitting(true);
    setError(false);
    const payload = {
      name, phone, email, message,
      service: serviceName,
      formType: 'contact',
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
      await res.json();
      setSubmitted(true);
    } catch (err) {
      console.error('Mini form error:', err);
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-brand p-5 text-center" style={{ backgroundColor: '#f0fdf4', border: '1.5px solid var(--success)' }} role="alert" aria-live="polite">
        <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: 'var(--success)' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <p className="font-700 mb-1" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>Got it, {name.split(' ')[0]}.</p>
        <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>We&apos;ll call you at {phone} shortly.</p>
        <Link href="tel:+12043994413" className="btn-primary text-sm" onClick={() => { if (typeof (window as any).gtag_report_conversion === 'function') { (window as any).gtag_report_conversion('tel:+12043994413'); } }}>Call +1 (204) 399-4413 Now</Link>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-brand p-5 text-center" style={{ backgroundColor: '#fff1f0', border: '1.5px solid #e53e3e' }} role="alert">
        <p className="text-sm mb-3" style={{ color: '#c53030' }}>Something went wrong. Please call or WhatsApp us at <Link href="tel:+12043994413" className="underline font-700" style={{ color: 'var(--orange-600)' }} onClick={() => { if (typeof (window as any).gtag_report_conversion === 'function') { (window as any).gtag_report_conversion('tel:+12043994413'); } }}>+1 (204) 399-4413</Link> — we&apos;re available 24/7.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label={`Contact form for ${serviceName}`}>
      <input ref={honeypotRef} type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }} />
      <input type="hidden" name="service" value={serviceName} />
      <input type="hidden" name="formType" value="contact" />
      <div className="flex flex-col gap-3">
        <div>
          <label htmlFor={`${formId}-name`} className="form-label">Name *</label>
          <input id={`${formId}-name`} type="text" className={`form-input${nameErr ? ' error' : ''}`} placeholder="Jane Smith" value={name} onChange={e => setName(e.target.value)} required aria-required="true" />
          {nameErr && <span className="form-error" role="alert">{nameErr}</span>}
        </div>
        <div>
          <label htmlFor={`${formId}-phone`} className="form-label">Phone *</label>
          <input id={`${formId}-phone`} type="tel" className={`form-input${phoneErr ? ' error' : ''}`} placeholder="204-555-0123" value={phone} onChange={e => setPhone(e.target.value)} required aria-required="true" />
          {phoneErr && <span className="form-error" role="alert">{phoneErr}</span>}
        </div>
        <div>
          <label htmlFor={`${formId}-email`} className="form-label">Email</label>
          <input id={`${formId}-email`} type="email" className="form-input" placeholder="jane@example.com" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor={`${formId}-message`} className="form-label">Message (optional)</label>
          <textarea id={`${formId}-message`} className="form-input" rows={2} placeholder="Describe what's happening..." value={message} onChange={e => setMessage(e.target.value)} />
        </div>
        <button type="submit" className="btn-primary w-full" disabled={submitting} aria-busy={submitting}>
          {submitting ? 'Sending…' : 'Get My Free Quote'}
        </button>
      </div>
    </form>
  );
}

export default function SewerLineAccordion() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set([items[0].id]));
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && items.some(item => item.id === hash)) {
      setOpenItems(new Set([hash]));
      setTimeout(() => {
        const el = itemRefs.current[hash];
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  const toggle = (id: string) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        history.replaceState(null, '', `#${id}`);
      }
      return next;
    });
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--white)' }} aria-labelledby="sewer-services-heading">
      <div className="container-wide">
        <div className="flex gap-8 items-start">
          {/* Sticky on-page nav — desktop only */}
          <aside className="hidden lg:block flex-shrink-0 w-56 sticky top-24 self-start" aria-label="On this page">
            <p className="text-xs font-700 uppercase tracking-wider mb-3" style={{ color: 'var(--navy-700)', fontWeight: 700 }}>On this page</p>
            <nav>
              <ul className="flex flex-col gap-1">
                {items.map(item => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-xs leading-snug block py-1 px-2 rounded hover:bg-orange-50 transition-colors"
                      style={{ color: openItems.has(item.id) ? 'var(--orange-600)' : 'var(--muted)', fontWeight: openItems.has(item.id) ? 600 : 400 }}
                      onClick={e => { e.preventDefault(); toggle(item.id); const el = itemRefs.current[item.id]; if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
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
            <h2 id="sewer-services-heading" className="mb-8" style={{ color: 'var(--navy-900)' }}>
              Main Sewer Line Services — Cleared, Verified, Documented
            </h2>
            <div className="flex flex-col gap-3">
              {items.map(item => {
                const isOpen = openItems.has(item.id);
                return (
                  <div
                    key={item.id}
                    id={item.id}
                    ref={el => { itemRefs.current[item.id] = el; }}
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
                      onClick={() => toggle(item.id)}
                      onMouseEnter={e => { if (!isOpen) (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--navy-100)'; }}
                      onMouseLeave={e => { if (!isOpen) (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--white)'; }}
                    >
                      <span className="text-2xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
                      <div className="flex-1 min-w-0 py-4">
                        <h3 className="font-700 text-base" style={{ color: isOpen ? 'var(--white)' : 'var(--navy-900)', fontWeight: 700, margin: 0 }}>
                          {item.title}
                        </h3>
                        <p className="text-sm mt-0.5 truncate" style={{ color: isOpen ? 'rgba(255,255,255,0.72)' : 'var(--muted)' }}>
                          {item.teaser}
                        </p>
                      </div>
                      <span
                        className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-transform duration-250"
                        style={{
                          backgroundColor: isOpen ? 'var(--orange-600)' : 'var(--navy-100)',
                          color: isOpen ? 'white' : 'var(--navy-900)',
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
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
                          <p className="leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>{item.description}</p>

                          <div className="mb-5">
                            <p className="font-700 text-sm mb-2" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>What&apos;s included:</p>
                            <ul className="flex flex-col gap-1.5">
                              {item.included.map((inc, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                                  <span className="trust-item-check mt-0.5 flex-shrink-0" aria-hidden="true">
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                  </span>
                                  {inc}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="grid md:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-3">
                              <Link href="tel:+12043994413" className="btn-primary w-full text-center" style={{ fontSize: '1rem' }} onClick={() => { if (typeof (window as any).gtag_report_conversion === 'function') { (window as any).gtag_report_conversion('tel:+12043994413'); } }}>
                                Call Now — +1 (204) 399-4413
                              </Link>
                              <Link href="https://wa.me/12043994413?text=Hi%2C%20I%20need%20help%20with%20my%20sewer%20line" target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full text-center" style={{ fontSize: '1rem' }}>
                                WhatsApp
                              </Link>
                              <p className="text-xs text-center" style={{ color: 'var(--muted)' }}>
                                Open 24/7 · Upfront pricing before we start
                              </p>
                            </div>
                            <div className="rounded-brand p-4" style={{ backgroundColor: 'var(--navy-100)' }}>
                              <p className="font-700 text-sm mb-3" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>Contact Now</p>
                              <MiniForm serviceName={item.serviceName} formId={`mini-${item.id}`} />
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
