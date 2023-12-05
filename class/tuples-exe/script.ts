// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela

interface ProdutoDetalhes {
  marca: string;
  cor: string;
}

async function fetchVendas() {
  const response = await fetch('https://api.origamid.dev/json/vendas.json');
  const data = await response.json();
  somaVendas(data);
}

type Venda = [string, number, string, ProdutoDetalhes];

function somaVendas(vendas: Venda[]) {
  let total = 0;
  vendas.forEach((venda) => {
    total += venda[1];
  });
  document.body.innerHTML += `<p>Total: R$ ${total}</p>`;

  const total2 = vendas.reduce((total, venda) => {
    return total + venda[1];
  }, 0);

  document.body.innerHTML += `<p>Total: R$ ${total2}</p>`;
}

fetchVendas();
