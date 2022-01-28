var aluno_academia = {
    id: 10,
    nome: "Douglas Miranda",
    altura: 1.60,
    peso: 58
}

var nome_aluno = aluno_academia.nome;
var altura_aluno = aluno_academia.altura;
var peso_aluno = aluno_academia.peso;

var imc_aluno = (peso_aluno / (altura_aluno * altura_aluno)).toFixed(2)// toFixed define a quantidade de casas decimais que o número terá.

console.log("O IMC do aluno é de: " + imc_aluno);

if ( imc_aluno < 18.5 ) {
    console.log("O aluno " + nome_aluno + " está abaixo do peso");
} else if( imc_aluno >= 18.5 && imc_aluno <= 24.99) {
    console.log("O aluno " + nome_aluno + " está com o peso normal");
} else {
    console.log("O aluno " + nome_aluno + " está acima do peso");
}











/*var usuario = {
    id: 2,
    nome: "Rafael Nogueira Lemos",
    idade: 17
};

var atendeAClassificacaoEtaria = usuario.idade >= 18

if ( atendeAClassificacaoEtaria === true ) {

    console.log("O usuário ainda pode assistir o conteúdo");

} else {

    console.log("O usuário ainda não pode assistir o conteúdo");

}*/