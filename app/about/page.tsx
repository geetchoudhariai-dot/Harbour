import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "../components/page-hero";
import ContentTriptych from "../components/content-triptych";
import SectionHead from "../components/section-head";
import TeamGrid from "../components/team-grid";
import { BtnLink } from "../components/ui";
import JsonLd from "../components/json-ld";
import { careScenes } from "../lib/site";
import { breadcrumbList, DOCTOR_ID, webPage } from "../lib/schema";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us | Harbour View Dental, Port Alberni",
  description:
    "Meet owner and general dentist Dr. Gaurav (Gary) and the Harbour View Dental team, an independent dental practice in Port Alberni, BC.",
  path: "/about",
  keywords: [
    "about Harbour View Dental",
    "Dr Gaurav Port Alberni",
    "Dr Gary Port Alberni",
    "dentist Port Alberni",
    "dental team Port Alberni BC"
  ]
});

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" }
    ]),
    {
      ...webPage({
        path: "/about",
        name: "About Harbour View Dental",
        description:
          "Meet owner and general dentist Dr. Gaurav (Gary) and the Harbour View Dental team in Port Alberni, BC.",
        type: "AboutPage"
      }),
      mainEntity: { "@id": DOCTOR_ID }
    }
  ]
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      <PageHero
        className="page-hero--team"
        title="About Harbour View Dental"
        lead="Harbour View Dental is a local, independent practice on the harbour in Port Alberni, built around comfort, trust, and getting to know the people we care for."
        image={{
          src: "/images/Team.png",
          alt: "The Harbour View Dental team in Port Alberni",
          priority: true
        }}
      />

      <section className="section doctor-section" id="doctor" aria-label="Dr. Gaurav (Gary)">
        <div className="container">
          <article className="glass doctor-note" aria-labelledby="doctor-note-title">
            <div className="doctor-note-inner">
              <div className="doctor-note-top">
                <span className="eyebrow">From Dr. Gary</span>
                <BtnLink href="/contact#booking" className="doctor-note-cta">
                  Book a visit
                </BtnLink>
              </div>
              <h2 className="doctor-letter-opening" id="doctor-note-title">
                A personal note from Dr. Gary
              </h2>
              <div className="doctor-letter-copy">
                <p>
                  Growing up, I was actually a little afraid of going to the dentist. That experience
                  stayed with me and became one of the reasons I chose dentistry.
                </p>
                <p>
                  I wanted to create the kind of dental experience I would have appreciated as a kid:
                  calm, comfortable, and welcoming.
                </p>
                <p>
                  I&apos;ve been practicing dentistry for the past seven years, and my favourite part
                  of what I do is getting to know the people I care for. I enjoy building long-term
                  relationships with patients and helping them feel at ease in the dental chair.
                  I&apos;m also a big believer in technology and love finding ways to use it to make
                  dentistry simpler, more predictable, and more comfortable.
                </p>
                <p>
                  Outside of dentistry, life is mostly about family. I love spending time with my wife
                  and our two kids, whether we&apos;re at the park, hiking, exploring Vancouver
                  Island, or simply going out for a good meal. Parksville has become one of our
                  favourite family spots. When I get the chance, I also love playing volleyball.
                </p>
                <p>
                  Moving from Toronto to Vancouver Island was a big change, but it has been a
                  wonderful one. I really appreciate the slower pace, the outdoors, and especially the
                  friendly, close-knit community. It feels like a great place to raise our family, and
                  I feel fortunate to be able to care for families in the community we now call home.
                </p>
              </div>
              <footer className="doctor-note-sign">
                <span className="sign-hand" aria-hidden="true">
                  Dr. Gary
                </span>
                <div className="sign-person">
                  <span className="sign-avatar">
                    <Image
                      src="/images/dr-gaurav.jpg"
                      alt="Dr. Gaurav, also known as Dr. Gary, dentist and owner of Harbour View Dental"
                      fill
                      sizes="56px"
                      style={{ objectPosition: "center 12%" }}
                    />
                  </span>
                  <p className="sign-name">
                    <strong>Dr. Gary</strong>
                    <span>Owner &amp; General Dentist, Harbour View Dental</span>
                  </p>
                </div>
              </footer>
            </div>
          </article>
        </div>
      </section>

      <ContentTriptych
        className="trip--plain"
        eyebrow="How we care"
        title="Care that puts you at ease"
        lead="At every step, our team prioritizes your well-being: listening first, explaining clearly, and going at a pace that feels right for you."
        items={[
          {
            image: { src: "/images/withpatient2.png", alt: "Dr. Gaurav discussing care with a patient" },
            label: "Listening first",
            copy: "Every visit starts with a conversation. We listen, explain everything, and go at a pace that feels right for you."
          },
          {
            image: { src: "/images/with Patient.png", alt: "Dr. Gaurav welcoming a young patient and her parent" },
            label: "Comfort options",
            copy: "Oral conscious sedation helps you stay relaxed. It is ideal for anxiety, multiple procedures, or longer appointments."
          },
          {
            image: { src: careScenes.digital.src, alt: careScenes.digital.alt },
            label: "Personalized plans",
            copy: "Treatment is built around your needs, timeline, and budget, so it is never one-size-fits-all."
          }
        ]}
      />

      <section className="section" id="team" aria-label="Meet the team">
        <div className="container">
          <SectionHead
            eyebrow="The people"
            title="The people behind your smile"
            lead="Our friendly local team of nine includes your dentist, hygienists, assistants, coordinators, and receptionist, all working together to make every visit feel easy."
            center
          />
          <TeamGrid dentistDisplayName="Dr. Gaurav (Gary)" />
        </div>
      </section>

    </>
  );
}
