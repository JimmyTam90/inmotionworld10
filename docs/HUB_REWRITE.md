# Hub rewrite (assumption — Hub config was not available to inspect)

Public URL: `https://primegearlab.com/inmotion-world`
Spoke (Vercel project): `https://inmotionworld10.vercel.app`

Add to the **Hub** project's `vercel.json` (merge with existing rewrites):

```json
{
  "rewrites": [
    { "source": "/inmotion-world", "destination": "https://inmotionworld10.vercel.app/" },
    { "source": "/inmotion-world/:path*", "destination": "https://inmotionworld10.vercel.app/:path*" }
  ]
}
```

How the pieces fit:

| Concern | Strategy |
| --- | --- |
| Routes | Spoke keeps root routes (`/`, `/privacy`, ...). No `basePath`. |
| `/_next/static/*` | `assetPrefix` = absolute Spoke origin in production, so CSS/JS load straight from the Spoke. |
| `public/logo.png` | Referenced as `/inmotion-world/logo.png` (via `publicPath()`); Hub rewrite forwards it to Spoke `/logo.png`. |
| Direct Spoke access | `next.config.js` rewrites `/inmotion-world/:path*` -> `/:path*`, so links still work on the Spoke origin. |
| Trailing slash | `trailingSlash: false` everywhere (config, links, canonicals, sitemap). |
| Product images | Plain `<img>` pointing at the merchant's CDN (no `/_next/image`). |

Vercel build env (must exist at **build** time): `SPOKE_PROJECT_URL`, `PUBLIC_BASE_URL`, `PUBLIC_SUBPATH`.
