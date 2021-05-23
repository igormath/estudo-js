/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array */

//utilizar array lenght array push

function primeiroEUltimo(vetor){
    let total = vetor.length - 1;
    novovetor = [vetor[0], vetor[total]];
    return novovetor;
}

console.log(primeiroEUltimo([1, "I", "Ro", "Cé", "Jo"]));