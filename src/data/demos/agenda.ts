import type { Demo } from './tipos';
import { f } from './fotos';

const demo: Demo = {
  slug: 'agenda',
  academia: 'Treino com Bia',
  logo: 'Treino com Bia',
  whatsMsg: 'Oi, Bia! Quero marcar um treino com você.',
  cta: 'Marcar treino',
  nav: [
    { label: 'Agenda', href: '#agenda' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Formatos', href: '#modalidades' },
    { label: 'Valores', href: '#planos' },
  ],
  secoes: ['agenda', 'sobre', 'modalidades', 'depoimentos', 'planos', 'local', 'cta'],
  hero: {
    eyebrow: 'Personal trainer · CREF 000000-G/SP',
    titulo: 'Tem horário livre essa semana.',
    texto: 'Treino personalizado de 50 minutos, na academia ou no seu condomínio. Escolha o horário e confirme pelo WhatsApp.',
    foto: f(5310778),
    ctaSec: { label: 'Ver a agenda', href: '#agenda' },
    selos: ['Primeira aula com avaliação', 'Remarcação até 12h antes', 'Atende em condomínios'],
  },
  agenda: {
    eyebrow: 'Agenda da semana',
    titulo: 'Escolha um horário livre.',
    intro: 'Os horários em azul estão livres. Toque em um deles e confirme pelo WhatsApp.',
    dias: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    horas: ['06:00', '07:00', '08:00', '12:00', '18:00', '19:00', '20:00'],
    livres: ['Seg|07:00', 'Seg|19:00', 'Ter|06:00', 'Ter|12:00', 'Qua|08:00', 'Qua|20:00', 'Qui|07:00', 'Qui|18:00', 'Sex|06:00', 'Sex|12:00', 'Sex|19:00', 'Sáb|08:00'],
  },
  sobre: {
    eyebrow: 'Sobre',
    titulo: 'Oi, eu sou a Bia.',
    texto: [
      'Sou personal há 8 anos e trabalho principalmente com mulheres que querem ganhar força, melhorar a postura e ter mais energia no dia a dia.',
      'Treino com você na academia do seu prédio, no seu condomínio ou na academia parceira. Levo o que for preciso.',
    ],
    foto: f(5310778),
    itens: ['8 anos de experiência', 'Especialista em treino feminino', 'Atende num raio de 5 km'],
  },
  modalidades: {
    eyebrow: 'Formatos',
    titulo: 'Do jeito que cabe na sua rotina.',
    itens: [
      { nome: 'Individual', texto: '50 minutos só seus, com treino ajustado ao dia.', foto: f(7679999) },
      { nome: 'Em dupla', texto: 'Treine com uma amiga e divida o valor.', foto: f(4853325) },
      { nome: 'Consultoria online', texto: 'Treino no app e conversa semanal por vídeo.', foto: f(3912977) },
    ],
  },
  depoimentos: {
    eyebrow: 'Alunas',
    titulo: 'Quem treina com a Bia.',
    itens: [
      { texto: 'Marcar pelo site é muito prático. Vejo o horário livre e já mando mensagem.', nome: 'Fernanda R.', info: 'Aluna há 1 ano' },
      { texto: 'Ela vem até o condomínio. Não tenho mais desculpa para faltar.', nome: 'Gabriela M.', info: 'Aluna há 2 anos' },
      { texto: 'Melhorei a postura e acabou a dor nas costas do home office.', nome: 'Tatiane L.', info: 'Aluna há 6 meses' },
    ],
  },
  planos: {
    eyebrow: 'Valores',
    titulo: 'Simples e sem fidelidade.',
    itens: [
      { nome: 'Aula avulsa', preco: 'R$ 90', periodo: '/aula', itens: ['50 minutos', 'Ideal para experimentar'] },
      { nome: 'Pacote 8 aulas', preco: 'R$ 640', periodo: '/mês', itens: ['2x por semana', 'Horário fixo garantido', 'Avaliação mensal'], destaque: 'Mais escolhido' },
      { nome: 'Pacote 12 aulas', preco: 'R$ 900', periodo: '/mês', itens: ['3x por semana', 'Horário fixo garantido', 'Plano alimentar básico'] },
    ],
    nota: 'Valores fictícios de demonstração.',
  },
  local: {
    titulo: 'Onde eu atendo.',
    endereco: 'Academia parceira · Av. Exemplo, 500',
    bairro: 'Centro · Sua cidade',
    telefone: '(11) 0000-0000',
    atendeEm: 'Também atendo em condomínios num raio de 5 km.',
    horario: [
      { dias: 'Segunda a sexta', horas: '06:00 às 21:00' },
      { dias: 'Sábado', horas: '07:00 às 12:00' },
    ],
  },
  ctaFinal: { titulo: 'Seu horário está esperando.', texto: 'Escolha o melhor dia e me chama no WhatsApp.' },
};

export default demo;
