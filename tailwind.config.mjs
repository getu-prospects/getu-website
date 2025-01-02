import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindMotion from 'tailwindcss-animated';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        body: 'var(--color-text-body)',
        deepgreen: 'var(--color-deep-green)',
      },
    },
  },
  plugins: [tailwindMotion],
};
