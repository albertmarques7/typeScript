"use strict";
const alunos = [
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
];
alunos.push({
    nome: "Júlia",
    cursos: ["arquitetura"],
    idade: 29
});
const novoAluno = {
    nome: "Lucas",
    idade: 32
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
