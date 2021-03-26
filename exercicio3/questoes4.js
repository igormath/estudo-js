//  Função que analisa o tipo de dado passado e exibe esta informação na tela.

function tipoDado(dado){
    
    if (typeof (dado) === 'number'){
        console.log("É um número!");
    } else if (typeof (dado) === 'string'){
        console.log("É uma string!");
    } else if (typeof (dado) === 'boolean'){
        console.log("É um booleano!");
    }
}

tipoDado(15);
tipoDado("Igor");
tipoDado(true);

//  Função que recebe um número negativo e retorna um número positivo

function novoSinal(numero){
    return Math.abs(numero);
}

console.log(novoSinal(-10));
console.log(novoSinal(-4));
console.log(novoSinal(-2));
console.log(novoSinal(-3010));
console.log(novoSinal(-35.38293));