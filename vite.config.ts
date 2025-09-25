import { defineConfig } from 'vite';
import { resolve } from 'path';

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
      },
    },
  },
  server: {
    open: true,
  },
  plugins: [],
});