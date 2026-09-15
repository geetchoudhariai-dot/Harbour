import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { SITE, hours } from "../lib/site";
import { BtnLink } from "./ui";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-art" aria-hidden="true">
        <Image
          src="/images/scene2.png"
          alt=""
          fill
          sizes="100vw"
        />
      </div>

      <div className="footer-cta-integrated">
        <div>
          <span className="footer-kicker">New patients welcome</span>
          <h2>Ready to plan your visit?</h2>
          <p>Tell us what you need, and our Port Alberni team will help you find the right next step.</p>
        </div>
        <div className="footer-cta-actions">
          <BtnLink href="/contact#booking" variant="light">
            Book a visit
          </BtnLink>
          <a href={SITE.phoneHref}>
            <Phone size={17} aria-hidden="true" /> {SITE.phone}
          </a>
        </div>
      </div>

      <div className="footer-inner">
        <div className="footer-brand-col">
          <Image
            className="footer-logo"
            src="/images/logo-mark.png"
            alt=""
            width={285}
            height={300}
          />
          <p className="footer-tag">
            Trusted family dentistry for Port Alberni, delivered with clarity, compassion, and
            modern clinical care.
          </p>
        </div>

        <div className="footer-col">
          <h4>Visit</h4>
          <address>
            <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer">
              {SITE.street}
              <br />
              {SITE.city}
            </a>
            <a href={SITE.phoneHref}>{SITE.phone}</a>
            <a href={SITE.emailHref}>{SITE.email}</a>
          </address>
        </div>

        <div className="footer-col">
          <h4>Practice</h4>
          <Link href="/services">Services</Link>
          <Link href="/new-patients">New Patients</Link>
          <Link href="/about">About Us</Link>
          <Link href="/technology">Technology</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Hours</h4>
          <ul className="footer-hours">
            {hours.map((entry) => (
              <li key={entry.day}>
                <span>{entry.day}</span>
                <span>{entry.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-legal">
        <div>
          <p>
            © 2026 Harbour View Dental · Port Alberni, BC ·{" "}
            <Link href="/accessibility">Accessibility</Link>
          </p>
          <p>Located on the unceded territory of the Tseshaht and Hupacasath First Nations.</p>
        </div>
      </div>

      <div className="sticky-book">
        <a className="sb-call" href={SITE.phoneHref} aria-label={`Call ${SITE.phone}`}>
          <Phone size={18} aria-hidden="true" />
        </a>
        <BtnLink href="/contact#booking">Book a visit</BtnLink>
      </div>
    </footer>
  );
}
