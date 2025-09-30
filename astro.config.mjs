import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://stiles.engineer', // Custom domain
  integrations: [
    mdx(),
    sitemap(),
    tailwind()
  ],
  output: 'static',
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js']
    }
  }
});