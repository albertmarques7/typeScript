function calculaArea(base: number, altura: number) {
    return base * altura;
}

// modo arrow function

const calculaArea2 = (base: number, altura : number): number => base * altura

//definir a tipagem do array mesmo com REST
function somar(...numeros: number[]) {
    console.log(numeros)
}

function teste(): string | number {
    if(10>5) {
        return 'dez é maior que cinco'
    } else {
        return 5
    }
}

const resultadoDeTeste = teste()
console.log(resultadoDeTeste)