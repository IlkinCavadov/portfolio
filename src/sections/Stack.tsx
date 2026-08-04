import { SectionHeading } from '../components/SectionHeading';
import { techStack } from '../data/techStack';

export const Stack = () => (
  <section id="stack" aria-labelledby="stack-heading" className="border-t border-line py-[clamp(64px,10vh,104px)]">
    <SectionHeading
      index="03"
      label="TECH STACK"
      title="Tools I reach for."
      headingId="stack-heading"
      titleClassName="text-[clamp(24px,3vw,30px)] leading-[1.2]"
    />
    <ul className="mt-[clamp(36px,5vw,48px)] grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-px overflow-hidden rounded-xl border border-line bg-line">
      {techStack.map((tech) => (
        <li key={tech.name} className="flex flex-col gap-1.5 bg-bg-elev px-5 py-[22px]">
          <span className="text-[15px] font-medium tracking-[-0.01em] text-tx-1">{tech.name}</span>
          <span className="font-mono text-[11px] text-tx-3">{tech.role}</span>
        </li>
      ))}
    </ul>
  </section>
);
