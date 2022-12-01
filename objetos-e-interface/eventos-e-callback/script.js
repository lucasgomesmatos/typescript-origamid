"use strict";
const button = document.querySelector('button');
function handleClick(event) {
    console.log(event.pageX);
}
button?.addEventListener('pointerdown', handleClick);
function handleScroll(event) {
    console.log(event);
}
window.addEventListener('scroll', handleScroll);
function ativarMenu(event) {
    console.log(event);
    if (event instanceof MouseEvent) {
        console.log(event.pageX);
    }
    if (event instanceof TouchEvent) {
        console.log(event.touches[0].pageX);
    }
}
document.documentElement.addEventListener('mousedown', ativarMenu);
document.documentElement.addEventListener('touchstart', ativarMenu);
