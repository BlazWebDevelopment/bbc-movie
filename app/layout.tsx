import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bbc.co.uk"),
  title: "Darko: The Unlikely Hippo | BBC Earth",
  description:
    "Some heroes come in small packages. Darko: The Unlikely Hippo — a BBC wildlife documentary. Coming 23 October 2026.",
  applicationName: "BBC",
  keywords: [
    "Darko",
    "The Unlikely Hippo",
    "Pygmy hippo",
    "BBC Earth",
    "Wildlife documentary",
  ],
  openGraph: {
    siteName: "BBC",
    title: "Darko: The Unlikely Hippo | BBC Earth",
    description: "Coming 23 October 2026 on BBC Two and BBC iPlayer.",
    images: ["/poster.png"],
    type: "video.movie",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darko: The Unlikely Hippo | BBC Earth",
    description: "Coming 23 October 2026.",
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
    <html lang="en-GB" className={sans.variable}>
      <body className="bg-black font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
