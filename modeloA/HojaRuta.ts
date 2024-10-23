import { Detalle } from "./Detalle";
import { Vehiculo } from "./Vehiculo";


export class HojaRuta {
    private _fecha:Date;
    private _numero:number;

    private _vehiculo:Vehiculo;
    private _detalles:Detalle[];

    constructor(fecha:Date, numero:number, vehiculo:Vehiculo, detalles?:Detalle[]) {
        this._fecha = fecha;
        this._numero = numero;
        this._vehiculo = vehiculo;
        this._detalles = detalles ?? [];
    }

    public calcularTotalKilometros():number {
        let totalKilometros:number = 0;
        for (const detalle of this._detalles) {
            totalKilometros += (detalle.kmRegreso - detalle.kmSalida);
        }
        return totalKilometros;
    }

    get fecha():Date {
        return this._fecha;
    }
    set detalles(nuevosDetalles: Detalle[]) {
        for (const det of nuevosDetalles) {
            this._detalles.push(det);
        }
    }

    public agregarDetalles(nuevosDetalles: Detalle[]) {
        for (const det of nuevosDetalles) {
            this._detalles.push(det);
        }
    }

}
