// MINUTA: revisar com advogado antes de usar com cliente real.
// A versão vai junto com o aceite, para saber qual texto cada cliente aceitou.
// Campos entre {{ }} são preenchidos com os dados do pedido. Na página /termos/ aparecem em branco.
import {
  marca,
  prazoDias,
  diasMaterial,
  horasPagamento,
  horasAjuste,
  diasUteisAjuste,
  parcelasMax,
  rodadasAjuste,
  mesesHospedagem,
} from './oferta';

export const versaoContrato = 'v1-2026-11-04';
export const tituloContrato = 'Contrato de prestação de serviços de criação e renovação de site';

/** Rótulo de cada campo quando o contrato aparece sem pedido (modelo em branco). */
export const camposEmBranco: Record<string, string> = {
  contratante: '[nome ou razão social, CPF ou CNPJ, endereço, e-mail e WhatsApp informados no pedido]',
  servico: '[criação ou renovação]',
  modelo: '[modelo escolhido]',
  adicional: '[com ou sem o serviço adicional]',
  valor: '[valor do pedido]',
  localData: '[cidade e data do aceite]',
  assinante: '[nome de quem aceita]',
  documento: '[CPF ou CNPJ]',
  aceite: '[data, hora e IP do aceite eletrônico]',
};

const extenso: Record<number, string> = { 2: 'duas', 3: 'três', 5: 'cinco', 7: 'sete', 10: 'dez', 12: 'doze', 24: 'vinte e quatro', 48: 'quarenta e oito' };
const n = (v: number, f = false) => `${v} (${f && v === 2 ? 'duas' : extenso[v] ?? v})`;

const sede = marca.endereco || '[endereço da sede]';

export const qualificacaoContratada = `${marca.razaoSocial}, pessoa jurídica de direito privado inscrita no CNPJ sob o nº ${marca.cnpj}, com sede em ${sede}, responsável pela marca ${marca.nome}, doravante denominada CONTRATADA.`;
export const qualificacaoContratante = '{{contratante}}, doravante denominada CONTRATANTE.';

export const preambulo = 'As partes acima identificadas têm entre si justo e contratado o presente Contrato de Prestação de Serviços, que se rege pelas cláusulas a seguir.';

