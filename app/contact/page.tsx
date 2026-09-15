import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import BookingForm from "../components/booking-form";
import MapEmbed from "../components/map-embed";
import PageHero from "../components/page-hero";
import SectionHead from "../components/section-head";
import JsonLd from "../components/json-ld";
import { SITE, hours } from "../lib/site";
import { breadcrumbList, dentistRef, webPage } from "../lib/schema";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Book | Harbour View Dental, Port Alberni",
  description:
    "Call (250) 724-1314 or request an appointment online. Harbour View Dental is at Unit B, 4556 Gertrude St, Port Alberni, BC. See our office hours.",
  path: "/contact",
  keywords: [
    "book dentist Port Alberni",
    "Harbour View Dental contact",
    "dentist appointment Port Alberni",
    "4556 Gertrude St dentist"
  ]
});

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" }
    ]),
    {
      ...webPage({
        path: "/contact",
        name: "Contact Harbour View Dental",
        description:
          "Call (250) 724-1314 or request an appointment online at Harbour View Dental, Unit B, 4556 Gertrude St, Port Alberni, BC.",
        type: "ContactPage"
      }),
      mainEntity: dentistRef()
    }
  ]
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <PageHero
        eyebrow="Contact us"
        title="Book your visit"
        lead="Call the clinic for the fastest help, especially for emergencies or CDCP questions. You can also send us a message and we will get back to you to confirm a time."
        image={{
          src: "/images/scene3.png",
          alt: "Watercolour view of Port Alberni harbour with mountains beyond",
          priority: true
        }}
        actions={
          <a className="btn-secondary" href={SITE.phoneHref}>
            <Phone size={15} aria-hidden="true" /> {SITE.phone}
          </a>
        }
      />

      <section className="section" id="booking" aria-label="Booking and clinic details">
        <div className="container contact-grid">
          <div className="info-card fade-up">
            <div className="info-row">
              <span className="ci">
                <MapPin size={18} aria-hidden="true" />
              </span>
              <div>
                <strong>Our location</strong>
                <address>
                  <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer">
                    {SITE.street}, {SITE.city}
                  </a>
                </address>
              </div>
            </div>
            <div className="info-row">
              <span className="ci">
                <Phone size={18} aria-hidden="true" />
              </span>
              <div>
                <strong>Call us</strong>
                <a href={SITE.phoneHref}>{SITE.phone}</a>
              </div>
            </div>
            <div className="info-row">
              <span className="ci">
                <Mail size={18} aria-hidden="true" />
              </span>
              <div>
                <strong>Email</strong>
                <a href={SITE.emailHref}>{SITE.email}</a>
              </div>
            </div>
            <div className="info-row">
              <span className="ci">
                <Clock size={18} aria-hidden="true" />
              </span>
              <div style={{ flex: 1 }}>
                <strong>Office hours</strong>
                <ul className="hours-list">
                  {hours.map((entry) => (
                    <li key={entry.day} className={entry.time === "Closed" ? "closed" : undefined}>
                      <span>{entry.day}</span>
                      <span>{entry.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="fade-up">
            <BookingForm />
          </div>
        </div>
      </section>

      <section className="section" aria-label="Map" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHead
            eyebrow="Find us"
            title="On the harbour in Port Alberni"
            lead="Unit B, 4556 Gertrude St, close to Harbour Quay and the heart of the Alberni Valley."
            center
          />
          <MapEmbed className="fade-up" />
        </div>
      </section>
    </>
  );
}
