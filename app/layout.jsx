import "./globals.css";
import Analytics from "@/components/Analytics";
import { SITE } from "@/lib/site-config";
import { getProduct } from "@/lib/products";

const hero = getProduct("v14-adventure");

export const metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: SITE.title,
  description: SITE.description,
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.canonicalUrl,
    siteName: SITE.brandName,
    locale: SITE.locale,
    type: "website",
    images: hero
      ? [{ url: hero.image.src, width: hero.image.width, height: hero.image.height, alt: hero.image.alt }]
      : undefined,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#121212",
};

export default function RootLayout({ children }) {
  return (
    <html lang={SITE.language}>
      <body className="bg-ink text-white antialiased">
        {children}
        <Analytics
          gaId={process.env.NEXT_PUBLIC_GA4_ID || ""}
          metaPixelId={process.env.NEXT_PUBLIC_META_PIXEL_ID || ""}
        />
      </body>
    </html>
  );
}
