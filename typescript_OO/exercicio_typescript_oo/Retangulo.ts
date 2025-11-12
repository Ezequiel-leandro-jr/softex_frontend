class Retangulo {
    altura: number;
    largura: number;

    constructor(altura: number, largura: number) {
        this.altura = altura;
        this.largura = largura;
    }

    getAltura(): number {
        return this.altura;
    }
    getLargura(): number {
        return this.largura;
    }
    setAltura(altura: number): void {
        this.altura = altura;
    }
    setLargura(largura: number): void {
        this.largura = largura;
    }

    calcularArea(): number {
        const area = this.altura * this.largura;
        return area;
    }

    calcularPerimetro(): number {
        const perimetro = 2 * (this.altura + this.largura);
        return perimetro;
    }
}

const retangulo = new Retangulo(100, 400);

console.log(`ÁREA: ${retangulo.calcularArea()}`);
console.log(`PERÍMETRO: ${retangulo.calcularPerimetro()}`);