//  Função que analisa se o requerente pode entrar na auto-escola, se não puder retorna uma mensagem negativa e quantos anos faltam para tanto.

function autoEscola(idade){
    if (idade >= 18){
        console.log("Pode entrar na auto-escola!");
    } else{
        let anosRestantes = Math.abs((idade - 18));
        console.log(`Ainda não pode entrar na auto-escola! anos restantes: ${anosRestantes}`);
    }
}

console.log(autoEscola(18));
console.log(autoEscola(16));
console.log(autoEscola(5));
console.log(autoEscola(28));
console.log(autoEscola(40));