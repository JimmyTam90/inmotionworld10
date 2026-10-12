# inmotion-world (PrimeGearLab affiliate landing page)

Next.js 14.2.35 + Tailwind, JavaScript, Hub-Spoke proxy deployment.

```bash
npm install
cp .env.example .env.local
npm run build && npm run verify   # verify checks built HTML hrefs against the supplied affiliate URLs
npm run dev
```

- Affiliate URLs live only in `lib/affiliate-links.js` (copied exactly from the project inputs); every CTA uses `components/AffiliateCTA.jsx`.
- Merchant facts and prices: `lib/products.js` (read October 12, 2026).
- Hub rewrite and asset strategy: `docs/HUB_REWRITE.md`.
- Add your logo at `public/logo.png`; the header uses it automatically.
- Test status and open issues: `QA_REPORT.md`.
