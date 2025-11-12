class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    getNome(): string {
        return this.nome;
    }
    getIdade(): number {
        return this.idade;
    }
    setNome(nome: string): void {
        this.nome = nome;
    }
    setIdade(idade: number): void {
        this.idade = idade;
    }

    apresentacao(): string {
        return `Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
    }
}

const pessoa1 = new Pessoa('Vladimir', 30);
const pessoa2 = new Pessoa('Rosa', 40);

console.log(pessoa1.apresentacao());
console.log(pessoa2.apresentacao());