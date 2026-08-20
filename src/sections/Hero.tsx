import { ArrowDown } from 'lucide-react';
import { Button } from '../components/Button';

const GITHUB_URL = 'https://github.com/IlkinCavadov';
const LINKEDIN_URL = 'https://www.linkedin.com/in/ilkinjavadov';


export const Hero = () => (
  <section
    aria-labelledby="hero-name"
    className="animate-fade-in-up py-[clamp(72px,13vh,144px)] pb-[clamp(64px,11vh,112px)]"
  >
    <p className="mb-3.5 font-mono text-xs tracking-[0.1em] text-tx-3">HI, I&apos;M</p>
    <h1 id="hero-name" className="text-[clamp(38px,6vw,60px)] font-semibold leading-[1.02] tracking-[-0.03em] text-tx-1">
      Ilkin Javadov
    </h1>
    <p className="mt-2 text-[clamp(30px,5.2vw,52px)] font-bold leading-[1.05] tracking-[-0.03em] text-tx-1">
      Software Engineer
    </p>
    <p className="mt-[30px] max-w-[34em] text-[clamp(17px,2vw,20px)] leading-[1.6] text-tx-2 [text-wrap:pretty]">
     I build end-to-end software systems with a focus on solid engineering, clean architecture, security, performance, and maintainability.

    </p>
    <div className="mt-10 flex flex-wrap gap-3">
      <Button href="#projects" variant="primary" icon={<ArrowDown size={13} className="opacity-60" aria-hidden="true" />}>
        View Projects
      </Button>
      <Button href={GITHUB_URL} target="_blank" rel="noreferrer">
        GitHub
      </Button>
      <Button href={LINKEDIN_URL} target="_blank" rel="noreferrer">
        LinkedIn
      </Button>
    </div>

  </section>
);
