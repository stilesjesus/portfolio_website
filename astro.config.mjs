import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://stilesjesus.github.io', // Replace stilesjesus with your GitHub username
  base: '/portfolio_website', // Your repo name (remove this line if using custom domain)
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