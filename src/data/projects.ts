import schoolCmsImage from '../assets/projects/school-cms.png';
import fastapiCrudImage from '../assets/projects/fastapi-crud.png';
import javoBotImage from '../assets/projects/javobot.png';
import type { Project } from '../types';

const GITHUB_URL = 'https://github.com/IlkinCavadov';

export const projects: Project[] = [
  {
    id: 'school-cms',
    title: 'School CMS',
    description:
      'A content management system for schools: staff manage announcements, pages, and student records behind role-based access, while the public site stays fast and cacheable.',
    techStack: ['FastAPI', 'PostgreSQL', 'Pydantic', 'Alembic', 'Docker', 'Nginx'],
    image: schoolCmsImage,
    imageAlt: 'School CMS project preview',
    githubUrl: GITHUB_URL + "/School-CMS",
    liveUrl: 'https://github.com/IlkinCavadov/School-CMS',
  },
  {
    id: 'fastapi-crud-api',
    title: 'FastAPI CRUD API',
    description:
      'A production-shaped REST API template: typed request and response models, migrations, pagination and filtering, structured errors, and tests — the boilerplate I reuse to start new services.',
    techStack: ['FastAPI', 'SQLAlchemy', 'Pydantic'],
    image: fastapiCrudImage,
    imageAlt: 'FastAPI CRUD API documentation preview',
    githubUrl: GITHUB_URL + "/fastapi_crud",
    liveUrl: 'https://github.com/IlkinCavadov/fastapi_crud',
  },
  {
    id: 'javobot',
    title: 'JavoBot',
    description:
      'An automation bot that handles scheduled tasks and message workflows: async handlers, retry-safe queues, and a small admin layer for monitoring runs on a Linux VPS.',
    techStack: ['Python', 'asyncio', 'Redis', 'systemd'],
    image: javoBotImage,
    imageAlt: 'JavoBot project preview',
    githubUrl: GITHUB_URL + "/JavoBot",
    liveUrl: 'https://javo-bot-vasv.vercel.app/',
  },
];
