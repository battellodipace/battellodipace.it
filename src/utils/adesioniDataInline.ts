// Dati delle adesioni inline
// Questo sistema sostituisce il caricamento JSON per evitare errori di import
import emergencyLogo from 'figma:asset/6c4beb50e973516e801931f3b482621abe9b89e6.png';

export interface Adesione {
  nome: string;
  presidio: 'angera' | 'arona' | 'baveno' | 'verbania';
  logo?: string; // URL opzionale del logo
}

export const adesioniData: Adesione[] = [
  {
    nome: "ANPI Sezione Arona",
    presidio: "arona"
  },
  {
    nome: "ANPI Sezione Verbano",
    presidio: "verbania"
  },
  {
    nome: "Associazione Culturale Rocca di Angera",
    presidio: "angera"
  },
  {
    nome: "Banda Musicale Città di Verbania",
    presidio: "verbania"
  },
  {
    nome: "Centro Sociale Anziani Baveno",
    presidio: "baveno"
  },
  {
    nome: "CGIL Camera del Lavoro Verbania",
    presidio: "verbania"
  },
  {
    nome: "Circolo ARCI Lago Maggiore",
    presidio: "arona"
  },
  {
    nome: "Città di Verbania",
    presidio: "verbania"
  },
  {
    nome: "Comitato Pace e Solidarietà Arona",
    presidio: "arona"
  },
  {
    nome: "Comune di Angera",
    presidio: "angera"
  },
  {
    nome: "Comune di Arona",
    presidio: "arona"
  },
  {
    nome: "Comune di Baveno",
    presidio: "baveno"
  },
  {
    nome: "Emergency Gruppo Arona",
    presidio: "arona",
    logo: emergencyLogo
  },
  {
    nome: "Emergency Verbano Cusio Ossola",
    presidio: "verbania",
    logo: emergencyLogo
  },
  {
    nome: "Gruppo Scout Baveno",
    presidio: "baveno",
    logo: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=100&h=100&fit=crop"
  },
  {
    nome: "Medici Senza Frontiere Verbano",
    presidio: "baveno",
    logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop"
  },
  {
    nome: "Movimento per la Pace Verbania",
    presidio: "verbania"
  },
  {
    nome: "Parrocchia San Gervasio e Protasio",
    presidio: "baveno"
  },
  {
    nome: "Pro Loco Angera",
    presidio: "angera"
  },
  {
    nome: "Rete delle Associazioni del VCO",
    presidio: "verbania"
  }
];

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