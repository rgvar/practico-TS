"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleFactura = void 0;
var DetalleFactura = /** @class */ (function () {
    function DetalleFactura(cantidad, articulo, factura) {
        this._cantidad = cantidad;
        this._articulo = articulo;
        this._factura = factura;
        this._subtotal = this.calcularSubTotal();
    }
    DetalleFactura.prototype.calcularSubTotal = function () {
        return this._subtotal = this._cantidad * this._articulo.precio;
    };
    Object.defineProperty(DetalleFactura.prototype, "subtotal", {
        get: function () {
            return this._subtotal;
        },
        enumerable: false,
        configurable: true
    });
    return DetalleFactura;
}());
exports.DetalleFactura = DetalleFactura;
