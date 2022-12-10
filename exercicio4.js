// 4. Reescreva o exercício 3, utilizando apenas o SWITCH.

let dia = Number.parseInt(prompt("Digite o número correspondente ao dia da semana 1- domingo até 7 -sábado."));

switch(dia){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:      
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado");
        break; 
    default:
        console.log("Dia não reconhecido");
        break;
}