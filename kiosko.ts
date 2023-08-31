class Articulo {
    nombre: string;
    costo: number;

    constructor(nombre: string, costo: number) {
        this.nombre = nombre;
        this.costo = costo;
    }
}

class SistemaDeStock {
    private articulosDisponibles: Articulo[];
    private articulosVendidos: Articulo[];

    constructor() {
        this.articulosDisponibles = [];
        this.articulosVendidos = [];
    }

    agregarArticulo(item: Articulo) {
        this.articulosDisponibles.push(item);
        console.log(`Articulo Disponible: ${item.nombre} (Cost: $${item.costo})`);
    }

    venderArticulo(itemIndex: number) {
        if (itemIndex >= 0 && itemIndex < this.articulosDisponibles.length) {
            const articuloVendido = this.articulosDisponibles[itemIndex];
            this.articulosVendidos.push(articuloVendido);

            const auxArticulosDisponibles: any[] = [];
            for (let i = 0; i < this.articulosDisponibles.length; i++) {
                if (i !== itemIndex) {
                    auxArticulosDisponibles.push(this.articulosDisponibles[i]);
                }
            }
            this.articulosDisponibles = auxArticulosDisponibles;

        } else {
            console.log("Articulo invalido");
        }
    }

    imprimirArticuloVendido() {
        console.log("Articulo Vendido:");
        this.articulosVendidos.forEach((item, index) => {
            console.log(`${index + 1} ${item.nombre} (Costo: $${item.costo})`);
        });
    }
}

// Crear objetos
const stock = new SistemaDeStock();
stock.agregarArticulo(new Articulo("Chupetin", 5));
stock.agregarArticulo(new Articulo("Alfajor", 20));
stock.agregarArticulo(new Articulo("Caramelos", 7));

// Vender articulos
stock.venderArticulo(2);
stock.venderArticulo(1);
stock.venderArticulo(0);

// Imprimir articulos vendidos
stock.imprimirArticuloVendido();