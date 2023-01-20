"use strict";
function comparar(tipo, ...numeros) {
    if (tipo === 'menor')
        return Math.min(...numeros);
    if (tipo === 'maior')
        return Math.max(...numeros);
}
console.log(comparar('maior', 3, 4, 5, 6, 7, 20, 10, 30, 1));
