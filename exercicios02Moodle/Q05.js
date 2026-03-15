const prompt = require('prompt-sync')();

var valores = [];

for (var i = 0; i < 4; i++) {
    valores.push(parseInt(prompt("Digite um número: ")));
}

function fatorial(n){

    var fat = 1;

    for (var i = 1; i <= n; i++){
        fat = fat * i;
    }

    return fat;
}

var fatoriais = valores.map(fatorial);

console.log("Fatoriais:");
console.log(fatoriais);