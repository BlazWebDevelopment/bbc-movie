import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bbc.co.uk"),
  title: "The Great Start — Robinhood | BBC",
  description:
    "Building access. Empowering people. Rewriting finance. The Great Start — Robinhood, a documentary event. Coming October to BBC Two and BBC iPlayer.",
  applicationName: "BBC",
  keywords: [
    "The Great Start",
    "Robinhood",
    "Vlad Tenev",
    "Documentary",
    "BBC",
    "Coming Soon",
  ],
  openGraph: {
    siteName: "BBC",
    title: "The Great Start — Robinhood | BBC",
    description:
      "A documentary event. Coming October to BBC Two and BBC iPlayer.",
    images: ["/poster.png"],
    type: "video.movie",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Great Start — Robinhood | BBC",
    description:
      "A documentary event. Coming October to BBC Two and BBC iPlayer.",
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
