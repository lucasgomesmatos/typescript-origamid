"use strict";
function arredondar(value) {
    if (typeof value === 'string') {
        return Math.ceil(Number(value)).toString();
    }
    else {
        return Math.ceil(value);
    }
}
console.log(arredondar(15.4));
console.log(arredondar('15.4'));
