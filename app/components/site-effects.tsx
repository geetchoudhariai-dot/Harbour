"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Progressive-enhancement effects — no animation library, no ticker.
 * Content is fully visible by default; the `anim` class on <html> opts
 * elements into transition-based reveals driven by IntersectionObserver.
 * Worst case (JS blocked, throttled rAF, reduced motion): everything visible.
 */
export default function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    const onScroll = () => header?.classList.toggle("is-scrolled", window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(".fade-up, .image-reveal, .hero-enter")
    );
    if (reduced || targets.length === 0) return;

    const root = document.documentElement;
    root.classList.add("anim");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    for (const el of targets) {
      // Anything already in the viewport reveals immediately.
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("is-in");
      } else {
        io.observe(el);
      }
    }

    return () => {
      io.disconnect();
      root.classList.remove("anim");
      targets.forEach((el) => el.classList.remove("is-in"));
    };
  }, [pathname]);

  return null;
}
