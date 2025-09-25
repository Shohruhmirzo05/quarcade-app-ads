# Fera Tech Site Plan

_Last updated: 2025-09-25 16:05 +05_

## 1. Site Map

| Route | Purpose | Notes |
| --- | --- | --- |
| `/` | Home | Hero, featured apps, value props, newsletter CTA, global nav + theme toggle |
| `/apps/` | Apps directory | Filterable/searchable grid sourced from `data/apps.json` |
| `/apps/quarcade.html` | App detail | Deep dive for QuarCade with screenshots, features, store button |
| `/privacy/` | Privacy policy | Existing content with improved typography + anchor navigation |
| `/support/` | Support hub | Contact info, FAQs, links back to Apps + Privacy |
| `/404.html` | Not found | Friendly error, nav link home |
| `/app-ads.txt` | AdMob declaration | Must stay at root and deploy verbatim |

## 2. Data Source

- `data/apps.json` (creates/maintains list of app metadata).
  - Fields: `id`, `name`, `icon`, `blurb`, `link`, `featured`, plus optional store/support/privacy URLs and screenshot list.
  - Home + Apps pages consume this JSON via TypeScript to render cards and featured spots.
  - Detail pages can hydrate from JSON when IDs match, allowing future automation for new apps.

## 3. Styling Pipeline

- **Option A (implemented)**: Import `styles.css` (containing Tailwind directives and custom utilities) directly in `ts/main.ts`.
  - Vite generates a single hashed CSS asset referenced by each HTML entry.
  - All legacy `<link href="/css/tailwind.css">` tags removed to prevent 404s.
- Tailwind content globs include `index.html`, `/apps/`, `/privacy/`, `/support/`, `/404.html`, and all `ts/**/*.ts` so class purging stays accurate.
- Additional component classes are added via `@layer` utilities in `styles.css` when needed (e.g., gradients, glassmorphism).

## 4. Animation & Motion Guidelines

- Use CSS `transform` + `opacity` transitions only; avoid layout thrashers.
- Respect `prefers-reduced-motion: reduce` by disabling reveal animations + gradient movement.
- Subtle parallax or fade-ins allowed when GPU-friendly.

## 5. Accessibility & SEO Checklist

- Semantic headings (only one `h1` per page) and ordered hierarchy.
- Keyboard-visible focus states, accessible nav labels, `aria-current` for active links.
- Color contrast AA+ for both light and dark themes (checked via Tailwind palette choices).
- Provide `alt` text for all meaningful images/icons.
- Ensure theme toggle is a `<button>` with descriptive text (no reliance on icon only).
- Meta tags for description, OG/Twitter image, canonical URL per page.
- `lang="en"` on `<html>`, viewport meta consistent.
- Lighthouse (mobile) targets: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.

## 6. Build & Deploy Flow

1. `npm ci`
2. `npm run build`
3. Postbuild script copies `CNAME` + `app-ads.txt` + `robots.txt` + `sitemap.xml` + other root static files into `dist/`.
4. GitHub Actions workflow (`.github/workflows/pages.yml`) runs on push to `main`/PR, builds with Node 20, caches npm, uploads `dist` artifact, and deploys to GitHub Pages.
5. Pages configured with custom domain `fera-tech.com`; `CNAME` included in artifact to preserve mapping.

## 7. Definition of Done

- ✅ `npm ci && npm run build`
- ✅ `dist/` contains processed Tailwind CSS, hashed JS, `CNAME`, `app-ads.txt`, `robots.txt`, `sitemap.xml`, and HTML entries.
- ✅ GitHub Pages workflow succeeds; production site at `https://fera-tech.com` reflects latest content/styles.
- ✅ Home, Apps list, QuarCade detail, Privacy, Support, 404, and `app-ads.txt` routes load with no broken links/images.
- ✅ Theme toggle persists user choice in `localStorage` and respects initial `prefers-color-scheme`.
- ✅ Lighthouse (mobile) meets target scores.
- ✅ Accessibility checks (keyboard navigation, focus states, aria labels) pass.
- ✅ All SEO meta/OG/Twitter tags present per page.

