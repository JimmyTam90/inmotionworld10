import { SITE } from "@/lib/site-config";

const FAQS = [
  {
    q: "Who sells these products?",
    a: `${SITE.merchantName} sells them through its own store. ${SITE.brandName} is an independent affiliate publisher and does not sell, ship or support the products.`,
  },
  {
    q: "Are the links on this page affiliate links?",
    a: "Yes. If you buy through them we may earn a commission at no extra cost to you. This does not change the price the merchant charges.",
  },
  {
    q: "How reliable are the range and speed figures?",
    a: "They are the manufacturer's rated figures. The merchant notes that actual range and speed vary with rider weight, speed, terrain, temperature, tire pressure and riding style.",
  },
  {
    q: "What about shipping, warranty and returns?",
    a: "See the merchant facts above for what the merchant listed on the research date. Always confirm current terms on the merchant's policy pages, since they can differ by product and change over time.",
  },
  {
    q: "Is riding an electric unicycle or scooter safe?",
    a: "These are high-speed personal vehicles. Wear appropriate protective gear, ride within your experience level and follow local laws and regulations.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-10">
      <h2 className="text-2xl font-extrabold sm:text-3xl">Frequently asked questions</h2>
      <div className="mt-6 divide-y divide-white/10 rounded-xl border border-white/10">
        {FAQS.map((f) => (
          <details key={f.q} className="group p-4">
            <summary className="cursor-pointer list-none font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-brand">
              {f.q}
            </summary>
            <p className="mt-2 text-sm text-white/80">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
