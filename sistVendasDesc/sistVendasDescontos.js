class Cliente {
    constructor(nome, cpf){
        this.nome = nome;
        this.cpf = cpf;
    }
    
    calcularDesconto(precoTotal) {
        return precoTotal;
    }

    exibirDetalhes(){
        return `Nome: ${this.nome}, CPF: ${this.cpf}.`;
    }
}

class clienteComum extends Cliente {
    calcularDesconto(precoTotal){
        return precoTotal;
    }
}

class clienteVIP extends Cliente {
    calcularDesconto(precoTotal){
        const desconto = precoTotal * 0.20;
        return precoTotal - desconto;
    }
}

class clienteEstudante extends Cliente {
    calcularDesconto(precoTotal){
        const desconto = precoTotal * 0.15;
        return precoTotal - desconto;
    }
}

function calcularDesconto() {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const tipoCliente = document.getElementById('tipo-cliente').value;
    const precoTotal = parseFloat(document.getElementById('preco-total').value);

    let client;

    switch(tipoCliente) {
        case 'comum':
            client = new clienteComum(nome, cpf);
            break;
        case 'vip':
            client = new clienteVIP(nome, cpf);
            break;
        case 'estudante':
            client = new clienteEstudante(nome, cpf);
            break;
        default:
            alert('Selecione um cliente válido.');
            return;
    }

    const precoComDesconto = client.calcularDesconto(precoTotal);
    const detalhesCliente = client.exibirDetalhes();

    document.getElementById('result').innerText = `${detalhesCliente}\nPreço final com desconto: R$${precoComDesconto.toFixed(2)}`;
}

/*const clientCom = new ClienteComum("João Silva", "222.222.222.23");
const clientVip = new ClienteVIP("Gustavo Fucítalo", "222.333.444.42");
const clientStudent = new ClienteEstudante("Rafaela Oliveira", "333.111.222.13");

const precoTotal = 1000;

clientCom.exibirDetalhes();
console.log(`Preço final para cliente comum: R$${clientCom.calcularDesconto(precoTotal).toFixed(2)}`);
console.log("\n")

clientVip.exibirDetalhes();
console.log(`Preço final para cliente VIP: R$${clientVip.calcularDesconto(precoTotal).toFixed(2)}`);
console.log("\n");

clientStudent.exibirDetalhes();
console.log(`Preço final para cliente estudante: R$${clientStudent.calcularDesconto(precoTotal).toFixed(2)}`);*/