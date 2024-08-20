/*Crie uma classe Pessoa com propriedades nome e idade, e um método
cumprimentar. Em seguida, crie uma classe Estudante que herda de
Pessoa e adiciona a propriedade curso. Adicione um método estudar
à classe Estudante.*/

class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    cumprimentar() {
        console.log(`${this.nome} tem ${this.idade} anos.`);
    }
}

class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        //super é usada para acessar o objeto pai de um objeto
        super(nome, idade);
        this.curso = curso;
    }

    estudar() {
        console.log(`${this.nome} tem ${this.idade} anos e é estudante no curso de ${this.curso}!`);
    }
}

const student = new Estudante("Gabriela", 25, "ads");
student.cumprimentar()
student.estudar();

const estudante = new Estudante("Gustavo", 25, "segurança da informação");
estudante.cumprimentar();
estudante.estudar();