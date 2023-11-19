const video = document.querySelector('#video') as HTMLVideoElement;

video.volume;

interface Produto {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  return response.json() as Promise<Produto>;
}

// Podemos usar o as em diferentes locais.
async function handleProduto1() {
  const produto = await fetchProduto();
  produto.nome;
}
