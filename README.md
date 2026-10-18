# Adrian Proust — Game Design Portfolio

A single-page portfolio for Adrian Proust, Junior Game Designer. It's one long scrolling page with four full-screen sections (Home, Projects, About me, My Resume) and a bold editorial look: huge display type, numbered mono labels and outlined marquee banners between sections.

## Features

- **Query-param routing**: `?Page=Home`, `?Page=Projects`, `?Page=AboutMe` and `?Page=Resume` deep-link to a section. Nav clicks push history and smooth-scroll, and back/forward work.
- **Active nav highlighting** driven by an `IntersectionObserver`.
- **Pure-CSS infinite marquees** with outlined (`-webkit-text-stroke`) display type.
- **Data-driven content**: projects, skills, experience, education and contact info all live in `src/data/portfolio.ts`.
- Responsive project grid with category filters, a vertical experience timeline, and scroll-reveal animations.
- Responsive layouts, and honours `prefers-reduced-motion`.

## Tech

React 19, TypeScript and Vite 7, with plain CSS (one stylesheet per component). Deployed as a static site on Netlify (`dist/`).

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
```

## Editing content

Open `src/data/portfolio.ts` and replace the sample projects, experience, skills and contact details with real ones. Keep `projects` ordered newest first: the home page previews the first `RECENT_PROJECTS_COUNT` entries.
