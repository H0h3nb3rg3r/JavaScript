const prompt = require('prompt-sync')();

var notas = [];

for (var i = 0; i < 4; i++) {
    notas.push(parseInt(prompt("Digite a nota " + (i+1) + ": ")));
}

var media = notas.reduce((total, valor) => total + valor, 0) / notas.length;

console.log("Média do aluno: " + media);