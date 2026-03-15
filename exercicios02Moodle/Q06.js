const prompt = require('prompt-sync')();

var estados = [];

for (var i = 0; i < 4; i++) {

    var nome = prompt("Nome do estado: ");
    var sigla = prompt("Sigla: ");

    estados.push({
        nome: nome,
        sigla: sigla
    });
}

var lista = estados.map(function(e){
    return e.sigla + " - " + e.nome;
});

console.log("Estados cadastrados:");
console.log(lista);