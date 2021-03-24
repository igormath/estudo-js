let manga = 4; // forma de declarar a variável: let (variável) ou const (constante, valor que não muda)
console.log(`Quatro mangas equivalem a ${manga * 4}`);

let nome = "Igor";
console.log(`Nome: ${nome}`); // essa é a forma correta ao invés de utilizar "Nome: " + nome.

// Criação de uma função:
let numero1, numero2, resultado;
    function soma (numero1, numero2){
        resultado = numero1 + numero2;
        return resultado;
    }
console.log(soma(2,2));

// Função prompt (pouco utilizada)
let idade = prompt("Qual a sua idade?");
console.log(idade);

// Função alert
alert("Não saia desse site!")

// Função math
let maior = Math.max(1, 5, 38, 31);
console.log(maior);

// IF, ELSE IF, ELSE 

for (let testando = 2; testando < 100; testando = testando * 2){
    console.log("A contagem é " + testando);
}

let nomeSwitch = "Igor";

switch(nomeSwitch) {
    case "Igor":
        console.log("O nome é Igor");
        break;
    case "Matheus":
        console.log("O nome é matheus");
        break;
    default:
        console.log("Nome não encontrado");
        break;
}