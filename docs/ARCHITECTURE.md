# Projekt-Architektur

## Überblick

Die GeTu Prospects Website ist mit [Astro](https://astro.build/) gebaut, einem modernen Static Site Generator, der optimale Performance und Developer Experience bietet.

## Tech Stack Details

### Frontend Framework: Astro

**Warum Astro?**
- **Zero JavaScript by default**: Sendet nur notwendiges JavaScript an den Client
- **Component Islands**: Interaktive Komponenten nur wo nötig
- **Statische Generierung**: Schnelle Ladezeiten und SEO-optimiert
- **Framework-agnostisch**: Kann mit React, Vue, Svelte etc. erweitert werden

### Styling: Tailwind CSS

**Konfiguration** (`tailwind.config.mjs`):
```javascript
{
  theme: {
    extend: {
      colors: {
        primary: '#385656',    // Dunkelgrün
        secondary: '#F59E0B',  // Orange
        // weitere Custom-Farben
      }
    }
  }
}
```

### Icons: Astro Icon mit MDI

Verwendung:
```astro
---
import { Icon } from 'astro-icon/components';
---

<Icon name="mdi:email-outline" class="text-orange" />
```

## Projektstruktur im Detail

```
src/
├── assets/
│   ├── images/          # Optimierte Bilder
│   ├── global.css       # Globale Styles
│   └── styles.css       # Component-spezifische Styles
├── components/
│   ├── Nav.astro        # Hauptnavigation
│   ├── Footer.astro     # Footer-Komponente
│   ├── Container.astro  # Layout-Container
│   └── ...              # Weitere UI-Komponenten
├── i18n/
│   ├── index.ts         # i18n Utilities
│   └── translations.ts  # Übersetzungen
├── layouts/
│   ├── BaseLayout.astro # Haupt-Layout
│   └── SiteLayout.astro # Seiten-spezifisches Layout
└── pages/
    ├── index.astro      # Startseite
    ├── kontakt.astro    # Kontaktseite
    └── ...              # Weitere Seiten
```

## Komponenten-Architektur

### Layout-Hierarchie

```
BaseLayout.astro
  └── SiteLayout.astro
      ├── Nav.astro
      ├── [Page Content]
      └── Footer.astro
```

### Component Patterns

1. **Container Component**:
   ```astro
   ---
   const { class: className } = Astro.props;
   ---
   <div class={`container mx-auto px-4 ${className}`}>
     <slot />
   </div>
   ```

2. **Section Components**:
   - Wiederverwendbare Sektionen mit konsistentem Spacing
   - Props für Customization

3. **Utility Components**:
   - Button.astro
   - CallToAction.astro
   - SectionHeader.astro

## Routing

Astro verwendet dateibasiertes Routing:

```
src/pages/
├── index.astro        → /
├── kontakt.astro      → /kontakt
├── projekte.astro     → /projekte
└── projekte/
    └── [projekt].astro → /projekte/weihnachtsaktion
```

## Internationalisierung (i18n)

### Setup

```typescript
// src/i18n/index.ts
export function useTranslations(lang: string) {
  return function t(key: string) {
    return translations[lang]?.[key] || key;
  }
}
```

### Verwendung

```astro
---
const t = useTranslations('de');
---

<h1>{t('nav.home')}</h1>
```

## Asset-Handling

### Bilder

1. **Statische Bilder** in `public/`:
   - Direkt referenzierbar
   - Keine Optimierung

2. **Optimierte Bilder** in `src/assets/images/`:
   ```astro
   ---
   import heroImage from '../assets/images/hero.jpg';
   ---
   <img src={heroImage.src} alt="Hero" />
   ```

### Fonts

Google Fonts werden über CDN geladen:
```html
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
```

## Build-Prozess

1. **Development**: `astro dev`
   - Hot Module Replacement
   - Localhost:4321

2. **Production Build**: `astro build`
   - Statische HTML-Generierung
   - Asset-Optimierung
   - Output in `dist/`

3. **Preview**: `astro preview`
   - Production-Build lokal testen

## Performance-Optimierungen

1. **Lazy Loading**: Bilder mit `loading="lazy"`
2. **Kritisches CSS**: Inline im Head
3. **Prefetching**: Für interne Links
4. **Compression**: Automatisch via Netlify

## Sicherheit

1. **CSP Headers**: In `netlify.toml` definiert
2. **HTTPS**: Erzwungen durch Netlify
3. **Sichere Forms**: Netlify Forms mit Spam-Schutz

## Deployment

### Netlify-Integration

```toml
# netlify.toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    # weitere Security Headers
```

### Build-Einstellungen

- **Build Command**: `pnpm build`
- **Publish Directory**: `dist`
- **Node Version**: 18.x