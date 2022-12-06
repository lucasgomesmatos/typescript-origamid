
function retorno<T>(a: T): T {
  return a;
}


console.log(retorno<string>("Novo Game").toUpperCase())
console.log(retorno(200.00))
console.log(retorno(true))