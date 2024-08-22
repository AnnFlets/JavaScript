//Clase base para representar un vehículo
class Vehiculo{
    marca;
    modelo;
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }

    //Método abstracto simulado
    informacionVehiculo(){
        throw new Error("Este método debe ser implementado por una subclase");
    }
}

//Clase derivada que implementa el método abstracto
class Coche extends Vehiculo{
    constructor(marca, modelo, puertas){
        super(marca, modelo);
        this.puertas = puertas;
    }
    //Implementación del método abstracto
    informacionVehiculo(){
        return `Coche: ${this.marca} ${this.modelo}, ${this.puertas} puertas`;
    }
}

const miCoche = new Coche("Toyota", "Corolla", 4);
console.log(miCoche.informacionVehiculo());

/*
ENCAPSULAMIENTO
Para hacer un método o atributo privado, se tiene que agregar un # antes del nombre de este. Ejemplo:
#edad
#getEdad
this.#getSaldo();
*/


