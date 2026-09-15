import type { Metadata } from "next";
import PageHero from "../components/page-hero";
import SectionHead from "../components/section-head";
import ServiceAccordions from "../components/service-accordions";
import JsonLd from "../components/json-ld";
import { serviceCategories } from "../lib/site";
import { breadcrumbList, webPage } from "../lib/schema";
import { pageMetadata, SITE_URL } from "../lib/seo";
import { treatments } from "../lib/treatments";

export const metadata: Metadata = pageMetadata({
  title: "Dental Services | Harbour View Dental, Port Alberni",
  description:
    "Preventive, children's, restorative, periodontic, endodontic, oral surgery, and sedation dentistry in Port Alberni, BC, explained in plain language.",
  path: "/services",
  keywords: [
    "dental services Port Alberni",
    "family dentistry Port Alberni",
    "dental implants Port Alberni",
    "sedation dentistry Port Alberni"
  ]
});

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" }
    ]),
    {
      ...webPage({
        path: "/services",
        name: "Dental Services in Port Alberni",
        description:
          "Preventive, children's, restorative, periodontic, endodontic, oral surgery, and sedation dentistry at Harbour View Dental in Port Alberni, BC.",
        type: "CollectionPage"
      }),
      mainEntity: {
        "@type": "ItemList",
        name: "Dental treatments",
        numberOfItems: treatments.length,
        itemListElement: treatments.map((treatment, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: treatment.title,
          url: `${SITE_URL}/services/${treatment.slug}`
        }))
      }
    }
  ]
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesSchema} />
      <PageHero
        eyebrow="Our services"
        title="Comprehensive dental care in Port Alberni"
        lead="We provide a full range of dental services, including family dentistry, restorative care, periodontics, endodontics, and sedation, all under one roof."
        image={{
          src: "/images/scene2.png",
          alt: "Watercolour view of the Alberni Inlet and surrounding mountains",
          priority: true
        }}
      />

      <section className="section service-accordion-section" aria-label="Service details">
        <div className="container">
          <SectionHead
            eyebrow="In detail"
            title="Every treatment, explained"
            lead="Choose a category to see what's included, in plain language."
          />
          <ServiceAccordions
            categories={serviceCategories.map(({ title, dentalIcon, summary, treatments }) => ({
              title,
              dentalIcon,
              summary,
              treatments
            }))}
          />
        </div>
      </section>

    </>
  );
}
