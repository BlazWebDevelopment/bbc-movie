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
  title: "The Max Extractor | BBC",
  description:
    "Every pump has a price. The Max Extractor — a new limited series on meme markets, moonshots, and the crash that follows. Coming October to BBC Two and BBC iPlayer.",
  applicationName: "BBC",
  keywords: [
    "The Max Extractor",
    "Documentary",
    "Trading",
    "Cryptocurrency",
    "BBC",
    "Coming Soon",
  ],
  openGraph: {
    siteName: "BBC",
    title: "The Max Extractor | BBC",
    description:
      "Every pump has a price. A new limited series. Coming October to BBC Two and BBC iPlayer.",
    images: ["/a9wtdGkKpz.jpg"],
    type: "video.movie",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Max Extractor | BBC",
    description:
      "Every pump has a price. A new limited series. Coming October to BBC Two and BBC iPlayer.",
    images: ["/a9wtdGkKpz.jpg"],
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
