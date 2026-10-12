import { publicUrl } from "@/lib/site-config";

export default function sitemap() {
  const lastModified = new Date();
  return ["/", "/privacy", "/terms", "/affiliate-disclosure", "/contact"].map((p) => ({
    url: publicUrl(p),
    lastModified,
  }));
}
