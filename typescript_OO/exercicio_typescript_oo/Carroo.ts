class Carroo {
    marca: string;
    modelo: string;
    velocidadeAtual: number;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeAtual = 0;
    }

    acelerar(): void {
        this.velocidadeAtual += 30;
        if(this.velocidadeAtual >=230) {
            this.velocidadeAtual = 230;
        }
    }

    freiar(): void {
        this.velocidadeAtual -= 10
        if(this.velocidadeAtual <= 0) {
            this.velocidadeAtual = 0;
        }
    }

    exibirVelocidade() {
        console.log(`Velocidade Atual: ${this.velocidadeAtual} Km/h`);
    }
}

const carro1 = new Carroo('Ferrari', 'F50');
carro1.acelerar();
carro1.exibirVelocidade();
carro1.acelerar();
carro1.exibirVelocidade();
carro1.acelerar();
carro1.exibirVelocidade();
carro1.acelerar();
carro1.exibirVelocidade();
carro1.freiar();
carro1.exibirVelocidade();
carro1.freiar();
carro1.exibirVelocidade();
carro1.freiar();
carro1.exibirVelocidade();
carro1.freiar();
carro1.exibirVelocidade();
