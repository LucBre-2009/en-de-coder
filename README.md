# EN-DE Coder

**Beschreibung:**
EN-DE Coder ist ein einfacher Encoder/Decoder für Nachrichten mit einer festen Buchstabenverschiebung von 3 (Caesar-Chiffre). Die Webversion läuft komplett clientseitig in HTML, CSS und JavaScript und kann direkt auf GitHub Pages gehostet werden. Sie unterstützt deutsche Umlaute (ä, ö, ü) und Leerzeichen.

---

## Funktionen

* Nachricht **verschlüsseln** (Encode)
* Nachricht **entschlüsseln** (Decode)
* **Neue Eingabe**: Löscht die Textbox und das Ergebnisfeld
* **In Zwischenablage kopieren**: Ergebnis wird direkt kopiert
* **Futuristischer, neutraler Hintergrund** mit heller Mitte für bessere Lesbarkeit

---

## Dateistruktur

```
en-de-coder/
├─ index.html       # Hauptseite
├─ style.css        # Styling der Seite
├─ script.js        # JavaScript für Encoder/Decoder
└─ background.png   # Hintergrundbild
```

---

## Installation / Nutzung

1. Alle Dateien in ein GitHub Repository hochladen.
2. GitHub Pages aktivieren (Branch `main` oder `gh-pages`) → die Seite ist online verfügbar.
3. Im Browser öffnen, z. B.:
   `https://lucbre-2009.github.io/en-de-coder/`
4. Nachricht in das Textfeld eingeben → Encode/Decode klicken → Ergebnis erscheint.
5. Optional: „Neue Eingabe“-Button klicken, um Text und Ergebnis zu löschen.
6. Optional: „In Zwischenablage kopieren“-Button klicken, um den Ergebnistext zu kopieren.

---

## Technologien

* HTML5
* CSS3
* JavaScript (ES6+)

---

## Hintergrund

* Das Hintergrundbild ist dezent, modern und futuristisch gehalten, mit heller Mitte für optimale Lesbarkeit der Eingabe- und Ausgabe-Boxen.
* Keine Serverkomponenten nötig → läuft vollständig im Browser.

---

## Anpassungen

* Alphabet und Verschiebung können in `script.js` geändert werden (`alphabet` und `shift`).
* Styling und Farben können in `style.css` angepasst werden.
* Hintergrundbild kann durch ein eigenes Bild ersetzt werden (`background.png`).

---

## GitHub Pages

1. Repository auf GitHub erstellen oder bestehendes verwenden.
2. Dateien `index.html`, `style.css`, `script.js` und `background.png` hochladen.
3. Unter Repository → Einstellungen → Pages → Branch auswählen (`main` oder `gh-pages`) → Speichern.
4. Die Seite wird automatisch live unter `https://USERNAME.github.io/REPOSITORYNAME/` verfügbar.
