function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}

console.log(normalizarTexto('Olá mundo'));

const input = document.querySelector('input');
const p = document.querySelector('p');

const total = localStorage.getItem('total');
if (input && total) {
  input.value = total;
  calcularGanho(input.value);
}

function calcularGanho(value: string) {
  if (p && value) {
    p.innerText = `ganho total: ${Number(value) + 100 - Number(value) * 0.2}`;
  }
}

function totalMudou() {
  if (input) {
    const value = Number(input.value);
    localStorage.setItem('total', String(value));
    calcularGanho(String(value));
  }
}

if (input) {
  input.addEventListener('keyup', totalMudou);
}
