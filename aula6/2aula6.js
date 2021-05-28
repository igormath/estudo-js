// Prototype é o pai dos objetos, sempre uma instância acima. Os objetos criados pelo dev recebem as características do Object, que está logo acima e herdam todos os seus métodos, que são outros métodos e funções que também estão abaixo deste "guarda-chuva". O prototype é então o pai de todos os métodos.

const pessoa = {
    olhos: 2
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

const pessoaCopia = Object.create(pessoa); // Pessoa nova fica abaixo do objeto pessoa e então herda as suas características.

console.log(pessoaCopia.olhos);

console.log(pessoaCopia.hasOwnProperty('olhos')); // A pessoa nova, apesar de herdar as características do seu prototype, não possue-as propiamente.