let botao = document.querySelector('#botao');
let frase = document.querySelector('#frase');

botao.addEventListener('click', exibirFrase);

function exibirFrase () {
    frase.innerHTML='Bem-vindo ao meu site! Espero que esteja tudo em ordem.';
}