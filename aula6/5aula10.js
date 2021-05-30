function Carro(marca, portas, cor){ // Na Classe principal ficam apenas as propriedades, os métodos ficam no prototype.
    this.marca = marca;
    this.portas = portas;
    this.cor = cor;
}

Carro.prototype.barulhoDoMotor = function(){ // A função barulhoDoMotor herda as propriedades de 'Carro', que está a um nível superior.
    console.log('Vruuumm!');
}

const Volks = new Carro('Volks', 2, 'Vermelho'); // Instanciando a função através do new.

// console.log(Volks.marca, Volks.portas, Volks.cor);

Volks.barulhoDoMotor();
