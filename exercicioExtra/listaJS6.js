/* Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
propriedade especificada no segundo parâmetro. */

function removerPropriedade(objeto, propriedade){
    const novoObjeto = Object.assign({}, objeto); //1o parametro: destino, 2o parametro: origem. Nesse caso, o destino foi um objeto em branco, que foi guardado em "novoObjeto".
    delete novoObjeto[propriedade];
    console.log(novoObjeto);
    console.log(objeto);

}

removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
    }, "descricao")