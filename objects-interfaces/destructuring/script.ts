function handleClick({
  currentTarget,
  pageX,
}: {
  currentTarget: EventTarget | null;
  pageX: number;
}) {
  if (currentTarget instanceof HTMLElement) {
    currentTarget.innerHTML = `<h1>Mouse Click em x:${pageX}</h1>`;
  }
}

document.documentElement.addEventListener('click', handleClick);
