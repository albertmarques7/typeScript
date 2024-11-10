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

const aprovados = arrayDeAlunos.filter(aluno => aluno.notaDeAluno >= 6);

console.log("Lista de alunos aprovados:");
aprovados.forEach(aluno => console.log(aluno.nome));