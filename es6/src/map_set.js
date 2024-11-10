//map é um dicionario (conjunto de valores como objetos)

let meuMap = new Map();
meuMap.set("nome", "gian");

meuMap.set("stack", "html, css, js");
console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("sobrenome"));

//iterar um map por chave
for (let chave of meuMap.keys()) {
    console.log(chave);
}

//iterar um map por valor
for (let valor of meuMap.values()) {
    console.log(valor);
}

//entrada de valores 
for (let entrada of meuMap.entries()) {
    console.log(entrada);
}

//entrada de chave e valor
for ( let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

//remover item  de map 
meuMap.delete("stack");

console.log(meuMap)


//set a chave é o proprio valor. 

const cpfs = new Set();
cpfs.add('114553946700')
cpfs.add('1435930443')
cpfs.add('1219013232')

console.log(cpfs)

//for each existe tanto no maps quanto no set

cpfs.forEach((valor) => {
    console.log(valor);
})

//set podemos impedir duplicação de infos.
const array = ['Gian Souza', 'Jose Paulo', 'Maria Isabel', 'Luana', 'Luana', 'Gian Souza']
console.log(array)

const arrayComoSet = new Set([...array]) // transformar um array em set
console.log(arrayComoSet)
const arraySemItensDuplicados = [...arrayComoSet]
console.log(arraySemItensDuplicados)