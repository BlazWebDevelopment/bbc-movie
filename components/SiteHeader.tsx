import Image from "next/image";

const BBC_NAV = [
  { label: "CBBC", href: "https://www.bbc.co.uk/cbbc" },
  { label: "iPlayer", href: "https://www.bbc.co.uk/iplayer" },
  { label: "Bitesize", href: "https://www.bbc.co.uk/bitesize" },
  { label: "Newsround", href: "https://www.bbc.co.uk/newsround" },
  { label: "Games", href: "https://www.bbc.co.uk/cbbc/games" },
];

const PROGRAMME_NAV = [
  { label: "Home", href: "#top" },
  { label: "The Story", href: "#story" },
  { label: "The Herd", href: "#herd" },
  { label: "Learn", href: "#learn" },
];

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* BBC global masthead */}
      <div className="bg-black">
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
            className="hidden items-center gap-6 text-[13px] font-bold text-white/75 md:flex"
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
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white/75 transition hover:bg-white/25 hover:text-white"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </a>
        </div>
      </div>

      {/* Programme sub-nav */}
      <div className="border-b-4 border-sunshine bg-sky-deep/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <a
            href="#top"
            className="flex shrink-0 items-center gap-2 font-display text-lg font-extrabold text-white sm:text-xl"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-sunshine text-sm font-extrabold text-ink">
              C
            </span>
            <span className="hidden sm:inline">The Crypto Herd</span>
            <span className="sm:hidden">Crypto Herd</span>
          </a>
          <nav
            aria-label="Programme"
            className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-wide text-white/85 sm:gap-5 sm:text-sm"
          >
            {PROGRAMME_NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-2 py-1 transition hover:bg-white/20 hover:text-white sm:px-3"
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
