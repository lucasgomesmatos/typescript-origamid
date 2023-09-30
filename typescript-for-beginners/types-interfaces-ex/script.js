"use strict";
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const product = await response.json();
    showProduct(product);
}
fetchProduct();
function showProduct(product) {
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
