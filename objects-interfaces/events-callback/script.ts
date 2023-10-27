const button = document.querySelector('button');

function handleClick(event: Event) {
  console.log(event);
}

button?.addEventListener('click', handleClick);

function ativarMenu(event: Event) {
  if (event instanceof MouseEvent) {
    console.log(event.pageX);
  }

  if (event instanceof TouchEvent) {
    console.log(event.touches[0].clientX);
  }
}

document.documentElement.addEventListener('mousedown', ativarMenu);
document.documentElement.addEventListener('touchstart', ativarMenu);
