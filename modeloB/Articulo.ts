import { DetalleFactura } from "./DetalleFactura";


export class Articulo {

    private _codigo:number;
    private _denominacion:string;
    private _precio:number;
    private _unidadMedida:string;

    private _detallesFactura:DetalleFactura[];

    constructor(codigo:number,denominacion:string,precio:number,unidadMedida:string, detalles?:DetalleFactura[]) {
        this._codigo=codigo;
        this._denominacion=denominacion;
        this._precio=precio;
        this._unidadMedida=unidadMedida;
        this._detallesFactura=detalles ?? [];
    }

    get precio() {return this._precio;}

    agregarDetallesFactura(detalles:DetalleFactura[]) {
        for (const det of detalles) {
            this._detallesFactura.push(det);
        }
    }

}
