import type { Metadata } from "next";
import { Check, ChevronDown } from "lucide-react";
import PageHero from "../components/page-hero";
import SectionHead from "../components/section-head";
import { BtnLink } from "../components/ui";
import JsonLd from "../components/json-ld";
import { careScenes, technology } from "../lib/site";
import { breadcrumbList, webPage } from "../lib/schema";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Dental Technology | Harbour View Dental, Port Alberni",
  description:
    "CEREC same-day crowns, CAD/CAM restorations, cone beam imaging, digital X-rays, intraoral scanning, and comfort-focused dental technology in Port Alberni.",
  path: "/technology",
  keywords: [
    "CEREC crowns Port Alberni",
    "digital dental X-rays Port Alberni",
    "intraoral scanner Port Alberni",
    "dental technology Port Alberni BC"
  ]
});

const process = [
  ["Prepare", "We remove decay or damaged material while preserving as much healthy tooth as possible."],
  ["Scan", "Digital images create an accurate 3D model, without trays or messy impression material."],
  ["Design and mill", "Your restoration is designed on screen and crafted from a solid ceramic block in the clinic."],
  ["Place and polish", "We check the fit, bond the restoration, and polish it for a comfortable, natural result."]
];

const candidates = [
  "A new crown, inlay, onlay, or bridge has been recommended",
  "A tooth is cracked or has been damaged by trauma",
  "An older restoration is failing",
  "You want to replace an old metal restoration",
  "You prefer to avoid a temporary restoration and second visit"
];

const groups = [
  {
    eyebrow: "See more clearly",
    title: "Imaging and diagnosis",
    lead: "Detailed digital images help us diagnose carefully, explain findings clearly, and plan treatment with confidence.",
    items: ["Cone Beam 3D Imaging", "Digital X-rays", "Panoramic X-rays"]
  },
  {
    eyebrow: "No messy impressions",
    title: "Digital records and scanning",
    lead: "Small, precise cameras and scanners make records easier to capture and easier for you to understand.",
    items: ["Intra-oral Camera", "Intra-oral Scanner"]
  },
  {
    eyebrow: "Comfort in the chair",
    title: "Gentler treatment tools",
    lead: "Efficient instruments can shorten treatment time and make routine and complex care more comfortable.",
    items: ["Cavitron", "Rotary Endodontics"]
  }
];

const detailCopy: Record<string, string[]> = {
  "Cone Beam 3D Imaging": [
    "One quick scan creates a three-dimensional view of your teeth, jaws, bone, and surrounding facial structures.",
    "The scan supports diagnosis, implant and treatment planning, patient education, and follow-up while using minimal radiation. It is also comfortable for patients with a sensitive gag reflex."
  ],
  "Digital X-rays": [
    "Digital X-rays produce detailed images immediately and allow us to magnify areas on screen for closer evaluation.",
    "They require much less radiation than traditional film and make it easier to show you what we see before discussing treatment."
  ],
  "Panoramic X-rays": [
    "The machine moves around your head to capture a broad, 360-degree view in one image.",
    "This view includes the teeth, sinuses, jaws, and supporting bone, giving Dr. Gary valuable context for diagnosis and treatment planning."
  ],
  "Intra-oral Camera": [
    "A pen-sized camera records clear images of the teeth, gums, mouth, and tongue from angles that are difficult to see in a mirror.",
    "It is comfortable for patients of every age, supports diagnosis and treatment planning, and uses a fresh disposable cover for every patient."
  ],
  "Intra-oral Scanner": [
    "A small handheld wand captures accurate three-dimensional video impressions without trays of impression material.",
    "Digital scans reduce gagging, let you view the model with us, and can help restorations reach the lab and return for placement more quickly."
  ],
  Cavitron: [
    "The Cavitron uses ultrasonic energy during periodontal and deep cleaning to remove hardened calculus from teeth and gums.",
    "It works quickly and gently, reducing the time spent scaling and polishing compared with hand instrumentation alone."
  ],
  "Rotary Endodontics": [
    "A specialized rotary handpiece is used during root canal therapy to clean and shape the inside of a tooth efficiently.",
    "The technology helps us complete treatment gently and can make the appointment quicker and more comfortable."
  ]
};

