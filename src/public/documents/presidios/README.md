# Cartella Presidios - Documenti per Singoli Presidi

Questa cartella contiene documenti specifici per ogni presidio.

## Struttura:
- `angera/` - Materiali specifici presidio Angera
- `arona/` - Materiali specifici presidio Arona  
- `baveno/` - Materiali specifici presidio Baveno
- `verbania/` - Materiali specifici presidio Verbania Intra

## Esempi di file per ogni presidio:
- `mappa-ritrovo-[presidio].pdf`
- `contatti-organizzatori-[presidio].pdf`
- `informazioni-logistiche-[presidio].pdf`
- `programma-locale-[presidio].pdf`

## Come linkare nelle news:
```typescript
materiali: [
  {
    nome: "Mappa Ritrovo Angera",
    url: "/documents/presidios/angera/mappa-ritrovo-angera.pdf",
    tipo: "PDF"
  }
]
```