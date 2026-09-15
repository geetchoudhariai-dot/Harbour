import type { Metadata } from "next";
import { GEO } from "./site";

export const SITE_URL = "https://harbourviewdental.com";
export const CONTENT_REVIEWED = "2026-09-12";

export const DEFAULT_KEYWORDS = [
  "dentist Port Alberni",
  "Harbour View Dental",
  "Harbourview Dental",
  "dental clinic Port Alberni BC",
  "family dentist Alberni Valley",
  "Dr Gaurav dentist Port Alberni",
  "Dr Gary dentist Port Alberni",
  "new patients dentist Port Alberni",
  "CDCP dentist Port Alberni",
  "emergency dentist Port Alberni",
  "same day crowns Port Alberni",
  "dentist Gertrude Street Port Alberni"
];

export const DEFAULT_OG_IMAGE = {
  url: "/images/Team.png",
  width: 1200,
  height: 630,
  alt: "Harbour View Dental team in Port Alberni"
};

const DEFAULT_TITLE = "Harbour View Dental | Dentist in Port Alberni, BC";
const DEFAULT_DESCRIPTION =
  "Harbour View Dental is an independent family dentist in Port Alberni, BC. Dr. Gaurav (Gary) and the team welcome new patients, CDCP, families, emergencies, and same-day CEREC crowns.";

export const geoMeta = {
  "geo.region": "CA-BC",
  "geo.placename": "Port Alberni",
  "geo.position": `${GEO.latitude};${GEO.longitude}`,
  ICBM: `${GEO.latitude}, ${GEO.longitude}`
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
    alternates: {
      canonical: url,
      languages: { "en-CA": url },
      types: {
        "text/plain": [
          { url: `${SITE_URL}/llms.txt`, title: "LLM facts" },
          { url: `${SITE_URL}/llms-full.txt`, title: "LLM full facts" }
        ]
      }
    },
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
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    other: geoMeta
  };
}

export { DEFAULT_TITLE, DEFAULT_DESCRIPTION };
