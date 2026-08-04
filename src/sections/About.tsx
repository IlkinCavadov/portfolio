import { SectionHeading } from '../components/SectionHeading';

export const About = () => (
  <section id="about" aria-labelledby="about-heading" className="border-t border-line py-[clamp(64px,10vh,104px)]">
    <div className="grid gap-8 md:grid-cols-2 md:gap-20">
      <SectionHeading
        index="01"
        label="ABOUT"
        title="Backend first, with an eye on the whole system."
        headingId="about-heading"
        titleClassName="max-w-[14em] text-[clamp(24px,3vw,30px)] leading-[1.2]"
      />
      <div className="flex max-w-[38em] flex-col gap-4 text-base leading-[1.7] text-tx-2 [text-wrap:pretty]">
        <p>
         I build backend systems, REST APIs, and scalable web applications with a focus on clean architecture, performance, and maintainability.

My primary stack includes Python, FastAPI, SQL, Docker, and Linux. When needed, I build React and TypeScript frontends to deliver complete solutions.

        </p>

        <p>
          I share my projects under the <strong className="font-medium text-tx-strong">JavoLab</strong> brand.
        </p>
      </div>
    </div>
  </section>
);
