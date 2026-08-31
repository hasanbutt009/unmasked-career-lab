import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { LenisProvider } from "@/components/lenis-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { JsonLd } from "@/components/json-ld";
import { COMPANY_DETAILS, IMAGES, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Career Coaching for Mental Health Professionals - Unmasked Career Lab",
    template: "%s | Unmasked Career Lab",
  },
  description:
    "Career coaching for mental-health professionals and neurodivergent leaders. Drop the mask, name the hidden curriculum, and advance without folding in.",
  openGraph: {
    title: "Unmasked Career Lab",
    description:
      "Career coaching for mental-health professionals and neurodivergent leaders.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: IMAGES.socialOg, width: 1200, height: 630, alt: SITE_NAME }],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="grain min-h-full bg-[var(--bone)] text-[var(--ink)]">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <LenisProvider />
        <SiteHeader />
        <main id="main-content" className="min-h-[55vh]">
          {children}
        </main>
        <SiteFooter />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: SITE_NAME,
            image: IMAGES.socialOg,
            address: {
              "@type": "PostalAddress",
              streetAddress: COMPANY_DETAILS.streetAddress,
              addressLocality: COMPANY_DETAILS.city,
              addressRegion: COMPANY_DETAILS.region,
              postalCode: COMPANY_DETAILS.postalCode,
              addressCountry: COMPANY_DETAILS.country,
            },
          }}
        />
      </body>
    </html>
  );
}
