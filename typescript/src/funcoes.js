"use strict";
function calculaArea(base, altura) {
    return base * altura;
}
// modo arrow function
const calculaArea2 = (base, altura) => base * altura;
//definir a tipagem do array mesmo com REST
function somar(...numeros) {
    console.log(numeros);
}
function teste() {
    if (10 > 5) {
        return 'dez é maior que cinco';
    }
    else {
        return 5;
    }
}
const resultadoDeTeste = teste();
console.log(resultadoDeTeste);
