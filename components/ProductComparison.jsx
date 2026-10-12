import AffiliateCTA from "./AffiliateCTA";
import { SITE } from "@/lib/site-config";
import { getProducts, SPEC_ROWS } from "@/lib/products";

export default function ProductComparison() {
  const products = getProducts();
  if (products.length === 0) return null;

  return (
    <section id="compare" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-extrabold sm:text-3xl">Spec comparison</h2>
      <p className="mt-2 max-w-2xl text-white/70">
        Only specifications published on the merchant&apos;s pages are listed. This
        compares three selected models and is not an exhaustive review.
      </p>

      <div className="mt-6 overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full min-w-[640px] text-left text-sm">
          <caption className="sr-only">
            Specification comparison of INMOTION V14 PRO, V11Y and RS
          </caption>
          <thead className="bg-white/5">
            <tr>
              <th scope="col" className="p-3 font-semibold text-white/70">
                Spec
              </th>
              {products.map((p) => (
                <th key={p.id} scope="col" className="p-3 font-bold">
                  {p.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SPEC_ROWS.map(([key, label]) => (
              <tr key={key} className="border-t border-white/10">
                <th scope="row" className="p-3 font-medium text-white/70">
                  {label}
                </th>
                {products.map((p) => (
                  <td key={p.id} className="p-3">
                    {p.specs && p.specs[key] ? p.specs[key] : "Not specified"}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="border-t border-white/10">
              <th scope="row" className="p-3 font-medium text-white/70">
                Merchant page
              </th>
              {products.map((p) => (
                <td key={p.id} className="p-3">
                  <AffiliateCTA
                    productKey={p.affiliateKey}
                    location={`compare-${p.id}`}
                    variant="secondary"
                    className="w-full !px-3 !py-2 !text-sm"
                  >
                    View on {SITE.merchantName}
                  </AffiliateCTA>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
