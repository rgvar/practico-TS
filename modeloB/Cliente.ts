import { Factura } from "./Factura";

export class Cliente {

    private _numero:number;
    private _razonSocial:string;
    private _cuit:number;

    private _facturas:Factura[];

    constructor(numero:number,razonSocial:string,cuit:number,facturas?:Factura[]) {
        this._numero=numero;
        this._razonSocial=razonSocial;
        this._cuit=cuit;
        this._facturas = facturas ?? [];
    }

    totalFacturadoXTipoPago(tipoPago:string):number {
        let total:number=0;
        if (['E', 'TD', 'TC', 'CC', 'TR'].indexOf(tipoPago) !== -1) {
            let facturasFiltradas:Factura[] = this._facturas.filter((fac) => fac.tipoPago == tipoPago);
            for (const factura of facturasFiltradas) {
                total += factura.calcularTotalFinal();
            }
        } else {
            
            for (const factura of this._facturas) {
                total += factura.calcularTotalFinal();
            }
        }
        return total;
    }

    agregarFacturas(facturas:Factura[]):void {
        for (const fac of facturas) {
            this._facturas.push(fac);
        }
    }
}