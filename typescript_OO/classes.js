var Pessoa = /** @class */ (function () {
    function Pessoa(nome, funcao, idade) {
        this.nome = nome;
        this.funcao = funcao;
        this.idade = idade;
    }
    Pessoa.prototype.apresentar = function () {
        return "Ol\u00E1, meu nome \u00E9 ".concat(this.nome, ", eu sou ").concat(this.funcao, " e tenho ").concat(this.idade, " anos.");
    };
    return Pessoa;
}());
var aluno = new Pessoa("Carlos", "aluno de programação", 28);
var professor = new Pessoa("Ana", "professora de inglês", 40);
