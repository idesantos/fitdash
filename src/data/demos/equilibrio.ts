import type { Demo } from './tipos';
import { f } from './fotos';

const demo: Demo = {
  slug: 'equilibrio',
  academia: 'eixo pilates',
  logo: 'eixo',
  whatsMsg: 'Olá! Quero agendar uma aula experimental no eixo pilates.',
  cta: 'Aula experimental',
  nav: [
    { label: 'Método', href: '#sobre' },
    { label: 'Aulas', href: '#modalidades' },
    { label: 'Horários', href: '#horarios' },
    { label: 'Planos', href: '#planos' },
  ],
  secoes: ['sobre', 'modalidades', 'galeria', 'equipe', 'horarios', 'planos', 'depoimentos', 'local', 'cta'],
  hero: {
    eyebrow: 'Pilates clássico e contemporâneo',
    titulo: 'Precisão em cada movimento.',
    texto: 'Um studio minimalista, com no máximo 4 alunos por aula e instrutores formados nas duas escolas do método.',
    ctaSec: { label: 'Conhecer o método', href: '#sobre' },
    selos: ['Até 4 alunos por aula', 'Avaliação postural', 'Aulas de 55 minutos'],
  },
  sobre: {
    eyebrow: 'Método',
    titulo: 'Alinhar antes de fortalecer.',
    texto: [
      'Todo aluno começa por uma avaliação postural e de movimento. É dela que sai o plano de aulas, revisto a cada oito semanas.',
      'Trabalhamos com o repertório clássico de Joseph Pilates e com abordagens contemporâneas, sempre com foco em controle, precisão e respiração.',
    ],
    foto: f(11075080),
    itens: ['Avaliação a cada 8 semanas', 'Plano individual mesmo em turma', 'Aparelhos de madeira e molas certificadas'],
  },
  modalidades: {
    eyebrow: 'Aulas',
    titulo: 'Quatro formas de praticar.',
    itens: [
      { nome: 'Clássico', texto: 'A sequência original do método, em aparelhos.', foto: f(25599821) },
      { nome: 'Contemporâneo', texto: 'Exercícios adaptados à sua necessidade e objetivo.', foto: f(18136885) },
      { nome: 'Solo', texto: 'Mat pilates para controle e consciência corporal.', foto: f(374694) },
      { nome: 'Particular', texto: 'Uma hora inteira de atenção, no seu horário.', foto: f(25596671) },
    ],
  },
  galeria: {
    eyebrow: 'Studio',
    titulo: 'Espaço limpo, mente limpa.',
    fotos: [{ foto: f(25599832) }, { foto: f(11075080) }, { foto: f(25599821) }, { foto: f(25596671) }, { foto: f(18136885) }, { foto: f(11075077) }],
  },
  equipe: {
    eyebrow: 'Instrutores',
    titulo: 'Formação nas duas escolas.',
    itens: [
      { nome: 'Teresa Vidal', cargo: 'Pilates clássico' },
      { nome: 'André Kim', cargo: 'Contemporâneo · reabilitação' },
      { nome: 'Laura Mello', cargo: 'Solo e gestantes' },
    ],
  },
  horarios: {
    eyebrow: 'Horários',
    titulo: 'Escolha o seu horário fixo.',
    dias: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    linhas: [
      { hora: '07:00', aulas: ['Clássico', 'Contemp.', 'Clássico', 'Contemp.', 'Clássico', 'Solo'] },
      { hora: '09:00', aulas: ['Contemp.', 'Solo', 'Contemp.', 'Solo', 'Contemp.', 'Clássico'] },
      { hora: '12:30', aulas: ['Solo', null, 'Solo', null, 'Solo', null] },
      { hora: '18:00', aulas: ['Clássico', 'Clássico', 'Clássico', 'Clássico', 'Contemp.', null] },
      { hora: '19:30', aulas: ['Contemp.', 'Contemp.', 'Contemp.', 'Contemp.', null, null] },
    ],
  },
  planos: {
    eyebrow: 'Planos',
    titulo: 'Constância é o método.',
    itens: [
      { nome: '1x', preco: 'R$ 290', periodo: '/mês', itens: ['Aula em grupo de até 4', 'Avaliação postural'] },
      { nome: '2x', preco: 'R$ 450', periodo: '/mês', itens: ['Aula em grupo de até 4', 'Reavaliação a cada 8 semanas'], destaque: 'Recomendado' },
      { nome: '3x', preco: 'R$ 590', periodo: '/mês', itens: ['Aula em grupo de até 4', 'Uma aula particular por mês'] },
    ],
    nota: 'Valores fictícios de demonstração.',
  },
  depoimentos: {
    eyebrow: 'Alunos',
    titulo: 'Mais leve, mais alinhado.',
    itens: [
      { texto: 'Em seis meses minha postura mudou a ponto de as pessoas comentarem.', nome: 'Daniela P.', info: 'Aluna há 1 ano' },
      { texto: 'O cuidado com cada detalhe do movimento é o que diferencia o eixo.', nome: 'Marcelo T.', info: 'Aluno há 3 anos' },
      { texto: 'Ambiente silencioso e organizado. Exatamente o que eu precisava.', nome: 'Yara S.', info: 'Aluna há 8 meses' },
    ],
  },
  local: {
    endereco: 'Rua Retilínea, 90',
    bairro: 'Centro · Sua cidade',
    telefone: '(11) 0000-0000',
    horario: [
      { dias: 'Segunda a sexta', horas: '07:00 às 20:30' },
      { dias: 'Sábado', horas: '07:00 às 11:00' },
      { dias: 'Domingo', horas: 'Fechado' },
    ],
  },
  ctaFinal: { titulo: 'Encontre o seu eixo.', texto: 'Agende uma aula experimental com avaliação postural.' },
};

export default demo;
