abstract class Cliente {
    id: string;
    nome: string;
    sobrenome: string;
    idade: number;

    constructor(id: string, nome: string, sobrenome: string, idade: number ) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    toString(): void {
        console.log(`
    ID: ${this.id}
    NOME: ${this.nome} ${this.sobrenome}
        `);
    }

    apresentacao(): void {
        console.log(`Olá. meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

abstract class Veiculo {
    marca: string;
    modelo: string;
    anoFabr: number;

    constructor(marca: string, modelo: string, anoFabr: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.anoFabr = anoFabr;
    }

    ligar(): void {
        console.log('O veículo ligou!');
    }

     abstract mover(): void;

}

class Funcionario extends Cliente {
    cpf: string;
    cargo: string;
    salario: number;

   constructor(id: string, nome: string, sobrenome: string, idade: number, cpf: string, cargo: string, salario: number) {
        super(id, nome, sobrenome, idade);
        this.cpf = cpf;
        this.cargo = cargo;
        this.salario = salario;
   }

class Carro extends Veiculo {
    portas: number;
    combustivel: string;
    tipo: string;

    constructor(marca: string, modelo: string, anoFabr: number, portas: number, combustivel: string, tipo: string) {
        super(marca, modelo, anoFabr);
        this.portas = portas;
        this.combustivel = combustivel;
        this.tipo = tipo;
    }

    mover(): void {
        console.log('O carro começou a andar!');
    }
}

