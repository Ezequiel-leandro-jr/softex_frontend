var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.getIdade = function () {
        return this.idade;
    };
    Pessoa.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Pessoa.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    Pessoa.prototype.apresentacao = function () {
        return "Meu nome \u00E9 ".concat(this.nome, " e eu tenho ").concat(this.idade, " anos.");
    };
    return Pessoa;
}());
var pessoa1 = new Pessoa('Vladimir', 30);
var pessoa2 = new Pessoa('Rosa', 40);
console.log(pessoa1.apresentacao());
console.log(pessoa2.apresentacao());
