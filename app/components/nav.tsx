"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { SITE, navLinks, serviceCategories, serviceSlug, serviceTagline, type ServiceCategory } from "../lib/site";
import { treatmentHref } from "../lib/treatments";
import { BtnLink } from "./ui";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const MEGA_CLOSE_DELAY = 150;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>(serviceCategories[0]);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const megaGroupRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const pathname = usePathname();

  const openMega = () => {
    clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleCloseMega = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), MEGA_CLOSE_DELAY);
  };

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setOpen(false);
      setMegaOpen(false);
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (open) {
          setOpen(false);
          menuButtonRef.current?.focus();
        }
        if (megaOpen) setMegaOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, megaOpen]);

  useEffect(() => {
    if (!megaOpen) return;
    const onClickOutside = (event: MouseEvent) => {
      if (!megaGroupRef.current?.contains(event.target as Node)) setMegaOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [megaOpen]);

  const onGroupBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!megaGroupRef.current?.contains(event.relatedTarget as Node)) {
      setMegaOpen(false);
    }
  };

  return (
    <header className="site-header">
      <nav className="nav-pill" aria-label="Main">
        <Link className="brand" href="/" aria-label="Harbour View Dental home">
          <Image
            className="brand-logo"
            src="/images/logo-mark.png"
            alt=""
            width={285}
            height={300}
            priority
          />
          <span className="brand-word">
            <strong>Harbour View</strong>
            <span>DENTAL</span>
          </span>
        </Link>

        <div className="nav-links">
          {navLinks.map((link) =>
            link.href === "/services" ? (
              <div
                key={link.href}
                ref={megaGroupRef}
                className="nav-item-mega"
                onMouseEnter={openMega}
                onMouseLeave={scheduleCloseMega}
                onBlur={onGroupBlur}
              >
                <Link
                  href={link.href}
                  className={isActive(pathname, link.href) ? "is-active" : undefined}
                  aria-current={isActive(pathname, link.href) ? "page" : undefined}
                  aria-haspopup="true"
                  aria-expanded={megaOpen}
                  onFocus={openMega}
                >
                  {link.label}
                  <ChevronDown size={14} className="nav-item-chevron" aria-hidden="true" />
                </Link>

                {megaOpen && (
                  <div className="nav-mega">
                    <div className="container nav-mega-grid">
                      <div className="nav-mega-col nav-mega-col--primary">
                        <span className="nav-mega-label">Services</span>
                        {serviceCategories.map((cat) => (
                          <Link
                            key={cat.title}
                            href={`/services#${serviceSlug(cat.title)}`}
                            className={cat.title === activeCategory.title ? "is-hovered" : undefined}
                            onMouseEnter={() => setActiveCategory(cat)}
                            onFocus={() => setActiveCategory(cat)}
                          >
                            {cat.title}
                          </Link>
                        ))}
                      </div>
                      <div className="nav-mega-col nav-mega-col--treatments">
                        <span className="nav-mega-label">{activeCategory.title}</span>
                        <p className="nav-mega-tagline">{serviceTagline(activeCategory.summary)}</p>
                        {activeCategory.treatments.map((t) => (
                          <Link key={`${activeCategory.title}-${t.slug}-${t.name}`} href={treatmentHref(t.slug)}>
                            {t.name}
                          </Link>
                        ))}
                        <Link href={`/services#${serviceSlug(activeCategory.title)}`} className="nav-mega-viewall">
                          View all {activeCategory.title.toLowerCase()}
                          <ArrowRight size={13} aria-hidden="true" />
                        </Link>
                      </div>
                      <div className="nav-mega-col">
                        <span className="nav-mega-label">Quick links</span>
                        <Link href="/contact#booking">Book a visit</Link>
                        <a href={SITE.phoneHref}>{SITE.phone}</a>
                        <Link href="/new-patients">New patients</Link>
                        <a href={SITE.directionsUrl} target="_blank" rel="noopener noreferrer">
                          Get directions
                        </a>
                      </div>
                      <div className="nav-mega-col">
                        <span className="nav-mega-label">Good to know</span>
                        <Link href="/new-patients#insurance-faq-section">Insurance &amp; CDCP</Link>
                        <Link href={`/services#${serviceSlug("Restorative")}`}>Same-day crowns</Link>
                        <Link href="/contact">Emergency care</Link>
                        <Link href="/accessibility">Accessibility</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={isActive(pathname, link.href) ? "is-active" : undefined}
                aria-current={isActive(pathname, link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="nav-right">
          <a className="nav-phone" href={SITE.phoneHref} aria-label={`Call ${SITE.phone}`}>
            <Phone size={16} aria-hidden="true" />
            <span>{SITE.phone}</span>
          </a>
          <BtnLink href="/contact#booking">Book a visit</BtnLink>
        </div>

        <a className="nav-call-mobile" href={SITE.phoneHref} aria-label={`Call ${SITE.phone}`}>
          <Phone size={19} aria-hidden="true" />
        </a>

        <button
          ref={menuButtonRef}
          className="mobile-menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          <span className="menu-label">{open ? "Close" : "Menu"}</span>
        </button>
      </nav>

      {open && (
        <>
          <button
            className="mobile-menu-backdrop"
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div className="mobile-menu">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={isActive(pathname, link.href) ? "is-active" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a className="mobile-phone" href={SITE.phoneHref}>
              <Phone size={16} aria-hidden="true" /> {SITE.phone}
            </a>
            <BtnLink href="/contact#booking">Book a visit</BtnLink>
          </div>
        </>
      )}
    </header>
  );
}
