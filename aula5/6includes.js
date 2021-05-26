// Método includes = atesta se o termo pertence ou não ao Array escolhido.

const posicoes = ['atacante', 'lateral', 'zagueiro', 'goleiro'];

console.log(posicoes.includes('meio-campo'));
console.log(posicoes.includes('atacante'));

// Método reverse =  reverte um Array.

console.log(posicoes);
console.log(posicoes.reverse());

// Método trim = retira espaços de uma string.

const senha = '         Hello World!';
const senhaCorrigida = senha.trim();

console.log(senhaCorrigida);

// padStart = Método para forçar que uma determinada quantidade de número seja retornado

const zeroUm = '1';

console.log(zeroUm.padStart(4, '0')); // Primeiro parâmetro: tamanho total do número, segundo argumento: o número que se deseja que seja preenchido.
console.log(zeroUm.padEnd(4, 'Z'));