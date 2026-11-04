// Tudo o que é preço, prazo e regra da oferta mora aqui. Mudou aqui, muda no site e no formulário.

export const marca = {
  nome: 'FitDash',
  descricao: 'Sites para academias, studios e personais.',
  // Preencher quando definido: aparece no rodapé e no contrato.
  razaoSocial: 'Simbium LTDA',
  cnpj: '57.803.299/0001-30',
  endereco: '', // endereço da sede, para o contrato
  whatsapp: '', // só números, com DDI: 5511999999999
  email: '',
  foro: 'São Paulo/SP',
};

/** Fim da Black. Depois disso o site mostra só o preço normal (também no navegador, sem precisar publicar de novo). */
export const black = {
  nome: 'Black FitDash',
  fim: '2026-11-30T23:59:59-03:00',
};

export const prazoDias = 10; // entrega, contada do material completo
export const diasMaterial = 7; // para o cliente completar o material, contados do aceite
export const horasPagamento = 24; // vencimento da cobrança, contado da entrega
export const horasAjuste = 48; // para mandar a lista de cada rodada, contadas da prévia
export const diasUteisAjuste = 3; // para a FitDash aplicar cada rodada
export const parcelasMax = 10;
export const rodadasAjuste = 2;
export const mesesHospedagem = 12;

/** O que se cobra é um valor só, uma vez. Repetido nos preços, no formulário e no contrato. */
export const pagamentoUnico = 'Pagamento único, sem mensalidade';

export type Servico = {
  id: 'renovacao' | 'criacao';
  nome: string;
  para: string;
  preco: number;
  precoBlack: number;
  resumo: string;
  itens: string[];
};

const comum = [
  'Modelo à sua escolha, com a sua marca e as suas fotos',
  'Até 5 páginas (3 para personal)',
  'Feito primeiro para o celular, e rápido',
  'WhatsApp com mensagem pronta em cada botão',
  'Horários, mapa e rota até a academia',
  'Publicado no seu domínio, com https',
  `${rodadasAjuste} rodadas de ajustes`,
];

export const servicos: Servico[] = [
  {
    id: 'renovacao',
    nome: 'Renovação',
    para: 'Para quem já tem site',
    preco: 397,
    precoBlack: 199,
    resumo: 'Você manda o link do site atual e a gente puxa tudo de lá.',
    itens: ['Aproveitamos textos, horários e modalidades do site atual', ...comum, 'Endereços antigos mantidos, para não perder posição no Google'],
  },
  {
    id: 'criacao',
    nome: 'Criação',
    para: 'Para quem ainda não tem site',
    preco: 497,
    precoBlack: 299,
    resumo: 'Você responde um formulário guiado e a gente escreve e monta.',
    itens: ['Formulário guiado: você responde, a gente escreve os textos', ...comum, 'Ajuda para registrar o domínio no seu nome'],
  },
];

export const upsell = {
  id: 'google-ia' as const,
  nome: 'Google e IA',
  chamada: 'Apareça para quem procura academia no seu bairro',
  preco: 197,
  precoBlack: 99,
  itens: [
    'Perfil da Empresa no Google revisado: categoria, horários, fotos e serviços',
    'Dados estruturados para o Google e as IAs entenderem o que sua academia oferece',
    'Páginas com o nome do seu bairro e da sua cidade',
    'Cadastro no Google Search Console e no Bing (fonte de várias IAs, como o ChatGPT)',
    'Relatório de antes e depois em 30 dias',
  ],
  // Nada aqui promete posição. O que se entrega é a preparação, não o resultado.
  aviso: 'Ninguém controla o que o Google ou uma IA mostram. A gente deixa sua academia pronta para ser encontrada.',
};

export const incluso = [
  { icone: 'phone', titulo: 'Celular primeiro', texto: 'A maioria dos alunos chega pelo celular. O site é pensado para ele.' },
  { icone: 'bolt', titulo: 'Rápido de abrir', texto: 'Sem plugin pesado, sem tela branca esperando carregar.' },
  { icone: 'whatsapp', titulo: 'WhatsApp em tudo', texto: 'Cada botão já abre a conversa com a mensagem certa.' },
  { icone: 'clock', titulo: 'Horários vivos', texto: 'Grade fácil de ler, com o que está aberto agora.' },
  { icone: 'pin', titulo: 'Mapa e rota', texto: 'Um toque e o Google Maps ou o Waze levam até a porta.' },
  { icone: 'layers', titulo: 'Uma página por modalidade', texto: 'Quem procura pilates cai direto na página de pilates.' },
  { icone: 'search', titulo: 'Pronto para o Google', texto: 'Títulos, descrições e dados que o Google entende.' },
  { icone: 'globe', titulo: 'Seu domínio', texto: 'suaacademia.com.br, com cadeado de segurança.' },
  { icone: 'server', titulo: 'Hospedagem inclusa', texto: `Os primeiros ${mesesHospedagem} meses são por nossa conta.` },
];

