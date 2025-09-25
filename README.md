# Fera Tech Website

High-polish static marketing site for [fera-tech.com](https://fera-tech.com) built with Vite, Tailwind CSS, and TypeScript.

## Prerequisites

- Node.js 20+
- npm 9+

## Getting Started

```bash
npm ci
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to preview the site during development.

## Build & Preview

```bash
npm run build
npm run preview
```

The build step outputs a static bundle in `dist/` and automatically copies `CNAME`, `app-ads.txt`, `robots.txt`, and `sitemap.xml` so GitHub Pages serves required root files.

## Project Structure

```
.
├── 404.html
├── CNAME
├── app-ads.txt
├── apps/
│   ├── index.html
│   └── quarcade.html
├── assets/
│   ├── favicons/
│   ├── images/
│   └── logos/
├── data/
│   └── apps.json
├── docs/
│   └── site-plan.md
├── privacy/
│   └── index.html
├── support/
│   └── index.html
├── styles.css
├── ts/
│   └── main.ts
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

- `styles.css` holds Tailwind directives and custom component layers. Imported from `ts/main.ts` so Vite emits hashed CSS.
- `data/apps.json` powers both the home page featured section and the apps directory/detail pages.
- `ts/main.ts` wires theme toggling, data-driven rendering, and subtle animations while respecting `prefers-reduced-motion`.

## Deployment

GitHub Pages builds are automated via `.github/workflows/pages.yml`:

1. Install dependencies with `npm ci`.
2. Run `npm run build`.
3. Upload the `dist/` artifact and deploy to the `gh-pages` environment.

Ensure the workflow succeeds after merging to `main` so the production site updates.

## Accessibility & Performance

- Semantic HTML, visible focus states, and high-contrast color palette.
- Dark/light theme toggle that respects `prefers-color-scheme` and persists in `localStorage`.
- Lighthouse targets (mobile): Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.

## Support

- Privacy policy: <https://fera-tech.com/privacy/>
- Support hub: <https://fera-tech.com/support/>
- Required AdMob declaration lives at `/app-ads.txt`.

