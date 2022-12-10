/**
 * Escreva um algoritimo que armazene o ano atual e o ano de nascimento de uma pessoa
 * Escrever uma mensagem no console que diga se ela poderá ou não votar este ano (não
 * é necessário considerar o mês em que a pessoa nasceu)
 */
let data = Number.parseInt(prompt('Insira o ano em que estamos:'));
let nascimento = Number.parseInt(prompt('Insira o ano em que você nasceu:'));
let podeVotar = data-nascimento

if(podeVotar>=16){
    console.log('Você pode votar!');
}else{
    console.log('Você ainda não pode votar!');
}
