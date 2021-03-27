//  Loops em arrays:

let listaNumeros = [5, 45, 105, 2, 0, 12];

for (let i = 0; i <= listaNumeros.length; i++){
    console.log(listaNumeros[i]); //  Imprime todos os termos do array na tela:
}

//  Para remover a última posição do array:

let numeroRemovido = listaNumeros.pop();
console.log(numeroRemovido);
console.log(listaNumeros);

//  Para adicionar um termo a ultima posição do array:

listaNumeros.push(3010);
console.log(listaNumeros);

//  Para remover a primeira posição do array:

let numeroRemovidoInicio = listaNumeros.shift();

console.log(numeroRemovidoInicio);
console.log(listaNumeros);

//  Para adicionar à primeira posição do array:

listaNumeros.unshift(24);
console.log(listaNumeros);