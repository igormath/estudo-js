function Carro(marca, portas, cor){ // PRIMEIRA LETRA MAIÚSCULA É UM PADRÃO QUANDO SE TRATA DE CLASSES.
    this.marca = marca;
    this.portas = portas;
    this.cor = cor;
    this.barulhoDoMotor = function() {
        console.log('Vruuumm');
    }
}

const Volks = new Carro('Volks', 2, 'Vermelho'); // Instanciando a função através do new.

console.log(Volks);

Volks.barulhoDoMotor();