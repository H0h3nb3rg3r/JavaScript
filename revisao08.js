import {Pessoa} from "./pessoa.js";
import { Produto } from "./ex_casa/produto.js";
import {Carrinho} from "./ex_casa/carrinho.js";

let pessoa1 = new Pessoa("Jackson Five", 38, "49 8800-5500");
let pessoa2 = new Pessoa("Chaves",8,"49 3300-1100");

let produto1 = new Pessoa("Maça",7,20);
let produto2 = new Pessoa("Chocolate",15,25);
let produto3 = new Pessoa("Table",1500,2);

let carrinho1 = new Carrinho(pessoa1);
let carrinho2 = new Carrinho(pessoa2);

carrinho1.addProduto(produto3);
carrinho1.addProduto(produto2);

carrinho2.addProduto(produto1);
carrinho2.addProduto(produto2);