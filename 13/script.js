class Tablero {
    #filas;
    #columnas;
    #casillas = [];
    #trampasSeccion = [];
    #trampas = [];
    #casillaPersonaje = 0;

    constructor(filas, columnas) {
        this.#filas = filas;
        this.#columnas = columnas;
    }
    
    setCasillaPersonaje(numeroDado){
        this.#casillaPersonaje += numeroDado;
    }

    generarTablero() {
        for (let i = 0; i < this.#filas; i++) {
            let arreglo = [];
            for (let j = 0; j < this.#columnas; j++) {
                if (i % 2 === 0) {
                    arreglo.push((j + 1) + (i * this.#columnas));
                } else {
                    arreglo.unshift((j + 1) + (i * this.#columnas));
                }
            }
            this.#casillas.push(arreglo);
        }
        this.#generarCantidadTrampasSeccion(2, 5);
        this.#generarCasillasConTrampas();
    }

    #generarCantidadTrampasSeccion(min, max) {
        for (let i = 0; i < (this.#filas / 2); i++) {
            this.#trampasSeccion.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
    }

    #generarCasillasConTrampas() {
        let min = 1;
        let max = (this.#filas * 2);
        let casilla = 0;
        this.#trampasSeccion.forEach((trampas) => {
            let noRepetidas = 0;
            while (noRepetidas !== trampas) {
                casilla = Math.floor(Math.random() * (max - min + 1) + min);
                if (!(this.#trampas.includes(casilla))) {
                    this.#trampas.push(casilla)
                    noRepetidas += 1;
                }
            }
            min += (this.#filas * 2);
            max += (this.#filas * 2);
        });
    }

    imprimirTablero() {
        if (this.#casillaPersonaje > this.#filas * this.#columnas) {
            console.log("¡FELICIDADES! Terminó el juego");
            tableroActivo = false;
            return
        }
        let strTablero = "";
        const strDivision = "-----------------------------------------------------------------";
        let strFila = "";
        let strFilaTrampa = "";
        let strFilaPersonaje = "";
        let esTrampa = false;
        for (let i = (this.#casillas.length - 1); i > -1; i--) {
            strFila = "";
            strFilaTrampa = "";
            strFilaPersonaje = "";
            for (let j = 0; j < this.#casillas[i].length; j++) {
                strFila += "|\t" + this.#casillas[i][j] + "\t";
                if (this.#trampas.includes(this.#casillas[i][j])) {
                    strFilaTrampa += "|\t#\t";
                } else {
                    strFilaTrampa += "|\t \t";
                }
                if (this.#casillaPersonaje === this.#casillas[i][j]) {
                    strFilaPersonaje += "|\t@\t";
                } else {
                    strFilaPersonaje += "|\t \t";
                }
                if (j === (this.#casillas[i].length - 1)) {
                    strFila += "|";
                    strFilaTrampa += "|";
                    strFilaPersonaje += "|";
                }
                if (this.#trampas.includes(this.#casillaPersonaje)) {
                    esTrampa = true;
                }
            }
            strTablero += strDivision + "\n" + strFila + "\n" + strFilaTrampa + "\n" + strFilaPersonaje + "\n";
        }
        strTablero += strDivision;
        console.log(strTablero);
        if (esTrampa) {
            console.log("¡UPS! Cayó en una trampa")
        }
    }
}

let tableroActivo = false;
let tablero;

function crearTablero() {
    tablero = new Tablero(8, 8);
    tablero.generarTablero();
    tablero.imprimirTablero();
    tableroActivo = true;
}

function lanzarDado() {
    if (!tableroActivo) {
        console.log("¡ERROR! Debe generar un nuevo tablero")
    } else {
        let numeroDado = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        console.log("DADO LANZADO - Número obtenido: " + numeroDado);
        tablero.setCasillaPersonaje(numeroDado);
        tablero.imprimirTablero();
    }
}