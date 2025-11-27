import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindMotion from 'tailwindcss-animated';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
        display: ['Playfair Display', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        body: 'var(--color-text-body)',
        deepgreen: 'var(--color-deep-green)',
        warmth: 'var(--color-warmth)',
        'warmth-medium': 'var(--color-warmth-medium)',
        'secondary-soft': 'var(--color-secondary-soft)',
        cream: 'var(--color-cream)',
        sand: 'var(--color-sand)',
      },
    },
  },
  plugins: [tailwindMotion],
};
