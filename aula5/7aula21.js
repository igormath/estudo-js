// Método split = recebe um String e divide-o em componentes de um Array.

const frase = 'Subi num ônibus em Marrocos';
const arrayDaFrase = frase.split(' ') // É comum também escolher o ; como critério para separar as palavras.

console.log(arrayDaFrase);

// Método join = pega um array e transforma numa string.

console.log(arrayDaFrase.join('~')); // OBS: Não estou salvando o resultado em nenhuma variável!

// Método repeat = repete a string a quantidade de vezes que se achar necessário.

console.log(frase.repeat(3));