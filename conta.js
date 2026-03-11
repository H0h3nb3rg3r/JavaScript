export class Conta{
    constructor(titular){
        this.tiular = titular;
        this.saldo = 0;
    }
    depositar(valor){
        this.saldo += valor;
    }
    sacar(valor){
        if (valor > this.saldo){
            throw "Saldo Indisponível";
        }
        this.saldo -= valor;
    }
    transferir(outraConta, valor){
        this.sacar(valor);
        outraConta.depositar(valor);
    }
}