/*Crie um sistema para gerenciar pedidos em um restaurante. Crie uma classe base Pedido
e subclasses para diferentes tipos de pedidos como PedidoBebida, PedidoComida e PedidoSobremesa.*/

class Pedido {
    constructor(item, quantidade, precoUnitario){
        this.item = item;
        this.quantidade = quantidade;
        this.precoUnitario = precoUnitario;
    }

    calcularTotal() {
        return this.quantidade * this.precoUnitario;
    }
    
    detalhesDoPedido() {
        console.log(`Item: ${this.item},`);
        console.log(`Quantidade: ${this.quantidade},`);
        console.log(`Preço Unitário: ${this.precoUnitario.toFixed(2)},`);
    }
}

class PedidoBebida extends Pedido {
    constructor(item, quantidade, precoUnitario, tamanho) {
        super(item, quantidade, precoUnitario);
        this.tamanho = tamanho;
    }

    calcularTotal() {
        return super.calcularTotal();
    }

    detalhesDoPedido() {
        super.detalhesDoPedido();
        console.log(`Tamanho: ${this.tamanho}.`);
        console.log(`Valor Total: R$${this.calcularTotal().toFixed(2)},`);

    }
}

class PedidoComida extends Pedido {
    constructor(item, quantidade, precoUnitario, tipo) {
        super(item, quantidade, precoUnitario);
        this.tipo = tipo;
    }

    calcularTotal() {
        return super.calcularTotal();
    }

    detalhesDoPedido() {
        super.detalhesDoPedido();
        console.log(`Tipo: ${this.tipo}.`);
        console.log(`Valor Total: R$${this.calcularTotal().toFixed(2)},`);

    }
}

class PedidoSobremesa extends Pedido {
    constructor(item, quantidade, precoUnitario, tamanhoPorcao) {
        super(item, quantidade, precoUnitario);
        this.tamanhoPorcao = tamanhoPorcao;
    }

    calcularTotal() {
        return super.calcularTotal();
    }

    detalhesDoPedido() {
        super.detalhesDoPedido();
        console.log(`Tamanho da Porção: ${this.tamanhoPorcao}.`);
        console.log(`Valor Total: R$${this.calcularTotal().toFixed(2)},`);

    }
}

const bebida = new PedidoBebida("Coca-cola", 3, 4.99, "Pequeno");
const comida = new PedidoComida("Frango Empanado", 10, 4.40, "Entrada");
const sobremesa = new PedidoSobremesa("Mousse de Maracujá", 2, 6.99, "Individual");

bebida.detalhesDoPedido();
console.log("\n");
comida.detalhesDoPedido();
console.log("\n");
sobremesa.detalhesDoPedido();