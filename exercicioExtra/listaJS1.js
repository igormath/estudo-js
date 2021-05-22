/* Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função e com ponto de exclamação "!" no final. */

function greeting(saudacao){
    return console.log(`Olá, ${saudacao}!`);
}

greeting("Célio");
greeting("Rosemery");

/* Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias. */

function daysAge(idade){
    const idadeEmDias = idade * 365;
    return console.log(idadeEmDias);
}

daysAge(25);
daysAge(70);

/* Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês. */

function calcularSalario(horas, salarioHora){
    const salario = horas * salarioHora;
    return console.log(`Salário igual a: R$ ${salario}`);
}

calcularSalario(150, 40.5);