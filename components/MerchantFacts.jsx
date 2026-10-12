import { SITE } from "@/lib/site-config";

// Policy facts below were read from the merchant's pages on the research date.
// "Free shipping within the US" was shown on the V14 PRO product page only.
export default function MerchantFacts() {
  const facts = [
    ["US shipping", "Free shipping within the US shown on the V14 PRO product page"],
    ["Delivery", "\"Delivery in 3-7 Business Days\" shown on the product pages"],
    ["Warranty", "12-month warranty listed by the merchant"],
    ["Returns", "15-day returns listed by the merchant"],
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-10" aria-labelledby="merchant-facts">
      <h2 id="merchant-facts" className="text-2xl font-extrabold sm:text-3xl">
        What the merchant lists
      </h2>
      <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {facts.map(([k, v]) => (
          <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <dt className="text-sm font-semibold text-brand">{k}</dt>
            <dd className="mt-1 text-sm text-white/85">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-xs text-white/60">
        Read from {SITE.merchantName}&apos;s product pages on {SITE.researchDate}.
        Terms vary by product and can change, so confirm shipping, warranty and
        return conditions on the merchant&apos;s own policy pages before buying.
      </p>
    </section>
  );
}
