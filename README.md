# Ollama Chat Interface

Eine einfache HTML-Webseite zur Kommunikation mit einem Ollama-Server über eine benutzerfreundliche Chat-Oberfläche.

## Features

- **Chat-Interface**: Interaktive Unterhaltung mit Ollama-Modellen
- **Reim-Assistent**: System-Prompt für Antworten in Reimform
- **Festes Modell**: Verwendet standardmäßig `llama3.1:8b`
- **Responsive Design**: Optimiert für Desktop und Mobile
- **Moderne UI**: Glasmorphismus-Design mit sanften Animationen
- **Einfache Bedienung**: Minimalistisches Interface ohne Ablenkungen

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

### Funktionalitäten

- **Asynchrone API-Calls**: Alle Server-Anfragen sind asynchron
- **Fehlerbehandlung**: Umfassende Fehlerbehandlung und Benutzer-Feedback
- **Responsive Design**: Optimiert für verschiedene Bildschirmgrößen
- **Accessibility**: Tastaturnavigation und semantisches HTML
- **Session-basiert**: Chat-Verlauf bleibt während der Browser-Session erhalten
- **System-Prompt**: Konfigurierter Assistent für Reim-Antworten

### Browser-Unterstützung

- Chrome/Edge 80+
- Firefox 75+
- Safari 13+

## Entwicklung

### Lokaler Server

Für die Entwicklung können Sie einen lokalen HTTP-Server verwenden:

```bash
# Python 3
python -m http.server 8000

# Node.js (mit http-server)
npx http-server

# PHP
php -S localhost:8000
```

### CORS-Konfiguration

Falls CORS-Probleme auftreten, stellen Sie sicher, dass der Ollama-Server entsprechend konfiguriert ist oder verwenden Sie einen lokalen Proxy.

## Fehlerbehebung

### Häufige Probleme

1. **Keine Antwort**: Überprüfen Sie die Serververbindung
2. **CORS-Fehler**: Möglicherweise ist ein Proxy erforderlich
3. **Modell nicht verfügbar**: Überprüfen Sie die Modell-Verfügbarkeit auf dem Server
4. **Leere Nachricht**: Geben Sie eine Nachricht ein bevor Sie senden

### Debugging

Öffnen Sie die Browser-Entwicklertools (F12) um detaillierte Fehlerinformationen zu erhalten.

## Lizenz

MIT License - Freie Verwendung für persönliche und kommerzielle Zwecke.

### Code-Architektur

- **Einfacher Aufbau**: Alle Funktionalitäten in einer Datei
- **Fokussiert**: Nur Chat-Funktionalität ohne zusätzliche Features
- **Wartbar**: Klarer, verständlicher Code
- **Erweiterbar**: Einfach zu modifizieren und zu erweitern
