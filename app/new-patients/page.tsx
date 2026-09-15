import type { Metadata } from "next";
import { Check, ClipboardCheck, FolderOpen } from "lucide-react";
import PageHero from "../components/page-hero";
import FaqList from "../components/faq-list";
import ProcessSteps from "../components/process-steps";
import SectionHead from "../components/section-head";
import JsonLd from "../components/json-ld";
import { BtnLink } from "../components/ui";
import { bring, faqs, firstVisit, visitFlow } from "../lib/site";
import { breadcrumbList, faqEntities, webPage } from "../lib/schema";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "New Patients | Harbour View Dental, Port Alberni",
  description:
    "Welcoming new patients of all ages in Port Alberni. What to expect on your first visit, what to bring, and how insurance, financing, and the CDCP work.",
  path: "/new-patients",
  keywords: [
    "new patients dentist Port Alberni",
    "CDCP dentist Port Alberni",
    "first dental visit Port Alberni",
    "accepting new patients Port Alberni BC"
  ]
});

const newPatientFaqs = faqs
  .filter((f) => /insurance|CDCP|first visit|new patients/i.test(f.question + f.answer))
  .slice(0, 5);

const newPatientsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "New Patients", path: "/new-patients" }
    ]),
    webPage({
      path: "/new-patients",
      name: "New Patients at Harbour View Dental",
      description:
        "Harbour View Dental welcomes new patients of all ages in Port Alberni, including CDCP patients. Learn what the first visit includes and what to bring."
    }),
    {
      "@type": "FAQPage",
      mainEntity: faqEntities(newPatientFaqs)
    }
  ]
};

export default function NewPatientsPage() {
  return (
    <>
      <JsonLd data={newPatientsSchema} />
      <PageHero
        eyebrow="New patients"
        title="Welcome to the practice"
        lead="We are always happy to welcome new patients of all ages. Your first visit is simple, friendly, and all about getting to know you."
        image={{
          src: "/images/scene1.png",
          alt: "Watercolour painting of Port Alberni harbour with the Beaufort Range beyond",
          priority: true
        }}
        actions={<BtnLink href="/contact#booking">Book a visit</BtnLink>}
      />

      <section className="section" aria-label="Your first visit">
        <div className="container">
          <SectionHead
            eyebrow="Step by step"
            title="Your first visit, made clear"
            lead="No pressure and no surprises. You leave knowing what we found and what comes next."
            center
          />
          <ProcessSteps steps={visitFlow} />
        </div>
      </section>

      <section className="section visit-prep" aria-label="What to expect and bring">
        <div className="container">
          <SectionHead
            title="Everything you need for your first visit"
            lead="A clear look at what happens during your appointment and the few things to bring with you."
          />
          <div className="visit-prep-grid">
            <article className="visit-prep-card fade-up">
              <div className="visit-prep-icon" aria-hidden="true">
                <ClipboardCheck size={24} />
              </div>
              <h3 className="display-s">What your first visit includes</h3>
              <p>
                We will also answer your questions and provide a detailed financial consultation so
                treatments are timed effectively and affordably.
              </p>
              <ul className="visit-prep-list">
                {firstVisit.map((item) => (
                  <li key={item}>
                    <Check size={17} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="visit-prep-card fade-up">
              <div className="visit-prep-icon" aria-hidden="true">
                <FolderOpen size={24} />
              </div>
              <h3 className="display-s">What to bring</h3>
              <p>A few things that make your first visit smoother.</p>
              <ul className="visit-prep-list">
                {bring.map((item) => (
                  <li key={item}>
                    <Check size={17} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section
        className="section insurance-faq-section"
        id="insurance-faq-section"
        aria-label="Insurance and common questions"
      >
        <div className="container insurance-faq-grid">
          <div className="insurance-faq-copy fade-up">
            <SectionHead
              eyebrow="Good to know"
              title="Insurance, CDCP, and common questions"
              lead="We accept most major dental insurances, welcome CDCP patients, and offer flexible financing."
            />
          </div>
          <div className="faq-card insurance-faq-card fade-up">
            <FaqList items={newPatientFaqs} name="np-faq" />
          </div>
        </div>
      </section>

    </>
  );
}
