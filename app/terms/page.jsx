import LegalPage from "@/components/LegalPage";
import { SITE, publicUrl } from "@/lib/site-config";

export const metadata = {
  title: `Terms of Use | ${SITE.brandName}`,
  description: `Terms for using the ${SITE.brandName} affiliate landing page.`,
  alternates: { canonical: publicUrl("/terms") },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated={SITE.researchDate}>
      <p>By using this website you agree to these general terms.</p>
      <h2>Independent publisher</h2>
      <p>
        {SITE.brandName} is an independent affiliate publisher. We do not sell, ship, service or
        warrant any product. Purchases are made on {SITE.merchantName}&apos;s website under its own
        terms and policies.
      </p>
      <h2>Information accuracy</h2>
      <p>
        Product specifications, prices and policies shown here were read from the merchant&apos;s
        website on {SITE.researchDate} and may change. We do not guarantee that they are current
        or complete. Confirm details with the merchant before buying.
      </p>
      <h2>Not professional advice</h2>
      <p>
        Content is general information, not individualized legal, safety or financial advice.
        Electric unicycles and scooters are high-speed vehicles; use protective gear and follow
        local laws.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        To the extent permitted by law, we are not liable for losses arising from your use of this
        site or from transactions with third-party merchants.
      </p>
      <h2>Contact</h2>
      <p>
        <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
      </p>
    </LegalPage>
  );
}
