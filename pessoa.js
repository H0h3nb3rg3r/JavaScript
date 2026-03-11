export class Pessoa{
    constructor(nome, idade, telefone){
        this.nome = nome;
        this.idade = idade;
        this.telefone = telefone;
    }

    verificaIdade() {
        if (this.idade < 18) {
            throw "Pessoa menor de idade";
        } else {
            throw "Pessoa maior de idade";
        }
    }
}