/* Procurar uma substring dentro de uma string é uma tarefa comum na rotina do desenvolvedor. 
E para isso há um recurso nativo que faz esse trabalho. indexOf()*/

let frase = "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.";
let posicao = frase.indexOf("sonho");

console.log(posicao); // 14

let frase1 = "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.";
let posicao1 = frase.indexOf("esperança");

console.log(posicao1); // -1

/*Quando o método indexOf encontra a substring dentro de uma string, 
ele retorna a posição onde a substring foi encontrada. 
Caso não encontre ele retorna o valor -1. */


let expressao_proibida = "passaporte falso";

let comentario = "   venda de PASSAPORTE falso   ";

comentario = comentario.trim();
comentario = comentario.toLowerCase();

if ( comentario.indexOf(expressao_proibida) > -1 ){

    console.log("No seu comentário há palavras proibidas. Atualize seu comentário e envie novamente");

} else {

    console.log("Seu comentário foi aprovado");

}

console.log(comentario); // venda de passaporte falso