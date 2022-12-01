const links = document.querySelectorAll(".link");


links.forEach(item => {
  if (item instanceof HTMLElement) {
    ativarElemento(item)
  }
})

function ativarElemento(elemento: HTMLElement) {
  elemento.style.color = 'tomato';
  elemento.style.border = '1px solid tomato';
}