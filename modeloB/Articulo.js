"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Articulo = void 0;
var Articulo = /** @class */ (function () {
    function Articulo(codigo, denominacion, precio, unidadMedida, detalles) {
        this._codigo = codigo;
        this._denominacion = denominacion;
        this._precio = precio;
        this._unidadMedida = unidadMedida;
        this._detallesFactura = detalles !== null && detalles !== void 0 ? detalles : [];
    }
    Object.defineProperty(Articulo.prototype, "precio", {
        get: function () { return this._precio; },
        enumerable: false,
        configurable: true
    });
    Articulo.prototype.agregarDetallesFactura = function (detalles) {
        for (var _i = 0, detalles_1 = detalles; _i < detalles_1.length; _i++) {
            var det = detalles_1[_i];
            this._detallesFactura.push(det);
        }
    };
    return Articulo;
}());
exports.Articulo = Articulo;
