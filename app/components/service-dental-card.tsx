import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DentalServiceIcon } from "./dental-service-icons";
import type { DentalIconId } from "../lib/site";

type ServiceCardProps = {
  title: string;
  summary: string;
  href: string;
  icon: DentalIconId;
};

export function ServiceCard({ title, summary, href, icon }: ServiceCardProps) {
  return (
    <Link className="svc-card fade-up" href={href}>
      <div className="svc-card-media" aria-hidden="true">
        <DentalServiceIcon id={icon} />
        <div className="svc-card-overlay" />
      </div>
      <div className="svc-card-body">
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
      <span className="svc-card-arrow" aria-hidden="true">
        <ArrowUpRight size={16} />
      </span>
    </Link>
  );
}

export function ServiceCardGrid({ children }: { children: React.ReactNode }) {
  return <div className="svc-grid">{children}</div>;
}
