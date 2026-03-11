export class Carrinho{
    constructor(cliente){
        this.cliente = cliente;
        this.item = []
    }
    calcularTotal(){
        let total = 0;
        for(let i in this.itens){
            total += this.itens[i];
        }
        return total;
    }
}