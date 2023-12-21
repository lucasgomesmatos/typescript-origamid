import { fetchData } from './fetch-data';
import { TransacaoAPI, normalizarTransacao } from './normalizar-transacao';

async function fetchDados() {
  const data = await fetchData<TransacaoAPI[]>();

  if (!data) return;

  const transacoes = data.map(normalizarTransacao);
  console.log(transacoes);
}

fetchDados();
