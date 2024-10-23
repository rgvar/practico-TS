import { HojaRuta } from "./HojaRuta";


export class Vehiculo {
    private _patente: string;
    private _marca: string;
    private _modelo: string;

    private _hojasDeRuta: HojaRuta[];

    constructor(patente:string,marca:string,modelo:string, hojasDeRuta:HojaRuta[]) {
        this._patente = patente;
        this._marca = marca;
        this._modelo = modelo;
        this._hojasDeRuta = hojasDeRuta;
    }

    public calcularTotalKilometrosRecorridos(fechaDesde:Date, fechaHasta:Date):number {

        const hojasDeRutaIntervalo:HojaRuta[] = this._hojasDeRuta.filter((hoja) =>  hoja.fecha >= fechaDesde && hoja.fecha <= fechaHasta);
        let totalKilometros:number = 0;
        for (const hojas of hojasDeRutaIntervalo) {
            totalKilometros += hojas.calcularTotalKilometros();
        }

        return totalKilometros;
    }

    public setHojasRuta(nuevasHojas:HojaRuta[]) {
        for(const hoja of nuevasHojas) {
            this._hojasDeRuta.push(hoja);
        }
    }

    get marca() {
        return this._marca;
    }
    get modelo() {
        return this._modelo;
    }

}

