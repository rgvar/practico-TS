"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(numero, razonSocial, cuit, facturas) {
        this._numero = numero;
        this._razonSocial = razonSocial;
        this._cuit = cuit;
        this._facturas = facturas !== null && facturas !== void 0 ? facturas : [];
    }
    Cliente.prototype.totalFacturadoXTipoPago = function (tipoPago) {
        var total = 0;
        if (['E', 'TD', 'TC', 'CC', 'TR'].indexOf(tipoPago) !== -1) {
            var facturasFiltradas = this._facturas.filter(function (fac) { return fac.tipoPago == tipoPago; });
            for (var _i = 0, facturasFiltradas_1 = facturasFiltradas; _i < facturasFiltradas_1.length; _i++) {
                var factura = facturasFiltradas_1[_i];
                total += factura.calcularTotalFinal();
            }
        }
        else {
            for (var _a = 0, _b = this._facturas; _a < _b.length; _a++) {
                var factura = _b[_a];
                total += factura.calcularTotalFinal();
            }
        }
        return total;
    };
    Cliente.prototype.agregarFacturas = function (facturas) {
        for (var _i = 0, facturas_1 = facturas; _i < facturas_1.length; _i++) {
            var fac = facturas_1[_i];
            this._facturas.push(fac);
        }
    };
    return Cliente;
}());
exports.Cliente = Cliente;