export const clausulas: { titulo: string; itens: string[] }[] = [
  {
    titulo: 'Do objeto',
    itens: [
      `O presente contrato tem por objeto a prestação, pela CONTRATADA, do serviço de {{servico}} de site para a CONTRATANTE, com base no modelo {{modelo}} da ${marca.nome}, com até 5 (cinco) páginas, ou até 3 (três) páginas no caso de personal trainer, {{adicional}}.`,
      'O site é desenvolvido sobre o modelo escolhido, com os textos, a marca, as fotos e as informações enviados pela CONTRATANTE. Não fazem parte do objeto funcionalidades que o modelo não possui, como agendamento online, área do aluno, blog, loja virtual e integração com sistemas de gestão.',
    ],
  },
  {
    titulo: 'Do material',
    itens: [
      `Cabe à CONTRATANTE enviar, pelo formulário da ${marca.nome}, os dados, textos, logotipo e fotos necessários ao site ("material"). Na renovação, o conteúdo do site atual da CONTRATANTE pode ser usado como material.`,
      'A CONTRATANTE declara ter o direito de uso de todo o material enviado, inclusive imagens de alunos e de terceiros, e responde integralmente por ele.',
      `A CONTRATANTE tem ${n(diasMaterial)} dias corridos, contados do aceite deste contrato, para completar o envio do material. Se o material não for completado nesse prazo, o pedido é cancelado automaticamente, sem custo para nenhuma das partes, e o preço contratado deixa de valer.`,
    ],
  },
  {
    titulo: 'Do prazo e da entrega',
    itens: [
      `A CONTRATADA entregará o site em até ${n(prazoDias)} dias corridos, contados do recebimento do material completo. Na renovação, o prazo conta do aceite deste contrato, salvo se a CONTRATANTE optar por enviar material novo.`,
      'Considera-se entregue o site quando a CONTRATADA envia à CONTRATANTE, por WhatsApp ou e-mail, o link da prévia do site pronto ("prévia").',
      'A troca de modelo é permitida, sem custo, até o início da produção, que é comunicado pela CONTRATADA.',
    ],
  },
  {
    titulo: 'Dos ajustes',
    itens: [
      `Estão incluídas ${n(rodadasAjuste, true)} rodadas de ajustes.`,
      `A partir do envio da prévia, a CONTRATANTE tem ${n(horasAjuste)} horas para enviar a lista de ajustes da primeira rodada, em uma única mensagem. A CONTRATADA aplica os ajustes em até ${n(diasUteisAjuste)} dias úteis e envia a nova versão. A segunda rodada segue as mesmas regras, contadas do envio da nova versão.`,
      `Se a CONTRATANTE não enviar a lista de ajustes dentro das ${horasAjuste} horas, a versão enviada é considerada aprovada e as rodadas restantes se encerram.`,
      'Entram nos ajustes: textos; troca ou inclusão de fotos nas seções existentes; horários, planos, preços e contatos; ajuste de cores e do logotipo; ligar, desligar ou reordenar seções do modelo. Não entram: troca de modelo após a entrega, páginas ou seções que o modelo não possui, funcionalidades novas e efeitos sob medida, que podem ser orçados à parte.',
    ],
  },
  {
    titulo: 'Do preço e do pagamento',
    itens: [
      'Pelo serviço, a CONTRATANTE pagará à CONTRATADA o valor de {{valor}}, em pagamento único. Este contrato não cria mensalidade, assinatura ou cobrança recorrente.',
      `Nenhum valor é cobrado antes da entrega. A cobrança é emitida pela plataforma Asaas no momento da entrega e vence em ${n(horasPagamento)} horas.`,
      `O pagamento pode ser feito por Pix, boleto ou cartão de crédito, à vista ou parcelado em até ${n(parcelasMax)} vezes. No parcelamento, os juros e encargos do cartão ficam a cargo da CONTRATANTE.`,
      'O vencimento não depende das rodadas de ajustes nem da publicação do site no domínio.',
    ],
  },
  {
    titulo: 'Da publicação e do domínio',
    itens: [
      'O site é publicado no domínio da CONTRATANTE após a confirmação do pagamento.',
      'Cabe à CONTRATANTE liberar o acesso ao seu domínio ou registrá-lo em seu nome, com orientação da CONTRATADA. Se a liberação do acesso demorar, a publicação aguarda, mas o vencimento do pagamento continua o mesmo.',
      'Na troca de site, a CONTRATADA mantém os registros de e-mail já existentes no domínio da CONTRATANTE.',
    ],
  },
  {
    titulo: 'Da hospedagem',
    itens: [
      `A hospedagem do site está incluída no valor deste contrato por ${n(mesesHospedagem)} meses, contados da publicação.`,
      'Após esse período, a renovação da hospedagem é opcional, pelos valores informados pela CONTRATADA antes do vencimento.',
    ],
  },
  {
    titulo: 'Do atraso no pagamento',
    itens: [
      'O atraso no pagamento sujeita a CONTRATANTE a multa de 2% (dois por cento) e juros de 1% (um por cento) ao mês sobre o valor devido.',
      'Decorridos 5 (cinco) dias do vencimento sem pagamento, a CONTRATADA poderá registrar o débito em órgãos de proteção ao crédito.',
      'Enquanto houver pendência, o site não é publicado e a prévia pode ser retirada do ar.',
    ],
  },
  {
    titulo: 'Do cancelamento',
    itens: [
      'A CONTRATANTE pode cancelar o pedido sem custo até o início da produção.',
      'Após o início da produção, o cancelamento pela CONTRATANTE gera multa de 50% (cinquenta por cento) do valor deste contrato.',
    ],
  },
  {
    titulo: 'Da propriedade',
    itens: [
      'O conteúdo do site (textos, fotos, marca e dados) pertence à CONTRATANTE.',
      'O modelo (layout, design e código) pertence à CONTRATADA e pode ser usado em sites de outros clientes.',
      'A CONTRATADA pode exibir o site como exemplo do seu trabalho, salvo pedido contrário da CONTRATANTE por escrito.',
    ],
  },
  {
    titulo: 'Dos dados pessoais',
    itens: ['Os dados informados no pedido são tratados pela CONTRATADA apenas para executar este contrato e emitir a cobrança, nos termos da Lei nº 13.709/2018 (Lei Geral de Proteção de Dados).'],
  },
  {
    titulo: 'Da assinatura eletrônica',
    itens: [
      'As partes reconhecem como válido o aceite eletrônico deste contrato, registrado com nome, documento, data, hora e endereço IP de quem aceita, nos termos do art. 10, § 2º, da Medida Provisória nº 2.200-2/2001.',
      'A CONTRATANTE recebe uma via deste contrato por e-mail e pode baixá-la ao final do pedido.',
    ],
  },
  {
    titulo: 'Do foro',
    itens: [`Fica eleito o foro da comarca de ${marca.foro} para resolver qualquer questão oriunda deste contrato.`],
  },
];

export const encerramento = 'E, por estarem de acordo, as partes firmam o presente contrato eletronicamente.';

const ordinais = ['primeira', 'segunda', 'terceira', 'quarta', 'quinta', 'sexta', 'sétima', 'oitava', 'nona', 'décima', 'décima primeira', 'décima segunda', 'décima terceira', 'décima quarta'];
export const nomeClausula = (i: number) => `Cláusula ${ordinais[i]}`;
