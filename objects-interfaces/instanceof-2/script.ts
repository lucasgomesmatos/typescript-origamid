class Produto {
  nome: string;
  preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
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
  jogador: number;

  constructor(nome: string, preco: number, jogador: number) {
    super(nome, preco);
    this.jogador = jogador;
  }
}

function buscarProduto(busca: string) {
  if (busca === 'O Hobbit') {
    return new Livro('O Hobbit', 40, 'J. R. R. Tolkien');
  }

  if (busca === 'Dark Souls') {
    return new Jogo('Dark Souls', 100, 1);
  }

  return null;
}

const produto = buscarProduto('O Hobbit');

// if (produto instanceof Livro) {
//   console.log(produto.autor);
// }

// if (produto instanceof Jogo) {
//   console.log(produto.jogador);
// }

if (produto instanceof Produto) {
  console.log(produto);
}
