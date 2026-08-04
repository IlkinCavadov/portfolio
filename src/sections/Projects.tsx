import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export const Projects = () => (
  <section
    id="projects"
    aria-labelledby="projects-heading"
    className="border-t border-line py-[clamp(64px,10vh,104px)] pb-[clamp(32px,5vh,48px)]"
  >
    <SectionHeading
      index="02"
      label="PROJECTS"
      title="Featured Work."
      headingId="projects-heading"
      titleClassName="text-[clamp(24px,3vw,30px)] leading-[1.2]"
    />
    <div className="mt-[clamp(40px,6vw,56px)] flex flex-col gap-[clamp(28px,4vw,40px)]">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  </section>
);
