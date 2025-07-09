# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based static website for GeTu Prospects e.V., a German non-profit organization. The site is bilingual (German/English) and deployed on Netlify.

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

2. **Layout Hierarchy**: 
   - `BaseLayout.astro` provides the HTML structure and global imports
   - `SiteLayout.astro` wraps content with navigation and footer
   - Pages extend these layouts for consistent structure

3. **Component Organization**:
   - `src/components/` contains reusable UI components
   - Components like `HeroSection`, `AboutUs`, `Services` are section-specific
   - `Navigation` and `Footer` are global components

4. **Internationalization**: 
   - Translation setup exists in `src/i18n/` but is currently disabled in config
   - To enable: uncomment the i18n section in `astro.config.mjs`

5. **Styling Approach**:
   - Tailwind CSS for utility classes
   - Custom CSS variables defined in `src/assets/global.css`
   - Component-scoped styles using Astro's `<style>` tags

## Key Configuration Files

- `astro.config.mjs`: Main Astro configuration (integrations, i18n settings)
- `tailwind.config.mjs`: Custom theme colors, fonts (Manrope), animation plugin
- `tsconfig.json`: TypeScript configuration extending Astro's strict preset

## Important Patterns

1. **Image Handling**: Images are stored in `src/assets/images/` organized by section. Use Astro's Image component for optimization.

2. **Component Props**: Most components accept props for customization. Check component definitions for available props.

3. **Responsive Design**: The site uses mobile-first responsive design. Test changes across viewport sizes.

4. **Analytics**: Plausible Analytics is integrated. The tracking script is in `BaseLayout.astro`.

## Deployment

The site auto-deploys to Netlify on pushes to the main branch. Check the deployment status badge in README.md before making significant changes.