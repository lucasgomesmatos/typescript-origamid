import { Estatiscas } from './Estatiscas';
import { ListaContada } from './count-by';
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
  console.log(data);

  preencherLista(data.pagamento, 'pagamento');
  preencherLista(data.status, 'status');

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

function preencherLista(lista: ListaContada, containerId: string) {
  if (!lista || !containerId) return;

  const elementoHTML = document.getElementById(containerId);

  if (!elementoHTML) return;

  Object.keys(lista).forEach((key) => {
    elementoHTML.innerHTML += `
    <p>${key}: ${lista[key]}</p>
    `;
  });
}

fetchDados();
