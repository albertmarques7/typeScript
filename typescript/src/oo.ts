class Pessoa {

    //propriedades antes do construtor
    nome: string;
    renda?: number; // paarametros opcionais sempre por ultimo
    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;

    }

    dizOla() : string {
        return `${this.nome} disse oi`
    }
}

class ContaBancaria {
    protected saldo: number = 0; // parametro ja com valor inicial
    numeroConta: number;

    constructor(numeroDaConta: number) {
        this.numeroConta = numeroDaConta;
    }

    getSaldo() {
        return this.saldo;
    }

    depositar(valor: number) {
        this.saldo += valor
    }
//static pertence a instancia e não a classe.
    static retornaNumeroDoBanco() {
        return 125;
    }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}

const contaDoPedro = new ContaBancariaPessoaFisica(123456)
ContaBancaria.retornaNumeroDoBanco();