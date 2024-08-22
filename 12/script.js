class ProductoElectronico{
    precio;
    marca;
    modelo;

    constructor(precio, marca, modelo){
        if(new.target === ProductoElectronico){
            throw new Error("No es posible instanciar una clase abstracta")
        }
        this.precio = precio;
        this.marca = marca;
        this.modelo = modelo;
    }
    
    getPrecio(){
        return this.precio;
    }

    getMarca(){
        return this.marca;
    }

    getModelo(){
        return this.modelo;
    }

    setPrecio(precio){
        this.precio = precio;
    }

    setMarca(marca){
        this.marca = marca;
    }

    setModelo(modelo){
        this.modelo = modelo;
    }
}

class TelefonoMovil extends ProductoElectronico{
    capacidadAlmacenamiento;
    duracionBateria;

    constructor(precio, marca, modelo, capacidadAlmacenamiento, duracionBateria){
        super(precio, marca, modelo);
        this.capacidadAlmacenamiento = capacidadAlmacenamiento;
        this.duracionBateria = duracionBateria;
    }

    getCapacidadAlmacenamiento(){
        return this.capacidadAlmacenamiento;
    }

    getDuracionBateria(){
        return this.duracionBateria;
    }

    setCapacidadAlmacenamiento(capacidadAlmacenamiento){
        this.capacidadAlmacenamiento = capacidadAlmacenamiento;
    }

    setDuracionBateria(duracionBateria){
        this.duracionBateria = duracionBateria;
    }
}

class Tableta extends ProductoElectronico{
    tamanoPantalla;
    resolucionPantalla;

    constructor(precio,marca, modelo, tamanoPantalla, resolucionPantalla){
        super(precio, marca, modelo);
        this.tamanoPantalla = tamanoPantalla;
        this.resolucionPantalla = resolucionPantalla;
    }

    getTamanoPantalla(){
        return this.tamanoPantalla;
    }

    getResolucionPantalla(){
        return this.resolucionPantalla;
    }

    setTamanoPantalla(tamanoPantalla){
        this.tamanoPantalla = tamanoPantalla;
    }

    setResolucionPantalla(resolucionPantalla){
        this.resolucionPantalla = resolucionPantalla;
    }
}

let telefono = new TelefonoMovil(1200, "Samsung", "Galaxy S31", "128GB", "36 horas");
let tablet = new Tableta(1800, "Samsung", "T2", 300, 25);

console.log("Marca: " + telefono.getMarca());
console.log("Modelo: " + telefono.getModelo());
console.log("Precio: " + telefono.getPrecio());
console.log("Capacidad de almacenamiento: " + telefono.getCapacidadAlmacenamiento());
console.log("Duración de la batería: " + telefono.getDuracionBateria());

console.log("Marca: " + tablet.getMarca());
console.log("Modelo: " + tablet.getModelo());
console.log("Precio: " + tablet.getPrecio());
console.log("Tamaño de pantalla: " + tablet.getTamanoPantalla());
console.log("Resolución de pantalla: " + tablet.getResolucionPantalla());