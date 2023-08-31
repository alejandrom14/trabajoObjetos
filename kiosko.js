var Articulo = /** @class */ (function () {
    function Articulo(nombre, costo) {
        this.nombre = nombre;
        this.costo = costo;
    }
    return Articulo;
}());
var SistemaDeStock = /** @class */ (function () {
    function SistemaDeStock() {
        this.articulosDisponibles = [];
        this.articulosVendidos = [];
    }
    SistemaDeStock.prototype.agregarArticulo = function (item) {
        this.articulosDisponibles.push(item);
        console.log("Articulo Disponible: ".concat(item.nombre, " (Cost: $").concat(item.costo, ")"));
    };
    SistemaDeStock.prototype.venderArticulo = function (itemIndex) {
        if (itemIndex >= 0 && itemIndex < this.articulosDisponibles.length) {
            var articuloVendido = this.articulosDisponibles[itemIndex];
            this.articulosVendidos.push(articuloVendido);
            var auxArticulosDisponibles = [];
            for (var i = 0; i < this.articulosDisponibles.length; i++) {
                if (i !== itemIndex) {
                    auxArticulosDisponibles.push(this.articulosDisponibles[i]);
                }
            }
            this.articulosDisponibles = auxArticulosDisponibles;
        }
        else {
            console.log("Articulo invalido");
        }
    };
    SistemaDeStock.prototype.imprimirArticuloVendido = function () {
        console.log("Articulo Vendido:");
        this.articulosVendidos.forEach(function (item, index) {
            console.log("".concat(index + 1, " ").concat(item.nombre, " (Costo: $").concat(item.costo, ")"));
        });
    };
    return SistemaDeStock;
}());
// Crear objetos
var stock = new SistemaDeStock();
stock.agregarArticulo(new Articulo("Chupetin", 5));
stock.agregarArticulo(new Articulo("Alfajor", 20));
stock.agregarArticulo(new Articulo("Caramelos", 7));
// Vender articulos
stock.venderArticulo(2);
stock.venderArticulo(1);
stock.venderArticulo(0);
// Imprimir articulos vendidos
stock.imprimirArticuloVendido();