export const ajustes = {
  entra: [
    'Qualquer texto do site',
    'Trocar ou incluir fotos nas seções que já existem',
    'Horários, planos, preços e contatos',
    'Ajuste de cores e da logo',
    'Ligar, desligar ou reordenar seções do modelo',
  ],
  naoEntra: [
    'Trocar de modelo depois da entrega (antes da produção pode)',
    'Página ou seção que o modelo não tem',
    'Agendamento online, área do aluno, blog ou loja',
    'Integração com sistema de gestão',
    'Efeito ou animação feitos sob medida',
  ],
};

export const passos = [
  { titulo: 'Escolha o modelo', texto: '5 categorias, 3 modelos em cada. Veja ao vivo antes de decidir.' },
  { titulo: 'Conte sobre a academia', texto: `Um formulário de uns 15 minutos: dados, horários, logo e fotos. Já tem site? Manda o link. O que faltar, você completa em até ${diasMaterial} dias.` },
  { titulo: 'Assine sem pagar nada', texto: 'Contrato digital, aceito no próprio formulário. Sem cartão, sem boleto.' },
  { titulo: 'Receba e só então pague', texto: `Em até ${prazoDias} dias você recebe o link do site pronto e tem ${horasPagamento}h para pagar. Pagamento único: Pix, boleto ou até ${parcelasMax}x.` },
];

export const faq = [
  { p: 'Preciso pagar alguma coisa agora?', r: `Não. Você escolhe, preenche e aceita o contrato. A cobrança só é emitida na entrega do site pronto e vence em ${horasPagamento} horas.` },
  { p: 'É mensalidade ou assinatura?', r: `Não. É pagamento único: você paga uma vez, na entrega, à vista ou parcelado em até ${parcelasMax}x no cartão. A hospedagem dos primeiros ${mesesHospedagem} meses já está inclusa nesse valor.` },
  { p: 'E se eu não gostar do resultado?', r: `Você vê o site pronto antes de pagar. A partir da prévia, você tem ${horasAjuste} horas para mandar a lista de ajustes, e são ${rodadasAjuste} rodadas: textos, fotos, cores, horários e seções.` },
  { p: 'Em quanto tempo fica pronto?', r: `Em até ${prazoDias} dias depois que recebemos o material completo: dados, logo e fotos. Na renovação, a gente usa o conteúdo do seu site atual e o prazo começa no pedido.` },
  { p: 'E se eu demorar para mandar o material?', r: `Você tem até ${diasMaterial} dias, contados do pedido, para completar o material. Se não completar, o pedido é cancelado sem custo nenhum, e o preço promocional deixa de valer.` },
  { p: 'Como posso pagar?', r: `Pagamento único, na entrega: Pix, boleto ou cartão em até ${parcelasMax}x. No parcelado, os juros do cartão são por conta de quem compra. A cobrança vem pelo Asaas.` },
  { p: 'Preciso ter domínio?', r: 'Não. Se você ainda não tem, a gente ajuda a registrar no Registro.br, no seu nome (custa cerca de R$ 40 por ano, pago direto a eles).' },
  { p: 'Quem hospeda o site?', r: `A gente. Os primeiros ${mesesHospedagem} meses estão inclusos no valor. Depois disso, a renovação da hospedagem é opcional.` },
  { p: 'Vou perder meu e-mail da academia?', r: 'Não. Na troca do site a gente mantém o seu e-mail funcionando como está.' },
  { p: 'Meu site é WordPress, Wix ou de agência. Dá para renovar?', r: 'Dá. A gente puxa o conteúdo do site atual, monta o novo no modelo escolhido e só troca quando o novo estiver aprovado e pago.' },
  { p: 'Não tenho fotos boas. E agora?', r: 'Fotos de celular servem, se forem na horizontal e com luz natural. O formulário traz um guia do que fotografar. Quanto melhores as fotos, melhor o site.' },
  { p: 'O que acontece se eu não pagar?', r: 'O site não é publicado no seu domínio. O contrato prevê multa e juros por atraso, e a cobrança pode ser registrada na Serasa.' },
];

export const brl = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, maximumFractionDigits: 0 });

/** Na build, decide se a Black ainda vale. No navegador o script de preços confere de novo. */
export const blackAtiva = (agora = new Date()) => agora.getTime() <= new Date(black.fim).getTime();
