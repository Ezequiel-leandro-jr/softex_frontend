var Carroo = /** @class */ (function () {
    function Carroo(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeAtual = 0;
    }
    Carroo.prototype.acelerar = function () {
        this.velocidadeAtual += 30;
        if (this.velocidadeAtual >= 230) {
            this.velocidadeAtual = 230;
        }
    };
    Carroo.prototype.freiar = function () {
        this.velocidadeAtual -= 10;
        if (this.velocidadeAtual <= 0) {
            this.velocidadeAtual = 0;
        }
    };
    Carroo.prototype.exibirVelocidade = function () {
        console.log("Velocidade Atual: ".concat(this.velocidadeAtual, " Km/h"));
    };
    return Carroo;
}());
var carro1 = new Carroo('Ferrari', 'F50');
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
