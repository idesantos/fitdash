/**
 * FitDash · recebe os pedidos do formulário do site (/comecar/).
 *
 * Para cada pedido:
 *  1. cria uma pasta no Google Drive com o logo, as fotos e a via do contrato em PDF;
 *  2. registra uma linha na planilha "FitDash · Pedidos";
 *  3. cadastra o cliente no Asaas (sem cobrança nenhuma);
 *  4. avisa você por e-mail e manda ao cliente a confirmação com a via do contrato.
 *
 * Chave do Asaas: propriedade do script ASAAS_API_KEY ou o arquivo Chave.gs gerado por publicar.sh.
 *  $aact_hmlg_... usa o ambiente de testes; $aact_prod_..., produção.
 * Propriedades do script (Configurações do projeto > Propriedades do script):
 *  EMAIL_AVISO    (opcional) quem recebe o aviso de pedido novo. Sem ela, vai para o dono do script.
 *
 * Instalação: veja LEIA-ME.md nesta pasta.
 */

const NOME_PASTA = 'FitDash · Pedidos';
const NOME_PLANILHA = 'FitDash · Pedidos';
const LIMITE_POR_DOCUMENTO_DIA = 5; // trava simples contra pedidos repetidos
const COLUNAS = [
  'Recebido em', 'Pedido', 'Status', 'Serviço', 'Modelo', 'Categoria', 'Google e IA', 'Total (R$)',
  'Academia', 'Responsável', 'WhatsApp', 'E-mail', 'CPF/CNPJ', 'Cidade/UF', 'Site atual', 'Domínio',
  'Fotos', 'Pasta', 'Contrato (PDF)', 'Cliente Asaas', 'Aceite', 'IP', 'Navegador',
];

/** Rode uma vez pelo editor para autorizar o acesso ao Drive, à planilha e ao e-mail. */
function configurar() {
  const pasta = pastaRaiz_();
  const planilha = planilha_();
  Logger.log('Pasta: ' + pasta.getUrl());
  Logger.log('Planilha: ' + planilha.getUrl());
  Logger.log('Asaas: ' + (chaveAsaas_() ? ambienteAsaas_().nome : 'sem chave (o cadastro no Asaas fica desligado)'));
}

function doGet() {
  return json_({ ok: true, servico: 'FitDash · pedidos' });
}

function doPost(e) {
  const trava = LockService.getScriptLock();
  trava.waitLock(30000);
  try {
    const corpo = JSON.parse(e.postData.contents);
    const p = corpo.pedido || {};
    const arquivos = corpo.arquivos || [];
    validar_(p);

    const id = novoId_();
    const pasta = pastaRaiz_().createFolder(id + ' · ' + (p.academia || 'sem nome'));
    const salvos = salvarArquivos_(pasta, arquivos);
    const pdf = salvarContrato_(pasta, id, p);

    let asaas = { id: '', ambiente: '', erro: '' };
    try {
      asaas = cadastrarNoAsaas_(p, id);
    } catch (err) {
      asaas.erro = String(err.message || err);
    }

    registrar_(id, p, pasta, pdf, asaas, salvos);
    avisarDono_(id, p, pasta, pdf, asaas, salvos);
    try {
      enviarVia_(id, p, pdf);
    } catch (err) {
      console.error('Via não enviada ao cliente: ' + err);
    }
    return json_({ ok: true, id: id });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, erro: String(err.message || err) });
  } finally {
    trava.releaseLock();
  }
}

// ---------- Validação ----------
function validar_(p) {
  if (p.empresa_site) throw new Error('Pedido recusado.'); // campo isca, só robô preenche
  if (!p.aceite || !p.assinatura) throw new Error('O contrato precisa ser aceito.');
  const doc = digitos_(p.documento);
  if (!(cpfOk_(doc) || cnpjOk_(doc))) throw new Error('CPF ou CNPJ inválido.');
  if (!/^\S+@\S+\.\S+$/.test(p.email || '')) throw new Error('E-mail inválido.');
  const cache = CacheService.getScriptCache();
  const chave = 'doc-' + doc;
  const n = Number(cache.get(chave) || 0);
  if (n >= LIMITE_POR_DOCUMENTO_DIA) throw new Error('Muitos pedidos com este documento hoje. Fale com a gente no WhatsApp.');
  cache.put(chave, String(n + 1), 21600);
}

