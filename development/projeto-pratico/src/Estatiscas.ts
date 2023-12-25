import { Transacao } from './normalizar-transacao';

type TransacaoValor = Transacao & {
  valor: number;
};

export class Estatiscas {
  private transacoes;
  total;

  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.calcularTotal();
  }

  private calcularTotal() {
    return this.transacoes
      .filter(this.filtrarValor)
      .reduce((acc, transacao) => {
        return acc + transacao.valor;
      }, 0);
  }

  private filtrarValor(transacao: Transacao): transacao is TransacaoValor {
    return transacao.valor !== null;
  }
}
