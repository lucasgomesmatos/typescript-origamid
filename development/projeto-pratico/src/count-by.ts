export type ListaContada = Record<string, number>;

export function countBy(arr: (string | number)[]) {
  return arr.reduce((acc: ListaContada, item) => {
    if (acc[item]) {
      acc[item] += 1;
    } else {
      acc[item] = 1;
    }

    return acc;
  }, {});
}
