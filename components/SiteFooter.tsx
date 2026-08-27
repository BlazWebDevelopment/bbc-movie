import Image from "next/image";

const LINKS = [
  { label: "Terms of Use", href: "https://www.bbc.co.uk/usingthebbc/terms" },
  { label: "About the BBC", href: "https://www.bbc.co.uk/aboutthebbc" },
  {
    label: "Privacy Policy",
    href: "https://www.bbc.co.uk/usingthebbc/privacy",
  },
  { label: "Cookies", href: "https://www.bbc.co.uk/usingthebbc/cookies" },
  { label: "Accessibility Help", href: "https://www.bbc.co.uk/accessibility" },
  { label: "Parental Guidance", href: "https://www.bbc.co.uk/iplayer/guidance" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <a
          href="https://www.bbc.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="BBC Homepage"
          className="inline-block"
        >
          <Image
            src="/bbc-logo.png"
            alt="BBC"
            width={64}
            height={64}
            className="h-6 w-auto object-contain"
          />
        </a>

        <nav
          aria-label="Footer"
          className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-white/65"
        >
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-sunshine"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="mt-8 text-xs leading-relaxed text-white/45">
          Copyright &copy; {new Date().getFullYear()} BBC. The BBC is not
          responsible for the content of external sites.
        </p>
        <p className="mt-2 max-w-2xl text-xs leading-relaxed text-white/35">
          The Crypto Herd: The Animated Adventure is a fictional programme
          created for this design concept. This page is unofficial and is not
          affiliated with, authorised by or endorsed by the BBC. Nothing here is
          financial advice.
        </p>
      </div>
    </footer>
  );
}
