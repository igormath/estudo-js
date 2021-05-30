// Métodos get and set

class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    get verNome(){
        return `O nome é ${this.nome}`;
    }
    set novoNome(value){
        this.nome = value;
    }
}

const Pedro = new Pessoa('Pedro');

console.log(Pedro.verNome);
Pedro.novoNome = 'Zezé';
console.log(Pedro.verNome);