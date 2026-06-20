# Entwicklerleitfaden

Dieser Leitfaden bietet detaillierte Informationen für Entwickler, die an der GeTu Prospects Website arbeiten.

## 🚀 Schnellstart

```bash
# Repository klonen
git clone https://github.com/getu-prospects/getu-website.git
cd getu-website

# Dependencies installieren
pnpm install

# Entwicklungsserver starten
pnpm dev
```

## 🛠 Entwicklungsumgebung

### Empfohlene Tools

1. **VS Code** mit folgenden Extensions:
   - Astro
   - Tailwind CSS IntelliSense
   - Prettier
   - ESLint
   - GitLens

2. **Browser DevTools**:
   - Chrome DevTools für Debugging
   - React Developer Tools (falls React-Komponenten verwendet werden)

### VS Code Einstellungen

`.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[astro]": {
    "editor.defaultFormatter": "astro-build.astro-vscode"
  },
  "tailwindCSS.includeLanguages": {
    "astro": "html"
  }
}
```

## 📁 Arbeiten mit Komponenten

### Neue Komponente erstellen

1. Erstellen Sie die Datei in `src/components/`:
```astro
---
// MyComponent.astro
interface Props {
  title: string;
  variant?: 'primary' | 'secondary';
}

const { title, variant = 'primary' } = Astro.props;
---

<div class={`component ${variant}`}>
  <h2>{title}</h2>
  <slot />
</div>

<style>
  .component {
    /* Komponentenspezifische Styles */
  }
</style>
```

2. Komponente verwenden:
```astro
---
import MyComponent from '../components/MyComponent.astro';
---

<MyComponent title="Mein Titel" variant="secondary">
  <p>Inhalt hier</p>
</MyComponent>
```

### Best Practices für Komponenten

1. **Single Responsibility**: Jede Komponente sollte eine klare Aufgabe haben
2. **Props Interface**: Definieren Sie TypeScript Interfaces für Props
3. **Slot Usage**: Nutzen Sie Slots für flexible Inhalte
4. **Styling**: Bevorzugen Sie Tailwind-Klassen

## 🎨 Styling-Richtlinien

### Tailwind CSS Verwendung

1. **Utility-First**:
```astro
<!-- Gut -->
<div class="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">

<!-- Vermeiden -->
<div class="custom-card">
```

2. **Responsive Design**:
```astro
<div class="text-sm md:text-base lg:text-lg">
  <!-- Mobile-first approach -->
</div>
```

3. **Custom Utilities**:
```css
/* src/assets/global.css */
@layer utilities {
  .hover-lift {
    @apply transition-transform hover:-translate-y-1;
  }
}
```

### Farben und Theming

Verwenden Sie die definierten Farben aus `tailwind.config.mjs`:

- `primary`: Hauptfarbe (Dunkelgrün)
- `secondary`: Akzentfarbe (Orange)
- `tp-grey-1`: Hintergrundgrau
- `body`: Textfarbe

## 📄 Neue Seite hinzufügen

1. Erstellen Sie die Datei in `src/pages/`:
```astro
---
// src/pages/neue-seite.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import Container from '../components/Container.astro';
---

<BaseLayout title="Neue Seite - GeTu Prospects">
  <Container>
    <h1>Neue Seite</h1>
    <!-- Seiteninhalt -->
  </Container>
</BaseLayout>
```

2. Navigation aktualisieren in `src/components/Nav.astro`

## 🌐 Internationalisierung

### Neue Übersetzung hinzufügen

1. Öffnen Sie `src/i18n/translations.ts`:
```typescript
export const translations = {
  de: {
    'new.key': 'Deutscher Text',
    // ...
  },
  en: {
    'new.key': 'English text',
    // ...
  }
};
```

2. Verwenden Sie die Übersetzung:
```astro
---
const t = useTranslations(lang);
---

<p>{t('new.key')}</p>
```

## 🖼 Bilder-Management

### Bilder hinzufügen

1. **Optimierte Bilder** (empfohlen):
   - Speichern in `src/assets/images/`
   - Import und Verwendung:
   ```astro
   ---
   import myImage from '../assets/images/my-image.jpg';
   ---
   <img src={myImage.src} alt="Beschreibung" />
   ```

2. **Statische Bilder**:
   - Speichern in `public/`
   - Direkte Referenz:
   ```astro
   <img src="/my-image.jpg" alt="Beschreibung" />
   ```

### Bildoptimierung

- Verwenden Sie WebP-Format wo möglich
- Komprimieren Sie Bilder vor dem Upload
- Nutzen Sie responsive Bilder mit `srcset`

## 🧪 Testing

### Manuelle Tests

1. **Browser-Kompatibilität**:
   - Chrome (neueste Version)
   - Firefox (neueste Version)
   - Safari (neueste Version)
   - Edge (neueste Version)

2. **Responsive Design**:
   - Mobile: 320px - 768px
   - Tablet: 768px - 1024px
   - Desktop: 1024px+

3. **Barrierefreiheit**:
   - Keyboard-Navigation
   - Screen Reader Tests
   - Farbkontrast-Prüfung

### Automatisierte Checks

```bash
# Lighthouse CI (Performance, A11y, SEO)
npm install -g @lhci/cli
lhci autorun

# Build testen
pnpm build
pnpm preview
```

## 🐛 Debugging

### Häufige Probleme

1. **Build-Fehler**:
   ```bash
   # Cache löschen
   rm -rf .astro dist node_modules
   pnpm install
   pnpm build
   ```

2. **Styling-Probleme**:
   - Prüfen Sie Tailwind-Konfiguration
   - Browser-Cache leeren
   - DevTools für CSS-Debugging nutzen

3. **Komponenten-Fehler**:
   - Props-Typen prüfen
   - Import-Pfade verifizieren
   - Astro-Syntax validieren

### Debug-Logging

```astro
---
// Entwicklung only
if (import.meta.env.DEV) {
  console.log('Debug:', someVariable);
}
---
```

## 📦 Dependencies verwalten

### Neue Dependency hinzufügen

```bash
# Production dependency
pnpm add package-name

# Dev dependency
pnpm add -D package-name
```

### Security Updates

```bash
# Vulnerabilities prüfen
pnpm audit

# Updates installieren
pnpm update
```

## 🔧 Build-Optimierung

### Performance-Tipps

1. **Lazy Loading**:
   ```astro
   <img src="..." loading="lazy" />
   ```

2. **Code Splitting**:
   - Astro handhabt dies automatisch
   - Große Komponenten bei Bedarf dynamisch laden

3. **Asset-Optimierung**:
   - Bilder komprimieren
   - Fonts subsetten
   - Unnötige Dependencies entfernen

## 📝 Code-Qualität

### Prettier-Konfiguration

`.prettierrc`:
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "plugins": ["prettier-plugin-astro"]
}
```

### Code-Review-Checkliste

- [ ] Code folgt den Style Guidelines
- [ ] Keine console.logs im Production-Code
- [ ] Komponenten sind wiederverwendbar
- [ ] Performance-Auswirkungen berücksichtigt
- [ ] Barrierefreiheit getestet
- [ ] Responsive Design funktioniert

## 🚀 Deployment-Vorbereitung

### Pre-Deployment Checklist

1. **Code-Qualität**:
   ```bash
   pnpm prettier --check .
   pnpm build
   ```

2. **Testing**:
   - Alle Seiten lokal testen
   - Forms überprüfen
   - Links validieren

3. **Performance**:
   - Lighthouse Score > 90
   - Ladezeit < 3 Sekunden

4. **SEO**:
   - Meta-Tags aktuell
   - Sitemap generiert
   - robots.txt konfiguriert