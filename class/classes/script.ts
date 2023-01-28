class Produto {
  tipo = 'produto';
  nome = 'O senhor dos Anéis';

  constructor(nome: string, tipo: string) {
    this.nome = nome;
    this.tipo = tipo;
  }
}
const livro = new Produto('Livro', 'O senhor dos anéis');
