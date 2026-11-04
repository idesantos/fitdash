// Imprime só o contrato (no navegador vira "Salvar como PDF"): é a via do cliente.
export function imprimirVia(doc: HTMLElement, nomeArquivo = 'Contrato FitDash') {
  let box = document.getElementById('via-contrato');
  if (!box) {
    box = document.createElement('div');
    box.id = 'via-contrato';
    document.body.append(box);
  }
  box.replaceChildren(doc.cloneNode(true));
  const tituloAntes = document.title;
  document.title = nomeArquivo; // vira o nome sugerido do PDF
  document.documentElement.classList.add('imprimindo-via');
  const fim = () => {
    document.documentElement.classList.remove('imprimindo-via');
    document.title = tituloAntes;
    removeEventListener('afterprint', fim);
  };
  addEventListener('afterprint', fim);
  window.print();
}
