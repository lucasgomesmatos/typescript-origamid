const button = document.querySelector('button');
const config = localStorage.getItem('config');

if (button) {
  button.addEventListener('click', () => {});
}

interface Product {
  nome?: string;
}

const jogo: Product = {
  nome: 'Ragnarok',
};

const livro: Product = {};

jogo.nome = 'Ragnarok 2';
console.log(livro.nome?.toLocaleLowerCase());
