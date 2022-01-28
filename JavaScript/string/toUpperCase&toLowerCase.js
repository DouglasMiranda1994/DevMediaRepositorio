/*Algumas vezes será necessário trabalhar com a conversão de letras maiúsculas e 
minúsculas na programação. Para o programador é importante saber lidar com essa 
diferença e por isso o JavaScript fornece dois métodos que trabalham nesse fim. */

//toUpperCase: deixa tudo em maiúsculo
//toLowerCase: deixa tudo em minúsculo

/*let programador_1 = "Flávia";
let programador_2 = "Rogério";

console.log(programador_1.toUpperCase()); // FLÁVIA

console.log(programador_2.toLowerCase()); // rogério

let programador_1 = "Flávia";
let programador_2 = "flávia";

if ( programador_1 == programador_2 ){
    console.log("iguais");
} else {
    console.log("diferentes");
}*/

let email_acesso = "dougurasu104@hotmail.com";

let email_cadastrado = "DOUGURASU104@hotmail.com";

if(email_acesso.toLocaleLowerCase() == email_cadastrado.toLocaleLowerCase()){
    console.log("Foi enviado um link de atiavação para seu e-mail.")
}else{
    console.log("Esse e-mail não existe em nossa base dados.")
}    

//Apesar das duas variáveis terem valores iguais, são consideradas diferentes em javaScript.