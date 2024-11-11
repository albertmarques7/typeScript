let estaChovendo: boolean = false;
estaChovendo = true;

let idade: number = 27;
let altura: number = 1.75;
altura = 2;
console.log(altura)

const colegas: string[]= ['lucas', 'fernanda']
const tecnologias: Array<string> = ['html', 'css', 'js']

//array de leitura apenas!
const notas: ReadonlyArray<number> = [7,9,5,8]

// tuplas é possível colocar nomes para os campos
const lista: [nome: string, estaEstudando: boolean, idade: number] = ['gian', true, 27]

let idadeDaAna: number | string [] = 25 //idade pode ser string ou númerico.

// aceita qualquer tipo
let dadosDaApi: any;
dadosDaApi = 10
dadosDaApi = true
dadosDaApi = [1,2]
dadosDaApi = 'string'
