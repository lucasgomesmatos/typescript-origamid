import { moedaParaNumero } from './moeda-para-numero';

export type TransacaoPagamento = 'Cartão de Crédito' | 'Boleto';
export type TransacaoStatus =
  | 'Paga'
  | 'Aguardando Pagamento'
  | 'Recusada pela operadora de cartão'
  | 'Estornada';

export interface TransacaoAPI {
  Status: TransacaoStatus;
  ID: number;
  Data: string;
  Nome: string;
  Email: string;
  ['Forma de Pagamento']: TransacaoPagamento;
  ['Valor (R$)']: string;
  ['Cliente Novo']: number;
}

export interface Transacao {
  id: number;
  status: TransacaoStatus;
  data: string;
  nome: string;
  email: string;
  moeda: string;
  valor: number | null;
  pagamento: TransacaoPagamento;
  novo: boolean;
}

export function normalizarTransacao(transacao: TransacaoAPI): Transacao {
  return {
    id: transacao.ID,
    nome: transacao.Nome,
    email: transacao.Email,
    data: transacao.Data,
    status: transacao.Status,
    novo: Boolean(transacao['Cliente Novo']),
    pagamento: transacao['Forma de Pagamento'],
    moeda: transacao['Valor (R$)'],
    valor: moedaParaNumero(transacao['Valor (R$)']),
  };
}
