// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://jhonyspicy.github.io',
  integrations: [
    tailwind(),
  ],
  server: {
    port: 8089
  },
  base: process.env.NODE_ENV === 'production' 
    ? '/gardener-sample'  // 本番環境（GitHub Pages）用のパス
    : ''                  // ローカル環境用のパス
});
