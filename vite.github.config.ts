import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import { defineConfig } from 'vite';

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'ii-elita-landing';

export default defineConfig({
  root: path.join(rootDir, 'github'),
  base: process.env.GITHUB_ACTIONS ? `/${repositoryName}/` : '/',
  publicDir: path.join(rootDir, 'public'),
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [react()],
  resolve: { alias: { '@': rootDir } },
  build: {
    outDir: path.join(rootDir, 'github-dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.join(rootDir, 'github/index.html'),
        short: path.join(rootDir, 'github/short/index.html'),
        nov: path.join(rootDir, 'github/nov/index.html'),
        ...(!process.env.GITHUB_ACTIONS ? {
          presentation: path.join(rootDir, 'github/presentation/index.html'),
          presentationDark: path.join(rootDir, 'github/presentation-dark/index.html'),
          presentationFresh: path.join(rootDir, 'github/presentation-fresh/index.html'),
        } : {}),
        pro: path.join(rootDir, 'github/pro/index.html'),
        pro1day: path.join(rootDir, 'github/pro1day/index.html'),
        pro2day: path.join(rootDir, 'github/pro2day/index.html'),
      },
    },
  },
});
