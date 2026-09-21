import type { Metadata } from "next";
import PageHero from "../components/page-hero";
import { LinkArrow } from "../components/ui";
import JsonLd from "../components/json-ld";
import { SITE } from "../lib/site";
import { breadcrumbList, webPage } from "../lib/schema";
import { CONTENT_REVIEWED, pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Harbour View Dental, Port Alberni",
  description:
    "How Harbour View Dental collects, uses, and protects the personal information you send through this website, under British Columbia's Personal Information Protection Act.",
  path: "/privacy"
});

const privacySchema = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Privacy Policy", path: "/privacy" }
    ]),
    webPage({
      path: "/privacy",
      name: "Privacy policy"
    })
  ]
};

const reviewedLabel = new Date(`${CONTENT_REVIEWED}T00:00:00-07:00`).toLocaleDateString("en-CA", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "America/Vancouver"
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={privacySchema} />
      <PageHero
        eyebrow="Privacy"
        title="Privacy policy"
        lead="This policy explains what personal information this website collects, why we collect it, and what we do with it."
      />

      <section className="section" aria-label="Privacy policy">
        <div className="container">
          <div className="prose fade-up">
            <p>
              Harbour View Dental respects your privacy. We handle personal information in
              accordance with British Columbia&apos;s Personal Information Protection Act (PIPA).
              This policy covers this website only. Your clinical dental records are handled
              separately under the standards set by the College of Oral Health Professionals of
              British Columbia.
            </p>

            <h2>What we collect</h2>
            <p>
              The only personal information this website collects is what you choose to type into
              the appointment request form on our contact page:
            </p>
            <ul>
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number</li>
              <li>Your preferred appointment time and reason for visiting, if you select them</li>
              <li>Anything you write in the message field</li>
            </ul>
            <p>
              Please keep the message field brief. Tell us you would like an appointment and, if
              you wish, the general reason. Do not send detailed medical or dental history,
              medication lists, or other sensitive health information through this form. Email is
              not a secure channel. We will collect anything clinical we need directly from you at
              the clinic or over the phone.
            </p>

            <h2>Why we collect it</h2>
            <p>
              We use this information for one purpose: to contact you back about your request and
              to arrange an appointment. We do not use it for marketing, we do not sell it, and we
              do not share it with anyone outside the practice except as described below.
            </p>

            <h2>How it reaches us</h2>
            <p>
              When you submit the form, its contents are emailed to our office inbox at{" "}
              <a href={SITE.emailHref}>{SITE.email}</a>. We use a third-party email delivery
              service, Resend, to send that message. Your information passes through that service
              in order to reach us and may be processed on servers outside Canada. We do not use
              advertising trackers, analytics profiling, or third-party cookies on this site.
            </p>

            <h2>How long we keep it</h2>
            <p>
              Appointment request emails are kept in our office inbox only as long as we need them
              to arrange and confirm your visit, and are deleted during routine inbox cleanup once
              they are no longer needed. If you become a patient, the information you gave us may
              be transferred into your clinical record, which is retained under the record-keeping
              rules that apply to dental practices in British Columbia.
            </p>

            <h2>Your choices</h2>
            <p>
              You never have to use the form. You are always welcome to call us at{" "}
              <a href={SITE.phoneHref}>{SITE.phone}</a> instead, which is also the fastest way to
              reach us about pain, swelling, or any other urgent concern.
            </p>
            <p>
              Under PIPA you may ask what personal information we hold about you, ask us to correct
              it if it is wrong, and ask us to delete information we no longer need. Contact the
              office and we will help.
            </p>

            <h2>Questions or concerns</h2>
            <p>If you have a question about this policy or about your information, contact us:</p>
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
            <p>
              If you are not satisfied with our response, you may contact the Office of the
              Information and Privacy Commissioner for British Columbia.
            </p>

            <p>
              <em>Last reviewed {reviewedLabel}.</em>
            </p>

            <LinkArrow href="/contact">Contact us</LinkArrow>
          </div>
        </div>
      </section>
    </>
  );
}
