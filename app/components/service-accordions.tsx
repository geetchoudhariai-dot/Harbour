"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { serviceImages, serviceSlug, serviceTagline, type DentalIconId } from "../lib/site";
import { treatmentHref } from "../lib/treatments";

/* Only plain-serializable fields — the full ServiceCategory type carries a
   LucideIcon component reference, which can't cross the server/client
   boundary as a prop. */
export type ServiceAccordionCategory = {
  title: string;
  dentalIcon: DentalIconId;
  summary: string;
  treatments: { name: string; note: string; slug: string }[];
};

/* Controlled accordion so a link to /services#slug (e.g. from the nav mega
   menu) opens that specific category instead of always defaulting to the
   first one. Falls back to the first category when there's no hash. */
export default function ServiceAccordions({ categories }: { categories: ServiceAccordionCategory[] }) {
  const [openSlug, setOpenSlug] = useState(() => serviceSlug(categories[0].title));

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && categories.some((cat) => serviceSlug(cat.title) === hash)) {
        setOpenSlug(hash);
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [categories]);

  return (
    <div className="service-accordions">
      {categories.map((cat) => {
        const slug = serviceSlug(cat.title);
        return (
          <details
            className="service-accordion fade-up"
            key={cat.title}
            id={slug}
            open={slug === openSlug}
            onToggle={(event) => {
              const isOpen = event.currentTarget.open;
              setOpenSlug((prev) => {
                if (isOpen) return slug;
                return prev === slug ? "" : prev;
              });
            }}
          >
            <summary>
              <span className="service-accordion-title">
                <span className="service-accordion-image" aria-hidden="true">
                  <Image src={serviceImages[cat.dentalIcon].src} alt="" fill sizes="72px" />
                </span>
                <span>
                  <strong>{cat.title}</strong>
                  <span>{serviceTagline(cat.summary)}</span>
                </span>
              </span>
              <span className="service-accordion-toggle" aria-hidden="true">
                <ChevronDown size={22} />
              </span>
            </summary>
            <div className="service-accordion-panel">
              <div className="treatment-grid">
                {cat.treatments.map((t) => (
                  <Link
                    className="treatment-card"
                    href={treatmentHref(t.slug)}
                    key={`${cat.title}-${t.slug}-${t.name}`}
                  >
                    <span>
                      <strong>{t.name}</strong>
                      <span>{t.note}</span>
                    </span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </details>
        );
      })}
    </div>
  );
}
