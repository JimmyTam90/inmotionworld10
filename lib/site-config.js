const stripTrailingSlashes = (s) => String(s || "").replace(/\/+$/, "");

const baseUrl = stripTrailingSlashes(
  process.env.PUBLIC_BASE_URL || "https://primegearlab.com"
);

const rawSubpath = stripTrailingSlashes(
  process.env.PUBLIC_SUBPATH || "/inmotion-world"
);
const publicSubpath = rawSubpath.startsWith("/") ? rawSubpath : `/${rawSubpath}`;

export const SITE = {
  projectName: "inmotion-world",
  brandName: "PrimeGearLab",
  brandPrimary: "#00E5FF",
  brandSecondary: "#121212",
  merchantName: "INMOTION",
  sourceWebsite: "https://inmotionworld.com/",
  contactEmail: "daniaengracia26377@gmail.com",
  language: "en",
  locale: "en_US",
  baseUrl,
  publicSubpath,
  canonicalUrl: `${baseUrl}${publicSubpath}`,
  // Date the merchant facts in lib/products.js were read from the merchant site.
  researchDate: "October 12, 2026",
  title: "Electric Unicycles & High-Performance E-Scooters | PrimeGearLab",
  description:
    "Compare INMOTION electric unicycles and the INMOTION RS e-scooter: top speed, range, suspension and safety specs, with links to the merchant.",
};

/**
 * Public (Hub-facing) path for a route or public file, e.g.
 *   publicPath("/privacy") -> "/inmotion-world/privacy"
 *   publicPath("/")        -> "/inmotion-world"
 * Used for internal links and /public assets so nothing escapes the Hub subpath.
 */
export function publicPath(path = "/") {
  const p = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `${publicSubpath}${p}`;
}

/** Absolute public URL for canonical / sitemap / Open Graph use. */
export function publicUrl(path = "/") {
  return `${baseUrl}${publicPath(path)}`;
}

export const NAV_LINKS = [
  { label: "Top picks", href: "#products" },
  { label: "Compare", href: "#compare" },
  { label: "Shop all", href: "#collections" },
  { label: "FAQ", href: "#faq" },
];
