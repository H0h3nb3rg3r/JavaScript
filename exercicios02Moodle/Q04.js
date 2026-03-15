const prompt = require('prompt-sync')();

var pessoas = [];

for (var i = 0; i < 4; i++) {

    var nome = prompt("Nome: ");
    var idade = parseInt(prompt("Idade: "));

    pessoas.push({
        nome: nome,
        idade: idade
    });

}

function idosos(p){
    return p.idade >= 60;
}

var listaIdosos = pessoas.filter(idosos);

console.log("Pessoas idosas:");
console.log(listaIdosos);