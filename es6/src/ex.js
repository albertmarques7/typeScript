class Boletim {
    constructor(nome, notaDeAluno) {
        this.nome = nome;
        this.notaDeAluno = notaDeAluno;
    }
}

const aluno1 = new Boletim ("João", 10);
const aluno2 = new Boletim ("Vitor", 4.5);
const aluno3 = new Boletim ("Carlos", 6);
const aluno4 = new Boletim ("Júlia", 7);
const aluno5 = new Boletim ("Adriana", 5.9);
const arrayDeAlunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

const aprovados = [];

function maiorQueMedia (nome,notaDeAluno) {
    if (notaDeAluno >= 6) {
        return nome;
    }
}

for (var i = 0; i < arrayDeAlunos.length; i++ ) {
    console.log(arrayDeAlunos[i])
}
for (var i = 0; i <arrayDeAlunos.length; i++) {
    const nomeAprovado = maiorQueMedia(arrayDeAlunos[i].nome, arrayDeAlunos[i].notaDeAluno);
    if (nomeAprovado) {
        aprovados.push(nomeAprovado);
    }
}

console.log("Lista de alunos aprovados: ")

for (var i = 0; i <aprovados.length; i++) {
    console.log(aprovados[i])
}