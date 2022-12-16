const link = document.querySelector('a');

const extract = <T extends HTMLElement>(el: T) => {
  return {
    el,
    texto: el.innerText
  }
}

if (link) {
  console.log(extract(link).el.href)
}
