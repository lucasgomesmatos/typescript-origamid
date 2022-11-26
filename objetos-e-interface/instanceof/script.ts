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

const livro = new Produto("A Guerra dos Tronos", 200);

// console.log(livro instanceof Produto)

class Livro {
  autor: string;
  constructor(autor: string) {
    this.autor = autor;
  }
}

class Jogo {
  jogadores: number;
  constructor(jogadores: number) {
    this.jogadores = jogadores;
  }
}

function buscarProduto(buscar: string) {
  if (buscar === 'O Hobbit') {
    return new Livro('O Hobbit')
  }
  if (buscar === 'God of War') {
    return new Jogo(1);
  }

  return null;
}

const produto = buscarProduto('God of War');

if (produto instanceof Livro) {

  console.log(produto.autor)
}

if (produto instanceof Jogo) {

  console.log(produto.jogadores)
}