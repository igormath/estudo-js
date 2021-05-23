/* Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro. */

function filtrarNumeros(vetor){
    const arrayFinal = [];

    for(let i = 0; i < vetor.length; i++){
        //Ou: for(let item of vetor)
        if (typeof vetor[i] === "number"){
            arrayFinal.push(vetor[i]);
        }
    }
    console.log(arrayFinal);

}

filtrarNumeros(["Javascript", 1, "3", "Web", 20]);

/* Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento */