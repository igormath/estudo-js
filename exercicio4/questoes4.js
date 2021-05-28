// Crie um JSON com 3 propriedades, atribua ele a uma variável e acesse as propriedades imprimindo no console.

const jsonExemplo = {
    "name": "José",
    "idade": 40,
    "brazilian": true
}

console.log(jsonExemplo.name, jsonExemplo.idade, jsonExemplo.brazilian);

// Crie um Array a partir de uma frase e imprima cada palavra do Array no console por meio de um for.

const frase = 'The cake is a lie!', arrayDaFrase = frase.split(' ');

console.log(arrayDaFrase);
for (let i = 0; i < arrayDaFrase.length; i++){
    console.log(arrayDaFrase[i]);
}