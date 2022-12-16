"use strict";
const link = document.querySelector('a');
const extract = (el) => {
    return {
        el,
        texto: el.innerText
    };
};
if (link) {
    console.log(extract(link).el.href);
}
