import type { Demo } from './tipos';
import { f } from './fotos';

const demo: Demo = {
  slug: 'ferro',
  academia: 'Bigorna',
  logo: 'BIGORNA',
  whatsMsg: 'Olá! Quero agendar meu treino grátis na Bigorna.',
  cta: 'Treino grátis',
  nav: [
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Estrutura', href: '#galeria' },
    { label: 'Planos', href: '#planos' },
    { label: 'Contato', href: '#local' },
  ],
  secoes: ['numeros', 'modalidades', 'galeria', 'planos', 'depoimentos', 'local', 'cta'],
  hero: {
    eyebrow: 'Academia de musculação · desde 2012',
    titulo: 'Treino pesado. Resultado de verdade.',
    texto: '1.500 m² de área de treino, aparelhos de competição e professor no salão do primeiro ao último horário.',
    foto: f(1552252),
    ctaSec: { label: 'Ver planos', href: '#planos' },
    selos: ['Aberto das 5h às 23h', 'Avaliação física grátis', 'Estacionamento'],
  },
  numeros: [
    { valor: '1.500 m²', rotulo: 'de área de treino' },
    { valor: '120+', rotulo: 'aparelhos' },
    { valor: '18h', rotulo: 'abertos por dia' },
    { valor: '12 anos', rotulo: 'de casa' },
  ],
  modalidades: {
    eyebrow: 'Modalidades',
    titulo: 'Tudo para treinar sério.',
    intro: 'Do primeiro treino ao recorde pessoal, com professor acompanhando de perto.',
    itens: [
      { nome: 'Musculação', texto: 'Mais de 120 aparelhos, com área separada para cada grupo muscular.', foto: f(16854033) },
      { nome: 'Peso livre', texto: 'Plataformas, racks, halteres até 60 kg e anilhas de competição.', foto: f(2261481) },
      { nome: 'Treino feminino', texto: 'Horários e acompanhamento pensados para elas, com professoras no salão.', foto: f(1886487) },
      { nome: 'Funcional', texto: 'Aulas em grupo de 45 minutos, para força e condicionamento.', foto: f(13642719), tag: 'Aula coletiva' },
      { nome: 'Avaliação física', texto: 'Bioimpedância e treino montado com você na primeira semana.', foto: f(949131), tag: 'Grátis' },
      { nome: 'Cardio', texto: 'Esteiras, bikes e escadas, com área climatizada.', foto: f(775025) },
    ],
  },
  galeria: {
    eyebrow: 'Estrutura',
    titulo: 'Feita para quem leva o treino a sério.',
    fotos: [
      { foto: f(896058), legenda: 'Plataformas de levantamento' },
      { foto: f(1552252), legenda: 'Área de peso livre' },
      { foto: f(949130), legenda: 'Anilhas de competição' },
      { foto: f(2261483), legenda: 'Espaço para treino em dupla' },
      { foto: f(6389516), legenda: 'Racks' },
      { foto: f(949131), legenda: 'Halteres até 60 kg' },
    ],
  },
  planos: {
    eyebrow: 'Planos',
    titulo: 'Escolha como você quer treinar.',
    itens: [
      { nome: 'Mensal', preco: 'R$ 149', periodo: '/mês', itens: ['Musculação e cardio', 'Avaliação física', 'Sem fidelidade'] },
      { nome: 'Semestral', preco: 'R$ 119', periodo: '/mês', itens: ['Tudo do mensal', 'Aulas de funcional', '1 mês de congelamento'], destaque: 'Mais escolhido' },
      { nome: 'Anual', preco: 'R$ 99', periodo: '/mês', itens: ['Tudo do semestral', '2 meses de congelamento', 'Leve um amigo 1x por mês'] },
    ],
    nota: 'Aceitamos Wellhub e TotalPass. Valores fictícios de demonstração.',
  },
  depoimentos: {
    eyebrow: 'Quem treina aqui',
    titulo: 'Não é sobre o espaço. É sobre o resultado.',
    itens: [
      { texto: 'Treino há 4 anos aqui. Os professores realmente acompanham, corrigem e ajustam o treino.', nome: 'Marcos A.', info: 'Aluno desde 2021' },
      { texto: 'Melhor área de peso livre da região. Nunca falta anilha nem rack livre, mesmo no horário de pico.', nome: 'Juliana R.', info: 'Aluna desde 2019' },
      { texto: 'Entrei sem nunca ter treinado. Em 6 meses perdi 11 kg e ganhei uma rotina.', nome: 'Paulo S.', info: 'Aluno desde 2024' },
    ],
  },
  local: {
    endereco: 'Rua do Treino, 120',
    bairro: 'Centro · Sua cidade',
    telefone: '(11) 0000-0000',
    horario: [
      { dias: 'Segunda a sexta', horas: '05:00 às 23:00' },
      { dias: 'Sábado', horas: '08:00 às 18:00' },
      { dias: 'Domingo e feriados', horas: '08:00 às 14:00' },
    ],
  },
  ctaFinal: { titulo: 'Seu primeiro treino é por nossa conta.', texto: 'Agende uma aula grátis, conheça a estrutura e saia com o treino montado.' },
};

export default demo;
