import LegalPage from "@/components/LegalPage";
import { SITE, publicUrl } from "@/lib/site-config";

export const metadata = {
  title: `Privacy Policy | ${SITE.brandName}`,
  description: `How ${SITE.brandName} handles information on this affiliate landing page.`,
  alternates: { canonical: publicUrl("/privacy") },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated={SITE.researchDate}>
      <p>
        This page describes how {SITE.brandName} (&quot;we&quot;) handles information on this
        website. We are an independent affiliate publisher.
      </p>
      <h2>Information we collect</h2>
      <p>
        This site has no account system, checkout or contact form, and we do not ask you to
        submit personal information through it. Our hosting provider (Vercel) and CDN may
        process technical data such as IP address and request logs to deliver the site.
      </p>
      <h2>Analytics and advertising tags</h2>
      <p>
        The site supports Google Analytics 4 and the Meta Pixel, which load only if the site
        operator has configured them. When active, these services may set cookies or similar
        identifiers and collect information such as pages viewed, device and browser data and
        clicks on merchant links. Where required by law, you can control cookies through your
        browser settings.
      </p>
      <h2>Merchant links</h2>
      <p>
        Links on this page lead to {SITE.merchantName} ({SITE.sourceWebsite}). Those links may
        carry an affiliate reference so the merchant can attribute a visit to us. Once you leave
        this site, the merchant&apos;s own privacy policy applies to your data.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about this policy: <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
