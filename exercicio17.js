/**
 * Escreva um algotimo que armazene o número total de eleitores de um município, o número
 * de cotos brancos, nulos e válidos. Calcular e escrever o percentual que cada um
 * representa em relação ao total de eleitores. O algoritimo deve fazer uma validação
 * para que as porcentagens dos votos armazenados (brancos, nulos e válidos) respeitem
 * o limite do número total de eleitores, ou seja, garantir que a soma dos votos brancos,
 * nulos e cálidos não seja maior que o número de eleitores.
 */
 
 let eleitores = Number.parseInt(prompt('Insira o número de eleitores:'));
 let validos = Number.parseInt(prompt('Insira o número total votos válidos:'));
 let brancos = Number.parseInt(prompt('Insira o número de votos em branco:'));
 let nulos = Number.parseInt(prompt('Insira o número de votos nulos:'));

 if(eleitores >= (validos+brancos+nulos)){
    let pValidos = (validos * 100) / eleitores;
    let pBrancos = (brancos * 100) / eleitores;
    let pNulos = (nulos * 100) / eleitores;
    document.write(`O total de eleitores foi de ${eleitores}, de votos válidos foi de ${pValidos.toFixed(2)}%, 
    de votos brancos foi de ${pBrancos.toFixed(2)}%, de votos nulos foi de ${pNulos.toFixed(2)}%.`);
 }else{
    document.write('Dados inseridos incosistentes, o total de votos ultrapassa o total de eleitores.');
 }
 