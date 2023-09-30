type Produto = {
  nome: string;
  preco: number;
  teclado: boolean;
};

function preencherDados(dados: Produto) {
  document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p> R$ ${dados.preco}</p>
      <p> Inclui teclado: ${dados.teclado ? 'Sim' : 'Não'}</p>
    </div>
  `;
}

preencherDados({
  nome: 'Computador',
  preco: 2000,
  teclado: true,
});

preencherDados({
  nome: 'Notebook',
  preco: 2500,
  teclado: true,
});

type Categorias = 'design' | 'código' | 'desenvolvimento';

function printCategory(category: Categorias) {
  console.log(category);
}

printCategory('desenvolvimento');
