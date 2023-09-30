"use strict";
let total = 200;
total = '200';
function isNumber(value) {
    return typeof value === 'number';
}
console.log(isNumber(500));
const button = document.querySelector('button');
button?.addEventListener('click', () => {
    console.log('Clicou');
});
