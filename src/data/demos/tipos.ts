// Esquema de dados de um site de academia. As demos usam dados fictícios;
// um cliente real preenche o mesmo formato a partir do formulário da FitDash.

export type Foto = ImageMetadata;

export type Secao =
  | 'numeros'
  | 'sobre'
  | 'modalidades'
  | 'galeria'
  | 'horarios'
  | 'planos'
  | 'equipe'
  | 'depoimentos'
  | 'passos'
  | 'wod'
  | 'agenda'
  | 'resultados'
  | 'local'
  | 'cta';

export type Demo = {
  slug: string;
  academia: string;
  logo: string; // texto do logo (a demo não tem logo de verdade)
  whatsMsg: string; // mensagem pronta do WhatsApp
  cta: string; // texto do botão principal
  nav: { label: string; href: string }[];
  secoes: Secao[];

  hero: {
    eyebrow?: string;
    titulo: string;
    texto: string;
    foto?: Foto;
    fotos?: Foto[];
    ctaSec?: { label: string; href: string };
    selos?: string[];
  };
  numeros?: { valor: string; rotulo: string }[];
  sobre?: { eyebrow?: string; titulo: string; texto: string[]; foto?: Foto; itens?: string[] };
  modalidades?: { eyebrow?: string; titulo: string; intro?: string; itens: { nome: string; texto: string; foto?: Foto; tag?: string }[] };
  galeria?: { eyebrow?: string; titulo: string; intro?: string; fotos: { foto: Foto; legenda?: string }[] };
  horarios?: { eyebrow?: string; titulo: string; intro?: string; dias: string[]; linhas: { hora: string; aulas: (string | null)[] }[]; nota?: string };
  planos?: { eyebrow?: string; titulo: string; intro?: string; itens: { nome: string; preco: string; periodo: string; itens: string[]; destaque?: string }[]; nota?: string };
  equipe?: { eyebrow?: string; titulo: string; itens: { nome: string; cargo: string; foto?: Foto }[] };
  depoimentos?: { eyebrow?: string; titulo: string; itens: { texto: string; nome: string; info: string }[] };
  passos?: { eyebrow?: string; titulo: string; intro?: string; itens: { titulo: string; texto: string }[] };
  wod?: { titulo: string; data: string; formato: string; tempo: string; blocos: { nome: string; linhas: string[] }[] };
  agenda?: { eyebrow?: string; titulo: string; intro?: string; dias: string[]; horas: string[]; livres: string[] }; // livres: "dia|hora"
  resultados?: { eyebrow?: string; titulo: string; intro?: string; casos: { nome: string; tempo: string; foto: Foto; metricas: string[] }[] };
  local: { titulo?: string; endereco: string; bairro: string; telefone: string; horario: { dias: string; horas: string }[]; atendeEm?: string };
  ctaFinal: { titulo: string; texto: string };
};
