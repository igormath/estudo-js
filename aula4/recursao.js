//função que chama ela mesma na execução.
function retornarNumeroPar(i){
    if (i % 2 == 0){
        console.log(`Agora é número par! ${i}`);
    } else {
        retornarNumeroPar(i - 1);
    }
}

retornarNumeroPar(15);