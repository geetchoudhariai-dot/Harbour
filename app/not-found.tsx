import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import PageHero from "./components/page-hero";
import { BtnLink } from "./components/ui";
import { SITE } from "./lib/site";

export const metadata: Metadata = {
  title: "Page not found | Harbour View Dental",
  description: "This page is not available. Return to Harbour View Dental in Port Alberni or book a visit.",
  robots: {
    index: false,
    follow: true
  }
};

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Page not found"
        title="This page drifted offshore"
        lead="The page you are looking for may have moved or no longer exists. Head back home or book a visit with our Port Alberni team."
        image={{
          src: "/images/scene3.png",
          alt: "Watercolour painting of Port Alberni harbour"
        }}
        actions={
          <>
            <BtnLink href="/">Back to home</BtnLink>
            <a className="text-phone" href={SITE.phoneHref}>
              <Phone size={16} aria-hidden="true" /> {SITE.phone}
            </a>
          </>
        }
      />

      <section className="section" aria-label="Popular pages">
        <div className="container nf-links fade-up">
          <Link href="/services">
            Services <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link href="/new-patients">
            New patients <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link href="/about">
            About us <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link href="/contact">
            Contact <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
