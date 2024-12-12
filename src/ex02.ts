interface FormatoDeElemento {
    desenhar(): void
    redimensionar(): void
}

class Circulo implements FormatoDeElemento{
    constructor(public raio: number) {}

    desenhar(): void {
        console.log(`Desenhando um circulo com raio de ${this.raio}°`)
    }

    redimensionar(): void {
        this.raio *= 2
        console.log(`Círculo redimencionado. Novo raio ${this.raio}°`)
    }
}

class Retangulo implements FormatoDeElemento {
    constructor(public comprimento: number, public altura: number) {}

    desenhar(): void {
        console.log(`Desenhando um retângulo de ${this.comprimento}x${this.altura}`)
    }

    redimensionar(): void {
        this.comprimento *= 2
        this.altura *= 2
        console.log(`Retângulo redimensionado. Novo tamanho: ${this.comprimento}x${this.altura}`)
    }
}

const circulo = new Circulo(5)
circulo.desenhar()
circulo.redimensionar()
circulo.desenhar()

const retangulo = new Retangulo(10, 20)
retangulo.desenhar()
retangulo.redimensionar()
retangulo.desenhar()
