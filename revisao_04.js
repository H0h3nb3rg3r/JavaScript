import { Conta } from "./conta.js";
import { Pessoa } from "./pessoa.js";

let pessoa1 = new Pessoa("Jackson Five", 20, "48 99999-9999");
let pessoa2 = new Pessoa("Capitão Nascimento", 17, "48 98888-8888");

try {
    pessoa1.verificarMaioridade();
} catch (erro) {
    console.error("Erro: " + erro);
}

try {
    pessoa2.verificarMaioridade();
} catch (erro) {
    console.error("Erro: " + erro);
}

let conta1 = new Conta("Jackson Five");
let conta2 = new Conta("Capitão Nascimento");


conta1.depositar(2000);
conta2.depositar(3000);

console.log("Ínicio")
console.log(conta1.titular + " - R$" + conta1.saldo);
console.log(conta2.titular + " - R$" + conta2.saldo);

try{
    conta1.sacar(1900);
    conta2.sacar(1000);
    } catch(erro){
        console.error("Erro: "+ erro);
}

console.log("Transação 01")
console.log(conta1.titular + " - R$" + conta1.saldo);
console.log(conta2.titular + " - R$" + conta2.saldo);

conta2.transferir(conta1,500);

console.log("Transação 02")
console.log(conta1.titular + " - R$" + conta1.saldo);
console.log(conta2.titular + " - R$" + conta2.saldo);