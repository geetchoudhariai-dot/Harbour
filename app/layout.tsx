import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import Nav from "./components/nav";
import Footer from "./components/footer";
import SiteEffects from "./components/site-effects";
import StructuredData from "./components/structured-data";
import { DEFAULT_KEYWORDS, SITE_URL } from "./lib/seo";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken"
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Harbour View Dental | Dentist in Port Alberni, BC",
    template: "%s"
  },
  description:
    "Smile better, feel better. Comprehensive, compassionate dental care in Port Alberni, BC for new patients, families, CDCP, emergencies, and same-day crowns with Dr. Gary.",
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: "Harbour View Dental" }],
  creator: "Harbour View Dental",
  publisher: "Harbour View Dental",
  formatDetection: {
    telephone: true,
    email: false,
    address: false
  },
  alternates: {
    canonical: SITE_URL
  },
  icons: {
    icon: "/images/logo-mark.png",
    apple: "/images/logo-mark.png"
  },
  openGraph: {
    title: "Harbour View Dental | Dentist in Port Alberni, BC",
    description:
      "Smile better, feel better. A warm, modern dental home on the harbour in Port Alberni for new patients, families, CDCP, emergencies, and same-day crowns.",
    url: SITE_URL,
    siteName: "Harbour View Dental",
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "/images/scene1.png",
        alt: "Port Alberni harbour watercolor"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Harbour View Dental | Dentist in Port Alberni, BC",
    description:
      "Comprehensive dental care in Port Alberni, BC for new patients, CDCP, emergencies, and same-day crowns."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={hanken.variable}>
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
