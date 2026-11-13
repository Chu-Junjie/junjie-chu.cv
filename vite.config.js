import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'site',
  envDir: '..',
  plugins: [react()],
  base: '/junjie-chu.cv/',
  publicDir: '../.v2-public',
  build: { outDir: '../dist', emptyOutDir: true }
});
