//  Arrays guardam um conjunto de valores, de um ou variados tipos.

let numeros = [1, 4, 3, 8];
let nomes = ["Igor", 'Matheus', `Azevedo`];
let booleanos = [true, false, false, true];
let estado = [undefined, NaN];

console.log(numeros);
console.log(nomes);
console.log(booleanos);
console.log(estado);

//  Para acessar posições específicas dos arrays:

console.log(numeros[2]);
console.log(nomes[1]);
console.log(booleanos[3]);
console.log(estado[1]);

//  Método para imprimir o tamanho do array:

console.log(numeros.length); // Podemos usar para imprimir a última, antepenultima, etc, posição do array:

console.log(nomes[nomes.length - 1]); //    (último componente do array)

/*  string.propriedade
    string.método() */