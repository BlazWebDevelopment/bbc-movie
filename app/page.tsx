import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-[100svh] flex-col overflow-hidden bg-black">
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
            BBC Earth &middot; Wildlife
          </span>
        </div>
      </header>

      <main className="flex min-h-0 flex-1 flex-col items-center justify-center gap-4 px-5 py-5 sm:gap-5 sm:px-8 sm:py-6">
        <h1 className="sr-only">
          Darko: The Unlikely Hippo. BBC wildlife documentary. Coming 23
          October 2026.
        </h1>

        <div className="relative min-h-0 w-full max-w-sm flex-1 sm:max-w-md">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-clay/10 blur-3xl"
          />
          <Image
            src="/poster.png"
            alt="Darko: The Unlikely Hippo — official documentary poster"
            fill
            priority
            sizes="(max-width: 640px) 88vw, 448px"
            className="animate-fade-up object-contain drop-shadow-[0_24px_70px_rgba(0,0,0,0.85)]"
          />
        </div>

        <p className="flex shrink-0 flex-col items-center gap-1 text-center">
          <span className="flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.28em] text-white/55 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-clay" />
            Coming 23 October 2026
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
            BBC Two &amp; BBC iPlayer
          </span>
        </p>
      </main>

      <footer className="shrink-0 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-3 text-center sm:px-8">
          <p className="text-[10px] leading-relaxed text-white/30">
            &copy; {new Date().getFullYear()} BBC &middot; Concept page for a
            fictional programme. Unofficial, and not affiliated with or
            endorsed by the BBC.
          </p>
        </div>
      </footer>
    </div>
  );
}
