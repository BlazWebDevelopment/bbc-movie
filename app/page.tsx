import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const HERD = [
  {
    name: "Woolly",
    initial: "W",
    colour: "bg-sunshine",
    role: "The one with the shades",
    line: "Leads the flock and asks the big question: what makes money worth anything at all?",
  },
  {
    name: "Blocky",
    initial: "B",
    colour: "bg-sky-deep",
    role: "The record keeper",
    line: "Writes down every single swap in a notebook the whole meadow is allowed to check.",
  },
  {
    name: "Pip",
    initial: "P",
    colour: "bg-berry",
    role: "The careful one",
    line: "Keeps her secret key hidden, because anyone who finds it can open her gate.",
  },
  {
    name: "Nimbus",
    initial: "N",
    colour: "bg-grape",
    role: "The daydreamer",
    line: "Learns the hard way that a price which shoots up can tumble right back down.",
  },
  {
    name: "Bramble",
    initial: "Br",
    colour: "bg-grass",
    role: "The sceptic",
    line: "Spots the wolf promising free coins to anybody who follows him into the woods.",
  },
];

const LESSONS = [
  {
    title: "What money really is",
    body: "Coins and notes only work because everybody agrees they do. The herd finds out what happens when they stop agreeing.",
  },
  {
    title: "How a blockchain remembers",
    body: "Imagine a notebook nobody can rub out, kept by everyone at once. That is the whole trick, explained with sheep.",
  },
  {
    title: "Keep your key secret",
    body: "A wallet is only yours while the key is. Pip shows why you never, ever hand it over — not even to a friendly face.",
  },
  {
    title: "Prices go up and down",
    body: "Nimbus learns that nobody can promise what tomorrow is worth, and that guessing is not the same as knowing.",
  },
  {
    title: "Spotting a trick",
    body: "If someone promises free money for nothing, something is wrong. Bramble teaches the herd to walk away.",
  },
  {
    title: "Asking a grown-up",
    body: "The best move when money gets confusing is to stop and ask someone you trust. Nobody in the meadow does it alone.",
  },
];

