import Image from "next/image";
import NotifyForm from "@/components/NotifyForm";

export default function Home() {
  return (
    <main className="relative h-[100svh] w-full overflow-hidden bg-black text-white">
      {/* Ambient background: blurred poster acts as a cinematic backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/poster.png"
          alt=""
          fill
          priority
          aria-hidden
          className="scale-125 object-cover opacity-25 blur-2xl animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.85)_70%)]" />
      </div>

      {/* Film grain overlay */}
      <div className="grain pointer-events-none absolute inset-0" />

      {/* Top bar: BBC logo + status */}
      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5 sm:px-10 sm:py-6">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-sm bg-black ring-1 ring-white/10 sm:h-10 sm:w-10">
            <Image
              src="/bbc-logo.png"
              alt="BBC"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/60">
              BBC Original Film
            </span>
            <span className="text-xs font-medium tracking-wide text-white/80">
              Presented by BBC Studios
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.24em] text-white/60 sm:text-xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          Coming Soon
        </div>
      </header>

      {/* Content */}
      <section className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center gap-8 px-6 pb-16 pt-24 sm:px-10 md:flex-row md:gap-14 md:pt-0 md:pb-0">
        {/* Poster */}
        <div className="relative flex w-full max-w-[280px] shrink-0 items-center justify-center sm:max-w-[340px] md:max-w-[420px]">
          <div
            aria-hidden
            className="absolute -inset-8 rounded-3xl bg-white/5 blur-3xl"
          />
          <div className="relative aspect-[635/855] w-full overflow-hidden rounded-xl shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)] ring-1 ring-white/10 animate-fade-up">
            <Image
              src="/poster.png"
              alt="Kairo: The Lone Wolf — official poster"
              fill
              priority
              sizes="(max-width: 768px) 340px, 420px"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
          </div>
        </div>

        {/* Copy + form */}
        <div className="flex w-full max-w-xl flex-col items-center text-center md:items-start md:text-left">
          <p className="animate-fade-up text-[10px] font-medium uppercase tracking-[0.4em] text-white/50 sm:text-xs">
            One Wolf. One Path. No Pack.
          </p>

          <h1
            className="mt-4 font-display text-4xl font-semibold leading-[0.95] tracking-tight animate-fade-up sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            <span className="text-shimmer animate-shimmer">KAIRO</span>
            <span className="mt-2 block text-base font-light tracking-[0.32em] text-white/70 sm:text-lg md:text-xl">
              The Lone Wolf
            </span>
          </h1>

          <p
            className="mt-5 max-w-md text-sm leading-relaxed text-white/60 animate-fade-up sm:text-base"
            style={{ animationDelay: "160ms" }}
          >
            He walks alone. He becomes legend. A new original film from the BBC —
            arriving on screens soon. Be the first to know when Kairo drops.
          </p>

          <div
            className="mt-8 w-full animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <NotifyForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center gap-1 px-6 py-4 text-center text-[10px] uppercase tracking-[0.24em] text-white/40 sm:flex-row sm:justify-between sm:px-10 sm:text-xs">
        <span>© {new Date().getFullYear()} BBC. All rights reserved.</span>
        <span className="hidden sm:inline">A BBC Original</span>
      </footer>
    </main>
  );
}
