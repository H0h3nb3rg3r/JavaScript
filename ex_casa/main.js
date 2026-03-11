import { Pessoa } from "./pessoa.js";
import {Produto} from "./produto.js";
import { Carrinho } from "./carrinho.js";

let cliente1 = new Pessoa("Jackson Five", 38, "49 8800-5500");
let cliente2 = new Pessoa("McQueen", 35, "49 8800-5500");

let produto1 = new Produto("Chocolate",10,10);
let produto2 = new Produto("Salgadinho",15,5);
let produto3 = new Produto("Refrigerante",5,10);

let carrinhoPessoa1 = new Carrinho(cliente1);
let carrinhoPessoa2 = new Carrinho(cliente2);

carrinhoPessoa1.addProduto(produto3);
carrinhoPessoa1.addProduto(produto1);

carrinhoPessoa2.addProduto(produto2);
carrinhoPessoa2.addProduto(produto1);

carrinhoPessoa1.exibirResumo();
carrinhoPessoa2.exibirResumo();