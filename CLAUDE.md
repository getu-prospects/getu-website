# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro 7 static website for GeTu Prospects e.V., a German non-profit organization. The site is German only and deployed on Cloudflare Workers (static assets).

## Development Commands

```bash
# Install dependencies (uses pnpm)
pnpm install

# Start development server (http://localhost:4321)
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview
```

No test commands are configured in this project.

**Important**: Always assume the development server is already running on http://localhost:4321. You don't need to start it.

## Architecture Overview

The project uses Astro's component-based architecture with the following key patterns:

1. **Page Routes**: Pages in `src/pages/` map directly to routes (e.g., `src/pages/projekte.astro` → `/projekte`)

2. **Layout**: `BaseLayout.astro` is the only layout. It provides the HTML structure, header, footer and global imports. Every page uses it.

3. **Component Organization**:
   - `src/components/` contains reusable UI components
   - Components like `hero-2`, `services`, `projects` are section-specific
   - `Footer` is global; the header lives in `BaseLayout.astro`

4. **Content**: News items are a content collection in `src/content/aktuelles/` (schema in `src/content.config.ts`, Zod from `astro/zod`).

5. **Styling Approach**:
   - Tailwind CSS 4 via `@tailwindcss/vite`; there is no `tailwind.config.mjs`
   - Theme (colors, Manrope font) and custom utilities live in `src/assets/global.css`
   - Component-scoped styles using Astro's `<style>` tags

The site is German only. There is no i18n setup.

## Key Configuration Files

- `astro.config.mjs`: Main Astro configuration (integrations, Vite plugins, `compressHTML: true` to keep HTML-aware whitespace)
- `src/assets/global.css`: Tailwind 4 theme (`@theme`: colors, Manrope font), animation plugin, custom utilities
- `tsconfig.json`: TypeScript configuration extending Astro's strict preset

## Important Patterns

1. **Image Handling**: Images are stored in `src/assets/images/` organized by section. Use Astro's Image component for optimization.

2. **Component Props**: Most components accept props for customization. Check component definitions for available props.

3. **Responsive Design**: The site uses mobile-first responsive design. Test changes across viewport sizes.

4. **Analytics**: Plausible Analytics is integrated. The tracking script is in `BaseLayout.astro`.

## Deployment

Cloudflare Workers Builds deploys the Worker `getu-website` (`wrangler.jsonc`) on pushes to `main`. Other branches get a preview version. Response headers (CSP and other security headers) are in `public/_headers`; add any new external origin to the CSP there.