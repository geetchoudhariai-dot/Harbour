import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import BookingFaq from "./components/booking-faq";
import HeroSlideshow from "./components/hero-slideshow";
import JsonLd from "./components/json-ld";
import RatingBlock from "./components/rating-block";
import SectionHead from "./components/section-head";
import TeamGrid from "./components/team-grid";
import { BtnLink } from "./components/ui";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, pageMetadata } from "./lib/seo";
import { faqPage, webPage, WEBPAGE_ID } from "./lib/schema";
import {
  SITE,
  faqs,
  features,
  serviceCategories,
  serviceImages,
  serviceSlug,
  serviceTagline,
  stats,
  values
} from "./lib/site";

export const metadata = pageMetadata({
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  path: ""
});

const homeFaqs = faqs.map((item) => ({
  ...item,
  answer: item.answer.replaceAll("Dr. Gary", "Dr. Gaurav")
}));

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      ...webPage({
        path: "",
        name: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        id: WEBPAGE_ID
      }),
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [".hero-kicker", ".hero-lede", ".statement"]
      }
    },
    faqPage(homeFaqs)
  ]
};

const glanceStats = [stats[2], stats[1], stats[3]];

export default function Home() {
  return (
    <>
      <JsonLd data={homeSchema} />

      <section className="hero hero-enter" aria-label="Welcome">
        <div className="hero-layout">
          <HeroSlideshow
            slides={[
              {
                src: "/images/Dental clinic.png",
                alt: "Watercolour illustration of Harbour View Dental clinic in Port Alberni"
              },
              {
                src: "/images/Team.png",
                alt: "The Harbour View Dental team in Port Alberni",
                objectPosition: "center 30%"
              }
            ]}
          />
          <div className="hero-copy">
            <span className="hero-kicker">Port Alberni, BC | Accepting new patients</span>
            <h1 className="display-xl">Modern family dentistry</h1>
            <p className="hero-lede">
              Harbour View Dental is a family dentist in Port Alberni, BC. Dr. Gaurav (Gary) and the
              team explain your care clearly and work at your pace.
            </p>
            <div className="hero-actions">
              <BtnLink href="/contact#booking">Book a visit</BtnLink>
              <a className="btn-secondary" href={SITE.phoneHref}>
                <Phone size={15} aria-hidden="true" /> {SITE.phone}
              </a>
            </div>
          </div>
        </div>
        <ul className="hero-trust" aria-label="Practice highlights">
          <li><strong>Family-owned</strong><span>Local, independent care</span></li>
          <li><strong>CDCP welcome</strong><span>Most insurance accepted</span></li>
          <li><strong>Same-day crowns</strong><span>Modern CEREC technology</span></li>
        </ul>
      </section>

      <section className="mission" aria-label="Our approach">
        <div className="mission-bg" aria-hidden="true">
          <Image src="/images/scene2.png" alt="" fill sizes="100vw" />
        </div>
        <div className="mission-inner">
          <div className="mission-head fade-up">
            <h2 className="display-l">
              Good dentistry starts with a real conversation
            </h2>
          </div>
          <div className="glass-row">
            <div className="glass fade-up">
              <span className="glass-label">The practice</span>
              <div className="tag-cloud">
                {values.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="glass fade-up">
              <span className="glass-label">How we work</span>
              <ul className="value-list">
                {features.map((feature, index) => (
                  <li key={feature}>
                    <span className="value-num">{String(index + 1).padStart(2, "0")}</span>
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass glass--stats fade-up">
              <span className="glass-label">At a glance</span>
              {glanceStats.map((stat) => (
                <div className="glass-stat" key={stat.label}>
                  <span className="num">{stat.value}</span>
                  <span className="lbl">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section stats" aria-label="Practice at a glance">
        <div className="container">
          <hr className="rule" />
          <span className="eyebrow">Harbour View today</span>
          <div className="stats-grid">
            <p className="statement fade-up">
              We&apos;re a family-owned practice caring for Port Alberni smiles with modern, gentle
              dentistry.
            </p>
            <div className="stat-cells">
              {stats.map((stat) => (
                <div className="stat-cell fade-up" key={stat.label}>
                  <span className="lbl">{stat.label}</span>
                  <span className="stat-numeral">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section home-services" id="services" aria-label="Services">
        <div className="container">
          <div className="home-services-head">
            <SectionHead eyebrow="Services" title="Care for the whole smile" />
            <p>
              Prevention, restoration, and calm support for dental anxiety, all under one roof.
              Explore each area to see treatments and what to expect.
            </p>
          </div>
          <div className="home-service-list">
            {serviceCategories.map((cat, index) => {
              const image = serviceImages[cat.dentalIcon];
              return (
                <Link
                  className="home-service-row fade-up"
                  href={`/services#${serviceSlug(cat.title)}`}
                  key={cat.title}
                >
                  <span className="home-service-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="home-service-image" aria-hidden="true">
                    <Image src={image.src} alt="" fill sizes="96px" />
                  </span>
                  <span className="home-service-copy">
                    <span className="home-service-title">
                      <strong>{cat.title}</strong>
                    </span>
                    <span>{serviceTagline(cat.summary.replaceAll("Dr. Gary", "Dr. Gaurav"))}</span>
                  </span>
                  <span className="home-service-arrow" aria-hidden="true">
                    <ArrowUpRight size={18} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" id="team" aria-label="Meet the team">
        <div className="container">
          <SectionHead
            eyebrow="The people"
            title="Meet the team"
            lead="Nine friendly locals, led by Dr. Gaurav. People you'll get to know by name."
            center
          />
          <TeamGrid dentistDisplayName="Dr. Gaurav (Gary)" />
        </div>
      </section>

      <section className="section" id="reviews" aria-label="Patient reviews">
        <div className="container">
          <SectionHead eyebrow="Reviews" title="In our patients' words" center />
          <RatingBlock />
        </div>
      </section>

      <BookingFaq items={homeFaqs} />
    </>
  );
}
