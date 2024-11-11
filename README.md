# TypeScript
  Fortemente tipada diferente do js. Javascript permite mudança de tipo da variável trazendo problemas ao código. 
  1º instalação global do typescript: PS C:\Users\alber\OneDrive\Documentos\typescript> npm install --global typescript
  2º instalar npx tsc --init (procura o node_modules que se n houver na pasta do projeto, irá procurar no do pc vendo node_modules de apis instalads globalmente)
  Lá vai ativar o tsc(typescript compiler)

  TS não pode ter a mesma variável em 2 arquivos diferentes
  -> só ocorre na construção do projeto
# TIPOS
-> boolean
  let estaChovendo: boolean = false;
  estaChovendo = true;

-> Numeros inteiros/quebrados são iguais
let idade = 27;
let altura = 1.75;
altura = 2;

Typescript não permite array de tipos diferentes 

const colegas: string[]= ['lucas', 'fernanda']
const tecnologias: Array<string> = ['html', 'css', 'js']

//para array de leitura apenas!
const notas: ReadonlyArray<number> = [7,9,5,8]

// tuplas é possível colocar nomes para os campos
const lista: [nome: string, estaEstudando: boolean, idade: number] = ['gian', true, 27]
//Union Type
let idadeDaAna: number | string [] = 25 //idade pode ser string ou númerico.

// aceita qualquer tipo
let dadosDaApi: any;
dadosDaApi = 10
dadosDaApi = true
dadosDaApi = [1,2]
dadosDaApi = 'string'


# Tipagem explicita
  interessante utilizar para identificar de forma legível pra todos envolvidos.

  Sobre as tipagens em funções As funções também possuem tipos, em seus argumentos e em seu retorno: 
  let somaDoisNumeros(n1: number, n2: number): number { return n1 + n2; } 
  
  No exemplo acima, estamos recebendo dois argumentos, ambos do tipo number e, após o fechamento dos parênteses, incluímos o tipo do retorno que também será um number.

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

namespace casting {
    let idade: any = 25;
    (idade as number).toFixed(); //castingfunção para numericos add casas decimais
    (idade as string).length;
    (idade as string[]).forEach(x => {
        console.log(x);
    })
    // para passar de numero para string precisa ser passado para unknown
    let nome: string = 35 as unknown as string;
}
const resultadoDeTeste = teste()
#Criação de tipos customizados
//criação de um tipo customizado
type aluno = {
    nome: string;
    cursos?: string[]; //? para não ser obrigatório
    idade: number;
}

const alunos: aluno[]= [
    {
        nome: "Carlos",
        cursos: ["Front-end", "UX/UI"],
        idade: 27,
    },
    {
        nome: "Ana",
        cursos: ["Front-end", "Python"],
        idade: 23,
    },
]

alunos.push({
    nome: "Júlia",
    cursos: ["arquitetura"],
    idade: 29
})

const novoAluno: aluno = {
    nome: "Lucas",
    idade: 32
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)
}
#Cri#
