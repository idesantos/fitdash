# FitDash — site de vendas

Site que vende criação e renovação de sites para academias, studios e personais.
Astro estático + GSAP/Lenis.

## Comandos

```sh
npm install
npm run dev       # http://localhost:4321/fitdash/
npm run build     # gera dist/
npm run preview
```

## Onde mudar as coisas

| O quê | Arquivo |
|---|---|
| Preços, fim da Black, prazos, itens inclusos, ajustes, dúvidas | `src/data/oferta.ts` |
| Razão social, CNPJ, WhatsApp e e-mail da FitDash | `marca` em `src/data/oferta.ts` |
| Categorias e os 15 modelos (nome, ideia, efeito, link da demo) | `src/data/modelos.ts` |
| Campos do formulário por categoria | `src/data/formulario.ts` |
| Contrato (minuta): cláusulas; os campos `{{...}}` são preenchidos com o pedido | `src/data/contrato.ts` |
| Como o contrato aparece (página /termos/, formulário e via em PDF) | `src/components/ContratoDoc.astro` |
| Prints do antes e depois | `src/assets/case/` |

Quando a demo de um modelo ficar pronta, preencha `demo` no modelo: o card troca "Demo em produção" por "Ver ao vivo".

Depois de `black.fim`, o site esconde o "de/por" sozinho no navegador. O preço normal passa a valer.

## Modelos e demos

Cada modelo é um site de academia completo, montado a partir de um esquema de dados único (`src/data/demos/tipos.ts`).

- `src/data/demos/<modelo>.ts`: os dados da academia (fictícios nas demos).
- `src/pages/demo/<modelo>.astro`: a primeira tela, o tema (cores e fontes) e o efeito característico.
- `src/components/demo/`: a página e as seções comuns (números, modalidades, horários, planos, equipe, depoimentos, local etc.).
- `src/styles/demo-base.css`: a base que cada tema ajusta por variáveis.

Para um cliente real, copie a demo do modelo escolhido e troque os dados pelos do formulário.

Os prints das miniaturas ficam em `src/assets/thumbs/<modelo>.jpg`. Refaça os prints quando mudar a primeira tela de um modelo.
As fotos das demos são do Pexels, com licença livre para uso comercial: `src/assets/demos/fotos/LEIA-ME.txt`.

## Formulário

`/comecar/` tem 6 etapas, valida CPF/CNPJ e WhatsApp, busca o endereço pelo CEP (ViaCEP) e salva um rascunho no navegador.
No envio, as fotos são reduzidas no navegador (máx. 2000 px) e o pedido vai em JSON para um Google Apps Script (`backend/google-apps-script/`).
Esse script guarda tudo no Drive e numa planilha, cadastra o cliente no Asaas e manda os e-mails. A instalação está no LEIA-ME de lá.

O endereço do script entra na publicação pela variável do repositório `PEDIDO_ENDPOINT`:

```sh
gh variable set PEDIDO_ENDPOINT --body "https://script.google.com/macros/s/.../exec"
```

Sem a variável, o formulário fica em modo de teste: a tela final mostra o JSON que seria enviado.

## Domínio definitivo

```sh
SITE_URL=https://seudominio.com.br BASE_PATH=/ STAGING=false npm run build
```

Com `STAGING` diferente de `false`, as páginas saem com `noindex` e o contrato mostra o aviso de minuta.
