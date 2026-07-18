import Image from "next/image";
import type { ReactNode } from "react";

type HeroImage = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
};

type PageHeroProps = {
  title?: ReactNode;
  lead?: string;
  eyebrow?: string;
  image?: HeroImage;
  actions?: ReactNode;
  className?: string;
};

/* Inner-page hero: sage panel, eyebrow + display headline + lede,
   optional framed image right. */
export default function PageHero({ title, lead, eyebrow, image, actions, className }: PageHeroProps) {
  return (
    <section className={`page-hero${className ? ` ${className}` : ""}`}>
      <div className={`page-hero-inner${image ? "" : " no-media"}`}>
        <div className="page-hero-copy hero-enter">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          {title ? <h1 className="display-l">{title}</h1> : null}
          {lead ? <p className="lede">{lead}</p> : null}
          {actions ? <div className="hero-actions">{actions}</div> : null}
        </div>
        {image ? (
          <figure className="page-hero-media">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={image.priority}
              sizes={image.sizes ?? "100vw"}
            />
          </figure>
        ) : null}
      </div>
    </section>
  );
}
