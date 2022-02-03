import entradaDados from 'readline-sync';

let salario_minimo = [
    {ano: 2010, salario: 510},
    {ano: 2011, salario: 545},
    {ano: 2012, salario: 622},
    {ano: 2013, salario: 678},
    {ano: 2014, salario: 724},
    {ano: 2015, salario: 788},
    {ano: 2016, salario: 880},
    {ano: 2017, salario: 937},
    {ano: 2018, salario: 954},
    {ano: 2019, salario: 998},
    {ano: 2020, salario: 1045}
]

let inflacao_ipca = [
    {ano: 2010, ipca: 8.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52},
    
    
];

console.log("Escolha uma das alternativas; \n")

console.log("1 - Listar os salários mínimos de 2010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log("3 -Comparação entre o percentual de aumento salarial e o IPCA")


let escolha = entradaDados.question("Digite sua escolha: ");

escolha =  Number(escolha);

let ano_label = "Ano: ";
let salario_label = "Salário mínimo: ";
let crescimento_label = "Crescimento Salarial: ";
let ipca_label = "Inflação IPCA: ";

ano_label = ano_label.padEnd(30, '.');
salario_label = salario_label.padEnd(30, '.');
crescimento_label = crescimento_label.padEnd(30, '.');
ipca_label = ipca_label.padEnd(30, '.');

switch(escolha) {
    
    case 1:
        for(let i = 0; i <= salario_minimo.length-1; i++){
            
            let ano = salario_minimo[i].ano;
            let ipca_salario = salario_minimo[i].salario;

            let salario_formatado = ipca_salario.toFixed(2).replace(".",",");

            console.log("\n");
            console.log(ano_label+ano);
            console.log(salario_label+"R$ "+salario_formatado);
        } 
        break;

    case 2: 
        for(let i = 0; i <= inflacao_ipca.length-1; i++){

            let ano = inflacao_ipca[i].ano;
            let ipca = inflacao_ipca[i].ipca;

            let ipca_formatado = ipca.toFixed(2).replace(".", ",");

            console.log("\n");
            console.log(ano_label+ano);
            console.log(ipca_label+ipca_formatado+"%");
        }
        break;
        case 3:
            for(let i = 0; i <= inflacao_ipca.length-1; i++){

                let ano = salario_minimo[i].ano;
                let salario = salario_minimo[i].salario;
                let percentual_crescimento;
                let crescimento_formatado;

                if(i > 0){
                    let salario_anterior = salario_minimo[i-1].salario;
                    let diferenca = salario - salario_anterior;

                    percentual_crescimento = (diferenca / salario_anterior) * 100;
                    crescimento_formatado = percentual_crescimento.toFixed(2).replace(".",",")+"%";

                }else{
                    crescimento_formatado = "-";
                }

                let ipca = inflacao_ipca[i].ipca;

                let salario_formatado = salario.toFixed(2).replace(".",",");
                let ipca_formatado = ipca.toFixed(2).replace(".",",");

                console.log("\n");
                console.log(ano_label+ano);
                console.log(salario_label+"R$ "+salario_formatado);
                console.log(crescimento_label+crescimento_formatado);
                console.log(ipca_label+ipca_formatado+"%");

            }
            break;
        default:
            console.log("Opção Inválida.");
            break;
};



