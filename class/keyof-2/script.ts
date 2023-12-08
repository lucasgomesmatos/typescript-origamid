async function fetchData<T>(url: string): Promise<T> {
  const base = 'https://api.origamid.dev/json';

  const response = await fetch(base.concat(url));
  return response.json();
}

interface Jogo {
  nome: string;
  ano: number;
  desenvolvedora: string;
  plataforma: string[];
}

interface Livro {
  nome: string;
  ano: number;
  autor: string;
  paginas: number;
}

function checkInterface<T>(obj: unknown, key: keyof T): obj is T {
  if (obj && typeof obj === 'object' && key in obj) {
    return true;
  }

  return false;
}

async function handleData() {
  const jogo = await fetchData<Jogo>('/jogo.json');
  if (checkInterface<Jogo>(jogo, 'desenvolvedora')) {
    console.log(jogo.desenvolvedora.toUpperCase());
  }

  const livro = await fetchData<Livro>('/livro.json');
  if (checkInterface<Livro>(livro, 'autor')) {
    console.log(livro.autor.toUpperCase());
  }
}

handleData();
