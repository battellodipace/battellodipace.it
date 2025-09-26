import { News } from '../types/news';
import newsJson from '../data/news.json';

/**
 * Funzione helper per caricare le news dal file JSON
 * Importa i dati dal file news.json nella cartella data
 */
export const loadNewsData = (): News[] => {
  try {
    // Importa i dati dal JSON
    const newsData = newsJson as News[];

    // Valida la struttura dei dati
    if (!Array.isArray(newsData) || newsData.length === 0) {
      throw new Error('I dati delle news non sono validi');
    }

    // Ordina per data decrescente (più recenti prima)
    return newsData.sort((a, b) =>
      new Date(b.data).getTime() - new Date(a.data).getTime()
    );
  } catch (error) {
    // Errore silenzioso in produzione
    // Fallback di emergenza con dati minimi
    return [{
      id: 1,
      data: "2025-09-25",
      titolo: "Battello di Pace 2025",
      contenuto: "Evento in preparazione per l'11 ottobre 2025.",
      categoria: "Organizzazione",
      materiali: []
    }];
  }
};

/**
 * Funzione per ottenere le ultime N news
 */
export const getLatestNews = (count: number = 5): News[] => {
  const allNews = loadNewsData();
  return allNews.slice(0, count);
};

/**
 * Funzione per filtrare le news per categoria
 */
export const getNewsByCategory = (categoria: string): News[] => {
  const allNews = loadNewsData();
  return allNews.filter(news => 
    news.categoria.toLowerCase() === categoria.toLowerCase()
  );
};

/**
 * Funzione per ottenere una singola news per ID
 */
export const getNewsById = (id: number): News | undefined => {
  const allNews = loadNewsData();
  return allNews.find(news => news.id === id);
};