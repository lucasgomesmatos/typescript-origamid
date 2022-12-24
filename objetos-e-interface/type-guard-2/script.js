"use strict";
// async function fetchCursos() {
//   const response = await fetch('https://api.origamid.dev/json/cursos.json');
//   const json = await response.json();
//   handleCursos(json);
// }
// fetchCursos();
// function handleCursos(data: unknown) {
//   if (data instanceof Array) {
//     console.log('É instância de Array');
//   }
//   if (Array.isArray(data)) {
//     console.log('É array');
//   }
// }
// function isString(value: unknown): value is string {
//   return typeof value === 'string';
// }
// function handleData(data: unknown) {
//   if (isString(data)) {
//     data.toUpperCase();
//   }
// }
// handleData('Origamid');
// handleData(200);
async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const json = await response.json();
    handleProduto("json");
}
fetchProduto();
function isProduto(value) {
    if (value && typeof value === 'object' && "nome" in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleProduto(data) {
    if (isProduto(data)) {
        console.log(data.nome);
    }
}
