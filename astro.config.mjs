// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://getu-prospects.de',
  compressHTML: true,
  // i18n: {
  //   locales: ['de', 'en'],
  //   defaultLocale: 'de',
  //   fallback: {
  //     en: 'de',
  //   },
  // },
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
