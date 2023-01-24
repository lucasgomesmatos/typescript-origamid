type Produto = {
  preco: number;
};

type Carro = {
  rodas: number;
  portas: number;
};

function handleProdutoCarro(dados: Produto & Carro) {
  dados.rodas;
  dados.portas;
  dados.preco;

  return dados;
}

console.log(handleProdutoCarro({ rodas: 4, portas: 4, preco: 20000 }));

type TipoCarro = {
  rodas: number;
  portas: number;
};

type TipoCarroComPreco = TipoCarro & {
  preco: number;
};

interface Window {
  userId: number;
}

window.userId = 200;
