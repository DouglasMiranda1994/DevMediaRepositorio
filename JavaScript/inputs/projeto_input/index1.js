import entradaDados from 'readline-sync';

console.log("Calculadora de soma entre x e y: \n")

let x = entradaDados.question("Informe o valor de x: ")
let y = entradaDados.question("Informe o valor de y: ")

let soma = Number(x) + Number(y);

console.log(x+" + "+y+" = "+soma);

/*O uso da função Number() deve ser utilizado sempre que formos utilizar valores numéricos do input em cálculos matemáticos. Por exemplo:

let x = entradaDados.question("Informe o valor de x: ")
let y = entradaDados.question("Informe o valor de y: ")

let soma = Number(x) + Number(y);*/ 

// Neste tipo de situação usar o Number() apenas quando for somar, ou seja, subtrações multiplicações e divisões se convertem automaticamente.