// Rest operator = Uma forma da função receber indefinidos parâmetros. O operador Rest vai virar um Array.
const num = 2, num1 = 10, num2 = 32, num3 = 7;

function imprimirNumeros(...argumentos){ // Lembrando: argumentos nesse caso vira um array!!!
    console.log(argumentos); // Resultado [], apenas para ilustrar que o argumento é passado como array
    for (let i = 0; i < argumentos.length; i++){
        console.log(argumentos[i]);
    }
}


imprimirNumeros(num, num1, num2, num3);
console.log('---------');
imprimirNumeros(1,3,7,11,17);