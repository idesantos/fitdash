import type { Demo } from './tipos';
import { f } from './fotos';

const demo: Demo = {
  slug: 'resultados',
  academia: 'Projeto 90',
  logo: 'Projeto 90',
  whatsMsg: 'Olá! Quero entrar na próxima turma do Projeto 90.',
  cta: 'Quero começar',
  nav: [
    { label: 'Resultados', href: '#resultados' },
    { label: 'Método', href: '#metodo' },
    { label: 'Planos', href: '#planos' },
    { label: 'Contato', href: '#local' },
  ],
  secoes: ['numeros', 'resultados', 'passos', 'modalidades', 'depoimentos', 'planos', 'local', 'cta'],
  hero: {
    eyebrow: 'Programa de transformação com personal',
    titulo: '90 dias. Sem atalho.',
    texto: 'Treino, alimentação e acompanhamento semanal em um programa de 90 dias, presencial ou online.',
    foto: f(3757943),
    ctaSec: { label: 'Ver resultados', href: '#resultados' },
    selos: ['Avaliação inicial e final', 'Check-in toda semana', 'Presencial ou online'],
  },
  numeros: [
    { valor: '1.200+', rotulo: 'alunos no programa' },
    { valor: '90 dias', rotulo: 'de acompanhamento' },
    { valor: '7 kg', rotulo: 'de perda média' },
    { valor: '94%', rotulo: 'concluem o programa' },
  ],
  resultados: {
    eyebrow: 'Resultados',
    titulo: 'Arraste e veja a diferença.',
    intro: 'Cada aluno entra com uma avaliação completa e sai com outra. O progresso fica registrado.',
    casos: [
      { nome: 'Mariana, 34', tempo: '90 dias', foto: f(2247179), metricas: ['−8 kg', '−9 cm de cintura'] },
      { nome: 'Roberto, 41', tempo: '120 dias', foto: f(16854033), metricas: ['−12 kg', '+15% de força'] },
      { nome: 'Ana, 28', tempo: '90 dias', foto: f(6922170), metricas: ['+3 kg de massa magra', '−6% de gordura'] },
    ],
  },
  passos: {
    eyebrow: 'Método',
    titulo: 'Quatro fases em 13 semanas.',
    itens: [
      { titulo: 'Avaliação', texto: 'Bioimpedância, fotos, medidas e testes de força.' },
      { titulo: 'Base · semanas 1 a 4', texto: 'Técnica, rotina e hábitos alimentares.' },
      { titulo: 'Intensidade · 5 a 9', texto: 'Carga e volume sobem, com ajuste semanal.' },
      { titulo: 'Consolidação · 10 a 13', texto: 'Resultado e um plano para manter depois.' },
    ],
  },
  modalidades: {
    eyebrow: 'O que está incluso',
    titulo: 'Tudo o que você precisa, num lugar só.',
    itens: [
      { nome: 'Treino', texto: 'Planilha nova a cada fase, no app, com vídeos.', foto: f(7679999) },
      { nome: 'Acompanhamento', texto: 'Check-in semanal com o seu personal.', foto: f(6551255) },
      { nome: 'App', texto: 'Cargas, medidas e fotos de progresso registradas.', foto: f(3912977) },
    ],
  },
  depoimentos: {
    eyebrow: 'Quem fez',
    titulo: 'Depois dos 90 dias.',
    itens: [
      { texto: 'Foi a primeira vez que eu terminei um programa. O check-in semanal não deixa você sumir.', nome: 'Juliana P.', info: 'Turma de março' },
      { texto: 'Perdi 10 kg e, mais importante, aprendi a treinar sozinho depois.', nome: 'Marcos V.', info: 'Turma de junho' },
      { texto: 'Fiz online, morando em outra cidade. Funcionou do mesmo jeito.', nome: 'Patrícia S.', info: 'Turma online' },
    ],
  },
  planos: {
    eyebrow: 'Inscrição',
    titulo: 'Escolha o formato.',
    itens: [
      { nome: 'Online', preco: 'R$ 497', periodo: 'à vista ou 10x', itens: ['90 dias de programa', 'App e check-in semanal', 'Avaliação por fotos e medidas'] },
      { nome: 'Presencial', preco: 'R$ 1.490', periodo: 'à vista ou 10x', itens: ['2 treinos por semana comigo', 'Bioimpedância inicial e final', 'Tudo do online'], destaque: 'Mais completo' },
      { nome: 'Renovação', preco: 'R$ 397', periodo: 'por ciclo', itens: ['Para quem já fez o programa', 'Novo ciclo de 90 dias', 'Mesmo acompanhamento'] },
    ],
    nota: 'Valores fictícios de demonstração.',
  },
  local: {
    titulo: 'Presencial ou online.',
    endereco: 'Studio Projeto 90 · Rua da Virada, 90',
    bairro: 'Centro · Sua cidade',
    telefone: '(11) 0000-0000',
    atendeEm: 'Turmas online para todo o Brasil. Próxima turma começa no dia 1º.',
    horario: [
      { dias: 'Segunda a sexta', horas: '06:00 às 21:00' },
      { dias: 'Sábado', horas: '08:00 às 12:00' },
    ],
  },
  ctaFinal: { titulo: 'Daqui a 90 dias você vai agradecer.', texto: 'Garanta sua vaga na próxima turma. As vagas são limitadas por personal.' },
};

export default demo;
