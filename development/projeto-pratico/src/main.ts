import { fetchData } from './fetch-data';
import {
  Transacao,
  TransacaoAPI,
  normalizarTransacao,
} from './normalizar-transacao';

async function fetchDados() {
  const data = await fetchData<TransacaoAPI[]>();

  if (!data) return;

  const transacoes = data.map(normalizarTransacao);
  preencherTabela(transacoes);
}

function preencherTabela(transacoes: Transacao[]) {
  const tabela = document.querySelector('#transacoes tbody');
  console.log(tabela);
  if (!tabela) return;
  transacoes.forEach((transacao) => {
    tabela.innerHTML += `
    <tr>
    <td>${transacao.nome}</td>
    <td>${transacao.email}</td>
    <td>${transacao.moeda.length > 1 ? 'R$' : ''} ${transacao.moeda}</td>
    <td>${transacao.pagamento}</td>
    <td>${transacao.status}</td>
    </tr>
    
    `;
  });
}

fetchDados();
