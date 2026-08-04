# Ilkin Javadov — Portfolio

React + Vite + TypeScript + Tailwind CSS. No backend, database, or auth — a static site.

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Structure

- `src/sections/*` — one component per page section (Hero, About, Projects, Stack, Experience, Contact)
- `src/layout/*` — Navbar, Footer
- `src/components/*` — reusable UI (Button, ProjectCard, ContactCard, ThemeToggle, ...)
- `src/data/*` — content arrays (`projects.ts`, `techStack.ts`, `experience.ts`) — edit these to update copy without touching components
- `src/assets/projects/*` — project preview images. The three PNGs shipped here are neutral placeholders; replace them with real screenshots using the same filenames (or update the `image` path in `src/data/projects.ts`)
- `src/hooks/useTheme.ts` — light/dark theme, persisted to `localStorage`

## Notes

- Theme defaults to light and toggles via the switch in the navbar.
- Update social links, email, and demo URLs in `src/data/projects.ts` and `src/sections/Hero.tsx` / `src/sections/Contact.tsx`.
