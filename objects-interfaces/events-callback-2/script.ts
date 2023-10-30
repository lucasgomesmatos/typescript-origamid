const button = document.querySelector('button');

function handleClick(event: Event) {
  const elemento = event.currentTarget;

  if (elemento instanceof HTMLButtonElement) {
    console.log('Clicou no botão');
  }
}

button?.addEventListener('click', handleClick);
