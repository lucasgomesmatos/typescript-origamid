"use strict";
class Produto {
    tipo;
    nome;
    preco;
    constructor(nome, tipo, preco) {
        this.nome = nome;
        this.tipo = tipo;
        this.preco = preco;
    }
}
const livro = new Produto('Livro', 'O senhor dos anéis', 59);
console.log(livro);
console.log(livro instanceof Produto);
console.log(document.constructor);
