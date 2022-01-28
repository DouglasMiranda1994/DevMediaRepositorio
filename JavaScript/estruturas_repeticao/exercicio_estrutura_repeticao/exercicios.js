/*let carro = { nome: "Argo", marca: "Fiat", preco: 50000, ano: 2020 };

let percentual_desconto = 5;

for ( let propriedade in carro ) {

    if ( propriedade == "preco" ) {

        let preco = propriedade;

        let desconto = ( carro[preco] * percentual_desconto ) / 100;

        let novo_preco = carro[preco] - desconto;

        console.log("novo preço: R$" + novo_preco + ",00");

    } else {

        console.log(propriedade + ": " + carro[propriedade]);

    }

}

let contador = 10;

do{

    console.log(contador) ;
    contador --;

} 
while (contador > 0);

let valor_mensalidade = 100;
let taxa_multa = 0.02; // 2%
let total_dias = 10;
let contador = 1;

do {

    let dias_atraso = contador;

    let valor_multa = valor_mensalidade * taxa_multa * dias_atraso;

    let novo_valor_mensalidade = valor_mensalidade + valor_multa;

    console.log("Dia(s) de atraso: " + dias_atraso + " - mensalidade atualizada: R$" + novo_valor_mensalidade + ",00");

} while( contador < total_dias );

let alunos = ["Carlos", "Pablo", "Juliana", "Ingrid"];

let total_alunos = alunos.length;

for ( let contador = 0; contador < total_alunos; contador++ ) {

    console.log(alunos[contador]);
}

let categorias =[
    {id: 1, nome: "Ficção científica"},
    {id: 2, nome: "Aventura"},
    {id: 3, nome: "Comédia"},
    {id: 4, nome: "Terror"},
    {id: 5, nome: "Drama"}
];


for (let categoria of categorias){

    console.log(categoria.id);
    console.log(categoria.nome);

    console.log("\n");
}

let numero = 3
let contador = 0    

console.log("Tabuada de multiplicação - Nº " + numero);

while(contador <= 10) {
    let resultado = contador * numero;
    console.log(numero + " x " + contador + " = " + resultado );

    contador++;
}*

let aluno = { nome: "Marcos", email: "marcos@email.com", idade: 25 };

for (let dados in aluno){
   
console.log(aluno[dados]);
}

var idade = 18;

var resultado = " ";

var resultado = idade >= 16 ? "já pode votar" : "ainda não pode votar"; 

let produtos = [
    { id: 1, nome: "pizza", preco: 50 },
    { id: 2, nome: "macarronada", preco: 25 },
    { id: 3, nome: "lasanha", preco: 45 },
    { id: 4, nome: "nhoque", preco: 30 }
];

let desconto = 5;

for (contador = 0; contador < produtos.length; contador++)
 {

    let produto = produtos[contador];

    
for (let propriedade in produtos)
 {

        if ( propriedade == "preco" ) {

            let preco = propriedade;

            let novo_preco = produto[preco] - desconto;

            console.log("preço atualizado: R$" + novo_preco + ",00");

        } else {

            console.log(propriedade + ": " + produto[propriedade]);
        }

    }

    console.log("\n");
}


let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

for( let contador = 0; contador < meses.length; contador++ ) {

    console.log(meses[contador]);

    if ( meses[contador] == "Abril" ) {
        break;
    }

}

let alunos = [
    {id: 1, nome: "Bruna", media: 8},
    {id: 2, nome: "Laura", media: 7},
    {id: 3, nome: "José", media: 5},
    {id: 4, nome: "Guilherme", media: 4},
    {id: 5, nome: "Rafael", media: 10}
];

for ( let contador = 0; contador < alunos.length; contador++ ) {

    let aluno = alunos[contador];

    if ( aluno.media < 6 ) {
        continue;
    }

    console.log("Id: " + aluno.id);
    console.log("Nome: " + aluno.nome);
    console.log("Média: " + aluno.media);
    console.log("\n");

}*

let produtos = [
    { id: 1, nome: "pizza", preco: 50 },
    { id: 2, nome: "macarronada", preco: 25 },
    { id: 3, nome: "lasanha", preco: 45 },
    { id: 4, nome: "nhoque", preco: 30 }
];

let desconto = 5;

for (contador = 0; contador <= produtos.length; contador++)
 {

    let produto = produtos[contador];

    
for(let propriedade in produto)
 {

        if ( propriedade == "preco" ) {

            let preco = propriedade;

            let novo_preco = produto[preco] - desconto;

            console.log("preço atualizado: R$" + novo_preco + ",00");

        } else {

            console.log(propriedade + ": " + produto[propriedade]);
        }

    }

    console.log("\n");
}
/*
let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

let contador = 0;

do {

    
    console.log(meses[contador]);

    
    contador++;

} while ( contador < meses.length); 

contador = 10;

do
{
    console.log(contador);
    contador--;

} while(contador > 0);*/

let aluno = { nome: "Marcos", email: "marcos@email.com", idade: 25 };

for(let dados in aluno)
 {
    console.log(
aluno[dados]
);
}