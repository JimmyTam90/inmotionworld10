import AffiliateCTA from "./AffiliateCTA";
import { COLLECTIONS } from "@/lib/products";

export default function Collections() {
  return (
    <section id="collections" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-extrabold sm:text-3xl">Browse the full range</h2>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        {COLLECTIONS.map((c) => (
          <div key={c.id} className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-bold">{c.title}</h3>
            <p className="mt-1 flex-1 text-sm text-white/70">{c.description}</p>
            <div className="mt-4">
              <AffiliateCTA
                productKey={c.affiliateKey}
                location={`collection-${c.id}`}
                variant="secondary"
                className="w-full"
              >
                {c.cta}
              </AffiliateCTA>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
