import { Detalle } from './Detalle';
import { Vehiculo } from './Vehiculo';
import { HojaRuta } from './HojaRuta';

export class TestA {



    public static test():void {
        const date1 = new Date(2024, 5, 9);
        const date2 = new Date(2026, 8, 1);
        const date3 = new Date(2023, 10, 15);

        const vehiculo = new Vehiculo("AE041CM", "PEUGEOT", "2016", []);



        const hojaRuta1 = new HojaRuta(date1, 4, vehiculo);
        hojaRuta1.detalles = [new Detalle(1000, 1200, 12, 14, 30, 45, hojaRuta1),
                        new Detalle(1200, 1300, 14, 15, 45, 15, hojaRuta1),
                        new Detalle(1300, 1500, 15, 17, 15, 30, hojaRuta1)
        ];


        const hojaRuta2 = new HojaRuta(date2, 5, vehiculo);
        hojaRuta2.agregarDetalles([new Detalle(1500, 1600, 8, 9, 30, 20, hojaRuta2),
                                new Detalle(1700, 1750, 8, 8, 15, 45, hojaRuta2),
                                new Detalle(1750, 1850, 8, 9, 45, 45, hojaRuta2)
        ]);


        const hojaRuta3 = new HojaRuta(date3, 6, vehiculo);
        hojaRuta3.agregarDetalles([new Detalle(2000, 2100, 10, 11, 0, 0, hojaRuta3),
                                new Detalle(2100, 2300, 11, 13, 30, 30, hojaRuta3),
                                new Detalle(2300, 2500, 13, 16, 30, 15, hojaRuta3)
        ]);

        vehiculo.setHojasRuta([hojaRuta1, hojaRuta2, hojaRuta3])

        console.log("El total de kilómetros recorridos del vehículo '" + vehiculo.marca + ":" + vehiculo.modelo + "' es de " + vehiculo.calcularTotalKilometrosRecorridos(new Date(2023,1,1), new Date(2030,1,1)) + " km.");
    }

}

