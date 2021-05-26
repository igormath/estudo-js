const pessoa = {
    saudacao: 'Olá, como vai!?',
    falar(){
        console.log(this.saudacao); //acessa o atributo do escopo em que se encontra. (o valor this é estabelecido segundo o escopo de execução no qual está inserido).
    }
}

pessoa.falar()

const falarDePessoa = pessoa.falar.bind(pessoa); // O bind serve para especificar o contexto em que a função this está.
falarDePessoa();