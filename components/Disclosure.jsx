import { SITE, publicPath } from "@/lib/site-config";

export default function Disclosure({ className = "" }) {
  return (
    <p className={`text-xs text-white/60 ${className}`}>
      Affiliate disclosure: {SITE.brandName} is an independent publisher, not{" "}
      {SITE.merchantName}. We may earn a commission from qualifying purchases
      made through links on this page, at no additional cost to you.{" "}
      <a
        href={publicPath("/affiliate-disclosure")}
        className="underline hover:text-brand"
      >
        Learn more
      </a>
      .
    </p>
  );
}
