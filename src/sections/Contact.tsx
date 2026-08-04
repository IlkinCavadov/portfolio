import { Github, Linkedin, Mail } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ContactCard } from '../components/ContactCard';

const EMAIL = 'ilkin.javadov@outlook.com';
const GITHUB_URL = 'https://github.com/IlkinCavadov';
const LINKEDIN_URL = 'https://www.linkedin.com/in/ilkinjavadov';

export const Contact = () => (
  <section
    id="contact"
    aria-labelledby="contact-heading"
    className="border-t border-line py-[clamp(64px,10vh,104px)] pb-[clamp(56px,8vh,88px)]"
  >
    <SectionHeading
      index="05"
      label="CONTACT"
      title="Have a backend that needs building or fixing? Let&apos;s talk."
      headingId="contact-heading"
      titleClassName="max-w-[22em] text-[clamp(26px,4vw,38px)] leading-[1.15] tracking-[-0.03em] [text-wrap:pretty]"
    />
    <div className="mt-[clamp(36px,5vw,48px)] grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
      <ContactCard href={`mailto:${EMAIL}`} label="Email" icon={<Mail size={19} aria-hidden="true" />} />
      <ContactCard href={GITHUB_URL} label="GitHub" icon={<Github size={19} aria-hidden="true" />} external />
      <ContactCard href={LINKEDIN_URL} label="LinkedIn" icon={<Linkedin size={19} aria-hidden="true" />} external />
    </div>
  </section>
);
