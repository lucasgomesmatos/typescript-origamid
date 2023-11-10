function arredondaParaCima(valor: string): string;
function arredondaParaCima(valor: number): number;
function arredondaParaCima(valor: number | string): number | string {
  if (typeof valor === 'string') {
    return String(Math.ceil(Number(valor)));
  }

  return Math.ceil(Number(valor));
}

console.log(arredondaParaCima(5.6));
console.log(arredondaParaCima('5.6'));
