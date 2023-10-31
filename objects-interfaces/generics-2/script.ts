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
