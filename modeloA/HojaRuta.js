"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HojaRuta = void 0;
var HojaRuta = /** @class */ (function () {
    function HojaRuta(fecha, numero, vehiculo, detalles) {
        this._fecha = fecha;
        this._numero = numero;
        this._vehiculo = vehiculo;
        this._detalles = detalles !== null && detalles !== void 0 ? detalles : [];
    }
    HojaRuta.prototype.calcularTotalKilometros = function () {
        var totalKilometros = 0;
        for (var _i = 0, _a = this._detalles; _i < _a.length; _i++) {
            var detalle = _a[_i];
            totalKilometros += (detalle.kmRegreso - detalle.kmSalida);
        }
        return totalKilometros;
    };
    Object.defineProperty(HojaRuta.prototype, "fecha", {
        get: function () {
            return this._fecha;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HojaRuta.prototype, "detalles", {
        set: function (nuevosDetalles) {
            for (var _i = 0, nuevosDetalles_1 = nuevosDetalles; _i < nuevosDetalles_1.length; _i++) {
                var det = nuevosDetalles_1[_i];
                this._detalles.push(det);
            }
        },
        enumerable: false,
        configurable: true
    });
    HojaRuta.prototype.agregarDetalles = function (nuevosDetalles) {
        for (var _i = 0, nuevosDetalles_2 = nuevosDetalles; _i < nuevosDetalles_2.length; _i++) {
            var det = nuevosDetalles_2[_i];
            this._detalles.push(det);
        }
    };
    return HojaRuta;
}());
exports.HojaRuta = HojaRuta;
