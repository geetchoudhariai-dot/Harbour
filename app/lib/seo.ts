import type { Metadata } from "next";

export const SITE_URL = "https://harbourviewdental.com";

export const DEFAULT_KEYWORDS = [
  "dentist Port Alberni",
  "Harbour View Dental",
  "dental clinic Port Alberni BC",
  "family dentist Alberni Valley",
  "new patients dentist Port Alberni",
  "CDCP dentist Port Alberni",
  "emergency dentist Port Alberni",
  "same day crowns Port Alberni",
  "Dr Gary dentist"
];

const DEFAULT_OG_IMAGE = {
  url: "/images/Team.png",
  width: 1200,
  height: 630,
  alt: "Harbour View Dental team in Port Alberni"
};

export function pageMetadata({
  title,
  description,
  path = "",
  keywords = DEFAULT_KEYWORDS
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Harbour View Dental",
      locale: "en_CA",
      type: "website",
      images: [DEFAULT_OG_IMAGE]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE.url]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true }
    }
  };
}
