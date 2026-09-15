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
    id: 'faucet-repair',
    icon: '🚰',
    title: 'Faucet Repair',
    teaser: 'Drips, low pressure and stiff handles — fixed properly, or replaced honestly.',
    description: 'A dripping faucet is not a cosmetic problem: a steady drip wastes thousands of litres a year, stains the fixture, and in a rarely used sink can mask a leak underneath. Most faucets fail at a worn cartridge, O-ring, seat or washer, and a repair is far cheaper than replacement — so that\'s what we look at first. We also check the aerator and supply valves, because "low pressure" is very often a blocked aerator rather than a plumbing fault. If a faucet is genuinely past repair, we\'ll say so, quote both options, and let you decide. Kitchen, bath, laundry and outdoor hose bibs, including frost-free sillcocks that split over a Winnipeg winter.',
    included: [
      'Cartridge, O-ring, seat and washer replacement',
      'Aerator cleaning and pressure check',
      'Supply valve inspection',
      'Full replacement quoted as an option, never assumed',
      'Leak test after every repair',
    ],
    serviceName: 'Faucet Repair',
  },
  {
    id: 'toilet-repair-installation',
    icon: '🚽',
    title: 'Toilet Repair & Installation',
    teaser: 'Running, rocking, leaking or weak-flushing — repaired, reset or replaced.',
    description: 'A running toilet can waste hundreds of litres a day and quietly add real money to your water bill. A rocking toilet means the flange or wax ring is failing, which means water and sewer gas are getting into your subfloor. A weak flush usually points to mineral build-up in the rim jets or a partly blocked trapway. We repair fill and flush valves, flappers and supply lines; we pull, re-shim and reset toilets on new wax rings; we repair or replace damaged flanges; and we supply and install new toilets — including comfort-height and high-efficiency models — hauling the old one away. <a href="/glossary#wax-ring" style="color:var(--brand-700);font-size:0.85em">See also: Wax ring (Glossary)</a> · <a href="/glossary#p-trap" style="color:var(--brand-700);font-size:0.85em">P-trap (Glossary)</a>',
    included: [
      'Fill valve, flush valve, flapper and supply line repair',
      'Pull, reset and new wax ring',
      'Flange repair or replacement',
      'New toilet supply and installation with old unit removed',
      'Flush, level and leak test',
    ],
    serviceName: 'Toilet Repair & Installation',
  },
  {
    id: 'garbage-disposal-repair',
    icon: '🗑️',
    title: 'Garbage Disposal Repair',
    teaser: 'Jammed, humming, leaking or dead — repaired or replaced same visit.',
    description: 'A disposal that hums but doesn\'t turn is jammed; one that does nothing at all has usually tripped its reset or lost power; one that leaks is failing at a seal, a mount or the housing itself. We diagnose all three, clear jams safely, replace mounting assemblies and seals, and reset or rewire the unit. If the housing has corroded through, we\'ll tell you plainly that repair isn\'t worth it and quote a replacement. While we\'re there we clear the drain line beneath it, because a disposal that backs up is very often a grease-coated kitchen branch line rather than a broken disposal.',
    included: [
      'Jam clearing and reset',
      'Mount, seal and gasket replacement',
      'Electrical supply and switch check',
      'Supply and installation of a replacement unit',
      'Kitchen branch line clearing while we\'re on site',
    ],
    serviceName: 'Garbage Disposal Repair',
  },
  {
    id: 'leak-detection',
    icon: '🔍',
    title: 'Leak Detection',
    teaser: 'We find the leak before you tear out drywall, floors or concrete.',
    description: 'Most leaks are found the expensive way — by the damage they\'ve already done. We find them the cheap way. Acoustic listening equipment, thermal imaging, moisture meters and pressure testing let us locate leaks inside walls, under floors, beneath slabs and in supply lines without opening anything up first. We narrow it to a specific point, mark it, tell you what\'s causing it, and quote the repair. Call us if your water bill jumped without explanation, if you hear water running when everything is off, if there\'s a warm or damp patch on a floor, or if drywall is staining and nobody can say why.',
    included: [
      'Acoustic leak location',
      'Thermal imaging survey',
      'Moisture mapping of affected areas',
      'Line pressure testing',
      'Exact leak location marked, with a written repair quote',
    ],
    serviceName: 'Leak Detection',
  },
  {
    id: 'pipe-repair',
    icon: '🔧',
    title: 'Pipe Repair',
    teaser: 'Burst, split, corroded or leaking pipe — repaired fast and properly.',
    description: 'Winnipeg\'s freeze-thaw cycle is unusually hard on pipe. Copper splits when water freezes inside it, galvanised steel in older homes corrodes and closes up from the inside, and old joints work loose as the ground moves. We repair and replace damaged sections of copper, PEX, ABS and PVC in walls, ceilings, crawlspaces and basements — cutting out only what needs to come out. In an active burst, shut off your main valve and call us immediately; we run 24/7 for exactly this. We\'ll also tell you honestly when repeated pipe repairs mean it\'s time to talk about repiping a section instead of patching it again.',
    included: [
      'Emergency burst-pipe response 24/7',
      'Copper, PEX, ABS and PVC repair and section replacement',
      'Corroded galvanised line assessment',
      'Minimal-opening repairs',
      'Pressure testing after every repair',
    ],
    serviceName: 'Pipe Repair',
  },
  {
    id: 'water-line-repair',
    icon: '💧',
    title: 'Water Line Repair',
    teaser: 'The line feeding your whole property — repaired, replaced or thawed.',
    description: 'Your main water service line runs from the City connection to your building, and when it fails you lose water to the entire property. Symptoms include a sudden drop in pressure everywhere at once, discoloured water, a soggy or unusually green patch in the yard, or — every Winnipeg winter — a completely frozen service. We locate the line, pinpoint the fault, and repair or replace the affected section, coordinating with the City connection where that\'s required. We also thaw frozen water services and advise on the insulation and run-depth changes that stop it happening every year.',
    included: [
      'Service line locating and fault pinpointing',
      'Section repair or full replacement',
      'Frozen water service thawing',
      'Pressure and flow testing after repair',
      'Advice on preventing repeat winter freezing',
    ],
    serviceName: 'Water Line Repair',
  },
  {
    id: 'sump-pump-installation-repair',
    icon: '⚙️',
    title: 'Sump Pump Installation & Repair',
    teaser: 'The one device standing between spring melt and your basement.',
    description: 'In Winnipeg, a sump pump is not optional equipment — it\'s the thing keeping groundwater out of your basement during spring melt and heavy summer rain, and it always fails on the worst possible night. We install, replace, service and repair sump pumps and pits: sizing the pump to your water volume, checking float switches and check valves, clearing silted pits, correcting discharge lines that dump too close to the foundation, and installing battery backup systems so a pump failure during a power outage doesn\'t become a flooded basement. If your pump runs constantly, cycles oddly, makes new noises, or hasn\'t been tested since you moved in, have it looked at before the melt — not during it. <a href="/glossary#sump-pump" style="color:var(--brand-700);font-size:0.85em">See also: Sump pump (Glossary)</a>',
    included: [
      'Pump sizing, supply and installation',
      'Float switch and check valve service',
      'Pit cleaning and desilting',
      'Discharge line correction and extension',
      'Battery backup system installation',
      'Pre-melt testing and inspection',
    ],
    serviceName: 'Sump Pump Installation & Repair',
  },
  {
    id: 'backwater-valve-installation',
    icon: '🛡️',
    title: 'Backwater Valve Installation',
    teaser: 'A one-way gate on your sewer line so the City\'s system can never back into your basement.',
    description: 'When Winnipeg\'s sewer system is overwhelmed by heavy rain or rapid melt, wastewater can push backwards up your sewer line and into your basement — through the floor drain, the laundry tub, the lowest toilet. A backwater valve is a one-way gate installed in your sewer line that lets waste out and physically blocks anything from coming back in. It is one of the highest-value protections available to a Winnipeg homeowner, it can affect your insurance position, and there may be a City subsidy available — call us for current details. We assess your line, camera it, install the valve to code with proper access for future maintenance, and service existing valves that have never been inspected. <a href="/glossary#backwater-valve" style="color:var(--brand-700);font-size:0.85em">See also: Backwater valve (Glossary)</a>',
    included: [
      'Line assessment and camera inspection before installation',
      'Code-compliant backwater valve installation with access chamber',
      'Existing valve inspection, cleaning and servicing',
            'Documentation for insurance and City subsidy applications',
      'Post-install testing',
    ],
    serviceName: 'Backwater Valve Installation',
  },
  {
    id: 'drain-installation',
    icon: '🏗️',
    title: 'Drain Installation',
    teaser: 'New drains, relocations and rough-ins — sized, sloped and vented to code.',
    description: 'Adding a basement bathroom, a wet bar, a laundry room, a floor drain in a garage or a new commercial fixture means new drainage — and new drainage that isn\'t correctly sized, sloped and vented will fail no matter how good the fixtures are. We design and install new drain lines, relocate existing ones during renovations, cut and core where required, install floor drains and cleanouts in the right places, and tie into your existing stack properly. Every installation is built to code with adequate slope and proper venting, and we leave accessible cleanouts so the line can actually be serviced later.',
    included: [
      'New drain line design, sizing and installation',
      'Renovation relocations and rough-ins',
      'Floor drain and cleanout installation',
      'Correct slope and code-compliant venting',
      'Proper tie-in to existing stack',
      'Flow testing on completion',
    ],
    serviceName: 'Drain Installation',
  },
  {
    id: 'water-heater-installation-replacement',
    icon: '🔥',
    title: 'Water Heater Installation & Replacement',
    teaser: 'Tank or tankless — honest repair-vs-replace assessment before we recommend anything.',
    description: 'Most tank water heaters are rated for 8 to 12 years. Past that, the risk of a tank failure rises sharply, and a leaking tank cannot be repaired — replacement is the only real option. We assess, supply and install both tank and tankless water heaters across Winnipeg and every community within 100km. Before we recommend anything, we give you an honest repair-versus-replace answer: if a single component has failed on a unit under 6 years old, we\'ll tell you that repair makes more sense. If the tank itself is leaking or the unit is past its service life, we\'ll tell you that too — with a firm price in writing before any work starts. Manitoba\'s cold incoming water temperature means sizing a replacement correctly matters more here than in most of the country. <a href="/blog/water-heater-replacement-winnipeg" style="color:var(--brand-700);font-size:0.85em">See also: Water Heater Replacement in Winnipeg — Signs, Cost Factors & What to Expect</a>',
    included: [
      'Honest repair-vs-replace assessment before any recommendation',
      'Tank water heater supply and installation',
      'Tankless water heater supply and installation',
      'Venting, expansion tank and shutoff valve upgrades to current code',
      'Old unit removal and disposal',
      'Upfront flat pricing, approved before work starts',
    ],
    serviceName: 'Water Heater Installation & Replacement',
  },
  {
    id: 'water-heater-repair',
    icon: '🔧',
    title: 'Water Heater Repair',
    teaser: 'Element, thermostat, thermocouple, valve — repaired if repair makes sense.',
    description: 'Not every water heater problem means a new unit. A pilot light that won\'t stay lit is usually a thermocouple issue. Running out of hot water faster than it used to could be sediment reducing capacity. Popping or rumbling sounds often point to sediment buildup that a flush can address. We diagnose the specific fault first, tell you honestly whether repair or replacement makes more sense for your unit\'s age and condition, and quote both options where applicable. We repair elements, thermostats, thermocouples, pressure relief valves, anode rods and supply connections on both gas and electric units. If the tank itself is leaking or corroding internally, we\'ll tell you plainly that repair isn\'t the answer.',
    included: [
      'Diagnosis of the specific fault before any quote',
      'Element and thermostat replacement (electric units)',
      'Thermocouple and pilot assembly repair (gas units)',
      'Pressure relief valve replacement',
      'Sediment flush and anode rod inspection',
      'Honest repair-vs-replace recommendation',
    ],
    serviceName: 'Water Heater Repair',
  },
  {
    id: 'frozen-pipe-thawing',
    icon: '🧊',
    title: 'Frozen Pipe Thawing',
    teaser: 'Thawed safely before it splits — and advice so it doesn\'t freeze again next January.',
    description: 'No water at a fixture on a −30 °C Winnipeg morning usually means a frozen line, and you have a narrow window: water expands as it freezes, and a frozen pipe becomes a burst pipe with very little warning. Do not use a torch or an open flame — it\'s the leading cause of fires during cold snaps, and it can split the pipe outright. We locate the frozen section, thaw it with controlled equipment, then inspect it for splits and stress before you\'re back in service. Afterwards we tell you why that particular run froze — usually insufficient insulation, an exterior wall run, an unheated crawlspace, or an under-depth service — and what will stop it recurring every winter.',
    included: [
      'Frozen section location',
      'Controlled, flame-free thawing',
      'Post-thaw split and stress inspection',
      'Immediate repair if a split is found',
      'Insulation and prevention recommendations',
      '24/7 cold-snap availability',
    ],
    serviceName: 'Frozen Pipe Thawing',
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

export default function PlumbingAccordion() {
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
      aria-labelledby="plumbing-accordion-heading"
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
              id="plumbing-accordion-heading"
              className="mb-8"
              style={{ color: 'var(--navy-900)' }}
            >
              Plumbing Services — Repairs, Installations &amp; Leak Detection
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
                                href="https://wa.me/12043994413?text=Hi%2C%20I%20need%20plumbing%20help"
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
