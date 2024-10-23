"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(patente, marca, modelo, hojasDeRuta) {
        this._patente = patente;
        this._marca = marca;
        this._modelo = modelo;
        this._hojasDeRuta = hojasDeRuta;
    }
    Vehiculo.prototype.calcularTotalKilometrosRecorridos = function (fechaDesde, fechaHasta) {
        var hojasDeRutaIntervalo = this._hojasDeRuta.filter(function (hoja) { return hoja.fecha >= fechaDesde && hoja.fecha <= fechaHasta; });
        var totalKilometros = 0;
        for (var _i = 0, hojasDeRutaIntervalo_1 = hojasDeRutaIntervalo; _i < hojasDeRutaIntervalo_1.length; _i++) {
            var hojas = hojasDeRutaIntervalo_1[_i];
            totalKilometros += hojas.calcularTotalKilometros();
        }
        return totalKilometros;
    };
    Vehiculo.prototype.setHojasRuta = function (nuevasHojas) {
        for (var _i = 0, nuevasHojas_1 = nuevasHojas; _i < nuevasHojas_1.length; _i++) {
            var hoja = nuevasHojas_1[_i];
            this._hojasDeRuta.push(hoja);
        }
    };
    Object.defineProperty(Vehiculo.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehiculo.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        enumerable: false,
        configurable: true
    });
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
