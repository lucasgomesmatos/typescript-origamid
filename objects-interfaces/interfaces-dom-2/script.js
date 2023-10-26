"use strict";
const links = document.querySelectorAll('.link');
function ativarEstiloLink(element) {
    element.style.border = '1px solid red';
    element.style.color = 'red';
}
links.forEach((item) => {
    if (item instanceof HTMLElement) {
        ativarEstiloLink(item);
    }
});
