/* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado. */

function repetir(elemento, vezes){
    let vetor = [];
    for (let i = 0; i < vezes; i++){
        vetor.push(elemento);
    }
    console.log(vetor);
}

repetir("Igor", 3);
repetir(4, 5);

/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro. */

function simboloMais(numeroVezes){
    let resultado = " ";
    
    for (let i = 0; i < numeroVezes; i++){
        resultado += "+"; // ou resultado = resultado + "+";
    }
    console.log(resultado);
}

simboloMais(3);