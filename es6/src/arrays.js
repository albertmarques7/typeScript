const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i=0; i< redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

const alunos = [ 'Gusta', 'Ju', 'Paula', 'Wagner'];

const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
    return itemAtual;
})

console.log(alunos2)

const paula = alunos2.find(function(item){
    return item.nome == 'Paula'//true or false
})

console.log(paula)

const indiceDaPaula = alunos2.findIndex(function(item){
    return item.nome == 'Paulo'//true or false
})

console.log(indiceDaPaula)

//every

alunos2.push({
    nome: 'Lucio',
    curso: 'Backend'
})

const todosAlunosSaoFrontend = alunos2.every(function(item) {
    return item.curso === 'Frontend'
})

console.log(todosAlunosSaoFrontend)

const existeAlgumAlunodeBackend = alunos2.some(function(item) {
    return item.curso === 'Backend' && item.curso === 'Frontend'
})

console.log(existeAlgumAlunodeBackend)

// 2 opcoes com ou sem arrow function

function filtrarAlunosdeBackend(aluno) {
    return aluno.curso === 'Backend';
}

const filtrarAlunosdeBackend2 = aluno => aluno.curso === 'Backend';

//

const alunosDebackend= alunos2.filter(filtrarAlunosdeBackend)

console.log(alunosDebackend)

const nums = [10,20,30,10]

const soma = nums.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual;
    return acumulador;
}, 0)

console.log(soma);