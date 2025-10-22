class Aluno extends Usuario {
    turma: string;
    curso: string;
    status: string;
    ranking: number;
    inventario: string;

    constructor(nome: string, sobrenome: string, username: string, senha: string, dataNasc: Date, genero: string, tipo: number, turma: string, curso: string, status: string, ranking: number, inventario: string) {
        super(nome, sobrenome, username, senha, dataNasc, genero, tipo);
        this.turma = turma;
        this.curso = curso;
        this.status = status;
        this.ranking = ranking;
        this.inventario = inventario;
    }
    
}