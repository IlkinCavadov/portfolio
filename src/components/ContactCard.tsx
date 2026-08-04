import type { ReactNode } from 'react';

interface ContactCardProps {
  href: string;
  label: string;
  icon: ReactNode;
  external?: boolean;
}

export const ContactCard = ({ href, label, icon, external = false }: ContactCardProps) => (
  <a
    href={href}
    {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    className="flex flex-col items-center gap-3.5 bg-bg-elev px-6 py-7 text-center transition-colors duration-150 hover:bg-bg-hover"
  >
    <span className="flex h-10 w-10 items-center justify-center rounded-[9px] border border-line-2 bg-bg-chip text-tx-strong">
      {icon}
    </span>
    <span className="font-mono text-sm tracking-[0.02em] text-tx-1">{label}</span>
  </a>
);
