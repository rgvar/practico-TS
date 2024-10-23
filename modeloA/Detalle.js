"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Detalle = void 0;
var Detalle = /** @class */ (function () {
    function Detalle(kmSalida, kmRegreso, horaSalida, horaRegreso, minutoSalida, minutoRegreso, hojaRuta) {
        this._kmSalida = kmSalida;
        this._kmRegreso = kmRegreso;
        this._horaSalida = horaSalida;
        this._horaRegreso = horaRegreso;
        this._minutoSalida = minutoSalida;
        this._minutoRegreso = minutoRegreso;
        this._hojaRuta = hojaRuta;
    }
    Object.defineProperty(Detalle.prototype, "kmSalida", {
        get: function () {
            return this._kmSalida;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Detalle.prototype, "kmRegreso", {
        get: function () {
            return this._kmRegreso;
        },
        enumerable: false,
        configurable: true
    });
    return Detalle;
}());
exports.Detalle = Detalle;
