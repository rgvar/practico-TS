import { Articulo } from "./Articulo";
import { Cliente } from "./Cliente";
import { DetalleFactura } from "./DetalleFactura";
import { Factura } from "./Factura";


export class TestB {
    static test():void {

        const cliente = new Cliente(100, "Rodrigo Vargas", 20414430458);

        const articulos = [
            new Articulo(5, "Coca Cola botella 2.25 lts", 2625, "un"),
            new Articulo(541, "Agua mineral Villavicencio", 795, "lts"),
            new Articulo(222, "Fernet Branca botella 750 cc", 12400, "un"),
            new Articulo(306, "Sprite botella 2.25 lts", 2500, "un"),
            new Articulo(600, "Cerveza Schneider", 3509, "lts"),
        ]

        const facturas = [
            new Factura("C", 105, cliente, 'E', new Date(2024, 7, 15)),
            new Factura("C", 170, cliente, 'CC', new Date(2024,8,12)),
            new Factura("C", 200, cliente, 'CC'),
        ]

        const detalles = [
            new DetalleFactura(4,articulos[0],facturas[0]),
            new DetalleFactura(3,articulos[2],facturas[0]),
            new DetalleFactura(5,articulos[1],facturas[1]),
            new DetalleFactura(5,articulos[3],facturas[1]),
            new DetalleFactura(10,articulos[4],facturas[2]),
            new DetalleFactura(10,articulos[1],facturas[2]),
        ]

        facturas[0].agregarDetallesFactura([detalles[0], detalles[1]]);
        facturas[1].agregarDetallesFactura([detalles[2], detalles[3]]);
        facturas[2].agregarDetallesFactura([detalles[4], detalles[5]]);

        
        console.log(cliente.totalFacturadoXTipoPago('CC'));

    }
}