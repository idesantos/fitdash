import type { Demo } from './tipos';
import { f } from './fotos';

const demo: Demo = {
  slug: 'raia',
  academia: 'Raia 8 Natação',
  logo: 'Raia 8',
  whatsMsg: 'Olá! Quero agendar uma aula experimental de natação na Raia 8.',
  cta: 'Aula experimental',
  nav: [
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Horários', href: '#horarios' },
    { label: 'Níveis', href: '#metodo' },
    { label: 'Contato', href: '#local' },
  ],
  secoes: ['numeros', 'modalidades', 'horarios', 'passos', 'galeria', 'depoimentos', 'local', 'cta'],
  hero: {
    eyebrow: 'Escola de natação · piscina semiolímpica aquecida',
    titulo: 'Nade no seu ritmo.',
    texto: 'Aulas para crianças, adultos e atletas, em turmas por nível, com professores formados e piscina aquecida o ano inteiro.',
    foto: f(8688559),
    ctaSec: { label: 'Ver horários', href: '#horarios' },
    selos: ['Água a 30 °C', 'Turmas por nível', 'Estacionamento'],
  },
  numeros: [
    { valor: '25 m', rotulo: 'piscina semiolímpica' },
    { valor: '30 °C', rotulo: 'água aquecida o ano todo' },
    { valor: '8 raias', rotulo: 'sem disputa por espaço' },
    { valor: '600+', rotulo: 'alunos nadando' },
  ],
  modalidades: {
    eyebrow: 'Modalidades',
    titulo: 'Uma raia para cada objetivo.',
    itens: [
      { nome: 'Natação infantil', texto: 'De 4 a 12 anos, com aulas lúdicas e evolução por nível.', foto: f(5278447), tag: '4 a 12 anos' },
      { nome: 'Natação adulto', texto: 'Do primeiro contato com a água ao nado completo, sem pressa.', foto: f(8688152) },
      { nome: 'Hidroginástica', texto: 'Exercício de baixo impacto, ótimo para articulações e condicionamento.', foto: f(27368850) },
      { nome: 'Aperfeiçoamento', texto: 'Para quem já nada e quer técnica, viradas e os quatro estilos.', foto: f(8688561) },
      { nome: 'Treino e equipe', texto: 'Séries de treino, condicionamento e preparação para provas.', foto: f(261185) },
      { nome: 'Aulas particulares', texto: 'Horário flexível e atenção total, para qualquer idade.', foto: f(8028674) },
    ],
  },
  horarios: {
    eyebrow: 'Horários',
    titulo: 'Escolha a sua turma.',
    dias: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    linhas: [
      { hora: '07:00', aulas: ['Adulto', 'Hidro', 'Adulto', 'Hidro', 'Adulto', 'Adulto'] },
      { hora: '09:00', aulas: ['Hidro', null, 'Hidro', null, 'Hidro', 'Infantil'] },
      { hora: '15:00', aulas: ['Infantil', 'Infantil', 'Infantil', 'Infantil', 'Infantil', null] },
      { hora: '17:30', aulas: ['Infantil', 'Aperfeiç.', 'Infantil', 'Aperfeiç.', 'Infantil', null] },
      { hora: '19:00', aulas: ['Adulto', 'Equipe', 'Adulto', 'Equipe', 'Adulto', null] },
      { hora: '20:30', aulas: ['Adulto', 'Adulto', 'Adulto', 'Adulto', null, null] },
    ],
    nota: 'Aulas de 45 minutos, até 8 alunos por raia.',
  },
  passos: {
    eyebrow: 'Níveis',
    titulo: 'Da adaptação ao nado completo.',
    intro: 'Cada aluno começa no nível certo e avança com avaliação dos professores a cada trimestre.',
    itens: [
      { titulo: 'Adaptação', texto: 'Respiração, flutuação e confiança na água.' },
      { titulo: 'Iniciante', texto: 'Pernada e braçada do crawl, com e sem prancha.' },
      { titulo: 'Intermediário', texto: 'Crawl e costas completos, viradas simples.' },
      { titulo: 'Avançado', texto: 'Os quatro estilos, saídas e viradas olímpicas.' },
      { titulo: 'Treino', texto: 'Séries, condicionamento e provas.' },
    ],
  },
  galeria: {
    eyebrow: 'Estrutura',
    titulo: 'Piscina coberta, aquecida e tratada todo dia.',
    fotos: [
      { foto: f(8688559), legenda: 'Piscina semiolímpica' },
      { foto: f(261185), legenda: 'Raias de treino' },
      { foto: f(8688152) },
      { foto: f(8028674) },
      { foto: f(27368850), legenda: 'Hidroginástica' },
      { foto: f(261060), legenda: 'Blocos de saída' },
    ],
  },
  depoimentos: {
    eyebrow: 'Alunos',
    titulo: 'Quem nada aqui, recomenda.',
    itens: [
      { texto: 'Aprendi a nadar com 42 anos. A paciência dos professores fez toda a diferença.', nome: 'Sandra M.', info: 'Natação adulto' },
      { texto: 'Meus dois filhos nadam aqui. Dá para ver a evolução a cada avaliação.', nome: 'Rafael P.', info: 'Pai de alunos' },
      { texto: 'A hidro das 9h salvou meus joelhos. E a água é sempre quentinha.', nome: 'Dona Lúcia', info: 'Hidroginástica' },
    ],
  },
  local: {
    endereco: 'Rua das Raias, 80',
    bairro: 'Vila Nova · Sua cidade',
    telefone: '(11) 0000-0000',
    horario: [
      { dias: 'Segunda a sexta', horas: '06:30 às 21:30' },
      { dias: 'Sábado', horas: '08:00 às 13:00' },
      { dias: 'Domingo', horas: 'Fechado' },
    ],
  },
  ctaFinal: { titulo: 'A primeira aula é por nossa conta.', texto: 'Agende uma aula experimental e a gente indica a turma certa para o seu nível.' },
};

export default demo;
