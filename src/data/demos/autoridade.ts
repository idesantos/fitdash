import type { Demo } from './tipos';
import { f } from './fotos';

const demo: Demo = {
  slug: 'autoridade',
  academia: 'Rafa Lima Personal',
  logo: 'RAFA LIMA',
  whatsMsg: 'Oi, Rafa! Quero saber como funciona o seu acompanhamento.',
  cta: 'Falar comigo',
  nav: [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Como trabalho', href: '#metodo' },
    { label: 'Planos', href: '#planos' },
    { label: 'Contato', href: '#local' },
  ],
  secoes: ['numeros', 'sobre', 'passos', 'modalidades', 'depoimentos', 'planos', 'local', 'cta'],
  hero: {
    eyebrow: 'Personal trainer · CREF 000000-G/SP',
    titulo: 'Rafa Lima',
    texto: 'Treino personalizado para emagrecimento e hipertrofia, na academia, em casa ou online. 12 anos de experiência e mais de 400 alunos atendidos.',
    foto: f(29526382),
    ctaSec: { label: 'Como eu trabalho', href: '#metodo' },
  },
  numeros: [
    { valor: '12 anos', rotulo: 'de experiência' },
    { valor: '400+', rotulo: 'alunos atendidos' },
    { valor: '3', rotulo: 'formas de treinar comigo' },
    { valor: '4,9', rotulo: 'de nota no Google' },
  ],
  sobre: {
    eyebrow: 'Sobre',
    titulo: 'Treino sério, sem fórmula pronta.',
    texto: [
      'Comecei a treinar com 15 anos e virei personal porque queria fazer pelos outros o que um bom professor fez por mim: mostrar que dá, com método e constância.',
      'Hoje acompanho alunos que querem emagrecer, ganhar massa ou voltar a treinar depois de uma lesão. Cada plano começa por uma avaliação e é ajustado toda semana.',
    ],
    foto: f(4853325),
    itens: ['Bacharel em Educação Física', 'Pós em fisiologia do exercício', 'Especialista em emagrecimento'],
  },
  passos: {
    eyebrow: 'Como eu trabalho',
    titulo: 'Quatro passos, nenhum atalho.',
    itens: [
      { titulo: 'Avaliação', texto: 'Composição corporal, histórico, rotina e objetivo.' },
      { titulo: 'Plano', texto: 'Treino montado para a sua agenda e o seu nível.' },
      { titulo: 'Acompanhamento', texto: 'Treinos comigo e suporte pelo WhatsApp.' },
      { titulo: 'Ajuste', texto: 'Reavaliação mensal e novo ciclo de treino.' },
    ],
  },
  modalidades: {
    eyebrow: 'Especialidades',
    titulo: 'Para o seu objetivo.',
    itens: [
      { nome: 'Emagrecimento', texto: 'Treino de força e condicionamento, com metas claras.', foto: f(6922170) },
      { nome: 'Hipertrofia', texto: 'Periodização e controle de carga para ganhar massa.', foto: f(16854033) },
      { nome: 'Em casa', texto: 'Levo o equipamento. Você só precisa de 2 metros quadrados.', foto: f(7679999) },
      { nome: 'Online', texto: 'Treino no app, vídeos de cada exercício e ajustes semanais.', foto: f(3912977) },
    ],
  },
  depoimentos: {
    eyebrow: 'Alunos',
    titulo: 'Resultado que aparece.',
    itens: [
      { texto: 'Perdi 14 kg em 8 meses sem dieta maluca. O Rafa ajusta tudo à minha rotina de viagem.', nome: 'Eduardo N.', info: 'Aluno há 1 ano' },
      { texto: 'Voltei a treinar depois da cirurgia no ombro com total segurança.', nome: 'Cristina L.', info: 'Aluna há 2 anos' },
      { texto: 'O online funciona de verdade. Ele responde rápido e corrige pelo vídeo.', nome: 'Victor H.', info: 'Aluno online' },
    ],
  },
  planos: {
    eyebrow: 'Planos',
    titulo: 'Escolha como treinar comigo.',
    itens: [
      { nome: 'Online', preco: 'R$ 190', periodo: '/mês', itens: ['Treino no app', 'Ajuste semanal', 'Suporte pelo WhatsApp'] },
      { nome: 'Presencial 2x', preco: 'R$ 680', periodo: '/mês', itens: ['8 treinos comigo', 'Avaliação mensal', 'Plano para os outros dias'], destaque: 'Mais procurado' },
      { nome: 'Presencial 3x', preco: 'R$ 920', periodo: '/mês', itens: ['12 treinos comigo', 'Avaliação mensal', 'Prioridade de horário'] },
    ],
    nota: 'Valores fictícios de demonstração.',
  },
  local: {
    titulo: 'Onde a gente treina.',
    endereco: 'Academia Exemplo · Rua do Treino, 120',
    bairro: 'Centro · Sua cidade',
    telefone: '(11) 0000-0000',
    atendeEm: 'Também atendo em condomínios da região e online para todo o Brasil.',
    horario: [
      { dias: 'Segunda a sexta', horas: '06:00 às 21:00' },
      { dias: 'Sábado', horas: '07:00 às 12:00' },
    ],
  },
  ctaFinal: { titulo: 'Bora começar?', texto: 'Me chama no WhatsApp e a gente marca sua avaliação.' },
};

export default demo;
