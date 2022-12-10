/**
 * 13. Faça um algoritimo que armazene um número e imprima os números ímpares entre 1 e o número armazenado.
 */

let numero = Number.parseInt(prompt('Insira um número positivo para a contagem de ímpares:'));

for(contador=1; contador<=numero; contador++){
    if(contador%2!=0){
        document.write(` ${contador}; `)
        document.write(`<br>`)
    }
}5