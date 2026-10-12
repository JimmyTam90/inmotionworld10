/** @type {import('next').NextConfig} */

// Hub–Spoke Proxy configuration.
//
// Public URL (Hub):   https://primegearlab.com/inmotion-world
// Spoke deployment:   https://inmotionworld10.vercel.app
//
// - No basePath: the Hub forwards /inmotion-world/:path* to the Spoke root,
//   so the Spoke keeps normal root routes (/privacy, /terms, ...).
// - assetPrefix: absolute Spoke origin in production so /_next/static/* CSS/JS
//   requested from a page served on the Hub origin is fetched from the Spoke.
//   This does NOT affect files in /public (logo) or remote product images;
//   those use publicPath() in lib/site-config.js.
// - rewrites: the Spoke also accepts /inmotion-world/* so links generated with
//   the public subpath still work when the Spoke is opened directly.
const spokeOrigin = (
  process.env.SPOKE_PROJECT_URL || "https://inmotionworld10.vercel.app"
).replace(/\/+$/, "");

const publicSubpath = (process.env.PUBLIC_SUBPATH || "/inmotion-world").replace(
  /\/+$/,
  ""
);

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  assetPrefix: isProd ? spokeOrigin : undefined,
  async rewrites() {
    return {
      beforeFiles: [
        { source: publicSubpath, destination: "/" },
        { source: `${publicSubpath}/:path*`, destination: "/:path*" },
      ],
    };
  },
};

module.exports = nextConfig;
