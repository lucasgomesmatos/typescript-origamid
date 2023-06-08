const produto = 'Livro';
const preco: number = 200;

const carro: {
  marca: string;
  portas: number;
} = {
  marca: 'Audi',
  portas: 5,
};

const barato = 200 < 400 ? true : 'produto caro';

console.log(barato);

function somar(a: number, b: number) {
  return a + b;
}

console.log(somar(4, 10));

const nintendo = {
  nome: 'Nintendo',
  preco: '2000',
};

type typeProduto = typeof nintendo;

function transformarPreco(produto: typeProduto) {
  return `R$ ${produto.preco}`;
}

console.log(transformarPreco(nintendo));
