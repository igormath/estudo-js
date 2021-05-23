/* Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
propriedade especificada no segundo parâmetro. */

function removerPropriedade(objeto, propriedade){
    const novoObjeto = Object.assign(objeto), prop = propriedade;
    delete novoObjeto[prop];
    console.log(novoObjeto);

}

removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
    }, "descricao")