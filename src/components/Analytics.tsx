'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
  }
}

export function initDataLayer() {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
  }
}

/** Derive a human-readable page_type from the current pathname */
function getPageType(pathname: string): string {
  if (pathname === '/') return 'home';
  if (pathname.startsWith('/areas/')) return 'area';
  if (pathname.startsWith('/blog/')) return 'blog';
  if (pathname.startsWith('/contact')) return 'contact';
  if (pathname.startsWith('/book-online')) return 'booking';
  if (
    pathname.startsWith('/emergency') ||
    pathname.includes('emergency')
  ) return 'emergency';
  if (
    pathname.startsWith('/drain-cleaning') ||
    pathname.startsWith('/main-sewer') ||
    pathname.startsWith('/restaurant-commercial') ||
    pathname.startsWith('/plumbing-services')
  ) return 'service';
  return 'other';
}

/**
 * Extract the town/service-area slug from area pages.
 * e.g. /areas/drain-cleaning-steinbach → "steinbach" *      /areas/drain-cleaning-east-west-st-paul →"east-west-st-paul"
 */
function getServiceArea(pathname: string): string | undefined {
  const match = pathname.match(/^\/areas\/drain-cleaning-(.+)$/);
  if (match) {
    return match[1]
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());
  }
  return undefined;
}

/**
 * Core event push — sends to both dataLayer (GTM) and gtag (GA4 direct).
 * Always enriches with page_path and page_type; optionally with service_area.
 */
export function pushEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];

  const pathname =
    typeof window !== 'undefined' ? window.location.pathname : '';
  const enriched: Record<string, unknown> = {
    page_path: pathname,
    page_type: getPageType(pathname),
    ...params,
  };

  const area = getServiceArea(pathname);
  if (area && !enriched.service_area) {
    enriched.service_area = area;
  }

  window.dataLayer.push({ event: eventName, ...enriched });
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, enriched);
  }
}

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];

    const pageType = getPageType(pathname);
    const serviceArea = getServiceArea(pathname);

    // ── Scroll depth (75%) ──────────────────────────────────────────────────
    let fired75 = false;
    const handleScroll = () => {
      if (fired75) return;
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      if (scrolled / total >= 0.75) {
        fired75 = true;
        pushEvent('scroll_75', {
          page_path: pathname,
          page_type: pageType,
          ...(serviceArea ? { service_area: serviceArea } : {}),
        });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // ── Form start (first field focus) ─────────────────────────────────────
    let formStartFired = false;
    const handleFocusin = (e: FocusEvent) => {
      if (formStartFired) return;
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT')
      ) {
        const form = target.closest('form');
        if (form) {
          formStartFired = true;
          pushEvent('form_start', {
            form_id: form.id || form.getAttribute('aria-label') || 'contact_form',
            page_path: pathname,
            page_type: pageType,
            ...(serviceArea ? { service_area: serviceArea } : {}),
          });
        }
      }
    };
    document.addEventListener('focusin', handleFocusin);

    // ── Link clicks: call / WhatsApp / email / service-area CTAs ───────────
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href') || '';

      // Phone call
      if (href.startsWith('tel:')) {
        pushEvent('click_call', {
          phone: href.replace('tel:', ''),
          page_path: pathname,
          page_type: pageType,
          click_location: link.closest('[data-ga-location]')?.getAttribute('data-ga-location') || 'page',
          ...(serviceArea ? { service_area: serviceArea } : {}),
        });
        return;
      }

      // WhatsApp
      if (href.includes('wa.me')) {
        pushEvent('click_whatsapp', {
          page_path: pathname,
          page_type: pageType,
          click_location: link.closest('[data-ga-location]')?.getAttribute('data-ga-location') || 'page',
          ...(serviceArea ? { service_area: serviceArea } : {}),
        });
        return;
      }

      // Email
      if (href.startsWith('mailto:')) {
        pushEvent('click_email', {
          email: href.replace('mailto:', ''),
          page_path: pathname,
          page_type: pageType,
          ...(serviceArea ? { service_area: serviceArea } : {}),
        });
        return;
      }

      // Service-area CTA links (e.g. /areas/drain-cleaning-steinbach)
      const areaMatch = href.match(/^\/areas\/drain-cleaning-(.+)$/);
      if (areaMatch) {
        const clickedArea = areaMatch[1]
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase());
        pushEvent('area_cta_click', {
          destination_area: clickedArea,
          destination_url: href,
          page_path: pathname,
          page_type: pageType,
          click_text: link.textContent?.trim() || '',
          ...(serviceArea ? { source_area: serviceArea } : {}),
        });
        return;
      }

      // data-ga-cta attribute — generic CTA tracking for any tagged element
      const gaLabel = link.getAttribute('data-ga-cta') || link.closest('[data-ga-cta]')?.getAttribute('data-ga-cta');
      if (gaLabel) {
        pushEvent('cta_click', {
          cta_label: gaLabel,
          destination_url: href,
          page_path: pathname,
          page_type: pageType,
          ...(serviceArea ? { service_area: serviceArea } : {}),
        });
      }
    };
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('focusin', handleFocusin);
      document.removeEventListener('click', handleClick);
    };
  }, [pathname]);

  return null;
}
