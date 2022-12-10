/**12. Doar sangue é necessário ter entre 18 e 67 anos. Faça um programa que armazene a idade de uma pessoa e diga se ela pode
 * doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E (&&).
 */

let idade = Number.parseInt(prompt('Insira sua idade para saber se pode doar sangue:'));

if(idade >= 18 && idade <=67){
    alert('pode doar sangue!');
}else{
    alert('não pode doar sangue!');
}

