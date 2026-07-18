import Image from "next/image";
import BookingForm from "./booking-form";
import FaqList from "./faq-list";
import SectionHead from "./section-head";
import { SITE, faqs } from "../lib/site";

/* Booking + FAQ split (Browserbase form + Retool accordion) over the
   watercolor rising from the bottom of the section (REDESIGN.md D9/D6). */

type BookingFaqProps = {
  faqCount?: number;
  items?: typeof faqs;
};

export default function BookingFaq({ faqCount = 6, items = faqs }: BookingFaqProps) {
  return (
    <section className="book" id="booking" aria-label="Book your visit">
      <div className="book-art" aria-hidden="true">
        <Image src="/images/scene2.png" alt="" fill sizes="100vw" />
      </div>
      <div className="container">
        <SectionHead
          eyebrow="Book a visit"
          title="Plan your visit"
          lead={`New patients, families, and nervous patients are always welcome. Prefer to talk? Call ${SITE.phone}.`}
        />
        <div className="book-grid">
          <div className="faq-card fade-up" id="faq">
            <h3 className="display-s">Common questions</h3>
            <FaqList items={items.slice(0, faqCount)} />
          </div>
          <div className="fade-up">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
