export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  imageAlt: string;
  githubUrl: string;
  liveUrl: string;
}

export interface TechStackItem {
  name: string;
  role: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  org: string;
  detail: string;
}

export type Theme = 'light' | 'dark';
