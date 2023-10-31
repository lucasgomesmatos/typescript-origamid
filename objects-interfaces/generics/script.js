"use strict";
function retorno(a) {
    return a;
}
console.log(retorno('João'));
console.log(retorno(200));
console.log(retorno(true));
const numeros = [1, 2, 3, 4, 5, 6, 7];
const frutas = ['Maçã', 'Banana', 'Pera', 'Uva', 'Melancia'];
function firstFive(lista) {
    return lista.slice(0, 5);
}
console.log(firstFive(numeros));
console.log(firstFive(frutas));
function notNull(arg) {
    if (arg === null) {
        return 'Valor não pode ser nulo';
    }
    return arg;
}
notNull(2);
notNull(null);
function tipoDado(args) {
    return {
        dado: args,
        tipo: typeof args,
    };
}
console.log(tipoDado(2));
console.log(tipoDado('2'));
