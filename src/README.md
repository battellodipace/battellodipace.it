# Battello di Pace 2025 - Sito Web

Sito web per l'evento "Battello di Pace" dell'11 ottobre 2025 sul Lago Maggiore con presidi ad Angera, Arona, Baveno e Verbania Intra.

## Come modificare le news

Le news del sito sono gestite tramite dati inline tipizzati per garantire stabilità e type safety.

### File da modificare

Per aggiungere, modificare o rimuovere news, edita il file:
```
/utils/newsDataInline.ts
```

### Struttura di una news

```typescript
{
  id: number,              // ID univoco progressivo
  data: "YYYY-MM-DD",      // Data in formato ISO (es: "2025-09-29")
  titolo: "Titolo news",   // Titolo della news
  contenuto: "Testo...",   // Contenuto descrittivo
  categoria: "Categoria",  // Vedi categorie disponibili sotto
  link?: "https://...",    // Link esterno (opzionale)
  materiali: [             // Array di materiali allegati
    {
      nome: "Nome file",
      url: "#",             // URL del file o # per placeholder
      tipo: "PDF"           // Tipo file: PDF, PNG, DOC, etc.
    }
  ]
}
```

### Categorie disponibili

- `"Press"` - Comunicati stampa
- `"Adesioni"` - Nuove adesioni all'evento
- `"Organizzazione"` - Dettagli organizzativi
- `"Materiali"` - Materiali informativi
- `"Raccolta Fondi"` - Aggiornamenti sulla raccolta fondi

### Esempio di aggiunta news

```typescript
{
  id: 11,
  data: "2025-09-30",
  titolo: "Nuova adesione importante",
  contenuto: "Descrizione della news...",
  categoria: "Adesioni",
  materiali: [
    {
      nome: "Comunicato ufficiale",
      url: "#",
      tipo: "PDF"
    }
  ]
}
```

### Note importanti

- Le news vengono automaticamente ordinate per data (più recenti prime)
- Usa sempre ID progressivi univoci
- Le modifiche sono immediatamente visibili nell'applicazione
- Il sistema è completamente type-safe (TypeScript)
- ⚠️ I file `news.json` e `news.json.backup` in `/data/` non sono più utilizzati e possono essere eliminati

## Come aggiungere file PDF e documenti

### Posizione dei file

Carica i tuoi file nella cartella `/public/documents/` organizzata per categoria:

```
/public/documents/
├── press/                 # Comunicati stampa
├── adesioni/             # Documenti per adesioni  
├── materiali/            # Locandine, volantini
├── organizzazione/       # Programmi, orari
└── raccolta-fondi/       # Materiali raccolta fondi
```

### Come linkare i file nelle news

Nel campo `materiali` di una news, usa il percorso relativo:

```typescript
materiali: [
  {
    nome: "Locandina evento 2025",
    url: "/documents/materiali/locandina-evento-2025.pdf",
    tipo: "PDF"
  },
  {
    nome: "Programma dettagliato",
    url: "/documents/organizzazione/programma-dettagliato.pdf", 
    tipo: "PDF"
  }
]
```

### Tipi di file supportati

- **PDF** - Documenti, moduli, comunicati
- **PNG/JPG** - Immagini, locandine  
- **DOC/DOCX** - Documenti Word
- Altri formati secondo necessità

## Struttura del progetto

- `/components/` - Componenti React
- `/data/` - File JSON per adesioni (le news sono in `/utils/newsDataInline.ts`)
- `/utils/` - Utility e dati inline delle news
- `/types/` - Definizioni TypeScript
- `/styles/` - CSS globale con Tailwind v4
- `/public/documents/` - File PDF e documenti per le news

## Tecnologie utilizzate

- React con TypeScript
- Tailwind CSS v4
- Componenti UI shadcn/ui
- Sistema di routing interno