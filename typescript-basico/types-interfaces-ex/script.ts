interface IEmpresa {
  nome: string;
  fundacao: number;
  pais: string;
}

interface IProduct {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string | number;
  seguroAcidentes: boolean;
  empresaFabricante: IEmpresa;
  empresaMontadora: IEmpresa;
}


async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

function showProduct(data: IProduct) {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>R$ ${data.preco}</p>
      <div>
        <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
      </div>
      <div>
        <h3>Montadora: ${data.empresaMontadora.nome}</h3>
      </div>
    </div>
  `;
}