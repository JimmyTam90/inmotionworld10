import { resolveAffiliateUrl } from "@/lib/affiliate-links";

// Every purchase/shop CTA goes through this component, which gets its
// destination only from resolveAffiliateUrl(). The href is the exact supplied
// URL. Same-tab navigation is used (no target="_blank") so the CTA behaves
// predictably inside Facebook/Instagram/TikTok/Zalo in-app browsers.
export default function AffiliateCTA({
  productKey,
  location,
  children,
  variant = "primary",
  className = "",
}) {
  const result = resolveAffiliateUrl(productKey);

  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3.5 min-h-[48px] text-base font-bold text-center transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink";
  const styles =
    variant === "primary"
      ? "bg-brand text-ink hover:brightness-110"
      : "border border-brand text-brand hover:bg-brand/10";

  if (!result.url) {
    return (
      <span
        role="note"
        className={`${base} cursor-not-allowed border border-white/20 text-white/60 ${className}`}
      >
        Merchant link unavailable
      </span>
    );
  }

  return (
    <a
      href={result.url}
      rel="sponsored nofollow noopener"
      data-affiliate-key={result.key}
      data-affiliate-source={result.source}
      data-cta-location={location || "unknown"}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
