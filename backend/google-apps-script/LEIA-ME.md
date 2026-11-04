# Recebimento dos pedidos (Google Apps Script)

O formulário do site (`/comecar/`) envia cada pedido para este script, que roda na sua conta Google. Para cada pedido, ele:

- cria uma pasta no Drive (`FitDash · Pedidos`) com o logo, as fotos e a via do contrato em PDF;
- registra uma linha na planilha `FitDash · Pedidos`;
- cadastra o cliente no Asaas, sem criar cobrança;
- manda o aviso para você e a confirmação, com a via do contrato, para o cliente.

## Instalar pelo terminal (recomendado)

Faça uma vez só, num terminal normal (no VS Code: Terminal > Novo Terminal):

1. Ligue a **API do Google Apps Script** em https://script.google.com/home/usersettings
2. Entre na sua conta Google pelo clasp, a ferramenta oficial do Google:
   `npx -y @google/clasp@2.4.2 login`
3. Guarde a chave do Asaas no Chaveiro do Mac. O terminal pede a chave duas vezes e não mostra o que você cola:
   `security add-generic-password -U -a fitdash -s fitdash-asaas -w`

Depois, `./publicar.sh` cria (ou atualiza) o script na sua conta, publica como app da Web e liga o endereço no site.
Na primeira vez, abra o endereço `/exec` que ele mostrar e autorize o acesso ao Drive, à planilha e ao e-mail.
A chave vai do Chaveiro para o arquivo `Chave.gs`, que fica fora do git e só existe no seu projeto do Apps Script.

## Instalar pelo navegador (alternativa, uns 5 minutos)

1. Entre em https://script.google.com com a conta que vai receber os pedidos e clique em **Novo projeto**. Dê o nome **FitDash Pedidos**.
2. Apague o que estiver em `Código.gs` e cole todo o conteúdo de [`Pedidos.gs`](Pedidos.gs). Salve.
3. Clique na engrenagem (**Configurações do projeto**). Em **Propriedades do script**, clique em **Adicionar propriedade do script**:
   - Propriedade: `ASAAS_API_KEY`
   - Valor: a sua chave do Asaas (começa com `$aact_`). Salve.
   - Opcional: `EMAIL_AVISO`, se o aviso de pedido novo tiver que ir para outro e-mail.
4. Volte ao editor, escolha a função **configurar** no menu de cima e clique em **Executar**.
   - O Google pede autorização. Como o script é seu, ele avisa que o app "não foi verificado". Clique em **Avançado** e depois em **Acessar FitDash Pedidos**.
   - No registro de execução aparecem o link da pasta, o da planilha e o ambiente do Asaas (produção ou sandbox).
5. Clique em **Implantar** > **Nova implantação**. Na engrenagem de tipo, escolha **App da Web**:
   - Executar como: **Eu**
   - Quem pode acessar: **Qualquer pessoa**
   - Clique em **Implantar** e copie o **URL do app da Web** (termina em `/exec`).
6. Mande esse endereço para ligar no site. Ele não é segredo, porque fica visível no código da página. A chave do Asaas fica só nas propriedades do script.

## Quando o script mudar

Cole o código novo e vá em **Implantar** > **Gerenciar implantações** > lápis > Versão: **Nova versão**. O endereço continua o mesmo.

## Bom saber

- A chave decide o ambiente: `$aact_hmlg_...` é o sandbox (testes) e `$aact_prod_...` é produção.
- O script só cadastra o cliente. A cobrança, na entrega, é criada no painel do Asaas por enquanto.
- Uma conta Google gratuita manda até cerca de 100 e-mails por dia. Cada pedido usa 2, então dá uns 50 pedidos por dia.
- O e-mail para o cliente sai do Gmail da conta do script, com o nome "FitDash". Quando a FitDash tiver um e-mail próprio (Google Workspace), instale o script nessa conta.
- Trava simples contra abuso: campo isca para robôs, CPF/CNPJ validado e no máximo 5 pedidos por documento a cada 6 horas.