const DETAILS = [
  { label: "Genre", value: "Animation / Family / Learning" },
  { label: "Age guidance", value: "Suitable for 7+" },
  { label: "Runtime", value: "78 minutes" },
  { label: "Premiere", value: "To be announced" },
  { label: "Made in", value: "BBC Children's & Education" },
  { label: "Available on", value: "CBBC & BBC iPlayer" },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        {/* ---------------------------------------------------------- HERO */}
        <section className="sky-wash relative overflow-hidden px-5 pb-24 pt-36 sm:px-8 sm:pt-40">
          {/* Puffy clouds */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="cloud animate-drift-slow left-[6%] top-[150px] h-10 w-32 opacity-80" />
            <div className="cloud animate-drift-slow left-[72%] top-[190px] h-12 w-40 opacity-70" />
            <div className="cloud animate-drift-slow left-[44%] top-[340px] h-8 w-24 opacity-40" />
            <div className="confetti-dots absolute inset-0 opacity-60" />
          </div>

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="animate-pop-in inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-sky-deep shadow-card">
              <span className="h-2 w-2 rounded-full bg-berry" />
              CBBC &middot; Coming Soon
            </span>

            <h1
              className="animate-pop-in mt-6 font-display text-5xl font-extrabold leading-[0.95] text-white drop-shadow-[0_4px_0_rgba(23,57,92,0.35)] sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "80ms" }}
            >
              The Crypto Herd
              <span className="mt-2 block font-sans text-base font-extrabold uppercase tracking-[0.28em] text-sunshine drop-shadow-[0_2px_0_rgba(23,57,92,0.35)] sm:text-lg">
                The Animated Adventure
              </span>
            </h1>

            <p
              className="animate-pop-in mt-5 max-w-xl text-base font-semibold leading-relaxed text-ink/75 sm:text-lg"
              style={{ animationDelay: "150ms" }}
            >
              A woolly, wonderful adventure that explains cryptocurrency to
              curious kids — one very confused flock at a time.
            </p>

            {/* Poster, front and centre */}
            <div
              className="animate-pop-in relative mt-10 w-full max-w-[340px] sm:max-w-[400px]"
              style={{ animationDelay: "220ms" }}
            >
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2.5rem] bg-white/40 blur-2xl"
              />
              <div className="animate-float relative aspect-[681/1020] w-full overflow-hidden rounded-[1.75rem] border-[6px] border-white bg-white shadow-[0_30px_60px_-20px_rgba(23,57,92,0.55)]">
                <Image
                  src="/poster.png"
                  alt="The Crypto Herd: The Animated Adventure — official poster"
                  fill
                  priority
                  sizes="(max-width: 640px) 340px, 400px"
                  className="object-cover"
                />
              </div>
            </div>

            <a
              href="#story"
              className="animate-pop-in mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-pop transition hover:-translate-y-0.5 hover:bg-sky-deep"
              style={{ animationDelay: "300ms" }}
            >
              Meet the flock
              <svg
                className="animate-bobble"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </section>

        {/* --------------------------------------------------------- STORY */}
        <section id="story" className="relative bg-cream px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-buttercup px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-ink">
              The Story
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              One meadow. One very odd new kind of money.
            </h2>

            <div className="mt-8 space-y-5 text-left text-base leading-relaxed text-ink/75 sm:text-lg">
              <p>
                Everything in Green Hollow used to be paid for in carrots. Then
                one morning the carrots ran out, and a flock of extremely fluffy
                sheep had to work out what to use instead.
              </p>
              <p>
                What they invent is a shared notebook. Every swap gets written
                down, every sheep keeps a copy, and nobody can sneakily scribble
                out a page. It works brilliantly — right up until somebody loses
                their key, somebody else panics about prices, and a smooth-talking
                wolf turns up promising coins for free.
              </p>
              <p>
                It is a story about money, trust and asking good questions, told
                with more sheep than strictly necessary.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- HERD */}
        <section
          id="herd"
          className="relative overflow-hidden bg-sky-light px-5 py-20 sm:px-8 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-sky-deep">
                The Herd
              </span>
              <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
                Meet the flock
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base font-semibold text-ink/70">
                Five sheep, five very different ideas about what to do with a
                shiny new coin.
              </p>
            </div>

            <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {HERD.map((sheep) => (
                <li
                  key={sheep.name}
                  className="rounded-3xl border-4 border-white bg-cream p-6 shadow-card transition hover:-translate-y-1"
                >
                  <span
                    className={`grid h-14 w-14 place-items-center rounded-full ${sheep.colour} font-display text-xl font-extrabold text-white shadow-card`}
                  >
                    {sheep.initial}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-extrabold text-ink">
                    {sheep.name}
                  </h3>
                  <p className="text-sm font-extrabold uppercase tracking-wide text-sky-deep">
                    {sheep.role}
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
                    {sheep.line}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --------------------------------------------------------- LEARN */}
        <section id="learn" className="bg-cream px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="inline-block rounded-full bg-grass/25 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-meadow">
                What you&rsquo;ll learn
              </span>
              <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
                Six big ideas, sheep-sized
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base font-semibold text-ink/70">
                The film explains how crypto works and where it goes wrong. It
                is not advice, and nobody in the meadow is telling you to buy
                anything.
              </p>
            </div>

            <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {LESSONS.map((lesson, i) => (
                <li
                  key={lesson.title}
                  className="rounded-3xl border-4 border-sky-light bg-white p-6 shadow-card"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-sunshine font-display text-lg font-extrabold text-ink">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-extrabold text-ink">
                    {lesson.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/70">
                    {lesson.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ------------------------------------------------------- DETAILS */}
        <section
          id="details"
          className="relative overflow-hidden bg-grass/15 px-5 py-20 sm:px-8 sm:py-24"
        >
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-meadow">
                Programme details
              </span>
              <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
                The bits grown-ups ask about
              </h2>
            </div>

            <dl className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {DETAILS.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border-4 border-white bg-cream p-6 shadow-card"
                >
                  <dt className="text-xs font-extrabold uppercase tracking-widest text-meadow">
                    {item.label}
                  </dt>
                  <dd className="mt-2 font-display text-lg font-extrabold text-ink">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
