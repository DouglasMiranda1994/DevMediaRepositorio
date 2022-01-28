/* É comum que algumas strings tenham espaços em branco no início e/ou no final. 
Como esses espaços normalmente são desnecessários, 
devem ser removidos deixando apenas o conteúdo da string. */

let telefone_1 = "(99) 99999-9999";
let telefone_2 = "    (99) 99999-9999    ";

if ( telefone_1 == telefone_2 ){
    console.log("Os telefones são iguais");
} else {
    console.log("Os telefones são diferentes");
}

console.log(telefone_1); // (99) 99999-9999
console.log(telefone_2); //    (99) 99999-9999

let nome = "   Diego     ";

let resultado = nome.trim();

console.log(resultado); // Diego