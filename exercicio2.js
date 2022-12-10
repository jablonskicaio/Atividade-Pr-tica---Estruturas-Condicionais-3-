/*2. Para o mesmo exercício acima insira mais uma variável a
condicional, além de saber se o motorista tem 18 anos ou mais,
temos que saber também se ele é habilitado para dirigir. Caso ele
tenha idade maior ou igual a 18 anos e possua habilitação, insira no
html “Pode dirigir” caso contrário imprima “Não pode dirigir”.*/

let idade = Number.parseInt(prompt("Digite sua idade: "));


if ( idade >= 18){
    let habilitacao = prompt("Digite se possui habilitação? sim ou não");
    switch(habilitacao){
        case 'sim': 
            document.write("Pode dirigir");
        break;
        case 'não':
            document.write("Não pode dirigir")
        break;
    }
} else {
    document.write("Não pode dirigir.")
}