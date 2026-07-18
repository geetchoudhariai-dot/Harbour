import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/page-hero";
import ContentTriptych from "../components/content-triptych";
import SectionHead from "../components/section-head";
import TeamGrid from "../components/team-grid";
import { BtnLink } from "../components/ui";
import { careScenes } from "../lib/site";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us | Harbour View Dental, Port Alberni",
  description:
    "Meet Dr. Gary and the Harbour View Dental team, a local, independent practice providing comprehensive, compassionate dental care in Port Alberni, BC.",
  path: "/about",
  keywords: [
    "about Harbour View Dental",
    "Dr Gary Port Alberni",
    "dentist Port Alberni",
    "dental team Port Alberni BC"
  ]
});

export default function AboutPage() {
  return (
    <>
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

      {/* Statement + mission (Joby rhythm) */}
      <section className="section stats about-doctor" id="doctor" aria-label="Dr. Gary">
        <div className="container">
          <hr className="rule" />
          <span className="eyebrow">Led by Dr. Gary</span>
          <div className="stats-grid about-doctor-grid">
            <div>
              <p className="statement fade-up">
                You deserve a skilled, caring team that helps you achieve and keep great oral
                health.
              </p>
              <div className="prose fade-up" style={{ marginTop: 24 }}>
                <p>
                  Dr. Gary is an experienced Port Alberni dentist committed to providing excellent
                  dentistry in a comfortable, welcoming environment. From gentle preventive visits
                  to same-day CEREC crowns and full smile makeovers, he takes the time to explain
                  your options in plain language, so you always understand what&apos;s happening and
                  why.
                </p>
                <div className="hero-actions">
                  <BtnLink href="/contact#booking">Book a visit</BtnLink>
                  <Link className="btn-secondary" href="/services">
                    View services
                  </Link>
                </div>
              </div>
            </div>
            <figure className="doctor-media fade-up">
              <Image
                src="/images/dr-gaurav.jpg"
                alt="Dr. Gary, dentist and owner of Harbour View Dental"
                fill
                sizes="(max-width: 1079px) 100vw, 480px"
                style={{ objectPosition: "center 15%" }}
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Values triptych (Zoox) */}
      <ContentTriptych
        className="trip--plain"
        eyebrow="How we care"
        title="Care that puts you at ease"
        lead="At every step, our team prioritizes your well-being: listening first, explaining clearly, and going at a pace that feels right for you."
        items={[
          {
            image: { src: "/images/withpatient2.png", alt: "Dr. Gary discussing care with a patient" },
            label: "Listening first",
            copy: "Every visit starts with a conversation. We listen, explain everything, and go at a pace that feels right for you."
          },
          {
            image: { src: "/images/with Patient.png", alt: "Dr. Gary welcoming a young patient and her parent" },
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

      {/* Team */}
      <section className="section" id="team" aria-label="Meet the team">
        <div className="container">
          <SectionHead
            eyebrow="The people"
            title="The people behind your smile"
            lead="Our friendly local team of eight includes your dentist, hygienists, assistants, and coordinators, all working together to make every visit feel easy."
            center
          />
          <TeamGrid />
        </div>
      </section>

    </>
  );
}
