import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/lib/site";

const display = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const description =
  "Victorious Aluminium manufactures and designs aluminium windows, enclosures, balustrades, doors, office partitioning and showers at affordable prices.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "aluminium",
    "glass",
    "aluminium windows",
    "aluminium doors",
    "sliding doors",
    "hinge doors",
    "pivot doors",
    "stack folding doors",
    "balustrades",
    "enclosures",
    "office partitioning",
    "showers",
    "Victorious Aluminium",
  ],
  icons: {
    icon: "/images/brand/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} - ${site.tagline}`,
    description,
    url: site.url,
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - ${site.tagline}`,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#21231d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-dvh">
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
