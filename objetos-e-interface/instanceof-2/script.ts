class Produto {
  nome: string;
  preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }

  precoReal() {
    return `R$ ${this.preco}`;
  }
}


class Livro extends Produto {
  autor: string;
  constructor(nome: string, preco: number, autor: string) {
    super(nome, preco);
    this.autor = autor;
  }
}

class Jogo extends Produto {
  jogadores: number;
  constructor(nome: string, preco: number, jogadores: number) {
    super(nome, preco);
    this.jogadores = jogadores;
  }
}

function buscarProduto(buscar: string) {
  if (buscar === 'O Hobbit') {
    return new Livro('O Hobbit', 200, 'J. R. R. Tolkien')
  }
  if (buscar === 'God of War') {
    return new Jogo('God of War', 250, 2);
  }
  return null;
}

const produto = buscarProduto('God of War');

if (produto instanceof Livro) {
  console.log(produto.autor)
}

if (produto instanceof Jogo) {
  console.log(produto.precoReal())
}

if (produto instanceof Produto) {
  console.log(produto.nome)
}