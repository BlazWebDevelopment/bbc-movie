import Image from "next/image";

const BBC_NAV = [
  { label: "iPlayer", href: "https://www.bbc.co.uk/iplayer" },
  {
    label: "Documentaries",
    href: "https://www.bbc.co.uk/iplayer/categories/documentaries/featured",
  },
  { label: "Earth", href: "https://www.bbcearth.com" },
  { label: "Sounds", href: "https://www.bbc.co.uk/sounds" },
  { label: "News", href: "https://www.bbc.co.uk/news" },
];

const PROGRAMME_NAV = [
  { label: "Home", href: "#top" },
  { label: "The Film", href: "#about" },
  { label: "Details", href: "#details" },
  { label: "Notify Me", href: "#notify" },
];

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* BBC global masthead */}
      <div className="border-b border-white/10 bg-black">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-5 px-5 sm:px-8">
          <a
            href="https://www.bbc.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="BBC Homepage"
            className="shrink-0"
          >
            <Image
              src="/bbc-logo.png"
              alt="BBC"
              width={64}
              height={64}
              priority
              className="h-7 w-auto object-contain"
            />
          </a>

          <nav
            aria-label="BBC"
            className="hidden items-center gap-6 text-[13px] font-medium text-white/70 md:flex"
          >
            {BBC_NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="https://www.bbc.co.uk/search"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Search the BBC"
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/20 hover:text-white"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </a>
        </div>
      </div>

      {/* Programme sub-nav */}
      <div className="border-b border-gold/20 bg-ember/80 backdrop-blur-md">
        <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            href="#top"
            className="font-display text-sm font-medium uppercase tracking-[0.22em] text-white"
          >
            Binance
          </a>
          <nav
            aria-label="Programme"
            className="flex items-center gap-5 text-[11px] uppercase tracking-[0.16em] text-white/55 sm:gap-7 sm:text-xs"
          >
            {PROGRAMME_NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
