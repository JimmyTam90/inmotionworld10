# QA Report: inmotion-world (PrimeGearLab)

Generated October 12, 2026. Statuses: PASS / FAIL / NOT EXECUTED / BLOCKED.

## A. Implementation summary
- Language: JavaScript (`.jsx` / `.js`). Next.js 14.2.35, React 18, Tailwind 3.
- Mode: HUB_SPOKE_PROXY. Public `https://primegearlab.com/inmotion-world`; Spoke `https://inmotionworld10.vercel.app`.
- Sections: header, hero (image -> title -> CTA), product cards, spec comparison, merchant-listed facts, collections, FAQ, footer, mobile sticky CTA.
- Legal pages: `/privacy`, `/terms`, `/affiliate-disclosure`, `/contact` (mailto only; no fake form).
- Logo: **BLOCKED**. `public/logo.png` was not supplied and was not fabricated. Header shows a text wordmark until the file is added; it switches to the image automatically once the file exists.

## B. Affiliate URL integrity
- DEFAULT_AFFILIATE_URL supplied: yes. PRODUCT_DEEP_LINKS_MAPPING supplied: yes (6 keys).
- All 11 CTAs resolve through `resolveAffiliateUrl()`; hrefs are byte-identical to the supplied strings (PASS, rendered-HTML check). No params added, no `href="#"`.
- Status of every URL: `PROVIDED_NOT_RUNTIME_VERIFIED`.
- **Resolved (user-authorized change, October 12, 2026):** the originally supplied V14 and RS product URLs returned 404 on the merchant site. They were replaced, at the user's explicit instruction, with:
  - `v14-adventure`: `https://inmotionworld.com/products/inmotionadventure?ref=kxpnbnzr`
  - `rs-scooter`: `https://inmotionworld.com/products/inmotion-rs?ref=kxpnbnzr`
  - Both were fetched after the change and load as product pages (V14 PRO and RS). This confirms the pages exist; it does **not** confirm that `?ref=kxpnbnzr` is attributed to the affiliate account.
- The other four URLs are exactly as originally supplied. The three collection URLs were not fetched and remain untested.

## C. Deployment configuration
- `basePath`: none. `assetPrefix`: absolute Spoke origin in production only. `trailingSlash`: false.
- Hub rewrite: **not inspected** (Hub config not available). Proposed rewrite in `docs/HUB_REWRITE.md`.
- Env (build time): `SPOKE_PROJECT_URL`, `PUBLIC_BASE_URL`, `PUBLIC_SUBPATH`. Optional: `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_META_PIXEL_ID`.

## D. QA results
| Check | Status | Notes |
| --- | --- | --- |
| `npm install` | BLOCKED | Sandbox cannot resolve `registry.npmjs.org`; no Next.js in local cache. |
| `npm run build` | NOT EXECUTED | Depends on install. Run it locally/Vercel. |
| Lint / typecheck | NOT EXECUTED | `next lint` needs install. |
| Page render (all 5 pages, server-side via react-dom + tsx) | PASS | Syntax, imports, data contract all resolve. Not a substitute for `next build`. |
| `next.config.js` loads | PASS | Prod assetPrefix, rewrites, trailingSlash output confirmed via node. |
| Data schema / unique IDs / CTA keys | PASS | 3 products, 3 collections, every key maps. |
| Affiliate mapping (exact hrefs, one URL per key) | PASS | See section B for the authorized URL change. |
| CTA new-tab behavior (all 11 affiliate links: `target="_blank"`, `rel` includes `noopener noreferrer`; internal links stay same-tab) | PASS | Rendered-HTML check, not a browser click test. |
| Mobile DOM order image -> CTA | PASS | Hero and all 3 cards (DOM check only). |
| Internal links under `/inmotion-world`, no duplicate subpath | PASS | Rendered HTML. |
| Sitemap / robots URLs | PASS | Use public Hub URLs. |
| Image and logo paths | NOT EXECUTED / BLOCKED | Product images `URL_SYNTAX_VALID` only (merchant og:image URLs, not requested at runtime). Logo BLOCKED. |
| Hub-Spoke asset requests (`/_next/static`, logo, deep routes) | NOT EXECUTED | No deployment. |
| Responsive / visual layout | NOT EXECUTED | No browser run. |
| Tracking | NOT_CONFIGURED | No GA4, Google Ads or Meta Pixel IDs supplied. Code is ready but unloaded. |
| Regression | NOT EXECUTED | No fixes were applied after tests. |

## E. Remaining risks
- `rel="noreferrer"` (requested) stops the browser sending a Referer header to the merchant. If the merchant's affiliate network attributes by referrer rather than the `?ref=` parameter, this could affect tracking; confirm with a test click.
- Live affiliate attribution and merchant availability are unverified.
- Prices (V14 $2,699, V11Y $1,399, RS $3,999) and merchant policies (free US shipping on the V14 page, 3-7 day delivery, 12-month warranty, 15-day returns) were read October 12, 2026 and can change. "Free shipping" was seen on the V14 page only, so it is worded that way.
- The V14 merchant page lists conflicting tire sizes, so tire size is omitted. The RS "fastest" and V11Y "best-selling" merchant claims were not repeated.
- `OFFER_DETAILS` mentions "fast US warehouse dispatch"; no warehouse claim was found on the merchant pages, so it is not used.
- Consent banner not implemented. Add one before enabling GA4/Meta Pixel for US (e.g. California) traffic.
- Real in-app browser behaviour (Facebook, Instagram, TikTok, Zalo) untested; CTAs open in a new tab (`target="_blank"`, per your instruction); in-app browsers may handle new-tab links differently.
- Remote images have no JS `onError` fallback (alt text and a tinted container only).
