"use strict";
//interface é um contrato. Junção de regras em determinada classe aplicada.
//interface podem ser varias implementadas 
class Conta {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroDaConta = numeroDaConta;
    }
}
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaTransferencia = 0;
        this.cnpj = 12128192;
        this.telefone = 128192;
    }
    transferir(valor, destinatario) {
        destinatario.saldo += valor;
        return true;
    }
    ;
}
console.log("olá" + 10);
