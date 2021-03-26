function multiplicarNumeros (x, y , z){
    return x * y * z;
}

console.log(multiplicarNumeros(2,3,4));

const multiplicacao = multiplicarNumeros(4, 5, 6);

console.log("O valor da multiplicação é: " + multiplicacao);

// Arrow functions:

let soma = (a, b) => {
    return (a + b);
}

console.log(soma(2,2));

// Se só tiver um argumento:

const quadrado = n => n * n;

console.log(quadrado(4));

// Outro exemplo:

const dobro = x => x * 2;

console.log(dobro(16));

//tratamento dos dados de uma função:

function mais (a, b) {
    
    if (a === undefined || b === undefined){
        console.log("Você precisa informar os dois números!");
    } else{
        return a + b;
    }
}

console.log(mais(1));
console.log(mais(1,2));

// Função com argumento default:

function frase(frase, n=2){
    for (let x = 1; x <= n; x++){
        console.log(frase + " " + x);
    }
}

console.log(frase("Testando", 10));
console.log(frase("Repetir apenas 2 vezes"));