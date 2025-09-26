import { News } from '../types/news';

/**
 * Dati delle news inline per il sito Battello di Pace 2025
 * 
 * CATEGORIE DISPONIBILI:
 * - "Press"          - Comunicati stampa e notizie per i media
 * - "Adesioni"       - Nuove adesioni di associazioni, gruppi e persone
 * - "Organizzazione" - Dettagli organizzativi, orari, programma, partecipazioni
 * - "Materiali"      - Materiali informativi disponibili (locandine, volantini, etc.)
 * - "Raccolta Fondi" - Aggiornamenti sulla raccolta fondi per Emergency e MSF
 * 
 * STRUTTURA NEWS:
 * - id: number (univoco, progressivo)
 * - data: string (formato "YYYY-MM-DD")
 * - titolo: string
 * - contenuto: string
 * - categoria: string (vedi categorie sopra)
 * - link?: string (opzionale, URL esterno)
 * - materiali: array di oggetti { nome, url, tipo }
 * 
 * Le news vengono automaticamente ordinate per data (più recenti prime)
 */
export const inlineNewsData: News[] = [
  {
    id: 1,
    data: "2025-09-01",
    titolo: "Annuncio ufficiale del Battello di Pace 2025",
    contenuto: "È con grande gioia che annunciamo la nuova edizione del Battello di Pace per sabato 11 ottobre 2025. L'evento toccherà quattro porti del Lago Maggiore per unire territori e coscienze.",
    categoria: "Press",
    materiali: []
  },
  {
    id: 2,
    data: "2025-09-10",
    titolo: "Aperte le adesioni per l'evento",
    contenuto: "Associazioni, gruppi e cittadini possono aderire all'iniziativa. Tutti i fondi raccolti saranno devoluti a Emergency per sostenere i loro progetti umanitari.",
    categoria: "Adesioni",
    materiali: [
      {
        nome: "Modulo adesione organizzazioni",
        url: "/documents/adesioni/modulo-adesione.pdf",
        tipo: "PDF"
      }
    ]
  },
  {
    id: 3,
    data: "2025-09-15",
    titolo: "Definiti gli orari delle tappe",
    contenuto: "Il Battello di Pace partirà da Angera alle 9:30, proseguirà per Arona (10:30), Baveno (12:00) e concluderà a Verbania Intra alle 15:00.",
    categoria: "Organizzazione",
    materiali: []
  },
  {
    id: 4,
    data: "2025-09-20",
    titolo: "Materiali informativi disponibili",
    contenuto: "Sono ora disponibili locandine, volantini e materiali per la promozione dell'evento nei vostri territori.",
    categoria: "Materiali",
    materiali: [
      {
        nome: "Locandina evento",
        url: "#",
        tipo: "PNG"
      },
      {
        nome: "Locandina vuota personalizzabile",
        url: "#",
        tipo: "PNG"
      },
      {
        nome: "Volantino informativo",
        url: "#",
        tipo: "PDF"
      }
    ]
  },
  {
    id: 5,
    data: "2025-09-22",
    titolo: "Importante adesione dell'Università del Piemonte Orientale",
    contenuto: "L'Ateneo partecipa con un gruppo di studenti e docenti del Dipartimento di Studi Umanistici.",
    categoria: "Adesioni",
    materiali: []
  },
  {
    id: 6,
    data: "2025-09-24",
    titolo: "Confermata la partecipazione del Coro della Pace",
    contenuto: "Il Coro della Pace di Verbania animerà con i suoi canti l'ultima tappa del percorso.",
    categoria: "Organizzazione",
    materiali: []
  },
  {
    id: 7,
    data: "2025-09-25",
    titolo: "Raccolta fondi: già 500€ per Emergency",
    contenuto: "Grazie alle prime donazioni ricevute, abbiamo già raccolto 500€ che saranno devoluti ad Emergency.",
    categoria: "Raccolta Fondi",
    materiali: [
      {
        nome: "Info progetti Emergency",
        url: "/documents/raccolta-fondi/esempio-info.txt",
        tipo: "Documento"
      }
    ]
  },
  {
    id: 8,
    data: "2025-09-26",
    titolo: "Disponibili nuovi materiali promozionali",
    contenuto: "Sono ora disponibili per il download locandine e volantini per promuovere l'evento nelle vostre comunità.",
    categoria: "Materiali",
    materiali: [
      {
        nome: "Esempio locandina promozionale",
        url: "/documents/materiali/esempio-locandina.txt",
        tipo: "Documento"
      },
      {
        nome: "Video promozionale",
        url: "/documents/multimedia/esempio-video.txt", 
        tipo: "Multimedia"
      }
    ]
  },
  {
    id: 12,
    data: "2025-09-26",
    titolo: "Aderisce l'Associazione Volontari del Lago",
    contenuto: "L'associazione metterà a disposizione volontari per l'accoglienza nei vari presidi e supporto logistico durante l'evento.",
    categoria: "Adesioni",
    link: "https://example.com/associazione-volontari",
    materiali: []
  },
  {
    id: 9,
    data: "2025-09-27",
    titolo: "Conferenza stampa di presentazione",
    contenuto: "Giovedì 3 ottobre alle ore 10:00 presso la Sala Consiliare di Verbania si terrà la conferenza stampa di presentazione ufficiale dell'evento.",
    categoria: "Press",
    materiali: [
      {
        nome: "Invito conferenza stampa",
        url: "#",
        tipo: "PDF"
      }
    ]
  },
  {
    id: 10,
    data: "2025-09-28",
    titolo: "Confermata partnership con Medici Senza Frontiere",
    contenuto: "Oltre ad Emergency, anche Medici Senza Frontiere sarà beneficiaria della raccolta fondi. Un rappresentante dell'organizzazione sarà presente a Verbania Intra.",
    categoria: "Organizzazione",
    link: "https://www.medicisenzafrontiere.it",
    materiali: []
  },
  {
    id: 11,
    data: "2025-09-29",
    titolo: "Esempio di nuova news",
    contenuto: "Questo è un esempio di come aggiungere una nuova news al sistema. Puoi modificare titolo, contenuto, categoria e aggiungere materiali o link.",
    categoria: "Press",
    materiali: [
      {
        nome: "Documento esempio",
        url: "#",
        tipo: "PDF"
      }
    ]
  }
];