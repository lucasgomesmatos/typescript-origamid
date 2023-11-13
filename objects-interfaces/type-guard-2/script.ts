async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const json = await response.json();
  handleCursos(json);
}

fetchCursos();

interface Produto {
  nome: string;
  preco: number;
}

function isProduto(value: unknown): value is Produto {
  if (
    value &&
    typeof value === 'object' &&
    'nome' in value &&
    'preco' in value
  ) {
    return true;
  } else {
    return false;
  }
}

function handleCursos(data: unknown) {
  if (isProduto(data)) {
    console.log(data.nome);
    console.log(data.preco);
  } else {
  }
}
