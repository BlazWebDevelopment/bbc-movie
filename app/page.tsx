import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-[100svh] flex-col overflow-hidden bg-black">
      {/* BBC masthead */}
      <header className="shrink-0 border-b border-white/10">
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-5 sm:h-14 sm:px-8">
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
              className="h-6 w-auto object-contain sm:h-7"
            />
          </a>
          <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/50 sm:text-xs">
            BBC Two &middot; Documentary
          </span>
        </div>
      </header>

      {/* Poster */}
      <main className="flex min-h-0 flex-1 flex-col items-center justify-center gap-5 px-5 py-6 sm:px-8 sm:py-8">
        <h1 className="sr-only">
          The Great Start &mdash; Robinhood. A documentary event. Coming soon to
          BBC Two.
        </h1>

        <div className="relative min-h-0 w-full flex-1">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-leaf/10 blur-3xl"
          />
          <Image
            src="/poster.png"
            alt="The Great Start — Robinhood: official poster"
            fill
            priority
            sizes="(max-width: 640px) 92vw, 60vh"
            className="animate-fade-up object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
          />
        </div>

        <p className="flex shrink-0 items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.28em] text-white/60 sm:text-xs">
          <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-leaf" />
          Coming soon to BBC Two
        </p>
      </main>

      {/* Footer */}
      <footer className="shrink-0 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-3 text-center sm:px-8">
          <p className="text-[10px] leading-relaxed text-white/30">
            &copy; {new Date().getFullYear()} BBC &middot; Concept page for a
            fictional programme. Unofficial, and not affiliated with or
            endorsed by the BBC or Robinhood.
          </p>
        </div>
      </footer>
    </div>
  );
}
