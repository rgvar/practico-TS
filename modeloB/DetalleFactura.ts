import { Articulo } from "./Articulo";
import { Factura } from "./Factura";


export class DetalleFactura {

    private _cantidad:number;
    private _subtotal:number;

    private _factura:Factura;

    private _articulo:Articulo;

    constructor(cantidad:number, articulo:Articulo, factura:Factura) {
        this._cantidad = cantidad;
        this._articulo = articulo;
        this._factura = factura;
        this._subtotal = this.calcularSubTotal();
    }

    calcularSubTotal():number {
        return this._subtotal = this._cantidad * this._articulo.precio;
    }

    get subtotal() { 
        return this._subtotal; 
    }

}