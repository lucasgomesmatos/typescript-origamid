function comparar(tipo: 'menor' | 'maior', ...rest: number[]) {
  if (tipo === 'menor') {
    return Math.min(...rest);
  }

  if (tipo === 'maior') {
    return Math.max(...rest);
  }
}

comparar('menor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
comparar('maior', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
