// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // i18n: {
  //   locales: ['de', 'en'],
  //   defaultLocale: 'de',
  //   fallback: {
  //     en: 'de',
  //   },
  // },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
  ],
});
