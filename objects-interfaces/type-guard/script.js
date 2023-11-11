"use strict";
function typeGuard(valor) {
    if (typeof valor === 'string') {
        return String(valor);
    }
    if (typeof valor === 'number') {
        return Number(valor);
    }
    if (valor instanceof HTMLElement) {
        return valor.innerHTML;
    }
    return valor;
}
// console.log(typeGuard(5.6));
// console.log(typeGuard('5.6'));
// console.log(typeGuard(document.querySelector('h1')));
const obg = {
    nome: 'João',
};
if ('nome' in obg) {
    console.log(obg.nome);
}
async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const json = await response.json();
    handleProduto(json);
}
function handleProduto(data) {
    if ('preco' in data) {
        document.body.innerHTML += `
      <p>Nome: ${data.nome}</p>
      <p>Preço: R$ ${data.preco + 100}</p>
    `;
    }
}
fetchProduto();
