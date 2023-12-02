"use strict";
class Produto {
    tipo = 'eletrônico';
    nome;
    preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    getNome() {
        return this.nome;
    }
}
const produto = new Produto('TV', 1500.0);
console.log(produto.tipo);
console.log(produto.getNome());
