var colecao_produtos = [
    { id: 1, nome: "Cooktop",           preco: 380 },
    { id: 2, nome: "Geladeira",         preco: 1350 },
    { id: 3, nome: "Notebook",          preco: 2500 },
    { id: 4, nome: "Liquidificador",    preco: 100 }
];

//console.log(colecao_produtos.length)
//console.log(colecao_produtos[3].nome)

//colecao_produtos[3].nome = "barata";
//console.log(colecao_produtos[3].nome)

var generos_musicais = [
    "samba",
    "funk",
    "rock",
    "pop",
    "hip hop"
];

//console.log(generos_musicais[4])
generos_musicais[1] = "Rap";

//console.log(generos_musicais[1])

var colecao_disciplinas = [
    { id: 1, nome: "Português",     carga_horaria: 240 }, // índice 0
    { id: 2, nome: "Matemática",    carga_horaria: 220 }, // índice 1
    { id: 3, nome: "História",      carga_horaria: 160 }, // índice 2
    { id: 4, nome: "Geografia",     carga_horaria: 140 }, // índice 3
    { id: 5, nome: "Química",       carga_horaria: 160 }, // índice 4
    { id: 6, nome: "Física",        carga_horaria: 150 }, // índice 5
    { id: 7, nome: "Inglês",        carga_horaria: 120 }  // índice 6
];




//console.log(colecao_disciplinas[5].id);
//console.log(colecao_disciplinas[1].carga_horaria);

var colecao_livros = [

    { id: 1, nome: "Dom Quixote",           numero_paginas: 863 },
    { id: 2, nome: "O Senhor dos Anéis",    numero_paginas: 1200 },
    { id: 3, nome: "As Crônicas de Nárnia", numero_paginas: 752 },
    { id: 4, nome: "O Caçador de Pipas",    numero_paginas: 371 },
    { id: 5, nome: "A Montanha Mágica",     numero_paginas: 848 }
]
;

var total_livros = colecao_livros.length;

var primeiro_livro = colecao_livros[0];
var ultimo_livro = colecao_livros[4];

//console.log( "O total de livros é: " + total_livros );
//console.log( "O nome do primeiro livro da coleção é: " + primeiro_livro.nome );
//console.log( "O nome do último livro da coleção é: " + ultimo_livro.nome );

// Imprima false
//console.log( 2000 <= 1000 && 5 <= 5 );
    
    // Imprima true
    //console.log( true || false && false );
    
    // Imprima false
    //console.log( 20 == '20' && false );
    
    // Imprima true
    //console.log( false || true );


    //console.log(1 + null);

    //console.log(null + false);

    //console.log(true + false );

    var numero_1 = 5;
    var numero_2 = 3;
    var numero_3 = 10;

    var resultado = numero_3 * (numero_1 - numero_2);

    //console.log(resultado++);

    var programadores = [
        { nome: "Ramon",    linguagem: "PHP" },
        { nome: "Mateus",   linguagem: "Python" },
        { nome: "Régis",    linguagem: "JavaScript" },
        { nome: "André",    linguagem: "Java" },
        { nome: "Josué",    linguagem: "C#" }
    ];


    //console.log(programadores[4].linguagem)
    //console.log(programadores[2].nome)

    var programador = {

        nome: "Lucas Simões",
        linguagem: "Java",
    };
    
    var nome = programador.nome;
    var linguagem = programador.linguagem;
    
    //console.log( nome + " domina a linguagem " + linguagem );

var notas_aluno = [
        7, 6, 8, 5
    ];

var total_notas = notas_aluno.length;

var soma_notas =  notas_aluno[0] + notas_aluno[1] + notas_aluno[2] + notas_aluno[3];

var media_aluno = soma_notas / total_notas;

//console.log("Média do aluno: " + media_aluno);

var colecao_animes = [
    { id: 1, titulo: "Naruto",      episodios: 673 },
    { id: 2, titulo: "Bleach",      episodios: 366 },
    { id: 3, titulo: "One Piece",   episodios: 931 }
];

var primeiro_anime = colecao_animes[0]
    ;

var id_anime = primeiro_anime.id;
var titulo_anime = primeiro_anime.titulo;
var total_episodios_anime = primeiro_anime.episodios;

//console.log("Id do anime: " + id_anime);
//console.log("Título do anime: " + titulo_anime);
//console.log("Total de episódios do anime: " + total_episodios_anime);

var jogo ={
  
    titulo: 'Metroit',
    valor: 350,
    plataforma: 'Wii'
}

console.log('Jogo ' + jogo.titulo + ' custa R$' + jogo.valor);
