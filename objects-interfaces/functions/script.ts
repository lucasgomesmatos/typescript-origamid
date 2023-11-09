


interface Quadrado {
    lado: number
    perimetro: (lado: number) => number
}

function calcularPerimetroQuadrado(quadrado: Quadrado) {
    return quadrado.perimetro(quadrado.lado)
}

function normalizar(valor: string[]): string[];
function normalizar(valor: string): string;
function normalizar(valor: string | string[] ): string | string[] {
    if (Array.isArray(valor)) {
        return valor.map(item => item.trim().toLowerCase())
    }
    return valor.trim().toLowerCase()
}


console.log(normalizar('Produtos   ').toUpperCase())
console.log(normalizar([' Produtos   ', '   Serviços']))