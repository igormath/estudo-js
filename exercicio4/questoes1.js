// Crie um Array com cinco itens e acesse o 1, 3 e 4.

const arrayQuestao1 = ['Carro', 'Bicicleta', 'Ônibus', 'Moto', 'Metrô'];

console.log(arrayQuestao1[0], arrayQuestao1[2], arrayQuestao1[3]);

// Crie um Array com 2 elementos e outro com 4 e imprima o número de elementos de cada um na tela.

const arrayQuestao2 = [1, 3], arrayQuestao21 = [5, 7, 11, 13];

console.log(arrayQuestao2.length);
console.log(arrayQuestao21.length);

// Crie um objeto ônibus com as propriedades rodas = 8, passageiros = 40 e portas = 2. Imprima todas as propriedades no console.

const onibus = {
    rodas: 8,
    passageiros: 40,
    portas: 2
};

console.log(onibus);
// Ou, exibindo os values das respectivas keys separadamente:
console.log(onibus.rodas);
console.log(onibus.passageiros);
console.log(onibus.portas);

// Adicione a propriedade janelas a onibus com o valor de 20 e delete a propriedade rodas. Imprima a propriedade janelas no console.

onibus.janelas = 20;
delete onibus.rodas;
console.log(onibus.janelas);