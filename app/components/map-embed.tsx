import { MapPin } from "lucide-react";
import { SITE } from "../lib/site";
import { BtnLink } from "./ui";

type MapEmbedProps = {
  title?: string;
  className?: string;
};

export default function MapEmbed({
  title = "Harbour View Dental on Google Maps",
  className
}: MapEmbedProps) {
  return (
    <div className={className}>
      <div className="map-frame">
        <iframe
          title={title}
          src={SITE.mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="map-actions">
        <a className="btn-secondary" href={SITE.mapUrl} target="_blank" rel="noopener noreferrer">
          <MapPin size={16} aria-hidden="true" /> Open in Google Maps
        </a>
        <BtnLink href={SITE.directionsUrl} external>
          Get directions
        </BtnLink>
      </div>
    </div>
  );
}
