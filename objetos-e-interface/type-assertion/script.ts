interface Produto {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  return response.json() as Promise<Produto>;
}

async function handleProduto() {
  const produto = await fetchProduto();
  produto.nome;
}

const video = document.querySelector('video')!;
video.volume;

const video2 = document.querySelector<HTMLVideoElement>('.player');
const video3 = <HTMLVideoElement>document.querySelector('.player');
const video4 = document.querySelector('.player') as HTMLVideoElement;
