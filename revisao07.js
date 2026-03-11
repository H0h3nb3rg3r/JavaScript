let precos = [15.5, 23.9, 59.75, 110.17];
let precoNovo = precos.map((item)=> item * 1.1);
for(let i in precoNovo){
    console.log(precoNovo[i]);
}
 let notas = [
    {nome:"Jackson Five", nota:10},
    {nome:"Chaves", nota:8},
    {nome:"Chiquinha", nota:6},
    {nome:"Seu Madruga", nota:2},
    {nome:"Kiko", nota:0},
]; 
let ap = notas.filter(function(item){
    return item.nota >= 6;
});
ap.map(function(item){
    console.log("Nome: "+item.nome+" - Nota:"+item.nota);
});