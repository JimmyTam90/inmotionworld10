import AffiliateCTA from "./AffiliateCTA";
import { COLLECTIONS } from "@/lib/products";

// Card order: category image -> title & description -> CTA.
export default function Collections() {
  const collections = Array.isArray(COLLECTIONS) ? COLLECTIONS : [];
  if (collections.length === 0) return null;

  return (
    <section id="collections" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-extrabold sm:text-3xl">Browse the full range</h2>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        {collections.map((c) => (
          <div
            key={c.id}
            className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5"
          >
            {c.image && c.image.src && (
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/5">
                <img
                  src={c.image.src}
                  alt={c.image.alt || c.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain p-4"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-5">
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
          </div>
        ))}
      </div>
    </section>
  );
}
