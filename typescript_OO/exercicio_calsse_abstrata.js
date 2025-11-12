var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cliente = /** @class */ (function () {
    function Cliente(id, nome, sobrenome, idade) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    Cliente.prototype.toString = function () {
        console.log("\n    ID: ".concat(this.id, "\n    NOME: ").concat(this.nome, " ").concat(this.sobrenome, "\n        "));
    };
    Cliente.prototype.apresentacao = function () {
        console.log("Ol\u00E1. meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos."));
    };
    return Cliente;
}());
var Veiculo = /** @class */ (function () {
    function Veiculo(marca, modelo, anoFabr) {
        this.marca = marca;
        this.modelo = modelo;
        this.anoFabr = anoFabr;
    }
    Veiculo.prototype.ligar = function () {
        console.log('O veículo ligou!');
    };
    return Veiculo;
}());
var Funcionario = /** @class */ (function (_super) {
    __extends(Funcionario, _super);
    function Funcionario(id, nome, sobrenome, idade, cpf, cargo, salario) {
        var _this = _super.call(this, id, nome, sobrenome, idade) || this;
        _this.cpf = cpf;
        _this.cargo = cargo;
        _this.salario = salario;
        return _this;
    }
    return Funcionario;
}(Cliente));
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(marca, modelo, anoFabr, portas, combustivel, tipo) {
        var _this = _super.call(this, marca, modelo, anoFabr) || this;
        _this.portas = portas;
        _this.combustivel = combustivel;
        _this.tipo = tipo;
        return _this;
    }
    Carro.prototype.mover = function () {
        console.log('O carro começou a andar!');
    };
    return Carro;
}(Veiculo));
var funcionario1 = new Funcionario('123', 'Ezequiel', 'Leandro', 30, '02382716356', 'desenvolvedor fullstack', 10000);
var funcionario2 = new Funcionario('456', 'Vanessa', 'Silva', 20, '0274899027467', 'desenvolvedora front-end', 10000);
var carro1 = new Carro('Ferrari', 'F50', 1998, 2, 'gasolina', 'esportivo');
funcionario1.apresentacao();
funcionario2.toString();
carro1.ligar();
carro1.mover();
