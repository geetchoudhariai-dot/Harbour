import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type BtnVariant = "primary" | "light";

type BtnLinkProps = {
  href: string;
  children: ReactNode;
  variant?: BtnVariant;
  external?: boolean;
  className?: string;
};

export function BtnLink({ href, children, variant = "primary", external, className }: BtnLinkProps) {
  const cls = `${variant === "light" ? "btn-light" : "btn"}${className ? ` ${className}` : ""}`;
  const inner = (
    <>
      {children}
      <span className="btn-circle" aria-hidden="true">
        <ArrowRight size={15} />
      </span>
    </>
  );
  if (external) {
    return (
      <a className={cls} href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link className={cls} href={href}>
      {inner}
    </Link>
  );
}

export function BtnSubmit({ children, ...rest }: { children: ReactNode } & ComponentProps<"button">) {
  return (
    <button className="btn" type="submit" {...rest}>
      {children}
      <span className="btn-circle" aria-hidden="true">
        <ArrowRight size={15} />
      </span>
    </button>
  );
}

export function LinkArrow({ href, children, external }: { href: string; children: ReactNode; external?: boolean }) {
  if (external) {
    return (
      <a className="link-arrow" href={href} target="_blank" rel="noopener noreferrer">
        {children} <ArrowRight size={14} aria-hidden="true" />
      </a>
    );
  }
  return (
    <Link className="link-arrow" href={href}>
      {children} <ArrowRight size={14} aria-hidden="true" />
    </Link>
  );
}
