import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Instrument Serif', ...defaultTheme.fontFamily.serif],
        sans: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        charcoal: {
          DEFAULT: '#2D3436',
          light: '#636E72',
        },
        ink: '#1A1A1A',
        cream: '#FDF8F3',
        'warm-white': '#FFFAF5',
        sand: '#F5EDE4',
        linen: '#EDE4DB',
        terracotta: {
          DEFAULT: '#E07A5F',
          dark: '#C96A52',
          light: '#F4A68D',
        },
        sage: {
          DEFAULT: '#81B29A',
          dark: '#6A9A82',
          light: '#A8D5BA',
        },
        gold: {
          DEFAULT: '#E9C46A',
          dark: '#D4A84B',
        },
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '8px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        'soft-sm': '0 2px 8px rgba(45, 52, 54, 0.06)',
        'soft-md': '0 4px 20px rgba(45, 52, 54, 0.08)',
        'soft-lg': '0 8px 40px rgba(45, 52, 54, 0.12)',
        'soft-xl': '0 16px 60px rgba(45, 52, 54, 0.16)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-left': 'slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-right': 'slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        'float': 'float 4s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
