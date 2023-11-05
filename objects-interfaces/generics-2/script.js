"use strict";
// function extractText<T extends HTMLElement>(el: T) {
//   return {
//     texto: el.innerHTML,
//     el,
//   };
// }
// const link = document.querySelector('a');
// if (link) {
//   console.log(extractText(link));
// }
// function $<T extends Element>(seletor: string): T | null {
//   return document.querySelector(seletor);
// }
// const body = $<HTMLBodyElement>('body');
// const linkAnchor = document.querySelector('.link');
// if (linkAnchor instanceof HTMLAnchorElement) {
//   console.log(linkAnchor.href);
// }
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleData() {
    const notebook = await getData('https://api.origamid.dev/json/api/notebook.json');
    console.log(notebook);
}
handleData();
