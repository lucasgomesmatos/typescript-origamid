function typeGuard(valor: unknown) {
  if (typeof valor === 'string') {
    return String(valor);
  }
  if (typeof valor === 'number') {
    return Number(valor);
  }
  if (valor instanceof HTMLElement) {
    return valor.innerHTML;
  }

  return valor;
}

console.log(typeGuard(5.6));
console.log(typeGuard('5.6'));
console.log(typeGuard(document.querySelector('h1')));
