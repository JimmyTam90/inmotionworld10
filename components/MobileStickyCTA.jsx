import AffiliateCTA from "./AffiliateCTA";
import { SITE } from "@/lib/site-config";
import { getProduct } from "@/lib/products";

// Secondary, mobile-only bar. In-flow CTAs remain below each product image.
export default function MobileStickyCTA() {
  const p = getProduct("v14-adventure");
  if (!p) return null;
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 px-4 pt-3 backdrop-blur md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <AffiliateCTA productKey={p.affiliateKey} location="sticky-mobile" className="w-full">
        View {p.name} on {SITE.merchantName}
      </AffiliateCTA>
    </div>
  );
}
