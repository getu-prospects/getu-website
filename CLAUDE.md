# getu-website

Astro static site for GeTu Prospects e.V. Bilingual (DE/EN), deployed on Netlify.

## Commands

```bash
pnpm install    # Install dependencies
pnpm dev        # Dev server (localhost:4321)
pnpm build      # Production build
pnpm preview    # Preview build
```

**Dev server assumed running.** No test commands configured.

## Architecture

```
src/
├── pages/           # Routes (projekte.astro → /projekte)
├── components/      # Reusable UI components
├── layouts/
│   ├── BaseLayout.astro   # HTML structure
│   └── SiteLayout.astro   # Nav + Footer wrapper
├── i18n/            # Translations (disabled in config)
└── assets/
    ├── images/      # By section
    └── global.css   # CSS variables
```

## Key Patterns

- **Layouts**: BaseLayout → SiteLayout → Page
- **Images**: `src/assets/images/` + Astro Image component
- **Styling**: Tailwind + component-scoped `<style>` tags
- **i18n**: Exists but disabled. Enable in `astro.config.mjs`

## Config Files

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Integrations, i18n |
| `tailwind.config.mjs` | Colors, fonts (Manrope) |
| `tsconfig.json` | TypeScript strict preset |

## Notes

- Mobile-first responsive
- Plausible Analytics in BaseLayout
- Auto-deploys to Netlify on main branch
