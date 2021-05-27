// Crie dois Arrays, um com mais de 5 elementos e outro com menos. Faça uma função que verifica o número de elementos. Se possuir menos que 5, imprima "Poucos elementos" no console e se tiver mais imprima "Muitos elementos".

const array1 = [3, 5, 7, 11, 13], array2 = [17, 19, 23];

function juizDeArray(array){
    (array.length) <5 ? console.log('Poucos elementos') : console.log('Muitos elementos');
}

juizDeArray(array1);
juizDeArray(array2);

// Faça uma iteração entre todos os elementos de um Array de tamanho 5 e exiba-os no console.

for(let i = 0; i < array1.length; i++){
    console.log(array1[i]);
}