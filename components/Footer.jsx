import { SITE, publicPath } from "@/lib/site-config";
import Disclosure from "./Disclosure";

const LINKS = [
  ["/privacy", "Privacy"],
  ["/terms", "Terms"],
  ["/affiliate-disclosure", "Affiliate disclosure"],
  ["/contact", "Contact"],
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {LINKS.map(([href, label]) => (
            <a key={href} href={publicPath(href)} className="text-white/80 hover:text-brand">
              {label}
            </a>
          ))}
        </nav>
        <Disclosure className="mt-4 max-w-3xl" />
        <p className="mt-4 text-xs text-white/50">
          {SITE.brandName} is an independent site and is not affiliated with or
          endorsed by {SITE.merchantName}. {SITE.merchantName} names and product
          images belong to their respective owners.
        </p>
      </div>
    </footer>
  );
}
