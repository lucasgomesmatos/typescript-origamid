"use strict";
function subtrair(a, b) {
    return a - b;
}
console.log(subtrair(15, 30));
function abortar(mensagem) {
    throw new Error(mensagem);
}
abortar('Olá mundo');
console.log(abortar('Olá mundo'));
