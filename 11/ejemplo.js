class Carro{
    marca = "";
    modelo = "";
    aceleracion = 0;
    constructor(aceleracion){
        this.aceleracion = aceleracion;
    }
}

let carro1 = new Carro(888);
let carro2 = new Carro(123);
console.log(carro1);
console.log(carro2);

class Persona{
    cui;
    nombre;
    apellido;
    fecha_nacimiento;
    genero;
    estatura;

    constructor(cui, nombre, genero){
        this.cui = cui;
        this.nombre = nombre;
        this.genero = genero;
        this.saludar();
    }

    saludar(){
        console.log("Hola, me llamo " + this.nombre);
    }

    //Parámetros
    velocidad(distancia, tiempo){
        const velocidad = distancia/tiempo;
        return velocidad;
    }

    static saltar(){
        console.log("La persona salta");
    }
}

let ayudante = new Persona(855651510101, "Ukikito", "M");

/*
let persona1 = new Persona();
persona1.cui = 1010101010;
persona1.nombre = "Roberto";
persona1.apellido = "Perez";
persona1.fecha_nacimiento = "15-01-2000";
persona1.genero = "M";
persona1.estatura = 1.40;
console.log(persona1);
persona1.saludar();
console.log(persona1.velocidad(10, 5));
*/

//Los métodos estáticos permiten utilizar dichos métodos a través del nombre de la clase, sin tener que instanciarla.
Persona.saltar();