import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { company } from "@/data/company";
import { images } from "@/data/images";
import { siteUrl } from "@/lib/utils";
import "./globals.css";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-cormorant", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${company.name} — ${company.tagline}`, template: `%s — ${company.name}` },
  description: "Premium residential and commercial real estate developments by Global Developers.",
  applicationName: company.name,
  openGraph: {
    type: "website",
    siteName: company.name,
    locale: "en_US",
    images: [{ url: images.og, width: 1200, height: 630, alt: company.name }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#14241e" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: company.name,
    slogan: company.tagline,
    description: company.description,
    url: siteUrl,
    ...(company.contact && {
      telephone: company.contact.phone,
      email: company.contact.email,
      address: company.contact.address,
    }),
  };
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <a href="#main" className="sr-only z-[60] bg-gold px-4 py-2 text-forest-deep focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