// ---------- Drive e planilha ----------
function pastaRaiz_() {
  const props = PropertiesService.getScriptProperties();
  const id = props.getProperty('PASTA_ID');
  if (id) {
    try {
      return DriveApp.getFolderById(id);
    } catch (e) {}
  }
  const pasta = DriveApp.createFolder(NOME_PASTA);
  props.setProperty('PASTA_ID', pasta.getId());
  return pasta;
}

function planilha_() {
  const props = PropertiesService.getScriptProperties();
  const id = props.getProperty('PLANILHA_ID');
  if (id) {
    try {
      return SpreadsheetApp.openById(id);
    } catch (e) {}
  }
  const ss = SpreadsheetApp.create(NOME_PLANILHA);
  const aba = ss.getSheets()[0];
  aba.setName('Pedidos');
  aba.appendRow(COLUNAS);
  aba.setFrozenRows(1);
  aba.getRange(1, 1, 1, COLUNAS.length).setFontWeight('bold');
  DriveApp.getFileById(ss.getId()).moveTo(pastaRaiz_());
  props.setProperty('PLANILHA_ID', ss.getId());
  return ss;
}

function salvarArquivos_(pasta, arquivos) {
  const contagem = {};
  arquivos.forEach(function (a) {
    if (!a || !a.base64) return;
    const n = (contagem[a.campo] = (contagem[a.campo] || 0) + 1);
    const nome = a.campo + '-' + ('0' + n).slice(-2) + '-' + (a.nome || 'arquivo');
    pasta.createFile(Utilities.newBlob(Utilities.base64Decode(a.base64), a.tipo || 'application/octet-stream', nome));
  });
  return contagem;
}

function salvarContrato_(pasta, id, p) {
  const via = (p.contrato && p.contrato.via) || '';
  if (!via) return null;
  const html =
    '<html><head><meta charset="utf-8"><style>' +
    'body{font-family:Georgia,serif;font-size:11pt;line-height:1.55;color:#1b1b1b}' +
    'h1{font-size:14pt;text-align:center;text-transform:uppercase;letter-spacing:.04em;margin:18pt 0}' +
    'h2{font-size:10.5pt;text-transform:uppercase;letter-spacing:.06em;margin:16pt 0 6pt}' +
    'p{margin:0 0 7pt;text-align:justify}header{display:flex;justify-content:space-between;font:bold 8pt Arial;text-transform:uppercase;border-bottom:1px solid #1b1b1b;padding-bottom:6pt}' +
    '.cdoc__assinaturas{margin-top:30pt}.cdoc__assinaturas div{margin-top:24pt;text-align:center}.cdoc__assinaturas p{text-align:center}' +
    '.cdoc__linha{border-top:1px solid #1b1b1b;padding-top:6pt;font-weight:bold}.cdoc__data{text-align:right}' +
    '.cdoc__registro{border:1px dashed #999;padding:8pt;font:9pt Arial;margin-top:20pt}' +
    '</style></head><body>' + via + '</body></html>';
  const blob = Utilities.newBlob(html, 'text/html', 'contrato.html').getAs('application/pdf').setName('Contrato FitDash ' + id + '.pdf');
  return pasta.createFile(blob);
}

