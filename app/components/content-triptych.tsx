import Image from "next/image";
import SectionHead from "./section-head";
import { LinkArrow } from "./ui";

/* Zoox content block: sage panel, eyebrow + centered heading,
   3 columns of photo → uppercase label → copy → arrow link. */

export type TriptychItem = {
  image?: { src: string; alt: string };
  label: string;
  copy: string;
  link?: { href: string; text: string };
};

type ContentTriptychProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  items: TriptychItem[];
  id?: string;
  variant?: "default" | "cards";
  backgroundImage?: { src: string; alt: string };
  className?: string;
};

export default function ContentTriptych({
  eyebrow,
  title,
  lead,
  items,
  id,
  variant = "default",
  backgroundImage,
  className
}: ContentTriptychProps) {
  return (
    <section
      className={`panel panel--sage trip${variant === "cards" ? " trip--cards" : ""}${className ? ` ${className}` : ""}`}
      id={id}
      aria-label={title}
    >
      {backgroundImage ? (
        <div className="trip-background">
          <Image src={backgroundImage.src} alt={backgroundImage.alt} fill sizes="100vw" />
        </div>
      ) : null}
      <div className="trip-content">
        <SectionHead eyebrow={eyebrow} title={title} lead={lead} center />
        <div className="trip-grid">
        {items.map((item) => (
          <div className="trip-item fade-up" key={item.label}>
            {item.image ? (
              <div className="trip-media">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1079px) 50vw, 380px"
                />
              </div>
            ) : null}
            <span className="trip-label">{item.label}</span>
            <p>{item.copy}</p>
            {item.link ? <LinkArrow href={item.link.href}>{item.link.text}</LinkArrow> : null}
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
