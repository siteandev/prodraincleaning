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
    id: 'kitchen-sink-drain-cleaning',
    icon: '🍳',
    title: 'Kitchen Sink Drain Cleaning',
    teaser: 'Grease, food waste and soap scale — cleared properly, not just poked through.',
    description: 'The kitchen line is the hardest-working and most abused drain in any house. Every wash cycle sends warm grease down it; the grease cools, hardens onto the pipe wall, and traps coffee grounds, rice, starch and food scraps until the opening is the width of a pencil. That\'s why kitchen sinks fail slowly and then all at once — and why the dishwasher starts backing up into the sink. We clear the branch line with a properly sized cable, and where the pipe wall is coated, hydro jet it back to bare pipe so it drains like it did when it was new. We also check the P-trap, the tailpiece and the vent, because a "clog" that returns in three weeks usually isn\'t a clog at all.',
    included: ['Full branch line clearing to the stack', 'P-trap and tailpiece inspection', 'Grease-scale removal (jetting where needed)', 'Full-flow test before we leave'],
    serviceName: 'Kitchen Sink Drain Cleaning',
  },
  {
    id: 'bathroom-sink-drain-cleaning',
    icon: '🚿',
    title: 'Bathroom Sink Drain Cleaning',
    teaser: 'Hair, toothpaste and soap scum removed from the trap and the branch line.',
    description: 'Bathroom sinks clog for one boring reason: hair binds with soap scum and toothpaste into a dense plug that sits in the P-trap and the first few feet of the branch line. Pouring caustic chemicals on it rarely works and can damage older Winnipeg pipe and the pop-up assembly. We pull and clean the trap, remove the pop-up stopper (that\'s where the worst of it hides), cable the branch line back to the stack, and flush it. You get a sink that empties in seconds instead of minutes — and no chemical sitting in your trap waiting for someone.',
    included: ['P-trap removal and cleaning', 'Pop-up stopper clean-out', 'Branch line cabling', 'Reassembly and leak check'],
    serviceName: 'Bathroom Sink Drain Cleaning',
  },
  {
    id: 'bathtub-drain-cleaning',
    icon: '🛁',
    title: 'Bathtub Drain Cleaning',
    teaser: 'Standing water in the tub cleared without pulling your tile apart.',
    description: 'Standing in ankle-deep water while you shower is the classic tub symptom, and it\'s almost always hair and soap bound around the drum trap or overflow assembly. Tub lines are awkward — they\'re often under a slab or behind finished walls — so this is a job where the wrong technique costs you tile. We access through the overflow plate or the drain body, use a small-diameter cable with the right head, and clear the line without cutting anything open. If the tub is slow and the toilet is gurgling, we stop and check the main line first, because that changes the whole diagnosis.',
    included: ['Overflow and drum trap access', 'Hair and soap plug removal', 'Small-diameter cabling', 'Main-line check if multiple fixtures are affected'],
    serviceName: 'Bathtub Drain Cleaning',
  },
  {
    id: 'shower-drain-cleaning',
    icon: '🚿',
    title: 'Shower Drain Cleaning',
    teaser: 'Water pooling around your feet? Cleared, sanitised and flowing again.',
    description: 'A shower that pools is a hygiene problem as much as a plumbing one — standing water on tile means biofilm, odour and slippery footing. The cause is the same mix of hair, soap, shampoo and hard-water scale, usually within the first two metres of the drain. We remove the strainer, clear the trap and branch line, then flush the line so the biofilm goes with it rather than being pushed further down to re-form. For tiled walk-in showers and linear drains we use low-profile equipment that won\'t damage the finish or the waterproofing membrane.',
    included: ['Strainer removal and cleaning', 'Trap and branch line clearing', 'Biofilm and scale flush', 'Finish-safe equipment for tiled and linear drains'],
    serviceName: 'Shower Drain Cleaning',
  },
  {
    id: 'toilet-drain-unclogging',
    icon: '🚽',
    title: 'Toilet Drain Unclogging',
    teaser: 'Won\'t flush, rising, or overflowing — cleared without pulling the toilet where possible.',
    description: 'A toilet that fills to the rim and drains slowly usually has an obstruction in the trapway or the closet bend — wipes (including "flushable" ones), sanitary products, excess paper, a toy, a toothbrush. We start with a closet auger designed for porcelain so we clear the blockage without scratching or cracking the bowl. If the auger tells us the blockage is further down, we move to the branch or main line instead of forcing it. Where an item is genuinely stuck in the trapway, we pull and reset the toilet on a fresh wax ring and test it properly. If your toilet is overflowing right now, shut the supply valve behind it and call us.',
    included: ['Closet auger clearing', 'Foreign-object retrieval', 'Toilet pull-and-reset with new wax ring if required', 'Flush and seal test'],
    serviceName: 'Toilet Drain Unclogging',
  },
  {
    id: 'floor-drain-cleaning',
    icon: '⬛',
    title: 'Floor Drain Cleaning',
    teaser: 'The last line of defence in your basement — kept open and odour-free.',
    description: 'Your basement floor drain is the one that matters most, because it\'s where water goes when something else fails. It\'s also the one nobody thinks about until it\'s bubbling. Winnipeg basement floor drains fill with silt, laundry lint, construction debris, rust scale and — in older homes — root intrusion from the main line they connect to. We remove and clean the grate and the trap, cable or jet the line, flush the sediment out completely, and refill the trap so sewer gas stays out of your house. If your floor drain is backing up, that is very often a main sewer line symptom, and we\'ll tell you honestly if that\'s what we\'re seeing. <a href="/glossary#floor-drain" style="color:var(--brand-700);font-size:0.85em">See also: Floor drain (Glossary)</a>',
    included: ['Grate and trap removal and cleaning', 'Silt, lint and debris flush-out', 'Cabling or jetting of the drain line', 'Trap refill and odour check · Main-line assessment if backing up'],
    serviceName: 'Floor Drain Cleaning',
  },
  {
    id: 'laundry-drain-cleaning',
    icon: '👕',
    title: 'Laundry Drain Cleaning',
    teaser: 'Standpipe overflowing every wash cycle? Cleared and flow-tested at full discharge.',
    description: 'A washing machine dumps a huge volume of water in a very short time, so a laundry line that is even partly restricted overflows the standpipe and floods the floor. The restriction is lint, detergent scale and fabric-softener residue narrowing the pipe, and it builds up steadily for years. We cable and flush the standpipe and branch line, then run an actual full discharge cycle to test it — because a line that passes a garden-hose test can still overflow under a washer\'s pump-out rate. We\'ll also check that your standpipe height and trap arm meet code, since an undersized or badly configured standpipe overflows even when it\'s perfectly clean.',
    included: ['Standpipe and branch line cabling', 'Lint and detergent scale removal', 'Full pump-out cycle flow test', 'Standpipe height and trap configuration check'],
    serviceName: 'Laundry Drain Cleaning',
  },
  {
    id: 'main-sewer-line-cleaning',
    icon: '🏠',
    title: 'Main Sewer Line Cleaning',
    teaser: 'The line everything else drains into — cleared, root-cut and camera-verified.',
    description: 'Your main sewer line carries every drop of waste from the house to the City main, and in Winnipeg that line is frequently 40 to 80 years old and made of clay or cast iron. Roots find the joints, grease coats the wall, and scale narrows the diameter until one ordinary Sunday it stops. When multiple fixtures back up at once — toilet, tub and floor drain together — this is the line at fault. We access through the main cleanout, cut roots and clear the blockage with a full-size machine, hydro jet where the wall is coated, and then run a camera so you can see what condition your line is actually in and whether it needs cleaning again next year or not for five. <a href="/glossary#main-sewer-line" style="color:var(--brand-700);font-size:0.85em">See also: Main sewer line (Glossary)</a>',
    included: ['Cleanout access and full-size machine clearing', 'Root cutting to the full pipe diameter', 'Hydro jetting where required', 'HD camera verification with footage sent to you'],
    serviceName: 'Main Sewer Line Cleaning',
  },
  {
    id: 'sewer-backup-removal',
    icon: '🚨',
    title: 'Sewer Backup Removal',
    teaser: 'Sewage in your basement — stopped, cleared and made safe. 24/7.',
    description: 'A sewer backup is a health hazard, not an inconvenience. Category 3 water carries bacteria and pathogens, and everything porous it touches has to be treated as contaminated. Call us before you touch anything: stop using all water in the building, keep people and pets off the affected floor, and don\'t run the washer or flush. We arrive, find and clear the blockage that\'s causing the backup, get the line flowing so nothing more comes in, remove standing sewage and residue, and sanitise the area. We then camera the line and give you documented footage — which is exactly what your insurer will ask for, and what you\'ll need if this becomes a claim.',
    included: ['Emergency blockage clearing to stop the backup', 'Standing sewage and residue removal', 'Sanitising of affected surfaces', 'Camera inspection and documented footage for insurance'],
    serviceName: 'Sewer Backup Removal',
  },
  {
    id: 'clogged-drain-clearing',
    icon: '🔧',
    title: 'Clogged Drain Clearing',
    teaser: 'Any drain, any blockage, any hour — diagnosed properly and cleared the first time.',
    description: 'Sometimes you just need the clog gone and you don\'t care what it\'s called. This is our general clogged-drain service: you tell us which fixtures are affected and how bad it is, and we bring everything needed to clear any drain in the building in one visit. The diagnosis matters more than most people realise — one slow fixture is a branch line problem, but several slow fixtures on the lowest floor is a main line problem, and treating the second like the first wastes your money. We identify which one you have before we start, quote you a flat price, and clear it.',
    included: ['Full-property drain diagnosis', 'Branch or main line clearing as required', 'Flat quoted price approved before work starts', 'Flow test and cleanup'],
    serviceName: 'Clogged Drain Clearing',
  },
  {
    id: 'drain-snaking-auger-service',
    icon: '🔩',
    title: 'Drain Snaking (Auger Service)',
    teaser: 'The fast, proven fix for sudden blockages — with the machine sized to your pipe.',
    description: 'Snaking — running a rotating steel cable with a cutting head down the line — is the right first answer for most sudden blockages, and it\'s fast. The skill is in machine and head selection: a hand-held drum machine for a bathroom sink, a mid-size unit for a kitchen or laundry branch, and a full sectional machine with a root-cutting head for a 4-inch main. Forcing one machine down every line is how pipes get scored, traps get broken and older clay gets cracked. We size the equipment to the pipe, feel the blockage through the cable, and pull the debris back out rather than just punching a hole through it. <a href="/glossary#auger" style="color:var(--brand-700);font-size:0.85em">See also: Auger (Glossary)</a>',
    included: ['Correct machine and cutting head for your pipe size', 'Cleanout or fixture access', 'Debris retrieval, not just perforation', 'Post-clear flow test'],
    serviceName: 'Drain Snaking (Auger Service)',
  },
  {
    id: 'hydro-jet-drain-cleaning',
    icon: '💦',
    title: 'Hydro Jet Drain Cleaning',
    teaser: 'Up to 4,000 PSI — restores the pipe\'s full diameter, not just a hole through the middle.',
    description: 'Hydro jetting sends water at up to 4,000 PSI through a rotating nozzle that scours the pipe wall in every direction and flushes the debris right out of the system. This is the difference between temporary relief and an actual fix: a cable makes an opening through a blockage, while jetting removes grease, scale, sludge and root hair from the wall and restores the pipe to full diameter. It is the correct choice for restaurant grease lines, any drain that clogs repeatedly, root regrowth after cutting, and lines with heavy sediment. We camera-inspect first where there\'s any doubt about pipe condition, because jetting a badly damaged line is not something a responsible company does blind. <a href="/glossary#hydro-jetting" style="color:var(--brand-700);font-size:0.85em">See also: Hydro jetting (Glossary)</a>',
    included: ['Pre-jet camera assessment where required', 'Up to 4,000 PSI multi-directional nozzle cleaning', 'Grease, scale, sludge and root-hair removal', 'Debris flushed out of the system · Post-jet camera verification'],
    serviceName: 'Hydro Jet Drain Cleaning',
  },
  {
    id: 'camera-drain-inspections',
    icon: '📷',
    title: 'Camera Drain Inspections',
    teaser: 'See inside your own pipe in HD — roots, cracks, bellies and offsets, on video.',
    description: 'Guessing is expensive. A camera inspection puts a self-levelling HD camera down your line and shows you exactly what\'s there: root intrusion, a belly holding standing water, an offset joint, a crack, a collapse, or a line that\'s genuinely fine. You watch the screen with us and you keep the footage. We use it to diagnose repeat backups, verify a line is truly clear after cleaning, document damage for an insurance claim, and inspect sewer lines for buyers before they waive conditions on an older Winnipeg home. Where we find a problem, we surface-locate the exact spot and depth so nobody digs a trench guessing. <a href="/glossary#camera-inspection" style="color:var(--brand-700);font-size:0.85em">See also: Camera inspection (Glossary)</a>',
    included: ['HD self-levelling camera survey of the full run', 'On-screen walkthrough with the technician', 'Recorded footage sent to you', 'Surface locating of any defect, with depth · Written summary of findings'],
    serviceName: 'Camera Drain Inspections',
  },
  {
    id: 'drain-odour-diagnosis',
    icon: '👃',
    title: 'Drain Odour Diagnosis',
    teaser: 'That sewer smell has a cause. We find it instead of masking it.',
    description: 'A persistent sewage smell is your building telling you that sewer gas is entering living space, and air freshener does not fix it. The usual causes are a dry P-trap in a fixture nobody uses, a blocked or improperly terminated vent stack, a failed wax ring under a toilet, biofilm coating the inside of a drain, a cracked or disconnected line under the floor, or a missing floor-drain trap primer. We work through them systematically — inspect the traps, test the vents, camera the suspect lines, and where necessary run a smoke test — then tell you the actual source and what it takes to fix it. Odour that gets worse when it rains almost always means something structural in the line.',
    included: ['Full trap, vent and fixture inspection', 'Camera survey of suspect lines', 'Smoke testing where required', 'Biofilm treatment · Written diagnosis with the actual cause and the fix'],
    serviceName: 'Drain Odour Diagnosis',
  },
  {
    id: 'preventive-drain-maintenance',
    icon: '📅',
    title: 'Preventive Drain Maintenance',
    teaser: 'Scheduled cleaning so you never meet us at 2 a.m. again.',
    description: 'The cheapest drain service is the one that happens before the backup. If your Winnipeg property has older clay or cast-iron pipe, big trees near the sewer line, a history of roots, a rental suite, or a commercial kitchen, a scheduled clean is dramatically cheaper than an emergency call plus restoration. We set a frequency that matches your building — annually for a typical older home with root history, quarterly or monthly for food service — jet or cable the lines, camera-verify, and send you a dated report each time. You get a predictable cost instead of an unpredictable disaster, and documentation that helps at claim time.',
    included: ['Frequency plan matched to your property and history', 'Scheduled cabling or jetting of all main lines', 'Annual camera verification', 'Dated written reports for your records · Priority scheduling for plan customers'],
    serviceName: 'Preventive Drain Maintenance',
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

export default function DrainCleaningAccordion() {
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
      }
      return next;
    });
    if (!openItems.has(id)) {
      history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--white)' }} aria-labelledby="services-accordion-heading">
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
            <h2 id="services-accordion-heading" className="mb-8" style={{ color: 'var(--navy-900)' }}>
              Drain Cleaning Services — Every Type, Every Pipe
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
                    {/* Trigger row */}
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

                    {/* Panel — always in DOM, CSS grid transition */}
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
                          <p className="leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>{item.description}</p>

                          {/* What's included */}
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

                          {/* Two-column action row */}
                          <div className="grid md:grid-cols-2 gap-5">
                            {/* Left: Call + WhatsApp */}
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
                                href="https://wa.me/12043994413?text=Hi%2C%20I%20need%20help%20with%20my%20drain"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp w-full text-center"
                                style={{ fontSize: '1rem' }}
                              >
                                WhatsApp
                              </Link>
                              <p className="text-xs text-center" style={{ color: 'var(--muted)' }}>
                                Open 24/7 · Upfront pricing before we start
                              </p>
                            </div>

                            {/* Right: Mini contact form */}
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
