// Herança

class Carro{
    constructor(rodas){
        this.rodas = rodas;
    }
}

let Tesla = new Carro(4);

console.log(Tesla.rodas);

class Fusca extends Carro{ // A Classe fusca herda as características de Carro.
    constructor(rodas, cor, portas){
        super(rodas, rodas);
        this.cor = cor;
        this.portas = portas;
    }

    barulho(){
        console.log('Vruum!');
    }
}

const novoCarro = new Fusca(4, 'Amarelo', 2);

console.log(novoCarro.cor, novoCarro.portas, novoCarro.rodas);

console.log(new Fusca instanceof Carro); // Usado para conferir se o Fusca é uma instância (herdeiro) de Carro.
console.log(Tesla instanceof Carro);