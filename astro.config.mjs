import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cartransportwithpersonalitems.com.au',
  integrations: [
    sitemap(),
  ],
});
