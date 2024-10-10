function Personagem(nome) {
    this.nome = nome; 
}

function Pessoa(nome, funcao) {
    Personagem.call(this, nome);
    this.funcao = funcao;

    this.saudacao = function() {
        console.log("Olá, eu sou " + this.nome);
    }
}

function Pokemon(nome, tipo, nivel) {
    Personagem.call(this, nome); 
    this.tipo = tipo;
    this.nivel = nivel;

    this.batalhar = function() {
        console.log(this.nome + ", eu escolho você!");
    }
}

const personagem1 = new Pessoa("Ash", "treinador");
const personagem2 = new Pokemon("Pikachu", "Elétrico", 2);
const personagem3 = new Pokemon("Espeon", "Psíquico", 2);

console.log(personagem1);
console.log(personagem2);
console.log(personagem3);

personagem1.saudacao();
personagem3.batalhar();
