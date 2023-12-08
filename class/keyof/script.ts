interface Elementos {
  a: HTMLAnchorElement;
  div: HTMLDivElement;
  video: HTMLVideoElement;
  body: HTMLBodyElement;
  audio: HTMLAudioElement;
}

let chave: keyof Elementos;

function selecionar<T extends keyof Elementos>(
  elemento: T,
): Elementos[T] | null {
  return document.querySelector(elemento);
}

const video = selecionar('a');
