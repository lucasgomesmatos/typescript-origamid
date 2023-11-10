"use strict";
function arredondaParaCima(valor) {
    if (typeof valor === 'string') {
        return String(Math.ceil(Number(valor)));
    }
    return Math.ceil(Number(valor));
}
console.log(arredondaParaCima(5.6));
console.log(arredondaParaCima('5.6'));
