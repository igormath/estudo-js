//Estrutura if/else que informa se o usuário tem permissão para dirigir.
const idade = 18, cnh = true;

if (idade >= 18 && cnh == false){
    console.log("Não tem permissão para dirigir!");
} else if (idade >= 18 && cnh == true){
    console.log("Pode dirigir!");
} else{
    console.log("Não tem permissão para dirigir!");
}