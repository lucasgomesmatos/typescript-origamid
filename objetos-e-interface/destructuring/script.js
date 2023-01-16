"use strict";
function handleClick({ currentTarget, pageX }) {
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerHTML += `<h1>Olá mundo em x ${pageX}</h1>`;
        console.log(currentTarget.innerHTML);
    }
    console.log(pageX);
}
document.documentElement.addEventListener('click', handleClick);
