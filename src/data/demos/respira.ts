import type { Demo } from './tipos';
import { f } from './fotos';

const demo: Demo = {
  slug: 'respira',
  academia: 'Studio Sopro',
  logo: 'Studio Sopro',
  whatsMsg: 'Olá! Quero agendar uma aula experimental de pilates no Studio Sopro.',
  cta: 'Agendar aula',
  nav: [
    { label: 'O studio', href: '#sobre' },
    { label: 'Aulas', href: '#modalidades' },
    { label: 'Horários', href: '#horarios' },
    { label: 'Contato', href: '#local' },
  ],
  secoes: ['sobre', 'modalidades', 'passos', 'galeria', 'equipe', 'horarios', 'depoimentos', 'local', 'cta'],
  hero: {
    eyebrow: 'Studio de pilates',
    titulo: 'Corpo forte, mente leve.',
    texto: 'Pilates em aparelhos e no solo, em turmas de até 3 alunos, com fisioterapeutas e instrutores certificados.',
    foto: f(25599824),
    ctaSec: { label: 'Ver aulas', href: '#modalidades' },
    selos: ['Turmas de até 3 alunos', 'Fisioterapeutas', 'Reposição de aulas'],
  },
  sobre: {
    eyebrow: 'O studio',
    titulo: 'Um lugar para desacelerar.',
    texto: [
      'Luz natural, plantas e silêncio. O Sopro nasceu para ser uma pausa no seu dia: uma hora para cuidar do corpo com atenção e sem pressa.',
      'Cada aluno passa por uma avaliação postural antes da primeira aula, e o plano é ajustado a cada mês.',
    ],
    foto: f(25599839),
    itens: ['Avaliação postural na primeira aula', 'Aparelhos completos', 'Agendamento e reposição pelo app'],
  },
  modalidades: {
    eyebrow: 'Aulas',
    titulo: 'Cada corpo pede um ritmo.',
    itens: [
      { nome: 'Aparelhos', texto: 'Reformer, Cadillac, Chair e Barrel, com até 3 alunos por turma.', foto: f(25599821) },
      { nome: 'Solo', texto: 'Mat pilates com bola, faixa e arco, em turmas pequenas.', foto: f(374694) },
      { nome: 'Gestantes', texto: 'Aulas adaptadas para cada fase da gestação e para o pós-parto.', foto: f(6454150) },
      { nome: 'Fisioterapia', texto: 'Reabilitação e alívio de dores com fisioterapeutas.', foto: f(25596681) },
    ],
  },
  passos: {
    eyebrow: 'Benefícios',
    titulo: 'O que muda com o tempo.',
    itens: [
      { titulo: 'Postura', texto: 'Ombros soltos, coluna alinhada, menos dor no fim do dia.' },
      { titulo: 'Força do core', texto: 'Abdômen e lombar fortes para tudo o que você faz.' },
      { titulo: 'Flexibilidade', texto: 'Movimento com mais amplitude e menos rigidez.' },
      { titulo: 'Respiração', texto: 'Respirar melhor ajuda a dormir e a lidar com o estresse.' },
    ],
  },
  galeria: {
    eyebrow: 'O espaço',
    titulo: 'Luz, verde e silêncio.',
    fotos: [{ foto: f(25599824) }, { foto: f(25599821) }, { foto: f(25599839) }, { foto: f(25596671) }, { foto: f(11075080) }, { foto: f(25599832) }],
  },
  equipe: {
    eyebrow: 'Equipe',
    titulo: 'Quem cuida de você.',
    itens: [
      { nome: 'Clara Mendes', cargo: 'Fisioterapeuta · fundadora' },
      { nome: 'Júlia Rocha', cargo: 'Instrutora · gestantes' },
      { nome: 'Marina Alves', cargo: 'Instrutora · aparelhos' },
    ],
  },
  horarios: {
    eyebrow: 'Horários',
    titulo: 'Turmas pequenas, horários amplos.',
    dias: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    linhas: [
      { hora: '07:00', aulas: ['Aparelhos', 'Aparelhos', 'Aparelhos', 'Aparelhos', 'Aparelhos', 'Aparelhos'] },
      { hora: '09:00', aulas: ['Gestantes', 'Solo', 'Gestantes', 'Solo', null, 'Solo'] },
      { hora: '12:00', aulas: ['Aparelhos', null, 'Aparelhos', null, 'Aparelhos', null] },
      { hora: '17:00', aulas: ['Solo', 'Aparelhos', 'Solo', 'Aparelhos', 'Solo', null] },
      { hora: '19:00', aulas: ['Aparelhos', 'Aparelhos', 'Aparelhos', 'Aparelhos', null, null] },
    ],
    nota: 'Aulas de 50 minutos. Reposição em até 30 dias.',
  },
  depoimentos: {
    eyebrow: 'Alunas e alunos',
    titulo: 'Sinta a diferença.',
    itens: [
      { texto: 'Minha dor lombar sumiu em 3 meses. E eu ganhei uma hora só minha na semana.', nome: 'Renata V.', info: 'Aparelhos, 2x por semana' },
      { texto: 'Fiz pilates a gestação inteira. O pós-parto foi outro, muito mais tranquilo.', nome: 'Luiza M.', info: 'Gestantes' },
      { texto: 'Turma pequena faz toda a diferença. A instrutora vê cada detalhe.', nome: 'Carlos E.', info: 'Aluno há 1 ano' },
    ],
  },
  local: {
    endereco: 'Rua das Folhas, 45',
    bairro: 'Jardim Botânico · Sua cidade',
    telefone: '(11) 0000-0000',
    horario: [
      { dias: 'Segunda a sexta', horas: '07:00 às 20:00' },
      { dias: 'Sábado', horas: '07:00 às 11:00' },
      { dias: 'Domingo', horas: 'Fechado' },
    ],
  },
  ctaFinal: { titulo: 'Respire fundo. A primeira aula é por nossa conta.', texto: 'Agende uma aula experimental com avaliação postural.' },
};

export default demo;
