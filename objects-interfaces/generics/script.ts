function retorno<T>(a: T): T {
  return a;
}

console.log(retorno<string>('João'));
console.log(retorno<number>(200));
console.log(retorno<boolean>(true));

const numeros = [1, 2, 3, 4, 5, 6, 7];
const frutas = ['Maçã', 'Banana', 'Pera', 'Uva', 'Melancia'];

function firstFive<T>(lista: T[]): T[] {
  return lista.slice(0, 5);
}

console.log(firstFive(numeros));
console.log(firstFive(frutas));

function notNull<T>(arg: T) {
  if (arg === null) {
    return 'Valor não pode ser nulo';
  }
  return arg;
}

notNull(2);
notNull(null);

function tipoDado<T>(args: T) {
  return {
    dado: args,
    tipo: typeof args,
  };
}

console.log(tipoDado(2));
console.log(tipoDado('2'));
