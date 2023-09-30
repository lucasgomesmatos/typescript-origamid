async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const product = await response.json();
  showProduct(product);
}

interface Empresa {
  fundacao: number;
  nome: string;
  pais: string;
}

interface Product {
  nome: string;
  descricao: string;
  garantia: string;
  preco: number;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

fetchProduct();

function showProduct(product: Product) {
  document.body.innerHTML = `
  <div>
  
    <h2>${product.nome}</h2>
    <p>R$ ${product.preco}</p>
    <div>
      <p>Empresa fabricante: ${product.empresaFabricante.nome}</p>
      <p>Empresa montadora: ${product.empresaMontadora.nome}</p>
    </div>
  </div>`;
}
