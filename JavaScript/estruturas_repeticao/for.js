//Estrutura de repetição "for"
/*for ( let contador = 0; contador < 10; contador++ ){

    console.log("O número é: " + contador);

}

let valor_produto = 500;

for ( let contador = 1; contador <= 5; contador++ )
{
    let valor_parcela = valor_produto / contador;
    console.log("Nº de parcelas: " + contador + " - Valor da parcela: R$" + valor_parcela.toFixed(2));
}

let valor_produto = 500;
let total_parcelas = 4; // valor informado pelo usuário

for ( let contador = 1; contador <= total_parcelas; contador++ )
{
    let valor_parcela = valor_produto / contador;
    console.log("Nº de parcelas: " + contador + " - Valor da parcela: R$" + valor_parcela.toFixed(2));
}


let numero = 3;
let contador = 0;

console.log("Tabuada de multiplicação - Nº " + numero);



let multiplicador = 8;

console.log("Tabuada de multiplicação do Nº " + multiplicador);

for ( let contador = 0; contador <= 10; contador++ ) {

    let resultado = multiplicador * contador;

    console.log( multiplicador + " x " + contador + " = " + resultado );

} */

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

for (let contador = 0; contador < meses.length; contador++) {

    console.log(meses[contador])
}

let notas_trimestrais = [7, 8, 6, 5];

let soma_notas = 0;
const quantidade_notas = 4;

for ( let contador = 0; contador < quantidade_notas; contador++ ) {

    soma_notas = soma_notas + notas_trimestrais[contador];

}

let media = soma_notas / quantidade_notas;

if ( media >= 6 ) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// Aprovado