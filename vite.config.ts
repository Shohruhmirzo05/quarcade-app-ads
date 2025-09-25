import { defineConfig } from 'vite';
import { resolve, join } from 'node:path';
import { copyFileSync, mkdirSync, existsSync } from 'node:fs';

const rootStaticFiles = ['CNAME', 'app-ads.txt', 'robots.txt', 'sitemap.xml'];

const copyRootStatics = () => ({
  name: 'copy-root-statics',
  closeBundle() {
    const outDir = resolve(__dirname, 'dist');
    mkdirSync(outDir, { recursive: true });
    for (const file of rootStaticFiles) {
      const from = resolve(__dirname, file);
      if (!existsSync(from)) continue;
      copyFileSync(from, join(outDir, file));
    }
  },
});

export default defineConfig({
  base: '/',              // important for fera-tech.com
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        apps: resolve(__dirname, 'apps/index.html'),
        quarcade: resolve(__dirname, 'apps/quarcade.html'),
        privacy: resolve(__dirname, 'privacy/index.html'),
        support: resolve(__dirname, 'support/index.html'),
        notFound: resolve(__dirname, '404.html'),
      },
    },
  },
  server: { open: true },
  plugins: [copyRootStatics()],
});
