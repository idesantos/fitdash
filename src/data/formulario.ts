// O formulário é o "CMS" do produto: cada campo vira um dado do modelo.
// Preferir listas de marcar a texto livre — texto livre é o que mais atrasa entrega.
import type { CategoriaId } from './modelos';

export type Extra = {
  id: string;
  label: string;
  tipo: 'texto' | 'textarea' | 'arquivo';
  ajuda?: string;
  placeholder?: string;
  obrigatorio?: boolean;
};

type Conteudo = { rotuloModalidades: string; modalidades: string[]; diferenciais: string[]; extras: Extra[] };

const convenios = ['Aceita Wellhub (Gympass)', 'Aceita TotalPass'];

const grade = (rotulo = 'Grade de horários'): Extra => ({
  id: 'grade',
  label: rotulo,
  tipo: 'arquivo',
  ajuda: 'Pode ser foto do quadro, PDF ou planilha. A gente transcreve.',
});

const equipe = (rotulo: string): Extra => ({
  id: 'equipe',
  label: rotulo,
  tipo: 'textarea',
  placeholder: 'Nome, formação e há quanto tempo está com vocês. Uma pessoa por linha.',
});

export const conteudoPorCategoria: Record<CategoriaId, Conteudo> = {
  musculacao: {
    rotuloModalidades: 'O que vocês oferecem?',
    modalidades: ['Musculação', 'Funcional', 'Spinning / bike', 'Dança', 'Lutas', 'Pilates solo', 'Alongamento', 'Avaliação física', 'Treino para idosos', 'Treino feminino'],
    diferenciais: ['Aberto 24h', 'Ar-condicionado', 'Estacionamento', 'Vestiário com armário', 'App de treino', 'Professor no salão o tempo todo', 'Aparelhos novos', 'Acessibilidade', ...convenios],
    extras: [
      { id: 'estrutura', label: 'Conte da estrutura', tipo: 'textarea', placeholder: 'Tamanho (m²), marca dos aparelhos, áreas (peso livre, cardio, sala de aula)...' },
      grade('Horários das aulas coletivas (se tiver)'),
    ],
  },
  natacao: {
    rotuloModalidades: 'Quais modalidades vocês têm?',
    modalidades: ['Natação bebê', 'Natação infantil', 'Natação adulto', 'Hidroginástica', 'Natação para gestantes', 'Hidro funcional', 'Equipe / treino', 'Musculação', 'Ginástica'],
    diferenciais: ['Piscina aquecida', 'Piscina coberta', 'Tratamento com ozônio ou sal', 'Metodologia própria ou licenciada', 'Turmas por nível', 'Estacionamento', 'Vestiário família', ...convenios],
    extras: [
      grade(),
      { id: 'niveis', label: 'Tem níveis ou metodologia? Quais?', tipo: 'textarea', placeholder: 'Ex.: 7 níveis com touca colorida, avaliação a cada semestre...' },
      { id: 'temperatura', label: 'Temperatura da água', tipo: 'texto', placeholder: 'Ex.: 30 °C' },
    ],
  },
  crossfit: {
    rotuloModalidades: 'Quais aulas vocês têm?',
    modalidades: ['Treino do dia (WOD)', 'LPO / levantamento olímpico', 'Ginástica', 'Mobilidade', 'Endurance', 'Kids / teens', 'Open gym', 'Turma para iniciantes'],
    diferenciais: ['Box afiliado oficial CrossFit', 'Coaches certificados', 'Aula experimental grátis', 'Drop-in para visitantes', 'Turmas pequenas', 'Estacionamento', 'Vestiário', ...convenios],
    extras: [grade('Horários das aulas'), equipe('Coaches')],
  },
  pilates: {
    rotuloModalidades: 'Quais aulas vocês têm?',
    modalidades: ['Pilates em aparelhos', 'Pilates solo', 'Pilates para gestantes', 'Pilates para idosos', 'Fisioterapia', 'RPG', 'Funcional', 'Yoga'],
    diferenciais: ['Aparelhos completos (Reformer, Cadillac, Chair, Barrel)', 'Turmas de até 3 alunos', 'Aula individual', 'Fisioterapeutas na equipe', 'Reposição de aulas', 'Estacionamento', ...convenios],
    extras: [grade('Horários das turmas'), equipe('Instrutores')],
  },
  personal: {
    rotuloModalidades: 'Suas especialidades',
    modalidades: ['Emagrecimento', 'Hipertrofia', 'Terceira idade', 'Gestantes', 'Reabilitação', 'Corrida', 'Funcional', 'Consultoria online'],
    diferenciais: ['Atende em academia', 'Atende em casa ou condomínio', 'Treino ao ar livre', 'Atendimento online', 'Avaliação física', 'Planilha ou app de treino', 'Acompanhamento pelo WhatsApp'],
    extras: [
      { id: 'bio', label: 'Sua história em poucas linhas', tipo: 'textarea', obrigatorio: true, placeholder: 'Formação, há quanto tempo atende, por que escolheu a profissão...' },
      { id: 'cref', label: 'CREF', tipo: 'texto', placeholder: '000000-G/SP' },
      { id: 'regiao', label: 'Bairros ou região que você atende', tipo: 'texto' },
      { id: 'resultados', label: 'Fotos de resultados de alunos', tipo: 'arquivo', ajuda: 'Só com autorização dos alunos.' },
    ],
  },
};

export const mudancasRenovacao = ['Endereço ou telefone mudou', 'Horários desatualizados', 'Modalidades novas', 'Fotos antigas', 'Planos e preços mudaram', 'Equipe mudou'];

export const guiaFotos = [
  'Fachada, de dia, de frente',
  'Recepção e entrada',
  'O espaço de treino inteiro, de um canto',
  'Aulas acontecendo, com alunos (com autorização)',
  'Detalhes: aparelhos, piscina, vestiário',
  'Você e a equipe',
];

export const dicasFotos = ['Celular na horizontal', 'Luz natural, sem flash', 'Lente limpa', 'Sem filtro'];
