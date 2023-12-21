import Clipboard from 'clipboard';
import _ from 'lodash';

const button = new Clipboard('button');

button.on('success', (even) => {
  console.log(even.text);
});

const diferenca = _.difference([2, 1], [2, 3]);

const livro = {
  nome: 'O Senhor dos Anéis',
};

console.log(livro.nome);
console.log(diferenca);
