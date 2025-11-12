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

const funcionario1 = new Funcionario('123', 'Ezequiel','Leandro', 30, '02382716356', 'desenvolvedor fullstack', 10000);
const funcionario2 = new Funcionario('456', 'Vanessa', 'Silva', 20, '0274899027467', 'desenvolvedora front-end', 10000);
const carro1 = new Carro('Ferrari', 'F50', 1998, 2, 'gasolina', 'esportivo');

funcionario1.apresentacao();
funcionario2.toString();
carro1.ligar();
carro1.mover();

