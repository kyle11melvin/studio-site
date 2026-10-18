import type { Metadata } from "next";
import {
  Anton,
  Cormorant_Garamond,
  IBM_Plex_Mono,
  Instrument_Serif,
  Schibsted_Grotesk,
  Source_Serif_4,
} from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
});
// The Spark Gap wordmark only.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: "600",
});
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});
// The three below are used only inside the Edge Desk and ANVIL screen mockups.
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});
const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${schibsted.variable} ${cormorant.variable} ${instrument.variable} ${anton.variable} ${sourceSerif.variable} ${plexMono.variable} antialiased`}
    >
      <body className="font-sans text-lg leading-normal">{children}</body>
    </html>
  );
}
