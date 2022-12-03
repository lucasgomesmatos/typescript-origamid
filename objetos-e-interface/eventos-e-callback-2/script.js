"use strict";
const button = document.querySelector('button');
function handleClick(event) {
    console.log(this.focus);
}
button?.addEventListener('click', handleClick);
