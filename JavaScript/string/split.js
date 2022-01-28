/**Na programação é comum “quebrar” strings em partes menores e usar 
 * essas substrings para algum fim. 
 * No JavaScript temos um recurso nativo que cuida dessa tarefa: split() */

 let paises_string = "Brasil Espanha Canadá Irlanda Suíça";

 let paises = paises_string.split(" ");
 
 console.log(paises); // (5) ["Brasil", "Espanha", "Canadá", "Irlanda", "Suíça"]

 let cores_string = "vermelho,azul,branco,cinza,roxo";

let cores = cores_string.split(",");

console.log(cores); // (5) ["vermelho", "azul", "branco", "cinza", "roxo"]



let nome_completo = "Ana Mendes da Silva";

let array = nome_completo.split(" ");

let nome = array[0];

console.log("Olá " + nome + ", seja bem vindo(a)"); // Olá Ana, seja bem vindo(a)