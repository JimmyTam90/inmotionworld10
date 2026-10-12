import fs from "node:fs";
import path from "node:path";
import { publicPath } from "./site-config";

// Server-only. The logo is shown only if public/logo.png really exists, so the
// header never references a missing asset. Public URL: /inmotion-world/logo.png
export function getLogo() {
  let exists = false;
  try {
    exists = fs.existsSync(path.join(process.cwd(), "public", "logo.png"));
  } catch {
    exists = false;
  }
  return { available: exists, src: publicPath("/logo.png") };
}
