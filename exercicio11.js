// UtilizandoSwitch,façaumprogramaquepergunteemqueturno
// vocêestuda.Peçaparadigitar“M”paramatutinoou“V”para
// vespertinoou“N”paranoturno.Mostreumalertacomamensagem
// “Bomdia!”ou“Boatarde”ou“BoaNoite”ou“Valorinválido”,
// conforme o caso.

let turno = prompt('Em que turno você estuda? digite M para matutino, V para vespertino ou N para noturno:');

switch(turno){
case 'M':
    alert('Bom dia!');
    break;
case 'V':
    alert('Boa tarde!');
    break;
case 'N':
    alert('Boa noite!');
    break;
default:
    alert('Valor Inválido.')
    break;
}