/**
 * Crie um algoritimo que armazene três valores, para cada um dos lados, de um triângulo.
 * Se formar, deve mostrar no console o tipo de triângulos: isósceles, escaleno ou equilátero.
 *      a. para verificar se os lados fornecidos formam um triânculo: A < B + C /// B < A + C /// C < A + B.
 *      b.Triângulo isosceles: possui dois lados iguais (A=B ou A=C ou B=C)
 *      c. Triângulo Escaleno: possui todos os lados diferentes (A<>B e B<>C e C<>A)
 *      d. Triângulo equilátero: possui todos os lados iguais (A=B e B=C)
 */
 let a = Number.parseInt(prompt('Insira a medida de um lado de um triângulo em centímetros:'));
 let b = Number.parseInt(prompt('Insira a medida de outro lado de um triângulo em centímetros:'));
 let c = Number.parseInt(prompt('Insira a medida de outro lado de um triângulo em centímetros:'));

 if(a < b + c && b < a + c && c < a + b){
    if(a==b && a!=c || a==c && a!=b || b==c && b!=a){
        document.write('Valores inseridos formam um triângulo isósceles!');
    }else if(a!=b && b!=c && c!=a){
        document.write('Valores inseridos formam um triângulo escaleno!');
    }else if(a==b && b==c ){
        document.write('Valores inseridos formam um triângulo equilátero!');
    } 
 }else{
    document.write('Valores inseridos não formam nenhum triângulo!');
 }