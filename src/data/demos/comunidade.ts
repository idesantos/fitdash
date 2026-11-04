import type { Demo } from './tipos';
import { f } from './fotos';

const demo: Demo = {
  slug: 'comunidade',
  academia: 'Tribo',
  logo: 'Tribo',
  whatsMsg: 'Olá! Quero fazer uma aula experimental na Tribo.',
  cta: 'Vem treinar',
  nav: [
    { label: 'Aulas', href: '#modalidades' },
    { label: 'A tribo', href: '#depoimentos' },
    { label: 'Coaches', href: '#equipe' },
    { label: 'Planos', href: '#planos' },
  ],
  secoes: ['numeros', 'modalidades', 'depoimentos', 'equipe', 'horarios', 'planos', 'local', 'cta'],
  hero: {
    eyebrow: 'CrossFit e treino em grupo',
    titulo: 'Ninguém treina sozinho aqui.',
    texto: 'Mais que um box: uma tribo de 300 pessoas que se encontra todo dia para treinar, comemorar recordes e se apoiar.',
    fotos: [f(4853325), f(7688862), f(2294403), f(2468339), f(2294400), f(3766211), f(416809), f(10999309), f(4164513), f(6551189), f(13642719), f(327295)],
    ctaSec: { label: 'Conhecer a tribo', href: '#depoimentos' },
    selos: ['Aula experimental grátis', 'Eventos todo mês', 'Turma para iniciantes'],
  },
  numeros: [
    { valor: '300+', rotulo: 'membros na tribo' },
    { valor: '12', rotulo: 'eventos por ano' },
    { valor: '4', rotulo: 'coaches' },
    { valor: '96%', rotulo: 'renovam o plano' },
  ],
  modalidades: {
    eyebrow: 'Aulas',
    titulo: 'Todo mundo começa de algum lugar.',
    itens: [
      { nome: 'CrossFit', texto: 'O treino do dia, com escalas para cada nível.', foto: f(7688862) },
      { nome: 'Iniciantes', texto: 'Um mês para aprender os movimentos com calma.', foto: f(4853325), tag: 'Comece aqui' },
      { nome: 'Mobilidade', texto: 'Aula de 45 minutos para soltar o corpo.', foto: f(327295) },
      { nome: 'Endurance', texto: 'Corrida, remo e corda para ganhar fôlego.', foto: f(2294400) },
    ],
  },
  depoimentos: {
    eyebrow: 'A tribo',
    titulo: 'Quem chega, fica.',
    itens: [
      { texto: 'Cheguei sem conhecer ninguém. Hoje meus melhores amigos são daqui.', nome: 'Carla D.', info: 'Na tribo há 3 anos' },
      { texto: 'O grito da turma no último round é o que me faz voltar todo dia.', nome: 'Pedro H.', info: 'Na tribo há 1 ano' },
      { texto: 'Comecei com 58 anos. Fiz minha primeira barra aos 60.', nome: 'Seu Antônio', info: 'Na tribo há 2 anos' },
      { texto: 'Os eventos de fim de mês são incríveis. Tem até churrasco depois do treino.', nome: 'Jéssica F.', info: 'Na tribo há 8 meses' },
      { texto: 'Os coaches lembram do seu nome, da sua lesão e do seu recorde.', nome: 'Rodrigo A.', info: 'Na tribo há 4 anos' },
      { texto: 'Treinar em grupo mudou minha relação com o exercício.', nome: 'Mariana S.', info: 'Na tribo há 6 meses' },
    ],
  },
  equipe: {
    eyebrow: 'Coaches',
    titulo: 'Os líderes da tribo.',
    itens: [
      { nome: 'Gabi Torres', cargo: 'Head coach' },
      { nome: 'Rafa Prado', cargo: 'CrossFit e LPO' },
      { nome: 'Igor Melo', cargo: 'Força' },
      { nome: 'Nina Costa', cargo: 'Mobilidade' },
    ],
  },
  horarios: {
    eyebrow: 'Horários',
    titulo: 'Escolha sua turma.',
    dias: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    linhas: [
      { hora: '06:30', aulas: ['CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', null] },
      { hora: '08:00', aulas: [null, null, null, null, null, 'Em dupla'] },
      { hora: '12:00', aulas: ['CrossFit', 'Mobilidade', 'CrossFit', 'Mobilidade', 'CrossFit', null] },
      { hora: '18:30', aulas: ['CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', null] },
      { hora: '19:30', aulas: ['Iniciantes', 'Endurance', 'Iniciantes', 'Endurance', null, null] },
    ],
  },
  planos: {
    eyebrow: 'Planos',
    titulo: 'Entre para a tribo.',
    itens: [
      { nome: 'Tribo 3x', preco: 'R$ 249', periodo: '/mês', itens: ['3 aulas por semana', 'Eventos inclusos', 'Sem fidelidade'] },
      { nome: 'Tribo livre', preco: 'R$ 319', periodo: '/mês', itens: ['Aulas ilimitadas', 'Eventos inclusos', 'Camiseta da Tribo'], destaque: 'Mais escolhido' },
      { nome: 'Dupla', preco: 'R$ 559', periodo: '/mês', itens: ['Tribo livre para 2 pessoas', 'Treine com quem você gosta', 'Sem fidelidade'] },
    ],
    nota: 'Valores fictícios de demonstração.',
  },
  local: {
    endereco: 'Rua da Tribo, 300',
    bairro: 'Vila Esportiva · Sua cidade',
    telefone: '(11) 0000-0000',
    horario: [
      { dias: 'Segunda a sexta', horas: '06:00 às 21:00' },
      { dias: 'Sábado', horas: '08:00 às 11:00' },
      { dias: 'Domingo', horas: 'Fechado' },
    ],
  },
  ctaFinal: { titulo: 'Vem conhecer a tribo.', texto: 'A primeira aula é grátis. E o café depois do treino também.' },
};

export default demo;
