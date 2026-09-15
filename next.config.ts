import type { NextConfig } from "next";

/** Old WordPress category pages → services anchors (individual treatments are real pages now). */
const categoryRedirects = [
  ["preventive-services", "preventive"],
  ["restorative-services", "restorative"],
  ["periodontic-services", "periodontics"],
  ["endodontic-services", "endodontics"],
  ["oral-surgery-services", "oral-surgery"]
] as const;

const aliasRedirects = [
  ["cosmetic-services", "/services"],
  ["porcelain-dental-veneers", "/services"],
  ["teeth-whitening", "/services"]
] as const;

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/about-us/", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/contact-us/", destination: "/contact", permanent: true },
      { source: "/frequently-asked-questions", destination: "/#faq", permanent: true },
      { source: "/frequently-asked-questions/", destination: "/#faq", permanent: true },
      { source: "/testimonials", destination: "/#reviews", permanent: true },
      { source: "/testimonials/", destination: "/#reviews", permanent: true },
      { source: "/ada-compliance", destination: "/accessibility", permanent: true },
      { source: "/ada-compliance/", destination: "/accessibility", permanent: true },
      { source: "/smile-gallery", destination: "/services", permanent: true },
      { source: "/smile-gallery/", destination: "/services", permanent: true },
      { source: "/site-map", destination: "/sitemap.xml", permanent: true },
      { source: "/site-map/", destination: "/sitemap.xml", permanent: true },
      { source: "/services/porcelain-veneers", destination: "/services", permanent: true },
      { source: "/services/porcelain-veneers/", destination: "/services", permanent: true },
      { source: "/services/whitening", destination: "/services", permanent: true },
      { source: "/services/whitening/", destination: "/services", permanent: true },
      ...categoryRedirects.flatMap(([slug, hash]) => [
        {
          source: `/services/${slug}`,
          destination: `/services#${hash}`,
          permanent: true
        },
        {
          source: `/services/${slug}/`,
          destination: `/services#${hash}`,
          permanent: true
        }
      ]),
      ...aliasRedirects.flatMap(([slug, dest]) => [
        { source: `/services/${slug}`, destination: dest, permanent: true },
        { source: `/services/${slug}/`, destination: dest, permanent: true }
      ])
    ];
  }
};

export default nextConfig;
