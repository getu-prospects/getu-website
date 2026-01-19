# GeTu Prospects e.V. - Document Templates

## Files

### PDFs (ready to print)
- `Tagesordnung-Mitgliederversammlung-2025.pdf` - German agenda
- `Agenda-Annual-General-Meeting-2025.pdf` - English agenda
- `Anwesenheitsliste-Mitgliederversammlung-2025.pdf` - Attendance list
- `Protokoll-Vorlage.pdf` - Minutes template

### Source files (editable)
- `tagesordnung.html` - German agenda source
- `agenda-english.html` - English agenda source
- `anwesenheitsliste.html` - Attendance list source
- `minutes-template.html` - Minutes template source
- `logo.png` - GeTu logo

## Brand Colors
- Teal: `#2D6A6A`
- Coral: `#E8896B`
- Dark: `#1A1A2E`

## Regenerate PDFs

After editing an HTML file, regenerate the PDF:

```bash
cd ~/code/projects/getu-website/templates

# German agenda
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu --print-to-pdf="Tagesordnung-Mitgliederversammlung-2025.pdf" --no-margins "file://$(pwd)/tagesordnung.html"

# English agenda
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu --print-to-pdf="Agenda-Annual-General-Meeting-2025.pdf" --no-margins "file://$(pwd)/agenda-english.html"

# Attendance list
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu --print-to-pdf="Anwesenheitsliste-Mitgliederversammlung-2025.pdf" --no-margins "file://$(pwd)/anwesenheitsliste.html"

# Minutes template
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu --print-to-pdf="Protokoll-Vorlage.pdf" --no-margins "file://$(pwd)/minutes-template.html"
```

## Notes
- `--no-margins` removes Chrome's default header/footer (file path, page numbers)
- HTML files use Inter font from Google Fonts
- Logo is loaded from local `logo.png` file
