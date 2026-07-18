import type { Metadata } from "next";
import { ArrowRight, Check, Phone } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "../../components/page-hero";
import { BtnLink } from "../../components/ui";
import { SITE } from "../../lib/site";
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
  if (!treatment) return { title: "Service not found" };

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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      {
        "@type": "ListItem",
        position: 3,
        name: treatment.category,
        item: `${SITE_URL}/services#${treatment.categorySlug}`
      },
      {
        "@type": "ListItem",
        position: 4,
        name: treatment.title,
        item: `${SITE_URL}/services/${treatment.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
