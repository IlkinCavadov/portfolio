interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  headingId: string;
  titleClassName: string;
}

export const SectionHeading = ({ index, label, title, headingId, titleClassName }: SectionHeadingProps) => (
  <div>
    <p className="font-mono text-[11px] tracking-[0.12em] text-tx-3">{`${index} — ${label}`}</p>
    <h2 id={headingId} className={`mt-[18px] font-semibold tracking-[-0.025em] text-tx-1 ${titleClassName}`}>
      {title}
    </h2>
  </div>
);
