// Destructuring = definição de variáveis que recebem a característica do objeto.

const objetoExemplo = {
    nome: 'Igor',
    cpf: 4256545465465,
    rg: 21321321321
}

const {nome: qualNome, cpf: qualCpf, rg: qualRg} = objetoExemplo; // Faz "referência" aos valores originais.
console.log(qualNome, qualCpf, qualRg);

// O mesmo processo, dessa vez para um Array:

const nomes = ['Maria', 'José', 'Francisco'];
const [nome1, nome2, nome3] = nomes;

console.log(nome1, nome2, nome3);