/*  Crie uma classe que simula uma conta de banco
    Deve conter a propriedade saldo e os métodos depósito e saque
    Teste os métodos */

class Banco{
    constructor (saldo){
        this.saldo = saldo;
    }
    get verSaldo(){
        return `O saldo é ${this.saldo}`;
    }
    set deposito(valor){
        //const valorTemporario1 = this.saldo;
        this.saldo += /* valorTemporario1 */ valor;
    }
    set saque(valor){
        //const valorTemporario2 = this.saldo;
        this.saldo -= /* valorTemporario2 */ valor;
    }
}

const minhaConta = new Banco(5000);

console.log(minhaConta.verSaldo);
minhaConta.deposito = 2000;
console.log(minhaConta.verSaldo);
minhaConta.saque = 3000;
console.log(minhaConta.verSaldo);