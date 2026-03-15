const prompt = require('prompt-sync')();

var valores = [];

for (var i = 0; i < 4; i++) {
    valores.push(parseInt(prompt("Digite um valor inteiro: ")));
}

function pares(num){
    return num % 2 === 0;
}

var numerosPares = valores.filter(pares);

console.log("Valores pares:");
console.log(numerosPares);