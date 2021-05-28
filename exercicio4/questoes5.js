// Crie um objeto calculadora com os seguintes métodos: somar, subtrair, multiplicar e dividir. Os métodos só devem aceitar 2 parâmetros. Utilize cada um dos métodos e imprima os valores no console.

const calculadora = {
    somar(num1, num2){
        const resultado = num1 + num2; // return num1 + num2;
        console.log(resultado);
    },
    subtrair(num1, num2){
        const resultado = num1 - num2; // return num1 - num2;
        console.log(resultado);  
    },
    multiplicar(num1, num2){
        const resultado = num1 * num2; // return num1 * num2;
        console.log(resultado);
    },
    dividir(num1, num2){
        const resultado = num1 / num2; // return num1 / num2;
        console.log(resultado);
    },
}

calculadora.somar(2,2);
calculadora.subtrair(5,3);
calculadora.multiplicar(5,2);
calculadora.dividir(9,3);