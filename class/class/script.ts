class Produto {
  readonly tipo = 'eletrônico';
  private nome: string;
  protected preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }

  getNome() {
    return this.nome;
  }
}

const produto = new Produto('TV', 1500.0);
console.log(produto.tipo);
console.log(produto.getNome());
