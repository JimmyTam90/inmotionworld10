import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import ProductComparison from "@/components/ProductComparison";
import MerchantFacts from "@/components/MerchantFacts";
import Collections from "@/components/Collections";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { SITE } from "@/lib/site-config";

export const metadata = {
  alternates: { canonical: SITE.canonicalUrl },
};

export default function HomePage() {
  return (
    // Bottom padding on mobile keeps the sticky CTA from covering the footer.
    <div className="pb-24 md:pb-0">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <ProductComparison />
        <MerchantFacts />
        <Collections />
        <FAQ />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