function registrar_(id, p, pasta, pdf, asaas, salvos) {
  const aba = planilha_().getSheetByName('Pedidos') || planilha_().getSheets()[0];
  const c = p.contrato || {};
  aba.appendRow([
    new Date(), id, 'Aguardando material', p.servico_nome || p.servico, p.modelo_nome || p.modelo, p.categoria_nome || p.categoria, p.google_ia ? 'Sim' : 'Não', p.total,
    p.academia, p.responsavel, p.whatsapp, p.email, p.documento, [p.cidade, p.uf].filter(String).join('/'),
    p.site_atual || '', p.dominio || (p.tem_dominio === 'nao' ? 'Não tem' : ''),
    p.fotos_quando === 'depois' ? 'Envia depois' : (salvos.fotos || 0) + ' fotos',
    pasta.getUrl(), pdf ? pdf.getUrl() : '', asaas.id ? asaas.id + ' (' + asaas.ambiente + ')' : asaas.erro || 'sem chave',
    c.aceitoEm || '', c.ip || '', c.navegador || '',
  ]);
}

// ---------- Asaas ----------
function chaveAsaas_() {
  // Propriedade do script, ou a constante CHAVE_ASAAS do arquivo Chave.gs (gerado por publicar.sh a partir do Chaveiro do Mac).
  const prop = PropertiesService.getScriptProperties().getProperty('ASAAS_API_KEY');
  if (prop) return prop;
  return typeof CHAVE_ASAAS !== 'undefined' ? CHAVE_ASAAS : '';
}

function ambienteAsaas_() {
  return chaveAsaas_().indexOf('$aact_prod_') === 0
    ? { nome: 'produção', url: 'https://api.asaas.com/v3' }
    : { nome: 'sandbox', url: 'https://api-sandbox.asaas.com/v3' };
}

function chamarAsaas_(metodo, caminho, corpo) {
  const amb = ambienteAsaas_();
  const r = UrlFetchApp.fetch(amb.url + caminho, {
    method: metodo,
    contentType: 'application/json',
    headers: { access_token: chaveAsaas_(), 'User-Agent': 'FitDash-Pedidos/1.0' },
    payload: corpo ? JSON.stringify(corpo) : undefined,
    muteHttpExceptions: true,
  });
  const resposta = JSON.parse(r.getContentText() || '{}');
  if (r.getResponseCode() >= 300) {
    const msg = (resposta.errors || []).map(function (x) { return x.description; }).join('; ');
    throw new Error('Asaas ' + r.getResponseCode() + ': ' + (msg || r.getContentText()));
  }
  return resposta;
}

/** Cadastra o cliente (ou reaproveita o cadastro com o mesmo CPF/CNPJ). Não cria cobrança. */
function cadastrarNoAsaas_(p, id) {
  if (!chaveAsaas_()) return { id: '', ambiente: '', erro: 'sem chave' };
  const amb = ambienteAsaas_().nome;
  const doc = digitos_(p.documento);
  const existente = chamarAsaas_('get', '/customers?cpfCnpj=' + doc);
  if (existente.data && existente.data.length) return { id: existente.data[0].id, ambiente: amb, erro: '' };
  const novo = chamarAsaas_('post', '/customers', {
    name: doc.length === 14 ? p.academia : p.responsavel,
    company: p.academia,
    cpfCnpj: doc,
    email: p.email,
    mobilePhone: digitos_(p.whatsapp),
    address: p.rua || undefined,
    addressNumber: p.numero || undefined,
    complement: p.complemento || undefined,
    province: p.bairro || undefined,
    postalCode: digitos_(p.cep) || undefined,
    externalReference: id,
    notificationDisabled: false,
  });
  return { id: novo.id, ambiente: amb, erro: '' };
}

