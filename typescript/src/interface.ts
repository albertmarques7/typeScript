//interface é um contrato. Junção de regras em determinada classe aplicada.
//interface podem ser varias implementadas 
class Conta {
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta;
    }
}

class ContaSalario extends Conta {

    depositar(valor: number) {
        this.saldo += valor;
    }
}

interface ITransacional {
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTransferencia: number;
}

interface IExemplo2 {
    cnpj: number;
}

interface IExemplo3 extends IExemplo2 {
    telefone: number;
}

class ContaCorrente extends Conta implements ITransacional, IExemplo3 {
    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += valor;
        return true;
    };
    taxaTransferencia: number = 0;
    cnpj= 12128192;
    telefone= 128192
}

console.log("olá" + 10)