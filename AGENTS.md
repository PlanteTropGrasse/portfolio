# AGENTS.md

## Overview
A static React + TypeScript + Vite SPA portfolio for a game designer. There's no backend, no router library and no UI framework. Netlify builds with `npm run build` and publishes `dist/` (see `netlify.toml`).

## Structure
- `src/data/types.ts`: content types (`Project`, `Experience`, `Education`, `Skill`, `SectionId`).
- `src/data/portfolio.ts`: **all content**. Components only `.map()` over it. Don't hardcode repeated markup in components.
- `src/hooks/useSectionRouting.ts`: `?Page=` query-param routing. It reads the param on load, uses `pushState` on navigate, handles `popstate`, and tracks the active section with an IntersectionObserver (a band in the middle of the viewport).
- `src/hooks/useReveal.ts`: adds `.is-visible` to `.reveal` elements on enter. Pass deps to re-scan after content changes (e.g. the project filter).
- `src/components/`: one component plus a co-located `.css` per UI piece: Nav, Hero (which also holds the recent-projects preview), MarqueeBanner, ProjectCard, Projects, About, Skills, Education, Experience, Resume, Contact, SectionLabel.
- `src/styles/global.css`: design tokens (CSS variables), shared utilities (`.split`, `.chip`, `.project-grid`, `.reveal`, `.button`) and reduced-motion overrides.

## Conventions and decisions
- Section element ids must match the `SectionId` values (`Home`, `Projects`, `AboutMe`, `Resume`). The URL param uses the same strings.
- Each section's MarqueeBanner is its first child, so navigating to a section lands on its banner.
- Nav links are real `<a href="?Page=…">` links with `preventDefault`, so they still work without JS and with middle-click.
- Numbered labels: 01 About, 02 Skills (About me section), 03 Education, 04 Experience (Resume section).
- Fonts: Anton (display), DM Sans (body), Space Mono (labels), loaded from Google Fonts in `index.html`.
- Content in `portfolio.ts` is sample/placeholder copy for the owner to replace.
