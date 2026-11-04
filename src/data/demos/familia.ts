import type { Demo } from './tipos';
import { f } from './fotos';

const demo: Demo = {
  slug: 'familia',
  academia: 'Peixinho',
  logo: 'Peixinho',
  whatsMsg: 'Olá! Quero agendar uma aula experimental de natação para o meu filho.',
  cta: 'Aula experimental',
  nav: [
    { label: 'Turmas', href: '#modalidades' },
    { label: 'Níveis', href: '#metodo' },
    { label: 'Horários', href: '#horarios' },
    { label: 'Contato', href: '#local' },
  ],
  secoes: ['modalidades', 'passos', 'horarios', 'galeria', 'depoimentos', 'planos', 'local', 'cta'],
  hero: {
    eyebrow: 'Natação para bebês e crianças',
    titulo: 'Desde o primeiro mergulho.',
    texto: 'Aulas a partir de 6 meses, com os pais na água, piscina aquecida a 32 °C e professores especializados em crianças.',
    foto: f(5278447),
    ctaSec: { label: 'Ver turmas', href: '#modalidades' },
    selos: ['A partir de 6 meses', 'Água a 32 °C', 'Até 6 crianças por turma'],
  },
  modalidades: {
    eyebrow: 'Turmas',
    titulo: 'Uma turma para cada idade.',
    intro: 'Turmas pequenas, separadas por idade e por nível, para cada criança evoluir no seu tempo.',
    itens: [
      { nome: 'Bebês', texto: 'Com mamãe ou papai na água: adaptação, brincadeiras e segurança.', foto: f(35259240), tag: '6 meses a 3 anos' },
      { nome: 'Infantil', texto: 'Os primeiros nados, com brincadeiras que ensinam respiração e flutuação.', foto: f(346780), tag: '4 a 7 anos' },
      { nome: 'Kids', texto: 'Crawl, costas e muita diversão, já pensando em técnica.', foto: f(12615996), tag: '8 a 12 anos' },
      { nome: 'Família', texto: 'Aos sábados, pais e filhos aprendem juntos na mesma raia.', foto: f(5649993), tag: 'Sábados' },
    ],
  },
  passos: {
    eyebrow: 'Níveis',
    titulo: 'Cada conquista ganha uma touca nova.',
    intro: 'As crianças sobem de nível nas avaliações do semestre e recebem certificado e touca da nova cor.',
    itens: [
      { titulo: 'Peixinho', texto: 'Adaptação, brincadeiras e perder o medo da água.' },
      { titulo: 'Tartaruga', texto: 'Flutuar, respirar e se deslocar sozinho.' },
      { titulo: 'Golfinho', texto: 'Crawl e costas com coordenação.' },
      { titulo: 'Tubarão', texto: 'Os quatro nados e mergulhos.' },
    ],
  },
  horarios: {
    eyebrow: 'Horários',
    titulo: 'Manhã ou tarde, tem turma.',
    dias: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    linhas: [
      { hora: '08:30', aulas: ['Bebês', null, 'Bebês', null, null, 'Bebês'] },
      { hora: '09:30', aulas: ['Infantil', 'Bebês', 'Infantil', 'Bebês', null, 'Família'] },
      { hora: '14:30', aulas: ['Infantil', 'Kids', 'Infantil', 'Kids', 'Infantil', null] },
      { hora: '16:00', aulas: ['Kids', 'Infantil', 'Kids', 'Infantil', 'Kids', null] },
      { hora: '17:30', aulas: ['Bebês', 'Kids', 'Bebês', 'Kids', null, null] },
    ],
    nota: 'Aulas de 40 minutos. Vestiário família com trocador.',
  },
  galeria: {
    eyebrow: 'Nosso espaço',
    titulo: 'Tudo pensado para os pequenos.',
    fotos: [
      { foto: f(5278447), legenda: 'Piscina aquecida a 32 °C' },
      { foto: f(35259240) },
      { foto: f(346780) },
      { foto: f(5649993), legenda: 'Turma família' },
      { foto: f(12615996) },
    ],
  },
  depoimentos: {
    eyebrow: 'Pais',
    titulo: 'Quem confia os filhos com a gente.',
    itens: [
      { texto: 'Minha filha chorava na banheira. Hoje pede para ir para a natação todo dia.', nome: 'Patrícia O.', info: 'Mãe da Lara, 3 anos' },
      { texto: 'Professores carinhosos e muito atentos. A piscina quentinha faz diferença no inverno.', nome: 'Gustavo F.', info: 'Pai do Theo, 5 anos' },
      { texto: 'Fazemos a turma da família aos sábados. Virou o programa favorito da semana.', nome: 'Aline e Marcos', info: 'Pais da Sofia e do Davi' },
    ],
  },
  planos: {
    eyebrow: 'Planos',
    titulo: 'Simples, como deve ser.',
    itens: [
      { nome: '1x por semana', preco: 'R$ 189', periodo: '/mês', itens: ['1 aula de 40 minutos', 'Avaliação semestral', 'Touca e certificado'] },
      { nome: '2x por semana', preco: 'R$ 289', periodo: '/mês', itens: ['2 aulas de 40 minutos', 'Evolução mais rápida', 'Reposição de faltas'], destaque: 'Mais escolhido' },
      { nome: 'Irmãos', preco: '15% off', periodo: 'para o segundo filho', itens: ['Vale para qualquer plano', 'Mesmo horário, se quiser', 'Turmas por idade'] },
    ],
    nota: 'Valores fictícios de demonstração.',
  },
  local: {
    endereco: 'Rua dos Peixinhos, 32',
    bairro: 'Jardim · Sua cidade',
    telefone: '(11) 0000-0000',
    horario: [
      { dias: 'Segunda a sexta', horas: '08:00 às 19:00' },
      { dias: 'Sábado', horas: '08:00 às 13:00' },
      { dias: 'Domingo', horas: 'Fechado' },
    ],
  },
  ctaFinal: { titulo: 'Venha nadar com o seu pequeno.', texto: 'Agende uma aula experimental. A gente avalia, indica a turma e tira todas as dúvidas.' },
};

export default demo;
