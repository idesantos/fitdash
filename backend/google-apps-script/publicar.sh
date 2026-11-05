#!/bin/bash
# Publica o script de pedidos na conta Google logada no clasp e liga o endereço no site.
# Uso: ./publicar.sh   (de dentro de backend/google-apps-script)
# Pré-requisitos, uma vez só:
#   1. API do Apps Script ligada em https://script.google.com/home/usersettings
#   2. npx -y @google/clasp@2.4.2 login
#   3. Chave do Asaas no Chaveiro: security add-generic-password -U -a fitdash -s fitdash-asaas -w
set -euo pipefail
cd "$(dirname "$0")"
CLASP="npx -y @google/clasp@2.4.2"

# Chave do Asaas: sai do Chaveiro do Mac direto para Chave.gs (fora do git). Nunca é exibida.
# Com --sem-chave, o arquivo sai do projeto (use depois de rodar configurar, que guarda a chave nas propriedades).
if [ "${1:-}" = "--sem-chave" ]; then
  rm -f Chave.gs && echo "Enviando sem Chave.gs: a chave fica só nas propriedades do script."
elif CHAVE=$(security find-generic-password -a fitdash -s fitdash-asaas -w 2>/dev/null); then
  printf "// Gerado por publicar.sh a partir do Chaveiro do Mac. Não versionar.\nconst CHAVE_ASAAS = '%s';\n" "$CHAVE" > Chave.gs
  case "$CHAVE" in
    '$aact_prod_'*) echo "Chave do Asaas: produção" ;;
    '$aact_hmlg_'*) echo "Chave do Asaas: sandbox (testes)" ;;
    *) echo "Atenção: a chave não começa com \$aact_prod_ nem \$aact_hmlg_" ;;
  esac
  unset CHAVE
else
  echo "Sem chave no Chaveiro: o script sobe sem o cadastro no Asaas." && rm -f Chave.gs
fi

# Projeto: cria na primeira vez, depois só atualiza.
if [ ! -f .clasp.json ]; then
  cp appsscript.json /tmp/fitdash-appsscript.json
  $CLASP create --type webapp --title "FitDash Pedidos" --rootDir . | grep -vi "^$" | sed -E "s/[A-Za-z0-9_-]{40,}/…/g"
  cp /tmp/fitdash-appsscript.json appsscript.json
fi
$CLASP push --force >/dev/null
echo "Código enviado."

# Implantação: mantém sempre o mesmo endereço.
if [ -f .implantacao ]; then
  $CLASP deploy --deploymentId "$(cat .implantacao)" --description "atualização $(date +%F-%H%M)" >/dev/null
else
  ID=$($CLASP deploy --description "v1" | grep -oE 'AKfy[A-Za-z0-9_-]+' | head -1)
  echo "$ID" > .implantacao
fi
URL="https://script.google.com/macros/s/$(cat .implantacao)/exec"
echo "Endereço: $URL"

# Liga no site (variável do repositório usada na publicação).
if command -v gh >/dev/null; then
  gh variable set PEDIDO_ENDPOINT --body "$URL" --repo idesantos/fitdash && echo "PEDIDO_ENDPOINT atualizado no GitHub."
fi
