import Image from "next/image";
import SectionHead from "./section-head";
import { LinkArrow } from "./ui";

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
  className?: string;
};

export default function ContentTriptych({
  eyebrow,
  title,
  lead,
  items,
  id,
  className
}: ContentTriptychProps) {
  return (
    <section
      className={`panel panel--sage trip${className ? ` ${className}` : ""}`}
      id={id}
      aria-label={title}
    >
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
