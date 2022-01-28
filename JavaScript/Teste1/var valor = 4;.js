var valor = 4;
console.log(typeof valor);
// Vai imprimir 'number'

var sobrenome = "Silva";
console.log(typeof sobrenome);
// Vai imprimir 'string'

var ligado = true;
console.log(typeof ligado);
// Vai imprimir 'boolean'

var estados = ["Rio de Janeiro", "São Paulo", "Bahia"];
console.log(estados);

//Por exemplo, para modificar a linguagem "JAVA" para "C" no array linguagens utilizamos o Código 7.

var linguagens = ["JavaScript", "PHP", "JAVA", "C#"];
var linguagem = "C";
linguagens[2] = linguagem;
/*Código 7. Alterando o valor de uma posição no array
O que podemos fazer assim também, escrevendo menos como vemos no Código 8 e na Figura 3.*/

var linguagens = ["JavaScript", "PHP", "JAVA", "C#"];
linguagens[2] = "C";