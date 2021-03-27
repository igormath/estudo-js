let listinha = [0 , 1, 2, 3, 2, 1, 0];

console.log(listinha.indexOf(1)); //    Exibe a posição do termo indicado.
console.log(listinha.lastIndexOf(1)); //    Exibe a última posição do termo indicado.

console.log(listinha.slice(2, 7)); //   Cria um novo array delimitado pela posição passada como parâmetro na função .slice (O SLICE PARA UM NÚMERO ANTES DO FIM DEFINIDO!)
console.log(listinha.slice(3));

console.log(listinha.slice(-3)); // Imprime os números de trás pra frente.
console.log(listinha.slice(2, -1)); //  Imprime os números selecionados exceto o número definido no último parâmetro.

listinha.forEach(numeros => {
    console.log(`Número atual: ${numeros}`);
}) // For "específico" para arrays. pode ser usado com if, while, etc.