export interface Materiale {
  nome: string;
  url: string;
  tipo: 'PDF' | 'PNG' | 'JPG' | 'DOC';
}

export interface News {
  id: number;
  data: string;
  titolo: string;
  contenuto: string;
  categoria: string;
  link?: string;
  materiali: Materiale[];
}