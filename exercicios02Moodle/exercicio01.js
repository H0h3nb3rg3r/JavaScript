var notas = [7, 8, 6, 9];

function somar(total, valor){
    return total + valor;
}

var soma = notas.reduce(somar, 0);
var media = soma / notas.length;

console.log("Média do aluno: " + media);