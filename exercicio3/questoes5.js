//  Função que analisa o tamanho da string, se tiver mais que 10 caracteres retorna "texto muito longo", menos que isso, retorna "texto dentro do limite".

function fiscalDeString(texto){

    if (texto.length > 10){
        console.log("Texto muito longo!");
    } else{
        console.log("Texto dentro do limite!");
    }
}

fiscalDeString("Igor");
fiscalDeString("Matheus");
fiscalDeString("Igor Matheus");

//  Função que recebe dois números, um sendo a base e outro sendo o expoente e calcula a respectiva potência.

let potencia = (base, expoente) => {
    return console.log(Math.pow(base, expoente));    
} // Arrow function

function potencia2 (base2, expoente2){
    return console.log(Math.pow(base2, expoente2));
}

potencia(2,2);
potencia2(2,2);
potencia(3,2);
potencia2(3,2);