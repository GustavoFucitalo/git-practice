class Produto {
    constructor(nome, preco, descricao) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }

    exibirDetalhes() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: ${this.preco}`);
        console.log(`Descrição: ${this.descricao}`);
    }
}

class Livro extends Produto {
    constructor(nome, preco, descricao, autor, numeroDePaginas){
        super(nome, preco, descricao);
        this.autor = autor;
        this.numeroDePaginas = numeroDePaginas;
    }

    exibirDetalhes(){
        super.exibirDetalhes();
        console.log(`Autor: ${this.autor}`);
        console.log(`Número de Páginas: ${this.numeroDePaginas}`);
    }
}

class Eletronico extends Produto{
    constructor(nome, preco, descricao, marca, garantia){
        super(nome, preco, descricao);
        this.marca = marca;
        this.garantia = garantia;
    }

    exibirDetalhes(){
        super.exibirDetalhes();
        console.log(`Marca: ${this.marca}`);
        console.log(`Garantia: ${this.garantia}`);
    }
}

class Roupa extends Produto {
    constructor(nome, preco, descricao, tamanho, material) {
        super(nome, preco, descricao);
        this.tamanho = tamanho;
        this.material = material;
    }
    exibirDetalhes() {
        super.exibirDetalhes();
        console.log(`Tamanho: ${this.tamanho}`);
        console.log(`Material: ${this.material}`);
    }
}

const livro = new Livro("JavaScript: O guia definitivo", 99.90, "O melhor livro para aprender", "David Flanagan", 1080);
const eletronico = new Eletronico("Smarthphone XYZ", 1999.90, "Smartphone de última geração com câmera de 108MP", "XYZ Corp", "2 anos");
const roupa = new Roupa("Camisa Polo", 79.90, "Camisa polo 100% algodão.", "M", "Algodão");

livro.exibirDetalhes();
console.log("\n");
eletronico.exibirDetalhes();
console.log("\n");
roupa.exibirDetalhes();
