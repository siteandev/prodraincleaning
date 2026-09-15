'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';

/**
 * FloatingCallButton — desktop-only persistent call CTA
 *
 * Visibility rules:
 * - Shown only at ≥900px (hidden below via CSS only — no inline display:none)
 * - Fades out when footer enters viewport (IntersectionObserver)
 * - Fades out when coupon popup, mobile menu, or any modal is open
 *
 * Animation:
 * - Slow pulse/glow on shadow only (no scale/translate)
 * - Respects prefers-reduced-motion — animation disabled if set
 *
 * GA4: click_call event is fired by the global Analytics listener on any tel: link click.
 */
export default function FloatingCallButton() {
  const [footerVisible, setFooterVisible] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const mutationRef = useRef<MutationObserver | null>(null);

  // IntersectionObserver: hide when footer (or final CTA band) enters viewport
  useEffect(() => {
    const targets: Element[] = [];

    const footer = document.querySelector('footer');
    if (footer) targets.push(footer);

    const ctaBand = document.querySelector('[data-final-cta]');
    if (ctaBand) targets.push(ctaBand);

    if (targets.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some((e) => e.isIntersecting);
        setFooterVisible(anyVisible);
      },
      { threshold: 0.05 }
    );

    targets.forEach((t) => observerRef.current!.observe(t));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  // MutationObserver: hide when coupon popup / mobile menu / modal is open
  const checkOverlays = useCallback(() => {
    const body = document.body;
    if (
      body.hasAttribute('data-modal-open') ||
      body.hasAttribute('data-coupon-open') ||
      body.hasAttribute('data-menu-open')
    ) {
      setOverlayOpen(true);
      return;
    }
    const coupon = document.querySelector('[data-coupon-popup]');
    if (coupon) {
      setOverlayOpen(true);
      return;
    }
    const mobileMenu = document.querySelector('[data-mobile-menu-open]');
    if (mobileMenu) {
      setOverlayOpen(true);
      return;
    }
    const openDialog = document.querySelector('dialog[open], [role="dialog"][aria-modal="true"]');
    if (openDialog) {
      setOverlayOpen(true);
      return;
    }
    setOverlayOpen(false);
  }, []);

  useEffect(() => {
    checkOverlays();
    mutationRef.current = new MutationObserver(checkOverlays);
    mutationRef.current.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ['data-modal-open', 'data-coupon-open', 'data-menu-open', 'open', 'aria-modal', 'data-coupon-popup', 'data-mobile-menu-open'],
    });
    return () => {
      mutationRef.current?.disconnect();
    };
  }, [checkOverlays]);

  const isShown = !footerVisible && !overlayOpen;

  return (
    <>
      <style>{`
        @keyframes floatingCallPulse {
          0%, 100% {
            box-shadow:
              0 4px 16px rgba(232, 98, 12, 0.45),
              0 2px 6px rgba(0,0,0,0.18);
          }
          50% {
            box-shadow:
              0 4px 28px rgba(232, 98, 12, 0.75),
              0 2px 10px rgba(0,0,0,0.22);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .floating-call-btn {
            animation: none !important;
          }
        }

        .floating-call-btn:hover {
          transform: translateY(-2px);
          box-shadow:
            0 8px 32px rgba(232, 98, 12, 0.6),
            0 4px 12px rgba(0,0,0,0.22) !important;
        }

        .floating-call-btn:focus-visible {
          outline: 3px solid #fff;
          outline-offset: 3px;
          box-shadow:
            0 0 0 5px rgba(232, 98, 12, 0.5),
            0 4px 16px rgba(232, 98, 12, 0.45);
        }

        /* Hidden below 900px — mobile bar handles this */
        .floating-call-wrapper {
          display: none;
        }

        /* Visible at 900px and wider */
        @media (min-width: 900px) {
          .floating-call-wrapper {
            display: block;
          }
        }

        /* 900px–1099px: short label only */
        @media (min-width: 900px) and (max-width: 1099px) {
          .floating-call-text-full {
            display: none;
          }
          .floating-call-text-short {
            display: inline;
          }
        }

        /* 1100px+: full label only */
        @media (min-width: 1100px) {
          .floating-call-text-full {
            display: inline;
          }
          .floating-call-text-short {
            display: none;
          }
        }
      `}</style>

      {/* Wrapper: hidden below 900px via CSS class, fades based on visibility state */}
      <div
        className="floating-call-wrapper"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 400,
          transition: 'opacity 0.3s ease, visibility 0.3s ease',
          opacity: isShown ? 1 : 0,
          visibility: isShown ? 'visible' : 'hidden',
          pointerEvents: isShown ? 'auto' : 'none',
        }}
      >
        <a
          href="tel:+12043994413"
          aria-label="Call Pro Drain Cleaning Limited now — +1 (204) 399-4413"
          className="floating-call-btn"
          onClick={() => { if (typeof (window as any).gtag_report_conversion === 'function') { (window as any).gtag_report_conversion('tel:+12043994413'); } }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'var(--accent-600)',
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '15px',
            lineHeight: 1,
            minHeight: '52px',
            padding: '0 22px',
            borderRadius: '9999px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            transition: 'transform 0.18s ease, box-shadow 0.18s ease',
            animation: 'floatingCallPulse 3s ease-in-out infinite',
            boxShadow: '0 4px 16px rgba(232, 98, 12, 0.45), 0 2px 6px rgba(0,0,0,0.18)',
          }}
        >
          {/* Phone SVG icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            focusable="false"
            style={{ flexShrink: 0 }}
          >
            <path
              d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.64 3.48 2 2 0 013.62 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006 6l.92-.92a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Full text at 1100px+, shortened at 900–1099px */}
          <span className="floating-call-text-full">Call Now &mdash; +1 (204) 399-4413</span>
          <span className="floating-call-text-short">Call Now</span>
        </a>
      </div>
    </>
  );
}
