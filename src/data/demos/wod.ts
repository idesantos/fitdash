import type { Demo } from './tipos';
import { f } from './fotos';

const demo: Demo = {
  slug: 'wod',
  academia: 'Box 27',
  logo: 'BOX 27',
  whatsMsg: 'Olá! Quero agendar uma aula experimental no Box 27.',
  cta: 'Aula grátis',
  nav: [
    { label: 'WOD', href: '#wod' },
    { label: 'Aulas', href: '#modalidades' },
    { label: 'Horários', href: '#horarios' },
    { label: 'Coaches', href: '#equipe' },
  ],
  secoes: ['wod', 'modalidades', 'horarios', 'equipe', 'planos', 'galeria', 'local', 'cta'],
  hero: {
    eyebrow: 'Box de CrossFit e treino funcional',
    titulo: 'O treino de hoje já está no quadro.',
    texto: 'Aulas de 1 hora com coach do início ao fim, escalas para todos os níveis e uma turma que puxa você para cima.',
    foto: f(4944958),
    ctaSec: { label: 'Ver o WOD', href: '#wod' },
    selos: ['Aula experimental grátis', 'Drop-in para visitantes', 'Turmas de até 14'],
  },
  wod: {
    titulo: 'Terça de fogo',
    data: 'terça, 04/11',
    formato: 'AMRAP',
    tempo: '20 min',
    blocos: [
      { nome: 'Aquecimento', linhas: ['400 m de corrida', '3 rounds:', '10 air squats', '10 push-ups', '10 PVC pass-through'] },
      { nome: 'Força', linhas: ['Back squat 5 × 5', '@ 75% do 1RM', 'Descanso de 2 min'] },
      { nome: 'Metcon', linhas: ['12 wall balls (9/6 kg)', '9 kettlebell swings (24/16 kg)', '6 burpees sobre a barra', '200 m de remo'] },
    ],
  },
  modalidades: {
    eyebrow: 'Aulas',
    titulo: 'Uma hora. Tudo planejado.',
    itens: [
      { nome: 'CrossFit', texto: 'Aquecimento, técnica, força e o WOD do dia, sempre com coach.', foto: f(2468339), tag: 'Aula de 1h' },
      { nome: 'Iniciantes', texto: 'Quatro semanas para aprender os movimentos com segurança.', foto: f(3766211), tag: 'Comece aqui' },
      { nome: 'LPO', texto: 'Arranco e arremesso, com técnica e progressão de carga.', foto: f(2261483) },
      { nome: 'Ginástica', texto: 'Barra, argolas, parada de mão e corda.', foto: f(2294400) },
      { nome: 'Endurance', texto: 'Remo, bike e corrida para ganhar fôlego.', foto: f(4164510) },
      { nome: 'Open box', texto: 'Box aberto para treinar sozinho, com coach por perto.', foto: f(327295) },
    ],
  },
  horarios: {
    eyebrow: 'Horários',
    titulo: 'Escolha a sua turma.',
    dias: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    linhas: [
      { hora: '06:00', aulas: ['WOD', 'WOD', 'WOD', 'WOD', 'WOD', null] },
      { hora: '07:00', aulas: ['WOD', 'WOD', 'WOD', 'WOD', 'WOD', 'WOD'] },
      { hora: '09:00', aulas: [null, null, null, null, null, 'Open box'] },
      { hora: '12:00', aulas: ['WOD', 'LPO', 'WOD', 'LPO', 'WOD', null] },
      { hora: '18:00', aulas: ['WOD', 'WOD', 'WOD', 'WOD', 'WOD', null] },
      { hora: '19:00', aulas: ['WOD', 'Ginástica', 'WOD', 'Ginástica', 'WOD', null] },
      { hora: '20:00', aulas: ['Iniciantes', 'WOD', 'Iniciantes', 'WOD', null, null] },
    ],
    nota: 'Drop-in: R$ 60 por aula, com reserva pelo WhatsApp.',
  },
  equipe: {
    eyebrow: 'Coaches',
    titulo: 'Quem vai te cobrar mais uma repetição.',
    itens: [
      { nome: 'Léo Martins', cargo: 'Head coach', foto: f(13642719) },
      { nome: 'Bia Fontes', cargo: 'Ginástica e mobilidade', foto: f(5310778) },
      { nome: 'Tiago Rocha', cargo: 'LPO e força', foto: f(4164510) },
    ],
  },
  planos: {
    eyebrow: 'Planos',
    titulo: 'Sem taxa de matrícula.',
    itens: [
      { nome: '2x por semana', preco: 'R$ 260', periodo: '/mês', itens: ['Qualquer aula', 'App com o WOD e seus recordes', 'Sem fidelidade'] },
      { nome: 'Livre', preco: 'R$ 340', periodo: '/mês', itens: ['Aulas ilimitadas', 'Open box incluso', 'Avaliação a cada 3 meses'], destaque: 'Mais escolhido' },
      { nome: 'Drop-in', preco: 'R$ 60', periodo: '/aula', itens: ['Para visitantes', 'Qualquer horário', 'Reserva pelo WhatsApp'] },
    ],
    nota: 'Valores fictícios de demonstração.',
  },
  galeria: {
    eyebrow: 'O box',
    titulo: 'Giz, ferro e muita gente boa.',
    fotos: [{ foto: f(4944958) }, { foto: f(2468339) }, { foto: f(2294400) }, { foto: f(327295) }, { foto: f(3766211) }, { foto: f(7688862) }],
  },
  local: {
    endereco: 'Rua do Box, 27',
    bairro: 'Distrito Industrial · Sua cidade',
    telefone: '(11) 0000-0000',
    horario: [
      { dias: 'Segunda a sexta', horas: '06:00 às 21:00' },
      { dias: 'Sábado', horas: '07:00 às 11:00' },
      { dias: 'Domingo', horas: 'Fechado' },
    ],
  },
  ctaFinal: { titulo: 'Sua primeira aula é grátis.', texto: 'Venha suar com a gente. O coach adapta o treino para o seu nível.' },
};

export default demo;
