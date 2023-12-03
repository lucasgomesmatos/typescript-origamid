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
class Quadrado {
    lados = 4;
    medida;
    constructor(medida) {
        this.medida = medida;
    }
    getPerimetro() {
        return this.medida * this.lados;
    }
    getArea() {
        return this.medida * this.medida;
    }
}
class Circulo {
    PI = 3.14;
    raio;
    constructor(raio) {
        this.raio = raio;
    }
    getPerimetro() {
        return Math.round(2 * this.PI * this.raio * 100) / 100;
    }
    getArea() {
        return Math.round(this.PI * (this.raio * this.raio) * 100) / 100;
    }
}
const q1 = new Quadrado(10);
if (q1 instanceof Quadrado) {
    console.log(q1.getArea());
}
const formas = [2, 32, 12, 3, 4, 20, 37, 9].sort().map((n) => {
    if (n < 15)
        return new Quadrado(n);
    return new Circulo(n);
});
console.log(formas);
