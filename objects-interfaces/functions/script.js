"use strict";
function calcularPerimetroQuadrado(quadrado) {
    return quadrado.perimetro(quadrado.lado);
}
function normalizar(valor) {
    if (Array.isArray(valor)) {
        return valor.map(item => item.trim().toLowerCase());
    }
    return valor.trim().toLowerCase();
}
console.log(normalizar('Produtos   ').toUpperCase());
console.log(normalizar([' Produtos   ', '   Serviços']));
