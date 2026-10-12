"use client";

import Script from "next/script";
import { useEffect } from "react";

// Loads GA4 / Meta Pixel only when real IDs are configured, and reports
// affiliate_click via a passive click listener. It never changes the link's
// href and never delays navigation.
const GA_RE = /^G-[A-Z0-9]{4,20}$/;
const PIXEL_RE = /^\d{8,20}$/;

export default function Analytics({ gaId, metaPixelId }) {
  const ga = gaId && GA_RE.test(gaId) ? gaId : null;
  const pixel = metaPixelId && PIXEL_RE.test(metaPixelId) ? metaPixelId : null;

  useEffect(() => {
    if (!ga && !pixel) return undefined;
    function onClick(e) {
      try {
        const el = e.target && e.target.closest ? e.target.closest("a[data-affiliate-key]") : null;
        if (!el) return;
        const params = {
          item_id: el.getAttribute("data-affiliate-key"),
          cta_location: el.getAttribute("data-cta-location"),
          link_source: el.getAttribute("data-affiliate-source"),
        };
        if (ga && typeof window.gtag === "function") window.gtag("event", "affiliate_click", params);
        if (pixel && typeof window.fbq === "function") window.fbq("trackCustom", "AffiliateClick", params);
      } catch {
        /* tracking must never break navigation */
      }
    }
    document.addEventListener("click", onClick, { passive: true });
    return () => document.removeEventListener("click", onClick);
  }, [ga, pixel]);

  return (
    <>
      {ga && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${ga}');`}
          </Script>
        </>
      )}
      {pixel && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixel}');fbq('track','PageView');`}
        </Script>
      )}
    </>
  );
}
