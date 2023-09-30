let total: string | number = 200;
total = '200';

function isNumber(value: string | number): value is number {
  return typeof value === 'number';
}

console.log(isNumber(500));

const button = document.querySelector('button');

button?.addEventListener('click', () => {
  console.log('Clicou');
});

/* Exercício 1 */

// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

function toNumber(value: number | string) {
  if (typeof value === 'number') {
    return value;
  } else if (typeof value === 'string') {
    return Number(value);
  } else {
    throw 'value deve ser um número ou uma string';
  }
}

console.log(toNumber(10));
