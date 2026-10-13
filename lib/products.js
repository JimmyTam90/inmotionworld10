// Product data. Facts were read from the merchant's live product pages on
// October 12, 2026 (see sourceUrl). Anything not found on those pages is
// omitted rather than invented. Prices change; always shown with the research date.
//
// affiliateKey must match a key in PRODUCT_DEEP_LINKS_MAPPING
// (lib/affiliate-links.js). Destinations are resolved only through
// resolveAffiliateUrl().

export const PRODUCTS = [
  {
    id: "v14-adventure",
    affiliateKey: "v14-adventure",
    name: "INMOTION V14 PRO",
    alsoKnownAs: "V14 Adventure",
    category: "Electric unicycle",
    tagline: "Push further. Ride stronger.",
    price: { amount: 2699, currency: "USD", wasAmount: 2899 },
    availability: "NOT_VERIFIED",
    image: {
      src: "https://inmotionworld.com/cdn/shop/files/V14PRO_1189fc3e-3ae9-4764-bb3c-b922ae184fe1.png?v=1788174730",
      alt: "INMOTION V14 PRO electric unicycle",
      width: 1000,
      height: 1000,
      status: "URL_SYNTAX_VALID (merchant og:image)",
    },
    highlights: [
      "Rated top speed up to 50 mph",
      "85 mm suspension travel with 17 damping levels",
      "9,000 W peak motor power, 2,400 Wh battery",
      "Rated range up to 74.5 miles (ideal test conditions)",
    ],
    specs: {
      topSpeed: "50 mph",
      range: "Up to 74.5 mi",
      battery: "2,400 Wh",
      peakPower: "9,000 W",
      ratedPower: "4,000 W",
      suspension: "85 mm travel",
      weight: "86 lbs",
      maxLoad: "309 lbs",
      water: "IPX6 (body)",
    },
    sourceUrl: "https://inmotionworld.com/products/inmotionadventure",
  },
  {
    id: "v11y",
    affiliateKey: "v11y",
    name: "INMOTION V11Y",
    alsoKnownAs: null,
    category: "Electric unicycle",
    tagline: "Commute further. Ride softer.",
    price: { amount: 1399, currency: "USD", wasAmount: 2399 },
    availability: "NOT_VERIFIED",
    image: {
      src: "https://inmotionworld.com/cdn/shop/files/V11Y_090b3ee9-0381-4d70-896e-c42d59e7d05f.png?v=1788174731",
      alt: "INMOTION V11Y electric unicycle",
      width: 1000,
      height: 1000,
      status: "URL_SYNTAX_VALID (merchant og:image)",
    },
    highlights: [
      "Top speed 37 mph",
      "85 mm suspension travel",
      "1,500 Wh Samsung 21700 battery pack",
      "Rated range 74.56 miles (ideal test conditions)",
    ],
    specs: {
      topSpeed: "37 mph",
      range: "74.56 mi",
      battery: "1,500 Wh",
      peakPower: "7,000 W",
      ratedPower: "2,500 W",
      suspension: "85 mm travel",
      weight: "66 lbs",
      maxLoad: "265 lbs",
      water: "IPX6 (body)",
    },
    sourceUrl: "https://inmotionworld.com/products/inmotion-v11y",
  },
  {
    id: "rs-scooter",
    affiliateKey: "rs-scooter",
    name: "INMOTION RS",
    alsoKnownAs: null,
    category: "Electric scooter",
    tagline: "Dual-motor, high-performance e-scooter.",
    price: { amount: 3999, currency: "USD", wasAmount: null },
    availability: "NOT_VERIFIED",
    image: {
      src: "https://inmotionworld.com/cdn/shop/files/RS_6363e2c1-1052-4c2a-bcac-642edb720c52.png?v=1790575155",
      alt: "INMOTION RS electric scooter",
      width: 1001,
      height: 1000,
      status: "URL_SYNTAX_VALID (merchant og:image)",
    },
    highlights: [
      "Rated top speed 68.3 mph",
      "4-level adjustable suspension",
      "Dual hydraulic disc brakes plus electronic braking",
      "2,880 Wh battery, rated range up to 100 miles",
    ],
    specs: {
      topSpeed: "68.3 mph",
      range: "Up to 100 mi",
      battery: "2,880 Wh",
      peakPower: "8,400 W",
      ratedPower: "4,000 W",
      suspension: "4-level adjustable",
      weight: "127.6 lbs",
      maxLoad: "330 lbs",
      water: "IP67 (body)",
    },
    sourceUrl: "https://inmotionworld.com/products/inmotion-rs",
  },
];

export const COLLECTIONS = [
  {
    id: "euc-collection",
    affiliateKey: "euc-collection",
    title: "Electric unicycles",
    description: "Browse the full INMOTION electric unicycle range.",
    cta: "Shop electric unicycles",
    // Merchant CDN image seen on inmotionworld.com/collections/electric-unicycle (Oct 12, 2026).
    image: {
      src: "https://inmotionworld.com/cdn/shop/files/V12-Pro-_-__01_a82bb76d-4e88-4527-afa1-28190393cc42.png?v=1775035875",
      alt: "INMOTION V12 Pro electric unicycle",
      status: "URL_SYNTAX_VALID (seen on merchant collection page; not runtime-tested)",
    },
  },
  {
    id: "scooter-collection",
    affiliateKey: "scooter-collection",
    title: "Electric scooters",
    description: "Browse the INMOTION electric scooter range.",
    cta: "Shop electric scooters",
    // Merchant CDN image seen on inmotionworld.com/collections/electric-scooter (Oct 12, 2026).
    image: {
      src: "https://inmotionworld.com/cdn/shop/files/208_7e3b8ee1-09f8-4354-bf94-a2849e0a8d2f.png?v=1788174668",
      alt: "INMOTION Climber electric scooter",
      status: "URL_SYNTAX_VALID (seen on merchant collection page; not runtime-tested)",
    },
  },
  {
    id: "accessories",
    affiliateKey: "accessories",
    title: "Accessories & gear",
    description: "Helmets, chargers, tires, pads and other official parts.",
    cta: "Shop accessories",
    // Merchant CDN image seen on inmotionworld.com/collections/accessories (Oct 12, 2026).
    image: {
      src: "https://inmotionworld.com/cdn/shop/files/129.png?v=1722423606",
      alt: "INMOTION honeycomb foot pedals accessory for electric unicycles",
      status: "URL_SYNTAX_VALID (seen on merchant collection page; not runtime-tested)",
    },
  },
];

export const SPEC_ROWS = [
  ["topSpeed", "Top speed"],
  ["range", "Rated range"],
  ["battery", "Battery"],
  ["peakPower", "Peak power"],
  ["ratedPower", "Rated power"],
  ["suspension", "Suspension"],
  ["weight", "Weight"],
  ["maxLoad", "Max load"],
  ["water", "Water rating"],
];

/** Safe price formatter: never invents a $0 or assumes a currency. */
export function formatPrice(price) {
  if (!price || typeof price.amount !== "number" || !isFinite(price.amount)) {
    return null;
  }
  if (typeof price.currency !== "string" || price.currency.length !== 3) {
    return null;
  }
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: price.currency,
      maximumFractionDigits: 0,
    }).format(price.amount);
  } catch {
    return null;
  }
}

export function formatWasPrice(price) {
  if (!price || typeof price.wasAmount !== "number") return null;
  return formatPrice({ amount: price.wasAmount, currency: price.currency });
}

export function getProducts() {
  return Array.isArray(PRODUCTS) ? PRODUCTS : [];
}

export function getProduct(id) {
  return getProducts().find((p) => p.id === id) || null;
}
