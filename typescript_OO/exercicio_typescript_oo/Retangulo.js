var Retangulo = /** @class */ (function () {
    function Retangulo(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }
    Retangulo.prototype.getAltura = function () {
        return this.altura;
    };
    Retangulo.prototype.getLargura = function () {
        return this.largura;
    };
    Retangulo.prototype.setAltura = function (altura) {
        this.altura = altura;
    };
    Retangulo.prototype.setLargura = function (largura) {
        this.largura = largura;
    };
    Retangulo.prototype.calcularArea = function () {
        var area = this.altura * this.largura;
        return area;
    };
    Retangulo.prototype.calcularPerimetro = function () {
        var perimetro = 2 * (this.altura + this.largura);
        return perimetro;
    };
    return Retangulo;
}());
var retangulo = new Retangulo(100, 400);
console.log("\u00C1REA: ".concat(retangulo.calcularArea()));
console.log("PER\u00CDMETRO: ".concat(retangulo.calcularPerimetro()));
