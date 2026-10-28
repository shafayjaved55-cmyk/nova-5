import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Sora, Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["400", "500", "600", "700", "800"] });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", weight: ["400", "500", "600", "700", "800"] });
const instrument = Instrument_Serif({ subsets: ["latin"], variable: "--font-instrument", weight: "400", style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: {
    default: "Nova Solution — Digital Product Agency | Web, Mobile, Design & Growth",
    template: "%s — Nova Solution",
  },
  description:
    "Nova Solution is a full-service digital agency building high-converting websites, mobile apps, brands and growth systems for ambitious companies. 320+ projects shipped across 12 countries.",
  keywords: ["digital agency", "web development", "mobile app development", "UI UX design", "digital marketing", "ecommerce", "Nova Solution"],
  openGraph: {
    title: "Nova Solution — Digital Product Agency",
    description: "We design and build digital products that move business forward.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable} ${instrument.variable}`}>
      <body className="bg-bone font-body text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
