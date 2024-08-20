/*Crie um sistema de gerenciamento de uma biblioteca que lida com diferentes tipos de itens
como Livro, DVD e Revista. Cada um desses itens pode ser emprestado para os usuários, mas as
regras de empréstimo variam*/

class itemBiblioteca {
    constructor(titulo, autor, anoPublicado){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicado = anoPublicado;
    }

    diasEmprestimos(){
        throw new Error("Esse método deve ser executado pelas subclasses.")
    }

    infoEmprestimos() {
        console.log(`Título: ${this.titulo},`);
        console.log(`Autor: ${this.autor},`);
        console.log(`Ano Publicado: ${this.anoPublicado},`);
        console.log(`Dias de empréstimos: ${this.diasEmprestimos()} dias.`);
    }
}


class Livro extends itemBiblioteca {
    constructor(titulo, autor, anoPublicado){
        super(titulo, autor, anoPublicado);
    }

    diasEmprestimos(){
        return 21;
    }
}

class DVD extends itemBiblioteca {
    constructor(titulo, autor, anoPublicado){
        super(titulo, autor, anoPublicado);
    }

    diasEmprestimos(){
        return 7;
    }
}

class Revista extends itemBiblioteca {
    constructor(titulo, autor, anoPublicado){
        super(titulo, autor, anoPublicado);
    }

    diasEmprestimos(){
        return 7;
    }
}

const livro = new Livro("Lord of Rings", "J.R.R. Tolkien", 1954);
const dvd = new DVD("Inception", "Christopher Nolan", 2010);
const revista = new Revista("Fight Club", "David Fincher", 1999);

livro.infoEmprestimos();
console.log("\n");
dvd.infoEmprestimos();
console.log("\n");
revista.infoEmprestimos();