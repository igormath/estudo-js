// Métodos: propriedades que servem como funções, são as ações dos objetos, invocadas da mesma maneira que funções.

const carro = {
    marca: 'não definida',
    buzina: function(){
        console.log('bibi');
    },
    motor: function(){
        console.log('vruuum');
    },
    setMarca: function(marca){
        this.marca = marca;
    },
    getMarca: function(){
        return this.marca;
    }
}

carro.buzina();
carro.motor();
console.log(carro.marca); // Antes de invocar a função de definição de marca
carro.setMarca('Ford');
console.log(carro.getMarca());