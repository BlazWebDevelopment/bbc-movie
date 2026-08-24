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
  title: "Meggy: The Hidden Megalodon — Coming Soon | BBC",
  description:
    "One ocean. One mystery. No proof. Meggy: The Hidden Megalodon is a new BBC documentary investigating the deepest question in the sea. Sign up to be notified.",
  applicationName: "BBC",
  keywords: [
    "Meggy",
    "The Hidden Megalodon",
    "Megalodon",
    "BBC",
    "BBC Documentary",
    "Natural History",
    "Coming Soon",
  ],
  openGraph: {
    siteName: "BBC",
    title: "Meggy: The Hidden Megalodon — Coming Soon | BBC",
    description:
      "A new BBC documentary. One ocean. One mystery. No proof.",
    images: ["/poster.png"],
    type: "video.movie",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meggy: The Hidden Megalodon — Coming Soon | BBC",
    description: "One ocean. One mystery. No proof.",
    images: ["/poster.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050d12",
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
      <body className="bg-abyss font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
