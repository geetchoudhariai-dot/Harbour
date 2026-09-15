import type { Metadata } from "next";
import { Caveat, Hanken_Grotesk } from "next/font/google";
import Nav from "./components/nav";
import Footer from "./components/footer";
import SiteEffects from "./components/site-effects";
import StructuredData from "./components/structured-data";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  SITE_URL,
  geoMeta
} from "./lib/seo";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken"
});

/* Handwritten accent — used only for signatures and painting captions. */
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
  variable: "--font-caveat"
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s"
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: "Harbour View Dental",
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: "Harbour View Dental" }, { name: "Dr. Gaurav", url: `${SITE_URL}/about#doctor` }],
  creator: "Harbour View Dental",
  publisher: "Harbour View Dental",
  category: "health",
  formatDetection: {
    telephone: true,
    email: true,
    address: true
  },
  icons: {
    icon: "/images/logo-mark.png",
    apple: "/images/logo-mark.png"
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: "Harbour View Dental",
    type: "website",
    locale: "en_CA",
    images: [DEFAULT_OG_IMAGE]
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url]
  },
  other: geoMeta
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${hanken.variable} ${caveat.variable}`}>
      <body>
        <StructuredData />
        <SiteEffects />
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Nav />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
