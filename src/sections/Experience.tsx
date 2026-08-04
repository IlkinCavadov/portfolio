import { SectionHeading } from '../components/SectionHeading';
import { experience } from '../data/experience';

export const Experience = () => (
  <section
    id="experience"
    aria-labelledby="experience-heading"
    className="border-t border-line py-[clamp(64px,10vh,104px)]"
  >
    <SectionHeading
      index="04"
      label="EXPERIENCE"
      title="A short timeline."
      headingId="experience-heading"
      titleClassName="text-[clamp(24px,3vw,30px)] leading-[1.2]"
    />
    <ol className="mt-[clamp(36px,5vw,48px)] flex flex-col gap-[clamp(32px,4vw,44px)] border-l border-line-2 pl-[clamp(20px,3vw,28px)]">
      {experience.map((item) => (
        <li key={`${item.period}-${item.role}`} className="relative grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-10">
          <span
            aria-hidden="true"
            className="absolute -left-[27px] top-[7px] h-1.5 w-1.5 rounded-full border border-bg bg-dot"
          />
          <div>
            <p className="font-mono text-xs tracking-[0.04em] text-tx-3">{item.period}</p>
            <h3 className="mt-2 text-[17px] font-semibold tracking-[-0.015em] text-tx-1">{item.role}</h3>
            <p className="mt-1 text-sm text-tx-3">{item.org}</p>
          </div>
          <p className="max-w-[36em] text-[15px] leading-[1.65] text-tx-2 [text-wrap:pretty]">{item.detail}</p>
        </li>
      ))}
    </ol>
  </section>
);
