import type { Demo } from './tipos';
import { f } from './fotos';

const demo: Demo = {
  slug: 'neon',
  academia: 'Pulse 24h',
  logo: 'PULSE 24H',
  whatsMsg: 'Olá! Quero conhecer a Pulse 24h com uma aula grátis.',
  cta: 'Aula grátis',
  nav: [
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Aulas', href: '#horarios' },
    { label: 'Planos', href: '#planos' },
    { label: 'Contato', href: '#local' },
  ],
  secoes: ['numeros', 'modalidades', 'horarios', 'galeria', 'planos', 'depoimentos', 'local', 'cta'],
  hero: {
    eyebrow: 'Academia 24 horas',
    titulo: 'Aberto quando você puder.',
    texto: 'Treine às 6h, às 22h ou às 3 da manhã. Acesso por biometria, segurança a noite toda e equipe no salão em todos os turnos.',
    foto: f(29392546),
    ctaSec: { label: 'Ver planos', href: '#planos' },
    selos: ['Aberto 24h, 7 dias', 'Acesso por biometria', 'Ar-condicionado'],
  },
  numeros: [
    { valor: '24h', rotulo: 'abertos todos os dias' },
    { valor: '2.000 m²', rotulo: 'de área climatizada' },
    { valor: '150+', rotulo: 'aparelhos' },
    { valor: '8 aulas', rotulo: 'coletivas por dia' },
  ],
  modalidades: {
    eyebrow: 'Modalidades',
    titulo: 'Seu treino não tem hora marcada.',
    itens: [
      { nome: 'Musculação 24h', texto: 'Salão completo, sempre aberto, com reposição de equipamentos toda madrugada.', foto: f(29224211) },
      { nome: 'HIIT', texto: 'Aulas de 30 minutos de alta intensidade, com cordas, kettlebells e bike.', foto: f(4164513), tag: 'Aula coletiva' },
      { nome: 'Funcional', texto: 'Treino em circuito para força e condicionamento, todos os dias.', foto: f(12890811), tag: 'Aula coletiva' },
      { nome: 'App de treino', texto: 'Seu treino no celular, com vídeo de cada exercício e histórico de cargas.', foto: f(3912977), tag: 'Incluso' },
      { nome: 'Peso livre', texto: 'Halteres até 50 kg, racks e plataformas.', foto: f(1886487) },
      { nome: 'Cardio', texto: 'Esteiras, bikes e escadas com tela e conexão com o app.', foto: f(775025) },
    ],
  },
  horarios: {
    eyebrow: 'Aulas coletivas',
    titulo: 'Aulas de manhã, no almoço e de noite.',
    dias: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    linhas: [
      { hora: '06:30', aulas: ['HIIT', null, 'HIIT', null, 'HIIT', null] },
      { hora: '12:15', aulas: ['Abdômen', 'Funcional', 'Abdômen', 'Funcional', 'Abdômen', null] },
      { hora: '19:00', aulas: ['Funcional', 'HIIT', 'Funcional', 'HIIT', 'Funcional', 'Funcional'] },
      { hora: '20:30', aulas: ['Bike', 'Glúteo', 'Bike', 'Glúteo', 'Bike', null] },
      { hora: '22:00', aulas: [null, 'Bike', null, 'Bike', null, null] },
    ],
    nota: 'Aulas inclusas em todos os planos.',
  },
  galeria: {
    eyebrow: 'Estrutura',
    titulo: 'De madrugada é ainda melhor.',
    fotos: [
      { foto: f(29392546), legenda: 'Salão de máquinas' },
      { foto: f(29224211), legenda: 'Área de força' },
      { foto: f(4164513), legenda: 'Área funcional' },
      { foto: f(12890811), legenda: 'Cordas e kettlebells' },
      { foto: f(3912977), legenda: 'Treino no app' },
      { foto: f(1886487), legenda: 'Peso livre' },
    ],
  },
  planos: {
    eyebrow: 'Planos',
    titulo: 'Sem taxa de matrícula. Sem fila.',
    itens: [
      { nome: 'Smart', preco: 'R$ 99', periodo: '/mês', itens: ['Musculação 24h', 'App de treino', 'Fidelidade de 12 meses'] },
      { nome: 'Pulse', preco: 'R$ 139', periodo: '/mês', itens: ['Tudo do Smart', 'Todas as aulas coletivas', 'Leve um amigo 5x por mês', 'Sem fidelidade'], destaque: 'Mais completo' },
      { nome: 'Duo', preco: 'R$ 199', periodo: '/mês', itens: ['Plano Pulse para 2 pessoas', 'Mesmo endereço', 'Sem fidelidade'] },
    ],
    nota: 'Valores fictícios de demonstração.',
  },
  depoimentos: {
    eyebrow: 'Quem treina aqui',
    titulo: 'Gente que treina no horário que dá.',
    itens: [
      { texto: 'Trabalho de turno no hospital. Ter academia aberta às 2h da manhã mudou minha rotina.', nome: 'Renata L.', info: 'Enfermeira, treina de madrugada' },
      { texto: 'Nunca tem fila nos aparelhos. E o app com o treino ajuda demais quem treina sozinho.', nome: 'Diego M.', info: 'Aluno há 2 anos' },
      { texto: 'As aulas de HIIT das 6h30 são o meu café da manhã. Energia lá em cima.', nome: 'Camila T.', info: 'Aluna há 1 ano' },
    ],
  },
  local: {
    endereco: 'Av. Central, 2400',
    bairro: 'Centro · Sua cidade',
    telefone: '(11) 0000-0000',
    horario: [
      { dias: 'Todos os dias', horas: '24 horas' },
      { dias: 'Professores no salão', horas: '06:00 às 23:00' },
      { dias: 'Madrugada', horas: 'Segurança no local' },
    ],
  },
  ctaFinal: { titulo: 'Treine hoje à noite. É por nossa conta.', texto: 'Faça uma aula grátis no horário que for melhor para você, até de madrugada.' },
};

export default demo;
