import { HojaRuta } from "./HojaRuta";

export class Detalle {
    private _kmSalida:number;
    private _kmRegreso:number;
    private _horaSalida:number;
    private _horaRegreso:number;
    private _minutoSalida:number;
    private _minutoRegreso:number;
    
    private _hojaRuta:HojaRuta;
    
    constructor(kmSalida:number,kmRegreso:number,horaSalida:number,horaRegreso:number,minutoSalida:number,minutoRegreso:number, hojaRuta:HojaRuta) {
        this._kmSalida = kmSalida;
        this._kmRegreso = kmRegreso;
        this._horaSalida = horaSalida;
        this._horaRegreso = horaRegreso;
        this._minutoSalida = minutoSalida;
        this._minutoRegreso = minutoRegreso;
        this._hojaRuta = hojaRuta;
    }

    get kmSalida(): number {
        return this._kmSalida;
    }
    
    get kmRegreso():number {
        return this._kmRegreso;
    }

}
