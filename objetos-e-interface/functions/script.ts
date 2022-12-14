
function subtrair(a: number, b: number) {
  return a - b
}

console.log(subtrair(15, 30))

function abortar(mensagem: string): never {
  throw new Error(mensagem)
}
abortar('Olá mundo')
console.log(abortar('Olá mundo'))