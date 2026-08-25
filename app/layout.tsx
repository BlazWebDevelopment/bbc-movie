import type { Metadata, Viewport } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const display = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bbc.co.uk"),
  title: "Binance: Rise of the Exchange — Coming Soon | BBC",
  description:
    "One market. One revolution. One empire. Binance: Rise of the Exchange is a new BBC documentary on the platform that reshaped crypto. Sign up to be notified.",
  applicationName: "BBC",
  keywords: [
    "Binance",
    "Rise of the Exchange",
    "Crypto",
    "Cryptocurrency",
    "BBC",
    "BBC Documentary",
    "Business",
    "Coming Soon",
  ],
  openGraph: {
    siteName: "BBC",
    title: "Binance: Rise of the Exchange — Coming Soon | BBC",
    description:
      "A new BBC documentary. One market. One revolution. One empire.",
    images: ["/poster.png"],
    type: "video.movie",
  },
  twitter: {
    card: "summary_large_image",
    title: "Binance: Rise of the Exchange — Coming Soon | BBC",
    description: "One market. One revolution. One empire.",
    images: ["/poster.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#08070a",
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
      <body className="bg-vault font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
