# Documenti per le News - Battello di Pace 2025

Questa cartella contiene i file PDF, immagini e altri documenti allegati alle news del Battello di Pace.

> **Nota**: Ogni sottocartella contiene file di esempio (.txt) che dovrebbero essere sostituiti con i documenti reali dell'evento.

## Struttura completa creata:

```
/public/documents/
├── press/                 # Comunicati stampa e materiali per media
├── adesioni/             # Documenti per adesioni organizzazioni/cittadini
├── materiali/            # Locandine, volantini, materiali promozionali
├── organizzazione/       # Programmi, orari, logistica evento
├── raccolta-fondi/       # Materiali per raccolta fondi Emergency/MSF
├── multimedia/           # Video, audio, foto, contenuti multimediali
└── presidios/           # Documenti specifici per ogni presidio
    ├── angera/          # Materiali specifici presidio Angera
    ├── arona/           # Materiali specifici presidio Arona
    ├── baveno/          # Materiali specifici presidio Baveno
    └── verbania/        # Materiali specifici presidio Verbania Intra
```

## Come linkare i file nelle news:

Nel file `/utils/newsDataInline.ts`, usa il percorso relativo:

```typescript
materiali: [
  {
    nome: "Locandina evento",
    url: "/documents/materiali/locandina-evento.pdf",
    tipo: "PDF"
  }
]
```

## Tipi di file supportati:

### Documenti
- **PDF** - Documenti ufficiali, moduli, comunicati
- **DOC/DOCX** - Documenti Word modificabili

### Immagini  
- **PNG, JPG, JPEG** - Foto, locandine, materiali grafici
- **WebP** - Immagini ottimizzate per web

### Multimedia
- **MP4, WebM** - Video promozionali
- **MP3, WAV** - Audio, podcast, interviste

## Esempi di utilizzo per ogni cartella:

### Press
- `comunicato-stampa-lancio-evento.pdf`
- `foto-stampa-alta-risoluzione.zip`

### Adesioni  
- `modulo-adesione-organizzazioni.pdf`
- `modulo-adesione-cittadini.pdf`

### Materiali
- `locandina-ufficiale-2025.pdf`
- `volantino-promozionale.pdf`

### Organizzazione
- `programma-completo-11-ottobre.pdf`
- `mappa-punti-ritrovo.pdf`

### Raccolta Fondi
- `info-emergency-progetti.pdf`
- `info-medici-senza-frontiere.pdf`

### Presidios
- `presidios/angera/mappa-ritrovo-angera.pdf`
- `presidios/arona/contatti-organizzatori-arona.pdf`

### Multimedia
- `video-promo-battello-pace-2025.mp4`
- `galleria-foto-evento-precedente.zip`