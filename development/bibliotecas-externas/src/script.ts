const body = $('body');

const diferenca = _.intersection([1, 2, 3], [2, 3, 4]);

console.log(body.addClass('ativo'));
console.log(diferenca);

declare const Vimeo: any;

const iframe = document.getElementById('vimeo');
const player = new Vimeo.Player(iframe);

console.log(player);
