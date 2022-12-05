const buttonMobile = document.getElementById('btn-mobile');


function handleClick(event: PointerEvent) {
  const button = event.currentTarget;
  const nav = document.getElementById('nav');

  if (button instanceof HTMLElement && nav) {
    const active = nav.classList.contains("active");

    if (active) {
      nav.classList.remove("active");
      button.setAttribute("aria-label", "Abrir Menu")
      button.setAttribute("aria-expanded", "false")
    } else {
      nav.classList.add("active");
      button.setAttribute("aria-label", "Fechar Menu")
      button.setAttribute("aria-expanded", "true")
    }
  }
}

buttonMobile?.addEventListener('pointerdown', handleClick);
