import AffiliateCTA from "./AffiliateCTA";
import Disclosure from "./Disclosure";
import { SITE } from "@/lib/site-config";
import { getProduct, formatPrice } from "@/lib/products";

// Mobile order (DOM order): image -> title/key info -> CTA -> supporting details.
export default function Hero() {
  const p = getProduct("v14-adventure");
  if (!p) return null;
  const price = formatPrice(p.price);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-10 pt-8 md:pt-12">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-white/5 lg:max-w-lg">
          <img
            src={p.image.src}
            alt={p.image.alt}
            width={p.image.width}
            height={p.image.height}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-contain"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Electric unicycles &amp; high-performance e-scooters
          </p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">
            {p.name}: rated up to 50&nbsp;mph with 85&nbsp;mm suspension
          </h1>
          <p className="mt-3 text-white/80">
            {p.tagline} Compare top speed, range, suspension and build specs for
            the INMOTION V14, V11Y and RS before you visit the merchant.
          </p>

          {price && (
            <p className="mt-4 text-sm text-white/70">
              Merchant listed price: <strong className="text-white">{price}</strong>{" "}
              on {SITE.researchDate}. Prices and availability can change.
            </p>
          )}

          <div className="mt-5">
            <AffiliateCTA productKey={p.affiliateKey} location="hero" className="w-full sm:w-auto">
              View {p.name} on {SITE.merchantName}
            </AffiliateCTA>
          </div>

          <ul className="mt-6 space-y-2 text-sm text-white/85">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span aria-hidden="true" className="text-brand">
                  &#9656;
                </span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <Disclosure className="mt-5" />
        </div>
      </div>
    </section>
  );
}
