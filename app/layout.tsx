import type { Metadata, Viewport } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";

const display = Baloo_2({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const sans = Nunito({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bbc.co.uk"),
  title: "The Crypto Herd: The Animated Adventure — Coming Soon | CBBC",
  description:
    "A woolly, wonderful animated adventure that explains cryptocurrency to curious kids. Coming soon to CBBC and BBC iPlayer.",
  applicationName: "BBC",
  keywords: [
    "The Crypto Herd",
    "The Animated Adventure",
    "CBBC",
    "BBC",
    "Animation",
    "Kids",
    "Crypto for kids",
    "Money explained",
  ],
  openGraph: {
    siteName: "BBC",
    title: "The Crypto Herd: The Animated Adventure — Coming Soon | CBBC",
    description:
      "A woolly, wonderful animated adventure that explains cryptocurrency to curious kids.",
    images: ["/poster.png"],
    type: "video.movie",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Crypto Herd: The Animated Adventure — Coming Soon | CBBC",
    description:
      "A woolly, wonderful animated adventure that explains crypto to curious kids.",
    images: ["/poster.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#5ec5f5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-cream font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
