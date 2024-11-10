const minhaFuncao = () => "Diz olá";

const retornaUmcarro = () => ({
    modelo: 'ka',
    fabricante: 'Ford'
})

console.log(minhaFuncao())
console.log(retornaUmcarro())

const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        this.velocidadeAtual += 10;
    },
    frear: () => {
        this.velocidadeAtual -= 10;
    }
}

carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual)