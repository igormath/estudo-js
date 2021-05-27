// Crie um array com 5 nomes, incluindo o seu e verifique se ele está mesmo lá. Se estiver, imprima alguma mensagem no console.

const nomes = ['José', 'Maria', 'Igor', 'Manoel', 'Ana'];

for(let i = 0; i < nomes.length; i++){
    if (nomes[i] === 'Igor'){
        console.log(`O nome ${nomes[i]} está na lista!`);
    }
}

// Outra forma (Condição ternária):

nomes.includes('Igor') ? console.log('Igor está presente no Array!') : console.log('Não está presente!');
nomes.includes('Josefina') ? console.log('O nome está presente') : console.log('O nome não se faz presente no Array!');