"use strict";
const button = document.getElementById('btn-mobile');
function handleClick(event) {
    const button = event.currentTarget;
    const nav = document.getElementById('nav');
    if (button instanceof HTMLElement && nav) {
        const active = nav.classList.contains("active");
        if (active) {
            nav.classList.remove("active");
            button.setAttribute("aria-label", "Abrir Menu");
            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-haspopup", "false");
        }
        else {
            nav.classList.add("active");
            button.setAttribute("aria-label", "Fechar Menu");
            button.setAttribute("aria-expanded", "true");
            button.setAttribute("aria-haspopup", "true");
        }
    }
}
button?.addEventListener('pointerdown', handleClick);
