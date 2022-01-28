/*let cursos_idiomas = [
    { nome: "Inglês", preco: 2500, carga_horaria: 160 },
    { nome: "Espanhol", preco: 1500, carga_horaria: 110 },
    { nome: "Francês", preco: 3600, carga_horaria: 200 },
    { nome: "Chinês", preco: 5500, carga_horaria: 400 },
    { nome: "Alemão", preco: 3800, carga_horaria: 230 }
];

for(let curso of cursos_idiomas) {


    let nome_curso = curso.nome;
    let preco_curso = curso.preco;
    let carga_horaria_curso = curso.carga_horaria;


    let preco_hora_curso = preco_curso /  carga_horaria_curso;

    console.log("Nome do curso: " + nome_curso);
    console.log("Carga horária do curso: " + carga_horaria_curso + " horas");
    console.log("Preço do curso: R$" + preco_curso + ",00");


if ( preco_hora_curso >= 15) {
    console.log("Hora/aula superior ou igual a R$15,00");
} else {
    console.log("Hora/aula inferior a R$15,00");
}

console.log("\n");

} */

let disciplinas = [
    { id: 1, nome: "português", carga_horaria: 250 },
    { id: 2, nome: "matemática", carga_horaria: 220 },
    { id: 3, nome: "história", carga_horaria: 150 },
    { id: 4, nome: "geografia", carga_horaria: 150 },
    { id: 5, nome: "inglês", carga_horaria: 70 }
];

for (let disciplina of disciplinas){

    let id_disciplina = disciplina.id;
    let nome_disciplina = disciplina.nome;
    let carga_horaria_disciplina = disciplina.carga_horaria;

    console.log("Id da disciplina: "+ id_disciplina);
    console.log("Nome da disciplina: "+ nome_disciplina
 );
    console.log("Carga horária da disciplina: "+ carga_horaria_disciplina);

    console.log("\n");

}
