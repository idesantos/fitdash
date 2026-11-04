// MINUTA — revisar com advogado antes de usar com cliente real.
// A versão vai junto com o aceite, para saber qual texto cada cliente aceitou.
import { marca, prazoDias, parcelasMax, rodadasAjuste, diasParaAjustes, mesesHospedagem } from './oferta';

export const versaoContrato = 'minuta-2026-11-03';

const contratada = marca.razaoSocial
  ? `${marca.razaoSocial}${marca.cnpj ? `, CNPJ ${marca.cnpj}` : ''} ("${marca.nome}")`
  : `${marca.nome} [razão social e CNPJ a preencher]`;

export const clausulas: { titulo: string; itens: string[] }[] = [
  {
    titulo: 'Partes e objeto',
    itens: [
      `Contratada: ${contratada}. Contratante: a pessoa ou empresa identificada no pedido.`,
      'Objeto: criação ou renovação de site a partir do modelo escolhido no pedido, com até 5 páginas (3 para personal trainer), e, se contratado, o serviço "Google e IA".',
    ],
  },
  {
    titulo: 'Material',
    itens: [
      'A Contratante envia pelo formulário os dados, textos, logo e fotos da academia.',
      'A Contratante garante que tem o direito de usar todo o material enviado (fotos, logo, textos, depoimentos e imagens de alunos).',
      'O prazo de entrega começa a contar quando o material estiver completo. Material incompleto pausa o prazo.',
    ],
  },
  {
    titulo: 'Prazo e entrega',
    itens: [
      `A entrega acontece em até ${prazoDias} dias corridos, com o envio do link de prévia do site pronto.`,
      'A troca de modelo é livre até o início da produção. Depois, só por novo pedido.',
    ],
  },
  {
    titulo: 'Pagamento',
    itens: [
      'O valor é o informado no pedido. Nada é cobrado antes da entrega.',
      'A cobrança é emitida pelo Asaas na entrega e vence no dia seguinte.',
      `Formas: Pix, boleto ou cartão de crédito em até ${parcelasMax}x. No parcelado, os juros do cartão são da Contratante.`,
    ],
  },
  {
    titulo: 'Publicação',
    itens: [
      'O site é publicado no domínio da Contratante depois da confirmação do pagamento.',
      'A publicação depende do acesso ao domínio, fornecido pela Contratante. Demora nesse acesso não altera o vencimento.',
      'Na troca de site, a Contratada mantém os registros de e-mail existentes no domínio.',
    ],
  },
  {
    titulo: 'Ajustes',
    itens: [
      `Estão inclusas ${rodadasAjuste} rodadas de ajustes, válidas por ${diasParaAjustes} dias após a entrega. Cada rodada é uma lista única, feita em até 3 dias úteis.`,
      'Entram: textos, troca ou inclusão de fotos nas seções existentes, horários, planos, preços, contatos, ajuste de cores e logo, ligar, desligar ou reordenar seções do modelo.',
      'Não entram: troca de modelo após a entrega, páginas ou seções que o modelo não tem, agendamento online, área do aluno, blog, loja, integrações e efeitos sob medida.',
    ],
  },
  {
    titulo: 'Atraso e cancelamento',
    itens: [
      'Pagamento em atraso tem multa de 2% e juros de 1% ao mês sobre o valor devido.',
      'Após 5 dias do vencimento, a cobrança pode ser registrada em órgãos de proteção ao crédito (Serasa).',
      'Enquanto houver pendência, o site não é publicado e a prévia pode ser retirada do ar.',
      'O cancelamento é gratuito até o início da produção. Depois disso, gera multa de 50% do valor do pedido.',
    ],
  },
  {
    titulo: 'Hospedagem e propriedade',
    itens: [
      `A hospedagem está inclusa por ${mesesHospedagem} meses a partir da publicação. A renovação é opcional, pelos valores vigentes na época.`,
      'O conteúdo (textos, fotos, marca) é da Contratante. O modelo (design e código) é da Contratada e pode ser usado em sites de outros clientes.',
      'A Contratada pode mostrar o site como exemplo do seu trabalho, salvo pedido contrário por escrito.',
    ],
  },
  {
    titulo: 'Dados e aceite',
    itens: [
      'Os dados do pedido são usados só para executar este contrato e emitir a cobrança (LGPD).',
      'O aceite eletrônico no formulário, registrado com nome, documento, data, hora e IP, vale como assinatura.',
      `Fica eleito o foro de ${marca.foro}.`,
    ],
  },
];
