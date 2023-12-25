import { Estatiscas } from './Estatiscas';
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
  preencherEstatisticas(transacoes);
}

function preencherEstatisticas(transacoes: Transacao[]) {
  const data = new Estatiscas(transacoes);
  const totalElement = document.querySelector('#total span');
  if (totalElement instanceof HTMLElement) {
    totalElement.innerText = data.total.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
}

function preencherTabela(transacoes: Transacao[]) {
  const tabela = document.querySelector('#transacoes tbody');
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
