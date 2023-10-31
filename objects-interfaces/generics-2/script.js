"use strict";
function extractText(el) {
    return {
        texto: el.innerHTML,
        el,
    };
}
const link = document.querySelector('a');
if (link) {
    console.log(extractText(link));
}
