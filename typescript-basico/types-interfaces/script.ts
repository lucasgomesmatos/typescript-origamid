type NumberOrString = string | number

let total: NumberOrString = 20;
total = "30"

console.log(total);

type Produto = {
  nome: string;
  preco: number;
  teclado: boolean;
}

interface IProduto {
  nome: string;
  preco: number;
  teclado: boolean;
}


function preencherDados(dados: IProduto) {
  document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
  </div>
  `;
}

preencherDados({
  nome: 'Computador',
  preco: 2000,
  teclado: false,
});

preencherDados({
  nome: 'Notebook',
  preco: 2500,
  teclado: true,
});

type Categorias = 'design' | 'codigo' | 'descod';

function pintarCategoria(categoria: Categorias) {
  if (categoria === 'design') {
    console.log('Pintar vermelho');
  } else if (categoria === 'codigo') {
    console.log('Pintar verde');
  } else if (categoria === 'descod') {
    console.log('Pintar roxo');
  }
}

pintarCategoria('codigo');

