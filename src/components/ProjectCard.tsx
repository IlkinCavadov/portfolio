import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '../types';
import { TechChip } from './TechChip';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <article className="grid grid-cols-1 items-center gap-[clamp(24px,4vw,48px)] rounded-[14px] border border-line bg-bg-elev p-[clamp(20px,3vw,28px)] transition-colors duration-200 hover:border-line-strong md:grid-cols-2">
    <div className="relative aspect-[16/10] overflow-hidden rounded-[10px] border border-line bg-bg-hover">
      <img src={project.image} alt={project.imageAlt} loading="lazy" className="h-full w-full object-cover" />
    </div>
    <div className="flex flex-col gap-4">
      <div className="flex items-baseline gap-3">
        <h3 className="text-xl font-semibold tracking-[-0.02em] text-tx-1">{project.title}</h3>
        <span className="font-mono text-[11px] text-tx-3">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <p className="text-[15px] leading-[1.65] text-tx-2 [text-wrap:pretty]">{project.description}</p>
      <ul className="mt-1 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <TechChip key={tech} label={tech} />
        ))}
      </ul>
      <div className="mt-1.5 flex flex-wrap gap-5 font-mono text-xs">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} on GitHub`}
          className="inline-flex items-center gap-1.5 border-b border-line-2 pb-0.5 text-tx-strong transition-colors duration-150 hover:border-tx-hover hover:text-tx-hover"
        >
          <Github size={13} aria-hidden="true" />
          GitHub
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} live demo`}
          className="inline-flex items-center gap-1.5 border-b border-line-2 pb-0.5 text-tx-strong transition-colors duration-150 hover:border-tx-hover hover:text-tx-hover"
        >
          Live Demo
          <ExternalLink size={13} aria-hidden="true" />
        </a>
      </div>
    </div>
  </article>
);
