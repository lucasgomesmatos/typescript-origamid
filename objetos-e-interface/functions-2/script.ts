
function normalizar(value: string[]): string[];
function normalizar(value: string): string;
function normalizar(value: string | string[]) {
  if (typeof value === "string") {
    return value.trim().toLowerCase()
  } else {
    return value.map(item => item.trim().toLowerCase())
  }
}

console.log(normalizar(' Este é um teste AAAA    w'))
console.log(normalizar(['UVA', 'Banana']))

function $(seletor: string): Element | null
function $(seletor: 'video'): HTMLVideoElement | null
function $(seletor: 'a'): HTMLAnchorElement | null
function $(seletor: string): Element | null {
  return document.querySelector(seletor)
}

$('video')?.volume
$('a')
$('.item')