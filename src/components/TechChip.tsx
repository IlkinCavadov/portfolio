interface TechChipProps {
  label: string;
}

export const TechChip = ({ label }: TechChipProps) => (
  <li className="rounded-md border border-line-2 bg-bg-chip px-[9px] py-[5px] font-mono text-[11px] text-tx-2">
    {label}
  </li>
);
