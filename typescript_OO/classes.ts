class Pessoa {
    nome: string;
    funcao: string;
    idade: number;

    constructor(nome: string, funcao: string, idade: number) {
        this.nome = nome;
        this.funcao = funcao;
        this.idade = idade;
    }

    apresentar(): string {
        return `Olá, meu nome é ${this.nome}, eu sou ${this.funcao} e tenho ${this.idade} anos.`;
    }
}

const aluno = new Pessoa("Carlos", "aluno de programação", 28);

const professor = new Pessoa("Ana", "professora de inglês", 40);