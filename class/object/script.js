"use strict";
const produto = {
    nome: 'Computador',
    quantidade: 10,
    cor: 'cinza',
};
function mostrarNomeProduto(produto) {
    console.log(produto.quantidade + 20);
}
mostrarNomeProduto(produto);
function mostrarQuantidadePartial(produto) {
    if (produto.quantidade) {
        console.log(produto?.quantidade + 20);
    }
}
mostrarQuantidadePartial(produto);
const artigo = {
    titulo: 'como aprender TypeScript',
    visualizacoes: 1000,
    tags: ['typescript', 'javascript'],
    autor: 'Luiz',
};
function mostrarTitulo(obj) {
    if ('titulo' in obj) {
        console.log(obj.titulo);
    }
}
mostrarTitulo(artigo);
