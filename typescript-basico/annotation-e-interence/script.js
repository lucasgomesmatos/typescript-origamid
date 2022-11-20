"use strict";
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto("DEsign "));
const input = document.querySelector('input');
const total = localStorage.getItem('total');
if (input) {
    if (input && total) {
        input.value = total;
        calcularGanho(Number(input.value));
    }
    function calcularGanho(value) {
        const p = document.querySelector('p');
        if (p)
            p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
    }
    function totalMudou() {
        if (input?.value) {
            localStorage.setItem('total', input.value);
            calcularGanho(Number(input.value));
        }
    }
    input.addEventListener('keyup', totalMudou);
}