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
