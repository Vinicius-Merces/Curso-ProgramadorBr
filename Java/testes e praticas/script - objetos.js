// uma forma simples de criar obj em uma função

// function obj (n, s){
//    return {nome: n, sobrenome:s}
// }

// var a = obj("Vinicius", "Merces")

// console.log(a)

// outra forma de criar obj abaixo


function obj (n, s){
   this.nome = n;
   this.sobrenome = s;
   
}

var a = new obj("Vinicius", "Mercês")

console.log(a["nome"])
console.log(a["sobrenome"])
