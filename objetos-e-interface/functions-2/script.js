"use strict";
function normalizar(value) {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    else {
        return value.map(item => item.trim().toLowerCase());
    }
}
console.log(normalizar(' Este é um teste AAAA    w'));
console.log(normalizar(['UVA', 'Banana']));
function $(seletor) {
    return document.querySelector(seletor);
}
$('video')?.volume;
$('a');
$('.item');
