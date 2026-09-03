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

      <main className="mx-auto flex w-full min-h-0 max-w-6xl flex-1 flex-col items-center justify-center gap-5 px-5 py-5 sm:px-8 sm:py-6 md:flex-row md:gap-12">
        {/* Poster */}
        <div className="relative min-h-0 w-full flex-1 md:h-full">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-leaf/10 blur-3xl"
          />
          <Image
            src="/poster.png"
            alt="The Great Start — Robinhood: official poster"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 40vw"
            className="animate-fade-up object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
          />
        </div>

        {/* Title, description, release */}
        <div className="flex w-full shrink-0 flex-col items-center text-center md:max-w-md md:flex-1 md:items-start md:text-left">
          <span
            className="animate-fade-up text-[9px] font-medium uppercase tracking-[0.34em] text-white/45 sm:text-[10px]"
            style={{ animationDelay: "60ms" }}
          >
            A Documentary Event
          </span>

          <h1
            className="animate-fade-up mt-2 text-2xl font-light leading-tight tracking-tight sm:text-3xl lg:text-4xl"
            style={{ animationDelay: "120ms" }}
          >
            The Great Start
            <span className="mt-0.5 block text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
              Robinhood
            </span>
          </h1>

          <p
            className="animate-fade-up mt-3 text-[10px] font-medium uppercase tracking-[0.16em] text-leaf sm:text-xs"
            style={{ animationDelay: "180ms" }}
          >
            Building access. Empowering people. Rewriting finance.
          </p>

          <p
            className="animate-fade-up mt-4 max-w-md text-[13px] leading-relaxed text-white/60 sm:text-sm"
            style={{ animationDelay: "240ms" }}
          >
            Vlad Tenev set out to put a stock exchange in everyone&rsquo;s
            pocket. This is the story of the app that made trading free, the
            millions of first-time investors who followed it in, and the
            questions that arrived right behind them.
          </p>

          <div
            className="animate-fade-up mt-5 flex items-center gap-3 border-t border-white/10 pt-4"
            style={{ animationDelay: "300ms" }}
          >
            <span className="animate-pulse-dot h-2 w-2 shrink-0 rounded-full bg-leaf" />
            <div className="text-left">
              <p className="text-base font-semibold leading-tight text-white sm:text-lg">
                Coming October
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">
                BBC Two &amp; BBC iPlayer
              </p>
            </div>
          </div>
        </div>
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
