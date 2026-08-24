import Image from "next/image";
import NotifyForm from "@/components/NotifyForm";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const DETAILS = [
  { label: "Genre", value: "Documentary / Natural History" },
  { label: "Runtime", value: "94 minutes" },
  { label: "Certificate", value: "PG" },
  { label: "Premiere", value: "To be announced" },
  { label: "Filmed in", value: "Pacific Ocean, Azores, Mariana Trench" },
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
            <div className="absolute inset-0 bg-gradient-to-b from-abyss/85 via-deep/70 to-abyss" />
            <div className="caustics animate-drift absolute inset-0" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,transparent_0%,rgba(5,13,18,0.9)_75%)]" />
          </div>
          <div className="grain pointer-events-none absolute inset-0" />

          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-5 sm:px-8 md:flex-row md:gap-16">
            {/* Poster */}
            <div className="relative w-full max-w-[300px] shrink-0 sm:max-w-[360px] md:max-w-[420px]">
              <div
                aria-hidden
                className="absolute -inset-10 rounded-full bg-foam/10 blur-3xl"
              />
              <div className="animate-fade-up relative aspect-[790/1047] w-full overflow-hidden rounded-md shadow-[0_50px_140px_-30px_rgba(0,0,0,0.95)] ring-1 ring-white/15">
                <Image
                  src="/poster.png"
                  alt="Meggy: The Hidden Megalodon — official poster"
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
                <span className="rounded-sm bg-foam px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-abyss">
                  BBC Two
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/50">
                  New Documentary
                </span>
              </div>

              <p
                className="animate-fade-up mt-6 text-[10px] font-medium uppercase tracking-[0.38em] text-foam/70 sm:text-xs"
                style={{ animationDelay: "60ms" }}
              >
                One Ocean. One Mystery. No Proof.
              </p>

              <h1
                className="animate-fade-up mt-4 font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl"
                style={{ animationDelay: "120ms" }}
              >
                <span className="text-shimmer animate-shimmer">Meggy</span>
                <span className="mt-3 block font-sans text-sm font-light normal-case tracking-[0.3em] text-white/70 sm:text-base">
                  The Hidden Megalodon
                </span>
              </h1>

              <p
                className="animate-fade-up mt-6 max-w-md text-sm leading-relaxed text-white/60 sm:text-base"
                style={{ animationDelay: "180ms" }}
              >
                A documentary about Meggy, the possible megalodon. Based on a
                true story — and on sixty years of sightings nobody has ever
                been able to prove.
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
            className="absolute inset-x-0 bottom-6 z-10 mx-auto flex w-fit flex-col items-center gap-2 text-white/40 transition hover:text-foam"
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
          className="relative border-t border-white/10 bg-deep py-20 sm:py-28"
        >
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-foam/70">
              About the film
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium uppercase leading-tight tracking-tight sm:text-4xl">
              Something down there keeps moving
            </h2>

            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-white/65 sm:text-base">
              <p>
                For six decades, crews working the deep water off the Mariana
                Trench have come back with the same story. A shadow under the
                hull. A sonar return far too large to name. A shape that holds
                position for a minute, then simply is not there any more.
              </p>
              <p>
                They call it Meggy. Officially, it does not exist — the
                megalodon has been extinct for more than three million years,
                and every scientist on record will tell you so. Unofficially,
                the sightings have never stopped.
              </p>
              <p>
                This film follows a marine biology team through eleven months at
                sea as they chase the one thing nobody has managed to bring back
                from the dark: proof.
              </p>
            </div>

            <blockquote className="mt-10 border-l-2 border-foam/50 pl-6">
              <p className="font-display text-xl font-light uppercase leading-snug tracking-wide text-white/85 sm:text-2xl">
                &ldquo;We are not saying it&rsquo;s out there. We&rsquo;re
                saying we can&rsquo;t yet say it isn&rsquo;t.&rdquo;
              </p>
              <footer className="mt-3 text-xs uppercase tracking-[0.2em] text-white/40">
                Dr. Elena Vasquez — Lead Marine Biologist
              </footer>
            </blockquote>
          </div>
        </section>

        {/* ------------------------------------------------------- DETAILS */}
        <section
          id="details"
          className="relative border-t border-white/10 bg-abyss py-20 sm:py-28"
        >
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-foam/70">
              Programme details
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium uppercase leading-tight tracking-tight sm:text-4xl">
              The facts we do have
            </h2>

            <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-md bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {DETAILS.map((item) => (
                <div key={item.label} className="bg-deep p-6">
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
          className="relative overflow-hidden border-t border-white/10 py-20 sm:py-28"
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
            <div className="absolute inset-0 bg-gradient-to-b from-abyss via-deep/80 to-abyss" />
          </div>

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-5 text-center sm:px-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-foam/70">
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
