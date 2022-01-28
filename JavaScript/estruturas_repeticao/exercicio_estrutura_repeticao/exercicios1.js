/*let produtos_array = [
    { id: 1, nome: "mouse", preco: 50 },
    { id: 2, nome: "teclado", preco: 90 },
    { id: 3, nome: "monitor", preco: 350 },
    { id: 4, nome: "nobreak", preco: 600 },
];

let percentual_desconto = 10;

for ( let produto of produtos_array ) {

    let nome = produto[nome];
    let preco = produto[preco];

    let valor_desconto = (preco * percentual_desconto) / 100;
    let novo_preco = preco - valor_desconto;

    console.log("Novo valor do produto " + nome + ": R$" + novo_preco + ",00");

}

let chuvas_de_meteoros = [
    { nome: 'Alfa Centaurídeos',            declinacao: -59,  intensidade: 'Média'},
    { nome: 'Gama Normídeos',               declinacao: -50,  intensidade: 'Média'},
    { nome: 'Pi Pupídeos',                  declinacao: -45,  intensidade: 'Irregular'},
    { nome: 'Líridas',                      declinacao:  34,  intensidade: 'Forte com meteoros rápidos e persistentes'},
    { nome: 'Eta Aquáridas',                declinacao:  -1,  intensidade: 'Forte com meteoros muito rápidos e de grande comprimento'},
    { nome: 'Eta Líridas',                  declinacao:  44,  intensidade: 'Fraca'},
    { nome: 'Bootídeos de Junho',           declinacao:  48,  intensidade: 'Irregular'},
    { nome: 'Alfa Capricornídeos',          declinacao: -10,  intensidade: 'Fraca'},
    { nome: 'Delta Aquáridas do Sul',       declinacao: -16,  intensidade: 'Forte com meteoros lentos e rasto comprido'},
    { nome: 'Piscis Austrinídeos',          declinacao: -30,  intensidade: 'Média'},
    { nome: 'Perseidas',                    declinacao:  58,  intensidade: 'Forte e muito rápidas'},
    { nome: 'Capa Cignídeos',               declinacao:  59,  intensidade: 'Fraca com velocidades médias e brilhantes'},
    { nome: 'Alfa Aurigídeos',              declinacao:  39,  intensidade: 'Média com meteoros muito rápidos e persistentes'},
    { nome: 'Perseidas de Setembro',        declinacao:  40,  intensidade: 'Média com meteoros rápidos e persistentes'},
    { nome: 'Táuridas do Sul',              declinacao:   9,  intensidade: 'Fraca'},
    { nome: 'Delta Aurigídeos',             declinacao:  44,  intensidade: 'Fraca'},
    { nome: 'Oriónidas',                    declinacao:  16,  intensidade: 'Forte com meteoros rápidos e persistentes'},
    { nome: 'Dracónidas',                   declinacao:  54,  intensidade: 'Irregular'},
    { nome: 'Épsilon Geminídeos',           declinacao:  27,  intensidade: 'Fraca'},
    { nome: 'Leo Minorídeos',               declinacao:  37,  intensidade: 'Fraca'},
    { nome: 'Táuridas do Norte',            declinacao:  22,  intensidade: 'Média com meteoros muito lentos mas brilhantes'},
    { nome: 'Leónidas',                     declinacao:  22,  intensidade: 'Irregular com meteoros muito rápidos, atingindo um pico de 33 em 33 anos'},
    { nome: 'Alfa Monocerotídeos',          declinacao:   1,  intensidade: 'Irregular'},
    { nome: 'Monocerotídeos',               declinacao:   8,  intensidade: 'Fraca'},
    { nome: 'Fenícidas',                    declinacao: -53,  intensidade: 'Irregular'},
    { nome: 'Quadrântidas',                 declinacao:  49,  intensidade: 'Forte com velocidades médias'},
    { nome: 'Pupidas-Velidas',              declinacao: -45,  intensidade: 'Média'},
    { nome: 'Sigma Hidrídeos',              declinacao:   2,  intensidade: 'Fraca'},
    { nome: 'Leo Minorídeos de Dezembro',   declinacao:  30,  intensidade: 'Média'},
    { nome: 'Gemínidas',                    declinacao:  33,  intensidade: 'Forte com velocidades médias, meteoros brancos e numerosos'},
    { nome: 'Coma Berenicídeos',            declinacao:  18,  intensidade: 'Fraca'},
    { nome: 'Úrsidas',                      declinacao:  76,  intensidade: 'Média'},
];


for
( let chuva in chuvas_de_meteoros ) {

    
    console.log(chuvas_de_meteoros[chuva].nome);

    
    console.log(chuvas_de_meteoros[chuva].declinacao);

    console.log("\n");
}

let alunos = [
    {id: 1, nome: "Bruna", media: 8},
    {id: 2, nome: "Laura", media: 7},
    {id: 3, nome: "José", media: 5},
    {id: 4, nome: "Guilherme", media: 4},
    {id: 5, nome: "Rafael", media: 10},
];

let contador = 0;

while ( contador < alunos.length ) {

    let aluno = alunos[contador];

    contador++;

    if ( aluno.media < 6 ) {
        continue;
    }

    console.log("Id: " + aluno.id);
    console.log("Nome: " + aluno.nome);
    console.log("Média: " + aluno.media);
    console.log("\n");

}

let alunos_array = [
    { id: 1, nome: "Rafael",  media: 5 },
    { id: 2, nome: "Alberto", media: 6 },
    { id: 3, nome: "Carla",   media: 6 },
    { id: 4, nome: "Ana",     media: 7 },
    { id: 5, nome: "Renato",  media: 8 }
];

for ( let aluno of alunos_array ) {

    let nome_aluno = aluno.nome;
    let media = aluno.media;

    let aprovado;

    ( media >= 6 ) ? aprovado = true : aprovado = false;

    if ( aprovado == true ) {

        console.log("Aluno(a) " + nome_aluno + " aprovado(a)");

    }

}

let noticias = [
    { id: 1, titulo: "Nubank levanta US$ 400 milhões em nova rodada de investimento", status: 1 },
    { id: 2, titulo: "Procon-SP notifica Serasa pedindo explicações sobre vazamento de dados", status: 1 },
    { id: 3, titulo: "Login no WhatsApp Web terá autenticação por biometria", status: 0 },
    { id: 4, titulo: "Lucro da Microsoft cresce 32% no 4º trimestre de 2020", status: 1 },
];

for ( let noticia of noticias ) {

    let id_noticia = noticia.id;
    let nome_noticia = noticia.titulo;
    let status_noticia = noticia.status;

    if ( status_noticia == 0 ) {
        continue;
    }

    console.log("Id da notícia: " + id_noticia);
    console.log("Nome da notícia: " + nome_noticia);
    console.log("Status da notícia: " + status_noticia);

    console.log("\n");

}

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

for(let contador = 0; contador < meses.lenght; contador++)
 {

    console.log(meses[contador]);

    if ( meses == "Junho" ) {
        continue;
    }

};


let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false}
];

let contador = 0;
let encontrouHabilitado = false;

while ( contador < funcionarios.length ) {

    let funcionario = funcionarios[contador];

    if(funcionario.habilitado == true ){
        console.log("Funcionário habilitado encontrado: " + funcionario.nome);
        encontrouHabilitado = true;
        break;
    }

    contador++;
}

if (!encontrouHabilitado) {
   
    console.log("Nenhum funcionário habilitado encontrado");

}

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

for(let contador in meses)
 {

    console.log(meses[contador]);

    if ( meses[contador] == "Junho" ) {
        break;
    }

}
*/
let produtos
 = [
    { id: 1, nome: "pizza", preco: 50 },
    { id: 2, nome: "macarronada", preco: 25 },
    { id: 3, nome: "lasanha", preco: 45 },
    { id: 4, nome: "nhoque", preco: 30 }
];

let desconto = 5;

for (let contador = 0; contador < produtos.length; contador++)
 {

    let produto = produtos[contador];

    
for (let propriedade in produto){

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