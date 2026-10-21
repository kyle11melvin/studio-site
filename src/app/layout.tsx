import type { Metadata } from "next";
import { Cormorant_Garamond, Instrument_Serif, Schibsted_Grotesk } from "next/font/google";
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
      className={`${schibsted.variable} ${cormorant.variable} ${instrument.variable} antialiased`}
    >
      <body className="font-sans text-lg leading-normal">{children}</body>
    </html>
  );
}
