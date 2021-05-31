/* Crie uma classe que simula um carrinho de compras de um e-commerce
Propriedades: itens, quantidade total, valor total
Crie os métodos para adicionar e remover itens. */

class ecommerce{
    constructor(itens, quantidadeTotal, valorTotal){
        this.itens = itens;
        this.quantidadeTotal = quantidadeTotal;
        this.valorTotal = valorTotal;
    }

    adicionar(item){
        this.itens += item;
    }
    remover(item){
        this.itens -= item;
    }
}

let meuCarrinho = new ecommerce('batata', 42, 3010);

console.log(meuCarrinho); // Não terminado.