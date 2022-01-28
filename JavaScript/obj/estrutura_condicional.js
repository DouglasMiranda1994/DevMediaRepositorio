//Código 1. Exemplo de if convencional
var status = "";
  var nota = 7

if ( nota > 7 ) {
status = "Aprovado";
}
else {
 status = "Reprovado";
}
//Código 2. Exemplo de if ternário
var status = nota > 7 ? "Aprovado" : "Reprovado";

//Código 3. Exemplo de if ternário com múltiplas condições
var mes = 11 || 12
var mensagem = (mes == 11 || mes == 12) ? "Promoção" : "Preço normal"; 


var dia_semana1 = 5

var status_loja = (dia_semana1 == 0 || dia_semana1 == 6) ? "Funcionamos apenas de seg a sexta" : "Loja aberta";

//console.log(status_loja)

//Código 1. Exemplo de if simples
var aprovado = true;

if (aprovado) {
    //console.log("Parabéns");
}

//Código 2. Exemplo de curto-circuito
var aprovado = true;

//aprovado && console.log("Parabéns");


//Declaração da constante nome
const nome = 'Camila';

//Aqui é verificado se o nome possui ao menos um caractere
//Retorna true se possuir e false caso contrário
const nomeValido = nome.length > 0 && true;

//Imprime o nome no console se for diferente de vazio
//nomeValido && console.log(nome);

//Código 1. Exemplo switch
var produto = "Smartphone";

switch(produto)
{
    case "Smartphone":
        console.log("Produto: Smartphone");
        break;
    case "TV":
        console.log("Produto: TV");
        break;
    default:
        console.log("Produto inválido");
        break;
}


//Código 2. Exemplo switch múltiplos cases
var produto = "Smartphone";

switch(produto)
{
    case "Smartphone":
    case "Celular":
    case "Telefone":
        console.log("Produto: Smartphone");
        break;
    case "TV":
        console.log("Produto: TV");
        break;
    default:
        console.log("Produto inválido");
        break;
}

var mes = "Janeiro";

switch(mes)
{
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("Verão");
        break;
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("Outono");
        break;
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("Inverno");
        break;
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("Primavera");
        break;
    default:
        console.log("Mês inválido");
        break;
}
