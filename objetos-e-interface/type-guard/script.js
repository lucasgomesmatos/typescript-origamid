'use strict';
function typeGuard(value) {
  if (typeof value === 'string') {
    return value.toLowerCase();
  }
  if (typeof value === 'number') {
    return value.toFixed();
  }
  if (value instanceof HTMLElement) {
    return value.innerText;
  }
}
typeGuard('Origamid');
typeGuard(200);
typeGuard(document.body);
const obj = {
  nome: 'Origamid',
};
if ('nome' in obj) {
  console.log('Sim');
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
      <p>Preço: R$ ${data.preco + 100} </p>
    `;
  }
}
fetchProduto();
async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await response.json();
  handleCursos(json);
}
fetchCursos();
function handleCursos(data) {
  if (data instanceof Array) {
    console.log('É instância de Array');
  }
  if (Array.isArray(data)) {
    console.log('É array');
  }
}
/**
 * Função type predicate, verifica se o value é uma string e retorna um boolean
 * @param value string
 * @returns boolean
 */
function isString(value) {
  if (typeof value === 'string') {
    return true;
  }
  return false;
}

/**
 *
 * @param {*} data
 */
function handleData(data) {
  if (isString(data)) {
    console.log(data.toUpperCase());
  }
}
handleData('teste');
