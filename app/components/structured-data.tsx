import { SITE, hours } from "../lib/site";
import { SITE_URL } from "../lib/seo";

/* Build schema.org OpeningHoursSpecification from the same `hours` data the
   footer/contact page render, so there's one source of truth for hours. */
function to24Hour(time12: string): string {
  const match = time12.trim().match(/^(\d{1,2}):(\d{2})\s*(am|pm)$/i);
  if (!match) return time12;
  const [, h, m, period] = match;
  let hour = parseInt(h, 10);
  if (period.toLowerCase() === "pm" && hour !== 12) hour += 12;
  if (period.toLowerCase() === "am" && hour === 12) hour = 0;
  return `${String(hour).padStart(2, "0")}:${m}`;
}

const openingHoursSpecification = hours
  .filter((entry) => !/closed/i.test(entry.time))
  .map((entry) => {
    const [opens, closes] = entry.time.split("-").map((part) => to24Hour(part.trim()));
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${entry.day}`,
      opens,
      closes
    };
  });

const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${SITE_URL}/#dentist`,
  name: SITE.name,
  url: SITE_URL,
  telephone: SITE.phoneHref.replace(/^tel:/, ""),
  email: SITE.email,
  slogan: "Smile better, feel better.",
  image: `${SITE_URL}/images/Team.png`,
  logo: `${SITE_URL}/images/logo-mark.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.street,
    addressLocality: "Port Alberni",
    addressRegion: "BC",
    postalCode: "V9Y 6K1",
    addressCountry: "CA"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.2577946,
    longitude: -124.8110339
  },
  hasMap: SITE.mapUrl,
  areaServed: ["Port Alberni", "Alberni Valley", "Pacific Rim"],
  medicalSpecialty: "Dentistry",
  priceRange: "$$",
  openingHoursSpecification,
  sameAs: [SITE.facebook, SITE.mapUrl, SITE.googleReviews]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE.name,
  url: SITE_URL,
  description:
    "Comprehensive dental care in Port Alberni, BC for new patients, families, CDCP, emergencies, and same-day crowns.",
  publisher: { "@id": `${SITE_URL}/#dentist` },
  inLanguage: "en-CA"
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
