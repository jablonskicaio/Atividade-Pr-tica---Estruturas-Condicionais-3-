// 8. Crie uma variável para armazenar o salário do usuário e atribua um
// valor a essa variável. Crie a validação necessária:
// -Caso o salário seja MENOR que R$ 1.903,98, insira no html
// "ISENTO DE IR";
// -caso contrário insira "TRIBUTADO NO IR".

let salario = Number.parseFloat(prompt('Digite o valor do seu salário'));

if(salario < 1903.98) {
    document.write('Isento de IR');
} else{
    document.write('Tributado no IR');
}