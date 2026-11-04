// Categorias e modelos. Cada modelo é uma estrutura da categoria com um estilo próprio.
// `demo` aponta para o site ao vivo; sem demo, o card mostra "Demo em produção".
// As demos ficam em src/pages/demo/<slug>.astro, com academias e dados fictícios.
import { url } from '../lib/url';

export type CategoriaId = 'musculacao' | 'natacao' | 'crossfit' | 'pilates' | 'personal';

export const categorias: { id: CategoriaId; nome: string; curto: string; paginas: string[] }[] = [
  { id: 'musculacao', nome: 'Academia de musculação', curto: 'Musculação', paginas: ['Início', 'Modalidades', 'Estrutura', 'Planos', 'Contato'] },
  { id: 'natacao', nome: 'Natação e hidro', curto: 'Natação e hidro', paginas: ['Início', 'Modalidades', 'Horários', 'Metodologia', 'Contato'] },
  { id: 'crossfit', nome: 'CrossFit e funcional', curto: 'CrossFit e funcional', paginas: ['Início', 'Aulas', 'Horários', 'Coaches', 'Contato'] },
  { id: 'pilates', nome: 'Studio de pilates', curto: 'Pilates', paginas: ['Início', 'Aulas', 'Studio', 'Equipe', 'Contato'] },
  { id: 'personal', nome: 'Personal trainer', curto: 'Personal', paginas: ['Início', 'Como eu trabalho', 'Contato'] },
];

export type Fonte = 'condensada' | 'expandida' | 'serifa' | 'mono' | 'redonda' | 'fina';

export type Modelo = {
  slug: string;
  categoria: CategoriaId;
  nome: string;
  ideia: string;
  efeito: string;
  demo?: string;
  demoReal?: string; // nome do cliente quando a demo é um site real
  thumb: { academia: string; titulo: string; cta: string; fonte: Fonte; bg: string; fg: string; ac: string };
};

