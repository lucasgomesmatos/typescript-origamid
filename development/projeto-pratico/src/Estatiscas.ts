import { countBy } from 'lodash';
import { Transacao } from './normalizar-transacao';

type TransacaoValor = Transacao & {
  valor: number;
};

export class Estatiscas {
  private transacoes;
  total;
  pagamento;
  status;
  semana;
  melhorDia;

  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.calcularTotal();
    this.pagamento = this.calcularPagamento();
    this.status = this.calcularStatus();
    this.semana = this.calcularSemana();
    this.melhorDia = this.calcularMelhorDia();
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

  private calcularPagamento() {
    return countBy(this.transacoes.map(({ pagamento }) => pagamento));
  }

  private calcularStatus() {
    return countBy(this.transacoes.map(({ status }) => status));
  }

  private calcularSemana() {
    const semana = [
      'domingo',
      'segunda',
      'terca',
      'quarta',
      'quinta',
      'sexta',
      'sabado',
    ];

    return this.transacoes.reduce(
      (accumulator: Record<string, number>, transacao) => {
        const diaDaSemana = transacao.data.getDay();
        const nomeDoDia = semana[diaDaSemana];

        accumulator[nomeDoDia] += 1;
        return accumulator;
      },
      {
        domingo: 0,
        segunda: 0,
        terca: 0,
        quarta: 0,
        quinta: 0,
        sexta: 0,
        sabado: 0,
      },
    );
  }

  private calcularMelhorDia() {
    return Object.entries(this.semana).sort((a, b) => b[1] - a[1])[0];
  }
}
