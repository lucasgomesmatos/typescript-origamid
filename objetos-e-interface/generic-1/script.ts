
// function retorno<T>(a: T): T {
//   return a;
// }

// console.log(retorno<string>("Novo Game").toUpperCase())
// console.log(retorno(200.00))
// console.log(retorno(true))


const frutas = ['uva', 'pera', 'laranja', 'limão', 'maçã'];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function list<T>(list: T[]) {
  return list.slice(1, 9);
}

console.log(list(frutas));
console.log(list(numeros).filter(item => item >= 6 ?? item));
