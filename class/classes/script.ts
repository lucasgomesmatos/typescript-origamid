class Produto {
  private tipo: string;
  nome: string;
  preco: number;

  constructor(nome: string, tipo: string, preco: number) {
    this.nome = nome;
    this.tipo = tipo;
    this.preco = preco;
  }

  getTipo() {
    return this.tipo;
  }
}
const livro = new Produto('Livro', 'O senhor dos anéis', 59);

console.log(livro);

console.log(livro instanceof Produto);
// console.log(document.constructor);
console.log(livro.getTipo());
