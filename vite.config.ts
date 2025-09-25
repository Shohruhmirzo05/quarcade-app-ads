import { defineConfig } from 'vite';
import { resolve, join } from 'path';
import { copyFileSync, mkdirSync, existsSync } from 'fs';

const rootStaticFiles = ['CNAME', 'app-ads.txt', 'robots.txt', 'sitemap.xml'];

const copyRootStatics = () => ({
  name: 'copy-root-statics',
  closeBundle() {
    const outDir = resolve(__dirname, 'dist');
    mkdirSync(outDir, { recursive: true });

    for (const file of rootStaticFiles) {
      const source = resolve(__dirname, file);
      if (!existsSync(source)) continue;
      const destination = join(outDir, file);
      copyFileSync(source, destination);
    }
  }
});

export default defineConfig({
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
        notFound: resolve(__dirname, '404.html')
      }
    }
  },
  server: {
    open: true
  },
  plugins: [copyRootStatics()]
});
