import type { Metadata, Viewport } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const display = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kairo.bbc.co.uk"),
  title: "Kairo: The Lone Wolf — Coming Soon | BBC",
  description:
    "One wolf. One path. No pack. Kairo: The Lone Wolf — a new original film coming soon to BBC. Sign up to be notified.",
  keywords: [
    "Kairo",
    "The Lone Wolf",
    "BBC",
    "Movie",
    "Coming Soon",
    "Film",
  ],
  openGraph: {
    title: "Kairo: The Lone Wolf — Coming Soon | BBC",
    description:
      "He walks alone. He becomes legend. A new original film coming soon to BBC.",
    images: ["/poster.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kairo: The Lone Wolf — Coming Soon | BBC",
    description: "He walks alone. He becomes legend.",
    images: ["/poster.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
