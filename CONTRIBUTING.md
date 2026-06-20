# Beitragen zu GeTu Prospects Website

Vielen Dank für Ihr Interesse, zur GeTu Prospects Website beizutragen! Dieses Dokument bietet Richtlinien und Best Practices für Beiträge.

## 📋 Inhaltsverzeichnis

- [Code of Conduct](#code-of-conduct)
- [Wie kann ich beitragen?](#wie-kann-ich-beitragen)
- [Entwicklungsprozess](#entwicklungsprozess)
- [Style Guidelines](#style-guidelines)
- [Commit-Richtlinien](#commit-richtlinien)
- [Pull Request Prozess](#pull-request-prozess)

## 📜 Code of Conduct

Wir verpflichten uns, eine offene und einladende Umgebung zu schaffen. Bitte beachten Sie:

- Seien Sie respektvoll und inklusiv
- Akzeptieren Sie konstruktive Kritik
- Fokussieren Sie sich auf das Beste für die Community
- Zeigen Sie Empathie gegenüber anderen

## 🤔 Wie kann ich beitragen?

### Bugs melden

1. **Prüfen Sie bestehende Issues**: Schauen Sie, ob das Problem bereits gemeldet wurde
2. **Erstellen Sie einen detaillierten Bug Report** mit:
   - Klarer, beschreibender Titel
   - Schritte zur Reproduktion
   - Erwartetes vs. tatsächliches Verhalten
   - Screenshots (falls relevant)
   - Browser/OS Information

### Feature Requests

1. **Prüfen Sie die Roadmap**: Schauen Sie, ob das Feature bereits geplant ist
2. **Erstellen Sie einen Feature Request** mit:
   - Klare Problembeschreibung
   - Vorgeschlagene Lösung
   - Alternative Ansätze
   - Mockups/Wireframes (optional)

### Code-Beiträge

1. **Kleine Änderungen**: Direkte Pull Requests sind willkommen
2. **Größere Features**: Erstellen Sie zuerst ein Issue zur Diskussion

## 🔧 Entwicklungsprozess

### 1. Setup

```bash
# Repository forken und klonen
git clone https://github.com/YOUR-USERNAME/getu-website.git
cd getu-website

# Upstream remote hinzufügen
git remote add upstream https://github.com/getu-prospects/getu-website.git

# Dependencies installieren
pnpm install
```

### 2. Branch erstellen

```bash
# Aktuellen main Branch holen
git checkout main
git pull upstream main

# Feature-Branch erstellen
git checkout -b feature/ihre-feature-beschreibung
# oder
git checkout -b fix/issue-nummer-beschreibung
```

### 3. Entwickeln

```bash
# Entwicklungsserver starten
pnpm dev

# Änderungen vornehmen und testen
# ...

# Code formatieren
pnpm prettier --write .
```

### 4. Testen

- Testen Sie auf verschiedenen Browsern (Chrome, Firefox, Safari, Edge)
- Prüfen Sie die Responsive-Ansicht
- Validieren Sie die Barrierefreiheit
- Überprüfen Sie die Performance

## 🎨 Style Guidelines

### Code-Stil

1. **Astro-Komponenten**:
   ```astro
   ---
   // Imports zuerst
   import Component from './Component.astro';
   
   // Props-Interface
   interface Props {
     title: string;
   }
   
   // Props destrukturieren
   const { title } = Astro.props;
   ---
   
   <div class="component">
     <h2>{title}</h2>
   </div>
   ```

2. **CSS/Tailwind**:
   - Verwenden Sie Tailwind-Klassen wo möglich
   - Benutzerdefiniertes CSS nur wenn nötig
   - Mobile-first Ansatz

3. **Namenskonventionen**:
   - Komponenten: PascalCase (z.B. `HeroSection.astro`)
   - Dateien: kebab-case (z.B. `about-us.astro`)
   - CSS-Klassen: kebab-case

### Barrierefreiheit

- Verwenden Sie semantisches HTML
- Fügen Sie Alt-Texte für Bilder hinzu
- Stellen Sie ausreichenden Farbkontrast sicher
- Testen Sie mit Screenreadern

## 📝 Commit-Richtlinien

Wir folgen den [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: Neue Features
- `fix`: Bugfixes
- `docs`: Dokumentationsänderungen
- `style`: Formatierung, fehlende Semikolons, etc.
- `refactor`: Code-Umstrukturierung
- `perf`: Performance-Verbesserungen
- `test`: Tests hinzufügen oder korrigieren
- `chore`: Wartungsaufgaben

### Beispiele

```bash
feat(navigation): add mobile menu toggle
fix(contact): correct form validation error
docs: update README with new setup instructions
style: format code with prettier
```

## 🚀 Pull Request Prozess

1. **Vor dem PR**:
   - Aktualisieren Sie Ihren Branch mit dem neuesten main
   - Lösen Sie alle Konflikte
   - Testen Sie Ihre Änderungen gründlich

2. **PR erstellen**:
   - Verwenden Sie einen beschreibenden Titel
   - Referenzieren Sie relevante Issues (`Fixes #123`)
   - Fügen Sie eine detaillierte Beschreibung hinzu
   - Fügen Sie Screenshots für UI-Änderungen hinzu

3. **PR-Template**:
   ```markdown
   ## Beschreibung
   Kurze Beschreibung der Änderungen

   ## Art der Änderung
   - [ ] Bugfix
   - [ ] Neues Feature
   - [ ] Breaking Change
   - [ ] Dokumentation

   ## Checkliste
   - [ ] Code folgt den Style Guidelines
   - [ ] Selbst-Review durchgeführt
   - [ ] Tests durchgeführt
   - [ ] Dokumentation aktualisiert
   ```

4. **Nach dem PR**:
   - Reagieren Sie auf Feedback
   - Nehmen Sie angeforderte Änderungen vor
   - Halten Sie den PR aktuell

## ❓ Fragen?

Bei Fragen oder Unsicherheiten:

1. Schauen Sie in die [Dokumentation](README.md)
2. Erstellen Sie ein Issue mit dem Label "question"
3. Kontaktieren Sie uns: info@getu-prospects.de

---

Vielen Dank für Ihre Unterstützung! Gemeinsam machen wir die GeTu Prospects Website besser. 🎉