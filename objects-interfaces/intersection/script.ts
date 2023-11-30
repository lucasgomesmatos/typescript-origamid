type Produto = {
  preco: number;
};

type Carro = {
  rodas: number;
  portas: number;
};

function handleProdutoCarro(dados: Produto & Carro) {
  dados.portas;
  dados.rodas;
  dados.preco;

  return dados;
}

handleProdutoCarro({ preco: 1000, portas: 4, rodas: 4 });

type TipoCarro = {
  rodas: number;
  portas: number;
};

type TipoCarroComPreco = TipoCarro & {
  preco: number;
};

interface InterfaceCarro {
  rodas: number;
  portas: number;
}

interface InterfaceCarro {
  preco: number;
}

function handleInterfaceCarro(carro: InterfaceCarro) {
  return carro;
}

interface Window {
  userId: number;
}

window.userId = 220;
