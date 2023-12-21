/**
 * Recebe uma string no formato "1.200,50" e retorna um número 1200.50
 * @param moeda string
 * @returns number | null
 */
export function moedaParaNumero(moeda: string): number | null {
  const valor = Number(moeda.replaceAll('.', '').replace(',', '.'));
  return isNaN(valor) ? null : valor;
}
