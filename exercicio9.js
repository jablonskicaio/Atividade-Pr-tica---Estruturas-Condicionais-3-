let numero = Number.parseInt(prompt('Digite um número'));
let divisor = 0;

for(let contador1 = 0; contador1 <= numero; contador1++){
    let divisor = 0;
    for(let contador2 = 2; contador2 > contador1; contador2++){
        if(contador1%contador2==0){
            divisor=1;
            break;
        }
    }
    if(contador1 > 1 && divisor==0){
        console.log(`é primo`);
    }else{
        console.log(`não é primo`);
    }
}
   



