import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import '../styles/tailwind.css';
import LocalServicesSchemaMarkup from '@/components/LocalServicesSchemaMarkup';
import FloatingCallButton from '@/components/FloatingCallButton';

// Dynamically import Analytics — code-splits it out of the initial JS bundle
const Analytics = dynamic(() => import('@/components/Analytics'));

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'optional',
  preload: true,
});

const criticalCSS = `
  *,::before,::after{box-sizing:border-box}
  html{scroll-behavior:smooth}
  @font-face{font-family:'Manrope Fallback';src:local('Arial');size-adjust:105%;ascent-override:95%;descent-override:normal;line-gap-override:normal}
  body{margin:0;background:#fff;color:#0E1B26;font-family:var(--font-manrope),'Manrope Fallback',sans-serif;-webkit-font-smoothing:antialiased;line-height:1.65;font-size:clamp(1.0625rem,1.6vw,1.125rem)}
  h1,h2,h3,h4,h5,h6,p{margin:0}
  h1{font-size:clamp(2rem,6vw,3.75rem);font-weight:800;letter-spacing:-0.02em;line-height:1.1}
  h2{font-size:clamp(1.6rem,4vw,2.6rem);font-weight:700;letter-spacing:-0.02em;line-height:1.2}
  a{color:inherit;text-decoration:none}
  img,video{max-width:100%;height:auto;display:block}
  .container-wide{max-width:1280px;margin-left:auto;margin-right:auto;padding-left:clamp(1rem,4vw,2rem);padding-right:clamp(1rem,4vw,2rem)}
  .section-padding{padding:clamp(56px,9vw,120px) 0}
`;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://prodraincleaning.ca'),
  title: 'Pro Drain Cleaning — 24/7 Winnipeg Drain & Sewer',
  description: 'Drain cleaning, sewer line unclogging & emergency plumbing in Winnipeg, Selkirk & 100km around. Upfront pricing, camera-verified results. Call +1 (204) 294-3629.',
  icons: {
    icon: [
      { url: '/assets/images/app_logo.png', type: 'image/png', sizes: '512x512' },
      { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' },
    ],
    apple: [
      { url: '/assets/images/app_logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/assets/images/app_logo.png',
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
// GTM placeholder — replace GTM-XXXXXXX with your actual GTM container ID or remove if not using GTM
const GTM_ID = 'GTM-XXXXXXX'; // Replace GTM-XXXXXXX with your actual GTM container ID or remove if not using GTM
const GADS_ID = 'AW-17370235539';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" className={manrope.variable}>
      <head>
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="bIcVhy2p4hHv4WlmU8DwxidZmyA1G8E4GIGfzfvD_eY" />

        {/* Critical CSS inline — eliminates render-blocking for above-the-fold paint */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />

        {/* Local Services Ads Structured Data */}
        <LocalServicesSchemaMarkup />

        {/* GTM head snippet — only fires if a real GTM ID is configured */}
        {GTM_ID && GTM_ID !== 'GTM-XXXXXXX' && (
          <Script id="gtm-head" strategy="lazyOnload">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
        {/* GA4 — deferred to lazyOnload so it does not compete with LCP */}
        {GA_ID && GA_ID !== 'your-google-analytics-id-here' && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="lazyOnload"
            />
            <Script id="ga4-init" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: true
                });
              `}
            </Script>
          </>
        )}

        {/* Google Ads base tag — deferred to lazyOnload so it does not block LCP */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`}
          strategy="lazyOnload"
        />
        <Script id="gads-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GADS_ID}');
          `}
        </Script>

        {/* Google Ads: phone-click conversion tracking function */}
        <Script id="gads-phone-conversion-fn" strategy="lazyOnload">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-17370235539/vL9ACLHQlvAcEJOF49pA',
                'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
</head>
      <body className={`${manrope.className} pb-18 lg:pb-0`}>
        {/* GTM noscript */}
        {GTM_ID && GTM_ID !== 'GTM-XXXXXXX' && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="Google Tag Manager"
            />
          </noscript>
        )}
        <Analytics />
        <FloatingCallButton />
        {children}

        {/* Google Ads: phone click conversion tracking — deferred until after load */}
        <Script id="gads-phone-click" strategy="lazyOnload">
          {`
            document.addEventListener('DOMContentLoaded', function () {
              document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
                link.addEventListener('click', function () {
                  if (typeof gtag === 'function') {
                    gtag('event', 'conversion', {
                      'send_to': 'AW-17370235539/vL9ACLHQlvAcEJOF49pA'
                    });
                  }
                });
              });
            });
          `}
        </Script>

        {/* Google Ads: form submission conversion tracking helper — deferred until after load */}
        <Script id="gads-form-conversion" strategy="lazyOnload">
          {`
            function gtagReportFormConversion() {
              if (typeof gtag === 'function') {
                gtag('event', 'conversion', {
                  'send_to': 'AW-17370235539/LIdoCP7Kk-kcEJOF49pA'
                });
              }
            }
          `}
        </Script>
      </body>
    </html>
  );
}