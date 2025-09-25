# Fera Tech

Welcome to the Fera Tech project! This repository contains the source code for the Fera Tech website, a modern, high-performance, and accessible static site hosted on GitHub Pages.

## Project Structure

The project is organized as follows:

```
fera-tech
├── CNAME                      # Custom domain for GitHub Pages
├── README.md                  # Project documentation
├── index.html                 # Main landing page
├── 404.html                   # Fallback page for unmatched routes
├── sitemap.xml                # Structured list of site pages for search engines
├── robots.txt                 # Instructions for search engines on crawling
├── app-ads.txt                # Ad verification file
├── manifest.webmanifest       # Metadata for the web app
├── package.json               # Project dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration for building the project
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── css
│   └── tailwind.css           # Tailwind CSS styles
├── ts
│   ├── main.ts                # Main TypeScript code
│   ├── apps.ts                # Fetches and renders app data
│   └── observables.ts         # Helper functions for IntersectionObserver
├── data
│   └── apps.json             # JSON data for apps
├── assets
│   ├── logos
│   │   ├── fera.svg           # Fera Tech logo
│   │   └── quarcade.svg       # QuarCade logo
│   ├── images
│   │   ├── hero.webp          # Hero image for landing page
│   │   ├── quarcade-1.webp    # Screenshot for QuarCade
│   │   ├── quarcade-2.webp    # Screenshot for QuarCade
│   │   └── quarcade-3.webp    # Screenshot for QuarCade
│   └── favicons               # Favicon assets
├── apps
│   ├── index.html             # Apps directory page
│   └── quarcade.html          # QuarCade details page
├── privacy
│   └── index.html             # Privacy policy page
└── support
    └── index.html             # Contact/support page
```

## Setup Instructions

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/fera-tech.git
   cd fera-tech
   ```

2. Install the dependencies:
   ```
   npm i
   ```

3. Build the project:
   ```
   npm run build
   ```

4. Preview the project locally:
   ```
   npm run preview
   ```

## Usage

- The main landing page is located at `index.html`, featuring a hero section, app previews, and a newsletter subscription form.
- The apps directory can be accessed at `apps/index.html`, where you can find a filterable grid of apps.
- Each app has a dedicated details page, such as `apps/quarcade.html`, which includes features and download links.
- The privacy policy can be found at `privacy/index.html`, and support information is available at `support/index.html`.

## Deployment

For GitHub Pages, commit the following files:

- `dist/` (the output directory)
- `CNAME`
- `index.html`
- `404.html`
- `sitemap.xml`
- `robots.txt`
- `app-ads.txt`
- `manifest.webmanifest`
- `css/tailwind.css`
- `assets/` (all assets)
- `apps/` (all app pages)
- `privacy/` (privacy policy page)
- `support/` (support page)

## License

This project is licensed under the MIT License. See the LICENSE file for details.