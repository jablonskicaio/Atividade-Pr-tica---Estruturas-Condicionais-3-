
let preçoTabela = Number.parseFloat(prompt('Insira o valor de sua compra:'));
let parcelas = Number.parseInt(prompt('Insira o número de parcelas:'));
let valorFinal = 0
let valorParcela = 0

if(parcelas == 1){
    valorFinal = preçoTabela-((preçoTabela*2.5)/100);
    console.log(`O valor final da sua compra ficou em ${valorFinal}`);

}else if(parcelas>=2 && parcelas<=5){
    valorFinal = preçoTabela
    valorParcela = valorFinal/parcelas
    console.log(`O valor final da sua compra ficou em ${valorFinal}`);
    console.log(`O valor de cada parcela ficou ${valorParcela}`);

}else if(parcelas>=6 && parcelas<=10){
    valorFinal = preçoTabela+((preçoTabela*6)/100);
    valorParcela = valorFinal/parcelas
    console.log(`O valor final da sua compra ficou em ${valorFinal}`);
    console.log(`O valor de cada parcela ficou ${valorParcela}`);

}else if(parcelas>=11 && parcelas<=15){
    valorFinal = preçoTabela+((preçoTabela*13)/100);
    valorParcela = valorFinal/parcelas
    console.log(`O valor final da sua compra ficou em ${valorFinal}`);
    console.log(`O valor de cada parcela ficou ${valorParcela}`);
}
