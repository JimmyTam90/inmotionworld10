import { SITE, NAV_LINKS, publicPath } from "@/lib/site-config";
import { getLogo } from "@/lib/logo";

export default function Header() {
  const logo = getLogo();
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a
          href={publicPath("/")}
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          aria-label={`${SITE.brandName} home`}
        >
          {logo.available ? (
            <img
              src={logo.src}
              alt={`${SITE.brandName} logo`}
              width={160}
              height={40}
              className="h-9 w-auto"
            />
          ) : (
            <span className="text-lg font-extrabold tracking-tight text-white">
              Prime<span className="text-brand">GearLab</span>
            </span>
          )}
        </a>
        <nav aria-label="Primary" className="hidden gap-6 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/80 hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
