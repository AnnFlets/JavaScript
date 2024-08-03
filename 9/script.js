//EJERCICIO #1
function primerEjercicio() {
    let dimension1 = 5;
    let dimension2 = 4;
    let matriz = [];
    for (let i = 0; i < dimension1; i++) {
        let arreglo = [];
        for (let j = 0; j < dimension2; j++) {
            let numero = Number(prompt("Ingrese el valor de la matriz en la posición [" + i + "][" + j + "]:"));
            arreglo.push(numero);
        }
        matriz.push(arreglo);
    }
    imprimirMatriz(dimension1, dimension2, matriz);
}

function imprimirMatriz(dimension1, dimension2, matriz){
    let strMatriz = "";
    const strDivision = "---------------------------------";
    for(let i = 0; i < dimension1; i++){
        strMatriz += strDivision + "\n";
        for(let j = 0; j < dimension2; j++){
            strMatriz += "|\t" + matriz[i][j] + "\t";
            if(j === (dimension2 - 1)){
                strMatriz += "|\n";
            }
        }
    }
    strMatriz += strDivision;
    console.log(strMatriz);
}

//EJERCICIO #2
let tablero = [];
let cantTrampas = [];
let trampasTablero = [];
const dimension1 = 8;
const dimension2 = 8;
let numeroDado = 0;
let casillaPersonaje = 1;

function segundoEjercicio() {
    limpiarVariables();
    generarTablero();
    generarCantidadTrampasSeccion();
    generarCasillasConTrampas();
    imprimirTablero();
    console.log("Trampas por sección: " + cantTrampas);
    console.log("Casillas con trampa: " + trampasTablero);
}

function limpiarVariables(){
    tablero = [];
    cantTrampas = [];
    trampasTablero = [];
    numeroDado = 0;
    casillaPersonaje = 1;
}

/*
Función que se encarga de generar la matriz que contendrá 
el tablero de juego de 8x8.
*/
function generarTablero(){
    for (let i = 0; i < dimension1; i++) {
        let arreglo = [];
        for (let j = 0; j < dimension2; j++) {
            if (i % 2 === 0) {
                arreglo.push((j + 1) + (i * dimension2));
            } else {
                arreglo.unshift((j + 1) + (i * dimension2));
            }
        }
        tablero.push(arreglo);
    }
}

/*
Función que genera la cantidad de trampas que habrá 
en cada sección del tablero (cada dos filas), teniendo
un mínimo de 2 y un máximo de 5 trampas por sección.
La cantidad de trampas por sección se almacena en un
arreglo.
*/
function generarCantidadTrampasSeccion(){
    const min = 2;
    const max = 5;
    for(let i = 0; i < (dimension1/2); i++){
        cantTrampas.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
}

/*
Función que se encarga de almacenar en un arreglo el número
de las casillas a las cuales se les ha asignado una trampa,
tomando en cuenta que dichos valores no se repitan y correspondan
a la sección del tablero correspondiente.
*/
function generarCasillasConTrampas(){
    let min = 1;
    let max = (dimension1 * 2);
    let casilla = 0;
    cantTrampas.forEach((trampas) => {
        let noRepetidas = 0;
        while(noRepetidas !== trampas){
            casilla = Math.floor(Math.random() * (max - min + 1) + min);
            if(!(trampasTablero.includes(casilla))){
                trampasTablero.push(casilla)
                noRepetidas += 1;
            }
        }
        min += (dimension1 * 2);
        max += (dimension1 * 2);
    });
}

/*
Función que se encarga de imprimir el tablero, mostrando las casillas,
el número que identifica a las mismas, las trampas existentes en
algunas de estas y la casilla en la que se encuentra el jugador.
*/
function imprimirTablero(){
    casillaPersonaje += numeroDado;
    if(casillaPersonaje > dimension1*dimension2){
        console.log("¡FELICIDADES! Terminó el juego");
        limpiarVariables();
        return
    }
    let strTablero = "";
    const strDivision = "-----------------------------------------------------------------";
    let strFila = "";
    let strFilaTrampa = "";
    let strFilaPersonaje = "";
    let esTrampa = false;
    for(let i = (tablero.length - 1); i > -1; i--){
        strFila = "";
        strFilaTrampa = "";
        strFilaPersonaje = "";
        for(let j = 0; j < tablero[i].length; j++){
            strFila += "|\t" + tablero[i][j] + "\t";
            if(trampasTablero.includes(tablero[i][j])){
                strFilaTrampa += "|\t#\t";
            }else{
                strFilaTrampa += "|\t \t";
            }
            if(casillaPersonaje === tablero[i][j]){
                strFilaPersonaje += "|\t@\t";
            }else{
                strFilaPersonaje += "|\t \t";
            }
            if(j === (tablero[i].length - 1)){
                strFila += "|";
                strFilaTrampa += "|";
                strFilaPersonaje += "|";
            }
            if(trampasTablero.includes(casillaPersonaje)){
                esTrampa = true;
            }
        }
        strTablero += strDivision + "\n" + strFila + "\n" + strFilaTrampa + "\n" + strFilaPersonaje + "\n";
    }
    strTablero += strDivision;
    console.log(strTablero);
    if(esTrampa){
        console.log("¡UPS! Cayó en una trampa")
    }
}

/*
Función que se encarga de generar un número aleatorio entre 1 y 6,
tomando en cuenta que este solo se generará si se ha creado un
tablero de juego con anterioridad.
*/
function lanzarDado(){
    if(tablero.length < 1){
            console.log("¡ERROR! Debe generar un nuevo tablero")
    }else{
        numeroDado = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        console.log("DADO LANZADO - Número obtenido: " + numeroDado);
        imprimirTablero();
    }
}