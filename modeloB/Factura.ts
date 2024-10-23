import { Cliente } from "./Cliente";
import { DetalleFactura } from "./DetalleFactura";


export class Factura{
    private _letra:string;
    private _numero:number;
    private _recargo:number;
    private _tipoPago:string;
    private _totalItems:number;
    private _totalFinal:number;
    private _fecha:Date;

    private _cliente:Cliente;

    private _detallesFactura:DetalleFactura[];

    constructor(letra:string,numero:number,cliente:Cliente,tipoPago?:string,fecha?:Date,recargo?:number, detalles?:DetalleFactura[]) {
        this._letra = letra;
        this._numero = numero;
        this._cliente = cliente;
        this._tipoPago = tipoPago ?? ""; // ***
        this._fecha = fecha ?? new Date();
        this._recargo = recargo ?? 0.21;
        
        this._detallesFactura = detalles ?? [];

        this._totalItems = this.calcularTotalItems(); // ***
        this._totalFinal = this.calcularTotalFinal();

    }

    agregarDetallesFactura(detalles:DetalleFactura[]):void {
        for (const det of detalles) {
            this._detallesFactura.push(det);
        }
    }

    get totalFinal() { return this._totalFinal; } // ****

    get tipoPago() { return this._tipoPago; }
    set tipoPago(tipo:string) {
        if (['E', 'TD', 'TC', 'CC', 'TR'].indexOf(tipo) !== -1) {
            this._tipoPago = tipo;
        }
    }

    calcularTotalItems():number {
        let total = 0;
        for (const detalle of this._detallesFactura) {
            total += detalle.calcularSubTotal();
        }
        return this._totalItems = total;
    }

    calcularTotalFinal():number {
        return this._totalFinal = this.calcularTotalItems() * (1+this._recargo);
    }
    
}

// *** 
enum TipoPago {
    'E','TD', 'TC', 'CC', 'TR'
}