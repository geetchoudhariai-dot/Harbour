import { SITE_URL } from "./seo";
import { GEO, SITE, faqs, hours, team, testimonials } from "./site";
import { treatments } from "./treatments";

export const DENTIST_ID = `${SITE_URL}/#dentist`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const WEBPAGE_ID = `${SITE_URL}/#webpage`;
export const DOCTOR_ID = `${SITE_URL}/about#doctor`;
export const LOGO_ID = `${SITE_URL}/#logo`;

export const PRACTICE_DESCRIPTION =
  "Independent family dental practice in Port Alberni, British Columbia. Harbour View Dental provides preventive, children's, restorative, periodontal, endodontic, oral surgery, and sedation dentistry, and is led by owner and general dentist Dr. Gaurav, also known as Dr. Gary.";

export const DOCTOR_DESCRIPTION =
  "Dr. Gaurav is the owner and general dentist at Harbour View Dental in Port Alberni, BC. Patients also know him as Dr. Gary. He has been practicing dentistry for seven years and focuses on calm, family dental care, including preventive, restorative, and sedation treatment.";

const phone = SITE.phoneHref.replace(/^tel:/, "");

export const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: SITE.street,
  addressLocality: "Port Alberni",
  addressRegion: "BC",
  postalCode: "V9Y 6K1",
  addressCountry: "CA"
};

export function dentistRef() {
  return { "@id": DENTIST_ID };
}

export function to24Hour(time12: string): string {
  const match = time12.trim().match(/^(\d{1,2}):(\d{2})\s*(am|pm)$/i);
  if (!match) return time12;
  const [, h, m, period] = match;
  let hour = parseInt(h, 10);
  if (period.toLowerCase() === "pm" && hour !== 12) hour += 12;
  if (period.toLowerCase() === "am" && hour === 12) hour = 0;
  return `${String(hour).padStart(2, "0")}:${m}`;
}

export const openingHoursSpecification = hours
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

export function breadcrumbList(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`
    }))
  };
}

export function faqEntities(items = faqs) {
  return items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }));
}

export function faqPage(items = faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: faqEntities(items)
  };
}

export const serviceCatalog = {
  "@type": "OfferCatalog",
  name: "Dental services at Harbour View Dental",
  itemListElement: treatments.map((treatment) => ({
    "@type": "Offer",
    url: `${SITE_URL}/services/${treatment.slug}`,
    itemOffered: {
      "@type": "Service",
      "@id": `${SITE_URL}/services/${treatment.slug}#service`,
      name: treatment.title,
      serviceType: treatment.title,
      category: treatment.category,
      description: treatment.intro,
      url: `${SITE_URL}/services/${treatment.slug}`,
      provider: dentistRef(),
      areaServed: {
        "@type": "City",
        name: "Port Alberni"
      }
    }
  }))
};

export const doctorSchema = {
  "@type": ["Person", "Physician"],
  "@id": DOCTOR_ID,
  name: "Dr. Gaurav",
  givenName: "Gaurav",
  alternateName: ["Dr. Gary", "Dr. Gaurav (Gary)", "Gary"],
  honorificPrefix: "Dr.",
  jobTitle: "Owner and General Dentist",
  description: DOCTOR_DESCRIPTION,
  image: `${SITE_URL}/images/dr-gaurav.jpg`,
  url: `${SITE_URL}/about#doctor`,
  telephone: phone,
  email: SITE.email,
  worksFor: dentistRef(),
  affiliation: dentistRef(),
  address: postalAddress,
  hasOccupation: {
    "@type": "Occupation",
    name: "General Dentist"
  },
  medicalSpecialty: "https://schema.org/Dentistry",
  knowsLanguage: "en",
  knowsAbout: [
    "Family dentistry",
    "Preventive dentistry",
    "Children's dentistry",
    "CEREC same-day crowns",
    "Dental implants",
    "Sedation dentistry",
    "Root canal therapy"
  ]
};

export const dentistSchema = {
  "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
  "@id": DENTIST_ID,
  name: SITE.name,
  legalName: SITE.name,
  alternateName: ["Harbourview Dental", "Harbour View Dental Port Alberni"],
  url: SITE_URL,
  description: PRACTICE_DESCRIPTION,
  telephone: phone,
  email: SITE.email,
  slogan: "Smile better, feel better.",
  image: [`${SITE_URL}/images/Team.png`, `${SITE_URL}/images/dr-gaurav.jpg`],
  logo: {
    "@type": "ImageObject",
    "@id": LOGO_ID,
    url: `${SITE_URL}/images/logo-mark.png`,
    contentUrl: `${SITE_URL}/images/logo-mark.png`
  },
  address: postalAddress,
  geo: {
    "@type": "GeoCoordinates",
    latitude: GEO.latitude,
    longitude: GEO.longitude
  },
  hasMap: SITE.mapUrl,
  areaServed: [
    { "@type": "City", name: "Port Alberni" },
    { "@type": "AdministrativeArea", name: "Alberni Valley" }
  ],
  medicalSpecialty: "https://schema.org/Dentistry",
  currenciesAccepted: "CAD",
  paymentAccepted: "Cash, debit, credit card, dental insurance, Canadian Dental Care Plan (CDCP)",
  priceRange: "$$",
  knowsLanguage: "en",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "appointments",
      telephone: phone,
      email: SITE.email,
      availableLanguage: "English",
      areaServed: "CA-BC"
    },
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: phone,
      email: SITE.email,
      availableLanguage: "English"
    }
  ],
  openingHours: ["Mo-Th 08:00-17:00", "Fr 08:00-15:00"],
  openingHoursSpecification,
  employee: team.map((member) =>
    member.lead
      ? { "@id": DOCTOR_ID }
      : {
          "@type": "Person",
          name: member.name,
          jobTitle: member.role,
          worksFor: dentistRef(),
          ...(member.image ? { image: `${SITE_URL}${member.image}` } : {})
        }
  ),
  founder: { "@id": DOCTOR_ID },
  numberOfEmployees: team.length,
  hasOfferCatalog: serviceCatalog,
  knowsAbout: treatments.map((treatment) => treatment.title),
  sameAs: [...new Set([SITE.facebook, SITE.mapUrl, SITE.googleReviews])],
  review: testimonials.map((item) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: item.name
    },
    reviewBody: item.quote,
    publisher: {
      "@type": "Organization",
      name: "Google"
    },
    itemReviewed: dentistRef()
  }))
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE.name,
  alternateName: ["Harbourview Dental", "Harbour View Dental Port Alberni"],
  url: SITE_URL,
  description:
    "Official website for Harbour View Dental, an independent dental practice in Port Alberni, British Columbia.",
  publisher: dentistRef(),
  about: dentistRef(),
  inLanguage: "en-CA"
};

export function webPage({
  path,
  name,
  description,
  id,
  type = "WebPage"
}: {
  path: string;
  name: string;
  description?: string;
  id?: string;
  type?: string;
}) {
  const url = `${SITE_URL}${path}`;
  return {
    "@type": type,
    "@id": id ?? `${url}#webpage`,
    url,
    name,
    ...(description ? { description } : {}),
    isPartOf: { "@id": WEBSITE_ID },
    about: dentistRef(),
    inLanguage: "en-CA"
  };
}

export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [dentistSchema, doctorSchema, websiteSchema]
};
