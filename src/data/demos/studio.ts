import type { Demo } from './tipos';
import { f } from './fotos';

const demo: Demo = {
  slug: 'studio',
  academia: 'Casa Pilates',
  logo: 'Casa Pilates',
  whatsMsg: 'Olá! Quero conhecer a Casa Pilates e agendar uma aula.',
  cta: 'Conhecer o studio',
  nav: [
    { label: 'A casa', href: '#sobre' },
    { label: 'Um dia aqui', href: '#galeria' },
    { label: 'Aulas', href: '#modalidades' },
    { label: 'Planos', href: '#planos' },
  ],
  secoes: ['sobre', 'galeria', 'modalidades', 'equipe', 'planos', 'depoimentos', 'local', 'cta'],
  hero: {
    eyebrow: 'Pilates em aparelhos · desde 2015',
    titulo: 'Postura que muda o dia.',
    texto: 'Um studio pequeno, de bairro, com aulas individuais e em trio, conduzidas por fisioterapeutas.',
    foto: f(25599825),
    fotos: [f(11036673)],
    ctaSec: { label: 'Um dia no studio', href: '#galeria' },
  },
  sobre: {
    eyebrow: 'A casa',
    titulo: 'Pilates como deve ser: com calma e com método.',
    texto: [
      'A Casa Pilates começou em uma sala com dois aparelhos e uma ideia simples: cada aula pensada para quem está ali, no dia em que está ali. Dez anos depois, o studio cresceu, mas a ideia continua a mesma.',
      'Trabalhamos com o método clássico e contemporâneo, sempre com avaliação antes da primeira aula e acompanhamento da evolução a cada trimestre.',
    ],
    foto: f(25596681),
  },
  galeria: {
    eyebrow: 'Um dia no studio',
    titulo: 'Das 7h às 20h, uma aula de cada vez.',
    fotos: [
      { foto: f(11036673), legenda: '07h · O studio abre' },
      { foto: f(25599825), legenda: '08h · Reformer' },
      { foto: f(25596681), legenda: '10h · Aula individual' },
      { foto: f(18136885), legenda: '12h · Chair' },
      { foto: f(11075077), legenda: '17h · Turma da tarde' },
      { foto: f(25599832), legenda: '19h · Cadillac' },
    ],
  },
  modalidades: {
    eyebrow: 'Aulas',
    titulo: 'Quatro aparelhos, um método.',
    itens: [
      { nome: 'Reformer', texto: 'O aparelho mais completo, para força e alongamento.', foto: f(25599825) },
      { nome: 'Cadillac', texto: 'Trabalho de coluna e mobilidade com molas e barras.', foto: f(25599832) },
      { nome: 'Chair', texto: 'Equilíbrio e força de pernas em um aparelho compacto.', foto: f(18136885) },
    ],
  },
  equipe: {
    eyebrow: 'Equipe',
    titulo: 'Fisioterapeutas, antes de tudo.',
    itens: [
      { nome: 'Lívia Duarte', cargo: 'Fundadora · fisioterapeuta' },
      { nome: 'Beatriz Lemos', cargo: 'Fisioterapeuta · coluna' },
      { nome: 'Sofia Cardoso', cargo: 'Fisioterapeuta · gestantes' },
    ],
  },
  planos: {
    eyebrow: 'Planos',
    titulo: 'Escolha a sua frequência.',
    itens: [
      { nome: '1x por semana', preco: 'R$ 280', periodo: '/mês', itens: ['Aula em trio', 'Avaliação inicial', 'Reposição em 30 dias'] },
      { nome: '2x por semana', preco: 'R$ 420', periodo: '/mês', itens: ['Aula em trio', 'Reavaliação trimestral', 'Reposição em 30 dias'], destaque: 'Mais procurado' },
      { nome: 'Individual', preco: 'R$ 140', periodo: '/aula', itens: ['Aula só sua', 'Horário flexível', 'Ideal para reabilitação'] },
    ],
    nota: 'Valores fictícios de demonstração.',
  },
  depoimentos: {
    eyebrow: 'Quem frequenta',
    titulo: 'Palavras de quem vem toda semana.',
    itens: [
      { texto: 'É o meu momento da semana. Saio de lá mais leve e mais alta, juro.', nome: 'Helena A.', info: 'Aluna há 5 anos' },
      { texto: 'Depois de uma hérnia, achei que nunca mais ia treinar. Hoje faço Reformer 2x por semana.', nome: 'Paulo R.', info: 'Aluno há 2 anos' },
      { texto: 'Studio lindo, aula atenta e uma equipe que lembra de tudo.', nome: 'Isabela T.', info: 'Aluna há 1 ano' },
    ],
  },
  local: {
    endereco: 'Rua das Acácias, 15',
    bairro: 'Alto da Colina · Sua cidade',
    telefone: '(11) 0000-0000',
    horario: [
      { dias: 'Segunda a sexta', horas: '07:00 às 20:00' },
      { dias: 'Sábado', horas: '08:00 às 12:00' },
      { dias: 'Domingo', horas: 'Fechado' },
    ],
  },
  ctaFinal: { titulo: 'Venha conhecer a casa.', texto: 'Agende uma aula experimental com avaliação. Leva 50 minutos e muda a semana.' },
};

export default demo;
