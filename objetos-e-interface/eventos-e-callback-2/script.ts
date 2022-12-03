const button = document.querySelector('button');


function handleClick(this: HTMLButtonElement, event: MouseEvent) {
  console.log(this.focus)
}

button?.addEventListener('click', handleClick);
