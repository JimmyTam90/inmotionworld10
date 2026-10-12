import ProductCard from "./ProductCard";
import { getProducts } from "@/lib/products";

export default function ProductGrid() {
  const products = getProducts();
  if (products.length === 0) return null;
  return (
    <section id="products" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-extrabold sm:text-3xl">Top performance picks</h2>
      <p className="mt-2 max-w-2xl text-white/70">
        Specifications below are the manufacturer&apos;s figures as shown on the
        merchant&apos;s product pages. Real-world range and speed depend on rider
        weight, terrain, temperature and riding style.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
