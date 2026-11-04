import type { Demo } from './tipos';
import { f } from './fotos';

const demo: Demo = {
  slug: 'box',
  academia: 'Forja',
  logo: 'FORJA',
  whatsMsg: 'Olá! Quero agendar uma aula grátis na Forja.',
  cta: 'Aula grátis',
  nav: [
    { label: 'Treinos', href: '#modalidades' },
    { label: 'Horários', href: '#horarios' },
    { label: 'Coaches', href: '#equipe' },
    { label: 'Planos', href: '#planos' },
  ],
  secoes: ['modalidades', 'numeros', 'horarios', 'equipe', 'planos', 'depoimentos', 'local', 'cta'],
  hero: {
    eyebrow: 'Treinamento funcional e cross training',
    titulo: 'Forte por dentro e por fora.',
    texto: 'Um galpão de 600 m² com equipamento de competição, coaches certificados e aulas para quem nunca treinou e para quem compete.',
    foto: f(2294403),
    ctaSec: { label: 'Ver horários', href: '#horarios' },
    selos: ['600 m² de área livre', 'Aula grátis', 'Vestiário completo'],
  },
  modalidades: {
    eyebrow: 'Treinos',
    titulo: 'Escolha a sua batalha.',
    itens: [
      { nome: 'Cross training', texto: 'Força, ginástica e condicionamento na mesma aula.', foto: f(7688862) },
      { nome: 'Funcional', texto: 'Circuitos com o peso do corpo, kettlebells e cordas.', foto: f(4164510) },
      { nome: 'Força', texto: 'Agachamento, terra e supino com periodização.', foto: f(2261483) },
      { nome: 'HIIT', texto: '30 minutos de intensidade máxima.', foto: f(12890811), tag: 'Rápido' },
      { nome: 'Boxe funcional', texto: 'Luva, saco e muita perna. Queima garantida.', foto: f(6551189) },
      { nome: 'Mobilidade', texto: 'Para treinar melhor e sem dor.', foto: f(327295) },
    ],
  },
  numeros: [
    { valor: '600 m²', rotulo: 'de galpão' },
    { valor: '14', rotulo: 'alunos por aula, no máximo' },
    { valor: '6', rotulo: 'coaches certificados' },
    { valor: '42', rotulo: 'aulas por semana' },
  ],
  horarios: {
    eyebrow: 'Horários',
    titulo: 'Tem aula antes e depois do trabalho.',
    dias: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    linhas: [
      { hora: '06:00', aulas: ['Cross', 'Funcional', 'Cross', 'Funcional', 'Cross', null] },
      { hora: '07:30', aulas: ['HIIT', 'Cross', 'HIIT', 'Cross', 'HIIT', 'Cross'] },
      { hora: '12:00', aulas: ['Funcional', 'HIIT', 'Funcional', 'HIIT', 'Funcional', null] },
      { hora: '18:00', aulas: ['Cross', 'Força', 'Cross', 'Força', 'Cross', null] },
      { hora: '19:15', aulas: ['Boxe', 'Cross', 'Boxe', 'Cross', 'Mobilidade', null] },
      { hora: '20:30', aulas: ['Cross', 'Mobilidade', 'Cross', 'Funcional', null, null] },
    ],
  },
  equipe: {
    eyebrow: 'Coaches',
    titulo: 'Quem comanda o galpão.',
    itens: [
      { nome: 'Duda Ramos', cargo: 'Head coach' },
      { nome: 'Fábio Nunes', cargo: 'Força e cross' },
      { nome: 'Ana Lima', cargo: 'Mobilidade' },
    ],
  },
  planos: {
    eyebrow: 'Planos',
    titulo: 'Escolha o seu ritmo de treino.',
    itens: [
      { nome: '3x por semana', preco: 'R$ 229', periodo: '/mês', itens: ['Qualquer aula', 'Avaliação inicial', 'Sem fidelidade'] },
      { nome: 'Ilimitado', preco: 'R$ 289', periodo: '/mês', itens: ['Aulas ilimitadas', 'Reavaliação a cada 3 meses', 'Camiseta da Forja'], destaque: 'Mais escolhido' },
      { nome: 'Trimestral', preco: 'R$ 259', periodo: '/mês', itens: ['Ilimitado com desconto', '3 meses de plano', '1 semana de congelamento'] },
    ],
    nota: 'Valores fictícios de demonstração.',
  },
  depoimentos: {
    eyebrow: 'Alunos',
    titulo: 'Forjados aqui.',
    itens: [
      { texto: 'Nunca tinha feito nada parecido. Em 3 meses fiz minha primeira barra.', nome: 'Letícia G.', info: 'Aluna há 1 ano' },
      { texto: 'Coaches atentos à técnica, turma pequena e um galpão sem igual.', nome: 'Henrique V.', info: 'Aluno há 2 anos' },
      { texto: 'O boxe funcional de quarta é o melhor alívio de estresse da semana.', nome: 'Bruna K.', info: 'Aluna há 6 meses' },
    ],
  },
  local: {
    endereco: 'Av. do Galpão, 1200',
    bairro: 'Zona Industrial · Sua cidade',
    telefone: '(11) 0000-0000',
    horario: [
      { dias: 'Segunda a sexta', horas: '06:00 às 21:30' },
      { dias: 'Sábado', horas: '07:30 às 11:00' },
      { dias: 'Domingo', horas: 'Fechado' },
    ],
  },
  ctaFinal: { titulo: 'Vem pro galpão.', texto: 'A primeira aula é grátis. Traga água e disposição, o resto é com a gente.' },
};

export default demo;
