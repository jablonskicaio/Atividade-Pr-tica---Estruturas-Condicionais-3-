/*3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
número de 1 a 7 e imprimir no console o dia da Semana. Para este
exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
por diante. Caso o número recebido não esteja neste intervalo
imprimir “Dia não reconhecido”.*/

let dia = Number.parseInt(prompt("Digite o número correspondente ao dia da semana 1- domingo até 7 -sábado."));

if (dia == 1){
    console.log("Domingo");
} else if (dia == 2){
    console.log("Segunda");
} else if (dia == 3){
    console.log("Terça");
} else if (dia == 4){
    console.log("Quarta");
} else if (dia == 5){
    console.log("Quinta");
} else if (dia == 6){
    console.log("Sexta");
} else if (dia == 7){
    console.log("Sábado");
} else {
    console.log("Dia não reconhecido");
}