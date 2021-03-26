// Escreva uma função que recebe um número e o decrementa de 1 em 1 com um loop. Além disso, imprima apenas os números pares no console.

function sequenciaPares (numero){
    
    for (let x = numero; x >= 0; x--){
        if (x % 2 == 0){
            console.log(x);
        }
    }
}

sequenciaPares(1000);