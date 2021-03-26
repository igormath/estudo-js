// Escreva uma função que imprima hello world no console
function imprimirHelloWorld(){
    return console.log("Hello World!");
}

imprimirHelloWorld();

// Escreva uma função que recebe um parâmetro idade e imprima "Você tem x anos";

function suaidade(idade){
    return console.log(`Você tem ${idade} anos!`);
}

suaidade(18);
suaidade(26);
suaidade(40);

// Função que soma dois números e imprime o retorno.

function somaDoisNumeros(num1, num2){
    return num1 + num2;
}

console.log("A soma é: " + somaDoisNumeros(1,2));