// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://jhonyspicy.github.io',
  base: '/gardener-sample',
  integrations: [
    tailwind(),
  ],
  server: {
    port: 8089
  }
});