const technologySchema = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Technology", path: "/technology" }
    ]),
    {
      ...webPage({
        path: "/technology",
        name: "Dental Technology at Harbour View Dental",
        description:
          "CEREC same-day crowns, digital X-rays, cone beam imaging, and intraoral scanning at Harbour View Dental in Port Alberni, BC."
      }),
      mentions: technology.map((item) => ({
        "@type": "Thing",
        name: item.title,
        description: item.copy
      }))
    }
  ]
};

export default function TechnologyPage() {
  const byTitle = new Map(technology.map((item) => [item.title, item]));

  return (
    <>
      <JsonLd data={technologySchema} />
      <PageHero
        eyebrow="Our technology"
        title="Modern tools, gentler visits"
        lead="State-of-the-art technology helps us provide accurate, efficient, and comfortable care while keeping every recommendation easy to understand."
        image={{
          src: careScenes.digital.src,
          alt: careScenes.digital.alt,
          priority: true
        }}
      />

      <section className="section tech-cerec" aria-labelledby="same-day-title">
        <div className="container">
          <div className="tech-feature-head">
            <SectionHead
              eyebrow="CAD/CAM and CEREC"
              title="A custom restoration in one visit"
              lead="Digital design and in-office milling allow us to create strong, metal-free ceramic restorations without weeks of waiting for an outside lab."
            />
            <div className="tech-feature-result fade-up">
              <strong>About 2 hours</strong>
              <span>for many crown appointments, with no temporary and no second visit</span>
            </div>
          </div>

          <div className="tech-process" aria-label="Same-day restoration process">
            {process.map(([title, copy], index) => (
              <article className="tech-process-step fade-up" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3 className="tech-process-title">{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>

          <div className="tech-candidate-grid">
            <div>
              <span className="eyebrow">Could it be right for you?</span>
              <h2 className="display-m" id="same-day-title">Same-day restorations may help when...</h2>
            </div>
            <ul className="tech-check-list">
              {candidates.map((item) => (
                <li key={item}><Check size={18} aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {groups.map((group) => (
        <section className="section tech-group" key={group.title} aria-labelledby={`tech-${group.title.replaceAll(" ", "-").toLowerCase()}`}>
          <div className="container tech-group-grid">
            <div className="tech-group-head">
              <span className="eyebrow">{group.eyebrow}</span>
              <h2 className="display-m" id={`tech-${group.title.replaceAll(" ", "-").toLowerCase()}`}>{group.title}</h2>
              <p>{group.lead}</p>
            </div>
            <div className="tech-detail-list">
              {group.items.map((title, index) => {
                const tech = byTitle.get(title);
                const Icon = tech?.icon;
                return (
                  <details className="tech-detail fade-up" key={title} open={index === 0}>
                    <summary>
                      <span className="tech-detail-title">
                        {Icon ? <Icon size={22} aria-hidden="true" /> : null}
                        <strong>{title}</strong>
                      </span>
                      <ChevronDown size={20} aria-hidden="true" />
                    </summary>
                    <div className="tech-detail-copy">
                      {detailCopy[title].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                  </details>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="section tech-close" aria-label="Book a technology-supported dental visit">
        <div className="container tech-close-inner">
          <div>
            <span className="eyebrow">Questions are welcome</span>
            <h2 className="display-m">See the difference in person</h2>
          </div>
          <p>We will explain what we are using, why it matters, and what you can expect before treatment begins.</p>
          <BtnLink href="/contact#booking">Book a visit</BtnLink>
        </div>
      </section>
    </>
  );
}
