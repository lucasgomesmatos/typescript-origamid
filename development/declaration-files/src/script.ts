declare global {
  interface Usuario {
    nome: string;
    id: number;
  }
}

export const livro: Produto = {
  nome: 'Clean Code',
  preco: 36,
};
