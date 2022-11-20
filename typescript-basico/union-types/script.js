"use strict";
let total = 200;
function isNumber(value) {
    if (typeof value === 'number') {
        return true;
    }
    else {
        return 'Não é número';
    }
}
console.log(isNumber(total));
// Retorna HTMLButtonElement | null
const button = document.querySelector('button');
// Optional chaining
// Executa click() se button for diferente de null/undefined
button?.click();
// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")
function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    else if (typeof value === 'string') {
        return Number(value);
    }
    else {
        throw "value deve ser um número ou uma string";
    }
}
console.log(toNumber('null'));
