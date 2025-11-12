class People {
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

const aluno = new People("Carlos", "aluno de programação", 28);

const professora = new People("Ana", "professora de inglês", 40);


//exibindo a saída
console.log('--- Saída dos Objetos ---');
console.log("Aluno:", aluno.apresentar());
console.log("Professora:", professora.apresentar());
console.log('--------------------------');
console.log(`Verificando o nome do aluno: ${aluno.nome}`);
console.log(`Verificando o cargo da professora: ${professora.funcao}`);