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
  { label: "Contact the BBC", href: "https://www.bbc.co.uk/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
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
          className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[13px] text-white/55"
        >
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="mt-6 text-xs leading-relaxed text-white/35">
          Copyright &copy; {new Date().getFullYear()} BBC. The BBC is not
          responsible for the content of external sites.
        </p>
        <p className="mt-2 text-xs text-white/25">
          Meggy: The Hidden Megalodon is a work of fiction created for this
          concept page. Not affiliated with or endorsed by the BBC.
        </p>
      </div>
    </footer>
  );
}
