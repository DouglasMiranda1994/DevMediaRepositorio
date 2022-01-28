/*let contador = 0;

do {

    console.log(contador);
    contador++;

} while ( contador < 5 );

let contador1 = 0;

do {

    console.log(contador1);
    contador1++;

} while ( contador1 < 0 );

// 0*/

let contador = 0;

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

do {

    console.log(meses[contador]);
    contador++;

} while ( contador < meses.length );

let contador = 0;

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

do {

    console.log(meses[contador]);

    contador++; // sem o incremento do contador, o mês de janeiro seria impresso sem parar.

} while ( contador < meses.length );


let valor_mensalidade = 100;
let taxa_multa = 0.02; // 2%
let total_dias = 10;
let contador = 1;

do {
    let dias_atraso = contador[dias_atraso];

    let valor_multa = valor_mensalidade * taxa_multa * dias_atraso;

   
    let novo_valor_mensalidade = valor_mensalidade + valor_multa;

    console.log("Dia(s) de atraso: " + dias_atraso + " - mensalidade atualizada: R$" + novo_valor_mensalidade + ",00");

    contador++;

} while( contador < total_dias );