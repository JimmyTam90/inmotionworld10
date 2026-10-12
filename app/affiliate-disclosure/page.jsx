import LegalPage from "@/components/LegalPage";
import { SITE, publicUrl } from "@/lib/site-config";

export const metadata = {
  title: `Affiliate Disclosure | ${SITE.brandName}`,
  description: `How ${SITE.brandName} earns commissions from merchant links.`,
  alternates: { canonical: publicUrl("/affiliate-disclosure") },
};

export default function AffiliateDisclosurePage() {
  return (
    <LegalPage title="Affiliate Disclosure" updated={SITE.researchDate}>
      <p>
        As an affiliate publisher, we may earn a commission from qualifying purchases made
        through links on this page, at no additional cost to you.
      </p>
      <p>
        {SITE.brandName} is independent and is not {SITE.merchantName}. We do not claim to be the
        official store, an authorized dealer or an endorsed partner of {SITE.merchantName}.
      </p>
      <p>
        Commissions do not change the price you pay. Our descriptions rely on the merchant&apos;s
        published information; we do not invent reviews, ratings or discounts.
      </p>
      <p>
        Questions? <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
      </p>
    </LegalPage>
  );
}
