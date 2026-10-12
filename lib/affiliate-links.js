// Single source of truth for affiliate destinations.
// Values below are copied EXACTLY from the project inputs
// (DEFAULT_AFFILIATE_URL and PRODUCT_DEEP_LINKS_MAPPING), except the
// "v14-adventure" and "rs-scooter" entries: the originally supplied URLs
// returned 404 on the merchant site, and the user explicitly authorized
// these replacements on 2026-10-12.
// This module never builds, appends, rewrites, or normalizes a URL.

export const DEFAULT_AFFILIATE_URL = "https://inmotionworld.com/?ref=kxpnbnzr";

export const PRODUCT_DEEP_LINKS_MAPPING = {
  "v14-adventure":
    "https://inmotionworld.com/products/inmotionadventure?ref=kxpnbnzr",
  v11y: "https://inmotionworld.com/products/inmotion-v11y?ref=kxpnbnzr",
  "rs-scooter":
    "https://inmotionworld.com/products/inmotion-rs?ref=kxpnbnzr",
  "euc-collection":
    "https://inmotionworld.com/collections/electric-unicycle/?ref=kxpnbnzr",
  "scooter-collection":
    "https://inmotionworld.com/collections/electric-scooter/?ref=kxpnbnzr",
  accessories:
    "https://inmotionworld.com/collections/accessories/?ref=kxpnbnzr",
};

// Syntax check only. It never changes the string that gets returned.
function isParsableHttpUrl(value) {
  if (typeof value !== "string" || value.length === 0) return false;
  try {
    const u = new URL(value);
    return u.protocol === "https:" || u.protocol === "http:";
  } catch {
    return false;
  }
}

/**
 * Resolve the CTA destination for a product/collection key.
 * Returns { url, source, status, key } where url is the exact supplied string,
 * or null when no valid destination exists (callers must then render a
 * non-link state, never href="#").
 *
 * status values:
 *   PROVIDED_NOT_RUNTIME_VERIFIED  supplied + parses; destination not tested
 *   INVALID_INPUT                  supplied but does not parse
 *   BLOCKED_MISSING_AFFILIATE_URL  nothing usable supplied
 */
export function resolveAffiliateUrl(productKey) {
  const key = typeof productKey === "string" ? productKey : "";
  const hasOwn = Object.prototype.hasOwnProperty.call(
    PRODUCT_DEEP_LINKS_MAPPING,
    key
  );

  if (hasOwn) {
    const mapped = PRODUCT_DEEP_LINKS_MAPPING[key];
    if (isParsableHttpUrl(mapped)) {
      return {
        url: mapped,
        source: "PRODUCT_MAPPING",
        status: "PROVIDED_NOT_RUNTIME_VERIFIED",
        key,
      };
    }
    // Mapped entry exists but is malformed: do not guess, report it.
    return { url: null, source: "PRODUCT_MAPPING", status: "INVALID_INPUT", key };
  }

  if (isParsableHttpUrl(DEFAULT_AFFILIATE_URL)) {
    return {
      url: DEFAULT_AFFILIATE_URL,
      source: "DEFAULT_FALLBACK",
      status: "PROVIDED_NOT_RUNTIME_VERIFIED",
      key,
    };
  }

  return {
    url: null,
    source: "NONE",
    status: "BLOCKED_MISSING_AFFILIATE_URL",
    key,
  };
}
