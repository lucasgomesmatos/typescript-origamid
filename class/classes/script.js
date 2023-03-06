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
    getTipo() {
        return this.tipo;
    }
}
const livro = new Produto('Livro', 'O senhor dos anéis', 59);
console.log(livro);
console.log(livro instanceof Produto);
// console.log(document.constructor);
console.log(livro.getTipo());
