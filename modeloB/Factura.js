"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factura = void 0;
var Factura = /** @class */ (function () {
    function Factura(letra, numero, cliente, tipoPago, fecha, recargo, detalles) {
        this._letra = letra;
        this._numero = numero;
        this._cliente = cliente;
        this._tipoPago = tipoPago !== null && tipoPago !== void 0 ? tipoPago : ""; // ***
        this._fecha = fecha !== null && fecha !== void 0 ? fecha : new Date();
        this._recargo = recargo !== null && recargo !== void 0 ? recargo : 0.21;
        this._detallesFactura = detalles !== null && detalles !== void 0 ? detalles : [];
        this._totalItems = this.calcularTotalItems(); // ***
        this._totalFinal = this.calcularTotalFinal();
    }
    Factura.prototype.agregarDetallesFactura = function (detalles) {
        for (var _i = 0, detalles_1 = detalles; _i < detalles_1.length; _i++) {
            var det = detalles_1[_i];
            this._detallesFactura.push(det);
        }
    };
    Object.defineProperty(Factura.prototype, "totalFinal", {
        get: function () { return this._totalFinal; } // ****
        ,
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Factura.prototype, "tipoPago", {
        get: function () { return this._tipoPago; },
        set: function (tipo) {
            if (['E', 'TD', 'TC', 'CC', 'TR'].indexOf(tipo) !== -1) {
                this._tipoPago = tipo;
            }
        },
        enumerable: false,
        configurable: true
    });
    Factura.prototype.calcularTotalItems = function () {
        var total = 0;
        for (var _i = 0, _a = this._detallesFactura; _i < _a.length; _i++) {
            var detalle = _a[_i];
            total += detalle.calcularSubTotal();
        }
        return this._totalItems = total;
    };
    Factura.prototype.calcularTotalFinal = function () {
        return this._totalFinal = this.calcularTotalItems() * (1 + this._recargo);
    };
    return Factura;
}());
exports.Factura = Factura;
// *** 
var TipoPago;
(function (TipoPago) {
    TipoPago[TipoPago["E"] = 0] = "E";
    TipoPago[TipoPago["TD"] = 1] = "TD";
    TipoPago[TipoPago["TC"] = 2] = "TC";
    TipoPago[TipoPago["CC"] = 3] = "CC";
    TipoPago[TipoPago["TR"] = 4] = "TR";
})(TipoPago || (TipoPago = {}));
