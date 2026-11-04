import type { Demo } from './tipos';
import { f } from './fotos';

const demo: Demo = {
  slug: 'premium',
  academia: 'Atelier Fit',
  logo: 'Atelier Fit',
  whatsMsg: 'Olá! Gostaria de agendar uma visita ao Atelier Fit.',
  cta: 'Agendar visita',
  nav: [
    { label: 'O Atelier', href: '#sobre' },
    { label: 'Treinos', href: '#modalidades' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Planos', href: '#planos' },
  ],
  secoes: ['sobre', 'modalidades', 'galeria', 'equipe', 'planos', 'depoimentos', 'local', 'cta'],
  hero: {
    eyebrow: 'Academia boutique',
    titulo: 'Seu treino, no seu tempo.',
    texto: 'No máximo 30 alunos por horário, treino montado por especialistas e um espaço pensado em cada detalhe.',
    foto: f(30021732),
    fotos: [f(2247179)],
    ctaSec: { label: 'Conhecer o espaço', href: '#galeria' },
  },
  sobre: {
    eyebrow: 'O Atelier',
    titulo: 'Menos gente. Mais atenção.',
    texto: [
      'Criamos o Atelier para quem quer treinar bem sem disputar aparelho. Cada aluno tem um professor de referência, que acompanha a evolução e ajusta o treino a cada mês.',
      'Toalhas, armário com chave, café e vestiário com amenities já estão inclusos. Você só precisa chegar.',
    ],
    foto: f(3757943),
    itens: ['Máximo de 30 alunos por horário', 'Um professor para cada 8 alunos', 'Reavaliação física todo mês'],
  },
  modalidades: {
    eyebrow: 'Treinos',
    titulo: 'Três formas de treinar com a gente.',
    itens: [
      { nome: 'Treino personalizado', texto: 'Seu plano montado e acompanhado pelo professor de referência.', foto: f(2247179) },
      { nome: 'Força', texto: 'Hipertrofia e força com periodização e controle de carga.', foto: f(6922170) },
      { nome: 'Bike & condicionamento', texto: 'Aulas de 40 minutos em turmas de até 10 pessoas.', foto: f(775025) },
    ],
  },
  galeria: {
    eyebrow: 'O espaço',
    titulo: 'Luz natural, silêncio e equipamentos de primeira.',
    fotos: [
      { foto: f(30021732) },
      { foto: f(3757943) },
      { foto: f(2247179) },
      { foto: f(6922170) },
      { foto: f(775025) },
      { foto: f(6539865) },
    ],
  },
  equipe: {
    eyebrow: 'Equipe',
    titulo: 'Professores que conhecem você pelo nome.',
    itens: [
      { nome: 'Helena Prado', cargo: 'Coordenadora técnica', foto: f(6539865) },
      { nome: 'Caio Ventura', cargo: 'Força e hipertrofia', foto: f(7203532) },
      { nome: 'Bruno Sales', cargo: 'Condicionamento', foto: f(5327506) },
    ],
  },
  planos: {
    eyebrow: 'Planos',
    titulo: 'Escolha o seu ritmo.',
    itens: [
      { nome: 'Essencial', preco: 'R$ 390', periodo: '/mês', itens: ['Treino personalizado', 'Horários livres', 'Reavaliação mensal'] },
      { nome: 'Atelier', preco: 'R$ 590', periodo: '/mês', itens: ['Tudo do Essencial', 'Aulas de bike', 'Nutricionista 1x por mês'], destaque: 'Recomendado' },
      { nome: 'Private', preco: 'R$ 1.290', periodo: '/mês', itens: ['Personal 3x por semana', 'Horário reservado', 'Plano alimentar'] },
    ],
    nota: 'Valores fictícios de demonstração.',
  },
  depoimentos: {
    eyebrow: 'Alunos',
    titulo: 'O que dizem de nós.',
    itens: [
      { texto: 'É a primeira academia em que eu não preciso esperar aparelho. E o professor sabe exatamente onde eu estou no treino.', nome: 'Fernanda C.', info: 'Aluna há 2 anos' },
      { texto: 'Ambiente calmo, limpo e com gente que entende de treino. Vale cada centavo.', nome: 'Ricardo B.', info: 'Aluno há 1 ano' },
      { texto: 'Voltei a treinar depois de uma cirurgia no joelho. A atenção da equipe fez toda a diferença.', nome: 'Marta S.', info: 'Aluna há 8 meses' },
    ],
  },
  local: {
    endereco: 'Alameda Exemplo, 900',
    bairro: 'Jardins · Sua cidade',
    telefone: '(11) 0000-0000',
    horario: [
      { dias: 'Segunda a sexta', horas: '06:00 às 22:00' },
      { dias: 'Sábado', horas: '08:00 às 14:00' },
      { dias: 'Domingo', horas: 'Fechado' },
    ],
  },
  ctaFinal: { titulo: 'Venha tomar um café com a gente.', texto: 'Agende uma visita guiada, conheça o espaço e faça um treino experimental com um dos nossos professores.' },
};

export default demo;
