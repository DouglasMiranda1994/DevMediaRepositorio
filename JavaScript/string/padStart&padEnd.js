/*Em alguns casos pode ser necessário fazer o preenchimento de uma 
string com um determinado caractere até que essa string atinja um certo tamanho. */

let label_aluno = "Aluno";
let valor_aluno = "Edmilson";

let label_grau = "Grau de escolaridade"
let valor_grau = "Ensino Médio Completo";

console.log(label_aluno.padStart(20, " ") + ": " + valor_aluno);
console.log(label_grau.padStart(20, " ") + ": " + valor_grau);


let label = "Email: ";
let email = "contato@email.com";

console.log( label.padEnd(20, ' ') + email );

let label_nome = "Nome:";
let valor_nome = "Jorge Luiz";

let label_profissao = "Profissão:";
let valor_profissao = "Professor";

let label_endereco = "Endereço:";
let valor_endereco = "Rua Cruzeiro do Sul";

console.log( label_nome.padEnd(25, '.') + valor_nome );
console.log( label_profissao.padEnd(25, '.') + valor_profissao );
console.log( label_endereco.padEnd(25, '.') + valor_endereco );

// Nome:....................Jorge Luiz
// Profissão:...............Professor
// Endereço:................Rua Cruzeiro do Sul