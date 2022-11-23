"use strict";
const numbers = [10, 20, 30, 40, 50];
const valores = [10, "Produto 2", 20, "1", 30, 40, 50, "Produto 1"];
function maiorQue10(data) {
    return data.filter(num => num > 10);
}
function filtrarValores(data) {
    return data.filter(item => typeof item === 'number');
}
console.log(maiorQue10(numbers));
console.log(filtrarValores(valores));
