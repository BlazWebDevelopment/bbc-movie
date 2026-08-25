import Image from "next/image";
import NotifyForm from "@/components/NotifyForm";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const DETAILS = [
  { label: "Genre", value: "Documentary / Business & Finance" },
  { label: "Runtime", value: "102 minutes" },
  { label: "Certificate", value: "12" },
  { label: "Premiere", value: "To be announced" },
  { label: "Filmed in", value: "Shanghai, Tokyo, Valletta, Dubai" },
  { label: "Available on", value: "BBC iPlayer & BBC Two" },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top" className="relative">
        {/* ---------------------------------------------------------- HERO */}
        <section className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-[7.5rem] sm:pb-24">
          {/* Ambient backdrop drawn from the poster itself */}
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="/poster.png"
              alt=""
              fill
              priority
              aria-hidden
              className="animate-slow-zoom scale-125 object-cover opacity-30 blur-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-vault/85 via-ember/70 to-vault" />
            <div className="grid-lines absolute inset-0 opacity-40" />
            <div className="rays animate-drift absolute inset-0" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,transparent_0%,rgba(8,7,10,0.92)_75%)]" />
          </div>
          <div className="grain pointer-events-none absolute inset-0" />

          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-5 sm:px-8 md:flex-row md:gap-16">
            {/* Poster */}
            <div className="relative w-full max-w-[300px] shrink-0 sm:max-w-[360px] md:max-w-[420px]">
              <div
                aria-hidden
                className="absolute -inset-10 rounded-full bg-gold/10 blur-3xl"
              />
              <div className="animate-fade-up relative aspect-[678/1019] w-full overflow-hidden rounded-md shadow-[0_50px_140px_-30px_rgba(0,0,0,0.95)] ring-1 ring-gold/20">
                <Image
                  src="/poster.png"
                  alt="Binance: Rise of the Exchange — official poster"
                  fill
                  priority
                  sizes="(max-width: 768px) 360px, 420px"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-white/10" />
              </div>
            </div>

            {/* Copy + primary call to action */}
            <div className="flex w-full max-w-xl flex-col items-center text-center md:items-start md:text-left">
              <div className="animate-fade-up flex items-center gap-3">
                <span className="rounded-sm bg-gold px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-vault">
                  BBC Two
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/50">
                  New Documentary
                </span>
              </div>

              <p
                className="animate-fade-up mt-6 text-[10px] font-medium uppercase tracking-[0.32em] text-bullion/80 sm:text-xs"
                style={{ animationDelay: "60ms" }}
              >
                One Market. One Revolution. One Empire.
              </p>

              <h1
                className="animate-fade-up mt-4 font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl"
                style={{ animationDelay: "120ms" }}
              >
                <span className="text-shimmer animate-shimmer">Binance</span>
                <span className="mt-3 block font-sans text-sm font-light normal-case tracking-[0.3em] text-white/70 sm:text-base">
                  Rise of the Exchange
                </span>
              </h1>

              <p
                className="animate-fade-up mt-6 max-w-md text-sm leading-relaxed text-white/60 sm:text-base"
                style={{ animationDelay: "180ms" }}
              >
                A documentary about the exchange that changed crypto. Based on a
                true story — how a company founded in 2017 became the largest
                marketplace in the industry, and what it cost.
              </p>

              <div
                className="animate-fade-up mt-8 w-full"
                style={{ animationDelay: "240ms" }}
              >
                <NotifyForm />
              </div>
            </div>
          </div>

          {/* Scroll cue */}
          <a
            href="#about"
            aria-label="Scroll to find out more"
            className="absolute inset-x-0 bottom-6 z-10 mx-auto flex w-fit flex-col items-center gap-2 text-white/40 transition hover:text-gold"
          >
            <span className="text-[10px] uppercase tracking-[0.28em]">
              Discover
            </span>
            <svg
              className="animate-bob-down"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </section>

        {/* --------------------------------------------------------- ABOUT */}
        <section
          id="about"
          className="relative border-t border-gold/15 bg-ember py-20 sm:py-28"
        >
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-bullion/80">
              About the film
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium uppercase leading-tight tracking-tight sm:text-4xl">
              Built in a bull run, tested in court
            </h2>

            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-white/65 sm:text-base">
              <p>
                In July 2017, a developer named Changpeng Zhao launched a
                cryptocurrency exchange funded by a token sale. Within months it
                was handling more trading volume than any competitor on earth.
                It had no headquarters, no obvious jurisdiction, and very few
                rules it agreed to play by.
              </p>
              <p>
                This film traces that ascent through the people who lived it —
                early engineers, traders who made and lost fortunes overnight,
                and the regulators who spent years trying to work out who,
                exactly, they were supposed to be talking to.
              </p>
              <p>
                It ends where the story turned. In November 2023 the company
                pleaded guilty to breaching United States anti-money-laundering
                law and agreed to pay $4.3 billion. Zhao stepped down as chief
                executive, pleaded guilty in his own right, and later served a
                four-month sentence. The exchange is still the largest in the
                world.
              </p>
            </div>

            <blockquote className="mt-10 border-l-2 border-gold/60 pl-6">
              <p className="font-display text-xl font-light uppercase leading-snug tracking-wide text-white/85 sm:text-2xl">
                &ldquo;Move fast enough and the rules never catch you. That was
                the theory, anyway.&rdquo;
              </p>
              <footer className="mt-3 text-xs uppercase tracking-[0.2em] text-white/40">
                From the film&rsquo;s narration
              </footer>
            </blockquote>
          </div>
        </section>

        {/* ------------------------------------------------------- DETAILS */}
        <section
          id="details"
          className="relative border-t border-gold/15 bg-vault py-20 sm:py-28"
        >
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-bullion/80">
              Programme details
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium uppercase leading-tight tracking-tight sm:text-4xl">
              The facts we do have
            </h2>

            <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-md bg-gold/15 sm:grid-cols-2 lg:grid-cols-3">
              {DETAILS.map((item) => (
                <div key={item.label} className="bg-ember p-6">
                  <dt className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/40">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-sm font-medium text-white/90 sm:text-[15px]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* -------------------------------------------------------- NOTIFY */}
        <section
          id="notify"
          className="relative overflow-hidden border-t border-gold/15 py-20 sm:py-28"
        >
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="/poster.png"
              alt=""
              fill
              aria-hidden
              sizes="100vw"
              className="object-cover opacity-25 blur-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-vault via-ember/80 to-vault" />
          </div>

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-5 text-center sm:px-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-bullion/80">
              Coming soon to BBC Two
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium uppercase leading-tight tracking-tight sm:text-4xl">
              Be the first to know
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
              Leave your email and we&rsquo;ll tell you the moment the premiere
              date is confirmed.
            </p>
            <div className="mt-8 flex w-full justify-center">
              <NotifyForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
