/*Em alguns casos pode ser necessário retornar 
apenas parte de uma string. Para isso o JavaScript fornece 
recursos nativos como o substring() e substr().*/

//O Código 1 apresenta o método substr().

let frase = "Estou aprendendo JavaScript na DevMedia";

let resultado = frase.substr(17, 10);

console.log(resultado); // JavaScript


//O Código 2 apresenta o método substring().

let frase1 = "Eu sou programador JavaScript";

let resultado1 = frase.substring(7, 18);

console.log(resultado); // programador


//No Código 3 apresentamos a codificação vista na Figura 1.
/* A subsrtring extraída da variável "frase" começa na posição 6 e tem 12 caracteres, 
o que retorna o termo "especialista".*/

let frase2 = "Ana é especialista em JavaScript";

let substring_1 = frase.substr(6, 12);

console.log(substring_1); // especialista


//No Código 4 vemos a mesma codificação apresentada na Figura 2.
/*A substring extraída da variável frase começa 
na posição 6 e termina na posição 12, o que retorna o termo "especi" */

let frase3 = "Ana é especialista em JavaScript";

let substring_2 = frase.substring(6, 12);

console.log(substring_2); // especi

//No Código 5 vemos a codificação apresentada na Figura 5.

let conteudo = "Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência de caracteres de uma string.";

let tamanho = conteudo.length;
let resumo = "";

if( tamanho > 100 ){

    resumo = conteudo.substr(0, 97);
    resumo += "...";

} else {

    resumo = conteudo;

}

console.log(resumo);