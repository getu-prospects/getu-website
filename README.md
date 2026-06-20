# GeTu Prospects e.V. Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/1164ec90-14da-4499-a7af-c10d775ac37b/deploy-status?branch=main)](https://app.netlify.com/sites/getu-web/deploys)

Die offizielle Website von GeTu Prospects e.V. - einer gemeinnützigen Organisation, die sich für Bildung, Integration und soziale Unterstützung in Berlin einsetzt.

## 🌐 Live Website

Besuchen Sie uns unter: [https://getu-prospects.de](https://getu-prospects.de)

## 📋 Inhaltsverzeichnis

- [Über das Projekt](#über-das-projekt)
- [Technologie-Stack](#technologie-stack)
- [Erste Schritte](#erste-schritte)
- [Entwicklung](#entwicklung)
- [Projektstruktur](#projektstruktur)
- [Deployment](#deployment)
- [Mitwirken](#mitwirken)
- [Sicherheit](#sicherheit)
- [Lizenz](#lizenz)

## 📚 Weitere Dokumentation

- [Entwicklerleitfaden](docs/DEVELOPMENT.md) - Detaillierte Entwicklungsanleitung
- [Architektur](docs/ARCHITECTURE.md) - Technische Architektur und Designentscheidungen
- [Beitragsrichtlinien](CONTRIBUTING.md) - Wie Sie zum Projekt beitragen können

## 📖 Über das Projekt

Diese Website dient als digitale Präsenz für GeTu Prospects e.V. und bietet:

- Informationen über unsere Mission und Projekte
- Kontaktmöglichkeiten für Interessierte und Hilfesuchende
- Details zu unseren Bildungs- und Integrationsprogrammen
- Möglichkeiten zur Unterstützung und Spenden

### Hauptfunktionen

- **Mehrsprachigkeit**: Unterstützung für Deutsch (weitere Sprachen geplant)
- **Responsive Design**: Optimiert für alle Geräte
- **Barrierefreiheit**: Entwickelt mit Fokus auf Zugänglichkeit
- **Performance**: Schnelle Ladezeiten durch statische Generierung
- **Sicherheit**: Implementierte Sicherheitsheader und CSP

## 🛠 Technologie-Stack

- **Framework**: [Astro](https://astro.build/) v5.1.1
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3.4.17
- **Icons**: [Astro Icon](https://github.com/natemoo-re/astro-icon) mit MDI Icons
- **Hosting**: [Netlify](https://www.netlify.com/)
- **Package Manager**: pnpm (empfohlen) oder npm

## 🚀 Erste Schritte

### Voraussetzungen

- Node.js 18.14.1 oder höher
- pnpm (empfohlen) oder npm

### Installation

1. Repository klonen:
```bash
git clone https://github.com/getu-prospects/getu-website.git
cd getu-website
```

2. Abhängigkeiten installieren:
```bash
pnpm install
# oder
npm install
```

3. Entwicklungsserver starten:
```bash
pnpm dev
# oder
npm run dev
```

Die Website ist nun unter `http://localhost:4321` erreichbar.

## 💻 Entwicklung

### Verfügbare Befehle

| Befehl | Beschreibung |
|--------|--------------|
| `pnpm dev` | Startet den Entwicklungsserver |
| `pnpm build` | Erstellt die Produktionsversion |
| `pnpm preview` | Vorschau der Produktionsversion lokal |
| `pnpm astro ...` | Führt Astro CLI-Befehle aus |

### Entwicklungsrichtlinien

1. **Code-Stil**: Das Projekt verwendet Prettier für konsistente Formatierung
2. **Commits**: Verwenden Sie aussagekräftige Commit-Nachrichten (z.B. `feat:`, `fix:`, `docs:`)
3. **Branches**: Erstellen Sie Feature-Branches vom `main` Branch
4. **Testing**: Testen Sie Ihre Änderungen auf verschiedenen Geräten und Browsern

## 📁 Projektstruktur

```
getu-website/
├── public/              # Statische Assets (Bilder, PDFs)
├── src/
│   ├── assets/         # Bilder und Styles
│   │   ├── images/     # Projektbilder
│   │   └── styles.css  # Globale Styles
│   ├── components/     # Wiederverwendbare Komponenten
│   ├── i18n/          # Internationalisierung
│   ├── layouts/       # Seitenlayouts
│   └── pages/         # Seitenrouten
├── astro.config.mjs   # Astro-Konfiguration
├── tailwind.config.mjs # Tailwind-Konfiguration
├── netlify.toml       # Netlify-Konfiguration & Sicherheitsheader
└── package.json       # Projektabhängigkeiten
```

### Wichtige Dateien

- `src/pages/` - Alle Seiten der Website
- `src/components/` - Wiederverwendbare UI-Komponenten
- `src/layouts/BaseLayout.astro` - Hauptlayout für alle Seiten
- `netlify.toml` - Deployment- und Sicherheitskonfiguration

## 🚢 Deployment

Die Website wird automatisch über Netlify deployed:

1. **Produktions-Deployment**: Jeder Push zum `main` Branch
2. **Preview-Deployments**: Automatisch für Pull Requests

### Manuelle Deployment

```bash
# Build erstellen
pnpm build

# Die generierten Dateien befinden sich im `dist/` Ordner
```

### Umgebungsvariablen

Derzeit werden keine Umgebungsvariablen benötigt. Falls zukünftig welche hinzugefügt werden, dokumentieren Sie diese in einer `.env.example` Datei.

## 🤝 Mitwirken

Wir freuen uns über Beiträge! So können Sie helfen:

1. **Issues melden**: Nutzen Sie den [Issue Tracker](https://github.com/getu-prospects/getu-website/issues)
2. **Code beitragen**:
   - Forken Sie das Repository
   - Erstellen Sie einen Feature-Branch (`git checkout -b feature/AmazingFeature`)
   - Committen Sie Ihre Änderungen (`git commit -m 'Add some AmazingFeature'`)
   - Pushen Sie zum Branch (`git push origin feature/AmazingFeature`)
   - Öffnen Sie einen Pull Request

### Entwicklungsstandards

- Halten Sie sich an die bestehende Codestruktur
- Schreiben Sie aussagekräftige Commit-Nachrichten
- Aktualisieren Sie die Dokumentation bei Bedarf
- Testen Sie Ihre Änderungen gründlich

## 🔒 Sicherheit

### Implementierte Sicherheitsmaßnahmen

- **Security Headers**: X-Frame-Options, X-Content-Type-Options, etc.
- **Content Security Policy (CSP)**: Schutz vor XSS-Angriffen
- **HTTPS**: Automatisch durch Netlify erzwungen
- **Sichere Dependencies**: Regelmäßige Sicherheitsupdates

### Sicherheitslücken melden

Bitte melden Sie Sicherheitslücken vertraulich an: info@getu-prospects.de

## 📄 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert. Weitere Details folgen.

---

**Kontakt**: Bei Fragen oder Anregungen erreichen Sie uns unter info@getu-prospects.de