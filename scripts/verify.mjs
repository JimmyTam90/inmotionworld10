// Post-build check: every supplied affiliate URL used on the page must appear
// byte-for-byte as an href in the prerendered HTML, and no href="#" CTA exists.
import fs from "node:fs";

const src = fs.readFileSync("lib/affiliate-links.js", "utf8");
const supplied = [...src.matchAll(/"(https:\/\/inmotionworld\.com[^"]*)"/g)].map((m) => m[1]);
const html = fs.readFileSync(".next/server/app/index.html", "utf8");

let failed = 0;
for (const url of supplied) {
  const ok = html.includes(`href="${url}"`);
  console.log(`${ok ? "PASS" : "FAIL"}  ${url}`);
  if (!ok) failed++;
}
const hashCtas = (html.match(/data-affiliate-key[^>]*href="#"/g) || []).length;
console.log(`${hashCtas === 0 ? "PASS" : "FAIL"}  no href="#" affiliate CTAs`);
if (hashCtas) failed++;

const allAff = [...html.matchAll(/<a [^>]*data-affiliate-key[^>]*>/g)].map((m) => m[0]);
const stray = allAff.filter((a) => {
  const h = /href="([^"]*)"/.exec(a);
  return !h || !supplied.includes(h[1]);
});
console.log(`${stray.length === 0 ? "PASS" : "FAIL"}  all ${allAff.length} CTA hrefs are exact supplied URLs`);
if (stray.length) failed++;
process.exit(failed ? 1 : 0);
