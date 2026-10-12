import AffiliateCTA from "./AffiliateCTA";
import { SITE } from "@/lib/site-config";
import { formatPrice, formatWasPrice } from "@/lib/products";

// Order: image -> name/price -> CTA -> highlights.
export default function ProductCard({ product }) {
  if (!product) return null;
  const price = formatPrice(product.price);
  const was = formatWasPrice(product.price);

  return (
    <article className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-lg bg-white/5">
        <img
          src={product.image.src}
          alt={product.image.alt}
          width={product.image.width}
          height={product.image.height}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain"
        />
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-brand">
        {product.category}
      </p>
      <h3 className="mt-1 text-xl font-bold">{product.name}</h3>
      {product.alsoKnownAs && (
        <p className="text-xs text-white/60">Also referred to as {product.alsoKnownAs}</p>
      )}
      {price && (
        <p className="mt-2 text-sm text-white/80">
          <strong className="text-white">{price}</strong>
          {was && <span className="ml-2 text-white/50 line-through">{was}</span>}
          <span className="ml-2 text-xs text-white/50">listed {SITE.researchDate}</span>
        </p>
      )}
      <div className="mt-4">
        <AffiliateCTA
          productKey={product.affiliateKey}
          location={`card-${product.id}`}
          className="w-full"
        >
          View {product.name} on {SITE.merchantName}
        </AffiliateCTA>
      </div>
      <ul className="mt-4 space-y-1.5 text-sm text-white/80">
        {product.highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <span aria-hidden="true" className="text-brand">
              &#9656;
            </span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
