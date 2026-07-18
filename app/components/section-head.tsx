type SectionHeadProps = {
  title: string;
  eyebrow?: string;
  lead?: string;
  center?: boolean;
  as?: "h2" | "h3";
};

export default function SectionHead({ title, eyebrow, lead, center = false, as = "h2" }: SectionHeadProps) {
  const Tag = as;

  return (
    <div className={`section-head${center ? " section-head--center" : ""} fade-up`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <Tag className="display-l">{title}</Tag>
      {lead ? <p className="lede">{lead}</p> : null}
    </div>
  );
}
