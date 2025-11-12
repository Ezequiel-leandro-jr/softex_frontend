abstract class Veiculo {
    
    constructor(public placa: string, private cor: string, private marca: string, private modelo: string, private anoDeFabricacao: number, private ipva: boolean) {

        this.placa = placa;
        this.cor = cor;
        this.marca = marca;
        this.modelo = modelo;
        this.anoDeFabricacao = anoDeFabricacao;
        this.ipva = ipva;

    }
    
    abstract ligar(): void;
    abstract desligar(): void;
    abstract acelerar(): void;
    abstract freiar(): void;
    
}

class Carro extends Veiculo {

    ligar(){
        console.log("O carro foi ligado.");
    }
    desligar(){
        console.log("O carro foi desligado.");
    }
    acelerar(){
        console.log("O carro acelerou!!!!");
    }
    freiar(){
        console.log("O Carro parou!");
    }

}

class Moto extends Veiculo{

    ligar(){
        console.log("A moto foi ligada.");
    }
    desligar(){
        console.log("A moto foi desligada.");
    }
    acelerar(){
        console.log("A moto acelerou!!!!");
    }
    freiar(){
        console.log("A moto parou!");
    }

}

const carroDeJoselene = new Carro("KI5O23","Azul Marinho","Mercedes","CLA",2025, true);

const motoDeWesley = new Moto("PG7U98","Preta","Dafra","NH 190",2015,false);

carroDeJoselene.ligar();

motoDeWesley.freiar();

class Jato extends Veiculo {
    ligar(){
        console.log("O jato foi ligado.");
    }
    desligar(){
        console.log("O jato foi desligado.");
    }
    acelerar(){
        console.log("O jato acelerou!!!!");
    }
    freiar(){
        console.log("O jato parou!");
    }

    voar(){
        console.log("O jato tá voando!");
    }

    aterrisar(){
        console.log("O jato aterrisou!!");
    }
}

const jatoDeEzequiel = new Jato("EZE8888", "Branco", "Gulfstream", "G800", 2025, true);

jatoDeEzequiel.ligar();
jatoDeEzequiel.acelerar();
jatoDeEzequiel.voar();
