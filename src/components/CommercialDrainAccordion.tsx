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
    id: 'grease-trap-line-cleaning',
    icon: '🍽️',
    title: 'Grease Trap Line Cleaning',
    teaser: 'The line between your trap and the sewer — jetted back to bare pipe.',
    description: 'Your grease trap is only half the system. The line running from the trap out to the sewer is where fats, oils and grease actually accumulate, cooling and hardening onto the wall until the effective diameter is a fraction of what it should be — which is exactly why a trap that\'s serviced on schedule can still overflow. We hydro jet the inlet line, the trap outlet and the run to the sewer connection, removing hardened FOG from the full circumference of the pipe rather than boring a channel through it. We camera-verify afterwards and give you a written record. Kitchens on a regular jetting schedule reduce pump-out frequency and stop having Friday-night emergencies. <a href="/glossary#grease-trap" style="color:var(--brand-700);font-size:0.85em">See also: Grease trap (Glossary)</a> · <a href="/glossary#fog" style="color:var(--brand-700);font-size:0.85em">FOG (Glossary)</a>',
    included: ['Hydro jetting of inlet, outlet and sewer run', 'Hardened FOG removal from the full pipe circumference', 'Camera verification after jetting', 'Written service report for your food-safety file · Overnight or pre-open scheduling'],
    serviceName: 'Grease Trap Line Cleaning',
  },
  {
    id: 'floor-drain-maintenance',
    icon: '⬛',
    title: 'Floor Drain Maintenance',
    teaser: 'No standing water, no odour, no drain flies, no inspection findings.',
    description: 'Commercial kitchen floor drains take everything — grease, food solids, cleaning chemicals, mop water, ice — and they\'re the drains an inspector looks at first. Left alone, they build a layer of grease and organic sludge that slows drainage, breeds drain flies, and produces the smell customers notice before your staff do. We pull and clean the grates and baskets, clear and flush the trap and branch lines, jet where there\'s build-up, and treat the biofilm that odour and flies actually live in. On a scheduled program, we handle every floor drain in the building on a set frequency and leave a dated report each visit.',
    included: ['Grate and basket removal, cleaning and sanitising', 'Trap and branch line clearing and flushing', 'Jetting of built-up lines', 'Biofilm and drain-fly treatment · Dated report for every visit'],
    serviceName: 'Floor Drain Maintenance',
  },
  {
    id: 'commercial-kitchen-drain-cleaning',
    icon: '🏭',
    title: 'Commercial Kitchen Drain Cleaning',
    teaser: 'Dish pit, prep sinks, 3-compartment sinks and wok lines — cleared under real load.',
    description: 'Commercial kitchen drain lines fail under volume, not under a garden hose. A dish pit line that seems fine at 10 a.m. will back up at 7 p.m. when three sinks and a dishwasher discharge together. We clean the whole kitchen drainage system as one system — prep sinks, dish pit, 3-compartment sinks, wok stations, ice machine drains, dishwasher discharge and the branch lines that connect them — hydro jetting where the wall is coated and cabling where a solid obstruction is present. Then we load-test it: run everything at once, the way your kitchen actually runs. We work overnight or before open so you don\'t lose a single cover.',
    included: ['Full kitchen drainage system cleaned as one system', 'Hydro jetting of coated lines, cabling for solid obstructions', 'Ice machine and dishwasher discharge lines', 'Full-load flow testing · Overnight, early-morning or closed-day scheduling'],
    serviceName: 'Commercial Kitchen Drain Cleaning',
  },
  {
    id: 'washroom-drain-cleaning',
    icon: '🚻',
    title: 'Washroom Drain Cleaning',
    teaser: 'Public washrooms that never embarrass you — toilets, urinals, sinks and floor drains.',
    description: 'A blocked public washroom is the fastest way for a customer to decide something about your business. High-traffic commercial washrooms deal with paper towels, wipes, sanitary products and hard-water scale — and urinal lines in particular build uric scale that narrows the pipe and produces an ammonia smell no amount of cleaning will fix. We clear and descale toilet, urinal, sink and floor drain lines, treat the traps, and check that vents are drawing properly. On a maintenance schedule, we cover every washroom in your building before problems reach your customers.',
    included: ['Toilet, urinal, sink and floor drain line clearing', 'Uric scale descaling on urinal lines', 'Trap treatment and odour control', 'Vent draw check · Scheduled multi-washroom programs'],
    serviceName: 'Washroom Drain Cleaning',
  },
  {
    id: 'storm-drain-cleaning',
    icon: '🌧️',
    title: 'Storm Drain Cleaning',
    teaser: 'Parking lots, loading docks and roof drains — clear before the next Winnipeg downpour.',
    description: 'Storm drains only matter twice a year, and both times they matter enormously. Catch basins in parking lots and loading docks silt up with sand, gravel, leaves, litter and winter grit until the first heavy summer rain has nowhere to go — and then you have a flooded loading bay, a lake in your customer parking, or water tracking into the building. Roof drains and downspout leaders block the same way and can send water into ceilings and walls. We vacuum and jet catch basins, clear the connecting lines, camera any run we can\'t verify visually, and get you tested before the season rather than during it.',
    included: ['Catch basin cleaning and debris removal', 'Jetting of storm lines and leader connections', 'Roof drain and downspout leader clearing', 'Camera inspection of unverifiable runs · Pre-season scheduling in spring and fall'],
    serviceName: 'Storm Drain Cleaning',
  },
  {
    id: 'preventive-maintenance-programs',
    icon: '📅',
    title: 'Preventive Maintenance Programs',
    teaser: 'A set schedule, a set price, written reports, and priority when you do need us.',
    description: 'An emergency drain call during service costs a multiple of what scheduled maintenance costs — before you count the lost revenue, the ruined shift and the inspection risk. We build a program around your actual volume and history: monthly for a high-volume kitchen, quarterly for a moderate one, semi-annual for retail and office, plus spring and fall storm drain service. Each visit we jet or cable the scheduled lines, camera-verify where relevant, and leave a dated written report you can hand straight to an inspector. Program customers get priority dispatch and a locked-in rate.',
    included: ['Custom frequency based on your volume and history', 'Scheduled jetting and cabling of all designated lines', 'Periodic camera verification', 'Dated written reports for food-safety and compliance files · Priority dispatch and locked-in program rates'],
    serviceName: 'Preventive Maintenance Programs',
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
        <div className="text-2xl mb-2">✅</div>
        <p className="font-700 mb-1" style={{ color: 'var(--navy-900)', fontWeight: 700 }}>Got it, {name.split(' ')[0]}.</p>
        <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>We&apos;ll call you at {phone} shortly.</p>
        <Link href="tel:+12043994413" className="btn-primary text-sm" onClick={() => { if (typeof (window as any).gtag_report_conversion === 'function') { (window as any).gtag_report_conversion('tel:+12043994413'); } }}>Call +1 (204) 399-4413 Now</Link>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-brand p-5 text-center" style={{ backgroundColor: '#fff1f0', border: '1.5px solid #e53e3e' }} role="alert">
        <p className="text-sm mb-3" style={{ color: '#c53030' }}>Something went wrong. Please call or WhatsApp us at <Link href="tel:+12043994413" className="underline font-700" style={{ color: 'var(--orange-600)' }} onClick={() => { if (typeof (window as any).gtag_report_conversion === 'function') { (window as any).gtag_report_conversion('tel:+12043994413'); } }}>+1 (204) 294-3629</Link> — we&apos;re available 24/7.</p>
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

export default function CommercialDrainAccordion() {
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
    <section className="section-padding" style={{ backgroundColor: 'var(--white)' }} aria-labelledby="commercial-services-heading">
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
            <h2 id="commercial-services-heading" className="mb-8" style={{ color: 'var(--navy-900)' }}>
              Commercial Drain Services — Scheduled Around Your Business
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
                              <Link href="https://wa.me/12042943629?text=Hi%2C%20I%20need%20commercial%20drain%20service" target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full text-center" style={{ fontSize: '1rem' }}>
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
