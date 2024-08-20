/* constructor method is a special method of a class for creating and initializing an object instance of that class.*/

class Funcionario {
    constructor(nome, salario) {//constructor creating and initializing an object instance
        this.nome = nome;
        this.salario = salario;
    }

    calcularSalario(){
        return this.salario;
    }

    exibirDetalhes(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Salário: R$${this.calcularSalario().toFixed(2)}`);
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, salario, linguagensConhecidas) {
        super(nome, salario);
        this.linguagensConhecidas = linguagensConhecidas;
    }

    calcularSalario() {
        const bonus = this.linguagensConhecidas.length * 500;
        return super.calcularSalario() + bonus;
    }

    exibirDetalhes() {
        super.exibirDetalhes();
        console.log(`Linguagens: ${this.linguagensConhecidas.join(", ")}`);
    }
}

class Designer extends Funcionario {
    constructor(nome, salario, ferramentasConhecidas) {
        super(nome, salario);
        this.ferramentasConhecidas = ferramentasConhecidas;
    }

    calcularSalario() {
        const bonus = this.ferramentasConhecidas.length * 300;
        return super.calcularSalario() + bonus;
    }

    exibirDetalhes() {
        super.exibirDetalhes();
        console.log(`Ferramentas: ${this.ferramentasConhecidas.join(", ")}`);
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, equipe) {
        super(nome, salario);
        this.equipe = equipe;
    }

    calcularSalario() {
        const bonus = this.equipe.length * 500;
        return super.calcularSalario() + bonus;
    }

    exibirDetalhes(){
        super.exibirDetalhes();
        console.log(`Equipe: ${this.equipe.join(", ")}`);
    }
}

const dev = new Desenvolvedor("Gustavo", 5000, ["JavaScript", "Java", "Python"]);
const designer = new Designer("Alice", 4000, ["Photoshop", "illustrator"]);
const gerente = new Gerente("Carlos", 7000, ["Gustavo", "Alice", "David", "João"]);

dev.exibirDetalhes();
console.log('\n');
designer.exibirDetalhes();
console.log('\n');
gerente.exibirDetalhes();