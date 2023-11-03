function extractText<T extends HTMLElement>(el: T) {
  return {
    texto: el.innerHTML,
    el,
  };
}

const link = document.querySelector('a');

if (link) {
  console.log(extractText(link));
}

function $<T>(seletor: string): T | null {
  return document.querySelector(seletor);
}

const body = $<HTMLBodyElement>('body');
