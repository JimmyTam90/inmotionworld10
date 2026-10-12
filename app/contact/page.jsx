import LegalPage from "@/components/LegalPage";
import { SITE, publicUrl } from "@/lib/site-config";

export const metadata = {
  title: `Contact | ${SITE.brandName}`,
  description: `Contact ${SITE.brandName}.`,
  alternates: { canonical: publicUrl("/contact") },
};

export default function ContactPage() {
  return (
    <LegalPage title="Contact">
      <p>
        For questions about this website, email{" "}
        <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
      </p>
      <p>
        We cannot help with orders, shipping, warranty or returns. Please contact{" "}
        {SITE.merchantName} directly for those.
      </p>
    </LegalPage>
  );
}
