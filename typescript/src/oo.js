"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} disse oi`;
    }
}
class ContaBancaria {
    constructor(numeroDaConta) {
        this.saldo = 0; // parametro ja com valor inicial
        this.numeroConta = numeroDaConta;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    //static pertence a instancia e não a classe.
    static retornaNumeroDoBanco() {
        return 125;
    }
}
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoPedro = new ContaBancariaPessoaFisica(123456);
ContaBancaria.retornaNumeroDoBanco();
