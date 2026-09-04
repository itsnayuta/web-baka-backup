type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  className?: string;
  titleId?: string;
};

export function SectionHeading({ eyebrow, title, className = "", titleId }: SectionHeadingProps) {
  return (
    <div className={`ui-section-heading ${className}`.trim()}>
      <p className="ui-section-heading__eyebrow">{eyebrow}</p>
      <h2 className="ui-section-heading__title" id={titleId}>{title}</h2>
    </div>
  );
}
