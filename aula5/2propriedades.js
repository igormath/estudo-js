// Propriedades podem ser criadas e deletadas:

let pessoa = {
    nome: "Igor",
    olhos: 2,
    boca: true,
    dedos: 20
}

console.log(pessoa);
console.log(pessoa.nome);

//  Para deletar uma propriedade:

delete pessoa.boca;
console.log(pessoa);
console.log(pessoa.boca); // = undefined.

//  Para adicionar uma propriedade: 

pessoa.pernas = 2;
console.log(pessoa);