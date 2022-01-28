import entradaDados from 'readline-sync';

console.log("Calculadora de área do triângulo \n");

let base = entradaDados.question("Insira a base: ");

let altura = entradaDados.question("Insira a altura: ");

let area = (base * altura) / 2;

console.log("A área do triângulo é: "+area);
