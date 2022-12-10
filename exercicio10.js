/* 10. Tendo como entrada a altura e o sexo (codificado da seguinte
    forma: 1 para sexo feminino e 2 para sexo masculino) de uma
    pessoa, construa um programa que calcule e mostre seu peso ideal,
    utilizando as seguintes fórmulas:
    - para homens: (72.7 * Altura) – 58
    - para mulheres: (62.1 * Altura) – 44.7 */

    let altura = Number.parseFloat(prompt(`insira sua altura`));
    let sexo = Number.parseInt(prompt(`insira 1 para sexo feminino, e 2 para sexo masculino`));
    let pesoIdeal = 0
    
    if(sexo=1){
        pesoIdeal = (62.1 * altura) - 58;
        console.log(`seu peso ideal é de ${pesoIdeal}`);
    }else if(sexo=2){
        pesoIdeal = (72.7 * altura) - 44.7;
        console.log(`seu peso ideal é de ${pesoIdeal}`);
    }