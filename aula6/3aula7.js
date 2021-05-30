const carro = {
    origem: 'Não definida',
    portas: 2,
    roncoDoMotor: function(){
        console.log('Vruuumm');
    }
}

const peugeot = Object.create(carro);

peugeot.origem = 'França';

console.log(peugeot); // retorna origem: França. Ou seja, apesar de contar com as outras características, estas não fazem parte do objeto definitivamente.
console.log(peugeot.origem);
peugeot.roncoDoMotor(); // Herda a propriedade do seu pai, o Prototype, então a função é executada.