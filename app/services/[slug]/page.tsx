import type { Metadata } from "next";
import { ArrowRight, Check, Phone } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "../../components/page-hero";
import { BtnLink } from "../../components/ui";
import JsonLd from "../../components/json-ld";
import { SITE } from "../../lib/site";
import { breadcrumbList, dentistRef } from "../../lib/schema";
import { pageMetadata, SITE_URL } from "../../lib/seo";
import {
  getAllTreatmentSlugs,
  getTreatment,
  getTreatmentsForCategory,
  treatmentHref
} from "../../lib/treatments";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllTreatmentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) {
    return {
      title: "Service not found | Harbour View Dental",
      robots: { index: false, follow: true }
    };
  }

  return pageMetadata({
    title: `${treatment.title} | Harbour View Dental, Port Alberni`,
    description: treatment.metaDescription,
    path: `/services/${slug}`,
    keywords: [
      `${treatment.title} Port Alberni`,
      `${treatment.category} Port Alberni`,
      "Harbour View Dental",
      "dentist Port Alberni BC"
    ]
  });
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) notFound();

  const related = getTreatmentsForCategory(treatment.categorySlug).filter(
    (t) => t.slug !== treatment.slug
  );

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbList([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: treatment.category, path: `/services#${treatment.categorySlug}` },
        { name: treatment.title, path: `/services/${treatment.slug}` }
      ]),
      {
        "@type": "Service",
        "@id": `${SITE_URL}/services/${treatment.slug}#service`,
        name: treatment.title,
        serviceType: treatment.title,
        category: treatment.category,
        description: treatment.intro,
        url: `${SITE_URL}/services/${treatment.slug}`,
        mainEntityOfPage: `${SITE_URL}/services/${treatment.slug}`,
        provider: dentistRef(),
        areaServed: {
          "@type": "City",
          name: "Port Alberni"
        }
      }
    ]
  };

  return (
    <>
      <JsonLd data={pageSchema} />
      <PageHero
        eyebrow={treatment.category}
        title={treatment.title}
        lead={treatment.intro}
        actions={
          <>
            <BtnLink href="/contact#booking">Book a visit</BtnLink>
            <Link className="btn-secondary" href={`/services#${treatment.categorySlug}`}>
              All {treatment.category.toLowerCase()} services
            </Link>
          </>
        }
      />

      <section className="section">
        <div className="container">
          <div className="treatment-page-grid">
            <article className="fade-up on-paper">
              {treatment.sections.map((section) => (
                <div
                  className="treatment-section"
                  key={section.heading ?? section.paragraphs?.[0]?.slice(0, 40) ?? section.bullets?.[0]}
                >
                  {section.heading ? <h2 className="display-m">{section.heading}</h2> : null}
                  {section.paragraphs?.map((p) => (
                    <p key={p.slice(0, 48)}>{p}</p>
                  ))}
                  {section.bullets ? (
                    <ul className="check-list">
                      {section.bullets.map((item) => (
                        <li key={item}>
                          <Check size={20} aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </article>

            <aside className="fade-up">
              <div className="aside-card">
                <h2 className="display-s">Visit us</h2>
                <address>
                  {SITE.street}
                  <br />
                  {SITE.city}
                </address>
                <a className="text-phone" href={SITE.phoneHref}>
                  <Phone size={16} aria-hidden="true" /> {SITE.phone}
                </a>
                <BtnLink href="/contact#booking">Book a visit</BtnLink>
                {related.length > 0 ? (
                  <>
                    <h3 className="display-s" style={{ marginTop: 14 }}>
                      Related services
                    </h3>
                    <ul className="related">
                      {related.map((item) => (
                        <li key={item.slug}>
                          <Link href={treatmentHref(item.slug)}>
                            {item.title}
                            <ArrowRight size={16} aria-hidden="true" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </div>
            </aside>
          </div>
        </div>
      </section>

    </>
  );
}
