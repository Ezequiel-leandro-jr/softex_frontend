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
var professora = new Pessoa("Ana", "professora de inglês", 40);
//exibindo a saída
console.log('--- Saída dos Objetos ---');
console.log("Aluno:", aluno.apresentar());
console.log("Professora:", professora.apresentar());
console.log('--------------------------');
console.log("Verificando o nome do aluno: ".concat(aluno.nome));
console.log("Verificando o cargo da professora: ".concat(professora.funcao));
