"use strict";
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const json = await response.json();
    handleCursos(json);
}
fetchCursos();
function isProduto(value) {
    if (value &&
        typeof value === 'object' &&
        'nome' in value &&
        'preco' in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleCursos(data) {
    if (isProduto(data)) {
        console.log(data.nome);
        console.log(data.preco);
    }
    else {
    }
}
