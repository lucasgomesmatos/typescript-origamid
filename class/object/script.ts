interface Produto {
  nome: string;
  quantidade: number;
}

const produto = {
  nome: 'Computador',
  quantidade: 10,
  cor: 'cinza',
};

function mostrarNomeProduto(produto: Produto) {
  console.log(produto.quantidade + 20);
}

mostrarNomeProduto(produto);

function mostrarQuantidadePartial(produto: Partial<Produto>) {
  if (produto.quantidade) {
    console.log(produto?.quantidade + 20);
  }
}

mostrarQuantidadePartial(produto);

interface Post {
  titulo: string;
  visualizacoes: number;
  tags: string[];
  [key: string]: unknown;
}

const artigo: Post = {
  titulo: 'como aprender TypeScript',
  visualizacoes: 1000,
  tags: ['typescript', 'javascript'],
  autor: 'Luiz',
};

interface ObjectLiteral {
  [key: string]: unknown;
}

type ObjectLiteral2 = Record<string, unknown>;

function mostrarTitulo(obj: ObjectLiteral2) {
  if ('titulo' in obj) {
    console.log(obj.titulo);
  }
}

mostrarTitulo(artigo);
