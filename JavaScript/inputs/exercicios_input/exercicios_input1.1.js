/*import entradaDados from 'readline-sync';

let pessoa = [
    
{nome: "Gabriel", idade: 27},
    
{nome: "Julia", idade: 22},
    
{nome: "Marcela", idade: 24}

];

let indice = entradaDados.question("Digite o índice do objeto desejado: ");

console.log("Nome: "+pessoa[1].nome);
console.log("Idade: "+pessoa[0].idade);

let indice_musica = 4;

let playlist = [
    {artista: 'Scandal', musica: 'Sisters'},
    {artista: 'Silent Siren', musica: 'Alarm'},
    {artista: 'The Peggies', musica: 'Love trip'},
    {artista: 'LiSA', musica: 'Rally go Round'}
]

console.log("Artista:"+playlist[indice_musica].artista);
console.log("Música:"+playlist[indice_musica].musica);*/

import readlineSync from 'readline-sync'
;

let 
colecao_empresas
 = [
    {id: 1, nome: "Microsoft"},
    {id: 2, nome: "Apple"},
    {id: 3, nome: "Alphabet"},
    {id: 4, nome: "Facebook"}
];

console.log("\n1 - Microsoft")
console.log("2 - Apple")
console.log("3 - Alphabet")
console.log("4 - Facebook")

let empresa = readlineSync.question("\nDigite o id da empresa que deseja: ");

console.log("\nVocê escolheu a empresa: "+colecao_empresas[empresa-1].nome);

