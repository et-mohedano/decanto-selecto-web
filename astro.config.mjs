// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // PENDIENTE: reemplazar por el dominio real antes de publicar (necesario para sitemap.xml y URLs canónicas)
  site: 'https://www.decantoselecto.com',
  integrations: [sitemap(), mdx()],
  vite: {
    plugins: [tailwindcss()]
  }
});