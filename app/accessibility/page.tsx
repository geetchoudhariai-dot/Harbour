import type { Metadata } from "next";
import PageHero from "../components/page-hero";
import { LinkArrow } from "../components/ui";
import JsonLd from "../components/json-ld";
import { SITE } from "../lib/site";
import { breadcrumbList, webPage } from "../lib/schema";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Accessibility | Harbour View Dental, Port Alberni",
  description:
    "Harbour View Dental is committed to accessible web content. Contact us if you need assistance using this website.",
  path: "/accessibility"
});

const accessibilitySchema = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Accessibility", path: "/accessibility" }
    ]),
    webPage({
      path: "/accessibility",
      name: "Website accessibility"
    })
  ]
};

export default function AccessibilityPage() {
  return (
    <>
      <JsonLd data={accessibilitySchema} />
      <PageHero
        eyebrow="Accessibility"
        title="Website accessibility"
        lead="We are committed to providing visitors, including persons with disabilities, access to our website and web-based information and services."
      />

      <section className="section" aria-label="Accessibility statement">
        <div className="container">
          <div className="prose fade-up">
            <p>
              In developing this website, we have endeavoured to make every reasonable effort to
              comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. This site
              has been designed to reach the broadest audience possible.
            </p>
            <p>
              We welcome comments and suggestions to improve accessibility. If you have difficulty
              viewing this website, accessing information presented here, or using any of its
              features, please contact our office:
            </p>
            <ul>
              <li>
                Phone: <a href={SITE.phoneHref}>{SITE.phone}</a>
              </li>
              <li>
                Email: <a href={SITE.emailHref}>{SITE.email}</a>
              </li>
              <li>
                Address: {SITE.street}, {SITE.city}
              </li>
            </ul>
            <LinkArrow href="/contact">Contact us</LinkArrow>
          </div>
        </div>
      </section>

    </>
  );
}
