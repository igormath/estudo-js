/* Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês. */

let meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

function nomeDoMes(posicao){
    posicao--;
    return console.log(meses[posicao]);

}

nomeDoMes(1);
nomeDoMes(8);

/* Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. */

function maiorOuIgual(num1, num2){
    if (num1 === num2 | num1 > num2){
        console.log(true);

    } else{
        console.log(false);

    }

}

maiorOuIgual(0,0);
maiorOuIgual(0,"0");
maiorOuIgual(5,1);

/* Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...". */

function inverso(entrada){
    if (typeof entrada == "boolean"){
        console.log(!entrada);

    } else if (typeof entrada == "number"){
        console.log(entrada * -1);

    } else{
        console.log("booleano ou número esperados, mas o parâmetro é do tipo ", typeof(entrada))

    }
}

inverso(true);
inverso("6");
inverso(-2000);
inverso("programação");