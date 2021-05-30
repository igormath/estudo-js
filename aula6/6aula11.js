// Criando classes com o constructor:

class Cadastro{
    constructor(nome, cpf, idade){
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
    }
}

const José = new Cadastro('José', 4346473647236, 40);

console.log(José);