// ---------- E-mails ----------
function avisarDono_(id, p, pasta, pdf, asaas, salvos) {
  const para = PropertiesService.getScriptProperties().getProperty('EMAIL_AVISO') || Session.getEffectiveUser().getEmail();
  const linhas = [
    ['Academia', p.academia], ['Responsável', p.responsavel], ['WhatsApp', p.whatsapp], ['E-mail', p.email],
    ['CPF/CNPJ', p.documento], ['Serviço', p.servico_nome || p.servico], ['Modelo', (p.modelo_nome || p.modelo) + ' (' + (p.categoria_nome || p.categoria) + ')'],
    ['Google e IA', p.google_ia ? 'Sim' : 'Não'], ['Total na entrega', 'R$ ' + p.total + ' (pagamento único)'],
    ['Site atual', p.site_atual || '—'], ['Fotos', p.fotos_quando === 'depois' ? 'Envia depois (até 7 dias)' : (salvos.fotos || 0) + ' enviadas'],
    ['Asaas', asaas.id ? 'Cliente ' + asaas.id + ' (' + asaas.ambiente + ')' : 'Não cadastrado: ' + (asaas.erro || 'sem chave')],
  ];
  const html =
    '<h2 style="font-family:Arial">Pedido ' + id + '</h2><table style="font-family:Arial;font-size:14px;border-collapse:collapse">' +
    linhas.map(function (l) { return '<tr><td style="padding:4px 12px 4px 0;color:#666">' + esc_(l[0]) + '</td><td style="padding:4px 0"><b>' + esc_(l[1]) + '</b></td></tr>'; }).join('') +
    '</table><p style="font-family:Arial"><a href="' + pasta.getUrl() + '">Abrir a pasta do pedido</a> · <a href="' + planilha_().getUrl() + '">Planilha de pedidos</a></p>';
  MailApp.sendEmail({ to: para, subject: 'Novo pedido FitDash: ' + p.academia + ' · R$ ' + p.total, htmlBody: html, name: 'FitDash', attachments: pdf ? [pdf.getBlob()] : [] });
}

function enviarVia_(id, p, pdf) {
  if (!p.email) return;
  const resposta = PropertiesService.getScriptProperties().getProperty('EMAIL_AVISO') || Session.getEffectiveUser().getEmail();
  const html =
    '<div style="font-family:Arial;font-size:15px;line-height:1.55;color:#111">' +
    '<p>Olá, ' + esc_(p.responsavel) + '!</p>' +
    '<p>Recebemos o pedido do site da <b>' + esc_(p.academia) + '</b> (pedido ' + id + '). Nada foi cobrado.</p>' +
    '<p><b>Próximos passos</b></p><ul>' +
    '<li>Se ainda falta alguma coisa (fotos, logo), você tem até 7 dias para mandar.</li>' +
    '<li>Em até 10 dias depois do material completo, você recebe o link do site pronto.</li>' +
    '<li>A cobrança chega junto com o site: pagamento único, que vence em 24 horas.</li>' +
    '<li>A partir da prévia, você tem 48 horas para mandar cada rodada de ajustes.</li></ul>' +
    '<p>A sua via do contrato está em anexo.</p><p>Equipe FitDash</p></div>';
  MailApp.sendEmail({
    to: p.email,
    subject: 'Recebemos o seu pedido · ' + p.academia,
    htmlBody: html,
    name: 'FitDash',
    replyTo: resposta,
    attachments: pdf ? [pdf.getBlob()] : [],
  });
}

// ---------- Utilidades ----------
function novoId_() {
  const agora = Utilities.formatDate(new Date(), 'America/Sao_Paulo', 'yyMMdd-HHmm');
  return 'FD-' + agora + '-' + Math.random().toString(36).slice(2, 5).toUpperCase();
}
function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
function digitos_(s) {
  return String(s || '').replace(/\D/g, '');
}
function esc_(s) {
  return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
}
function cpfOk_(c) {
  if (c.length !== 11 || /^(\d)\1+$/.test(c)) return false;
  const dv = function (n) {
    let s = 0;
    for (let i = 0; i < n; i++) s += Number(c[i]) * (n + 1 - i);
    return ((s * 10) % 11) % 10;
  };
  return dv(9) === Number(c[9]) && dv(10) === Number(c[10]);
}
function cnpjOk_(c) {
  if (c.length !== 14 || /^(\d)\1+$/.test(c)) return false;
  const dv = function (n) {
    const pesos = n === 12 ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2] : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const s = pesos.reduce(function (a, p, i) { return a + Number(c[i]) * p; }, 0) % 11;
    return s < 2 ? 0 : 11 - s;
  };
  return dv(12) === Number(c[12]) && dv(13) === Number(c[13]);
}
