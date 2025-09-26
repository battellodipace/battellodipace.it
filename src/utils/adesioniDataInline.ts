// Import dei dati delle adesioni dal file JSON
import adesioniJson from '../data/adesioni.json';

export interface Adesione {
  id?: string;
  nome: string;
  presidio: string;
  logo?: string; // URL opzionale del logo
}

// Normalizza i nomi dei presidi per compatibilità
const normalizePresidio = (presidio: string): string => {
  // Converti "Verbania - Intra" in "verbania"
  if (presidio.toLowerCase().includes('verbania')) {
    return 'verbania';
  }
  // Converti "Angera", "Arona", "Baveno" in lowercase
  return presidio.toLowerCase();
};

// Importa i dati dal JSON e normalizza i presidi
export const adesioniData: Adesione[] = adesioniJson.map((item: any) => ({
  id: item.id,
  nome: item.nome,
  presidio: normalizePresidio(item.presidio),
  logo: item.logo
}));

// Funzioni helper per le adesioni
export const getAdesioni = (): Adesione[] => {
  return adesioniData.sort((a, b) => a.nome.localeCompare(b.nome));
};

export const getAdesioniByPresidio = (presidio: string): Adesione[] => {
  return adesioniData.filter(adesione => adesione.presidio === presidio);
};

export const getPresidi = (): string[] => {
  return Array.from(new Set(adesioniData.map(a => a.presidio))).sort();
};

export const getNumeroAdesioni = (): number => {
  return adesioniData.length;
};

export const getPresidioName = (presidio: string): string => {
  const names = {
    'angera': 'Angera',
    'arona': 'Arona', 
    'baveno': 'Baveno',
    'verbania': 'Verbania Intra'
  };
  return names[presidio as keyof typeof names] || presidio;
};