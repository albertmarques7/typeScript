// não é um array, é iterável

function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
}

console.log(somar(10,20,30))

//somar com rest pode receber inumeros argumentos, 
function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

//spread espalha itens de uma array

const numeros = [1,2,3,4]
console.log(...numeros)

//concatenar

//const timesDeFutebolSp = ['santos', 'palmeiras','sao paulo'];
//const timesDeFutebolRj = ['vasco', 'botagfogo', 'flamengo'];

//const timesDeFutebol = timesDeFutebolSp.concat(timesDeFutebolRj);

//console.log(timesDeFutebol)

//concatenar outra forma

const timesDeFutebolSp = ['santos', 'palmeiras','sao paulo'];
const timesDeFutebolRj = ['vasco', 'botagfogo', 'flamengo'];

const timesDeFutebol = [...timesDeFutebolSp,...timesDeFutebolRj];

console.log(timesDeFutebol)

// overide com o spread. reusa da julia para ana. 
const carroDajulia  = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaAna = {
    ...carroDajulia,
    motor: 1.8,
    cor: 'rosa'
}
console.log(carroDaAna)

//desestruturação: quero apenas uma propriedade numa atribuição de variavel
const {motor : motorDoCarroDaANA} = carroDaAna; //assim acessa  um atributo.
const {motor : motorDoCarroDaJulia} = carroDajulia; // uso de alias para não ter o nome da mesma variavel 

//pra desestruturar usa o colchetes, ja o ...outrostimes é pra colocar o resto 

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;

console.log(item1)
console.log(item2)
console.log(item3)
console.log(outrosTimes)
