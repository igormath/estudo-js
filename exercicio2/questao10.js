//Verificar se um número é primo

let num = 5, divisao = 0;

for (let i = 1; i <= num; i++){
    if (num % i == 0){
        divisao++;
    }
}

if (divisao>2){
    console.log(`O número ${num} não é primo!`);
} else{
    console.log(`O número ${num} é primo!`);
}