# Ollama Chat Interface

Eine einfache HTML-Webseite zur Kommunikation mit einem Ollama-Server über eine benutzerfreundliche Chat-Oberfläche.

## Features

- **Chat-Interface**: Interaktive Unterhaltung mit Ollama-Modellen
- **Reim-Assistent**: System-Prompt für Antworten in Reimform
- **Festes Modell**: Verwendet standardmäßig `llama3.1:8b`
- **Responsive Design**: Optimiert für Desktop und Mobile


## API-Endpunkte

Die Anwendung nutzt folgende Ollama-API-Endpunkte:

- `POST /api/chat` - Chat-Vervollständigung mit System-Prompt

## Server-Konfiguration

Standard-Server: `https://f2ki-h100-1.f2.htw-berlin.de:11435`
Standard-Modell: `llama3.1:8b`

## Verwendung

1. **Nachricht eingeben**: Geben Sie Ihre Frage in das Textfeld ein
2. **Senden**: 
   - Klicken Sie auf "Chat senden" 
   - Oder drücken Sie Enter (ohne Shift) 
3. **Antwort erhalten**: Der Assistent antwortet in Reimform
4. **Weiterchatten**: Alle Nachrichten bleiben während der Session sichtbar

## Technische Details

### Dateien

- `index.html` - Hauptseite mit Chat-Interface
- `style.css` - Styling und responsive Design
- `script.js` - Haupt-JavaScript für UI und API-Kommunikation
- `README.md` - Diese Dokumentation

### Debugging

Öffnen Sie die Browser-Entwicklertools (F12) um detaillierte Fehlerinformationen zu erhalten.

## Lizenz

MIT License - Freie Verwendung für persönliche und kommerzielle Zwecke.


