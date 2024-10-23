"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestB = void 0;
var Articulo_1 = require("./Articulo");
var Cliente_1 = require("./Cliente");
var DetalleFactura_1 = require("./DetalleFactura");
var Factura_1 = require("./Factura");
var TestB = /** @class */ (function () {
    function TestB() {
    }
    TestB.test = function () {
        var cliente = new Cliente_1.Cliente(100, "Rodrigo Vargas", 20414430458);
        var articulos = [
            new Articulo_1.Articulo(5, "Coca Cola botella 2.25 lts", 2625, "un"),
            new Articulo_1.Articulo(541, "Agua mineral Villavicencio", 795, "lts"),
            new Articulo_1.Articulo(222, "Fernet Branca botella 750 cc", 12400, "un"),
            new Articulo_1.Articulo(306, "Sprite botella 2.25 lts", 2500, "un"),
            new Articulo_1.Articulo(600, "Cerveza Schneider", 3509, "lts"),
        ];
        var facturas = [
            new Factura_1.Factura("C", 105, cliente, 'E', new Date(2024, 7, 15)),
            new Factura_1.Factura("C", 170, cliente, 'CC', new Date(2024, 8, 12)),
            new Factura_1.Factura("C", 200, cliente, 'CC'),
        ];
        var detalles = [
            new DetalleFactura_1.DetalleFactura(4, articulos[0], facturas[0]),
            new DetalleFactura_1.DetalleFactura(3, articulos[2], facturas[0]),
            new DetalleFactura_1.DetalleFactura(5, articulos[1], facturas[1]),
            new DetalleFactura_1.DetalleFactura(5, articulos[3], facturas[1]),
            new DetalleFactura_1.DetalleFactura(10, articulos[4], facturas[2]),
            new DetalleFactura_1.DetalleFactura(10, articulos[1], facturas[2]),
        ];
        facturas[0].agregarDetallesFactura([detalles[0], detalles[1]]);
        facturas[1].agregarDetallesFactura([detalles[2], detalles[3]]);
        facturas[2].agregarDetallesFactura([detalles[4], detalles[5]]);
        console.log(cliente.totalFacturadoXTipoPago('CC'));
    };
    return TestB;
}());
exports.TestB = TestB;
