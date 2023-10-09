"use strict";
const button = document.querySelector('button');
const config = localStorage.getItem('config');
if (button) {
    button.addEventListener('click', () => { });
}
const jogo = {
    nome: 'Ragnarok',
};
const livro = {};
jogo.nome = 'Ragnarok 2';
console.log(livro.nome?.toLocaleLowerCase());
