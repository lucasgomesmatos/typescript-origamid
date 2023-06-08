"use strict";
const produto = 'Livro';
const preco = 200;
const carro = {
    marca: 'Audi',
    portas: 5,
};
const barato = 200 < 400 ? true : 'produto caro';
console.log(barato);
function somar(a, b) {
    return a + b;
}
console.log(somar(4, 10));
const nintendo = {
    nome: 'Nintendo',
    preco: '2000',
};
function transformarPreco(produto) {
    return `R$ ${produto.preco}`;
}
console.log(transformarPreco(nintendo));