export const modelos: Modelo[] = [
  // Musculação
  {
    slug: 'ferro', categoria: 'musculacao', nome: 'Ferro',
    ideia: 'Escuro e pesado, com tipografia grande e clima de treino sério.',
    efeito: 'A barra carrega as anilhas conforme a página desce.',
    demo: url('/demo/ferro/'),
    thumb: { academia: 'BIGORNA', titulo: 'Treino pesado. Resultado de verdade.', cta: 'Aula grátis', fonte: 'condensada', bg: '#0e0e10', fg: '#f2f2f2', ac: '#ff3b1f' },
  },
  {
    slug: 'neon', categoria: 'musculacao', nome: 'Neon',
    ideia: 'Clima de academia à noite: luz de neon e contraste alto.',
    efeito: 'Letreiro de neon que acende quando a página abre.',
    demo: url('/demo/neon/'),
    thumb: { academia: 'PULSE 24H', titulo: 'Aberto quando você puder.', cta: 'Conhecer', fonte: 'expandida', bg: '#0a0618', fg: '#ffffff', ac: '#c6ff00' },
  },
  {
    slug: 'premium', categoria: 'musculacao', nome: 'Premium',
    ideia: 'Claro e editorial, para academia de alto padrão.',
    efeito: 'Fotos grandes que se revelam como cortinas.',
    demo: url('/demo/premium/'),
    thumb: { academia: 'Atelier Fit', titulo: 'Seu treino, no seu tempo.', cta: 'Agendar visita', fonte: 'serifa', bg: '#f4f0e8', fg: '#161412', ac: '#a8804a' },
  },
  // Natação e hidro
  {
    slug: 'mergulho', categoria: 'natacao', nome: 'Mergulho',
    ideia: 'Piscina interativa na primeira tela: a água espirra e reage ao toque.',
    efeito: 'Água em tempo real e um mergulho ao rolar a página.',
    demo: 'https://idesantos.github.io/aquacenter/',
    demoReal: 'Aquacenter Vila Guilherme',
    thumb: { academia: 'Aquacenter', titulo: 'Uma academia para toda a família.', cta: 'Aula grátis', fonte: 'redonda', bg: '#0a6aa8', fg: '#ffffff', ac: '#ff6a1a' },
  },
  {
    slug: 'raia', categoria: 'natacao', nome: 'Raia',
    ideia: 'Limpo e esportivo, com as raias da piscina guiando a leitura.',
    efeito: 'Raias que deslizam entre as seções.',
    demo: url('/demo/raia/'),
    thumb: { academia: 'Raia 8 Natação', titulo: 'Nade no seu ritmo.', cta: 'Ver horários', fonte: 'expandida', bg: '#eef9ff', fg: '#06284a', ac: '#00a3df' },
  },
  {
    slug: 'familia', categoria: 'natacao', nome: 'Família',
    ideia: 'Colorido e acolhedor, com foco em bebês e crianças.',
    efeito: 'Bolhas e mascotes que acompanham a rolagem.',
    demo: url('/demo/familia/'),
    thumb: { academia: 'Peixinho', titulo: 'Desde o primeiro mergulho.', cta: 'Aula experimental', fonte: 'redonda', bg: '#fff6e0', fg: '#1d3557', ac: '#ff9f1c' },
  },
  // CrossFit e funcional
  {
    slug: 'wod', categoria: 'crossfit', nome: 'WOD',
    ideia: 'Quadro de giz, cronômetro e a energia do treino do dia.',
    efeito: 'Cronômetro que corre enquanto a página desce.',
    demo: url('/demo/wod/'),
    thumb: { academia: 'BOX 27', titulo: 'O treino de hoje já está no quadro.', cta: 'Drop-in', fonte: 'mono', bg: '#141414', fg: '#f4f4f4', ac: '#ffd400' },
  },
  {
    slug: 'box', categoria: 'crossfit', nome: 'Box',
    ideia: 'Industrial: concreto, metal e tipografia de impacto.',
    efeito: 'Placas de metal que se encaixam entre as seções.',
    demo: url('/demo/box/'),
    thumb: { academia: 'FORJA', titulo: 'Forte por dentro e por fora.', cta: 'Aula grátis', fonte: 'condensada', bg: '#2a2a2a', fg: '#ffffff', ac: '#ff5a1f' },
  },
  {
    slug: 'comunidade', categoria: 'crossfit', nome: 'Comunidade',
    ideia: 'Foco nas pessoas: a turma, os coaches e as conquistas.',
    efeito: 'Mosaico de fotos da turma em movimento.',
    demo: url('/demo/comunidade/'),
    thumb: { academia: 'Tribo', titulo: 'Ninguém treina sozinho aqui.', cta: 'Vem treinar', fonte: 'expandida', bg: '#fafafa', fg: '#111111', ac: '#e63946' },
  },
  // Pilates
  {
    slug: 'respira', categoria: 'pilates', nome: 'Respira',
    ideia: 'Movimento lento e formas orgânicas, no ritmo da respiração.',
    efeito: 'Formas que expandem e contraem como uma respiração.',
    demo: url('/demo/respira/'),
    thumb: { academia: 'Studio Sopro', titulo: 'Corpo forte, mente leve.', cta: 'Agendar aula', fonte: 'fina', bg: '#edf3ee', fg: '#2f3e35', ac: '#7fa88c' },
  },
  {
    slug: 'studio', categoria: 'pilates', nome: 'Studio',
    ideia: 'Editorial como revista: foto grande e tipografia elegante.',
    efeito: 'Textos e fotos que deslizam como páginas de revista.',
    demo: url('/demo/studio/'),
    thumb: { academia: 'Casa Pilates', titulo: 'Postura que muda o dia.', cta: 'Conhecer o studio', fonte: 'serifa', bg: '#f6efe7', fg: '#2a2420', ac: '#c0785a' },
  },
  {
    slug: 'equilibrio', categoria: 'pilates', nome: 'Equilíbrio',
    ideia: 'Minimalista: muito respiro, linhas finas e precisão.',
    efeito: 'Linhas que se alinham conforme a página desce.',
    demo: url('/demo/equilibrio/'),
    thumb: { academia: 'eixo', titulo: 'Precisão em cada movimento.', cta: 'Aula experimental', fonte: 'fina', bg: '#ffffff', fg: '#1d2340', ac: '#8b7fd1' },
  },
  // Personal
  {
    slug: 'autoridade', categoria: 'personal', nome: 'Autoridade',
    ideia: 'Sua foto em destaque e sua trajetória na frente.',
    efeito: 'Seu nome em letras gigantes atrás da foto recortada.',
    demo: url('/demo/autoridade/'),
    thumb: { academia: 'RAFA LIMA', titulo: 'Personal trainer há 12 anos.', cta: 'Falar comigo', fonte: 'condensada', bg: '#101216', fg: '#ffffff', ac: '#f5b700' },
  },
  {
    slug: 'resultados', categoria: 'personal', nome: 'Resultados',
    ideia: 'Transformações e depoimentos de alunos em primeiro plano.',
    efeito: 'Comparador de antes e depois dos alunos.',
    demo: url('/demo/resultados/'),
    thumb: { academia: 'Projeto 90', titulo: '90 dias. Sem atalho.', cta: 'Quero começar', fonte: 'expandida', bg: '#f3f6f8', fg: '#0c1b2a', ac: '#0aa06e' },
  },
  {
    slug: 'agenda', categoria: 'personal', nome: 'Agenda',
    ideia: 'Feito para converter: horários livres e o botão de marcar sempre à vista.',
    efeito: 'A agenda da semana se monta na tela.',
    demo: url('/demo/agenda/'),
    thumb: { academia: 'Treino com Bia', titulo: 'Tem horário livre essa semana.', cta: 'Marcar treino', fonte: 'redonda', bg: '#ffffff', fg: '#1b1b1f', ac: '#2f6bff' },
  },
];

export const modelosDa = (c: CategoriaId) => modelos.filter((m) => m.categoria === c);
export const modeloPorSlug = (s: string) => modelos.find((m) => m.slug === s);
