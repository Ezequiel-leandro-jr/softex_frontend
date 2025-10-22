class Usuario {
    nome: string;
    sobrenome: string;
    username: string;
    senha: string;
    dataNasc: Date;
    genero: string;
    tipo: number;

    constructor(nome: string, sobrenome: string, username: string, senha: string, dataNasc: Date, genero: string, tipo: number) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.username = username;
        this.senha = senha;
        this.dataNasc = dataNasc;
        this.genero = genero;
        this.tipo = tipo;

    }
}